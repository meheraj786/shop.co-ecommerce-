import React from 'react'
import Container from '../../layouts/Container'
import Flex from '../../layouts/Flex'

const Footer = () => {
  const company=[
    {
      text: 'About',
      link:'#'
    },
    {
      text: 'Features',
      link:'#'
    },
    {
      text: 'Works',
      link:'#'
    },
    {
      text: 'Career',
      link:'#'
    },
  ]
  const help=[
    {
      text: 'Customer Support',
      link:'#'
    },
    {
      text: 'Delivery Details',
      link:'#'
    },
    {
      text: 'Terms & Conditions',
      link:'#'
    },
    {
      text: 'Privacy Policy',
      link:'#'
    },
  ]
  const faq=[
    {
      text: 'Account',
      link:'#'
    },
    {
      text: 'Manage Deliveries',
      link:'#'
    },
    {
      text: 'Orders',
      link:'#'
    },
    {
      text: 'Payments',
      link:'#'
    },
  ]
  const resources=[
    {
      text: 'Free eBooks',
      link:'#'
    },
    {
      text: 'Development Tutorial',
      link:'#'
    },
    {
      text: 'How to -Blog',
      link:'#'
    },
    {
      text: 'Youtube Playlist',
      link:'#'
    },
  ]

  return (
    <div className='py-[88px] bg-[#F0F0F0]'>
      <Container>
        <Flex className="items-start">
          <div>
            <p>logo</p>
            <p className='mt-[25px] opacity-60 w-[248px] mb-[35px]'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
            <div className="icons">
              <Flex>
                ic ic ic ic
              </Flex>
            </div>
          </div>
          <div>
            <h3 className='text-subtitle font-bold mb-[26px] '>COMPANY</h3>
            <ul>
            {
              company.map((item)=>(
                <li className='my-[15px] opacity-60'><a href={item.link}>{item.text}</a></li>

              ))
            }

            </ul>
          </div>
          <div>
          <h3 className='text-subtitle font-bold mb-[26px] '>HELP</h3>
          <ul>
            {
              help.map((item)=>(
                <li className='my-[15px] opacity-60'><a href={item.link}>{item.text}</a></li>

              ))
            }

            </ul>

          </div>
          <div>
          <h3 className='text-subtitle font-bold mb-[26px] '>FAQ</h3>
          <ul>
            {
              faq.map((item)=>(
                <li className='my-[15px] opacity-60'><a href={item.link}>{item.text}</a></li>

              ))
            }

            </ul>
          </div>
          <div>
          <h3 className='text-subtitle font-bold mb-[26px] '>RESOURCES</h3>
          <ul>
            {
              resources.map((item)=>(
                <li className='my-[15px] opacity-60'><a href={item.link}>{item.text}</a></li>

              ))
            }

            </ul>
          </div>
        </Flex>
        <hr className='mt-[50px] mb-[25px] opacity-10' />
        <Flex>
          <p className='opacity-60'>Shop.co © 2000-2023, All Rights Reserved</p>
          <div className="cards">
            car1 card2 card3
          </div>
        </Flex>
      </Container>
    </div>
  )
}

export default Footer