export default function Home() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-6">
            <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-2xl w-full text-center space-y-6">
                <h1 className="text-4xl font-extrabold text-blue-700">Welcome to MyApp 🚀</h1>
                <p className="text-gray-600 text-lg">
                    Manage users effortlessly with Firebase Authentication. Secure, reliable, and easy to integrate.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="bg-blue-100 rounded-xl p-4 shadow-sm">
                        <h3 className="font-semibold text-blue-800">Email/Password Auth</h3>
                        <p className="text-sm text-gray-600">
                            Let users sign up and log in with their email and password securely.
                        </p>
                    </div>
                    <div className="bg-blue-100 rounded-xl p-4 shadow-sm">
                        <h3 className="font-semibold text-blue-800">OAuth Providers</h3>
                        <p className="text-sm text-gray-600">
                            Easily integrate Google, GitHub, Facebook, and more with just a few clicks.
                        </p>
                    </div>
                    <div className="bg-blue-100 rounded-xl p-4 shadow-sm">
                        <h3 className="font-semibold text-blue-800">Token-Based Security</h3>
                        <p className="text-sm text-gray-600">
                            Firebase issues secure tokens you can use to protect your APIs and routes.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
