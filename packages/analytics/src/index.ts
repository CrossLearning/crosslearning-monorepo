export type Event = { type: string; payload?: Record<string, unknown>; ts?: number };

export function track(type: string, payload?: Record<string, unknown>) {
  const ts = Date.now();
  if (typeof window !== "undefined") {
    console.log("[analytics]", ts, type, payload || {});
  }
}
