import React from 'react';

function Hero() {
  return (
    <>
      <div className="home-img border-0 bg-no-repeat bg-cover h-[100vh] sm-mid-tablet:bg-bottom bg-right">
        <div className="sm:grid sm:grid-cols-10 sm:gap-3 md:gap-6 mx-auto max-w-screen-xl px-6 md:px-12">
          <section className="col-span-10 lg:col-span-4 pt-[19%]">
            <h1 className="text-5xl tracking-tight leading-leading-first font-bold mb-8 sm-mid-tablet:text-3xl sm-mid-tablet:leading-snug">
              Bridging companies and campuses to
              <span className="text-purple-500"> empower students</span>
            </h1>
            <p className=" text-lg mb-8 mt-0">
              GradTheory is creating a future where it is exciting and fair to
              pursue your career in the ever-evolving world of technology.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

export default Hero;
