import { NextResponse } from "next/server";
import { laptops } from "../data";

export function GET(request, context) {
    const { brand } = context.params;
    const data = laptops.find(laptop => laptop.brand.toLowerCase() === brand.toLowerCase() || laptop.model.toLowerCase() === brand.toLowerCase() || Number(laptop.laptopId) === Number(brand));
    return NextResponse.json(data);
}