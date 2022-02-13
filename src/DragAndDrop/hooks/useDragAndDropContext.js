import React from "react";
import { DragAndDropContext } from "../DragAndDropProvider";

function useDragAndDropContext() {
  const value = React.useContext(DragAndDropContext);

  return value;
}

export default useDragAndDropContext;
