import "./App.css";
import TodoList from "./components/TodoList";
import rawItems from "./items.json";
import { Item } from "./types";
const items: Item[] = rawItems as Item[];

function App() {
  return <TodoList items={items} />;
}

export default App;
