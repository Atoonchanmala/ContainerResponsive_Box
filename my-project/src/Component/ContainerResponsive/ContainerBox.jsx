const ContainerBox = () =>{
  return (
    <div className="mx-auto w-full">
      <div className="flex justify-center mt-5">
        <h1 className="font-semibold lg:text-3xl md:text-2xl sm:text-lg text-blue-950 border-b-2 border-blue-400 sm:text-center md:text-center lg:text-center">
          My Container
        </h1>
      </div>
      <div className="mt-5 lg:flex lg:space-x-1 lg:justify-center md:grid md:grid-cols-2">
        <p className=" bg-blue-500 w-[200px] h-[200px] rounded-md mb-3 text-center py-5 font-semibold text-lg text-white lg:mt-1 lg:mx-0 md:mx-44 sm:hidden lg:block md:block smx:hidden">
          Box01
        </p>
        <p className=" bg-yellow-300 w-[200px] h-[200px] rounded-md mb-3 py-5 text-lg font-semibold text-center text-gray-800 lg:mt-0 lg:mx-0 sm:hidden md:block lg:block smx:hidden">
          Box02
        </p>
        <p className=" bg-blue-900 w-[200px] h-[200px] rounded-md py-5 font-semibold text-lg text-white text-center lg:mx-0 md:mx-0 lg:mt-1 md:hidden lg:block sm:mx-28 smx:mx-8">
          Box03
        </p>
      </div>
    </div>
  );
};
export default ContainerBox;
