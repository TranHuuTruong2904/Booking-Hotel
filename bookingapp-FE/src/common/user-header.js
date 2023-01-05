import React, {useContext, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import AuthContext from "../common/AuthProvider";
import "../assets/css/user-header.css"


const UserHeader = () => {
    const  navigate = useNavigate()
    return <nav class="navbar header nav-light navbar-expand-lg navbar-light shadow fixed-top">
        <div class="container container-navbar my-nav d-flex justify-content-between align-items-center">
            <div className="nav-header">
                <Link class="navbar-brand h2" to="/home">
                    BOOKING HOTEL
                </Link>
                <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse"
                        data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>


            <div class="align-self-center mgt-16 user-header mgd-16 collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between"
                id="templatemo_main_nav">
                <div class="flex-fill">
                    <ul class="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="/home">Trang Chủ</a>
                        </li>
                    </ul>
                </div>
                <div class="flex-fill">
                    <ul class="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="/contact">Liên hệ</a>
                        </li>
                    </ul>
                </div>
                <div class="flex-fill">
                    <ul class="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="/login">Đăng Xuất</a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </nav>

}

export default UserHeader;