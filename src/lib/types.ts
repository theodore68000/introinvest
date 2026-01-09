export type ProgressState = {
  version: 1;
  completedById: Record<string, boolean>;
  updatedAt: string; // ISO
};
