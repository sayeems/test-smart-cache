import Image from "next/image";
import Link from "next/link";
import { NextResponse } from "next/server";
// import {
//   setEdgeHeader,
//   setSurrogateKeyHeader,
// } from "@pantheon-systems/wordpress-kit";

let httpResponse = NextResponse.next();

export const dynamic = "force-dynamic";

async function fetchData() {
  const endpoint =
    "https://live-june-23-test-smart-cache.pantheonsite.io/graphql";
  const query = `
  query {
    posts {
      nodes {
        id
        slug
        title
        featuredImage {
          node {
            sourceUrl(size: LARGE)
          }
        }
        excerpt
      }
    }
  }
`;
  let response = await fetch(`${endpoint}?query=${encodeURIComponent(query)}`, {
    method: "GET",
    headers: {
      "Fastly-Debug": "1",
    },
  });

  // httpResponse.headers.set("sayeem", "hello");
  // httpResponse.headers.append(
  //   "surrogate-key",
  //   response.headers.get("surrogate-key")
  // );
  // httpResponse.headers.append(
  //   "cache-control",
  //   "public, max-age=604800, must-revalidate"
  // );
  // httpResponse.headers.append("sayeem", "test");

  // setEdgeHeader({ NextResponse });

  // return {
  //   data: await response.json(),
  //   surrogateKey: response.headers.get("surrogate-key"),
  // };

  // setEdgeHeader(httpResponse);

  return NextResponse.json(
    {
      data: await response.json(),
      surrogateKey: response.headers.get("surrogate-key"),
    },
    {
      status: 200,
      headers: {
        "x-presented-by": "sayeem",
      },
    }
  );
}

export default async function Home() {
  let data = await fetchData();
  data = await data.json();
  const {
    data: {
      data: {
        posts: { nodes },
      },
    },
  } = data;

  httpResponse.headers.set("x-mytest-h", "hello");

  return (
    <main className="grid grid-cols-3 gap-6 pb-20">
      {nodes.map((post) => {
        return (
          <div
            key={post.id}
            className="border border-slate-300 rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src={post.featuredImage.node.sourceUrl}
              alt={post.slug}
              width={100}
              height={100}
              layout="responsive"
              className="my-0 w-full"
            />
            <div className="px-3">
              <div>
                <h3 className="my-2">
                  <Link className="text-indigo-500" href={`/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
              </div>
              <div
                className="h-25 text-slate-600 pb-4"
                dangerouslySetInnerHTML={{ __html: post.excerpt }}
              ></div>
            </div>
          </div>
        );
      })}
    </main>
  );
}
