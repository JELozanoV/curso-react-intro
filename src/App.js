import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoBottom } from './TodoBotto';

const arrayTodo = [
  {text: "Cortar cebollas", complete: false},
  {text: "Estudiar idiomas", complete: true},
  {text: "Estudiar react", complete: false},
]

function App() {
  return (
    <div className="App">

      <TodoCounter complete={16}  total={25} />
      <TodoSearch />

      <TodoList>
        {arrayTodo.map(todo => (
          <TodoItem key={todo.text} text={todo.text} complete={todo.complete}/>
        ))}
      </TodoList>
      <TodoBottom />


    </div>
  );
}


export default App;

