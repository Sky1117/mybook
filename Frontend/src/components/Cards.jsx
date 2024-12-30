import React from "react";

export default function ({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3 ">
        <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img
              className="w-full h-48 object-contain mt-5 "
              src={item.image}
              alt="Books"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="badge badge-outline hover:bg-pink-500 hover:text-white duration-200 cursor-pointer px-2 py-1 rounded-full border-[2px]">
                Read Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
