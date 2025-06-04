import React from 'react';
import Lottie from 'lottie-react';
import default_loader from "./default_loader.json";

const LoadingSpinner = ({ spinning, size = 'default' }) => {
    return spinning && <div className='w-100 p-0 m-0 d-flex loaderOverLay' style={{ position: "fixed", overflow: "hidden", zIndex: "99999", height: "100vh" }}>
        <Lottie animationData={default_loader} style={{ width: "30%", height: "30%", }} className='m-auto' />
    </div>
};

export default LoadingSpinner;