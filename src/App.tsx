import { BrowserRouter } from "react-router-dom";
import PublicRoutes from "routes/publicRoutes";
import PrivateRoutes from "routes/privateRoutes";

function App() {
  const isAuthenticated = true;

  return (
    <BrowserRouter>
      {isAuthenticated ? <PublicRoutes /> : <PrivateRoutes />}
    </BrowserRouter>
  );
}

export default App;
