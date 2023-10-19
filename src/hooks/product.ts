import React, { useEffect, useState } from "react";
import { IProduct } from "../models";
import axios, { AxiosError } from "axios";

const useProduct = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
  return { products, loading, error };
};

export default useProduct;
