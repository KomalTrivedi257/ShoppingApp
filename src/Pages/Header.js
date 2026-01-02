import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const { carts } = useSelector((state) => state.products);
  const [search, setSearch] = useState(""); // search input state
  const navigate = useNavigate();

  const handleSearch = () => {
    // Navigate to Home page with search query
    navigate(`/?search=${search.trim()}`);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-lg">
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand fw-bold fs-3" to="/">
          🛍️ ShoppingApp
        </Link>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          {/* Center - optional empty ul */}
          <ul className="navbar-nav mx-auto"></ul>

          {/* Search input + button */}
          <div className="d-flex me-3">
            <input
              type="text"
              className="form-control me-2"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleKeyPress} // Enter key
            />
            <button
              className="btn btn-light"
              onClick={handleSearch}
              title="Search"
            >
              🔍︎
            </button>
          </div>

          {/* Cart Button */}
          <Link to="/cart" className="text-decoration-none">
            <button className="btn btn-outline-light position-relative">
              🛒 Cart
              {carts.length > 0 && (
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  style={{ fontSize: "0.8rem" }}
                >
                  {carts.length}
                </span>
              )}
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;


// import React from "react";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const { carts } = useSelector((state) => state.products);

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-lg">
//       <div className="container">
//         {/* Brand */}
//         <Link className="navbar-brand fw-bold fs-3" to="/">
//           🛍️ ShoppingApp
//         </Link>

//         {/* Toggler for mobile */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarContent"
//           aria-controls="navbarContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarContent">
//           <ul className="navbar-nav mx-auto"></ul>

//           {/* Cart Button */}
//           <Link to="/cart" className="text-decoration-none">
//             <button className="btn btn-outline-light position-relative">
//               🛒 Cart
//               {carts.length > 0 && (
//                 <span
//                   className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
//                   style={{ fontSize: "0.8rem" }}
//                 >
//                   {carts.length}
//                 </span>
//               )}
//             </button>
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;
