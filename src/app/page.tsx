import Link from 'next/link';

export default function Home() {
    return (
        <main className="p-10 space-y-4">
            <h1 className="text-2xl font-bold">Home Page</h1>
            <p>
                <Link href="/login" className="text-blue-600 underline">
                    Login
                </Link>{' '}
                or{' '}
                <Link href="/register" className="text-blue-600 underline">
                    Register
                </Link>
            </p>
        </main>
    );
}
