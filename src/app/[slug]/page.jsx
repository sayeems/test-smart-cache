import Image from "next/image";

// GraphQL call with GET method
async function fetchData(slug) {
  // WP backend GQL endpoint
  const endpoint =
    "https://live-june-23-test-smart-cache.pantheonsite.io/graphql";

  // params to object
  const variables = {
    slug: slug,
  };

  // QGL Query to grab a post by slug
  const query = `
  query postBySlug($slug: String!){
    postBy(
      slug: $slug
    ) {
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
      title(format: RENDERED)
      content(format: RENDERED)
      author {
        node {
          name
        }
      }
    }
  }
`;

  try {
    const response = await fetch(
      `${endpoint}?query=${encodeURIComponent(
        query
      )}&variables=${encodeURIComponent(JSON.stringify(variables))}`,
      {
        method: "GET",
        headers: {
          "Fastly-Debug": "1",
        },
        cache: "no-store",
      }
    );

    return await response.json();
  } catch (err) {
    console.log("GQL error:", err);
    throw new Error("Something went wrong while fetching data for this page.");
  }
}

export default async function Post({ params }) {
  const {
    data: {
      postBy: { title, date, featuredImage, content, author },
    },
  } = await fetchData(params.slug);

  return (
    <div>
      <h1>{title}</h1>
      <p className="text-sm text-slate-400 italic">
        Author: {author.node.name} - {date}
      </p>
      <div>
        <Image
          src={featuredImage.node.sourceUrl}
          width={300}
          height={300}
          alt={title}
          layout="responsive"
          className="w-full rounded-lg"
        />
      </div>
      <div
        className="h-25 text-slate-600 pb-4"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
}
