
export default function HustlehalicLaunch() {
  return (
    <div className="min-h-screen bg-black text-white p-6 space-y-12">
      <h1 className="text-5xl font-bold text-center text-orange-400">
        HUSTLEHALIC™ LAUNCH DAY
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-900 border-orange-400 border-2 p-6 space-y-4 rounded-xl">
          <h2 className="text-2xl font-semibold text-orange-300">About the Movement</h2>
          <p>
            Hustlehalic™ is a brand for the real ones — the grinders, the early
            risers, the ones who push through when no one’s watching.
          </p>
        </div>

        <div className="bg-gray-900 border-orange-400 border-2 p-6 space-y-4 rounded-xl">
          <h2 className="text-2xl font-semibold text-orange-300">Featured Hustlers</h2>
          <ul className="list-disc list-inside">
            <li>💈 The Barber</li>
            <li>🍳 The Chef</li>
            <li>📚 The Teacher</li>
            <li>🏭 The Honda Line Worker</li>
          </ul>
        </div>
      </div>

      <div className="bg-orange-400 text-black rounded-2xl p-6 space-y-4 text-center mt-10">
        <h2 className="text-3xl font-bold">Fueled by Hustle. Driven by Hustle.</h2>
        <p className="text-lg">Be the first to know when the merch drops. Sign up and stay ready.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input placeholder="Enter your email" className="max-w-sm text-black p-2 rounded" />
          <button className="bg-black text-orange-400 px-4 py-2 rounded hover:bg-gray-800">
            Notify Me
          </button>
        </div>
      </div>
    </div>
  );
}
