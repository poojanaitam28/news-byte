import React from "react";
import { useGlobalContext } from "../context/ApiContext";

function Pagination() {
  const {page, nbPages, getPrevPage, getNextPage} =useGlobalContext()
  return (
    <>
      <div className=" w-full flex items-center justify-center space-x-6 bg-slate-00 p-2 mt-6">
        <button className="px-5 py-2 bg-black text-white hover:bg-opacity-70" onClick={() => getPrevPage()}>PREV</button>
        <p className="text-lg">{page + 1} of {nbPages}</p>
        <button className="px-5 py-2 bg-black text-white hover:bg-opacity-70" onClick={() => getNextPage()}>NEXT</button>
      </div>
    </>
  );
}

export default Pagination;
