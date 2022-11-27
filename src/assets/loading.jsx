import React from 'react'
import BounceLoader from 'react-spinners/BounceLoader'


const LoadingSpinner = ({ loading }) => {
  return (
    <div className="grid content-start place-content-center my-10 lg:w-[1054px] h-screen">
        <BounceLoader color={'orange'} loading={loading} size={150} />
    </div>
  )
}

export default LoadingSpinner