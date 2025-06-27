import { SignIn } from "@clerk/clerk-react";
import Navbar from "../organisms/navbar.comp";
import Footer from "../organisms/footer.comp";

export default function SignInPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col"
      style={{
        backgroundImage: 'url("/img/background.webp")',
      }}
    >
      <Navbar />

      <div className="flex-1 flex items-center justify-center">
        <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg z-10">
          <SignIn path="/signin" routing="path" signUpUrl="/signup" />
        </div>
      </div>

      <Footer />
    </div>
  );
}
