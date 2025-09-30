import BackgroundCanvas from "./components/BackgroundCanvas";



function App() {
  return (
    <div className="min-h-screen flex flex-col  text-gray-900 font-sans">
        <BackgroundCanvas />
      <header className="bg-white shadow">
        <div className="max-w-4xl mx-auto py-6 px-4 flex flex-col sm:flex-row items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Sven Lueck</h1>
          <nav className="mt-4 sm:mt-0">
            <ul className="flex space-x-6">
              <li><a href="#about" className="hover:text-blue-600">About</a></li>
              <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
              <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="max-w-4xl flex-1 mx-auto py-10 px-4">
        <section id="about" className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">About Me</h2>
          <p className="text-gray-700">Short intro about yourself, your background, and your interests. You can add a profile picture here if you want.</p>
        </section>
        <section id="projects" className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Example project card */}
            <div className="bg-white rounded-lg shadow p-5">
              <h3 className="text-xl font-bold mb-2">Project Title</h3>
              <p className="text-gray-600 mb-2">Short project description goes here.</p>
              <a href="#" className="text-blue-500 hover:underline">View on GitHub</a>
            </div>
            {/* Add more project cards as needed */}
          </div>
        </section>
        <section id="contact">
          <h2 className="text-2xl font-semibold mb-2">Contact</h2>
          <p className="text-gray-700">You can reach me at <a href="mailto:your@email.com" className="text-blue-500 hover:underline">your@email.com</a></p>
        </section>
      </main>
      <footer className="text-center text-gray-500 py-6 border-t mt-10 text-sm">
        &copy; {new Date().getFullYear()} Sven Lueck. All rights reserved.
      </footer>
    </div>
  );
}

export default App
