import { BrowserRouter } from "react-router-dom";
import Header from "./component/Header";
import Content from "./component/Content";

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Content />
      </BrowserRouter>
    </div>
  );
}

export default App;
