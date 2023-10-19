import Error from "./components/Error";
import Loader from "./components/Loader";
import Modal from "./components/Modal";
import Product from "./components/Product";
import useProduct from "./hooks/product";

function App() {
  const { loading, error, products } = useProduct();
  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <Error error={error} />}
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
      <Modal />
    </div>
  );
}

export default App;
