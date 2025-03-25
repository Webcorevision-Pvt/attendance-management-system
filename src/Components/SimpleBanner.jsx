import React from 'react'

const SimpleBanner = () => {
  return (
    <main className="bg-[#0070f3] px-4 sm:px-6 lg:px-8">
    <section data-aos="fade-up" className="container mx-auto py-10 md:py-16">
      <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-12 lg:gap-16">
        {/* Content Section */}
        <div className="flex flex-col items-center gap-6 text-center text-white md:items-start md:text-left">
          <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">Market your Brand</h1>
          <p className="max-w-md sm:max-w-lg md:max-w-xl text-base sm:text-lg lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ducimus eius quis ad enim aliquid iusto eum nihil exercitationem necessitatibus?
          </p>
          <button className="rounded-md bg-white px-5 py-3 text-sm sm:text-base font-medium text-black transition-colors duration-300 hover:bg-white/90">
            Get Started
          </button>
        </div>
        {/* Video Section */}
        <div className="w-full transform transition-transform duration-300 hover:scale-105">
          <div className="relative overflow-hidden rounded-xl shadow-2xl ring-4 ring-white/10">
            <iframe
              className="aspect-video w-full h-auto"
              src="https://www.youtube.com/embed/gRWMen27Uio?si=VtHMh9xCxQ6ccFh8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  </main>
  )
}

export default SimpleBanner