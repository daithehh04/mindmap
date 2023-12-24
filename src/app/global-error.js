'use client';

export default function GlobalError({ error, reset }) {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
