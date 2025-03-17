"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export const CallToAction = () => {
  const ctaRef = useRef(null);

  useEffect(() => {
    if (ctaRef.current) {
      gsap.from(ctaRef.current.children, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 85%",
        },
      });
    }
  }, []);

  return (
    <section ref={ctaRef} className="py-20 bg-blue-600 text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4">Master IB with Confidence</h2>
        <p className="text-lg text-blue-100 mb-6">
          Join thousands of students excelling with our expert video lessons. 
          Start your journey today!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Start Free Trial
            </button>
          </Link>
          <Link href="#">
            <button className="border-2 border-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-white/10 transition">
              Browse Subjects
            </button>
          </Link>
        </div>
        <p className="mt-6 text-blue-200 text-sm">No credit card required. Cancel anytime.</p>
      </div>
    </section>
  );
};

export default CallToAction;
