import { NextResponse } from "next/server";
import { laptops } from "../data";

export const GET = () => {
    return NextResponse.json(laptops);
}
