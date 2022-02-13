import { useMemo } from "react";
import useDragAndDropContext from "./useDragAndDropContext";

function useDroppable(props) {
  const { onDragEnter, onDragLeave, onDragOver, onDrop, acceptedTypes } = props;
  const { draggableType } = useDragAndDropContext();

  // check current item-type being dragged with acceptedTypes
  const isSupportedType = Array.isArray(acceptedTypes)
    ? acceptedTypes.includes(draggableType)
    : acceptedTypes === draggableType;

  const eventHandlers = useMemo(() => {
    return {
      onDragEnter(e) {
        e.preventDefault();
        isSupportedType && onDragEnter(e);
      },
      onDragLeave(e) {
        e.preventDefault();
        isSupportedType && onDragLeave(e);
      },
      onDragOver(e) {
        e.preventDefault();
        isSupportedType && onDragOver(e);
      },
      onDrop(e) {
        e.preventDefault();
        e.stopPropagation();

        // onDrop grab the item-information & pass to props.onDrop(data)
        const data = JSON.parse(e.dataTransfer.getData("text"));
        isSupportedType && onDrop(data, e);
      }
    };
  }, [isSupportedType, onDragEnter, onDragLeave, onDragOver, onDrop]);

  return {
    eventHandlers: eventHandlers,
    isDragging: isSupportedType
  };
}

export default useDroppable;
