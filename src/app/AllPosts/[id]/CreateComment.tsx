"use client";
import { useState } from "react";
import { AddComment } from "../../../../DBUtility/db";
import { useRouter } from "next/navigation";

function CreateComment({ id }) {
  const [message, setMessage] = useState("");

  const router = useRouter();

  function Create(e: any) {
    e.preventDefault();
    AddComment(id, message);
    setMessage("");
    router.refresh();
  }

  return (
    <>
      <form onSubmit={Create} className="inline-block w-[40%] relative">
        <textarea
          placeholder="Enter a Comment"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="text-white bg-slate-700 min-w-[70%] rounded-lg 
          outline-none focus:ring-2 focus:ring-blue-400
          p-2 mb-4"
        />
        <button
          className="absolute right-[15rem] top-[-0.5rem] text-white text-sm font-bold bg-green-500 rounded-full px-1"
          type="submit"
        >
          Post Comment
        </button>
      </form>
    </>
  );
}

export default CreateComment;
