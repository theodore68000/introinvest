"use client";

import { exportProgressToFile, importProgressFromFile, resetProgress } from "../lib/exportImport";
import { getProgress } from "../lib/progress";
import { useEffect, useState } from "react";

export default function SettingsPanel() {
  const [summary, setSummary] = useState<{ completed: number; total: number }>({ completed: 0, total: 0 });
  const [msg, setMsg] = useState<string | null>(null);

  useEffect(() => {
    refresh();
  }, []);

  function refresh() {
    const p = getProgress();
    setSummary({ completed: p.completedCount, total: p.totalCount });
  }

  return (
    <div className="grid cols2">
      <div className="card">
        <h2 className="h2">Progression</h2>
        <p className="p">
          Capsules lues : <strong>{summary.completed}</strong> / {summary.total}.
        </p>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <button
            className="btn"
            onClick={() => {
              exportProgressToFile();
              setMsg("Export généré.");
            }}
          >
            Exporter (JSON)
          </button>

          <label className="btn" style={{ cursor: "pointer" }}>
            Importer (JSON)
            <input
              type="file"
              accept="application/json"
              style={{ display: "none" }}
              onChange={async (e) => {
                const f = e.target.files?.[0];
                if (!f) return;
                try {
                  await importProgressFromFile(f);
                  refresh();
                  setMsg("Import OK.");
                } catch (err) {
                  setMsg(err instanceof Error ? err.message : "Import impossible.");
                } finally {
                  e.currentTarget.value = "";
                }
              }}
            />
          </label>
        </div>

        {msg ? <p className="p" style={{ marginTop: 10 }}>{msg}</p> : null}
      </div>

      <div className="card">
        <h2 className="h2">Zone à risque</h2>
        <p className="p">
          Réinitialise ta progression locale sur cet appareil (aucun cours n’est supprimé, seulement l’état “lu/non lu”).
        </p>

        <button
          className="btn danger"
          onClick={() => {
            resetProgress();
            refresh();
            setMsg("Progression réinitialisée.");
          }}
        >
          Reset progression
        </button>
      </div>
    </div>
  );
}
