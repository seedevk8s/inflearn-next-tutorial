'use client';

import { useState } from "react";

export default function UsersPage() {
    const [users, setUsers] = useState([]);

    return (
        <main>
            <h1>Users</h1>

            {
                users.map((user) => (
                    <p key={user.id}>{user.name}</p>
                ))
            }
        </main>
    );
}