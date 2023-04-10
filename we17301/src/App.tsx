import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import UserLayout from "./layouts/UserLayout";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import ProductManagerment from "./pages/admin/ProductManagerment";
import AddProduct from "./pages/admin/AddProduct";
import UpdateProduct from "./pages/admin/UpdateProduct";
import {
  createProduct,
  getProducts,
  removeProduct,
  updateProduct,
} from "./api/product";
import { getCategories } from "./api/category";
import { IProduct } from "./interfaces/product";
import { ICategory } from "./interfaces/category";
import Signin from "./pages/Signin";
import CategoriesProductPage from "./pages/CategoriesProductPage";
import { upload } from "./api/upload";
import Signup from "./pages/Signup";

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await getProducts();
        setProducts(data.data);
        console.log(data);
      } catch (error) {}
    })();
  }, []);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await getCategories();
        setCategories(data.data);
        console.log(data);
      } catch (error) {}
    })();
  }, []);
  const onHandleRemove = async (id: number | string) => {
    try {
      console.log(id);
      await removeProduct(id);
      setProducts(products.filter((item) => item._id != id));
    } catch (error) {}
  };
  const onHandleUpdate = async (product: IProduct, id: string | number) => {
    try {
      const updatedProduct = {
        name: product.name,
        price: product.price,
        img: product.img,
        categoryId: product.categoryId,
        desc: product.desc,
      };
      updateProduct(updatedProduct, id)
    } catch (error) {}
  };
  const onHandleCreate = async (product: IProduct) => {
    try {
      const formData = new FormData();
      formData.append("files", product.img[0]);
      const result = await upload(formData);
      createProduct({
        ...product,
        img: result.data.urls[0].url,
      })?.then((res) => setProducts([...products, res.data.product]));
    } catch (error) {

    }
  };
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<UserLayout />}>
          <Route index element={<HomePage categories={categories} />} />
          <Route path="products">
            <Route
              index
              element={
                <ProductPage products={products} categories={categories} />
              }
            />
            <Route path=":id" element={<ProductDetailPage />} />
          </Route>
          <Route path="categories">
            <Route path=":id" element={<CategoriesProductPage />} />
          </Route>
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
        </Route>
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="products">
            <Route
              index
              element={
                <ProductManagerment
                  products={products}
                  onRemove={onHandleRemove}
                />
              }
            />
            <Route
              path="add"
              element={
                <AddProduct onCreate={onHandleCreate} categories={categories} />
              }
            />
            <Route
              path=":id/update"
              element={
                <UpdateProduct products={products} onUpdate={onHandleUpdate} categories={categories} />
              }
            />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
