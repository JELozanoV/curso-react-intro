import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoIterm';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoBottom } from './TodoBotto';

function App() {
  return (
    <div className="App">

      <TodoCounter />
      <TodoSearch />

      <TodoList>
        <TodoItem />
      </TodoList>

      <TodoBottom />

    </div>
  );
}


export default App;

