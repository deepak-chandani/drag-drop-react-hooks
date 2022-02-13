import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import App from "./App";
import DragAndDropProvider from "./DragAndDrop/DragAndDropProvider";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <DragAndDropProvider>
      <App />
    </DragAndDropProvider>
  </StrictMode>,
  rootElement
);
