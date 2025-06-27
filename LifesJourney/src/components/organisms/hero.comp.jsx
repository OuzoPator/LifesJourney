import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: 'url("/img/background.webp")',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      {/* Inhalt (z-index über Overlay) */}
      <div className="relative z-10 text-center text-white px-4 max-w-md">
        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
        <p className="mb-5">
          Willkommen auf deiner Reise durchs Leben. Starte jetzt dein Spiel!
        </p>
        <Link to="/signin" className="btn btn-primary">
          Get Started
        </Link>
      </div>
    </section>
  );
}
