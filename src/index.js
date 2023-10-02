import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import ClientHome from "./components/ClientHome";
import ClientVehicle from "./components/ClientVehicle";
import CLientContainer from "./components/ClientContainer";
import ClientPrice from "./components/ClientPrice";
import Invoices from "./components/Invoices";
import PaidInvoices from "./components/PaidInvoice";
import Partial from "./components/Partial";
import Unpaid from "./components/Unpaid";

const routes = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/login" element={<Login></Login>} />
      <Route path="/client" element={<ClientHome></ClientHome>} />
      <Route path="/vehicle" element={<ClientVehicle />} />
      <Route path="/container" element={<CLientContainer />} />
      <Route path="/price" element={<ClientPrice></ClientPrice>} />
      <Route path="/invoice" element={<Invoices></Invoices>} />
      <Route path="/paid" element={<PaidInvoices></PaidInvoices>} />
      <Route path="/partial" element={<Partial></Partial>} />
      <Route path="/unpaid" element={<Unpaid></Unpaid>} />
    </Routes>
  </BrowserRouter>
);
ReactDOM.createRoot(document.getElementById("root")).render(routes);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
