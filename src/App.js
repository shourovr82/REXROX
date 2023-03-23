import { RouterProvider } from "react-router-dom";
import shourovr82 from "./routes/shourovr82Router";

function App({ children }) {
  return (
    <div>
      <RouterProvider
        router={shourovr82}>
        {children}
      </RouterProvider>
    </div>
  );
}

export default App;
