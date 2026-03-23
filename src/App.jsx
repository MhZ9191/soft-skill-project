import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import Travelpage from "./pages/TravelPage";
import TravelerPage from "./pages/TravelerPage";
import AddressBookPage from "./pages/AddressBookPage";
import DefaultLayout from "./layouts/DefaultLayout";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route index element={<HomePage />} />
          <Route path="/:id" element={<Travelpage />} />
          <Route path="/:id/:username" element={<TravelerPage />} />
          <Route path="/address-book" element={<AddressBookPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
