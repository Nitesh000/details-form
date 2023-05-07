import { Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./pages/Form";
import Base from "./pages/Base";
import AllData from "./pages/AllData";

function App() {
  return (
    <Routes>
      <Route path="/" Component={Base} />
      <Route path="/form" Component={Form} />
      <Route path="/data" Component={AllData} />
    </Routes>
  );
}

export default App;
