export default function TestPage() {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-primary-600">Tailwind Test Page</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Card 1</h2>
            <p className="text-gray-600">Testing padding and border radius</p>
            <button className="mt-4 px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors">
              Test Button
            </button>
          </div>

          <div className="p-6 bg-primary-50 rounded-lg shadow-md border border-primary-200">
            <h2 className="text-lg font-semibold text-primary-900 mb-2">Card 2</h2>
            <p className="text-primary-700">Testing primary colors</p>
            <button className="mt-4 px-4 py-2 bg-white text-primary-600 rounded-md hover:bg-primary-100 transition-colors border border-primary-300">
              Secondary Button
            </button>
          </div>

          <div className="p-6 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg shadow-md text-white">
            <h2 className="text-lg font-semibold mb-2">Card 3</h2>
            <p className="opacity-90">Testing gradients</p>
            <button className="mt-4 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-md hover:bg-white/30 transition-colors border border-white/30">
              Glass Button
            </button>
          </div>
        </div>

        <div className="p-8 bg-white rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Color Palette Test</h3>
          <div className="grid grid-cols-10 gap-2">
            {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
              <div key={shade}>
                <div className={`h-16 w-full bg-primary-${shade} rounded`}></div>
                <p className="text-xs text-center mt-1">{shade}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}