import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import "./UpdateDetails.css";

const UpdateDetails = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { inventoryId } = useParams();
  const [inventory, setInventory] = useState({});

  useEffect(() => {
    const url = `https://stockz-server.onrender.com/inventory/${inventoryId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, [inventory]);

  let sold;
  if (parseInt(inventory.quantity) === 0) {
    sold = <p className="text-danger">Sold Out</p>;
  }

  const updateBtn = () => {
    const decreaseQuantity = parseInt(inventory.quantity) - 1;
    const updateQuantity = { quantity: decreaseQuantity.toString() };
    console.log(updateQuantity);

    if (updateQuantity.quantity >= 0) {
      const url = `https://stockz-server.onrender.com/inventory/${inventoryId}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateQuantity),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
  };

  const handleStock = (e) => {
    e.preventDefault();
    const stock = parseInt(e.target.stock.value);
    // console.log(stock)
    if (stock > 0) {
      const increaseQuantity = parseInt(inventory.quantity) + stock;
      const updateQuantity = { quantity: increaseQuantity.toString() };
      const url = `https://stockz-server.onrender.com/inventory/${inventoryId}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateQuantity),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }

    setShow(false);
  };

  return (
    <div className="container mt-5">
      <h6 className="text-center display-6 ">Update and Manage Stocks</h6>
      <div
        className="shadow-sm p-2 mb-5   
            w-75 mx-auto
            bg-bodyrounded d-flex justify-content-center inventory-container"
      >
        <div className="py-4 px-5 ">
          <img
            className="inventory-images"
            src={inventory.img}
            alt=""
            style={{ width: "100%" }}
          />
        </div>
        <div className="d-flex align-items-center  inventory-info-container">
          <div className="inventory-info">
            <h5 className="">{inventory.name}</h5>
            <small className="id-title ">{inventory._id}</small>
            <h5 className="pb-2 pt-2">
              Quantity:
              {parseInt(inventory.quantity) === 0 ? sold : inventory.quantity}
            </h5>
            <h5 className="pb-2">Supplier: {inventory.supplier}</h5>
            <h5 className="pb-2">Price: {inventory.price}</h5>
            <div className="inventory-btn">
              <button className="btn btn-dark me-2" onClick={updateBtn}>
                Delivered
              </button>
              <button
                className="btn "
                style={{ backgroundColor: "#8934eb", color: "#FFF" }}
                onClick={handleShow}
              >
                Restock
              </button>
            </div>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Restock</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="w-50 mx-auto">
                  <Form onSubmit={handleStock}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control
                        type="number"
                        placeholder="Add the quantity"
                        name="stock"
                      />
                      <div className="mt-2">
                        <button
                          className="mx-auto d-block btn"
                          type="submit"
                          style={{ backgroundColor: "#8934eb", color: "#FFF" }}
                        >
                          Restock
                        </button>
                      </div>
                    </Form.Group>
                  </Form>
                </div>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <Link to="/manage">
          <button
            className="btn"
            style={{
              backgroundColor: "#72adf1",
              borderRadius: "10px",
              border: "none",
              color: "white",
            }}
          >
            Manage Inventories
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UpdateDetails;
