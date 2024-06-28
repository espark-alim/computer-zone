import { NextResponse } from "next/server";
import { desktop_pc } from "../../data";

export function GET(request, context) {
    const { id } = context.params;

    const data = desktop_pc.find(desktop => Number(desktop.id) === Number(id));
    return NextResponse.json(data);
}