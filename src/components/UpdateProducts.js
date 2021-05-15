// import React, { useState, useEffect } from "react";
// // import ProdsContext from "../App";
// import {
//   Box,
//   Button,
//   Flex,
//   Input,
//   InputGroup,
//   Modal,
//   ModalBody,
//   ModalCloseButton,
//   ModalContent,
//   ModalFooter,
//   ModalHeader,
//   ModalOverlay,
//   Stack,
//   Text,
// } from "@chakra-ui/core";

// const UpdateProducts = ({ item, id, ProdsContext }) => {
//   const { isOpen, onOpen, onClose } = useState(false);
//   const [prod, setProd] = useState(item);
//   const { fetchProducts } = React.useContext(ProdsContext);

//   const updateProduct = async () => {
//     await fetch(`http://localhost:8000/products/${id}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ item: prod }),
//     });
//     onClose();
//     await fetchProducts();
//   };
//   return (
//     <>
//       <Button text={"update"} onClick={onOpen} />
//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Update Product</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <InputGroup size="md">
//               <Input
//                 pr="4.5rem"
//                 type="text"
//                 aria-label="update"
//                 value={prod}
//                 onChange={(e) => setProd(e.target.value)}
//               />
//             </InputGroup>
//           </ModalBody>

//           <ModalFooter>
//             <Button h="1.5rem" size="sm" onClick={updateProduct}>
//               Update!
//             </Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// };

// export default UpdateProducts;
