import "./social.css"
import Image from "next/image"
import insta from "../assets/instagram.png"
import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png"
import twitter from "../assets/square-x-twitter.svg"

const Social=()=> {
return(<nav className="vertical-social">
<a href="https://dashboard.microverse.org/" className="block" >
  <div className="block__item"><Image className='block__item'
        src={insta}
        alt="Your Alt Textt"
        width={200}  // Set the width of the image
        height={200}  // Set the height of the image
      /></div>
</a>
<a href="#" className="block" >
  <div className="block__item"><Image className='linkedin'
        src={linkedin}
        alt="Your Alt Text"
        width={200}  // Set the width of the image
        height={200}  // Set the height of the image
      /></div>
</a>
<a href="#" className="block" >
  <div className="block__item"><Image className='github'
        src={github}
        alt="Your Alt Text"
        width={200}  // Set the width of the image
        height={200}  // Set the height of the image
      /></div>
</a>
<a href="#" className="block">
  <div className="block__item"><Image className='twitte'
        src={twitter}
        alt="Your Alt Text"
        width={40}  // Set the width of the image
        height={200}  // Set the height of the image
      /></div>
</a>
</nav>)
}

export default Social