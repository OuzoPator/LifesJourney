import { useNavigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import Navbar from "../organisms/navbar.comp";
import Footer from "../organisms/footer.comp";

export default function HomePage() {
  const navigate = useNavigate();
  const { isSignedIn } = useAuth();

  const handleClick = () => {
    if (isSignedIn) {
      navigate("/lobby");
    } else {
      navigate("/signin");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col"
      style={{
        backgroundImage: 'url("/img/background.webp")',
      }}
    >
      <Navbar />

      <div className="flex-1 flex items-center justify-center">
        <div className="relative z-10 text-center text-white px-4 max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Willkommen auf deiner Reise durchs Leben. Starte jetzt dein Spiel!
          </p>
          <button className="btn btn-primary" onClick={handleClick}>
            {isSignedIn ? "Zur Lobby" : "Get Started"}
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
