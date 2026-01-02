// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { AddToCart, RemoveFromCart, DecreaseCart } from "../Redux/reducers/ProductSlice";

// const Cart = () => {
//   const { carts } = useSelector((state) => state.products);
//   const dispatch = useDispatch();

//   // Empty cart block
//   if (!carts || carts.length === 0) {
//     return (
//       <div className="text-center my-5">
//         <img
//           src="/images/empty-cart.png.svg"
//           alt="Empty Cart"
//           style={{ width: "250px", marginBottom: "20px" }}
//         />
//         <h2 className="mb-2">Your cart is empty!</h2>
//         <p className="text-muted">Browse products and add them to your cart.</p>
//         <a href="/" className="btn btn-primary mt-3">
//           Go Shopping 🛍️
//         </a>
//       </div>
//     );
//   }

//   // Cart items block
//   const totalPrice = carts.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );

//   return (
//     <div className="container my-4">
//       <h2 className="mb-4">Your Cart</h2>
//       {carts.map((item) => (
//         <div key={item.id} className="card mb-3">
//           <div className="card-body d-flex align-items-center justify-content-between">
//             <img
//               src={item.image}
//               alt={item.title}
//               style={{ width: "100px", height: "100px", objectFit: "contain" }}
//               className="me-3"
//             />
//             <div className="flex-grow-1">
//               <h5>{item.title}</h5>
//               <p className="mb-1 fw-bold text-success">
//                 ${item.price.toFixed(2)} × {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
//               </p>
//             </div>
//             <div className="d-flex align-items-center">
//               <button className="btn btn-outline-secondary" onClick={() => dispatch(DecreaseCart(item.id))}>-</button>
//               <span className="mx-2">{item.quantity}</span>
//               <button className="btn btn-outline-secondary" onClick={() => dispatch(AddToCart(item.id))}>+</button>
//               <button className="btn btn-danger btn-sm ms-3" onClick={() => dispatch(RemoveFromCart(item.id))}>Remove</button>
//             </div>
//           </div>
//         </div>
//       ))}

//       <div className="text-end fw-bold fs-4 mt-3">
//         Total: ${totalPrice.toFixed(2)}
//       </div>
//     </div>
//   );
// };

// export default Cart;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddToCart, RemoveFromCart, DecreaseCart } from "../Redux/reducers/ProductSlice";

const Cart = () => {
  const { carts } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  // Empty cart block
  if (!carts || carts.length === 0) {
    return (
      <div className="text-center my-5">
        <img
          src="/images/empty-cart.png.svg"
          alt="Empty Cart"
          style={{ width: "250px", marginBottom: "20px" }}
        />
        <h2 className="mb-2">Your cart is empty!</h2>
        <p className="text-muted">Browse products and add them to your cart.</p>
        <a href="/" className="btn btn-primary mt-3">
          Go Shopping 🛍️
        </a>
      </div>
    );
  }

  // Cart items block
  const totalPrice = carts.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container my-4">
      <h2 className="mb-4">Your Cart</h2>
      {carts.map((item) => (
        <div key={item.id} className="card mb-3">
          <div className="card-body d-flex align-items-center justify-content-between">
            <img
              src={item.image}
              alt={item.title}
              style={{ width: "100px", height: "100px", objectFit: "contain" }}
              className="me-3"
            />
            <div className="flex-grow-1">
              <h5>{item.title}</h5>
              <p className="mb-1 fw-bold text-success">
                ${item.price.toFixed(2)} × {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
            <div className="d-flex align-items-center">
              <button className="btn btn-outline-secondary" onClick={() => dispatch(DecreaseCart(item.id))}>-</button>
              <span className="mx-2">{item.quantity}</span>
              <button className="btn btn-outline-secondary" onClick={() => dispatch(AddToCart(item.id))}>+</button>
              <button className="btn btn-danger btn-sm ms-3" onClick={() => dispatch(RemoveFromCart(item.id))}>Remove</button>
            </div>
          </div>
        </div>
      ))}

      <div className="text-end fw-bold fs-4 mt-3">
        Total: ${totalPrice.toFixed(2)}
      </div>
    </div>
  );
};

export default Cart;
