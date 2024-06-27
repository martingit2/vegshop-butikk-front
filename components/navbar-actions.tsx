"use client";

import { ShoppingCart } from "lucide-react";
import Button from "./ui/button";
import { useEffect, useState } from "react";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";

const NavbarActions = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);
    
    const router = useRouter()

    const cart = useCart()

    if (!isMounted) {
        return null;
    }

    return (
        <div className="ml-auto hidden lg:flex items-center gap-x-4">
            <Button onClick={() => router.push("/cart") } className="flex items-center rounded-full bg-gradient-to-r from-green-700 via-green-500 to-green-700 px-4 py-2 text-white hover:bg-opacity-75">
                <ShoppingCart 
                    size={20} 
                    color="white" 
                />
                <span className="ml-2 text-sm font-medium text-white">
                    {cart.items.length}
                </span>
            </Button>
        </div>
    );
}

export default NavbarActions;
