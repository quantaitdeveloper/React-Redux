import { Button, Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Link, NavLink, useHistory } from "react-router-dom";



export default function Navbar() {
  let history = useHistory();

  let logout = () => {
    localStorage.removeItem("access");
    history.push("/login");
  };
  
  return (
    <div>
      <div className="header">
        <Link to="/home"><h2 className="logo">Nhóm 3</h2></Link>
        <input type="checkbox" id="chk" />
        <label htmlFor="chk" className="show-menu-btn">
          <i className="fas fa-ellipsis-h" />
        </label>
        <ul className="menu">
          <NavLink to="/home/qlsv" activeStyle={{color:'#3498db'}} >Quản Lý Sinh Viên</NavLink>
          <NavLink to="/home/about" activeStyle={{color:'#3498db'}} >Giới Thiệu</NavLink>
          <NavLink to="/home/aaa" activeStyle={{color:'#3498db'}} >Dịch Vụ</NavLink>
          <NavLink to="/home/bbb" activeStyle={{color:'#3498db'}} >Công Việc</NavLink>
          <Button className="btn btn-success" onClick={logout}>Đăng Xuất</Button>
          <label htmlFor="chk" className="hide-menu-btn">
            <i className="fas fa-times" />
          </label>
        </ul>
      </div>

      {/*end navbar*/}
  
    </div>
  );
}
