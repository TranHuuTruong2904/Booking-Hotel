import React, {useContext, useEffect, useRef} from "react";
import adminLayout from "../assets/css/login.css";
import userLayout from "../pages/userLayout"
import "../assets/css/user-view.css";
import {Link, useNavigate} from 'react-router-dom';
import AuthContext from '../common/AuthProvider';
import Form from 'react-bootstrap/Form';

const RegisterPage = () => {

    const userName = useRef("");
    const password = useRef("");

   
    const loginSubmit = async (e) => {
    e.preventDefault()
     
    };

    return (
        <div>
            <div className="bg">
                <div className="form">
                    <div className="form-toggle"></div>
                    <div className="form-panel one">
                        <div className="form-header">
                            <h1>Đăng Ký</h1>
                        </div>
                        <div className="form-content">
                            <form onSubmit={loginSubmit}>
                            <div className="form-group">
                                    <label htmlFor="username">Email</label>
                                    <input type="text" id="username" ref={userName}
                                           required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="username">Họ</label>
                                    <input type="text" id="username" ref={userName}
                                           required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Tên</label>
                                    <input type="password" id="password" ref={password}
                                           required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Giới tính</label>
                                    <Form.Select size="lg">
                                        <option value="">Nam</option>
                                        <option value="">Nữ</option>
                                    </Form.Select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Tên tài khoản</label>
                                    <input type="password" id="password" ref={password}
                                           required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Mật Khẩu</label>
                                    <input type="password" id="password" ref={password}
                                           required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Nhập Lại Mật Khẩu</label>
                                    <input type="password" id="password" ref={password}
                                           required/>
                                </div>
                                <div className="form-group">
                                    <button variant="primary" type="register" >Register</button>
                                </div>
                                <p className="form-group text">
                                    Bạn đã có tài khoản?
                                    <Link className="form-recovery link-item"  to="/login">Đăng nhập</Link>
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