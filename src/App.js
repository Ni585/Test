
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import { Item } from "./pages/Item";
import { Form } from "./component/Form";

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/item" element={<Item />} />
        <Route path="/test" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
