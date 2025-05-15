import { NextResponse } from "next/server";

const DB = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'John Smith' },
]

export async function GET(request: Request) {
    return NextResponse.json({
        users: DB
    })
}
