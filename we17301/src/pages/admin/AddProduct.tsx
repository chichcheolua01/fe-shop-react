import React from "react";
import { useForm } from "react-hook-form";
import { IProduct } from "../../interfaces/product";

type Props = {
  onCreate: (product:IProduct) => void
};

const AddProduct = ({onCreate}: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onHandleSubmit = (data:any) => {
    onCreate(data)
  };
  return (
    <div>
      <form
        action=""
        className="bg-gray-400"
        onSubmit={handleSubmit(onHandleSubmit)}
      >
        <input type="text" {...register("name")} placeholder="name" />
        <input type="number" {...register("price")} placeholder="price" />
        <input type="text" {...register("img")} />
        <input type="text" {...register("desc")} placeholder="desc" />
        <input type="text" {...register("categoryId")} placeholder="category" />
        <button>Update</button>
      </form>
    </div>
  );
};
export default AddProduct;
