import Link from 'next/link';
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";

export default function Header() {
  return (
    <header className="flex  justify-between items-center p-4 bg-gray-800 text-white shadow-md">
      {/* Navigation Links */}
      <nav className="flex space-x-6">
      <RegisterLink>Sign up</RegisterLink>
        <Link href="/api/auth/login" className="text-lg font-medium hover:text-blue-400 transition-colors">
          Home
        </Link>
        <Link href="/profile" className="text-lg font-medium hover:text-blue-400 transition-colors">
          Profile
        </Link>
      </nav>

      {/* Static Authentication Buttons */}
      <div>
        <button
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-sm transition-transform transform hover:scale-105 mr-2"
        >
          Login
        </button>
        <button
          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-sm transition-transform transform hover:scale-105"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
