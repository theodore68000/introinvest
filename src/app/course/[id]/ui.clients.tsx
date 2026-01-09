"use client";

import { markCourseCompleted, markCourseUncompleted } from "../../../lib/progress";

export default function ClientCourseActions({ courseId }: { courseId: string }) {
  return (
    <div style={{ display: "none" }}>
      {/* Hidden component: it attaches handlers to the buttons via querySelector.
          This keeps the page file mostly server-side without rewriting UI. */}
      <Binder courseId={courseId} />
    </div>
  );
}

function Binder({ courseId }: { courseId: string }) {
  // Bind once after mount
  React.useEffect(() => {
    const btnComplete = document.querySelector<HTMLButtonElement>(`button[data-course-complete="${courseId}"]`);
    const btnUncomplete = document.querySelector<HTMLButtonElement>(`button[data-course-uncomplete="${courseId}"]`);

    const onComplete = () => markCourseCompleted(courseId);
    const onUncomplete = () => markCourseUncompleted(courseId);

    btnComplete?.addEventListener("click", onComplete);
    btnUncomplete?.addEventListener("click", onUncomplete);

    return () => {
      btnComplete?.removeEventListener("click", onComplete);
      btnUncomplete?.removeEventListener("click", onUncomplete);
    };
  }, [courseId]);

  return null;
}

import React from "react";
