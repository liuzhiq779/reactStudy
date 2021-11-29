import React,{Component} from "react";
import 'antd/dist/antd.css'
import { Input,Button,List } from 'antd'
import store from './store/index';
//import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from './store/actionTypes'
import { getAddItemAction, getInputChangeAction,getDeleteItemAction } from './store/actionCreators'

 //纯函数就是有固定的输入就有固定的输出，而且不会有任何的副作用
class readxStusy extends Component {
    constructor(props){
      super(props);
      this.state = store.getState();
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleStoreChange = this.handleStoreChange.bind(this);
      this.handleBtnClick = this.handleBtnClick.bind(this);
      store.subscribe(this.handleStoreChange)
    }


    render() {
        return (
            <div style={{marginTop:'10px',marginLeft:'10px'}}>
                <div>
                    <Input 
                    value={this.state.inputValue}
                     placeholder='todo info' 
                    style={{width: 300,marginRight: '10px'}}
                    onChange={this.handleInputChange}
                    />
                    <Button type="primary" onClick={this.handleBtnClick}>提交</Button>
                    <List
                        style={{marginTop:'10px',width:'800px'}}
                        size="small"
                        bordered
                        dataSource={this.state.list}
                        renderItem={(item,index) => <List.Item  onClick = {this.handleItemDelete.bind(this,index)}>{item}</List.Item>}
                    />
                </div>
            </div>
        ) 
    }
    handleInputChange(e){
       // console.log(e.target.value)
       // const action = {
        //    type: CHANGE_INPUT_VALUE,
          //  value: e.target.value
       // };
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }

    handleStoreChange(){
       this.setState(store.getState()); 
    }

   handleBtnClick(){
       //const action = {
        //   type: ADD_TODO_ITEM
      // }
      const action = getAddItemAction()
       store.dispatch(action);
   }

   handleItemDelete(index){
     //const action = {
   //      type: DELETE_TODO_ITEM,
     //    index
    // }
    const action = getDeleteItemAction()
     store.dispatch(action)
  }
}




export default  readxStusy;