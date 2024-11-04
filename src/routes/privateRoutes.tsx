import { Routes, Route, Navigate } from "react-router-dom";
import HomeContainer from "containers/HomeContainer";
import LoginContainer from "containers/LoginContainer";
import SignupContainer from "containers/SignupContainer";
import NotFound from "pages/NotFound";

function PrivateRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" Component={HomeContainer} />
      <Route path="/signup" Component={SignupContainer} />
      <Route path="/login" Component={LoginContainer} />
      <Route path="*" Component={NotFound} />
    </Routes>
  );
}

export default PrivateRoutes;
