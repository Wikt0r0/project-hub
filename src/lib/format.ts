export function formatDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function statusLabel(status?: string): string {
  switch (status) {
    case "in-progress":
      return "In progress";
    case "completed":
      return "Completed";
    case "archived":
      return "Archived";
    case "concept":
      return "Concept";
    default:
      return "";
  }
}
