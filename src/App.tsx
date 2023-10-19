import { useState } from "react";
import CreateProduct from "./components/CreateProduct";
import Error from "./components/Error";
import Loader from "./components/Loader";
import Modal from "./components/Modal";
import Product from "./components/Product";
import useProduct from "./hooks/product";
import { IProduct } from "./models";

function App() {
  const [view, setView] = useState(false);
  const { loading, error, products, addProduct } = useProduct();

  const createHandler = (product: IProduct) => {
    setView(false);
    addProduct(product);
  };
  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <Error error={error} />}
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
      {view && (
        <Modal title="Create new product" onClose={() => setView(false)}>
          <CreateProduct onCreate={createHandler} />
        </Modal>
      )}
      <button
        onClick={() => setView(true)}
        className="border fixed bottom-5 right-3 rounded-full bg-green-700 text-white text-2xl px-4 py-2"
      >
        +
      </button>
    </div>
  );
}

export default App;
