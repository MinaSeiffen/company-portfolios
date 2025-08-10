"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".animate-on-scroll",
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".animate-on-scroll",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={aboutRef} className="min-h-screen bg-white pt-16">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-on-scroll">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a team of passionate professionals dedicated to delivering exceptional results
            and innovative solutions for our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16 animate-on-scroll">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              To provide cutting-edge solutions that empower businesses to achieve their goals
              and exceed expectations in an ever-evolving digital landscape.
            </p>
            <p className="text-lg text-gray-600">
              We believe in building lasting partnerships through transparency, innovation,
              and unwavering commitment to quality.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Expert team with years of experience
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Proven track record of success
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Innovative and creative solutions
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Dedicated customer support
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center animate-on-scroll">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from concept to delivery.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We embrace new technologies and creative approaches to solve complex challenges.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600">
                We maintain the highest standards of honesty, transparency, and ethical behavior.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
