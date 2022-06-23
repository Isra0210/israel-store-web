import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Stock from "./pages/Stock";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
				<Route path="/stock">
          <Stock />
        </Route>
				<Route path="/contact">
          <Contact />
        </Route>
				<Route path="/register">
          <Register />
        </Route>
				<Route path="/login">
          <Login />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
