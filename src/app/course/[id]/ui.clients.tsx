"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { markCourseCompleted } from "../../../lib/progress";

export default function ClientCourseActions({ courseId }: { courseId: string }) {
  const router = useRouter();

  React.useEffect(() => {
    const btn = document.querySelector<HTMLButtonElement>(`button[data-course-complete="${courseId}"]`);

    const onComplete = () => {
      markCourseCompleted(courseId);
      router.push("/");
    };

    btn?.addEventListener("click", onComplete);
    return () => btn?.removeEventListener("click", onComplete);
  }, [courseId, router]);

  return null;
}
