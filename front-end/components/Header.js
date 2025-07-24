
'use client';

import Link from "next/link";
import { useAuth } from "../components/context/AuthContext";

export default function Header() {
  const { isLoggedIn, handleLogout, setShowLoginModal, setShowSignUpModal } = useAuth();

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-blue-600"
            >
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
            </svg>
            <h1 className="text-2xl font-bold text-gray-800">E-Learning</h1>
          </Link>
        </div>
        <nav className="flex items-center gap-6">
          <Link href="/courses" className="text-gray-600 hover:text-blue-600">
            Courses
          </Link>
          <Link href="/dashboard" className="text-gray-600 hover:text-blue-600">
            Dashboard
          </Link>
          {isLoggedIn ? (
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={() => setShowLoginModal(true)}
              >
                Login
              </button>
              <button
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full"
                onClick={() => setShowSignUpModal(true)}
              >
                Sign Up
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
