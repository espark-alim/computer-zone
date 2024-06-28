import { NextResponse } from "next/server";
import { led_tv } from "../../data";

export function GET(request, context) {
    const { id } = context.params;
    const data = led_tv.find(laptop => laptop.brand.toLowerCase().includes(id.toLowerCase()) || laptop.model.toLowerCase().includes(id.toLowerCase()) || Number(laptop.id) === Number(id));
    return NextResponse.json(data);
}