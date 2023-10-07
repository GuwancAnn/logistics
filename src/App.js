import { useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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

function App() {
  const [token, setToken] = useState(false);
  useEffect(() => {
    const item = localStorage.getItem("access");

    setToken(!!item);
    console.log(item);
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/login" element={<Login setToken={setToken}></Login>} />
          <Route
            path="/client"
            element={token ? <ClientHome /> : <Navigate to="/login" replace />}
          />
          <Route path="/vehicle" element={<ClientVehicle />} />
          <Route path="/container" element={<CLientContainer />} />
          <Route path="/price" element={<ClientPrice></ClientPrice>} />
          <Route path="/invoice" element={<Invoices></Invoices>} />
          <Route path="/paid" element={<PaidInvoices></PaidInvoices>} />
          <Route path="/partial" element={<Partial></Partial>} />
          <Route path="/unpaid" element={<Unpaid></Unpaid>} />
        </Routes>{" "}
      </Router>
    </>
  );
}

export default App;
