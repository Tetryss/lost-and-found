"use client";
import { useEffect, useState } from "react";
import CreateComment from "./CreateComment";
import Show from "./Show";

function PostPage({ params }: any) {
  const [post, setPost] = useState<{
    Title: string;
    DatePosted: string;
    Found: boolean;
    Contact: string;
    Message: string;
    Photo?: string;
  }>();
  const [found, setFound] = useState<boolean>();

  useEffect(() => {
    async function fetchPost() {
      const post = await getPost(params.id);
      setPost(post);
      setFound(post.Found);
    }
    fetchPost();
  }, []);

  useEffect(() => {
    console.log(found);
  }, [found]);

  function clickHandler() {
    if (post && found !== undefined) {
      updateResolution(found, params.id);
      setFound((x) => !x);
      console.log(found);
    }
  }
  return (
    <>
      {post ? (
        <div className="text-white p-4 ml-24 w-[45%] float-left mr-20">
          <div className="relative">
            <h1 className="my-8 bg-gray-800 text-blue-400 font-bold text-3xl inline-block px-3 py-3 rounded-full">
              {post.Title}
            </h1>
            <p className="absolute top-4 bg-sky-700 rounded-3xl px-1 font-bold ring-2 ring-gray-900">
              {DateFormatter(post.DatePosted)}
            </p>
            <p
              onClick={clickHandler}
              className={`${
                post.Found ? "bg-green-600" : "bg-red-500"
              } inline-block font-bold rounded-full px-1 relative left-[-5rem] bottom-[-1.8rem] ring-2 ring-gray-900
              hover:cursor-pointer`}
            >
              {post.Found ? "Solved" : "Unsolved"}
            </p>
          </div>
          <div className="px-3">
            <p className="text-xl">
              Contact:{" "}
              <span className="text-blue-400 font-bold">
                {post.Contact.includes("@") ? (
                  <a href={`mailto:${post.Contact}`}>{post.Contact}</a>
                ) : (
                  post.Contact
                )}
              </span>
            </p>
            <div className="bg-gray-800 text-lg h-fit min-h-[40vh] rounded-lg p-2 my-4">
              <p className="mb-4">{post.Message}</p>
              {post.Photo ? (
                <img
                  className="max-w-[80%]"
                  src={`http://127.0.0.1:8090/api/files/${post.collectionId}/${post.id}/${post.Photo}`}
                />
              ) : null}
            </div>
            <p className="text-gray-500 font-bold">
              Has this post been resolved? 0/2
            </p>
          </div>
        </div>
      ) : null}
      <div className="mt-[5.5rem]">
        <CreateComment id={params.id} />
        <Show id={params.id} />
      </div>
    </>
  );
}

async function updateResolution(value: boolean, postID: string) {
  const body = {
    Found: !value,
  };
  await fetch(`http://127.0.0.1:8090/api/collections/Posts/records/${postID}`, {
    method: "PATCH",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

async function getPost(postID: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/Posts/records/${postID}`,
    {
      next: { revalidate: 2 },
    }
  );
  const post = await res.json();
  return post;
}
function DateFormatter(date: string): string {
  const newDate = new Date(date);

  const formatted = newDate.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  return formatted;
}
export default PostPage;
