import loader from './home-loader.json';
import Lottie from 'lottie-react';
const Loader = () => {
  return (
    <div className="min-h-screen max-h-screen flex items-center justify-center">
      {/* <RotateLoader size={18} color={'#07A0EC'} /> */}
      <Lottie
        className="size-20 md:size-24 lg:size-32"
        animationData={loader}
      ></Lottie>
    </div>
  );
};

export default Loader;
