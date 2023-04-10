import React from "react";
import { useForm } from "react-hook-form";
import { IProduct } from "../../interfaces/product";
import { ICategory } from "../../interfaces/category";
import { upload } from "../../api/upload";
import { useNavigate } from "react-router-dom";

type Props = {
  onCreate: (product: IProduct) => void;
  categories: ICategory[];
};

const AddProduct = ({ onCreate, categories }: Props) => {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onHandleSubmit = async (data: any) => {
    onCreate(data);
    navigate("/admin/products");
  };
  return (
    <div>
      <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form
                action=""
                className="space-y-4"
                onSubmit={handleSubmit(onHandleSubmit)}
              >
                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                    {...register("name")}
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="price">
                      Price
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Price"
                      type="number"
                      id="price"
                      {...register("price")}
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Image
                    </label>
                    <input type="file" {...register("img")} />
                  </div>
                </div>

                <select {...register("categoryId")} id="">
                  <option value="">--Default--</option>
                  {categories.map((item) => {
                    return <option value={item._id}>{item.name}</option>;
                  })}
                </select>

                <div>
                  <label className="sr-only" htmlFor="message">
                    Description
                  </label>

                  <textarea
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Message"
                    rows={8}
                    id="message"
                    {...register("desc")}
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    Send Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default AddProduct;
