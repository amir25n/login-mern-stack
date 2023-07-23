import { useRoutes } from 'react-router-dom';
import './App.css';
import SignupForm from './Components/SignupForm/SignupForm';
import pageRoutes from './Routes';
function App() {
  let router = useRoutes(pageRoutes)
  return (
    <>
    {router}
    </>
  );
}

export default App;
