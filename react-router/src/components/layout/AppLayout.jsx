import { Outlet } from "react-router";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
export default function AppLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <AppHeader />
      <main classNmae="flex-grow-1 container">
        <Outlet />
      </main>
      <AppFooter />
    </div>
  );
}
