'use client';

import { auth, googleProvider } from '@/lib/firebase';
import { signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import AuthForm from '@/components/AuthForm';
import { FcGoogle } from 'react-icons/fc';

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

    const handleLogout = async () => {
        await auth.signOut();
        setUser(null);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-white shadow-2xl rounded-3xl p-8 md:p-10 space-y-6 transition-all duration-300">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-blue-700">Welcome Back 👋</h1>
                    <p className="text-gray-500 mt-2">Please sign in to continue</p>
                </div>

                {!user ? (
                    <>
                        <AuthForm type="login" />

                        <div className="flex items-center gap-4">
                            <div className="h-px flex-1 bg-gray-300" />
                            <p className="text-sm text-gray-400">or</p>
                            <div className="h-px flex-1 bg-gray-300" />
                        </div>

                        <button
                            onClick={handleGoogleSignIn}
                            className="flex items-center justify-center gap-3 w-full border border-gray-300 rounded-lg py-2 px-4 hover:bg-gray-100 transition text-gray-700 font-medium"
                        >
                            <FcGoogle className="text-2xl" />
                            Continue with Google
                        </button>

                        <p className="text-sm text-center text-gray-600">
                            Don&apos;t have an account?{' '}
                            <a href="/register" className="text-blue-600 hover:underline font-medium">
                                Register
                            </a>
                        </p>
                    </>
                ) : (
                    <div className="text-center space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-800">You're Logged In! ✅</h2>
                        <p className="text-gray-600">Email: {user.email}</p>
                        <button
                            onClick={handleLogout}
                            className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
                        >
                            Sign Out
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

//
//
// 'use client';
//
// import { auth, googleProvider } from '@/lib/firebase';
// import { signInWithPopup } from 'firebase/auth';
// import { useState } from 'react';
// import AuthForm from '@/components/AuthForm';
// import { FcGoogle } from 'react-icons/fc';
// import { useRouter } from 'next/navigation';  // Import from 'next/navigation'
//
// export default function LoginPage() {
//     const [user, setUser] = useState<any>(null);
//     const [loading, setLoading] = useState(false);  // Added loading state
//     const router = useRouter();  // useRouter should be called here, inside the client component
//
//     const handleGoogleSignIn = async () => {
//         try {
//             setLoading(true);  // Set loading state to true
//             const result = await signInWithPopup(auth, googleProvider);
//             setUser(result.user);  // Store user data
//             console.log('Google Sign-In:', result.user);
//         } catch (error) {
//             console.error('Google Sign-In Error:', error);
//         } finally {
//             setLoading(false);  // Reset loading state after attempt
//         }
//     };
//
//     const handleLogout = async () => {
//         await auth.signOut();  // Sign out the user
//         setUser(null);  // Reset user state
//         router.push('/login');  // Redirect to login page after logout
//     };
//
//     return (
//         <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center px-4">
//             <div className="w-full max-w-md bg-white shadow-2xl rounded-3xl p-8 md:p-10 space-y-6 transition-all duration-300">
//                 <div className="text-center">
//                     <h1 className="text-4xl font-extrabold text-blue-700">Welcome Back 👋</h1>
//                     <p className="text-gray-500 mt-2">Please sign in to continue</p>
//                 </div>
//
//                 {!user ? (
//                     <>
//                         {/* Display AuthForm for login */}
//                         <AuthForm type="login" />
//
//                         {/* Divider */}
//                         <div className="flex items-center gap-4">
//                             <div className="h-px flex-1 bg-gray-300" />
//                             <p className="text-sm text-gray-400">or</p>
//                             <div className="h-px flex-1 bg-gray-300" />
//                         </div>
//
//                         {/* Google Sign-In Button */}
//                         <button
//                             onClick={handleGoogleSignIn}
//                             className="flex items-center justify-center gap-3 w-full border border-gray-300 rounded-lg py-2 px-4 hover:bg-gray-100 transition text-gray-700 font-medium"
//                             disabled={loading}  // Disable button while loading
//                         >
//                             {loading ? (
//                                 <span>Loading...</span>  // Display loading message
//                             ) : (
//                                 <>
//                                     <FcGoogle className="text-2xl" />
//                                     Continue with Google
//                                 </>
//                             )}
//                         </button>
//
//                         {/* Register Link */}
//                         <p className="text-sm text-center text-gray-600">
//                             Don&apos;t have an account?{' '}
//                             <a href="/register" className="text-blue-600 hover:underline font-medium">
//                                 Register
//                             </a>
//                         </p>
//                     </>
//                 ) : (
//                     <div className="text-center space-y-4">
//                         {/* User Info after Login */}
//                         <h2 className="text-2xl font-semibold text-gray-800">You're Logged In! ✅</h2>
//                         <p className="text-gray-600">Email: {user.email}</p>
//
//                         {/* Sign-Out Button */}
//                         <button
//                             onClick={handleLogout}
//                             className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
//                         >
//                             Sign Out
//                         </button>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }
