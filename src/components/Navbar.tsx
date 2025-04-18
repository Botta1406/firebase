import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
            <Link href="/">
<span className="text-xl font-bold text-blue-700 cursor-pointer hover:text-blue-900 transition duration-200">
                    MyApp
</span>
            </Link>
            <div className="space-x-4">
                <Link href="/login">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
                        Login
                    </button>
                </Link>
                <Link href="/register">
                    <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition duration-200">
                        Register
                    </button>
                </Link>
            </div>
        </nav>
    );
}