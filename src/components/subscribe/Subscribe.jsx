import React from 'react'
import Container from '../../layouts/Container'
import Flex from '../../layouts/Flex'

const Subscribe = () => {
  return (
    <div className='subscribe'>
      <Container>
        <div className='py-[36px] px-[64px] bg-black rounded-[40px]'>
          <Flex>
            <div className="left text-white w-1/2">
            <h2 className='text-[40px] font-primary font-black leading-[45px]'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
            </div>
            <div className="right w-[40%]">
            <input type="email" className='bg-white w-full pl-[52px] rounded-[62px] font-secondary py-[12px]' placeholder='Enter your email address' />
            <button className='w-full rounded-[62px] text-black font-secondary hover:text-white hover:bg-black border cursor-pointer hover:border-white mt-4 py-3 bg-white' >Subscribe</button>
            </div>
          </Flex>

        </div>
      </Container>
    </div>
  )
}

export default Subscribe