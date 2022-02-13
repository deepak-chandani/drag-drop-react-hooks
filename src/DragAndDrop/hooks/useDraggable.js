import useDragAndDropContext from "./useDragAndDropContext";

function useDraggable(props) {
  const { data, type = "draggable" } = props;
  const { setDraggableType, setDragItemData } = useDragAndDropContext();

  const onDragStart = (e) => {
    setDraggableType(type);

    e.dataTransfer.setData("text", JSON.stringify(data));
    e.dataTransfer.dropEffect = "move";

    setDragItemData(JSON.stringify(data)); // hold the item being dragged inside DragDropContext

    props.onDragStart(e);
  };

  const onDragEnd = (e) => {
    setDraggableType(undefined);
    props.onDragEnd(e);
  };

  return {
    eventHandlers: {
      onDragStart,
      onDragEnd
    }
  };
}

export default useDraggable;
