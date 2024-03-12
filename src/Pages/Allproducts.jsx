import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AllProducts = ({ addCart, setAddCart }) => {
  const [apiData, setApiData] = useState();
  const params = useParams();

  let api = `https://fakestoreapi.com/products/${params.id}`;

  const fetchApi = async (url) => {
    try {
      const res = await fetch(url);
      const op = await res.json();
      setApiData(op);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchApi(api);
  }, [api]);

  const getPrice = () => {
    const price = apiData?.price;
    setAddCart(addCart + 1);
    console.log(price);
  };

  const handleCart = () => {
    getPrice();
    return console.log("cliked");
  };

  console.log(addCart);
  return (
    <>
      <div className=" parentCart">
        <div className="imgRow">
          <img
            src={apiData?.image}
            alt=""
            style={{
              height: "350px",
              width: "250px",
              backgroundColor: "#EEEEEE",
            }}
          />
        </div>
        <div className="textRow">
          <div className=" content p-4">
            <text>{apiData?.category.toUpperCase()}</text>
            <h3>{apiData?.title}</h3>
            <h3>Price ${Math.round(apiData?.price)}.00</h3>
            <text>{apiData?.description.substr(0,220)}</text>
          </div>
          <div className="d-flex align-items-center ps-3">
            <div className="m-3">
              <input
                type="number"
                className="text-center"
                placeholder={addCart + 1}
                style={{ width: "60px", height: "36px" }}
              />
            </div>
            <div className="">
              <button
                onClick={handleCart}
                className=" bg-primary text-white"
                type="button"
                style={{
                  border: "none",
                  height: "37px",
                  width: "250px",
                }}
              >
                ADD TO CART
              </button>
            </div>
          </div>
          <hr />
          <text className="ps-4">Category: {apiData?.category.toUpperCase()}</text>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
