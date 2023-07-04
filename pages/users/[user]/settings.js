import { useRouter } from "next/router"

const settings=()=>{
    const router=useRouter();
    return(
        <>
        <h3>this is a settings page for {router.query.user}</h3>
        </>
    )
}
export default settings;