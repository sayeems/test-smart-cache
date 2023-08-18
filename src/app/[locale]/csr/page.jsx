"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function TestCSR() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const response = await fetch(
        "https://live-june-23-test-smart-cache.pantheonsite.io/wp-json/wp/v2/posts?_embed"
      );
      const posts = await response.json();

      setData(posts);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-3 gap-6 pb-20">
        {!loading &&
          data.map((post, index) => (
            <div
              className="border border-rounded border-green-200"
              key={post.slug}
            >
              <div className="imageWrapper">
                <Image
                  src={post._embedded["wp:featuredmedia"][0].source_url}
                  alt={post.slug}
                  width={100}
                  height={100}
                  layout="responsive"
                  className="my-0 w-full"
                />
              </div>
              <div className="postTitle">
                <h3>
                  <Link href={`/${post.slug}`}>{post.title.rendered}</Link>
                </h3>
              </div>
            </div>
          ))}
      </div>
      {loading && <h1>loading...</h1>}
    </div>
  );
}
