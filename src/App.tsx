import { BrowserRouter } from "react-router-dom";
import PublicRoutes from "routes/publicRoutes";
import PrivateRoutes from "routes/privateRoutes";
import useAuth from "hooks/useAuth";

function App() {
  const isTokenValid = useAuth();

  return (
    <BrowserRouter>
      {isTokenValid === null ? null : isTokenValid ? (
        <PrivateRoutes />
      ) : (
        <PublicRoutes />
      )}
    </BrowserRouter>
  );
}

export default App;
