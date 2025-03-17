"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

export const Subjects = () => {
  const sectionRef = useRef(null);
  const pricingRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      pricingRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.5 }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-integral-cf text-3xl md:text-4xl font-bold text-gray-900">
            Explore Our <span className="text-blue-600">Course Library</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from expert instructors with in-depth courses on a variety of subjects.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            { title: "Web Development", description: "HTML, CSS, JavaScript, React" },
            { title: "Data Science", description: "Python, SQL, Machine Learning" },
            { title: "Cybersecurity", description: "Network Security, Ethical Hacking" },
            { title: "Cloud Computing", description: "AWS, Azure, DevOps" },
            { title: "Graphic Design", description: "Adobe Suite, UI/UX, Branding" },
            { title: "Digital Marketing", description: "SEO, Social Media, PPC" },
            { title: "Business Analytics", description: "Data-driven decision-making" },
            { title: "Finance & Investing", description: "Stock Market, Crypto, Wealth Management" },
          ].map((subject, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition text-center"
            >
              <h3 className="font-integral-cf font-bold text-lg mb-2">
                {subject.title}
              </h3>
              <p className="text-gray-500 text-sm">{subject.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="#"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold inline-flex items-center transition transform hover:-translate-y-1 shadow-lg"
          >
            Browse All Courses
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Subjects;
