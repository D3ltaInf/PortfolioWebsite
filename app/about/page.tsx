// app/about/page.tsx
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center py-12">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-8 tracking-tight">
        About Me
      </h1>
      <div className="max-w-3xl bg-white shadow-xl rounded-lg p-10 mx-4">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Hello! I'm a highly accomplished and versatile technical professional, distinguished by my <span className="font-semibold text-red-600">top 1% ranking on Hack The Box Academy</span> and <span className="font-semibold text-red-600">top 4% ranking on TryHackMe</span> globally. This expertise underpins my proactive approach to cybersecurity, covering both offensive and defensive strategies, vulnerability analysis, and secure system design.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          My core strengths lie in programming across <span className="font-semibold text-blue-600">Python</span>, <span className="font-semibold text-blue-600">C</span>, and <span className="font-semibold text-blue-600">Go</span>, enabling me to tackle complex software challenges efficiently. I'm also deeply proficient in <span className="font-semibold text-blue-600">Linux</span> and <span className="font-semibold text-blue-600">Bash scripting</span> for robust system operations and automation. Furthermore, I excel at developing <span className="font-semibold text-blue-600">ML</span> and <span className="font-semibold text-blue-600">AI</span> models using <span className="font-semibold text-blue-600">Jupyter Notebooks</span>, transforming data into intelligent solutions.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
         I leverage this diverse technical foundation to build secure, high-performing, and intelligent systems. My capabilities also extend to modern web development, utilizing Next.js, React, TypeScript and Tailwind CSS for frontend, alongside backend knowledge in Node.js, php, and SQL database management. Passionate about innovation and continuous learning, I'm driven to deliver impactful results and contribute to cutting-edge projects.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">

        </p>
      </div>
      <a
        href="/" // Link back to the homepage
        className="mt-10 px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out"
      >
        Back to Home
      </a>
    </div>
  );
};

export default AboutPage;