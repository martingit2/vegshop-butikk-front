import Link from "next/link";
import Container from "./ui/container";
import classNames from 'classnames';
import { Montserrat } from "next/font/google";
import MainNav from "./main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./navbar-actions";
import HamburgerMenu from "./hamburger-menu";

export const revalidate = 0;

const montserrat = Montserrat({ subsets: ['latin'] });

const Navbar = async () => {
    const categories = await getCategories()
    return (
        <div className="border-b">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
                    <Link href="/" className="flex lg:ml-0 gap-x-2">
                        <span className={classNames('text-2xl font-bold bg-gradient-to-r from-green-700 via-green-500 to-green-700 bg-clip-text text-transparent', montserrat.className)}>
                            VEGSHOP
                        </span>
                    </Link>
                    <div className="flex-1 hidden lg:flex">
                        <MainNav data={categories} />
                    </div>
                    <div className="flex items-center lg:hidden">
                        <HamburgerMenu categories={categories} />
                    </div>
                    <NavbarActions />
                </div>
            </Container>
        </div>
    );
}

export default Navbar;
