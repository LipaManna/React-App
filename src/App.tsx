import { Provider } from "./components/ui/provider";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import "./assets/custom.css";
import ErrorBoundary from "./shared/ErrorBoundary";

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
      </Routes>
    </Provider>
  );
}

export default App;
