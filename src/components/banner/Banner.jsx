import React from 'react'
import Container from '../../layouts/Container'
import Flex from '../../layouts/Flex'
import Button from '../../layouts/Button'
import CountUp from 'react-countup';

const Banner = () => {
  return (
    <div className='banner bg-[url(assets/bannerImg.png)] bg-cover bg-no-repeat bg-center font-secondary relative pt-[199px] pb-[116px]'>
      <Container>
        <Flex>
          <div className="left w-1/2">
            <h1 className='text-heading font-black font-primary'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p className='py-[32px] opacity-60'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
            <Button>
              Shop Now
            </Button>
            <Flex className="mt-[48px]">
              <div>
                <h2 className='text-[40px] font-bold'><CountUp end={200} duration={3} />
                +</h2>
                <p className='opacity-60'>International Brands</p>
              </div>
              <div>
                <h2 className='text-[40px] font-bold'><CountUp end={2000} duration={3} />
                +</h2>
                <p className='opacity-60'>High-Quality Products</p>
              </div>
              <div>
                <h2 className='text-[40px] font-bold'><CountUp end={30000} duration={3} />
                +</h2>
                <p className='opacity-60'>Happy Customers</p>
              </div>
            </Flex>
          </div>
        </Flex>
      </Container>

    </div>
  )
}

export default Banner