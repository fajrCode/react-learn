import "./App.css";
import { GlobalContext } from "./context";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

function App() {
  const user = {
    username: "Fajri",
  };
  return (
    <>
      <div>
        <GlobalContext.Provider value={user}>
          <RouterProvider router={router} />
        </GlobalContext.Provider>
      </div>
    </>
  );
}

export default App;
