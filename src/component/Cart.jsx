import { useNavigate } from "react-router-dom";
import "../App.css";
import React, { useEffect, useState } from "react";

const Cart = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);
  const api = "https://fakestoreapi.com/products?limit=5";
  const [products, setProduct] = useState([]);

  const fetchApi = async (url) => {
    try {
      const response = await fetch(url);
      const outPut = await response.json();
      setProduct(outPut);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApi(api);
  }, []);
  console.log(products);
  return (
    <>
      <div className="cartTable">
        <div className="heading">
          <text className="text-muted headText">Cart</text>
        </div>
        <div className="cartTableChild">
          <div>
            <table className="table container shadow-lg bg-white headRow">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              {products?.map((item, index) => {
                return (
                  <tbody key={index}>
                    <tr className="">
                      <td>
                        <img
                          src={item.image}
                          style={{ height: "50px", width: "50px" }}
                          alt=""
                        />
                      </td>
                      <td>{item.title.substr(0, 13)}...</td>
                      <td>{item.price}</td>
                      <td>Null</td>
                      <td>{item.price}</td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
            <div className="d-flex flex-row-reverse mx-5">
              <button
                className=" bg-primary text-white"
                type="button"
                style={{
                  border: "none",
                  height: "35px",
                }}
              >
                UPDATE CART
              </button>
            </div>
          </div>
        </div>
        <div className="d-flex flex-row-reverse totalCartBox mx-5 mt-3">
          <div className="checkout">
            <div className="checkoutChild">
              <div className="textCol">
                <h3>Cart Totals</h3>
              </div>
              <hr />
              <div className="textCol">
                <text>Subtotal</text>
                <text>{products[0]?.price}</text>
              </div>
              <hr />
              <div className="textCol">
                <text>Total</text>
                <text>{Math.round(products[0]?.price)}</text>
              </div>
              <hr />
              <div className="textCol">
                <button
                  className="bg-primary "
                  style={{
                    height: "40px",
                    width: "200px",
                    border: "none",
                    color: "white",
                  }}
                >
                  CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
