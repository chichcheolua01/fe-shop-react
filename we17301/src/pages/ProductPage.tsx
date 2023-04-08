import React from "react";
import { IProduct } from "../interfaces/product";
import { ICategory } from "../interfaces/category";
import { Link } from "react-router-dom";

type Props = {
  products: IProduct[];
  categories: ICategory[];
};

const ProductPage = ({ products, categories }: Props) => {
  return (
    <div className="p-[50px] grid grid-cols-3 gap-[30px]">
      {products.map((item) => {
        return (
          <Link to={`/products/${item._id}`}>
            <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              <img
                alt="Office"
                src={item.img}
                className="h-56 w-full object-cover"
              />

              <div className="bg-white p-4 sm:p-6">
                <a href="#">
                  <h3 className="mt-0.5 text-lg text-gray-900">{item.name}</h3>
                </a>

                <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                  {item.desc}
                </p>
              </div>
            </article>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductPage;
