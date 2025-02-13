import { useDrop } from "react-dnd";
import useCalculatorStore from "../StoreData/Store";

const DroppableArea = ({ onButtonClick }) => {
  const { addComponent } = useCalculatorStore();
  
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "button",
    drop: (item) => addComponent(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div ref={drop} className={`p-5 bg-gray-200 dark:bg-gray-700 rounded-lg min-h-[100px] ${isOver ? "bg-green-300" : ""}`}>
      <p className="text-center cursor-pointer text-gray-500">Drag buttons here...</p>
    </div>
  );
};

export default DroppableArea;
