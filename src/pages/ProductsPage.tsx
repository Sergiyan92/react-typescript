import React, { useContext } from "react";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { IProduct } from "../models";
import { ModalContext } from "../context/ModalContext";
import useProduct from "../hooks/product";
import Product from "../components/Product";
import Modal from "../components/Modal";
import CreateProduct from "../components/CreateProduct";

const ProductsPage = () => {
  const { loading, error, products, addProduct } = useProduct();
  const { modal, open, close } = useContext(ModalContext);

  const createHandler = (product: IProduct) => {
    close();
    addProduct(product);
  };
  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <Error error={error} />}
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
      {modal && (
        <Modal title="Create new product" onClose={close}>
          <CreateProduct onCreate={createHandler} />
        </Modal>
      )}
      <button
        onClick={open}
        className="border fixed bottom-5 right-3 rounded-full bg-green-700 text-white text-2xl px-4 py-2"
      >
        +
      </button>
    </div>
  );
};

export default ProductsPage;
