import Link from "next/link";

export default function HomePage() {
  return (
    <div className="container">
      <header className="nav">
        <div className="brand">
          <span>FinLearn Lite</span>
          <span className="badge">Capsules • 3 parties</span>
        </div>
        <nav className="navlinks">
          <Link className="btn" href="/dashboard">Dashboard</Link>
          <Link className="btn" href="/settings">Paramètres</Link>
        </nav>
      </header>

      <main style={{ paddingTop: 18 }}>
        <h1 className="h1">Apprendre la finance, sans surcharge.</h1>
        <p className="p">
          Trois parties (Comprendre / Choisir / Investir), des capsules courtes, et une progression locale
          (optionnelle). Tout est accessible immédiatement.
        </p>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 10 }}>
          <Link className="btn primary" href="/dashboard">Ouvrir le dashboard</Link>
          <Link className="btn" href="/settings">Gérer ma progression</Link>
        </div>

        <hr className="hr" />

        <div className="grid cols2">
          <div className="card">
            <h2 className="h2">Ce que l’app fait</h2>
            <p className="p">
              Une lecture guidée par thèmes. Chaque capsule est un cours autonome, écrit en Markdown.
            </p>
            <div className="meta">
              <span>✅ 100% frontend</span>
              <span>✅ Tout accessible</span>
              <span>✅ Progression locale</span>
            </div>
          </div>

          <div className="card">
            <h2 className="h2">Ce que l’app ne fait pas</h2>
            <p className="p">
              Aucun conseil personnalisé, aucun broker, aucune promesse de gains.
            </p>
            <div className="meta">
              <span>❌ Trading</span>
              <span>❌ Recommandations “quoi acheter”</span>
              <span>❌ Backend / comptes</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
