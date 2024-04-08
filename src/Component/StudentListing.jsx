import axios from "axios"
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FetchStudentList,Removestudent} from "../Redux/Action";
import {CSVLink} from 'react-csv'

const StudentListing=(props)=>{
    const [mydata,setMyData]=useState([])
    
    useEffect(() => {
       const exp = async() => {
            try {
                const response = await axios.get('http://localhost:8000/student')
                .then((response) => {
                    let dataObject = response.data;
                    setMyData(dataObject)
                    console.log(mydata)
                    
                })
                
            } catch {
                console.log("error")
            }
        }
        props.loadstudent();

    }, [mydata])
    const handledelete = (id) => {
        if (window.confirm('Do you want to remove?')) {
             props.removestudent(id);
             props.loadstudent();
             toast.success('Student removed successfully.')
        }
    }
   /* const Export=async ()=>{
        const res=await axios.get('http://localhost:8000/student')
     console.log(res.data)    
      
     setMyData(res.data)
                } */
               
              return(
         <div>
            <div className="card">
                        <div className="card-header" >
                        
                        <Link to={'/student/add'} className="btn btn-success">Add User [+]</Link>
           <h1>StudentListing</h1>
            </div>
                        <div className="card-body">
                        
                            <table className="table table-bordered">
                                <thead className="bg-dark text-white">
                                    <tr>
                                        <td>Id</td>
                                        <td>Name</td>
                                        <td>Class</td>
                                        <td>Section</td>
                                        <td>Class-Id</td>
                            
                                        <td>Class-Description</td>
                                        <td>Section-Id</td>
                                                                          </tr>
                                </thead>
                                <tbody>
                                    {    
                                     props.student.studentlist && props.student.studentlist.map(item =>
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.student.name}</td>
                                                <td>{item.student.myclass}</td>
                                                <td>{item.student.section}</td>
                                               <td>{item.class.id}</td>
                                                <td>{item.class.description}</td>
                                                <td>{item.section.id}</td>

                                                            <td>
                                                    <Link to={'/student/edit/' + item.id} className="btn btn-primary">Edit</Link> |
                                                    <button onClick={() => { handledelete(item.id) }} className="btn btn-danger">Delete</button>
                                                </td>
                                                
                                            </tr>
                                        )
                                    }

                                </tbody>

                            </table>
                        </div>

                    </div>
                    
<CSVLink className="btn btn-primary" data={mydata}>Export to Excel</CSVLink>

                </div>
    );
        }
        const mapStateToProps = (state) => {
            return {
                student: state.student
            }
        }
        const mapDispatchToProps = (dispatch) => {
            return {
                loadstudent: () => dispatch(FetchStudentList()),
                removestudent:(id)=>dispatch(Removestudent(id))
            }
        }
        
        export default connect(mapStateToProps, mapDispatchToProps)(StudentListing);