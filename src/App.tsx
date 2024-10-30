import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeContainer from "containers/HomeContainer";
import LoginContainer from "containers/LoginContainer";
import SignupContainer from "containers/SignupContainer";
import NotFound from "pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      {false ? (
        <Routes>
          <Route path="/" Component={HomeContainer} />
          <Route path="/home" Component={HomeContainer} />
          <Route path="/signup" Component={SignupContainer} />
          <Route path="/login" Component={LoginContainer} />
          <Route path="*" Component={NotFound} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" Component={LoginContainer} />
          <Route path="/login" Component={LoginContainer} />
          <Route path="/signup" Component={SignupContainer} />
          <Route path="*" Component={NotFound} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
