import { LoginLink , LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Profile() {
  const { isAuthenticated, getUser } = getKindeServerSession();

  const user = await getUser();

  return (await isAuthenticated()) ? (
    <div className="min-h-screen bg-gradient-to-r from-teal-500 to-teal-200">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center text-white mb-8">
          <h1 className="text-4xl font-extrabold mb-2">
            Welcome to your profile, {user?.given_name}!
          </h1>
          <p className="text-xl font-medium mb-6">
            This is your protected profile page.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={user?.picture}
            alt="User Avatar"
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-xl"
          />
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto">
            <p className="text-lg font-semibold mb-2">Email: {user?.email}</p>
            <p className="text-lg font-semibold mb-2">Username: {user?.preferred_username}</p>
            <div className="text-center mt-6">
              <LogoutLink className="text-teal-500 font-medium underline hover:text-teal-600 transition duration-300">
                Log out
              </LogoutLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-200 to-gray-100">
      <p className="text-gray-800 text-lg mb-6">
        Please{" "}
        <LoginLink className="text-teal-500 font-medium underline hover:text-teal-600 transition duration-300">
          log in
        </LoginLink>{" "}
        to view this page.
      </p>
    </div>
  );
}
