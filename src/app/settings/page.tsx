import Link from "next/link";
import SettingsPanel from "../../components/SettingsPanel";

export default function SettingsPage() {
  return (
    <div className="container">
      <header className="nav">
        <div className="brand">
          <Link href="/" style={{ textDecoration: "none" }}>FinLearn Lite</Link>
          <span className="badge">Paramètres</span>
        </div>
        <nav className="navlinks">
          <Link className="btn" href="/dashboard">Dashboard</Link>
          <Link className="btn" href="/">Accueil</Link>
        </nav>
      </header>

      <main style={{ paddingTop: 18 }}>
        <h1 className="h1">Paramètres</h1>
        <p className="p">
          La progression est stockée localement sur cet appareil. Tu peux exporter/importer ton état.
        </p>

        <SettingsPanel />
      </main>
    </div>
  );
}
