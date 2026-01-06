import Link from "next/link";
import { PARTS } from "../../content/courses";
import CourseCard from "../../components/CourseCard";
import ProgressBar from "../../components/ProgressBar";

export default function DashboardPage() {
  return (
    <div className="container">
      <header className="nav">
        <div className="brand">
          <Link href="/" style={{ textDecoration: "none" }}>InvestIntro</Link>
          <span className="badge">Dashboard</span>
        </div>
        <nav className="navlinks">
          <Link className="btn" href="/">Accueil</Link>
          <Link className="btn" href="/settings">Paramètres</Link>
        </nav>
      </header>

      <main style={{ paddingTop: 18 }}>
        <h1 className="h1">Dashboard</h1>
        <p className="p">
          Un parcours en 3 parties est proposé. 
          Si tu es débutant.e, il est recommandé de traiter les modules dans l'ordre. 
          Tu peux revenir sur n'importe quel module à tout moment.
        </p>

        {/* Progression globale (calculée côté client dans ProgressBar via localStorage) */}
        <div className="card">
          <div className="meta" style={{ justifyContent: "space-between" }}>
            <strong>Progression globale</strong>
            <span className="badge">locale</span>
          </div>
          <div style={{ marginTop: 10 }}>
            <ProgressBar mode="global" />
          </div>
        </div>

        <div style={{ marginTop: 14 }} className="grid">
          {PARTS.map((part) => (
            <section key={part.id} className="card">
              <div className="meta" style={{ justifyContent: "space-between" }}>
                <div>
                  <div style={{ fontSize: 18, fontWeight: 800 }}>{part.title}</div>
                  <div style={{ color: "var(--muted)", marginTop: 4 }}>{part.description}</div>
                </div>
                <div style={{ minWidth: 220 }}>
                  <ProgressBar mode="part" partId={part.id} />
                </div>
              </div>

              <hr className="hr" />

              <div className="grid cols2">
                {part.courses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
