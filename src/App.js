import React from "react";
import "./App.css";
import Child from "./Child";
import { TransactionProvider } from "./transContent";

function App() {
  return (
    <div>
      <TransactionProvider>
        <Child />
      </TransactionProvider>
    </div>
  );
}

export default App;
