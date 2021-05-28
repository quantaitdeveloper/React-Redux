import React from "react";
import TaskItem from "./taskItem";

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterid: "",
      filtergender: -1,
      dateS: "",
      dateE: "",
      getyearS: 0,
      getyearE: 0,
      getmonthS: 0,
      getmonthE: 0,
      getdateS: 0,
      getdateE: 0,
    };
  }

  onChange = (event) => {
    var name = event.target.name;
    var value = event.target.value;
    this.props.onFilter(
      name === "filterid" ? value : this.state.filterid,
      name === "filtergender" ? value : this.state.filtergender
    );
    this.setState(
      {
        [name]: value,
      },
      () => console.log(this.state.dateS)
    );
  };
  onSubmit = (e) => {
    e.preventDefault();
    let dateS = this.state.dateS.split("-");
    let dateE = this.state.dateE.split("-");
    let getyearS = parseInt(dateS[0]);
    let getyearE = parseInt(dateE[0]);
    let getmonthS = parseInt(dateS[1]);
    let getmonthE = parseInt(dateE[1]);
    let getdateS = parseInt(dateS[2]);
    let getdateE = parseInt(dateE[2]);

    this.setState(
      {
        getyearS: getyearS,
        getyearE: getyearE,
        getmonthS: getmonthS,
        getmonthE: getmonthE,
        getdateS: getdateS,
        getdateE: getdateE,
      },
      () =>
        this.props.onDate(
          this.state.getyearS,
          this.state.getyearE,
          this.state.getmonthS,
          this.state.getmonthE,
          this.state.getdateS,
          this.state.getdateE
        )
    );
    document.getElementsByClassName("form-control").value = "";
  };
  render() {
    let students = this.props.students;

    let elmStudents = students.map((student, index) => {
      /*lap qua moi phan tu cua task*/
      return (
        <TaskItem
          key={student.id}
          index={index}
          student={student}
          onDelete={this.props.onDelete}
          onUpdate={this.props.onUpdate}
        ></TaskItem>
      ); /*truyn cho tk con taskitem 1 prop task , 1 prop index  */
    });
    return (
      <div className="col-lg-12">
        <table className="table">
          <thead>
            <tr>
              <th>STT</th>
              <th style={{ width: "130px" }}>Mã Sinh Viên</th>
              <th>Họ Tên</th>
              <th>Ảnh đại diện</th>
              <th>Ngày Sinh</th>
              <th>Giới Tính</th>
              <th>Ngành Học</th>
              <th>Địa Chỉ</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row"></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td style={{width:'106px'}}>
                <div className="form-group"  >
                  <select
                    className="form-control"
                    name="filtergender"
                    value={this.state.filtergender}
                    onChange={this.onChange}
                  >
                    <option value={-1}>Tất Cả</option>
                    <option value={1}>Nam</option>
                    <option value={0}>Nữ</option>
                  </select>
                </div>
              </td>
              <td></td>
            </tr>
            {elmStudents}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TaskList;
