import { useState } from "react";
import { IProduct } from "../models";
import { MouseEvent } from "react";
interface ProductProps {
  product: IProduct;
  onDelete: (id: number) => void;
}
const Product = ({ product, onDelete }: ProductProps) => {
  const [details, setDetails] = useState(false);
  const bgButtonClass = details ? "bg-blue-500" : "bg-yellow-500";
  const btnClassess = ["py-2 px-4 border", bgButtonClass];
  const deleteHandler = (event: MouseEvent<HTMLButtonElement>) => {
    console.log("REEEEEEEE");
    onDelete(product.id);
  };
  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <button
        className="border mb-2  rounded-full bg-red-700 text-white  px-4 py-2"
        onClick={deleteHandler}
      >
        Delete
      </button>
      <img src={product.image} className="w-1/6" alt="Product" />
      <p>{product.title}</p>
      <p className="font-bold">{product.price}</p>
      <button
        className={btnClassess.join(" ")}
        onClick={() => setDetails((prev) => !prev)}
      >
        {details ? "Hide details" : "Show details"}
      </button>

      {details && (
        <div>
          <p>{product.description}</p>
          <p>
            Rate:{" "}
            <span style={{ fontWeight: "bold" }}>{product?.rating?.rate}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Product;
