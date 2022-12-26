import 'font-awesome/css/font-awesome.min.css';
import './assets/css/app.css';
import {Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import {AuthContextProvider} from "./common/AuthProvider";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";


function App() {
    // const tokens = JSON.parse(localStorage.getItem('tokens'));
    // const permission=(tokens?(jwt_decode(tokens?.data?.accessToken)?.authorities):null)
    return (
        <AuthContextProvider>
            <Routes>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/' element={<HomePage/>} />
                <Route path='/home' element={<HomePage/>} />
                <Route path='/register' element={<RegisterPage/>} />
            </Routes>
        </AuthContextProvider>
    )
}
export default App;