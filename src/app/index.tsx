import NavBar from "../components/navBar";
import MainRoute from "../routes";
import { useAppSelector } from "../store/hooks";

export default function App() {
  const user = useAppSelector((s) => s.user);

  return (
    <div>
      {!user.isLoggedIn && <NavBar />}
      <MainRoute />
    </div>
  );
}
