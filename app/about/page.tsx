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
          Hello! I'm [Your Name], a passionate web developer eager to build
          innovative and efficient digital experiences. My journey in web
          development started with a fascination for how websites come to life,
          and I've been hooked ever since.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          I specialize in frontend technologies like <span className="font-semibold text-blue-600">React</span> and <span className="font-semibold text-blue-600">Next.js</span>,
          crafting responsive and user-friendly interfaces. My projects often
          incorporate <span className="font-semibold text-green-600">TypeScript</span> for robust code and <span className="font-semibold text-purple-600">Tailwind CSS</span> for rapid,
          maintainable styling.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          When I'm not coding, you can find me [Your hobbies/interests]. I'm always
          eager to learn new technologies and contribute to exciting projects.
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