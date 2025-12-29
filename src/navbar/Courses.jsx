import { useEffect, useState } from "react";
import CourseCard from "../UI/course.card.jsx";
import PopupCard from "../UI/course.ui.jsx";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const LOCAL_URL = "http://localhost:5000/api/courses";
  const PROD_URL = "https://backend-4-1eac.onrender.com/api/courses";

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch(LOCAL_URL);
        if (!res.ok) throw new Error("Local failed");
        setCourses(await res.json());
      } catch {
        try {
          const res = await fetch(PROD_URL);
          if (!res.ok) throw new Error("Prod failed");
          setCourses(await res.json());
        } catch (err) {
          console.error("Both servers failed:", err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto dark:bg-gray-900 dark:text-white">
      <h2 className="text-4xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-12">
        Our Courses
      </h2>

      {/* States */}
      {loading && (
        <p className="text-center text-gray-500">Loading courses…</p>
      )}

      {!loading && courses.length === 0 && (
        <p className="text-center text-gray-400">
          No courses available yet ✨
        </p>
      )}

      {!loading && courses.length > 0 && (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard
              key={course._id}
              course={course}
              onPreview={setSelectedCourse}
            />
          ))}
        </div>
      )}

      {/* Popup Preview */}
      {selectedCourse && (
        <PopupCard
          isOpen={true}
          onClose={() => setSelectedCourse(null)}
          title={selectedCourse.name}
          description={selectedCourse.description}
          videoUrl="https://www.w3schools.com/html/mov_bbb.mp4"
          primaryLabel="Enroll Now"
          secondaryLabel="Contact"
          onPrimaryClick={() =>
            console.log("Enroll:", selectedCourse.name)
          }
          onSecondaryClick={() =>
            console.log("Contact:", selectedCourse.name)
          }
        />
      )}
    </section>
  );
}
