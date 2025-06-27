export default function Footer() {
  return (
    <>
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
        <nav>
          <h6 className="footer-title">Wer?</h6>
          <a
            href="https://github.com/OuzoPator"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-[50px] md:h-[50px] transition-transform duration-300 hover:scale-110"
              src="https://avatars.githubusercontent.com/u/188037682?v=4"
              alt="Bild von Roylogo in neon style"
            />
            <p>Roy Schubert</p>
          </a>
        </nav>
        <nav>
          <h6 className="footer-title">Wann?</h6>
          <p>©2025</p>
        </nav>
        <nav>
          <h6 className="footer-title">Wieso?</h6>
          <p>¯\_(ツ)_/¯</p>
        </nav>
      </footer>
    </>
  );
}
