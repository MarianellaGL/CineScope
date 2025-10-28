import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 flex flex-col">
      <Header />
      <main className="flex-1 w-full pt-20 md:pt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
