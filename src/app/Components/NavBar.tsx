"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import BoxIcon from "./BoxIcon";
export default function NavBar() {
  const [currentPath, setCurrentPath] = useState("");

  function clickHandler(event: any) {
    setCurrentPath(event.currentTarget.pathname);
  }

  useEffect(() => {
    console.log(currentPath);
  }, [currentPath]);

  return (
    <>
      <nav
        className="bg-gray-800 mx-auto rounded-full w-fit h-12 flex gap-12 px-8 
      justify-center items-center m-2 "
      >
        <Link href="/" onClick={clickHandler}>
          <BoxIcon
            className={`fill-white  hover:fill-sky-600 hover:w-12 hover:h-12 transition-all ease-out 
              ${currentPath === "/" ? "fill-sky-600" : ""}`}
          />
        </Link>
        <Link
          className={
            linkStyle + ` ${currentPath === "/AllPosts" ? "bg-sky-600" : ""}`
          }
          href="/AllPosts"
          onClick={clickHandler}
        >
          All Posts
        </Link>
        <Link
          className={
            linkStyle + ` ${currentPath === "/Post" ? "bg-sky-600" : ""}`
          }
          href="/Post"
          onClick={clickHandler}
        >
          Post
        </Link>
      </nav>
    </>
  );
}

const linkStyle = `text-gray-200 font-bold rounded-full px-2 hover:text-xl hover:bg-sky-600 transition-all ease-linear duration-100`;
