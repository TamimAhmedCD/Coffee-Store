import bannerImg from "../assets/banner.png";
const Banner = () => {
  return (
    <div>
      <div className="relative">
        <img src={bannerImg} alt="" className="md:h-auto"/>

        <div className="flex justify-center absolute lg:top-[40%] sm:top-[25%] top-[10%] lg:left-[45%] sm:left-[10%]  pl-5">
          <div className="space-y-2  text-white">
            <h1 className="font-rancho md:text-4xl text-xl text">
              Would you like a Cup of Delicious Coffee?
            </h1>
            <p className="text-sm sm:leading-6">
              It&apos;s coffee time - Sip & Savor - Relaxation in every sip! Get
              the nostalgia back!! <span className="sm:block hidden">Your companion <br /> of every moment!!! Enjoy the
              beautiful moments and make them memorable.</span>
            </p>
            <button className="hover:bg-orange-300 font-rancho py-2 px-4 border-2 hover:border-2 hover:border-transparent hover:text-neutral-800 sm:text-xl ease-in delay-300 duration-300">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
