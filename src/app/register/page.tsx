
'use client';

import AuthForm from '@/components/AuthForm';

export default function RegisterPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-200 flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-white shadow-2xl rounded-3xl p-8 md:p-10 space-y-6 transition-all duration-300">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-purple-700">Create Account 🎉</h1>
                    <p className="text-gray-500 mt-2">Join us and get started today</p>
                </div>

                <AuthForm type="register" />

                <p className="text-sm text-center text-gray-600">
                    Already have an account?{' '}
                    <a href="/login" className="text-purple-600 hover:underline font-medium">
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
}