import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeContainer from "containers/HomeContainer";
import Login from "pages/Login";
import Signup from "pages/Signup";
import NotFound from "pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/login" Component={Login} />
        <Route path="/home" Component={HomeContainer} />
        <Route path="/signup" Component={Signup} />
        <Route path="*" Component={NotFound} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
