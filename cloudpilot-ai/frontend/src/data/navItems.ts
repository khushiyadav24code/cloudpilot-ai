import { FileCode2, LayoutDashboard, Network, Settings, Shield } from "lucide-react";

export const navItems = [
  { label: "Dashboard", path: "/", icon: LayoutDashboard },
  { label: "Infrastructure", path: "/", icon: Network },
  { label: "Terraform", path: "/terraform", icon: FileCode2 },
  { label: "Security", path: "/security", icon: Shield },
  { label: "Settings", path: "/settings", icon: Settings },
];