import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import Travelpage from "./pages/TravelPage";
import TravelerDetailPage from "./pages/TravelerDetailPage";
import AddressBookPage from "./pages/AddressBookPage";
import DefaultLayout from "./layouts/DefaultLayout";
import { NewTravProvider } from "./contexts/newtravelerContext";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

export default function App() {
  return (
    <NewTravProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route index element={<HomePage />} />
            <Route path="/:id" element={<Travelpage />} />
            <Route path="/address-book" element={<AddressBookPage />} />
            <Route path="/traveler/:id" element={<TravelerDetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </NewTravProvider>
  );
}
