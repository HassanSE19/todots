import { Routes, Route } from "react-router-dom";
import LoginContainer from "containers/LoginContainer";
import SignupContainer from "containers/SignupContainer";
import NotFound from "pages/NotFound";

function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" Component={LoginContainer} />
      <Route path="/login" Component={LoginContainer} />
      <Route path="/signup" Component={SignupContainer} />
      <Route path="*" Component={NotFound} />
    </Routes>
  );
}

export default PublicRoutes;
