// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//   loading: false,
//   products: [],
//   carts: [],
// };

// // fetch all products
// export const fetchAllProducts = createAsyncThunk(
//   "products/fetchProducts",
//   async () => {
//     const res = await axios.get("https://fakestoreapi.com/products");
//     return res.data;
//   }
// );

// const ProductSlice = createSlice({
//   name: "products",
//   initialState,
//   reducers: {
//     AddToCart: (state, action) => {
//       const cartItem = state.products.find(
//         (item) => item.id === action.payload
//       );
//       if (cartItem) {
//         state.carts.push(cartItem);
//       }
//     },
//     RemoveCartItem: (state, action) => {
//       state.carts = state.carts.filter(
//         (item) => item.id !== action.payload
//       );
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchAllProducts.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchAllProducts.fulfilled, (state, action) => {
//         state.loading = false;
//         state.products = action.payload;
//       })
//       .addCase(fetchAllProducts.rejected, (state) => {
//         state.loading = false;
//       });
//   },
// });

// export const { AddToCart, RemoveCartItem } = ProductSlice.actions;
// export default ProductSlice.reducer;
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch products from API
export const fetchAllProducts = createAsyncThunk(
  "products/fetchAll",
  async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    return res.data;
  }
);

const initialState = {
  products: [],   // All products
  carts: [],      // Cart items
  loading: false,
  error: null,
};

const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    AddToCart: (state, action) => {
      const productId = action.payload;
      const product = state.products.find((p) => p.id === productId);
      if (product) {
        const existing = state.carts.find((item) => item.id === productId);
        if (existing) {
          existing.quantity += 1;
        } else {
          state.carts.push({ ...product, quantity: 1 });
        }
      }
    },
    DecreaseCart: (state, action) => {
      const item = state.carts.find((i) => i.id === action.payload);
      if (item) {
        if (item.quantity > 1) item.quantity -= 1;
        else state.carts = state.carts.filter((i) => i.id !== action.payload);
      }
    },
    RemoveFromCart: (state, action) => {
      state.carts = state.carts.filter((i) => i.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { AddToCart, DecreaseCart, RemoveFromCart } = ProductSlice.actions;
export default ProductSlice.reducer;
