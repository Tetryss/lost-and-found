"use client";
import { RecordModel } from "pocketbase";
import { GetComments } from "../../../../DBUtility/db";

import { useEffect, useState } from "react";

function Show({ id }) {
  const [comments, setComments] = useState<RecordModel[]>();

  useEffect(() => {
    async function fetchComments() {
      const comments = await GetComments(id);
      setComments(comments);
    }
    fetchComments();
  }, []);

  return (
    <div className="flex flex-col-reverse gap-4 text-white  w-[40%] rounded-lg">
      {comments?.map((x: any) => (
        <div
          className="relative my-1 w-[90%] bg-gray-800 p-4 rounded-md"
          key={x.id}
          id={`comment-${x.id}`}
        >
          <p className="absolute bg-sky-700 rounded-full px-1 font-bold text-sm top-[-0.5rem]">
            {DateFormatter(x.created)}
          </p>
          <p>{x.message}</p>
          <button
            onClick={() => DeleteComment(x.id)}
            className="absolute right-0 bg-red-500 ring-2 ring-gray-900 font-bold rounded-full px-1"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

async function DeleteComment(id: any) {
  const commentElement = document.getElementById(`comment-${id}`);
  if (commentElement) {
    commentElement.remove();
  }
  await fetch(`http://127.0.0.1:8090/api/collections/Comments/records/${id}`, {
    method: "DELETE",
    next: { revalidate: 1 },
  });
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
export default Show;
