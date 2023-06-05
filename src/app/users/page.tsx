// TODO remove this once we have an answer here
// https://github.com/vercel/next.js/discussions/50759
// export const dynamic = "force-dynamic";

interface User {
  fullName: string;
}

export default async function Users() {
  // We do not have an API available at build time.
  // We only know the value for process.env.API_ORIGIN at **runtime**.
  // What should we do here?
  const resp = await fetch(`${process.env.API_ORIGIN}/api/users`);

  if (!resp.ok) {
    throw new Error('Failed to retrieve users.');
  }

  const users = await resp.json() as User[];

  return (
    <div>Got {users.length} users.</div>
  )
}