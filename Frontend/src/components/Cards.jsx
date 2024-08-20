import React from 'react'

function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border"> {/* The last three means in dark mode the colour of bg and text will change accordingly*/}
          <figure>
            <img
              src={item.image}
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
               {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions flex justify-between">
              <div className="badge badge-outline">Rs.{item.price}</div>
              <div className="cursor-pointer px-2 py-1 rounded-full border-[2] hover:bg-pink-500 hover:text-white  duration-300">Read now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards