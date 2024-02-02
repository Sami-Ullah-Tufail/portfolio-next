import React from 'react'
import pic2 from "../assets/Frame.svg"
import pic3 from "../assets/image4.png"
import Image from 'next/image'

const Righter = () => {
  return (
    <div>
        <div className='upper'>
        <Image className='pic3'
        src={pic3}
        alt="Your Alt Text"
        width={600}  // Set the width of the image
        height={200}  // Set the height of the image
      />
        </div>
        <div className='lover'>
        <Image className='pic2'
        src={pic2}
        alt="Your Alt Text"
        width={300}  // Set the width of the image
        height={200}  // Set the height of the image
        />
        </div>
    </div>
  )
}

export default Righter