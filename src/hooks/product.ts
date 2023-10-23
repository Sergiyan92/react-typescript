import { useEffect, useState } from "react";
import { IProduct } from "../models";
import axios, { AxiosError } from "axios";

const useProduct = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const addProduct = (product: IProduct) => {
    setProducts((prev) => [...prev, product]);
  };

  const fetchProduct = async () => {
    try {
      setError("");
      setLoading(true);
      const response = await axios.get<IProduct[]>(
        "https://fakestoreapi.com/products?limit=5"
      );
      setProducts(response.data);
      setLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  const deleteProducts = async (id: number) => {
    try {
      setError("");
      setLoading(true);
      await axios.delete(`https://fakestoreapi.com/products/${id}`);
      // Після успішного видалення оновлюємо список продуктів
      const updatedProducts = products.filter((product) => product.id !== id);
      setProducts(updatedProducts);
      setLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message);
    }
  };
  return { products, loading, error, addProduct, deleteProducts };
};

export default useProduct;
