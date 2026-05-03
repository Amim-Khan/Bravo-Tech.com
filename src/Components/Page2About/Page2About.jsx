import './Page2About.css'

const Page2About = () => {
  return (
    <div id='Page2About'> 
      <div id='Img'>
        <h1>About Us</h1>
        <img src="https://i.pinimg.com/1200x/9a/e7/95/9ae79506c718899f9c11e56dfb826a1e.jpg" alt="" />
      </div>
      <div id='OurExpertise'>
        <h1>Our Expertise</h1>
        <div id="E4">
            <div id="E">
                 <i class="ri-stack-line"></i>
                <h3>Advanced Engineering</h3>
            </div>
            <div id="E">
                <i class="ri-instance-line"></i>
                <h3>Strategic Planning</h3>
            </div>
            <div id="E">
                 <i class="ri-qr-scan-ai-fill"></i>
                <h3>Substainable Solutions</h3>
            </div>
            <div id="E">
                <i class="ri-connector-line"></i>
                <h3>Claimable Solution</h3>
            </div>
        </div>
             <button>Global Reach</button>
      </div>
    </div>
  )
}

export default Page2About
