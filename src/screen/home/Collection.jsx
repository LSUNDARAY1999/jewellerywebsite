// import React from 'react';
// import { useParams, Link } from 'react-router-dom';
// // import gold22Img from '../assets/gold22.png';
// // import gold18Img from '../assets/gold18.png';
// // import silverImg from '../assets/silver.png';
// // import sterlingImg from '../assets/sterling.png';

// const collectionData = {
//   'gold-22k': {
//     title: 'OUR 22K GOLD COLLECTION',
//     description: 'Reflect your legacy with our stunning 22k gold pieces.',
//     categories: [
//       { name: 'Casting', image: gold22Img, path: '/collection/gold-22k/casting' },
//       { name: 'Non-Casting', image: gold22Img, path: '/collection/gold-22k/non-casting' },
//     ],
//   },
//   'gold-18k': {
//     title: 'OUR 18K GOLD COLLECTION',
//     description: 'Modern and timeless 18k gold jewellery.',
//     categories: [
//       { name: 'Necklace', image: gold18Img, path: '/collection/gold-18k/necklace' },
//       { name: 'Bracelet', image: gold18Img, path: '/collection/gold-18k/bracelet' },
//     ],
//   },
//   silver: {
//     title: 'OUR SILVER COLLECTION',
//     description: 'Elegant silver jewellery pieces for every occasion.',
//     categories: [
//       { name: 'Earrings', image: silverImg, path: '/collection/silver/earrings' },
//       { name: 'Chains', image: silverImg, path: '/collection/silver/chains' },
//     ],
//   },
//   'sterling-silver': {
//     title: 'OUR STERLING SILVER COLLECTION',
//     description: 'Premium 92.5 sterling silver for classy looks.',
//     categories: [
//       { name: 'Rings', image: sterlingImg, path: '/collection/sterling-silver/rings' },
//       { name: 'Anklets', image: sterlingImg, path: '/collection/sterling-silver/anklets' },
//     ],
//   },
// };

// function Collection() {
//   const { type } = useParams();
//   const data = collectionData[type];

//   if (!data) {
//     return <h3 className="text-center mt-5">Collection Not Found</h3>;
//   }

//   return (
//     <div className="container py-5">
//       <h3 className="text-center text-danger">{data.title}</h3>
//       <p className="text-center mb-4">{data.description}</p>

//       <div className="row justify-content-center">
//         {data.categories.map((cat, index) => (
//           <div className="col-md-4 col-sm-6 mb-4" key={index}>
//             <div className="card text-center shadow-sm">
//               <img src={cat.image} className="card-img-top" alt={cat.name} />
//               <div className="card-body">
//                 <Link to={cat.path} className="btn btn-danger">{cat.name}</Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Collection;
