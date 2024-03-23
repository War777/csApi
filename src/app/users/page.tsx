import db from '@/app/api/orm/db';
import Link from 'next/link';

async function getData() {
    const users = db.data.users;

    return {
        users,
    };
}

export default async function Page() {
    const {
        users
    } = await getData();

    return (
        <div>
            <h1>
                Users
            </h1>

            <table>
                <thead>
                    <tr>
                        <td>
                            Id
                        </td>
                        <td>
                            Number
                        </td>
                        <td>
                            Email
                        </td>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>
                                <Link
                                    key={user.id}
                                    href={`/users/${user.id}`}
                                    
                                >
                                    {user.id}
                                </Link>
                            </td>
                            <td>
                                {user.name}
                            </td>
                            <td>
                                {user.email}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}