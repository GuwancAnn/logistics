import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const [token, setToken] = useState(false);
  useEffect(() => {
    const item = localStorage.getItem("access");
    if (item !== null) {
      setToken(true);
      console.log(item);
    } else {
      setToken(false);
      navigate("/login");
    }
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        {token ? (
          <Route path="/client" element={<ClientHome></ClientHome>} />
        ) : (
          <Route path="/login" element={<Login setToken={setToken}></Login>} />
        )}

        <Route path="/vehicle" element={<ClientVehicle />} />
        <Route path="/container" element={<CLientContainer />} />
        <Route path="/price" element={<ClientPrice></ClientPrice>} />
        <Route path="/invoice" element={<Invoices></Invoices>} />
        <Route path="/paid" element={<PaidInvoices></PaidInvoices>} />
        <Route path="/partial" element={<Partial></Partial>} />
        <Route path="/unpaid" element={<Unpaid></Unpaid>} />
      </Routes>
    </>
  );
}

export default App;
