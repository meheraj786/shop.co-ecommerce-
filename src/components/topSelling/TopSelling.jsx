import React from 'react'
import Container from '../../layouts/Container'
import Flex from '../../layouts/Flex'
import img1 from './../../assets/new1.png'
import Button from '../../layouts/Button'

const TopSelling = () => {
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
  {
    img: img1,
    title: "T-SHIRT WITH TAPE DETAILS",
    price: "$120"
  },
]
return (
  <div className='py-[70px] font-secondary'>
    <Container>
      <h2 className='text-subheading-sm md:text-subheading font-black text-center mb-[55px]'>Top Selling</h2>
      <Flex className="md:justify-start justify-center text-center md:text-left md:gap-y-0 gap-y-10 gap-x-[20px]">
      {
        cards.map((card)=>(
          <div className="card md:w-[295px]">
          <div className="img mb-[16px] rounded-[20px] w-full h-[298px] bg-[#F0EEED]"></div>
            <h4 className='text-subtitle-sm md:text-subtitle font-bold'>{card.title}</h4>
            <span className='my-[8px]'>stars</span>
            <p className='text-subtitle-sm md:text-subtitle font-bold'>{card.price}</p>
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