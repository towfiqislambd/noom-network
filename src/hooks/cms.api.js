import { axiosPublic } from "./useAxiosPublic"

export const HomepageDataFunction = async () => {
    const {data}= await axiosPublic('/api/home-page')
    return data?.data
}
export const OurFeathers = async () => {
    const {data} = await axiosPublic('/api/our-features')
    return data?.data
}
export const TestimonialsData = async () => {
    const {data} = await axiosPublic('/api/client-says')
    return data?.data
}