import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ProCard = () => {
  const [apiData, setApiData] = useState();
  const navigate = useNavigate();
  let api = `https://fakestoreapi.com/products/`;

  const fetchApi = async (url) => {
    try {
      const res = await fetch(url);
      const op = await res.json();
      console.log(op);
      setApiData(op);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchApi(api);
  }, [api]);

  const handleGet = (index, product) => {
    navigate(`/men/${index}/${product}`);
  };

  console.log(apiData);

  return (
    <>
      {apiData?.map((item, i) => {
        return (
          <div className="text-center" key={i}>
            <Card
              className="h-100"
              onClick={() => handleGet(i + 1, item.title)}
              style={{
                width: "15rem",
                alignItems: "center",
                padding: "20px",
              }}
              key={i}
            >
              <Card.Img
                src={item.image}
                style={{ height: "100px", width: "150px" }}
              />
              <Card.Body>
                <Card.Title>
                  <h6>{item.title.substr(0, 30)}...</h6>
                </Card.Title>
                <Card.Text>{item.category}</Card.Text>
                <Card.Title>
                  <h6>Price {item.price}</h6>
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </>
  );
};

export default ProCard;
