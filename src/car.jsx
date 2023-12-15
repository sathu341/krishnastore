import Stoke from "./stroke";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Car(props){
    const notify = () => toast.error("Wow so easy!");
    return(
        <>
         <h1>  The Car Price is:&#8377;{props.price}</h1>
         <h3>
            <Stoke stk={40}/>
         </h3>
         <h4>
            Color:{props.clr}
         </h4>
         <button onClick={notify}>Notify!</button>
        <ToastContainer
         position="top-center"
         theme="dark"
         hideProgressBar={false}
        />
        </>
    )
}
export default Car;