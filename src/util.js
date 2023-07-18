export function dateFormatter(created_at) {
  return new Date(created_at).toLocaleDateString();
}
