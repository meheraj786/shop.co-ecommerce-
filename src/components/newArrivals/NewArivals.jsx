import React, { useContext } from 'react'
import Container from '../../layouts/Container'
import Flex from '../../layouts/Flex'
import Button from '../../layouts/Button'
import ProductProvider from '../context/ProductProvider'
import { ProductContext } from '../context/productContenx'

const NewArivals = () => {
  const products= useContext(ProductContext)
  const newArrivalProducts = products.filter(
    (product) => product.catagory === 'newArrivals'
  )
  return (
    <div className='py-[70px] font-secondary'>
      <Container>
        <h2 className='text-subheading-sm md:text-subheading font-black text-center mb-[55px]'>New Arrivals</h2>
        <Flex className="md:justify-start text-center md:text-left md:gap-y-0 gap-y-10 justify-center gap-x-[20px]">
        {
          newArrivalProducts.map((product)=>(
              <div className="card w-full md:w-[295px]">
              <div style={{
                background: `url(${product.img})`,
              backgroundPosition:"center",
              backgroundSize: "cover"
  
              }} className="img mb-[16px] rounded-[20px] w-full h-[298px] bg-[#F0EEED]"></div>
                <h4 className='text-subtitle-sm md:text-subtitle font-bold'>{product.name}</h4>
                <span className='my-[8px]'>{product.rating}</span>
                <p className='text-subtitle-sm md:text-subtitle font-bold'>{product.price}</p>
            </div>
          )
        )
        }


        </Flex>
        <div className='text-center mt-9'>
        <Button className="border  bg-white !text-black">View More</Button>

        </div>
      </Container>
    </div>
  )
}

export default NewArivals