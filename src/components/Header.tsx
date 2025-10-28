import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold hover:text-gray-200 transition">
            🛒 E-Commerce Store
          </Link>
          <nav className="flex gap-6">
            <Link href="/" className="hover:text-gray-200 transition font-medium">
              Home
            </Link>
            <Link href="/dashboard" className="hover:text-gray-200 transition font-medium">
              Dashboard
            </Link>
            <Link href="/admin" className="hover:text-gray-200 transition font-medium">
              Admin
            </Link>
            <Link href="/recommendations" className="hover:text-gray-200 transition font-medium">
              Recommendations
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
