"use client";
import { CreatePost } from "../../../DBUtility/db";

import { useState } from "react";

function Post() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [contact, setContact] = useState("");
  const [file, setFile] = useState("");
  const newDate = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  function submitHandler() {
    CreatePost(title, message, contact);
    setTitle("");
    setMessage("");
    setContact("");
  }
  return (
    <>
      <h1 className="text-white text-4xl font-bold text-center my-4">
        Lost Something?{" "}
        <p className="text-blue-400 inline-block">Post Something!</p>
      </h1>
      <form
        className="block w-[80%] mx-auto text-white"
        onSubmit={submitHandler}
      >
        <input
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="block w-2/6 h-8 my-4 pl-2 rounded-full outline-none bg-gray-700 
          focus:ring-2 placeholder:text-blue-400 placeholder:font-bold"
        />
        <p className="bg-blue-400 font-bold mb-1 inline-block px-1 rounded-full">
          {newDate}
        </p>
        <textarea
          placeholder="Enter Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="block w-2/3 bg-gray-700 mb-4 py-1 px-2 rounded-lg min-h-40
          focus:ring-2 placeholder:text-blue-400 placeholder:font-bold"
        />
        <input
          placeholder="Enter Contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          required
          className="block bg-gray-700 px-2 rounded-full
          focus:ring-2 placeholder:text-blue-400 placeholder:font-bold"
        />
        <button
          type="submit"
          className="bg-green-500 rounded-full px-1 my-2 font-bold"
        >
          Create Post
        </button>
      </form>
    </>
  );
}

export default Post;
