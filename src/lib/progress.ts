import { PARTS } from "../content/courses";
import type { ProgressState } from "./types";
import { nowIso, readJson, writeJson } from "./storage";

const INITIAL: ProgressState = {
  version: 1,
  completedById: {},
  updatedAt: nowIso(),
};

export function getProgress() {
  const state = readJson<ProgressState>(INITIAL);
  const allCourses = PARTS.flatMap((p) => p.courses);
  const totalCount = allCourses.length;
  const completedCount = allCourses.filter((c) => state.completedById[c.id]).length;

  return {
    ...state,
    totalCount,
    completedCount,
  };
}

export function markCourseCompleted(courseId: string) {
  const state = readJson<ProgressState>(INITIAL);
  state.completedById[courseId] = true;
  state.updatedAt = nowIso();
  writeJson(state);
  window.dispatchEvent(new Event("finlearn:progress"));
}

export function markCourseUncompleted(courseId: string) {
  const state = readJson<ProgressState>(INITIAL);
  state.completedById[courseId] = false;
  state.updatedAt = nowIso();
  writeJson(state);
  window.dispatchEvent(new Event("finlearn:progress"));
}
