import Link from 'next/link';
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

export default async function Header() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  console.log(user)
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white shadow-md">
      {/* Navigation Links */}
      <nav className="flex space-x-6">
        <Link href="/" className="text-lg font-medium hover:text-blue-400 transition-colors">
          Home
        </Link>
        <Link href="/profile" className="text-lg font-medium hover:text-blue-400 transition-colors">
          Profile
        </Link>
      </nav>

      {/* Authentication Links */}
      <div>

        
        {user ? (
          <>
            <span className="mr-4 text-sm">Welcome, {user.given_name || 'User'}!</span>
            <LogoutLink>
              <a className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-sm transition-transform transform hover:scale-105">
                Logout
              </a>
            </LogoutLink>
          </>
        ) : (
          <>
            <LoginLink>
              <a className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-sm transition-transform transform hover:scale-105 mr-2">
                Login
              </a>
            </LoginLink>
            <RegisterLink>
              <a className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-sm transition-transform transform hover:scale-105">
                Sign U
              </a>
            </RegisterLink>
          </>
        )}
      </div>
    </header>
  );
}
