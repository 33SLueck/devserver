import BackgroundCanvas from "./components/BackgroundCanvas";



function App() {
  return (
    <div className="min-h-screen flex flex-col  text-gray-900 font-sans">
        <BackgroundCanvas />
      <header className="bg-white shadow">
        <div className="max-w-4xl mx-auto py-6 px-4 flex flex-col sm:flex-row items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Sven Lueck</h1>
          
        </div>
      </header>
      <main className="max-w-4xl flex-1 mx-auto py-10 px-4">
        <section id="about" className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">About Me</h2>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <img
              src="/~sven/me.jpg"
              alt="Sven Lueck profile"
              className="w-32 h-32 rounded-full object-cover shadow-lg border-4 border-white"
            />
            <p className="text-gray-700">
              My coding journey began in 1989 at the age of ten, when I first discovered the world of BASIC. Over the years, I explored Turbo Pascal, experimented with C, C++, and C#, and had some short adventures with Java. Later, I dove into PHP and web development. Now, to grow from a semi-pro to a true professional, I have started my current journey at the Digital Career Institute (DCI), focusing on JavaScript, TypeScript, the PERN stack, and Next.js. I am passionate about DevOps, love working with Docker, and am currently taking a deep dive into AWS with the goal of achieving the AWS Developer certification. My drive is to keep learning, building, and pushing the boundaries of what I can create as a developer.
            </p>
          </div>
        </section>
        <section id="projects" className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
         
            <div className="bg-white rounded-lg shadow p-5 flex flex-col h-full">
              <h3 className="text-xl font-bold mb-2">ASCII Generator</h3>
              <p className="text-gray-600 mb-2 flex-1">A node.js based ASCII art generator. Including brightness calculation and to give a bit back to the community a written Tutorial included. Transform images into ASCII Art.</p>
              <div className="mt-auto">
                <a href="https://github.com/33SLueck/ascii-image-generator" className="text-blue-500 hover:underline">View on GitHub</a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-5 flex flex-col h-full">
              <h3 className="text-xl font-bold mb-2">Pern Fortress</h3>
              <p className="text-gray-600 mb-2 flex-1">PERN-Fortress is a full-featured, production-ready fullstack framework based on the PERN stack (PostgreSQL, Express, React, Node.js) with TypeScript, Docker, and CI/CD. It goes beyond a simple template, offering an integrated CLI, code generation, security best practices, OpenAPI/Swagger docs, and more—making it the ideal foundation for professional projects and custom extensions. </p>
              <div className="mt-auto">
                <a href="https://github.com/33SLueck/pern-fortress" className="text-blue-500 hover:underline">View on GitHub</a>
              </div>
            </div>
          </div>
        </section>
        <section id="contact">
          <h2 className="text-2xl font-semibold mb-2">Contact</h2>
          <p className="text-gray-700">You can reach me at <a href="mailto:s.lueck33@gmail.com" className="text-blue-500 hover:underline">s.lueck33@gmail.com</a></p>
        </section>
      </main>
      <footer className="text-center text-gray-500 py-6 border-t mt-10 text-sm">
        &copy; {new Date().getFullYear()} Sven Lueck. All rights reserved.
      </footer>
    </div>
  );
}

export default App
