
'use client';

import Link from "next/link";
import Modal from "../components/Modal";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import Header from "../components/Header";
import { useAuth } from "../components/context/AuthContext";

export default function Home() {
  const { showLoginModal, showSignUpModal, setShowLoginModal, setShowSignUpModal } = useAuth();

  return (
    <>
      <Header />
      <section className="bg-gray-50 py-20 px-6 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to the Future of Learning
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our platform offers a wide range of courses to help you achieve your
            goals.
          </p>
          <Link
            href="/courses"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full"
          >
            Browse Courses
          </Link>
        </div>
      </section>

      {showLoginModal && (
        <Modal onClose={() => setShowLoginModal(false)}>
          <LoginForm onClose={() => setShowLoginModal(false)} />
        </Modal>
      )}
      {showSignUpModal && (
        <Modal onClose={() => setShowSignUpModal(false)}>
          <SignUpForm onClose={() => setShowSignUpModal(false)} />
        </Modal>
      )}
    </>
  );
}
