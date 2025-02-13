import { useDrag } from "react-dnd";

const DraggableButton = ({ id, value, onClick }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "button",
    item: { id, value },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <button
      ref={drag}
      onClick={() => onClick(value)}
      className={`p-3 bg-gray-200 rounded-md font-semibold cursor-pointer shadow-md hover:bg-blue-600 text-[17px] transition-all drak_light_button ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
    >
      {value}
    </button>
  );
};

export default DraggableButton;
