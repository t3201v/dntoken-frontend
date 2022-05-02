import NavBar from "../components/navBar";
import MainRoute from "../routes";
import { useAppSelector } from "../store/hooks";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const user = useAppSelector((s) => s.user);

  return (
    <div className="dark:bg-mt-black-500">
      {!user.isLoggedIn && <NavBar />}
      <MainRoute />
      <ToastContainer theme="dark" position="bottom-left" />
    </div>
  );
}
