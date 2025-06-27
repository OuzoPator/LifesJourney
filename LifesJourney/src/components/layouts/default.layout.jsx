import Footer from "../organisms/footer.comp";
import Navbar from "../organisms/navbar.comp";
import Hero from "../organisms/hero.comp";

export function DefaultLayout({ children, withHero = false }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {withHero && <Hero />}
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
