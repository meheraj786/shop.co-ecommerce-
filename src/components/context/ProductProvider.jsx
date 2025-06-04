import React from 'react'
import { ProductContext } from './productContenx'
import p1 from '../../assets/productsImg/p1.jpg'
import p2 from '../../assets/productsImg/p2.jpg'
import p3 from '../../assets/productsImg/p3.jpg'
import p4 from '../../assets/productsImg/p4.jpg'
import p5 from '../../assets/productsImg/p5.jpg'
import p6 from '../../assets/productsImg/p6.jpg'
import p7 from '../../assets/productsImg/sp1.jpg'
import p8 from '../../assets/productsImg/sp2.jpg'
import p9 from '../../assets/productsImg/pp1.jpg'
import p10 from '../../assets/productsImg/gp1.jpg'
import p11 from '../../assets/productsImg/gp2.jpg'

const ProductProvider = ({children}) => {
  const products= [
    {
      img: p1,
      name: "Red T-Shirt",
      catagory: "topSelling",
      collection: "casual",
      rating: '4/5',
      price: "$200"
    },{
      img: p2,
      name: "Yellow Hoody",
      catagory: "topSelling",
      collection: "casual",
      rating: '4/5',
      price: "$250"
    },{
      img: p3,
      name: "White T-Shirt",
      catagory: "normal",
      collection: "casual",
      rating: '4/5',
      price: "$200"
    },{
      img: p4,
      name: "Standard Blezer",
      catagory: "topSelling",
      collection: "formal",
      rating: '4/5',
      price: "$400"
    },{
      img: p5,
      name: "Bag",
      catagory: "normal",
      collection: "party",
      rating: '4/5',
      price: "$250"
    },{
      img: p6,
      name: "Snow-White T-Shirt",
      catagory: "topSelling",
      collection: "casual",
      rating: '4/5',
      price: "$200"
    },{
      img: p7,
      name: "Basket Ball Outfit",
      catagory: "newArrivals",
      collection: "sports",
      rating: '4/5',
      price: "$500"
    },{
      img: p8,
      name: "Snow Outfit",
      catagory: "newArrivals",
      collection: "sports",
      rating: '4/5',
      price: "$200"
    },{
      img: p9,
      name: "Borthday Outfit",
      catagory: "newArrivals",
      collection: "party",
      rating: '4/5',
      price: "$200"
    },{
      img: p10,
      name: "Gym T-Shirt",
      catagory: "newArrivals",
      collection: "gym",
      rating: '4/5',
      price: "$100"
    },{
      img: p11,
      name: "Yellow Gym T-Shirt",
      catagory: "normal",
      collection: "gym",
      rating: '4/5',
      price: "$300"
    },
  ]




  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider