import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FunctionAddStudent } from "../Redux/Action";

const Addstudent = () => {
  const [name, namechange] = useState("");
  const [myclass, myclasschange] = useState("");
  const [section, sectionchange] = useState("");
  const [classId, changeclassId] = useState("");
  const [classDescription, changeClassDescription] = useState("");
  const [sectionId, changeSectionId] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    const studentobj = {
      name,
      myclass,
      section,
      classId,
      classDescription,
      sectionId,
    };
    
    const obj = {
      student: {
        id:1,
        name: studentobj.name,
        myclass: studentobj.myclass,
        section: studentobj.section,
      },
      class: {
        id: studentobj.classId,
        name: studentobj.myclass,
        description: studentobj.classDescription,
      },
      section: {
        id: studentobj.sectionId,
        section: studentobj.section,
      }
    };
    console.log(obj)
    
    dispatch(FunctionAddStudent(obj));
    navigate("/student");
  };

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <div className="card">
          <div className="card-header" style={{ textAlign: "left" }}>
            <h2>Add Student</h2>
          </div>
          <div className="card-body" style={{ textAlign: "left" }}>
            <div className="row">
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    value={name}
                    onChange={(e) => namechange(e.target.value)}
                    className="form-control"
                  ></input>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Class</label>
                  <input
                    value={myclass}
                    onChange={(e) => myclasschange(e.target.value)}
                    className="form-control"
                  ></input>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Section</label>
                  <input
                    value={section}
                    onChange={(e) => sectionchange(e.target.value)}
                    className="form-control"
                  ></input>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Class-id</label>
                    <input
                      value={classId}
                      onChange={(e) => changeclassId(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Class-description</label>
                    <input
                      value={classDescription}
                      onChange={(e) => changeClassDescription(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Section-id</label>
                    <input
                      value={sectionId}
                      onChange={(e) => changeSectionId(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer" style={{ textAlign: "left" }}>
            <button
              className="btn btn-primary"
              type="submit"
              onClick={handlesubmit}
            >
              Submit
            </button>{" "}
            |
            <Link className="btn btn-danger" to={"/student"}>
              Back
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Addstudent;
