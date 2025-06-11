// app/page.tsx
import Link from 'next/link'; // Import Next.js Link component

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold mb-6">Welcome to My Portfolio!</h1>
      <p className="text-xl mb-10 text-gray-300">Showcasing my journey in web development.</p>

      <div className="flex space-x-6">
        <Link href="/about" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300">
          Learn About Me
        </Link>
        <Link href="/contact" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300">
          Contact Me
        </Link>
        {/* Add more links here later, e.g., to Projects */}
      </div>
    </div>
  );
}
