"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Linkedin, Twitter, Mail } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function TeamPage() {
  const teamRef = useRef<HTMLDivElement>(null);

  const teamMembers = [
    {
      name: "Mina Emad",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Visionary leader with over 10 years of experience in technology and business development.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "mina@minaemad.com"
      }
    },
    // {
    //   name: "Sarah Johnson",
    //   role: "Lead Developer",
    //   image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    //   bio: "Full-stack developer specializing in React, Node.js, and cloud architecture.",
    //   social: {
    //     linkedin: "#",
    //     twitter: "#",
    //     email: "sarah@minaemad.com"
    //   }
    // },
    {
      name: "Michael Chen",
      role: "UI/UX Designer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Creative designer focused on user experience and modern interface design.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "michael@minaemad.com"
      }
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Strategic marketing expert with a passion for digital growth and brand development.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "emily@minaemad.com"
      }
    },
    {
      name: "David Kim",
      role: "DevOps Engineer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      bio: "Infrastructure specialist ensuring scalable and reliable system operations.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "david@minaemad.com"
      }
    },
    {
      name: "Lisa Thompson",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
      bio: "Experienced project manager ensuring successful delivery of complex projects.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "lisa@minaemad.com"
      }
    }
  ];

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
    }, teamRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={teamRef} className="min-h-screen bg-white pt-16">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-on-scroll">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Meet Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a diverse group of passionate professionals dedicated to delivering
            exceptional results for our clients. Get to know the people behind our success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div key={member.name} className="animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="text-center mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.social.linkedin}
                    className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 hover:bg-primary-200 transition-colors duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 hover:bg-primary-200 transition-colors duration-300"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 hover:bg-primary-200 transition-colors duration-300"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center animate-on-scroll">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Join Our Team
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We are always looking for talented individuals who share our passion for excellence
            and innovation. Check out our current openings.
          </p>
          <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300">
            View Open Positions
          </button>
        </div>
      </div>
    </div>
  );
}
