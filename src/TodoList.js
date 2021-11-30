import React,{ Component } from "react";
import { Input,Button,List } from 'antd';

//这是无状态组件
const TodoListUI = (props)=>{
    return（
    <div style={{marginTop:'10px',marginLeft:'10px'}}>
    <div>
        <Input 
        //value={this.state.inputValue}原来的方法
        //现在的方法，值从父组件哪里传过来，这里用这种方法接受
         value={ props.inputValue}
         placeholder='todo info' 
        style={{width: 300,marginRight: '10px'}}
        //onChange={this.handleInputChange}这个组建里面没有这个方法所以这样写是会报错的
        //通过这个形式接受从父组件传递过来的值
        onChange={this.props.handleInputChange}
        />
          
        <Button 
        type="primary"
        //这里也一样 
        onClick={props.handleBtnClick}>提交</Button>
        <List
            style={{marginTop:'10px',width:'800px'}}
            size="small"
            bordered
           // dataSource={this.state.list} 这里和上面一样
           dataSource={props.list} 

            //renderItem={(item,index) => <List.Item  onClick = {this.handleItemDelete.bind(this,index)}>{item}</List.Item>}
            renderItem={(item) => <List.Item  onClick = {(index)=>{props.handleItemDelete(index)}}>{item}</List.Item>}
        />
    </div>
</div>
    ）
}
 //这是普通组建
//  class TodoListUI extends Component {
    // render() {
    //    return (
    //     <div style={{marginTop:'10px',marginLeft:'10px'}}>
    //     <div>
    //         <Input 
    //         //value={this.state.inputValue}原来的方法
    //         //现在的方法，值从父组件哪里传过来，这里用这种方法接受
    //          value={ this.props.inputValue}
    //          placeholder='todo info' 
    //         style={{width: 300,marginRight: '10px'}}
    //         //onChange={this.handleInputChange}这个组建里面没有这个方法所以这样写是会报错的
    //         //通过这个形式接受从父组件传递过来的值
    //         onChange={this.props.handleInputChange}
    //         />
              
    //         <Button 
    //         type="primary"
    //         //这里也一样 
    //         onClick={this.props.handleBtnClick}>提交</Button>
    //         <List
    //             style={{marginTop:'10px',width:'800px'}}
    //             size="small"
    //             bordered
    //            // dataSource={this.state.list} 这里和上面一样
    //            dataSource={this.props.list} 

    //             //renderItem={(item,index) => <List.Item  onClick = {this.handleItemDelete.bind(this,index)}>{item}</List.Item>}
    //             renderItem={(item,index) => <List.Item  onClick = {(index)=>{this.props.handleItemDelete(index)}}>{item}</List.Item>}
    //         />
    //     </div>
    // </div>
//        )
//     } 
//  }

 export default TodoListUI;