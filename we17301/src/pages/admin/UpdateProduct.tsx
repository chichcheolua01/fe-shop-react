import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getProduct, updateProduct } from "../../api/product";
import { useParams } from "react-router-dom";
import { IProduct } from "../../interfaces/product";
import { useNavigate } from "react-router-dom";

type Props = {
  products: IProduct[];
  onUpdate: (product: IProduct) => void;
};
const UpdateProduct = ({ products, onUpdate }: Props) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    const currentProduct = products.find((item) => item._id == id); // tìm sản phẩm có id trùng với id trên url
    reset(currentProduct);
  }, [products])
  const onHandleSubmit = (data: any) => {
    const updatedProduct = {
      name: data.name,
      price: data.price,
      img: data.img,
      categoryId: data.categoryId,
      desc: data.desc,
    };
    onUpdate(updatedProduct, id);
    console.log(updatedProduct);
    navigate("/admin/products");
  };
  return (
    <div>
      <form
        action=""
        className="bg-gray-400"
        onSubmit={handleSubmit(onHandleSubmit)}
      >
          <input type="text" {...register("name")} />
          <input type="number" {...register("price")} />
          <input type="text" {...register("img")} />
          <input type="text" {...register("desc")} />
          <input type="text" {...register("categoryId")} />
        <button>Update</button>
      </form>
    </div>
  );
};

export default UpdateProduct;
