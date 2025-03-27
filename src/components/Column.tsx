import React from 'react';
import { Item } from "../types";

type ColumnProps = {
  title: string;
  items: Item[];
  onClick: (item: Item) => void;
};

const Column: React.FC<ColumnProps> = React.memo(({ title, items, onClick }) => {
  return (
    <div className={`p-4 border min-h-[80vh] border-gray-600 rounded-md`}>
      <h2 className="text-lg font-bold mb-3">{title}</h2>
      {items.map((item) => (
        <button
          key={item.name}
          className="block min-w-[200px] w-full mb-2"
          onClick={() => onClick(item)}>
          {item.name}
        </button>
      ))}
    </div>
  );
});

export default Column;
