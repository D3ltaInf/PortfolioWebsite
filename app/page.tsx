// app/page.tsx
import type { NextPage } from 'next';
import Head from 'next/head';

// React Icons Imports
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SiWireshark } from "react-icons/si";
import { SiMetasploit } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiKalilinux } from "react-icons/si";
import { VscTerminalBash } from "react-icons/vsc";
import { AiOutlineSecurityScan } from "react-icons/ai";

// --- Import Your Custom Icon ---
import NmapIcon from './components/icons/NmapIcon';

const HomePage: NextPage = () => {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen font-mono">
      <Head>
        <title>Andrew Franco | Cybersecurity Portfolio</title>
        <meta name="description" content="Cybersecurity Portfolio for Andrew" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-6 md:px-12">
        {/* Header Navigation */}
        <header className="flex justify-between items-center py-8">
          <a href="#" className="text-2xl font-bold text-green-400">AndrewF.dev</a>
          <nav>
            <a href="/about" className="mx-2 hover:text-green-400 transition-colors duration-300">About</a>
            <a href="#projects" className="mx-2 hover:text-green-400 transition-colors duration-300">Projects</a>
            <a href="/contact" className="mx-2 hover:text-green-400 transition-colors duration-300">Contact</a>
          </nav>
        </header>

        {/* Skills Section --- */}
        <section id="skills" className="py-20">
          <h2 className="text-3xl font-bold text-center mb-12">My Arsenal</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300">
              <SiPython className="w-16 h-16 mb-4 text-green-400" />
              <h3 className="text-xl font-bold">Python</h3>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300">
              <VscTerminalBash className="w-16 h-16 mb-4 text-green-400" />
              <h3 className="text-xl font-bold">Bash Scripting</h3>
            </div>
            
            {/* --- USING CUSTOM NMAP ICON --- */}
            <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300">
              <NmapIcon className="w-16 h-16 mb-4 text-green-400" />
              <h3 className="text-xl font-bold">Nmap</h3>
            </div>
            {/* ---------------------------------- */}
            
            <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300">
              <SiWireshark className="w-16 h-16 mb-4 text-green-400" />
              <h3 className="text-xl font-bold">Wireshark</h3>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300">
              <SiMetasploit className="w-16 h-16 mb-4 text-green-400" />
              <h3 className="text-xl font-bold">Metasploit</h3>
            </div>
             <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300">
              <SiKalilinux className="w-16 h-16 mb-4 text-green-400" />
              <h3 className="text-xl font-bold">Kali Linux</h3>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300">
              <SiJavascript className="w-16 h-16 mb-4 text-green-400" />
              <h3 className="text-xl font-bold">JavaScript</h3>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300">
               <AiOutlineSecurityScan className="w-16 h-16 mb-4 text-green-400" />
              <h3 className="text-xl font-bold">Penetration Testing</h3>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="projects" className="py-20">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {/* Project Card 1 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">AI Powered Network Traffic Analyzer</h3>
                <p className="text-gray-400 mb-4">
                  A Python-based tool that captures and analyzes network packets to detect suspicious activity and potential threats in real-time.
                </p>
                <div className="flex flex-wrap mb-4">
                    <span className="bg-green-900 text-green-300 text-sm font-medium mr-2 mb-2 px-2.5 py-0.5 rounded">Python</span>
                    <span className="bg-green-900 text-green-300 text-sm font-medium mr-2 mb-2 px-2.5 py-0.5 rounded">Scapy</span>
                    <span className="bg-green-900 text-green-300 text-sm font-medium mr-2 mb-2 px-2.5 py-0.5 rounded">Wireshark</span>
                </div>
                <a href="YOUR_GITHUB_LINK" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">View on GitHub &rarr;</a>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Vulnerability Scanner</h3>
                <p className="text-gray-400 mb-4">
                  Developed a web application vulnerability scanner that checks for common security flaws like SQL injection, XSS, and misconfigurations.
                </p>
                 <div className="flex flex-wrap mb-4">
                    <span className="bg-green-900 text-green-300 text-sm font-medium mr-2 mb-2 px-2.5 py-0.5 rounded">JavaScript</span>
                    <span className="bg-green-900 text-green-300 text-sm font-medium mr-2 mb-2 px-2.5 py-0.5 rounded">Node.js</span>
                    <span className="bg-green-900 text-green-300 text-sm font-medium mr-2 mb-2 px-2.5 py-0.5 rounded">OWASP ZAP</span>
                </div>
                <a href="YOUR_GITHUB_LINK" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">View on GitHub &rarr;</a>
              </div>
            </div>
             {/* Add more project cards as needed */}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 text-center">
            <h2 className="text-3xl font-bold mb-4">Let&apos;s Connect</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto"> I&apos;m currently open to new opportunities and collaborations. Feel free to reach out via email or connect with me on social media.</p>
            <a href="mailto:your-email@example.com" className="inline-block bg-green-500 text-gray-900 font-bold py-3 px-8 rounded-md hover:bg-green-600 transition-colors duration-300 text-lg">
              Say Hello
            </a>
            <div className="flex justify-center space-x-6 mt-8">
                <a href="https://github.com/D3ltaInf/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                    <FaGithub className="w-8 h-8" />
                </a>
                <a href="YOUR_LINKEDIN_LINK" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                    <FaLinkedin className="w-8 h-8" />
                </a>
                <a href="YOUR_TWITTER_LINK" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                    <FaTwitter className="w-8 h-8" />
                </a>
            </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-gray-800">
        <p className="text-gray-500">&copy; {new Date().getFullYear()} Andrew Franco. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
