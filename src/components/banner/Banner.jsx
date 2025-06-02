import React from 'react'
import Container from '../../layouts/Container'
import Flex from '../../layouts/Flex'
import Button from '../../layouts/Button'

const Banner = () => {
  return (
    <div className='banner bg-[url(assets/bannerImg.png)] bg-cover bg-no-repeat bg-center font-secondary relative pt-[199px] pb-[116px]'>
      <Container>
        <Flex>
          <div className="left w-1/2">
            <h1 className='text-heading font-black font-primary'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p className='py-[32px]'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
            <Button>
              Shop Now
            </Button>
            <Flex className="mt-[48px]">
              <div>
                <h2 className='text-[40px] font-bold'>200+</h2>
                <p>International Brands</p>
              </div>
              <div>
                <h2 className='text-[40px] font-bold'>200+</h2>
                <p>International Brands</p>
              </div>
              <div>
                <h2 className='text-[40px] font-bold'>200+</h2>
                <p>International Brands</p>
              </div>
            </Flex>
          </div>
        </Flex>
      </Container>

    </div>
  )
}

export default Banner