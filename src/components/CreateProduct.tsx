import { useState, ChangeEvent, FormEvent } from "react";
import { IProduct } from "../models";
import Error from "./Error";
import axios from "axios";

const productData: IProduct = {
  id: 1,
  title: "test product",
  price: 13.5,
  description: "lorem ipsum set",
  image: "https://i.pravatar.cc",
  category: "electronic",
  rating: {
    rate: 4,
    count: 10,
  },
};
interface CreateProductProps {
  onCreate: (product: IProduct) => void;
}
const CreateProduct = ({ onCreate }: CreateProductProps) => {
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState("");

  const submitHandler = async (event: FormEvent) => {
    setError("");
    event.preventDefault();
    productData.title = value;
    if (value.trim().length === 0) {
      setError("Please enter product");
      return;
    }
    const response = await axios.post<IProduct>(
      "https://fakestoreapi.com/products",
      productData
    );
    onCreate(response.data);
  };
  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        className="border py-2 px-4 mb-2 w-full"
        placeholder="Enter product"
        value={value}
        onChange={changeHandler}
      />
      {error && <Error error={error} />}
      <button
        type="submit"
        className="py-2 px-4 border bg-orange-400 hover:text-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default CreateProduct;
