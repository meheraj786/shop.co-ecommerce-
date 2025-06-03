import React from 'react'
import Container from '../../layouts/Container'
import Flex from '../../layouts/Flex'
import { TiMail } from "react-icons/ti";


const Subscribe = () => {
  return (
    <div className='subscribe font-secondary py-[60px]'>
      <Container>
        <div className='py-[36px] px-[64px] bg-black rounded-[40px]'>
          <Flex className="md:flex-row gap-y-10 md:gap-y-0 flex-col text-center md:text-left">
            <div className="left text-white md:w-1/2">
            <h2 className='text-[40px] font-primary font-black leading-[45px]'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
            </div>
            <div className="right md:w-[40%]">
<div className='relative'>
<input type="email" className='bg-white w-full pl-[52px] rounded-[62px] font-secondary py-[12px]' placeholder='Enter your email address' />
            <TiMail className='absolute text-[26px] top-1/2 -translate-y-1/2 left-[16px] opacity-40' />
</div>

            <button className='w-full rounded-[62px] text-black font-secondary hover:text-white hover:bg-black border cursor-pointer hover:border-white mt-4 py-3 bg-white' >Subscribe</button>
            </div>
          </Flex>

        </div>
      </Container>
    </div>
  )
}

export default Subscribe