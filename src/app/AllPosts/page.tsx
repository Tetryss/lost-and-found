import Link from "next/link";
import {
  GetPosts,
  CreatePost,
  UpdatedPost,
  DeletePost,
} from "../../../DBUtility/db";

// This is for NO CACHING, re-fetch() every time
export const dynamic = "auto",
  dynamicParams = true,
  revalidate = 0,
  fetchCache = "auto",
  runtime = "nodejs",
  preferredRegion = "auto";

function DateFormatter(date: string): string {
  const newDate = new Date(date);

  const formatted = newDate.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  return formatted;
}

async function Posts() {
  const data = await GetPosts();
  return (
    <>
      <h1 className="text-white text-5xl text-center font-bold">
        All <span className="text-blue-400">Posts</span>
      </h1>
      <div className=" flex gap-5 items-center flex-wrap flex-col-reverse m-5">
        {data.map((item) => (
          <Link
            href={`/AllPosts/${item.id}`}
            className="bg-gray-800 w-[40rem] p-4 rounded-lg
            text-white hover:cursor-pointer relative hover:ring-2"
            key={item.id}
          >
            <h2 className="text-2xl text-blue-400 font-bold">{item.Title}</h2>
            {item.Found ? (
              <span className="absolute right-2 top-2 flex h-3 w-3">
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
              </span>
            ) : (
              <span className="absolute right-2 top-2 flex h-3 w-3">
                <span
                  className="animate-ping absolute inline-flex h-full w-full 
                  rounded-full bg-red-500 opacity-75"
                ></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
            )}
            <p className="my-8">{item.Message}</p>
            <p
              className="absolute bottom-4 bg-gray-900 inline-block px-1 rounded-md 
            ring-1 ring-gray-950 text-sm "
            >
              {DateFormatter(item.DatePosted)}
            </p>
            <p className="text-right  font-bold">{item.Contact}</p>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Posts;
