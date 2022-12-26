import React, {useEffect, useState} from "react";
import userLayout from "../pages/userLayout"
import "./../assets/css/user-view.css";
import axiosApiInstance from "../common/interceptor";
import axios from "../common/axios";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import Form from 'react-bootstrap/Form';

const HomePage = () => {
const [list,setList]=useState([])
async function getTP() {
    const result = await axiosApiInstance.get(axiosApiInstance.defaults.baseURL + `/api/v1/hotels/city/1566083`);
    console.log(result?.data.data)
    setList(result?.data.data)
}
const handleChange =async (e) => {
    try {
        const result = await axiosApiInstance.get(axiosApiInstance.defaults.baseURL + `/api/v1/hotels/city/${e.currentTarget.value}`);
        setList(result?.data.data)
    } catch (error) {
        
    }
   
    

 }
useEffect(() => {
    getTP();

}, []);


    return <>
        {/* <!-- Start Banner Hero --> */}
        <div id="template-mo-zay-hero-carousel" class="carousel slide" data-bs-ride="carousel">
            <ol class="carousel-indicators d-none">
                <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="0" class="active"></li>
                <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="1"></li>
            </ol>
            <div class="carousel-inner info-shop">
                <div class="carousel-item active">
                    <div class="container banner">
                        <div class="row">
                            <img src="https://e0.pxfuel.com/wallpapers/169/204/desktop-wallpaper-hotel-room.jpg"
                                 alt=""/>
                        </div>
                    </div>
                </div>
                <div class="carousel-item ">
                    <div class="container banner">
                        <div class="row">
                            <img src="https://w0.peakpx.com/wallpaper/261/106/HD-wallpaper-gorgeous-hotel-room-in-bora-bora-beach-hotel-room-trees.jpg"
                                 alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev text-decoration
            -none w-auto ps-3" href="#template-mo-zay-hero-carousel"
               role="button" data-bs-slide="prev">
                <i class="fa fa-chevron-left"></i>
            </a>
            <a class="carousel-control-next text-decoration-none w-auto pe-3" href="#template-mo-zay-hero-carousel"
               role="button" data-bs-slide="next">
                <i class="fa fa-chevron-right"></i>
            </a>
        </div>
        {/* <!-- End Banner Hero --> */}

      

        {/**<!--Start favorite category--> */}

        {/* <!-- Start hottel Product --> */}
        <section>
            

            <div className="container py-5">
                <div className="row text-center py-3">
                    <div className="col-lg-6 m-auto">
                        <h2 className="h1 py-1">Chọn nơi muốn đặt phòng</h2>
                        <p></p>
                    </div>
                </div>
                
                <div class="navbar align-self-center d-flex ">
                    <Form.Select size="lg"  onChange={handleChange}>
                        <option value="1566083">Thành Phố Hồ Chí Minh</option>
                        <option value="1571058">Thành Phố Phan Thiết</option>
                        <option value="1562414">Thành Phố Bà Rịa - Vũng Tàu</option>
                    </Form.Select>
                    </div>
                <div className="row">
                    {list.map((item) => (
                        <div className="col-md-3">
                            <div className="card mb-3 product-wap rounded-0">
                                <div className="card rounded-0">
                                    <img className="img-config card-img rounded-0 img-fluid"
                                       src={item.avatar} />

                                       <p>{item.name}</p>
                                   
                                </div>
                            
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        {/* <!-- End Best Seller Product --> */}

       

     
    </>

}

export default userLayout(HomePage);