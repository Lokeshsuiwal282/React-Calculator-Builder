import { useDrag } from "react-dnd";

const DraggableButton = ({ id, value }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "button",
    item: { id, value },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <button
      ref={drag}
      className={`p-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-all ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
    >
      {value}
    </button>
  );
};

export default DraggableButton;
