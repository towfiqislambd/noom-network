import { useQuery } from "@tanstack/react-query"
import { HomepageDataFunction, OurFeathers, TestimonialsData } from "./cms.api"

export const useHomepageData=()=>{
    return  useQuery({
        queryKey:['homepage-data'],
        queryFn:HomepageDataFunction
    })
}
export const useOurFeathers = () => {
    return useQuery({
        queryKey:['our-feathers'],
        queryFn: OurFeathers
    })
}
export const useTestimonialData = () => {
    return useQuery({
        queryKey:['testimonial'],
        queryFn: TestimonialsData
    })
}
