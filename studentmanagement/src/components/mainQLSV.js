import { Component } from "react";
import FormControl from "./formControl";
import TaskList from "./taskList";
import TaskForm from "./taskForm";
import Navbar from "./Menu";
import Home from "./Home";
import { Link, Redirect } from "react-router-dom";
import { Button } from "antd";
import Login from "./loginForm";

export default class MainQLSV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      isdisplayForm: false,
      stdEditting: null,
      filter: {
        id: "",
        gender: -1,
      },
      keyword: "",
      sort: {
        by: "name",
        value: 1,
      },
      getyearS: 0,
      getyearE: 0,
      getmonthS: 0,
      getmonthE: 0,
      getdateS: 0,
      getdateE: 0,
    };
  }

  onGenerateData = () => {
    let students = 
      [
        {
            "id": 0.9862407148717394,
            "stdID": "2017601742",
            "name": "Tô Anh Quân",
            "date": "1999-11-21",
            "gender": true,
            "major": "Công Nghệ Thông Tin",
            "address": "Vĩnh Phúc",
            "loading": false,
            "image": {
                "uid": "rc-upload-1618742038542-5"
            },
            "urlImage": "https://firebasestorage.googleapis.com/v0/b/qstore-99eb3.appspot.com/o/images%2F0c55a8f4150cea52b31d.jpg?alt=media&token=cac5bdbb-a643-4e0c-8831-79013ee9cb76",
            "fileList": [
                {
                    "uid": "-1",
                    "status": "done",
                    "url": "https://placeholder.com/100x100"
                }
            ]
        }
    
    ];
    /*Tạo 1 Mảng gồm các sinh vien khác nhau */
    /*setSate cho cái state khởi tạo bên trên */
    var a = localStorage.getItem("students");
    var b = JSON.parse(a);

    if (b) {
      /*kiem tra b co khac null hay ko ? neu khac null */
      this.setState({
        students: b /*this.state.students = b , b la 1 mang gom 5 object(trong local)  */,
      });
    } else {
      this.setState({
        students: students /*this.state.students = var students */,
      });
      localStorage.setItem(
        "students",
        JSON.stringify(students)
      ); /* setItem (key ,value)*/
    }
    console.log(this.state.students);
  };

  componentDidMount() {
    if (localStorage && localStorage.getItem("students")) {
      var students = JSON.parse(localStorage.getItem("students"));
      
      this.setState({
        students: students,
      });
    }
  }
  generateID() {
    return Math.random(100);
  }
  onshowDisplay = () => {
    this.setState({
      isdisplayForm: true,
    });
  };
  onhideDisplay = () => {
    this.setState({
      isdisplayForm: false,
      stdEditing: null,
    });
  };

  onSubmit = (data) => {
    var students = this.state.students;
    if (data.id === "") {
      data.id = this.generateID(); /* co duoc data la 1 cai state (object) , push no vao cai mang object cua state APP.js la xong*/
      /* lay students tu state cua APP.js */
      students.push(data);
    } else {
      var index = this.findIndex(data.id);
      students[index] = data;
    }
    localStorage.setItem("students", JSON.stringify(students));

    this.onhideDisplay();
  };
  findIndex = (id) => {
    var students = this.state.students;
    var result = -1;
    students.forEach((student, index) => {
      if (student.id === id) {
        result = index;
      }
    });
    return result;
  };
  onDelete = (id) => {
    var check = window.confirm("Xác Nhận Xóa ?");
    if (check === true) {
      var students = this.state.students;
      var index = this.findIndex(id);

      if (index !== -1) {
        students.splice(index, 1);
        this.setState({
          students: students,
        });
        localStorage.setItem("students", JSON.stringify(students));
      }
    }
  };
  onUpdate = (id) => {
    let studentEditing = this.state.students;
    let index = this.findIndex(id);
    var stdEditing = studentEditing[index];
    this.setState({
      stdEditing: stdEditing,
    });
    this.onshowDisplay();
  };
  onFilter = (filterid, filtergender) => {
    filtergender = parseInt(filtergender);
    this.setState({
      filter: {
        id: filterid,
        gender: filtergender,
      },
    });
  };
  onSearch = (keyword) => {
    this.setState({
      keyword: keyword,
    });
  };
  onSort = (sortBy, sortValue) => {
    this.setState({
      sort: {
        by: sortBy,
        value: sortValue,
      },
    });
  };
  onDate = (yearS, yearE, monthS, monthE, dateS, dateE) => {
    this.setState({
      getyearS: yearS,
      getyearE: yearE,
      getmonthS: monthS,
      getmonthE: monthE,
      getdateS: dateS,
      getdateE: dateE,
    });
  };

  logout = () => {
    localStorage.removeItem("access");
  };
  render() {
    let students = this.state.students;
    let stdEditing = this.state.stdEditing;
    let display = this.state.isdisplayForm ? (
      <TaskForm
        stdEdit={stdEditing}
        onSubmit={this.onSubmit}
        onhideDisplay={this.onhideDisplay}
      ></TaskForm>
    ) : (
      ""
    );
    let filter = this.state.filter;
    let { keyword } = this.state;
    let sortBy = this.state.sort.by;
    let sortValue = this.state.sort.value;
    let {
      getdateS,
      getdateE,
      getmonthS,
      getmonthE,
      getyearS,
      getyearE,
    } = this.state;
    if (getdateS && getdateE) {
      students = students.filter((student) => {
        let date = student.date.split("-");
        let getdate = parseInt(date[2]);
        let getmonth = parseInt(date[1]);
        let getyear = parseInt(date[0]);

        if (getyear >= getyearS && getyear <= getyearE) {
          if (getmonth >= getmonthS && getmonth <= getmonthE) {
            if (getdate >= getdateS && getdate <= getdateE) {
              return student;
            } else return -1;
          }
        }
      });
    }
    if (filter) {
      students = students.filter((student) => {
        if (filter.gender === -1) {
          return student;
        } else {
          return student.gender === (filter.gender === 1 ? true : false);
        }
      });
    }
    //
    if (keyword) {
      students = students.filter((student) => {
        return student.stdID.indexOf(keyword) !== -1;
      });
    }

    if (sortBy === "name") {
      students.sort((studentA, studentB) => {
        if (studentA.name > studentB.name) {
          return sortValue;
        } else {
          if (studentA.name < studentB.name) return sortValue;
          else return 0;
        }
      });
    }
  
    
   
    return (
     
      
      <div>
        <div className="container-fluid">
<<<<<<< HEAD
         
=======
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 ">
              
            </div>

            {/*end menu*/}
          </div>
>>>>>>> 0cc21d503e40d43ad3c38ecc96d38258376851e3
          <div className="row">
            <div
              className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 qlsv"
              style={{ paddingTop: "20px" }}
            >
              <h1>
                <b>Quản Lý Sinh Viên</b>
              </h1>
              <hr />
          </div>
          </div>
              <div className="row">
                <div
                  className={
                    this.state.isdisplayForm
                      ? "col-lg-3 col-md-3 col-sm-3 col-xs-3 col-12 taskform"
                      : "col-lg-0 col-md-0 col-sm-0 col-xs-0 col-0 taskform"
                  }
                >
                  {display}
                </div>
                <div
                  className={
                    this.state.isdisplayForm
                      ? "col-lg-9 col-md-9 col-sm-9 col-xs-9 col-12 formControl"
                      : "col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 formControl"
                  }
                >
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.onshowDisplay}
                  >
                    <i className="fas fa-plus" /> Thêm Sinh Viên
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger ml-5"
                    onClick={this.onGenerateData}
                  >
                    <i className="pe-7s-menu" /> Hiển Thị Tất Cả Sinh Viên
                  </button>
                  <FormControl
                    onSearch={this.onSearch}
                    onSort={this.onSort}
                    onDate={this.onDate}
                  ></FormControl>
                  <div className="row">
                    <TaskList
                      students={students}
                      onDelete={this.onDelete}
                      onUpdate={this.onUpdate}
                      onFilter={this.onFilter}
                      onDate={this.onDate}
                    ></TaskList>{" "}
                    {/*truyền prop cho thằng con , với giá trị của props là các giá trị của state*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        
      
    );
  }
}
