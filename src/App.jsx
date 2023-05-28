import React from "react";
import { Provider } from "react-redux";
import TodoList from "./components/TodoList";
import TodoForm from "./components/todoForm";
import store from "./store/store";

const App = () => {
  return (
    <Provider store={store}>
      <div style={{ height: "400px", width: "400px",paddingTop: "20px",paddingLeft:"20px" }}>
        <TodoForm />
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;