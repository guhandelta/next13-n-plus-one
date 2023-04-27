
export default async function Home() {

 
  const identifiersReq = await fetch("http://localhost:8080/", { cache: "no-cache" });
  // Get those identifiers/id's as an array of strings
  const identifiers = (await identifiersReq.json()) as string[];

  return (
    <main className="text-white grid md:grid-cols-3">
      <div>Main Page</div>
    </main>
  )
}
