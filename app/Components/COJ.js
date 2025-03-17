import { useEffect, useRef } from "react";
import gsap from "gsap";
import {CheckIcon, CrossIcon} from "./UtilityComponents.js";

export const CostOfJoining = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.2 }
    );

    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3, // Staggered animation for each card
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">Affordable Pricing Plans</h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose the perfect plan that fits your learning needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-15">
          {/** Free Trial Plan */}
          <div
            ref={(el) => (cardsRef.current[0] = el)}
            className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 flex flex-col"
          >
            <h3 className="font-integral-cf text-xl font-bold text-gray-900 mb-2">
              Free Trial
            </h3>
            <div className="font-integral-cf text-4xl font-bold text-blue-600 mb-2">
              $0
            </div>
            <p className="text-gray-500 mb-6">7 days access</p>
            <ul className="space-y-3 mb-8 flex-grow">
          <li className="flex items-center">
            <CheckIcon />
            <span>Limited video library access</span>
          </li>
          <li className="flex items-center">
            <CheckIcon />
            <span>Basic practice questions</span>
          </li>
          <li className="flex items-center text-gray-400">
            <CrossIcon />
            <span>Downloads unavailable</span>
          </li>
          <li className="flex items-center text-gray-400">
            <CrossIcon />
            <span>No exam-specific content</span>
          </li>
        </ul>
            <a
              href="#"
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-center px-6 py-3 rounded-lg font-bold transition"
            >
              Start free trial
            </a>
          </div>

          {/** Monthly Plan (Most Popular) */}
          <div
            ref={(el) => (cardsRef.current[1] = el)}
            className="bg-blue-600 rounded-xl p-8 shadow-xl border border-blue-500 flex flex-col transform scale-105 z-10"
          >
            <div className="bg-blue-500 text-white text-sm font-bold py-1 px-3 rounded-full w-fit mb-4">
              MOST POPULAR
            </div>
            <h3 className="font-integral-cf text-xl font-bold text-white mb-2">
              Monthly
            </h3>
            <div className="font-integral-cf text-4xl font-bold text-white mb-2">
              $19.99
            </div>
            <p className="text-blue-100 mb-6">per month</p>
            <ul className="space-y-3 mb-8 flex-grow">
          <li className="flex items-center text-white">
            <CheckIcon />
            <span>Full video library access</span>
          </li>
          <li className="flex items-center text-white">
            <CheckIcon />
            <span>Advanced practice questions</span>
          </li>
          <li className="flex items-center text-white">
            <CheckIcon />
            <span>Video downloads</span>
          </li>
          <li className="flex items-center text-white">
            <CheckIcon />
            <span>Exam-specific preparation</span>
          </li>
        </ul>
            <a
              href="#"
              className="bg-white hover:bg-blue-100 text-blue-600 text-center px-6 py-3 rounded-lg font-bold transition"
            >
              Get started
            </a>
          </div>

          {/** Yearly Plan */}
          <div
            ref={(el) => (cardsRef.current[2] = el)}
            className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 flex flex-col"
          >
            <h3 className="font-integral-cf text-xl font-bold text-gray-900 mb-2">
              Yearly
            </h3>
            <div className="font-integral-cf text-4xl font-bold text-blue-600 mb-2">
              $199.99
            </div>
            <p className="text-gray-500 mb-6">per year</p>
            <ul className="space-y-3 mb-8 flex-grow">
          <li className="flex items-center">
            <CheckIcon />
            <span>Full video library access</span>
          </li>
          <li className="flex items-center">
            <CheckIcon />
            <span>Advanced practice questions</span>
          </li>
          <li className="flex items-center">
            <CheckIcon />
            <span>Video downloads</span>
          </li>
          <li className="flex items-center">
            <CheckIcon />
            <span>Exam-specific preparation</span>
          </li>
          <li className="flex items-center">
            <CheckIcon />
            <span>Exclusive bonus content</span>
          </li>
        </ul>
            <a
              href="#"
              className="bg-gray-800 hover:bg-gray-900 text-white text-center px-6 py-3 rounded-lg font-bold transition"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostOfJoining;
