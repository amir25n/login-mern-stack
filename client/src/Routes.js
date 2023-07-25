import LoginForm from "./Components/LoginFrom/LoginForm";
import SignupForm from "./Components/SignupForm/SignupForm";

let pageRoutes = [
    {path:"/" , element:<SignupForm />} , 
    {path:"/signup" , element:<SignupForm />},
    {path:"/login" , element:<LoginForm />}

]
export default pageRoutes