import { NextResponse } from "next/server";
import { laptops } from "../../data";

export function GET(request, context) {
    const { id } = context.params;
    const data = laptops.find(laptop => laptop.brand.toLowerCase().includes(id.toLowerCase()) || laptop.model.toLowerCase().includes(id.toLowerCase()) || Number(laptop.id) === Number(id));
    return NextResponse.json(data);
}