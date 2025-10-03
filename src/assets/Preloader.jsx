import React from "react";
import { Audio, Vortex } from 'react-loader-spinner';

const Preloader = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-900 z-50">
   < Vortex
  visible={true}
  height="120"
  width="120"
  ariaLabel="vortex-loading"
  wrapperStyle={{}}
  wrapperClass="vortex-wrapper"
  colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
  />
      <p className="mt-4 text-white text-lg font-semibold animate-pulse">
        Loading...
      </p>
    </div>
  );
};

export default Preloader;
