import React from "react";
import espresso from "../../assets/imgs/7.png";
const Service = () => {
  return (
    <>
    <span id="services"></span>
    <div className="py-6">
      <div className="container">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-cursive font-semibold">Best Coffee for you</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-4 md:gap-5 place-items-center">
          <div data-aos="fade-up" data-aos-delay="100" className="rounded-2xl shadow-xl bg-white hover:bg-primary hover:text-white duration-200 max-w-[300px] group relative">
            <div className="h-[122px]">
              <img src={espresso} alt="" className="max-w-[200px] block mx-auto transform -translate-y-10 group-hover:scale-110 group-hover:rotate-6 duration-300"/>
            </div>

            <div className="p-2 text-center">
              <h1 className="text-xl font-bold">Espresso</h1>
              <p className="hover:text-white duration-300 text-sm line-clamp-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="100" className="rounded-2xl shadow-xl bg-white hover:bg-primary hover:text-white duration-200 max-w-[300px] group relative">
            <div className="h-[122px]">
              <img src={espresso} alt="" className="max-w-[200px] block mx-auto transform -translate-y-10 group-hover:scale-110 group-hover:rotate-6 duration-300"/>
            </div>

            <div className="p-2 text-center">
              <h1 className="text-xl font-bold">Americano</h1>
              <p className="hover:text-white duration-300 text-sm line-clamp-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>

          </div>
          
          <div data-aos="fade-up" data-aos-delay="100" className="rounded-2xl shadow-xl bg-white hover:bg-primary hover:text-white duration-200 max-w-[300px] group relative">
            <div className="h-[122px]">
              <img src={espresso} alt="" className="max-w-[200px] block mx-auto transform -translate-y-10 group-hover:scale-110 group-hover:rotate-6 duration-300"/>
            </div>
            <div className="p-2 text-center">
              <h1 className="text-xl font-bold">Cappuccino</h1>
              <p className="hover:text-white duration-300 text-sm line-clamp-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        
        </div>
      </div>
    </div>
    </>
  );
};

export default Service;