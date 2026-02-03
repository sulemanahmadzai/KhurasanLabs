import Link from "next/link";
import Logo from "@/public/imgs/logo-khurasan.svg";

const Footer = () => {
  return (
    <footer id="contact" className="py-12 border-t border-white/15">
      <div className="container">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <Link
              href="/"
              className="flex items-center gap-3 hover:opacity-80 transition"
            >
              <Logo className="h-16 w-16 md:h-20 md:w-20" />
              <div className="font-medium text-lg md:text-xl">KhurasanLabs</div>
            </Link>
            <nav className="flex flex-col lg:flex-row gap-5 lg:gap-7">
              <Link
                href={`/services`}
                className="text-white/70 hover:text-white text-xs md:text-sm transition"
              >
                Services
              </Link>
              <Link
                href={`#`}
                className="text-white/70 hover:text-white text-xs md:text-sm transition"
              >
                Portfolio
              </Link>
              <Link
                href={`/about`}
                className="text-white/70 hover:text-white text-xs md:text-sm transition"
              >
                About
              </Link>
              <Link
                href={`#`}
                className="text-white/70 hover:text-white text-xs md:text-sm transition"
              >
                Blog
              </Link>
              <Link
                href={`/contact`}
                className="text-white/70 hover:text-white text-xs md:text-sm transition"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div className="border-t border-white/15 pt-8">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 md:justify-between">
              <div className="flex flex-col gap-3">
                <h3 className="text-sm font-medium text-white/90">Contact</h3>
                <div className="flex flex-col gap-2 text-sm">
                  <a
                    href="mailto:sul.ahmadzai@gmail.com"
                    className="text-white/70 hover:text-white transition"
                  >
                    sul.ahmadzai@gmail.com
                  </a>
                  <a
                    href="https://wa.me/923271831854"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition"
                  >
                    +923271831854
                  </a>
                  <a
                    href="https://Rahnor.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition"
                  >
                    Rahnor.com
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-sm font-medium text-white/90">
                  Freelance Platforms
                </h3>
                <div className="flex flex-col gap-2 text-sm">
                  <a
                    href="https://www.fiverr.com/s/pdmZWlZ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition"
                  >
                    Fiverr
                  </a>
                  <a
                    href="https://www.upwork.com/freelancers/~01dff1a938aec5581f?mp_source=share"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition"
                  >
                    Upwork
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/15 pt-6 text-center text-xs text-white/50">
            <p>
              &copy; {new Date().getFullYear()} KhurasanLabs. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
