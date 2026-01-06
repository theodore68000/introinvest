import Link from "next/link";
import type { Course } from "../content/courses";
import ProgressBar from "./ProgressBar";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <Link href={`/course/${course.id}`} className="card" style={{ textDecoration: "none" }}>
      <div className="meta" style={{ justifyContent: "space-between" }}>
        <div style={{ fontWeight: 800 }}>{course.title}</div>
        <span className="badge">{course.minutes} min</span>
      </div>

      {course.summary ? (
        <p className="p" style={{ marginTop: 8, marginBottom: 10 }}>{course.summary}</p>
      ) : (
        <p className="p" style={{ marginTop: 8, marginBottom: 10 }}>Ouvrir la capsule.</p>
      )}

      <ProgressBar mode="course" courseId={course.id} />
    </Link>
  );
}
