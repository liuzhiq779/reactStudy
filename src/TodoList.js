import React,{Component, Fragment} from "react";
import TodoItem from "./TodoItem";


class TodoList extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
           inputValue: '',
           list: []
        }
     }

    render(){
        return (
            <Fragment>
           <div>
               <label for="insertArea">输入内容</label>
            <input  
            id="insertArea"
            value={this.state.inputValue}
             onChange={this.handleInputChange.bind(this)}
            />
           <button  onClick={this.handleBtnClick.bind(this)}>提交</button></div>
           <ul>
               {this.getTodoItem()}
                   {/* this.state.list.map((item,index) => {
                        return (
                       <div>
                         <TodoItem  
                         content= {item}  
                         index={index}
                         deleteItem = {this.handleItemDelete.bind(this)}
                         />
                       <li 
                               key={index}
                               dangerouslySetInnerHTML = {{__html:item}}
                               onClick={this.handleItemDelete.bind(this,index)}>
                                   {item}
                       </li>
                        </div>
                        )
                     }) */} 
           </ul>
        </Fragment>
        )
    }
    
     getTodoItem(){
      return  this.state.list.map((item,index) => {
            return (
           <div>
             <TodoItem  
             key={index}
             content= {item}  
             index={index}
             deleteItem = {this.handleItemDelete.bind(this)}
             />
            </div>
            )
         }) 
     }

    handleInputChange(e){
        //this.state.inputValue= e.target.value
        this.setState({
            inputValue: e.target.value
        })
        console.log(e.target.value );
    }
    handleBtnClick(){
      this.setState({
          list: [...this.state.list, this.state.inputValue],
          inputValue:''
      })
    }
    handleItemDelete(index){
        const list = [...this.state.list];
        list.splice(index,1);
         this.setState({
             list:list
         })
        console.log(index)
         
    }
}

export default TodoList