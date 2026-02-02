// src/app/course/[id]/page.tsx

import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { ALL_COURSES, getCourseById } from "../../../content/courses";
import { readLessonMarkdown } from "../../../lib/lessons";
import ProgressBar from "../../../components/ProgressBar";
import ClientCourseActions from "./ui.clients";

// Génère les pages statiques pour tous les cours
export function generateStaticParams() {
  return ALL_COURSES.map((c) => ({ id: c.id }));
}

export default async function CoursePage(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;
  const course = getCourseById(id);

  if (!course) {
    return (
      <div className="container">
        <header className="nav">
          <div className="brand">
            <Link href="/" style={{ textDecoration: "none" }}>InvestIntro</Link>
            <span className="badge">Cours introuvable</span>
          </div>
          <nav className="navlinks">
            <Link className="btn" href="/">Dashboard</Link>
          </nav>
        </header>

        <main style={{ paddingTop: 18 }}>
          <div className="card">
            <h1 className="h2">Cours introuvable</h1>
            <p className="p">L&apos;identifiant demandé ne correspond à aucun cours.</p>
            <Link className="btn primary" href="/">Retour au dashboard</Link>
          </div>
        </main>
      </div>
    );
  }

  const md = await readLessonMarkdown(course.lessonPath);

  return (
    <div className="container">
      <header className="nav">
        <div className="brand">
          <Link href="/" style={{ textDecoration: "none" }}>InvestIntro</Link>
          <span className="badge">Cours</span>
        </div>
        <nav className="navlinks">
          <Link className="btn" href="/">Dashboard</Link>
        </nav>
      </header>

      <main style={{ paddingTop: 18 }}>
        <div className="card">
          <div className="meta" style={{ justifyContent: "space-between" }}>
            <div>
              <div style={{ fontWeight: 800, fontSize: 18 }}>{course.title}</div>
              <div className="meta" style={{ marginTop: 6 }}>
                <span className="badge">{course.minutes} min</span>
              </div>
            </div>
            <div style={{ minWidth: 240 }}>
              <ProgressBar mode="course" courseId={course.id} />
            </div>
          </div>

          <hr className="hr" />

          <article className="markdown">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{md}</ReactMarkdown>
          </article>

          <hr className="hr" />

          <button className="btn primary" data-course-complete={course.id}>
            Marquer comme lu
          </button>

          <ClientCourseActions courseId={course.id} />
        </div>
      </main>
    </div>
  );
}
