import instance from "./instance"

export const upload = (image:any) => {
    return instance.post("/images/upload", image)
}