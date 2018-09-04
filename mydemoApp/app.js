import React, {component} from 'react';
import './app.css';
import Header from './component/header';
import TodoInput from './component/todoInput';
import TodoItem from './component/todoItem';

class App extends Component{
  constructor(props) {
     super(props);

     this.state={
        todo:[
          {id: 0, text:"make coffee at home every morning!"},
          {id: 1, text:"pick son from school after work."},
          {id: 2, text:"develop webApp with React afterwork."}
        ],
       nextId: 3
      }
      this.addTodo = this.addTodo.bind(this);
      this.removeTodo = this.removeTodo(this);
    }
    addTodo(todoText) {
     let todo = this.state.todo.slice();
     todo.push({id: this.state.nextId, text: todoText});
     this.setState({
       todo: todo,
       nextId: ++this.state.todo
     });
    }

    removeTodo(id) {
      this.setState({
        todo: this.state.todo.filter((todo, index) => todo.id !== id)
      });
    }


    render() {
    return (
      <div className="App">
        <div className="todo-Wrapper">
          <Header />
           <TodoInput todo="" addTodo={this.addTodo} />
           <ul>
             {
               this.state.todo.map((todo) => {
               return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo}/>
                })
              }
            </ul>
       </div>
     </div>

  );
 }
}
export default app;