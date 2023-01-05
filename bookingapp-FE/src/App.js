import 'font-awesome/css/font-awesome.min.css';
import './assets/css/app.css';
import {Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import {AuthContextProvider} from "./common/AuthProvider";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import OrderPage from './pages/OrderPage';

function App() {
    return (
        <AuthContextProvider>
            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/home' element={<HomePage/>} />
                <Route path='/register' element={<RegisterPage/>} />
                <Route path='/order' element={<OrderPage/>} />
            </Routes>
        </AuthContextProvider>
    )
}
export default App;