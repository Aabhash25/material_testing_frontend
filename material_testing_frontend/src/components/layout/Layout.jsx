import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="min-h-screen relative flex flex-col bg-primary">
      {/* 🔶 ORANGE LINE (EXCLUDES NAVBAR) */}
      <div className="fixed left-0 top-20 bottom-0 w-[4px] bg-accent z-[9999] pointer-events-none" />

      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
