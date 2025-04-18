// 'use client';
//
// import { signIn } from 'next-auth/react';
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
//
// export default function AuthForm({ type }: { type: 'login' | 'register' }) {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const router = useRouter();
//     const [error, setError] = useState('');
//
//     // Function to handle OAuth login
//     const handleOAuthLogin = async (provider: 'google' | 'github') => {
//         try {
//             await signIn(provider, {
//                 callbackUrl: '/',
//                 ...(provider === 'google' && {
//                     prompt: 'consent',
//                     screen_hint: 'signup',
//                 }),
//             });
//         } catch (err) {
//             console.error('OAuth login error:', err);
//         }
//     };
//
//     const handleSubmit = async () => {
//         try {
//             if (type === 'register') {
//                 // Your register logic here (e.g., using Firebase)
//             } else {
//                 // Your login logic here (e.g., using Firebase)
//             }
//             router.push('/');
//         } catch (err: any) {
//             setError(err.message);
//         }
//     };
//
//     return (
//         <div className="p-6 max-w-md mx-auto space-y-4">
//             <h2 className="text-xl font-bold">{type === 'login' ? 'Login' : 'Register'}</h2>
//             {error && <p className="text-red-500">{error}</p>}
//             <input
//                 type="email"
//                 placeholder="Email"
//                 className="border p-2 w-full"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//             />
//             <input
//                 type="password"
//                 placeholder="Password"
//                 className="border p-2 w-full"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//             />
//             <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">
//                 {type === 'login' ? 'Login' : 'Register'}
//             </button>
//
//             {/* OAuth Login/Registration Buttons */}
//             <div className="text-center text-gray-500">OR</div>
//
//             <button
//                 onClick={() => handleOAuthLogin('google')}
//                 className="w-full py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-600"
//             >
//                 {type === 'login' ? 'Login with Google' : 'Register with Google'}
//             </button>
//
//             <button
//                 onClick={() => handleOAuthLogin('github')}
//                 className="w-full py-2 px-4 rounded bg-gray-800 text-white hover:bg-gray-900"
//             >
//                 {type === 'login' ? 'Login with GitHub' : 'Register with GitHub'}
//             </button>
//         </div>
//     );
// }

'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

type AuthFormProps = {
    type: 'login' | 'register';
};

export default function AuthForm({ type }: AuthFormProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const [error, setError] = useState('');

    // Function to handle OAuth login
    const handleOAuthLogin = async (provider: 'google' | 'github') => {
        try {
            await signIn(provider, {
                callbackUrl: '/',
                ...(provider === 'google' && {
                    prompt: 'consent',
                    screen_hint: 'signup',
                }),
            });
        } catch (err: unknown) {
            if (err instanceof Error) {
                console.error('OAuth login error:', err.message);
            } else {
                console.error('OAuth login error:', err);
            }
        }
    };

    const handleSubmit = async () => {
        try {
            if (type === 'register') {
                // Your register logic here (e.g., using Firebase)
            } else {
                // Your login logic here (e.g., using Firebase)
            }
            router.push('/');
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('An unknown error occurred');
            }
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

            {/* OAuth Login/Registration Buttons */}
            <div className="text-center text-gray-500">OR</div>

            <button
                onClick={() => handleOAuthLogin('google')}
                className="w-full py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-600"
            >
                {type === 'login' ? 'Login with Google' : 'Register with Google'}
            </button>

            <button
                onClick={() => handleOAuthLogin('github')}
                className="w-full py-2 px-4 rounded bg-gray-800 text-white hover:bg-gray-900"
            >
                {type === 'login' ? 'Login with GitHub' : 'Register with GitHub'}
            </button>
        </div>
    );
}
