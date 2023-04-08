import React from "react";
import { ICategory } from "../interfaces/category";
import { Link } from "react-router-dom";

type Props = {
  categories: ICategory[];
};

const HomePage = ({ categories }: Props) => {
  return (
    <div>
      <section>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
            <li>
              {categories.length > 0 && (
                <a
                  href={`/categories/${categories[0]._id}`}
                  className="relative block group"
                >
                  <img
                    src={categories[0].img}
                    alt=""
                    className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                  />

                  <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                    <h3 className="text-xl font-medium text-white">
                      {categories[0].name}
                    </h3>

                    <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                      Shop Now
                    </span>
                  </div>
                </a>
              )}
            </li>
            <li>
              {categories.length > 0 && (
                <a
                  href={`/categories/${categories[1]._id}`}
                  className="relative block group"
                >
                  <img
                    src={categories[1].img}
                    alt=""
                    className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                  />

                  <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                    <h3 className="text-xl font-medium text-white">
                      {categories[1].name}
                    </h3>

                    <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                      Shop Now
                    </span>
                  </div>
                </a>
              )}
            </li>

            <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
              {categories.length > 0 && (
                <a
                  href={`/categories/${categories[2]._id}`}
                  className="relative block group"
                >
                  <img
                    src={categories[2].img}
                    alt=""
                    className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                  />

                  <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                    <h3 className="text-xl font-medium text-white">
                      {categories[2].name}
                    </h3>

                    <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                      Shop Now
                    </span>
                  </div>
                </a>
              )}
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
