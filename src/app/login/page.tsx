'use client';

import { auth, googleProvider } from '@/lib/firebase';
import { signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import AuthForm from '@/components/AuthForm';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

export default function LoginPage() {
    const [user, setUser] = useState<any>(null);

    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            setUser(result.user);
            console.log('Google Sign-In:', result.user);
        } catch (error) {
            console.error('Google Sign-In Error:', error);
        }
    };

    // const handleGithubSignIn = async () => {
    //     try {
    //         const result = await signInWithPopup(auth);
    //         setUser(result.user);
    //         console.log('GitHub Sign-In:', result.user);
    //     } catch (error) {
    //         console.error('GitHub Sign-In Error:', error);
    //     }
    // };

    const handleLogout = async () => {
        await auth.signOut();
        setUser(null);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 space-y-6">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
                    <p className="text-gray-500 mt-1">Sign in to your account</p>
                </div>

                {!user ? (
                    <>
                        <AuthForm type="login" />

                        <div className="flex items-center gap-4">
                            <div className="h-px flex-1 bg-gray-300" />
                            <p className="text-sm text-gray-400">or</p>
                            <div className="h-px flex-1 bg-gray-300" />
                        </div>

                        <div className="space-y-3">
                            <button
                                onClick={handleGoogleSignIn}
                                className="flex items-center justify-center gap-2 w-full border border-gray-300 rounded-lg py-2 px-4 hover:bg-gray-100 transition"
                            >
                                <FcGoogle className="text-xl" />
                                <span className="text-sm font-medium text-gray-700">Continue with Google</span>
                            </button>

                        </div>

                        <p className="text-sm text-center text-gray-500">
                            Don't have an account?{' '}
                            <a href="/register" className="text-blue-600 hover:underline">
                                Register
                            </a>
                        </p>
                    </>
                ) : (
                    <div className="text-center space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-800">You're Logged In!</h2>
                        <p className="text-gray-600">Email: {user.email}</p>
                        <button
                            onClick={handleLogout}
                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                        >
                            Sign Out
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
