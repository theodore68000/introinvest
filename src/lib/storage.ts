const KEY = "finlearn:progress:v1";

export function readJson<T>(fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function writeJson<T>(value: T): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(value));
}
