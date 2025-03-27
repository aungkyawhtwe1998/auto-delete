// TodoList.tsx
import { useTodoList } from "../hooks/useToDoList";
import { Item } from "../types";
import Column from "./Column";

export default function TodoList({ items }: { items: Item[] }) {
  const { state, moveToColumn } = useTodoList(items);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-6 p-6 rounded-md">
      <Column
        title="To-Do List"
        items={state.mainList}
        onClick={moveToColumn}
      />
      <Column
        title="Fruits"
        items={state.fruitList}
        onClick={(item) => moveToColumn(item)}
      />
      <Column
        title="Vegetables"
        items={state.vegetableList}
        onClick={(item) => moveToColumn(item)}
      />
    </div>
  );
}
