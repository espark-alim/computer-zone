import { NextResponse } from "next/server";
import { led_tv } from "../data";

export const GET = () => {
    return NextResponse.json(led_tv);
}
