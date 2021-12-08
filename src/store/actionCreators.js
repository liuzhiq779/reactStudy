import {GET_INIT_LIST, CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM,INIT_LIST_ACTION } from './actionTypes';
//INIT_LIST_ACTION
//import axios from "axios"

export const getInputChangeAction = (value)=>({
 type: CHANGE_INPUT_VALUE,
 value
})

export const getAddItemAction = (value)=>({
    type: ADD_TODO_ITEM,
   }) 

   export const getDeleteItemAction  = (index)=>({
    type: DELETE_TODO_ITEM,
    index
   }) 
    
   export const initListAction  = (data)=>({
    type: INIT_LIST_ACTION,
    data
   }) 


//使用redux-thunk的方法
//export const  getTodoList = () =>{
 //   return  (dispatch)=> {
 //     axios.get('/list.json').then((res)=>{
  //           const data = res.data;
   //          const action = initListAction(data)
   //          dispatch(action)
     //        console.log(data)
             //const  action = initListAction(data);
             //store.dispatch(action);
    //     })  
  //  }
//}
export const getInitList = ()=> ({
  type: GET_INIT_LIST,
})
