import { useRouter } from "next/router";
import Image from "next/image";
import useSWR from 'swr';

const fetcher=(...args)=>fetch(...args).then((res) => res.json())

const ProductDetails=()=>{

    const router=useRouter();
    const { id } = router.query;

    const { data, error } = useSWR(`https://dummyjson.com/products/${id}`, fetcher);
    if(error){
        return <h3>An Error Occured</h3>
      }
      
    if(!data){
        return <h3>Loading</h3>
      }

    return(
        <>
        <h3>Product name: {data.title}</h3>
        <h3>Brand: {data.brand}</h3>
       <h4>Category: {data.category}</h4>
        <h4>Description: {data.description}</h4>
        <h3>Price: {data.price}</h3>
        </>
    )
}
export default ProductDetails;