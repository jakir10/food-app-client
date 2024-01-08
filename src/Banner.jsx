import image1 from "../src/assets/Image1.png";

const Banner = () => {
  return (
    <section className="bg-amber-500 rounded-lg mt-8 md:mt-16 lg:mt-24 mb-8 md:mb-16 lg:mb-24 h-auto text-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center p-4 md:p-10">
        {/* Left Side */}
        <div className="w-full md:w-1/2 lg:w-2/4 pr-0 md:pr-8 mb-4 md:mb-0">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
            Deliver Food to Your <br />
            Door Step
          </h2>
          <p className="text-base md:text-lg lg:text-xl mb-8 text-gray-300">
            Authentic Food, Quick Service, Fast Delivery
          </p>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 lg:w-1/3 p-0">
          <img
            src={image1} // Replace with the actual path to your image
            alt="Banner Image"
            className="w-full lg:h-full h-auto md:h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
