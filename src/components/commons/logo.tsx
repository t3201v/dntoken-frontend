import { useNavigate } from "react-router";
import { CryptocurrencyDeez } from "../icons/deez";

export default function LogoApp(props: any) {
  const navigate = useNavigate();

  return (
    <div
      className="flex items-center justify-center cursor-pointer"
      aria-label="Home. logo"
      role="img"
      onClick={() => navigate(props.to || "/")}
      {...props}>
      <CryptocurrencyDeez className="h-6 mr-3 sm:h-9 dark:text-white" width="2.4rem" height="2.4rem" />
      <div className="font-mono text-2xl font-semibold">DNW</div>
    </div>
  );
}
