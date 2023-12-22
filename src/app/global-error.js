'use client';

export default function GlobalError({ error, reset }) {
  return (
    <>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </>
  );
}
