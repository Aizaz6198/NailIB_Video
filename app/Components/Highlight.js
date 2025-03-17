"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const Highlight = () => {
  const highRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);
  const decorationRefs = useRef([]);

  useEffect(() => {
    if (!highRef.current) return;
    
    const tl = gsap.timeline();
    
    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );
    
    tl.fromTo(
      descriptionRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
      "-=0.4"
    );
    
    tl.fromTo(
      buttonRef.current,
      { opacity: 0, y: 20, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.7)" },
      "-=0.3"
    );
    
    tl.fromTo(
      imageRef.current,
      { opacity: 0, x: 30, rotateY: 5 },
      { opacity: 1, x: 0, rotateY: 0, duration: 1, ease: "power2.out" },
      "-=0.6"
    );
    
    decorationRefs.current.forEach((el) => {
      tl.fromTo(
        el,
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 0.4, ease: "power1.out" },
        "-=0.7"
      );
    });
    
  }, []);

  const addToRefs = (el) => {
    if (el && !decorationRefs.current.includes(el)) {
      decorationRefs.current.push(el);
    }
  };

  return (
    <section 
      ref={highRef} 
      className="relative bg-gradient-to-br from-blue-600 to-blue-800 py-24 text-white overflow-hidden"
    >
      <div 
        ref={addToRefs}
        className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse" 
      />
      <div 
        ref={addToRefs}
        className="absolute top-32 left-1/4 w-12 h-12 bg-white/15 rounded-full animate-pulse animation-delay-300" 
      />
      <div 
        ref={addToRefs}
        className="absolute bottom-20 right-1/3 w-16 h-16 bg-white/10 rounded-full animate-pulse animation-delay-700" 
      />
      <div 
        ref={addToRefs}
        className="absolute bottom-10 right-10 w-28 h-28 bg-white/5 rounded-full animate-pulse animation-delay-500" 
      />
      
      <div className="absolute inset-0 bg-[url('/mesh-bg.svg')] opacity-10"></div>
      
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-12 relative z-10">
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 
            ref={headingRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-black text-transparent bg-gradient-to-r from-white to-blue-100"
          >
            Master Your IB Exams with Expert Video Lessons
          </h1>
          
          <p 
            ref={descriptionRef}
            className="text-lg md:text-xl text-blue-100 max-w-lg"
          >
            Unlock expert-led video lessons designed to simplify IB concepts and boost your confidence for exam success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="#">
              <button 
                ref={buttonRef}
                className="bg-white text-blue-700 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 active:shadow-md cursor-pointer"
              >
                Start Learning Now
              </button>
            </Link>
            <Link href="#">
              <button className="bg-transparent border-2 border-white/70 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-white/10 transition-all cursor-pointer">
                View Plans
              </button>
            </Link>
          </div>
          
          <div className="flex items-center justify-center md:justify-start gap-4 mt-6 text-sm">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-blue-400 border-2 border-white flex items-center justify-center text-xs">JL</div>
              <div className="w-8 h-8 rounded-full bg-blue-300 border-2 border-white flex items-center justify-center text-xs">KT</div>
              <div className="w-8 h-8 rounded-full bg-blue-200 border-2 border-white flex items-center justify-center text-xs">MR</div>
            </div>
            <p className="text-blue-100">Join 5,000+ IB students worldwide</p>
          </div>
        </div>
        
        <div
          ref={imageRef}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative w-full max-w-lg">
            <div className="absolute -inset-0.5 bg-white/20 rounded-2xl blur opacity-70"></div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/20">
              <Image
                src="/assets/nailib.png"
                alt="IB Video Platform"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute -right-4 -top-4 bg-yellow-400 text-blue-900 px-4 py-1 rounded-full font-bold shadow-lg transform rotate-12">
                New Videos Weekly!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlight;
