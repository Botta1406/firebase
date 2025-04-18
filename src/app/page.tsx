export default function Home() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-6">
            <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-2xl w-full text-center space-y-6">
                <h1 className="text-4xl font-extrabold text-blue-700">Welcome to MyApp 🚀</h1>
                <p className="text-gray-600 text-lg">
                    This is your one-stop solution for managing everything effortlessly. Fast, secure, and beautifully
                    designed just for you.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="bg-blue-100 rounded-xl p-4 shadow-sm">
                        <h3 className="font-semibold text-blue-800">Feature 1</h3>
                        <p className="text-sm text-gray-600">Quick overview of what this feature does.</p>
                    </div>
                    <div className="bg-blue-100 rounded-xl p-4 shadow-sm">
                        <h3 className="font-semibold text-blue-800">Feature 2</h3>
                        <p className="text-sm text-gray-600">Highlight the ease of use or benefit here.</p>
                    </div>
                    <div className="bg-blue-100 rounded-xl p-4 shadow-sm">
                        <h3 className="font-semibold text-blue-800">Feature 3</h3>
                        <p className="text-sm text-gray-600">Show off a unique capability or tool.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}