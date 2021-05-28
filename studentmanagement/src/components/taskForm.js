import React from "react";
import { Upload, message } from "antd";
import { LoadingOutlined, PlusOutlined } from "../../node_modules/@ant-design/icons";
import "antd/dist/antd.css";
import { storage } from "../firebase/index";
import _ from "../../node_modules/lodash";

//function kiểm tra kích thước và loại file upload lên firebase
function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
}

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      stdID: "",
      name: "",
      date: "",
      gender: true,
      major: "",
      address: "",
      loading: false,
      image: [],
      urlImage: [],
      fileList: [
        {
          uid: "-1",
          status: "done",
          url: "https://placeholder.com/100x100",
        },
      ],
    };
  }

  //function lắng nghe sự thay đổi của file ảnh
  handleChange = (info) => {
    this.setState({ image: info.target.files[0] });
    return;
  };
  //function upload ảnh lên firebase
  handleUpload = () => {
    const uploadTask = storage
      .ref(`images/${this.state.image.name}`)
      .put(this.state.image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(this.state.image.name)
          .getDownloadURL()
          .then((url) => {
            this.setState({ urlImage: url });
          });
      }
    );
  };
  normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  componentDidMount() {
    let stdEdit = this.props.stdEdit;

    if (stdEdit) {
      this.setState({
        id: stdEdit.id,
        urlImage: stdEdit.urlImage,
        stdID: stdEdit.stdID,
        name: stdEdit.name,
        date: stdEdit.date,
        gender: stdEdit.gender,
        major: stdEdit.major,
        address: stdEdit.address,
      });
      document.getElementById("stdID").value = stdEdit.stdID;
      this.state.urlImage = stdEdit.urlImage;
      document.getElementById("name").value = stdEdit.name;
      document.getElementById("major").value = stdEdit.major;
      document.getElementById("date").value = stdEdit.date;
      document.getElementById("address").value = stdEdit.address;
    }
  }

  UNSAFE_componentWillReceiveProps(prop) {
    if (prop && prop.stdEdit) {
      this.setState({
        id: prop.stdEdit.id,
        urlImage: prop.stdEdit.urlImage,
        stdID: prop.stdEdit.stdID,
        name: prop.stdEdit.name,
        date: prop.stdEdit.date,
        gender: prop.stdEdit.gender,
        major: prop.stdEdit.major,
        address: prop.stdEdit.address,
      });
      document.getElementById("stdID").value = prop.stdEdit.stdID;
      document.getElementById("urlImage").value = prop.stdEdit.urlImage;
      document.getElementById("name").value = prop.stdEdit.name;
      document.getElementById("major").value = prop.stdEdit.major;
      document.getElementById("date").value = prop.stdEdit.date;
      document.getElementById("address").value = prop.stdEdit.address;
    }
  }
  onChange = (event) => {
    /** ham onChange luon tra ve 1 target  */

    let name = event.target.name;
    let value = event.target.value;

    if (name === "gender") {
      /* Nếu name của input là "true hoặc false" kiểu chuỗi thì gán lại lại bằng kiểu boolen*/
      value = event.target.value === "true" ? true : false;
    }
    this.setState({
      [name]: value,
    });
  };
  onSubmit = (event) => {
    event.preventDefault();
    var stdID = document.getElementById("stdID");
    var urlImage = this.state.urlImage;
    var name = document.getElementById("name");
    var major = document.getElementById("major");
    var date = document.getElementById("date");
    var adr = document.getElementById("address");
    if (
      stdID.value === "" ||
      name.value === "" ||
      major.value === "" ||
      date.value === "" ||
      urlImage.value === "" ||
      adr.value === ""
    ) {
      alert("Không được để trống !");
    } else {
      this.props.onSubmit(this.state);
    }
  };
  onCancel = () => {
    document.getElementById("ten").value = "";

    this.setState({
      name: "",
      status: false,
    });
  };
  render() {
    let { id } = this.state;
    const { loading, urlImage, fileList } = this.state;
    const uploadButton = (
      <div><PlusOutlined /></div>
    );
    return (
      <div className="card">
        <div className="card-header">
          {id !== "" ? "Cập Nhật Sinh Viên" : "Thêm Sinh Viên "}
          <span onClick={this.props.onhideDisplay}>
            <i className="fas fa-times"></i>
          </span>
        </div>
        <form onSubmit={this.onSubmit}>
          <div className="card-body">
            <div className="form-group">
              <label>Mã Sinh Viên</label>
              <input
                type="text"
                id="stdID"
                className="form-control"
                name="stdID"
                onChange={this.onChange}
              />
              <label>Họ Tên</label>
              <input
                type="text"
                id="name"
                className="form-control"
                name="name"
                onChange={this.onChange}
              />
              <label>Ảnh đại diện</label>
              <div onChange={this.handleChange}>
                <Upload
                  id="urlImage"
                  name="urlImage"
                  listType="picture-card"
                  className="avatar-uploader"
                  showUploadList={false}
                  action={this.handleUpload}
                  beforeUpload={beforeUpload}
                  defaultFileList={fileList}
                >
                  {urlImage.length > 0 ? (
                    <img
                      src={urlImage}
                      alt="avatar"
                      style={{ width: "100%" }}
                    />
                  ) : (
                    uploadButton
                  )}
                </Upload>
              </div>
              <br />
              <label>Ngày Sinh</label>
              <input
                type="date"
                id="date"
                className="form-control"
                name="date"
                onChange={this.onChange}
              />
              <label>Giới Tính</label>
              <select
                className="form-control"
                name="gender"
                value={this.state.gender}
                onChange={this.onChange}
              >
                <option value={true}>Nam</option>
                <option value={false}>Nữ</option>
              </select>

              <label>Ngành Học</label>
              <input
                type="text"
                id="major"
                className="form-control"
                name="major"
                onChange={this.onChange}
              />
              <label>Địa Chỉ</label>
              <input
                type="text"
                id="address"
                className="form-control"
                name="address"
                onChange={this.onChange}
              />
            </div>
          </div>
          <div className="card-footer">
            <div className="form-group"></div>
            <p>
              <input
                type="submit"
                className="btn btn-primary"
                value={id !== "" ? "Sửa" : "Thêm"}
              />
              <button
                className="btn btn-danger"
                onClick={this.props.onhideDisplay}
              >
                <i className="pe-7s-close"></i>Hủy Bỏ
              </button>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default TaskForm;
