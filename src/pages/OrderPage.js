import React, { useState } from "react";
import userLayout from "../pages/userLayout";
import "../assets/css/order.css";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useEffect } from "react";
import axiosApiInstance from "../common/interceptor";
import { toast } from "react-toastify";

const OrderPage = () => {
  const [listRoom, setRoom] = useState([]);
  const [info, setInfo] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  var curr = new Date();
  curr.setDate(curr.getDate());
  var date = curr.toISOString().substring(0, 10);
  console.log(date);
  async function getInfoHotel() {
    const result = await axiosApiInstance.get(
      axiosApiInstance.defaults.baseURL +
        `/api/v1/hotels/${searchParams.get("id")}`
    );
    setInfo(result?.data.data);
  }
  const getRoom = async () => {
    try {
      const result = await axiosApiInstance.get(
        axiosApiInstance.defaults.baseURL +
          `/api/v1/rooms/hotel/${searchParams.get("id")}`
      );
      setRoom(result?.data.data);
      console.log(result?.data.data);
    } catch (error) {}
  };
  const handleChange = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    const from = document.getElementById("checkin").value;
    const to = document.getElementById("checkout").value;
    if (from > to) toast.error("Ngày checkin không được lớn hơn checkout");
  };
  useEffect(() => {
    getInfoHotel();
    getRoom();
  }, []);

  return (
    <div className="book">
      <div className="info-room">
        <div className="form-header order-form">
          <h1>Thông tin khách sạn</h1>
         
          <img
            className="imgInfo img-hotel img-config card-img rounded-0 img-fluid"
            src={info?.avatar}
          />
          <div className="room-detal">
          <div><h1>{info?.name}</h1></div>
<div className="prices">
            <div className="h1-h1">Giá từ: {info?.price_min.toLocaleString('vi', {
        style: 'currency',
        currency: 'VND'
    })
   } - {info?.price_max.toLocaleString('vi', {
        style: 'currency',
        currency: 'VND'
    })}</div>
        

</div>  <div>Mô tả: {info?.description}</div>
          </div>
        </div>
      </div>
      <div className="form-book">
        <div className="form-panel one">
          <div className="form-header">
            <h1>Đặt phòng</h1>
          </div>
          <div className="form-content">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className='txtFrm' htmlFor="">Ngày đặt</label>
                <input
                  class="form-control col g-2 m-1"
                  type="date"
                  defaultValue={date}
                  id="checkin"
                  placeholder="Check In"
                />
              </div>
              <div className="form-group">
                <label className='txtFrm' htmlFor="">Ngày trả</label>
                <input
                  class="form-control col g-2 m-1"
                  type="date"
                  defaultValue={date}
                  id="checkout"
                  placeholder="Check Out"
                />
              </div >
              <div className="form-group">
              <label className='txtFrm' htmlFor="">Phòng</label>
              <Form.Select className="selectFrm" size="lg" onChange={handleChange}>
                {listRoom.map((item) => (
                  <option value="1571058">
                    Loại phòng: {item.name} - Giá: {item.price}
                  </option>
                ))}
              </Form.Select>
              </div>
              <div className="form-group">
                <button variant="primary" type="submit">
                  Đặt phòng
                </button>
              </div>
              <Link className="exit" to="/home">
                {" "}
                Thoát
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default userLayout(OrderPage);
