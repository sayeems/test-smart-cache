const endpoint = "https://your-wordpress-site.com/graphql";
const postId = 1; // The ID of the post you want to retrieve

const query = `
  query GetPost($postId: ID!) {
    post(id: $postId) {
      title
      content
    }
  }
`;

const variables = {
  postId: postId,
};

const queryParams = `query=${encodeURIComponent(
  query
)}&variables=${encodeURIComponent(JSON.stringify(variables))}`;

fetch(`${endpoint}?${queryParams}`)
  .then((response) => response.json())
  .then((data) => {
    console.log("WPGraphQL data:", data);
  })
  .catch((error) => {
    console.error("Error fetching WPGraphQL data:", error);
  });
