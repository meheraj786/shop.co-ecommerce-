import React, { useContext } from 'react'
import Container from '../../layouts/Container'
import Flex from '../../layouts/Flex'
import Button from '../../layouts/Button'
import { ProductContext } from '../context/productContenx'

const TopSelling = () => {
  const products= useContext(ProductContext)

const topSellingProducts= products.filter((product)=>product.catagory=="topSelling")
return (
  <div className='py-[70px] font-secondary'>
    <Container>
      <h2 className='text-subheading-sm md:text-subheading font-black text-center mb-[55px]'>Top Selling</h2>
      <Flex className="md:justify-start justify-center text-center md:text-left md:gap-y-0 gap-y-10 gap-x-[20px]">
      {
        topSellingProducts.map((product)=>(
          <div className="card md:w-[295px]">
          <div className="img mb-[16px] rounded-[20px] w-full h-[298px] bg-[#F0EEED]" style={
            {
              backgroundImage: `url(${product.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center"

            }
          }></div>
            <h4 className='text-subtitle-sm md:text-subtitle font-bold'>{product.name}</h4>
            <span className='my-[8px]'>{product.rating}</span>
            <p className='text-subtitle-sm md:text-subtitle font-bold'>{product.price}</p>
        </div>

        ))
      }


      </Flex>
      <div className='text-center mt-9'>
      <Button className="border bg-white !text-black">View More</Button>

      </div>
    </Container>
  </div>
)
}

export default TopSelling