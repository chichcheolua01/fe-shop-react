import instance from "./instance"

export const getCategories = () => {
    return instance.get("/categories")
}

export const getCategory = (id: string | number) => {
    return instance.get(`/categories/${id}`)
}