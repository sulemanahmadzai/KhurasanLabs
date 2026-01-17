import LogoIcon from "@/public/imgs/logo-khurasan.svg";
import MenuIcon from "@/public/imgs/icon-menu.svg";
import Link from "next/link";
import Button from "../Button";

const  Header = () => {
    return (
        <header className="py-3 md:py-4 border-b border-white/15 md:border-none sticky top-0 z-10">
            <div className="absolute inset-0 backdrop-blur -z-10 md:hidden" />
            <div className="container">
                <div className="relative flex items-center justify-between md:border border-white/15 md:p-3 md:px-4 rounded-xl max-w-7xl mx-auto">
                    <div className="absolute inset-0 backdrop-blur -z-10 hidden md:block" />
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <div className="inline-flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                                <LogoIcon className="w-24 h-16 md:w-32 md:h-16" />
                            </div>
                        </Link>
                    </div>
                    <div className="hidden md:block flex-1">
                        <nav className="flex gap-8 text-sm justify-center">
                            <Link href={`/services`} className="text-white/70 hover:text-white transition">Services</Link>

                            <Link href={`/about`} className="text-white/70 hover:text-white transition">About</Link>

                        </nav>
                    </div>
                    <div className="flex gap-4 items-center flex-shrink-0">
                        <a href="/contact" className="hidden md:block">
                            <Button>Get Started</Button>
                        </a>
                        <MenuIcon className="md:hidden" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;