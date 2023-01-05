import React, {useContext, useEffect, useRef} from "react";
import adminLayout from "../assets/css/login.css";
import userLayout from "../pages/userLayout"
import "../assets/css/user-view.css";
import {Link, useNavigate} from 'react-router-dom';
import AuthContext from '../common/AuthProvider';
import Form from 'react-bootstrap/Form';
import {toast} from 'react-toastify'
import axios from "../common/axios";
import axiosApiInstance from "../common/interceptor";

const RegisterPage = () => {

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.prevetDefault()
        if (e.target.elements.password.value !== e.target.elements.cpassword.value) {
            toast.error("Xác nhận lại mật khẩu không khớp")
            return
        }
        const payload = {
            email: e.target.elements.email.value,
            firstname: e.target.elements.firstname.value,
            lastname: e.target.elements.lastname.value,
            gender: e.target.elements.gender.value,
            phone: e.target.elements.phone.value,
            username: e.target.elements.username.value,
            password: e.target.elements.password.value,
        }
        console.log(axiosApiInstance.defaults.baseURL + '/api/v1/users/register')
        const result = await axios.post(axiosApiInstance.defaults.baseURL + `/api/v1/users/?email=${payload.email}&firstname=${payload.firstname}&lastname=${payload.lastname}
                                        &gender=${payload.gender}&phone=${payload.phone}&username=${payload.username}&password=${payload.password}`)
        if(result.data.data.status){
            toast.success("Tạo tài khoản thành công")
            navigate("/login")
        }
        else
            toast.error(result.data.data.message)
    }

    useEffect(() => {

    }, [])

    return (
        <div>
            <div class="bg">
                <div class="img"></div>
                <div class="formdk">
                    <div class="form-toggle"></div>
                    <div class="form-panelDK one">
                        <div class="form-header">
                            <h1>Đăng Ký</h1>
                        </div>
                        <div class="form-content">
                            <form onSubmit={handleSubmit}>
                                <div className="row form-group">
                                    <div className="col-md-6">
                                        <label htmlFor="">Họ Đệm</label>
                                        <input type="text" id="firstname" name="firstname" required="required"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="lastname">Tên</label>
                                        <input type="lastname" id="lastname" name="" required="required"/>
                                    </div>
                                </div>

                                <div class="row form-group">
                                    <div className="col-md-6">
                                        <label for="username">Tên đăng nhập</label>
                                        <input type="text" id="username" name="username" required="required" />
                                    </div>
                                    <div className="col-md-6">
                                        <label for="gender">Giới tính</label>
                                        <input type="gender" id="gendrr" name="gender" required="required" />
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col-md-6">
                                        <label for="">Email</label>
                                        <input type="email" id="email" name="email" required="required" />
                                    </div>
                                    <div class="col-md-6">
                                        <label for="phone">SĐT</label>
                                        <input type="text" id="phone" name="phone" required="required" />
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col-md-6">
                                        <label for="password">Mật Khẩu</label>
                                        <input type="password" id="password" name="password" required="required" />
                                    </div>
                                    <div class="col-md-6">
                                        <label for="password">Xác Nhận Mật Khẩu</label>
                                        <input type="password" id="cpassword" name="cpassword" required="required" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <button type="submit">Đăng Ký</button>
                                </div>
                                <p class="form-group text">
                                    Bạn đã có tài khoản?
                                    <Link class="form-recovery" to="/login"> Đăng nhập</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default userLayout(RegisterPage);