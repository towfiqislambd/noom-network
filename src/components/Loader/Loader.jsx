import loader from "./home-loader.json";
import Lottie from "lottie-react";
const Loader = () => {
  return (
    <div className="min-h-screen max-h-screen flex items-center justify-center">
      <Lottie
        className="size-20 md:size-24 lg:size-32"
        animationData={loader}
      ></Lottie>
    </div>
  );
};

export default Loader;
