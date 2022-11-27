import React from 'react'
import BounceLoader from 'react-spinners/BounceLoader'


const LoadingSpinner = ({ loading }) => {
  return (
    <div className="grid place-content-center w-[1054px]">
        <BounceLoader color={'orange'} loading={loading} size={150} />
    </div>
  )
}

export default LoadingSpinner