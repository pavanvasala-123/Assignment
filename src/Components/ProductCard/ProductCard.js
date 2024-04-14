import React from 'react'
import '../ProductCard/ProductCard.css';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

const ProductCard = ({eachProduct}) => {
    const {title , price , image} = eachProduct
  return (
    <div className='product_card'>
      <div className='product_image'>
        <img src={image} alt=""/>
        {/* <BookmarkBorderOutlinedIcon className='book_mark_icon'/> */}
      </div>
      <h4>{title.substring(0,12)}</h4>
      <div className='price_discount_bag_con'>
      <div className='price_con'>
        <h3>₹{price}</h3> 
        <p className='actual_price'>500</p>
        <p className='discount'>(50% off)</p>
        </div>
        <ShoppingBagOutlinedIcon className='bag_icon'/>
      </div>
      
    </div>
  )
}

export default ProductCard

// ```jsx
// import React from 'react';

// const ProductCard = ({ title, imageSrc, price, discount }) => {
//   const discountPrice = price - (price * discount / 100);

//   return (
//     <div className="div-4 md:w-1/3 sm:mb-0 mb-6">
//       <div className="rounded-lg h-64 overflow-hidden">
//         <img alt="content" className="object-cover object-center h-full w-full" src={imageSrc} />
//       </div>
//       <h2 className="text-xl font-medium title-font text-zinc-900 mt-5">{title}</h2>
//       <div className="text-base leading-relaxed mt-2">₹{price} <p className="line-through">₹{price} (50% Off)</p></div>
//       <div className="text-base leading-relaxed mt-2">Discounted Price: ₹{discountPrice}</div>
//       <a className="text-indigo-500 inline-flex items-center mt-3">Learn More
//         <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
//           <path d="M5 12h14M12 5l7 7-7 7"></path>
//         </svg>
//       </a>
//     </div>
//   );
// }

// const Products = () => {
//   return (
//     <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//       <div className="flex flex-wrap -m-4">
//         <ProductCard title="The Brown Metro Movers" imageSrc="https://placehold.co/600x360" price={4899} discount={50} />
//         <ProductCard title="The Metro Movers Black" imageSrc="https://placehold.co/600x360" price={4899} discount={50} />
//         <ProductCard title="The Metro Movers Black" imageSrc="https://placehold.co/600x360" price={4899} discount={50} />
//       </div>
//     </div>
//   );
// }

// export default Products;
// ``````jsx
// import React from 'react';

// // Shared Tailwind CSS classes
// const cardClasses = "div-4 md:w-1/3 sm:mb-0 mb-6";
// const imageClasses = "rounded-lg h-64 overflow-hidden";
// const titleClasses = "text-xl font-medium title-font text-zinc-900 mt-5";
// const priceClasses = "text-base leading-relaxed mt-2";
// const buttonClasses = "text-indigo-500 inline-flex items-center mt-3";

// const Products = () => {
//   return (
//     <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//       <div className="flex flex-wrap -m-4">
//         <ProductCard />
//         <ProductCard />
//         <ProductCard />
//       </div>
//     </div>
//   );
// }

// const ProductCard = () => {
//   return (
//     <div className={cardClasses}>
//       <div className={imageClasses}>
//         <img alt="content" className="object-cover object-center h-full w-full" src="https://placehold.co/600x360" />
//       </div>
//       <h2 className={titleClasses}>The Brown Metro Movers</h2>
//       <div className={priceClasses}>₹4899 <p className="line-through">₹9999</p> (50% Off)</div>
//       <a className={buttonClasses}>Learn More
//         <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
//           <path d="M5 12h14M12 5l7 7-7 7"></path>
//         </svg>
//       </a>
//     </div>
//   );
// }

// export default Products;
// ``````jsx
// import React from 'react';

// const productData = [
//   {
//     name: 'The Brown Metro Movers',
//     image: 'https://placehold.co/600x360',
//     price: 4899,
//     discountPrice: 9999
//   },
//   {
//     name: 'The Metro Movers Black',
//     image: 'https://placehold.co/600x360',
//     price: 4899,
//     discountPrice: 9999
//   },
//   {
//     name: 'The Metro Movers Black',
//     image: 'https://placehold.co/600x360',
//     price: 4899,
//     discountPrice: 9999
//   }
// ];

// const discountClass = 'text-red-500';

// const Product = ({ name, image, price, discountPrice }) => {
//   const discount = Math.round(((discountPrice - price) / discountPrice) * 100);

//   return (
//     <div className="product">
//       <div className="image">
//         <img src={image} alt="content" />
//       </div>
//       <h2>{name}</h2>
//       <div>₹{price} <p className={discountClass}>₹{discountPrice}</p> ({discount}% Off)</div>
//       <a href="#" className="learn-more">Learn More</a>
//     </div>
//   );
// };

// const Products = () => {
//   return (
//     <div className="container">
//       <div className="flex-container">
//         {productData.map((product, index) => (
//           <Product key={index} {...product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Products;
// ```
