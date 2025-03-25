import React from "react";

const BannerDetails = ({ reverse }) => {
  return (
    <section>
      <main className="bg-slate-100 dark:bg-slate-900 dark:text-white">
        <section className="container flex flex-col items-center justify-center py-10 md:h-[500px] px-4 md:px-0">
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
            <div
              data-aos="fade-right"
              data-aos-duration="400"
              data-aos-once="true"
              className={`flex flex-col items-center gap-4 text-center md:items-start md:p-8 md:text-left ${
                reverse ? "md:order-last" : ""
              } `}
            >
              <h1 className="text-2xl md:text-4xl font-semibold">
                We Build Apps That Get Trending On Appworld
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                ducimus eius quis ad enim aliquid iusto eum nihil exercitationem
                necessitatibus?
              </p>
              <ul className="flex flex-col gap-2 md:gap-4 list-disc list-inside text-left">
                <li className="font-medium">
                  Lorem ipsum adipisicing elit. Cum, vel.
                </li>
                <li className="font-medium">
                  Dlss ipsum adipisicing elit. Cum, vel.
                </li>
                <li className="font-medium">Adipisicing elit. Cum, vel.</li>
              </ul>
              <div className="mt-4">
                <button className="rounded-md border-2 border-[#0070f3] bg-[#0070f3] px-5 py-2 text-sm text-white transition-all duration-300 hover:bg-[#0070f3]/80">
                  Get Started
                </button>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="400"
              data-aos-once="true"
              className={`flex justify-center ${reverse ? "order-1" : ""}`}
            >
              <img
                src="https://picsum.photos/id/29/300/200"
                alt="App showcase"
                className="w-[90%] max-w-xs md:max-w-sm mx-auto h-auto rounded-lg shadow-md hover:drop-shadow-md transition-all duration-300"
              />
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default BannerDetails;
