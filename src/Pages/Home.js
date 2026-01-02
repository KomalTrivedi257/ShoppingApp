import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart, fetchAllProducts } from "../Redux/reducers/ProductSlice";
import { useLocation } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  const { products, loading } = useSelector((state) => state.products);

  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("search")?.toLowerCase() || "";

  const filteredProducts = Array.isArray(products)
    ? products.filter((item) =>
        item.title.toLowerCase().includes(searchQuery)
      )
    : [];

  return (
    <div className="container">
      <h1 className="text-center my-4">All Products</h1>
      {loading && <h2 className="text-center">Loading...</h2>}

      <div className="row">
        {filteredProducts.length === 0 && !loading ? (
          <p className="text-center">No products found!</p>
        ) : (
          filteredProducts.map((item) => (
            <div
              key={item.id}
              className="card mx-auto my-4"
              style={{ width: "18rem" }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="card-img-top img-fluid"
                style={{ height: "200px", objectFit: "contain" }}
              />
              <div className="card-body">
                <p className="card-text">{item.title}</p>
                <p className="card-text fw-bold text-success">
                  ${item.price.toFixed(2)}
                </p>
                <button
                  className="btn btn-info"
                  onClick={() => dispatch(AddToCart(item.id))}
                >
                  Add to Cart 🛒
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;


