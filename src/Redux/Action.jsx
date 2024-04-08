import axios from "axios"
import { toast } from "react-toastify"
import Updatestudent from "../Component/UpdateStudent"
import {ADD_STUDENT, DELETE_STUDENT, FAIL_REQUEST, GET_STUDENT_LIST, GET_STUDENT_OBJ, MAKE_REQUEST, UPDATE_STUDENT } from "./ActionType"

export const makeRequest=()=>{
    return{
        type:MAKE_REQUEST
    }
}
export const failRequest=(err)=>{
    return{
        type:FAIL_REQUEST,
        payload:err
    }
}
export const geStudentList=(data)=>{
    return{
        type:GET_STUDENT_LIST,
        payload:data
    }
}
export const deleteStudent=()=>{
    return{
        type:DELETE_STUDENT
    }
}
export const addStudent=()=>{
    return{
        type:ADD_STUDENT
    }
}
export const updateStudent=()=>{
    return{
        type:UPDATE_STUDENT
    }
}
export const geStudentObj=(data)=>{
    return{
        type:GET_STUDENT_OBJ,
        payload:data
    }
}

export const FetchStudentList=()=>{
    return (dispatch)=>{
      dispatch(makeRequest());
      //setTimeout(() => {
        axios.get('http://localhost:8000/student').then(res=>{
      //console.log(res.data)
      const studentlist=res.data;
          
            dispatch(geStudentList(studentlist));
          }).catch(err=>{
            dispatch(failRequest(err.message))
          })
     
    }
}

export const Removestudent=(id)=>{
    return (dispatch)=>{
      dispatch(makeRequest());
      //setTimeout(() => {
        axios.delete('http://localhost:8000/student/'+id).then(res=>{
            dispatch(deleteStudent());
          }).catch(err=>{
            dispatch(failRequest(err.message))
          })
     
    }
}

export const FunctionAddStudent=(data)=>{
    return (dispatch)=>{
      dispatch(makeRequest());
      //setTimeout(() => {
        axios.post('http://localhost:8000/student',data).then(res=>{
            dispatch(addStudent());
            toast.success('Student Added successfully.')
          }).catch(err=>{
            dispatch(failRequest(err.message))
          })
     
    }
}

export const FunctionUpdateStudent=(data,id)=>{
    return (dispatch)=>{
      dispatch(makeRequest());
      //setTimeout(() => {
        axios.put('http://localhost:8000/student/'+id,data).then(res=>{
            dispatch(updateStudent());
            toast.success('Student Updated successfully.')
          }).catch(err=>{
            dispatch(failRequest(err.message))
          })
    
     
    }
}
export const FetchStudentObj=(id)=>{
    return (dispatch)=>{
      dispatch(makeRequest());
      //setTimeout(() => {
        axios.get('http://localhost:8000/student/'+id).then(res=>{
            const studentlist=res.data;
            
            dispatch(geStudentObj(studentlist));
          }).catch(err=>{
            dispatch(failRequest(err.message))
          })
     
    }
}



