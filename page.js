export default function Home() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(to bottom, #4f46e5, #7c3aed)', color: 'white' }}>
      <h1 style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        Willvault Live!
      </h1>
      <p style={{ fontSize: '1.5rem' }}>
        Your app is running. Edit app/page.js and push to update.
      </p>
    </main>
  );
}