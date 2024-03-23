import { NextResponse, NextRequest } from 'next/server';
import db from '../orm/db';

export async function GET() {
    try {
        const users = db.data.users;
    
        return NextResponse.json({
            data: users,
        });
    } catch (error) {
        return NextResponse.json(
            { message: 'Internal Server Error.' },
            { status: 500 },
        );
    }
}

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();
    
        const newUser = {
            id: db.data.users.length + 1,
            name: data.name,
            email: data.email,
        };

        await db.update(({ users }) => users.push(newUser))

        return NextResponse.json(
            { data: newUser },
            { status: 200 },
        );

    } catch (error) {
        return NextResponse.json(
            { error: 'Internal Server Error.' },
            { status: 500 },
        );
    }
}
