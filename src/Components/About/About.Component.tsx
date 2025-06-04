
export function About() {
  return (
    <main className="flex flex-col items-center rounded-2xl">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9 mt-16">
          <h1 className="text-3xl font-black"> Cristóbal Torres</h1>
          <img
            className="rounded-full max-w-80"
            src="/profile.jpg"
            alt="Cristóbal Torres"
          />
          <h2 className="text-xl font-thin">
            A <strong>Software</strong> engineer based in <em>México</em>
          </h2>
          <ul>
            <li></li>
          </ul>
        </header>
      </div>
    </main>
  );
}
