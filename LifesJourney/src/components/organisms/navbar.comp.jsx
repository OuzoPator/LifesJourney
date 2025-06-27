import {
  SignedIn,
  SignedOut,
  UserButton,
  SignOutButton,
} from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="navbar bg-base-100 shadow-sm px-4">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Life's Journey</a>
      </div>
      <div className="flex items-center gap-2">
        {/* Wenn eingeloggt: Avatar + Logout */}
        <SignedIn>
          <UserButton />
        </SignedIn>

        {/* Wenn ausgeloggt: Platzhalter oder Sign-In */}
        <SignedOut>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => navigate("/signin")}
          >
            Login
          </button>
        </SignedOut>
      </div>
    </nav>
  );
}
