import React from 'react';

const LoadingSpinner = () => (
    <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-8 border-b-8 border-white"></div>
    </div>
);

export default LoadingSpinner;