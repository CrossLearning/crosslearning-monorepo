export type User = { id: string; email: string; role?: string };

export function isLoggedIn(user: User | null): user is User {
  return !!user;
}
