import { NextResponse } from "next/server";
import { desktop_pc } from "../data";

export const GET = () => {
    return NextResponse.json(desktop_pc);
}
