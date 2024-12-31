import React from "react";
import { useGlobalContext } from "../context/ApiContext";
import "../Styles/style.css";

function Posts() {
  const { hits, isLoading, removePost } = useGlobalContext();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <h1 className="spinner"> </h1>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-slate-00 p-2 mt-2">
      <div className="bg-blue-00 p-1 w-[60%] m-auto h-auto">
        {hits.map((currPost) => {
          const { title, author, num_comments, url, objectID } = currPost;
          return (
            <div
              key={objectID}
              className="card w-full h-[22vh] rounded-xl mt-4 bg-blue-200 px-8 py-5 shadow-lg"
            >
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="mt-2">
                <span>{author}</span> | <span>{num_comments}</span>{" "}
              </p>
              <div className="mt-5 flex space-x-3">
                <a
                  className="border border-black px-3 py-1.5 rounded-2xl text-sm hover:text-white hover:bg-gray-900  transition-colors duration-200"
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Read More 
                </a>
                <a
                  className="border border-black px-3 py-1.5 rounded-2xl text-sm hover:text-white hover:bg-gray-900  transition-all duration-200"
                  href="#"
                  onClick={() => removePost(objectID)}
                >
                  Remove
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
