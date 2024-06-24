import Link from "next/link";
import Container from "./ui/container";
import classNames from 'classnames';
import { Montserrat } from "next/font/google";
import MainNav from "./main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./navbar-actions";

export const revalidate = 0;


const montserrat = Montserrat({ subsets: ['latin'] });

const Navbar = async () => {
    const categories = await getCategories()
    return (
        <div className="border-b">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
                <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
                    <span className={classNames('text-2xl font-bold bg-gradient-to-r from-green-700 via-green-500 to-green-700 bg-clip-text text-transparent', montserrat.className)}>
                        VEGSHOP
                    </span>
                </Link>
                <MainNav data={categories} />
                <NavbarActions />
                </div>
            </Container>
        </div>
    );
}

export default Navbar;
