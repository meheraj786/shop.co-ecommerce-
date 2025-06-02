import React from 'react'
import Container from '../../layouts/Container'
import Flex from '../../layouts/Flex'
import img1 from './../../assets/new1.png'

const NewArivals = () => {
  const cards= [
    {
      img: img1,
      title: "T-SHIRT WITH TAPE DETAILS",
      price: "$120"
    },
    {
      img: img1,
      title: "T-SHIRT WITH TAPE DETAILS",
      price: "$120"
    },
    {
      img: img1,
      title: "T-SHIRT WITH TAPE DETAILS",
      price: "$120"
    },
  ]
  return (
    <div className='py-[70px]'>
      <Container>
        <h2 className='text-subheading font-black text-center mb-[55px]'>New Arrivals</h2>
        <Flex>
          <div className="card md:w-[295px]">
            <div className="img mb-[16px] rounded-[20px] w-full h-[298px] bg-[#F0EEED]"></div>
              <h4 className='text-subtitle font-bold'>T-SHIRT WITH TAPE DETAILS</h4>
              <span className='my-[8px]'>stars</span>
              <p className='text-subtitle font-bold'>price</p>

            

          </div>

        </Flex>
      </Container>
    </div>
  )
}

export default NewArivals