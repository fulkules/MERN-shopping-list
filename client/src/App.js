import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Provider } from "react-redux";
import { Container } from "reactstrap";
import "./App.css";
import AppNavbar from "./components/AppNavbar";
import ItemModal from "./components/ItemModal";
import ShoppingList from "./components/ShoppingList";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <Container>
          <ItemModal />
          <ShoppingList />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
