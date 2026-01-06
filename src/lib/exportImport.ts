import type { ProgressState } from "./types";
import { STORAGE, clearStorage, readJson, writeJson } from "./storage";

function download(filename: string, text: string) {
  const blob = new Blob([text], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export function exportProgressToFile() {
  const state = readJson<ProgressState>({ version: 1, completedById: {}, updatedAt: new Date().toISOString() });
  download("finlearn-progress.json", JSON.stringify({ storageKey: STORAGE.key, state }, null, 2));
}

export async function importProgressFromFile(file: File) {
  const raw = await file.text();
  let parsed: any;
  try {
    parsed = JSON.parse(raw);
  } catch {
    throw new Error("Le fichier n’est pas un JSON valide.");
  }

  const state: ProgressState | undefined = parsed?.state;
  if (!state || state.version !== 1 || typeof state.completedById !== "object") {
    throw new Error("Format d’import non reconnu.");
  }

  writeJson(state);
  window.dispatchEvent(new Event("finlearn:progress"));
}

export function resetProgress() {
  clearStorage();
  window.dispatchEvent(new Event("finlearn:progress"));
}
