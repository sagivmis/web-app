// import React, { useEffect, useState } from "react";
// import GridProduct from "./GridProduct";
// import Grid from "@material-ui/core/Grid";

// export default function Prods({
//   onToggle,
//   showDesc,
//   onDelete,
//   addQuantity,
//   lowerQuantity,
// }) {
//   const productsContext = React.createContext({
//     products: [],
//     fetchProducts: () => {},
//   });
//   const [_prods, setProds] = useState([]);
//   const fetchProducts = async () => {
//     const res = await fetch("http://localhost:8000/products");
//     const _prods = await res.json();
//     setProds(_prods.data);
//   };
//   useEffect(() => {
//     fetchProducts();
//   }, []);
//   return (
//     <productsContext.Provider value={{ _prods, fetchProducts }}>
//       <Grid container spacing={1}>
//         {_prods.map((prod) => (
//           <div
//             onMouseOver={() => showDesc(prod.id)}
//             onMouseOut={() => showDesc(prod.id)}
//           >
//             <GridProduct
//               key={prod.id}
//               product={prod}
//               onToggle={onToggle}
//               showDesc={showDesc}
//               onDelete={onDelete}
//               addQuantity={addQuantity}
//               lowerQuantity={lowerQuantity}
//             />
//           </div>
//         ))}
//       </Grid>
//     </productsContext.Provider>
//   );
// }
