import "./App.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Events from "./pages/Events";
import EventParticipants from "./pages/EventParticipants";
import EventRegistration from "./pages/EventRegistration";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Events />} />
      <Route path="event/:id/participants" element={<EventParticipants />} />
      <Route path="event/:id/registration" element={<EventRegistration />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
