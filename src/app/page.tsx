import { PARTS } from "../content/courses";
import CourseCard from "../components/CourseCard";
import ProgressBar from "../components/ProgressBar";

export default function HomePage() {
  return (
    <div className="container">
      <header className="nav">
        <div className="brand">
          <span>InvestIntro</span>
          <span className="badge">Capsules</span>
        </div>
      </header>

      <main style={{ paddingTop: 18 }}>
        <h1 className="h1">Dashboard</h1>
        <p className="p">
          Un parcours en 3 parties est proposé.
          Si tu es débutant.e, il est recommandé de traiter les modules dans l&apos;ordre.
          Tu peux revenir sur n&apos;importe quel module à tout moment.
        </p>

        <div className="card" style={{ marginBottom: 14 }}>
          <div className="meta" style={{ justifyContent: "space-between", marginBottom: 4 }}>
            <strong>Progression globale</strong>
          </div>
          <ProgressBar mode="global" />
        </div>

        <div className="grid">
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
