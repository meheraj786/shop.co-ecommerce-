import React from 'react'
import Flex from '../../layouts/Flex'
import Container from '../../layouts/Container'

const Navbar = () => {
  const navItems=["Shop", 'On Sale', 'New Arrivals', 'Brands']
  return (
    <>
    <div className="bar py-[9px] font-secondary text-white bg-black text-center">
      <Container>
      <Flex className='w-[70%] ms-auto'>
        <p>Sign up and get 20% off to your first order. <span className='font-medium'>Sign Up Now</span></p>
        <span>x</span>
      </Flex>

      </Container>

    </div>
    <div className="navbar font-secondary py-[24px] text-black bg-white shadow-2xl">
      <Container>
        <Flex className='gap-x-10'>
          <div className="logo">logo</div>
          <ul className=''>
            <Flex className="gap-x-6">
              {
                navItems.map((item)=>(
                  <li>{item}</li>
                ))
              }
            </Flex>
          </ul>
          <div className="input w-[50%]">
            <input type="text" className='py-3 px-[52px] w-full rounded-[62px] bg-[#F0F0F0]' placeholder='Search for products...' />
          </div>
          <div className="icons">
            <Flex>
              icon
              icon
            </Flex>
          </div>
        </Flex>
      </Container>
    </div>
    </>
  )
}

export default Navbar