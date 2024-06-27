"use client";

import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { MenuIcon, ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import { Category } from "@/types";

interface HamburgerMenuProps {
    categories: Category[];
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ categories }) => {
    return (
        <Menu as="div" className="relative inline-block text-left lg:hidden">
            <div>
                <Menu.Button className="inline-flex justify-center w-full p-2 text-sm font-medium text-white bg-black rounded-md hover:bg-opacity-75 focus:outline-none">
                    <MenuIcon className="w-6 h-6 text-white" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-50 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="p-1">
                        {categories.map((category) => (
                            <Menu.Item key={category.id}>
                                {({ active }) => (
                                    <Link
                                        href={`/category/${category.id}`}
                                        className={`${
                                            active ? 'bg-gradient-to-r from-green-700 via-green-500 to-green-700 text-white' : ''
                                        } group flex rounded-md items-center w-full p-2 text-sm font-medium text-gray-900 hover:bg-gradient-to-r hover:from-green-700 hover:via-green-500 hover:to-green-700 hover:text-white`}
                                    >
                                        {category.name}
                                    </Link>
                                )}
                            </Menu.Item>
                        ))}
                        <Menu.Item>
                            {({ active }) => (
                                <div
                                    className={`${
                                        active ? 'bg-gradient-to-r from-green-700 via-green-500 to-green-700 text-white' : ''
                                    } group flex rounded-md items-center w-full p-2 text-sm font-medium text-gray-900 hover:bg-gradient-to-r hover:from-green-700 hover:via-green-500 hover:to-green-700 hover:text-white`}
                                >
                                    <ShoppingCartIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                                    <span>Cart</span>
                                </div>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
};

export default HamburgerMenu;
