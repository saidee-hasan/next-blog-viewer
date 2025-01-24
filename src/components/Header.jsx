import Link from "next/link";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Header() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-gray-50 shadow-md">
      {/* Navigation Links */}
      <nav className="flex space-x-6">
        <Link
          href="/"
          className="text-lg font-medium hover:text-blue-500 transition-colors"
        >
          Home
        </Link>
      
      </nav>

      {/* Authentication Links */}
      <div className="flex items-center space-x-4">
        {user ? (
          <>
            <span className="text-sm text-gray-600">
              Welcome, <strong>{user.given_name || "User"}</strong>!
            </span>
            <LogoutLink>
              <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-sm transition-transform transform hover:scale-105">
                Logout
              </button>
            </LogoutLink>
          </>
        ) : (
          <>
<Link
  href="/profile"
  className="px-4 py-2 bg-blue-600 text-white text-lg font-medium rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
>
  Profile
</Link>


            <LoginLink>
              <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-sm transition-transform transform hover:scale-105">
                Login
              </button>
            </LoginLink>


          
          </>
        )}
      </div>
    </header>
  );
}
