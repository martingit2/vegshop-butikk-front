import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string): Promise<Billboard> => {
    const res = await fetch(`${URL}/${id}`);
    if (!res.ok) {
        throw new Error('Failed to fetch billboard');
    }
    return res.json();
};

export default getBillboard;
