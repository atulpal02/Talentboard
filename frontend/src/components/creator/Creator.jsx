import React from 'react'
import Navbar from '../components_lite/Navbar'
import Atul from './Atulpalprofile.jpeg';
import sandeep from './sandeep.jpg';

const Creator = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center w-full">
          {/* Image Section */}
          <div className="flex justify-center">
            <img src={Atul} alt="Atul Pal" className="h-80 object-cover rounded-lg shadow-md" />
          </div>
          {/* Text Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Atul Pal </h2>
            <p className="text-gray-600 mb-2"><strong>B.Tech in Electronics and Communication Engineering (ECE)</strong> from <strong>Netaji Subhas University of Technology , Delhi</strong>, Batch <strong>2026</strong>.</p>
            <p className="text-gray-600 mb-2"> <strong>Full-stack developer</strong> with a strong passion for <strong> cloud technologies, and system design.</strong> Proficient in building scalable and secure web applications using <strong>HTML, CSS + Tailwind, JavaScript, React, Node.js, Express</strong>, and integrating with <strong>APIs/REST APIs.</strong> Experienced with databases including<strong> MongoDB, SQL/MySQL,</strong>and version control with <strong> Git.</strong></p>
            <p className="text-gray-600 mb-2"> Skilled in <strong>JWT authentication, Context API/Redux, and testing frameworks like Jest.</strong> Well-versed in <strong>Docker, Kubernetes, Jenkins, Nginx, Ansible,</strong> and <strong>cloud platforms (AWS)</strong>, with hands-on knowledge in<strong> microservices architecture, Kafka, and HTTPS security.</strong> </p>
            <p className="text-gray-600">Passionate about problem-solving on <strong>LeetCode</strong> and exploring Machine Learning and AI, with a strong focus on scalable system design. A quick learner and enthusiastic collaborator, dedicated to delivering optimized solutions and continuously expanding technical expertise.</p>
          </div>
        </div>
      </div>
      
      <hr className="w-full border-gray-300 my-6" />
      
      <div className="text-center p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Developers and Contributers </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Developer 1  */}
          <a href="https://www.linkedin.com/in/atulpal02/" target="_blank" rel="noopener noreferrer" className="block text-center">
            <img src={Atul} alt="Atul Pal" className="mx-auto rounded-lg shadow-md" />
            <h3 className="text-lg font-semibold text-gray-700 mt-2">Atul Pal</h3>
            <p className="text-gray-600 text-sm"> ECE, NSUT </p>
            <p className="text-gray-600 text-sm">Full Stack Developer</p>
          </a>
          {/* Developer 2 - Sandeep */}
          <a href="#" className="block text-center">
            <img src={sandeep} alt="Sandeep" className="mx-auto rounded-lg shadow-md" />
            <h3 className="text-lg font-semibold text-gray-700 mt-2">Sandeep</h3>
            <p className="text-gray-600 text-sm">ECE, NSUT</p>
            <p className="text-gray-600 text-sm">UI/UX Designer + frontend </p>
          </a>
         
        </div>
      </div>
    </div>
  )
}

export default Creator
