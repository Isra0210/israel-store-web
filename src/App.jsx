import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Stock from "./pages/Stock";

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
      </div>
    </BrowserRouter>
  );
}

export default App;
