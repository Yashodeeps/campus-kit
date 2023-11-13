import { Outlet, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import EventPage from "./components/EventPage";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: App(),
    children: [
      {
        path: "/events",
        element: <EventPage />,
      },
      {
        path: "/",
        element: <Body />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <h1>event_img</h1>
      <h1>Campus_kit info</h1>
    </div>
  );
}

export default App;
