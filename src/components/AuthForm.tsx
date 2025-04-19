'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn as nextAuthSignIn } from 'next-auth/react';
import { auth } from '@/lib/firebase'; // 🔁 adjust your path
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth';

type AuthFormProps = {
    type: 'login' | 'register';
};

export default function AuthForm({ type }: AuthFormProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const [error, setError] = useState('');

    const handleSubmit = async () => {
        try {
            if (type === 'register') {
                await createUserWithEmailAndPassword(auth, email, password);
            } else {
                await signInWithEmailAndPassword(auth, email, password);
            }
            router.push('/');
        } catch (err: any) {
            setError(err.message || 'Something went wrong');
        }
    };

    return (
        <div className="p-6 max-w-md mx-auto space-y-4">
            <h2 className="text-xl font-bold">{type === 'login' ? 'Login' : 'Register'}</h2>
            {error && <p className="text-red-500">{error}</p>}
            <input
                type="email"
                placeholder="Email"
                className="border p-2 w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                className="border p-2 w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">
                {type === 'login' ? 'Login' : 'Register'}
            </button>
        </div>
    );
}
