import React, { useState } from "react";
import { Provider } from "./hooks/index";
import List from "./components/List/index";
import Form from "./components/Form";

const App: React.FC = () => {
  return (
    <div>
      <Provider>  
        <Form />      
        <List />
      </Provider>
    </div>
  );
};

export default App;