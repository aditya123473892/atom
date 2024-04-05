import React from 'react';

const HomePage = () => {
  return (
    <section className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <img
            src="path/to/your/profile-picture.jpg"
            alt="Your Name"
            className="w-48 h-48 rounded-full object-cover mb-8"
          />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Hi, I'm Sohail</h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mb-8">
            I'm a passionate software developer with expertise in web development.
            I love creating intuitive and user-friendly websites and applications.
          </p>
          <div className="flex space-x-4">
            <a
              href="path/to/your/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Download Resume
            </a>
            <a
              href="mailto:your-email@example.com"
              className="px-6 py-3 bg-white text-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Get in Touch
            </a>
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-gray-700 mb-4">
                I'm a full-stack developer with over 5 years of experience in building robust and scalable web applications. I have a strong background in JavaScript, React, Node.js, and various backend technologies.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Throughout my career, I have worked on diverse projects, collaborating with cross-functional teams to deliver high-quality software solutions. I am passionate about writing clean, maintainable code and continuously learning and adapting to new technologies.
              </p>
            </div>
            <div>
              <p className="text-lg text-gray-700 mb-4">
                Apart from coding, I enjoy sharing my knowledge through technical blog posts and contributing to open-source projects. I believe in the power of community and love engaging with fellow developers.
              </p>
              <p className="text-lg text-gray-700">
                When I'm not in front of a computer screen, you can find me exploring new hiking trails, trying out new recipes in the kitchen, or immersed in a good science fiction novel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;