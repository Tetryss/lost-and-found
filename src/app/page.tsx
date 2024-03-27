export default function Home() {
  const boxStyle =
    "font-bold text-3xl bg-gray-800 text-white rounded-xl p-1 flex justify-center items-center transition-all duration-300 ease-in-out hover:scale-110 hover:ring-2 hover:shadow-xl";
  return (
    <>
      <h1 className="text-white font-bold text-3xl text-center my-4">
        Home <span className="text-sky-400">Page!</span>
      </h1>
      <div className="mx-auto w-[60%] grid grid-cols-3 auto-rows-[80px] gap-3">
        <div className={`${boxStyle} col-span-2 row-span-4`}>
          Welcome to <span className="p-2 text-sky-400">BOX</span> Lost and
          Found!
        </div>
        <div
          className={`${boxStyle} text-sky-400 text-5xl col-span-2 row-span-2`}
        >
          ボックス
        </div>
        <div className={`${boxStyle}`}>Lost?</div>
        <div className={`${boxStyle} text-sky-400`}>Found!</div>
        <div
          className={`${boxStyle} col-span-2 row-span-3 col-start-3 row-start-3`}
        >
          Start Posting Now!
        </div>
      </div>
    </>
  );
}
