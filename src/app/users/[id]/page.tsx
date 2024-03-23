'use client'
import {
    useEffect,
    useState,
} from 'react';
import { useRouter, useParams } from 'next/navigation';
import axios from 'axios';
import User from '@/app/api/models/user.model';

export default function Page() {
    const {
        id,
    } = useParams();

    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const getUserDetails = async () => {
            const { data } = await axios.get(`http://localhost:3000/api/users/${id}`);

            setUser(data.user);
        };

        getUserDetails();
    }, [id]);

    if (!user) {
        return (
            <div>
                ...
            </div>
        );
    }

    return (
        <div>
            <h1>
                {user.name}
            </h1>
            <h4>
                {user.email}
            </h4>
        </div>
    );
}