import { NextResponse } from "next/server";

export async function GET(request: Request) {
    return NextResponse.json({
        users: [
            { id: 1, name: 'John Doe' },
            { id: 2, name: 'Jane Doe' },
            { id: 3, name: 'John Smith' },
        ]
    })
}
