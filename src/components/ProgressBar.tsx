// src/components/ProgressBar.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { PARTS } from "../content/courses";
import { getProgress } from "../lib/progress";

type Props =
  | { mode: "global" }
  | { mode: "part"; partId: "comprendre" | "choisir" | "investir" }
  | { mode: "course"; courseId: string };

export default function ProgressBar(props: Props) {
  const [tick, setTick] = useState(0);

  // Re-render when progress changes (custom event fired in lib/progress.ts)
  useEffect(() => {
    const onChange = () => setTick((t) => t + 1);
    window.addEventListener("finlearn:progress", onChange);
    return () => window.removeEventListener("finlearn:progress", onChange);
  }, []);

  const { percent, label } = useMemo(() => compute(props), [props, tick]);

  return (
    <div>
      <div className="meta" style={{ justifyContent: "space-between", marginBottom: 6 }}>
        <span>{label}</span>
        <span className="badge">{percent}%</span>
      </div>

      <div
        style={{
          height: 10,
          borderRadius: 999,
          border: "1px solid var(--border)",
          background: "rgba(255,255,255,0.04)",
          overflow: "hidden",
        }}
        aria-label={`${label} ${percent}%`}
      >
        <div
          style={{
            height: "100%",
            width: `${percent}%`,
            background: "rgba(122, 162, 255, 0.55)",
          }}
        />
      </div>
    </div>
  );
}

function compute(props: Props): { percent: number; label: string } {
  const prog = getProgress();

  if (props.mode === "course") {
    const done = prog.completedById[props.courseId] === true;
    return { percent: done ? 100 : 0, label: "Statut" };
  }

  if (props.mode === "part") {
    const part = PARTS.find((p) => p.id === props.partId);
    if (!part) return { percent: 0, label: "Partie" };

    const total = part.courses.length;
    const completed = part.courses.filter((c) => prog.completedById[c.id]).length;
    const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
    return { percent, label: "Partie" };
  }

  // global
  const allCourses = PARTS.flatMap((p) => p.courses);
  const total = allCourses.length;
  const completed = allCourses.filter((c) => prog.completedById[c.id]).length;
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
  return { percent, label: "Global" };
}
