import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/Firebase.init";
import "./MyItems.css";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [itemList, setItemList] = useState([]);
  useEffect(() => {
    const url = `https://stockz-server.onrender.com/itemList`;
    fetch(url, {
      headers: {
        authorization: `${user?.email} ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setItemList(data));
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure");
    if (proceed) {
      const url = `https://stockz-server.onrender.com/itemList/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = itemList.filter((item) => item._id !== id);
          setItemList(remaining);
        });
    }
  };

  return (
    <div className="container items-container">
      <h1 className="text-center mt-4 display-6">My Items:{itemList.length}</h1>
      <div>
        <div className="row">
          {" "}
          {itemList.map((item) => (
            <div className="g-5 col-sm-12 col-md-6 col-lg-4">
              <Card>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                  <Card.Text>
                    <Card.Title className="text-center">{item.name}</Card.Title>
                    <div className="text-center">
                      <h6>
                        <small>Email:{item.email}</small>
                      </h6>
                      <h6>Supplier:{item.supplier}</h6>
                      <h6>Price:${item.price}</h6>
                      <h6>Quantity:{item.quantity}</h6>
                    </div>
                  </Card.Text>
                  <Button
                    onClick={() => handleDelete(item._id)}
                    className="w-50 mx-auto d-block"
                    variant="danger"
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyItems;
