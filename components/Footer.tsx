export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-24">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/60 text-sm">© {new Date().getFullYear()} CD Track Coaching. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="mailto:craig@cdtrackcoaching.com" className="hover:text-brand-red">craig@cdtrackcoaching.com</a>
          <span className="text-white/40">|</span>
          <a href="https://instagram.com/cdtrackcoaching" className="hover:text-brand-red">@cdtrackcoaching</a>
        </div>
      </div>
    </footer>
  );
}
