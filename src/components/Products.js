import React, { useState } from "react";
import formatCurrency from "../util";
import Fade from "react-reveal/Fade";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";

const Products = (props) => {
  const [state, setState] = useState({ product: null });

  const openModal = (product) => {
    setState({ product });
  };
  const closeModal = () => {
    setState({ product: null });
  };
  const { product } = state;
  return (
    <div id="catalogue">
      <Fade bottom cascade>
        <ul className="products">
          {props.products.map((product) => (
            <li key={product._id}>
              <div className="product">
                <a href={"#" + product._id} onClick={() => openModal(product)}>
                  <img src={product.image} alt={product.title}></img>
                  <p>{product.title}</p>
                </a>
                <div className="product-price">
                  <div>{formatCurrency(product.price)}</div>
                  <button
                    onClick={() => props.addToCart(product)}
                    className="button primary"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Fade>
      {product && (
        <Modal isOpen={true} onRequestClose={closeModal}>
          <Zoom>
            <button className="close-modal" onClick={closeModal}>
              x
            </button>
            <div className="product-details">
              <img src={product.image} alt={product.title}></img>
              <div className="product-details-description">
                <p>
                  <strong>{product.title}</strong>
                </p>
                <p>{product.description}</p>
                <p>
                  Avaiable Sizes:
                  {product.availableSizes.map((x) => (
                    <span>
                      <button className="button">{x}</button>
                    </span>
                  ))}
                </p>
                <div className="product-price">
                  <div>{formatCurrency(product.price)}</div>
                  <button
                    className="button primary"
                    onClick={() => {
                      props.addToCart(product);
                      closeModal();
                    }}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </Zoom>
        </Modal>
      )}
    </div>
  );
};
export default Products;
