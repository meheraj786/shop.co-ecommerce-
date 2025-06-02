import React from 'react'
import Container from '../../layouts/Container'
import Flex from '../../layouts/Flex'

const DressStyle = () => {
  return (
    <div className='font-secondary'>
      <Container>
        <div className='rounded-[40px] dressstyle py-[70px] px-[64px] bg-[#F0F0F0]'>
        <h2 className='text-black font-primary font-black text-subheading text-center'>BROWSE BY DRESS STYLE</h2>
        <Flex className="gap-y-5 mt-[64px]">
          <div className='w-[39%] bg-[url(assets/ds1.png)] bg-cover bg-center pt-[25px] pl-[36px] pb-[215px] rounded-[20px]'><h3 className='text-title font-bold font-primary'>Casual</h3></div>
          <div className='w-[60%] bg-[url(assets/ds2.png)] bg-cover bg-center pt-[25px] pl-[36px] pb-[215px] rounded-[20px]'><h3 className='text-title font-bold font-primary'>Formal</h3></div>
          <div className='w-[60%] bg-[url(assets/ds3.png)] bg-cover bg-center pt-[25px] pl-[36px] pb-[215px] rounded-[20px]'><h3 className='text-title font-bold font-primary'>Party</h3></div>
          <div className='w-[39%] bg-[url(assets/ds4.png)] bg-cover bg-center pt-[25px] pl-[36px] pb-[215px] rounded-[20px]'><h3 className='text-title font-bold font-primary'>Gym</h3></div>
        </Flex>

        </div>

      </Container>
    </div>
  )
}

export default DressStyle