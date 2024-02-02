import Image from 'next/image'
import pic from "../assets/image1.svg"

export default function Home() {
  return (<div className="home">
    <div className="homemain">
      <p>Loremdlflsjclclcxllcxjlkcjkcjlkxjckljckljcjxkcjxjclkclj
      </p>
      <Image className='pic'
        src={pic}
        alt="Your Alt Text"
        width={600}  // Set the width of the image
        height={200}  // Set the height of the image
      />
    </div>
    </div>)
}
