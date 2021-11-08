import ReactDOM from "react-dom";
import App from "./App";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { ChakraProvider, theme } from "@chakra-ui/react";

ReactDOM.render(
  <DndProvider backend={HTML5Backend}>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </DndProvider>,
  document.getElementById("root")
);
