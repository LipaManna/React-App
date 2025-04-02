import { Route, Routes } from "react-router-dom";
import { Provider } from "./components/ui/provider";
import SignUp from "./pages/resgistration/SignUp";
import Login from "./pages/resgistration/Login";
import ErrorBoundary from "./shared/ErrorBoundary";
import "./assets/custom.css";
import "./assets/custom.css";

function App() {
  return (
    <Provider>
      <Routes>
        <Route
          path="/"
          element={
            <ErrorBoundary
              children={<Login />}
              fallback={<></>}
            ></ErrorBoundary>
          }
        />
        <Route
          path="/login"
          element={
            <ErrorBoundary
              children={<Login />}
              fallback={<></>}
            ></ErrorBoundary>
          }
        />
        <Route
          path="/signup"
          element={
            <ErrorBoundary
              children={<SignUp />}
              fallback={<></>}
            ></ErrorBoundary>
          }
        />
      </Routes>
    </Provider>
  );
}

export default App;
