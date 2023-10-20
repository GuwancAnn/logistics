import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import ClientHome from "./components/ClientHome";
import ClientVehicle from "./components/ClientVehicle";
import CLientContainer from "./components/ClientContainer";
import ClientPrice from "./components/ClientPrice";
import Invoices from "./components/Invoices";
import PaidInvoices from "./components/PaidInvoice";
import Partial from "./components/Partial";
import Unpaid from "./components/Unpaid";

import LandingPage from "./components/LandingPage";
import LoadingVehicle from "./components/LoadingVehicle";
import VehicleWeights from "./components/VehicleWeights";
import VehicleNotes from "./components/VehicleNotes";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/login" element={<Login></Login>} />
        <Route path="/client" element={<ClientHome />} />

        <Route path="/vehicle" element={<ClientVehicle />} />
        <Route path="/container" element={<CLientContainer />} />
        <Route path="/price" element={<ClientPrice></ClientPrice>} />
        <Route path="/invoice" element={<Invoices></Invoices>} />
        <Route path="/paid" element={<PaidInvoices></PaidInvoices>} />
        <Route path="/partial" element={<Partial></Partial>} />
        <Route path="/unpaid" element={<Unpaid></Unpaid>} />
        <Route
          path="/loading-vehicle"
          element={<LoadingVehicle></LoadingVehicle>}
        ></Route>
        <Route
          path="/vehicle-weight"
          element={<VehicleWeights></VehicleWeights>}
        ></Route>
        <Route path="/notes" element={<VehicleNotes></VehicleNotes>}></Route>
      </Routes>{" "}
    </>
  );
}

export default App;
