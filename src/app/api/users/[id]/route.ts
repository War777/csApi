import {
    NextRequest,
    NextResponse,
} from 'next/server';
import db from '../../orm/db';

type Segment = {
    params: {
        id: string;
    }
}

export async function GET(_: NextRequest, segment: Segment) {
    try {
        const { params } = segment;
        const user = db.data.users.find((user) => (user.id === parseInt(params.id)));
        
        if (user) {
            return NextResponse.json(
                { data: user },
                { status: 200 },
            );
        }

        return NextResponse.json(
            { message: 'User Not Found!' },
            { status: 404 }
        );
    } catch (error) {
        return NextResponse.json(
            { message: 'Internal Server Error.' },
            { status: 500 },
        );
    }
}

export async function DELETE(_: NextRequest, segment: Segment) {
    const { params } = segment;

    const userId = parseInt(params.id);

    const doesUserExist = !!db.data.users.find((user) => user.id === userId);

    if (doesUserExist) {
        const remainingUsers = db.data.users.filter((user) => user.id !== userId);
    
        db.data = {
            users: remainingUsers,
        };
        
        await db.write();

        return NextResponse.json(
            { message: 'User Successfully Removed!' },
            { status: 200 },
        );
    }

    return NextResponse.json(
        { message: 'User Not Found!' },
        { status: 404 }
    );
}

export async function PUT(request: NextRequest, segment: Segment) {
    try {
        const data = await request.json();
    
        const { params } = segment;
    
        const userId = parseInt(params.id);
        const user = db.data.users.find((user) => user.id === userId);
    
        if (user) {
            const updatedUser = {
                ...user,
                name: data.name,
                email: data.email,
            };

            const updatedUsers = db.data.users.map((user) => (
                user.id === userId ? { ...updatedUser } : { ...user }
            ));
    
            db.data = {
                users: updatedUsers,
            };
            
            await db.write();
    
            return NextResponse.json(
                {
                    message: 'User Successfully Updated!',
                    data: updatedUser,
                },
                { status: 200 },
            );
        }
    
        return NextResponse.json(
            { message: 'User Not Found!' },
            { status: 404 },
        );
    } catch (error) {
        return NextResponse.json(
            { message: 'Internal Server Error.' },
            { status: 500 },
        );
    }
}
