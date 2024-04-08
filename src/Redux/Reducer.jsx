import { ADD_STUDENT, DELETE_STUDENT, FAIL_REQUEST, GET_STUDENT_LIST, GET_STUDENT_OBJ, MAKE_REQUEST, UPDATE_STUDENT } from "./ActionType"

const initialstate = {
    loading: true,
studentlist: [],
    studentobj: {},
    errmessage: ''
}

export const Reducer = (state = initialstate, action) => {
    switch (action.type) {
        case MAKE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FAIL_REQUEST:
            return {
                ...state,
                loading: false,
                errmessage: action.payload
            }
        case GET_STUDENT_LIST:
            return {
                loading: false,
                errmessage: '',
                studentlist:action.payload,
                userobj:{}
            }
            case DELETE_STUDENT:return{
                ...state,
                loading:false
            }
            case ADD_STUDENT:return{
                ...state,
                loading:false
            }
           case UPDATE_STUDENT:return{
                ...state,
                loading:false
            }
            case GET_STUDENT_OBJ:return{
                ...state,
                loading:false,
                studentobj:action.payload
            }
        default: return state
    }
}