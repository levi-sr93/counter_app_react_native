export function generateId() {
  const id = Math.random().toString(36).substr(2, 9);
  return id;
}
