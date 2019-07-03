import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import { Provider } from "react-redux";
import { Container } from "reactstrap";
import { loadUser } from "./actions/authActions";
import "./App.css";
import AppNavbar from "./components/AppNavbar";
import ItemModal from "./components/ItemModal";
import ShoppingList from "./components/ShoppingList";
import store from "./store";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
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
}

export default App;
