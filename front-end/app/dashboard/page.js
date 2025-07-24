
import Link from "next/link";
import Header from "../../components/Header";

export default function Dashboard() {
  return (
    <>
      <Header />
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Welcome, Student!
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Enrolled Courses
              </h3>
              <p className="text-gray-600">You are enrolled in 3 courses.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Progress</h3>
              <p className="text-gray-600">
                You have completed 25% of your courses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
