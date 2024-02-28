import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../redux/actions/productActions";

const Home = ({ products, loading, error, fetchProducts }) => {
  //   const [products, setProducts] = useState([]);
  //   useEffect(() => {
  //     fetch("https://fakestoreapi.com/products")
  //       .then((res) => res.json())
  //       .then((json) => setProducts(json));
  //   }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => {
          return (
            <div className="flex flex-col items-center gap-4" key={product.id}>
              <div>
                <img
                  className="object-contain h-48 w-96"
                  src={product.image}
                  alt="Image missing"
                />
              </div>
              <hr />
              <div>
                <h3>{product.title}</h3>
              </div>
              <div className="gap-4">
                <button className="cursor-none mr-4">
                  Rs. {product.price}/-
                </button>
                <button className="rounded-lg cursor-pointer bg-orange-500 p-2">
                  Add To Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.productReducer.products,
  loading: state.productReducer.loading,
  error: state.productReducer.error,
});

export default connect(mapStateToProps, { fetchProducts })(Home);
