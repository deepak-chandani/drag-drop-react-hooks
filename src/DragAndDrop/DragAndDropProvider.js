import React, { useMemo, useState } from "react";

export const DragAndDropContext = React.createContext();

const DragAndDropProvider = (props) => {
  // current item-type that is being dragged
  const [draggableType, setDraggableType] = useState();
  const [dragItemData, setDragItemData] = useState();

  const value = useMemo(() => {
    return {
      draggableType,
      setDraggableType,
      dragItemData: dragItemData && JSON.parse(dragItemData),
      setDragItemData
    };
  }, [draggableType, dragItemData]);

  return (
    <DragAndDropContext.Provider value={value}>
      {props.children}
    </DragAndDropContext.Provider>
  );
};

export default DragAndDropProvider;
