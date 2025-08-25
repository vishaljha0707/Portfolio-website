import React, { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About Me', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Contact Us', href: '#contact' }
  ];

  const services = [
    { id: 1, title: 'Full-Stack Development', description: 'Building high-performance, scalable web applications with modern frameworks and technologies, ensuring seamless user experiences from front to back.' },
    { id: 2, title: ' UI/UX Design', description: 'Designing intuitive, engaging, and visually stunning interfaces that blend creativity with functionality to maximize user satisfaction.' },
    { id: 3, title: 'API & Database Solutions', description: 'Creating robust APIs, optimizing databases, and ensuring secure, efficient data management for fast and reliable applications.' },
  
  ];

  const projects = [
    {
      id: 1,
      title: 'Store',
      category: 'Product store',
      image: 'https://i.ibb.co/tTMZX1Ty/Screenshot-2025-08-19-163013.png',
      link: 'https://store-eight-dun.vercel.app/'
    },
    {
      id: 2,
      title: 'Smart AI Code Reviewer',
      category: 'AI',
      image: 'https://images.unsplash.com/photo-1753998943228-73470750c597?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link:'https://github.com/vishaljha0707/AI-code-reviewer.git'
    },
    {
      id: 3,
      title: 'V-chats',
      category: 'Opinion Sharing Platform',
      image: 'https://media.istockphoto.com/id/1413735503/photo/social-media-social-media-marketing-thailand-social-media-engagement-post-structure.jpg?s=1024x1024&w=is&k=20&c=hoho5UxFMxRK4u2AmtYl2i-psyyZROlXRrqsGfx1LSw=',
      link:'https://github.com/vishaljha0707/v-chats-.git'
      }
  ];

const stats = [
  { label: '', value: 'Learning & Growing' },
  { label: 'PROJECTS COMPLETED', value: '5+' },
  { label: '', value: 'Open to Work' }
];

  const skills = ['HTML & CSS', 'React JS', 'JavaScript','MongoDB', 'Express.JS', 'Tailwind CSS', 'MySQL'];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-950/95 backdrop-blur-sm z-50 border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Vishal Jha
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white hover:bg-gray-800 p-2 rounded-md transition-all duration-300"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                I'm <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Vishal Jha</span>, Fullstack developer based in INDIA.
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
               I’m an aspiring Full-Stack Developer from Delhi-NCR, India, passionate about building modern and user-friendly web applications. I have hands-on experience in projects using the latest technologies, and I’m eager to learn, grow, and contribute to innovative teams.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get In Touch
                </a>
                <a
                  href="#work"
                  className="border border-gray-600 hover:border-blue-400 hover:bg-gray-800 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  View My Work
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 absolute blur-3xl -z-10 animate-pulse"></div>
                <img 
                  src="https://i.ibb.co/LdKnQWjr/20250825-1120-image-1.png"
                  alt="Vishal jha" 
                  className="w-80 h-80 object-cover rounded-2xl shadow-2xl border-4 border-gray-800"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              I am a passionate Full-Stack Developer, skilled in creating clean, responsive, and engaging user interfaces. I have worked on multiple academic and personal projects that showcase my ability to learn quickly and adapt to modern web technologies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
               Passionate about Full-Stack development, I bring creativity, attention to detail, and dedication to every project, always eager to learn and improve.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                {skills.map((skill) => (
                  <span 
                    key={skill}
                    className="bg-gray-800 border border-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-all duration-300">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-300 font-medium text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              I offer a wide range of services to help bring your digital vision to life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id}
                className="bg-gray-800/50 p-8 rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-gray-700/50"
              >
                <div className="text-5xl font-bold text-gray-600 mb-4 opacity-30">{service.id.toString().padStart(2, '0')}</div>
                <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                <a 
                  href="#contact"
                  className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300 flex items-center group"
                >
                  Read More
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* Work Section */}
<section id="work" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
      <div>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Latest Work</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mb-6"></div>
      </div>
      <a
        href="#work"
        className="mt-4 sm:mt-0 bg-transparent border border-gray-600 hover:border-blue-400 hover:bg-gray-800 px-6 py-2 rounded-lg font-medium transition-all duration-300 flex items-center group"
      >
        Show More
        <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <a
          href={project.link}
          key={project.id}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-700/50 block"
        >
          <div className="relative overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-sm text-blue-400 font-medium bg-black/50 px-2 py-1 rounded">
                {project.category}
              </span>
            </div>
          </div>
          <div className="p-6 bg-gray-800/80 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
          </div>
        </a>
      ))}
    </div>
  </div>
</section>


      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get in Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Let's talk about your project. I'm currently available to take on new projects.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold mb-6">Let's talk</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact me anytime.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-all duration-300">
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-white">Email</div>
                    <a href="mailto:greatstackdev@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                      Vishaljha154@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-all duration-300">
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-white">Phone</div>
                    <a href="tel:+772825524" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                      +91-7827893566
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-all duration-300">
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-white">Location</div>
                    <div className="text-gray-300">Delhi-NCR, India</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Your Name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Your Email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    name="subject"
                    placeholder="Subject" 
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <textarea 
                    name="message"
                    rows="5" 
                    placeholder="Your Message" 
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 text-white placeholder-gray-400 resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Vishal Jha
              </span>
              <p className="text-gray-400 mt-2">Full-Stack Developer</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 mb-6 md:mb-0">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white hover:underline transition-all duration-300 text-sm"
                >
                  {item.name}
                </a>
              ))}
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                 Vishal Jha. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Crafted with React & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;