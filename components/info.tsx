"use client"

import { Product } from "@/types";
import Currency from "./ui/currency";
import Button from "./ui/button";
import { ShoppingCart } from "lucide-react";

interface InfoProps {
    data: Product
}

const Info: React.FC<InfoProps> = ({
    data
}) => {
    return ( 
        <div>
            <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
            <div className="mt-3 flex items-end justify-between">
                <p className="text-2xl text-gray-900">
                    <Currency value={data?.price} />
                </p>
            </div>
            <hr className="my-4" />
            <div className="flex items-center gap-x-4">
                <h3 className="font-semibold text-black ">Produkt beskrivelse kommer her</h3>
                {/* data?.size.name for størrelser */}
            </div>
            {/* Farger om det trengs */}
            <div className="mt-10 flex items-center gap-x-3">
                <Button className="flex items-center gap-x-2">
                    Legg i handlevogn
                    <ShoppingCart />
                </Button>

            </div>

        </div>
     );
}
 
export default Info;