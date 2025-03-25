import React from "react";

const Blogs = () => {
  return (
    <main data-aos="fade-up" data-aos-offset="200">
    <section className="container mx-auto mb-10 py-8 px-4">
      <h1 className="mb-8 py-2 text-center text-3xl font-bold">
        Our Latest Blogs
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        <div
          id="card"
          className="overflow-hidden rounded-lg p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950"
        >
          <div className="aspect-video overflow-hidden rounded">
            <img
              src='https://picsum.photos/id/48/800/450'
              alt="Business growth strategies"
              className="h-full w-full object-cover transition duration-700 hover:scale-110"
            />
          </div>
          <div className="flex justify-between pt-3 text-sm text-slate-600">
            <p>April 24, 2022</p>
            <p className="line-clamp-1"> By Darshan</p>
          </div>
          <div className="space-y-2 py-3">
            <h1 className="line-clamp-1 text-xl font-bold">
              How to grow your business. How to grow your business.
            </h1>
            <p className="line-clamp-2 text-slate-700 dark:text-slate-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. amet
              consectetur adipisicing elit.
            </p>
          </div>
        </div>
        
        <div
          id="card"
          className="overflow-hidden rounded-lg p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950"
        >
          <div className="aspect-video overflow-hidden rounded">
            <img
              src='https://picsum.photos/id/1/800/450'
              alt="Marketing strategies"
              className="h-full w-full object-cover transition duration-700 hover:scale-110"
            />
          </div>
          <div className="flex justify-between pt-3 text-sm text-slate-600">
            <p>Jan 3, 2023</p>
            <p className="line-clamp-1"> By Akshay</p>
          </div>
          <div className="space-y-2 py-3">
            <h1 className="line-clamp-1 text-xl font-bold">
              How to grow your business. How to grow your business.
            </h1>
            <p className="line-clamp-2 text-slate-700 dark:text-slate-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. amet
              consectetur adipisicing elit.
            </p>
          </div>
        </div>
        
        <div
          id="card"
          className="overflow-hidden rounded-lg p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950"
        >
          <div className="aspect-video overflow-hidden rounded">
            <img
              src='https://picsum.photos/id/20/800/450'
              alt="Business analytics"
              className="h-full w-full object-cover transition duration-700 hover:scale-110"
            />
          </div>
          <div className="flex justify-between pt-3 text-sm text-slate-600">
            <p>April 24, 2024</p>
            <p className="line-clamp-1"> By Satya</p>
          </div>
          <div className="space-y-2 py-3">
            <h1 className="line-clamp-1 text-xl font-bold">
              How to grow your business. How to grow your business.
            </h1>
            <p className="line-clamp-2 text-slate-700 dark:text-slate-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. amet
              consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
  );
};

export default Blogs;
