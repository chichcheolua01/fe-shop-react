import React, { useEffect, useState } from 'react'
import { getCategory } from '../api/category'
import { useParams } from 'react-router-dom'
import { number, string } from 'joi'
import { IProduct } from '../interfaces/product'
import { ICategory } from '../interfaces/category'

type Props = {}

const CategoriesProductPage = (props: Props) => {
    const [products, setProducts] = useState<IProduct[]>([])
    const [category, setCategory] = useState<ICategory>({})
    const { id } = useParams();
    useEffect(() => {
    (async () => {
      try {
        const {data} = await getCategory(id!)
        setProducts(data.data.products)
        setCategory(data.data);
      } catch (error) {
        
      }
    })()
    console.log(category);
  }, [])
  
  
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <header>
          <h2 className="text-xl font-thin text-gray-900 sm:text-3xl">
            {category.name}
          </h2>

          <p className="max-w-md mt-4 text-gray-500">
            {category.desc}
          </p>
        </header>

        <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((item) => {
                return (
                  <li>
                    <a href={`/products/${item._id}`} className="block overflow-hidden group">
                      <img
                        src={item.img}
                        alt=""
                        className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                      />

                      <div className="relative pt-3 bg-white">
                        <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                          {item.name}
                        </h3>

                        <p className="mt-2">
                          <span className="sr-only"> Regular Price </span>

                          <span className="tracking-wider text-gray-900">
                            {" "}
                            £{item.price} GBP{" "}
                          </span>
                        </p>
                      </div>
                    </a>
                  </li>
                );
            })}
          
        </ul>
      </div>
    </section>
  );
}

export default CategoriesProductPage