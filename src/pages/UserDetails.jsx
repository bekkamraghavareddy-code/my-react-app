import { useParams } from "react-router-dom"

function UserDetails() {
    const {id,name} = useParams();
    return <>
        <div> User id = {id} </div>
         <div> User name = {name ? name:"No name Found"} </div>
    </>
}
export default UserDetails;