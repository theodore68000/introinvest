import { PARTS } from "../content/courses";
import { readJson, writeJson } from "./storage";
import type { ProgressState } from "./types";

const EMPTY: ProgressState = { version: 1, completedById: {}, updatedAt: "" };

function read(): ProgressState {
  return readJson<ProgressState>(EMPTY);
}

function save(state: ProgressState): void {
  state.updatedAt = new Date().toISOString();
  writeJson(state);
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("finlearn:progress"));
  }
}

export function getProgress() {
  const state = read();
  const allCourses = PARTS.flatMap((p) => p.courses);
  return {
    ...state,
    completedCount: allCourses.filter((c) => state.completedById[c.id]).length,
    totalCount: allCourses.length,
  };
}

export function markCourseCompleted(courseId: string): void {
  const state = read();
  state.completedById[courseId] = true;
  save(state);
}

export function markCourseUncompleted(courseId: string): void {
  const state = read();
  delete state.completedById[courseId];
  save(state);
}
