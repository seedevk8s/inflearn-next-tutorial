import { NextResponse } from "next/server";

const DB = [
    { id: 1, name: 'HoJin Chu' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'John Smith' },
]

export async function GET(request: Request) {
    const searchParams = new URL(request.url).searchParams;
    const name = searchParams.get('name');
    if (name === null) {
        return NextResponse.json({ users: [] })
    
    return NextResponse.json({
        users: DB.filter((user) => user.name.includes(name))
    })
}
