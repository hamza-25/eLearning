
import Link from "next/link";
import Header from "../../components/Header";

export default function Courses() {
  return (
    <>
      <Header />
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Our Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Introduction to Web Development
              </h3>
              <p className="text-gray-600 mb-4">
                Learn the fundamentals of web development, including HTML, CSS,
                and JavaScript.
              </p>
              <Link
                href="#"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Start Course
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Advanced JavaScript
              </h3>
              <p className="text-gray-600 mb-4">
                Take your JavaScript skills to the next level with this advanced
                course.
              </p>
              <Link
                href="#"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Start Course
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                React for Beginners
              </h3>
              <p className="text-gray-600 mb-4">
                Learn how to build modern web applications with the React
                framework.
              </p>
              <Link
                href="#"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Start Course
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
