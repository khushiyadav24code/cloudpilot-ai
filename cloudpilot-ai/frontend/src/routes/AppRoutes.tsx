import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "../layouts/AppLayout";
import { Dashboard } from "../pages/Dashboard";
import { Terraform } from "../pages/Terraform";
import { Security } from "../pages/Security";
import { Settings } from "../pages/Settings";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/terraform" element={<Terraform />} />
          <Route path="/security" element={<Security />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}