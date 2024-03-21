import React from 'react'

const Hero = () => {
  return (
    <main className='hero container'>
        <div className='hero-content'>
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda et ipsum, accusamus hic fuga ea vel impedit at quae temporibus!</p>

        <div className='hero-btn'>
            <button>Shop Now</button>
            <button className='button1'>Category</button>
            
        </div>
        <div className='hero-p'>
            <p>Also Available On</p>
        </div>
        <div className='hero-image'>
            <img src="/images/flipkart.png" alt="logo" />
            <img src="/images/amazon.png" alt="logo" />
        </div>
        </div>
        <div className='hero-shoes'>
            <img src="/images/shoe_image.png" alt="shoes" />
        </div>
    </main>
  )
}

export default Hero