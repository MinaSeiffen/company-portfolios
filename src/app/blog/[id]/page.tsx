"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User, Tag } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const postRef = useRef<HTMLDivElement>(null);

  // Sample blog post data - in a real app, this would come from an API or CMS
  const blogPost = {
    id: params.id,
    title: "The Future of Web Development in 2024",
    content: `
      <p class="mb-6 text-lg text-gray-700 leading-relaxed">
        The landscape of web development is constantly evolving, driven by new technologies, 
        changing user expectations, and the need for better performance and accessibility. 
        As we move into 2024, several key trends are shaping the future of how we build 
        and deploy web applications.
      </p>
      
      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">AI-Powered Development Tools</h2>
      <p class="mb-6 text-lg text-gray-700 leading-relaxed">
        Artificial Intelligence is revolutionizing the development process. From AI-assisted 
        code completion to automated testing and debugging, developers are now able to 
        focus more on creative problem-solving and less on repetitive tasks. Tools like 
        GitHub Copilot and similar AI coding assistants are becoming standard in many 
        development workflows.
      </p>
      
      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Performance-First Development</h2>
      <p class="mb-6 text-lg text-gray-700 leading-relaxed">
        With Core Web Vitals becoming crucial ranking factors and users expecting 
        instant loading times, performance optimization is no longer optional. 
        Modern frameworks and tools are being built with performance in mind, 
        and developers need to prioritize speed and efficiency from the start.
      </p>
      
      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Web Components and Micro-Frontends</h2>
      <p class="mb-6 text-lg text-gray-700 leading-relaxed">
        The move towards more modular, reusable components continues to gain momentum. 
        Web Components provide a standard way to create custom elements, while 
        micro-frontends allow teams to work independently on different parts of 
        large applications.
      </p>
      
      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Enhanced Security Measures</h2>
      <p class="mb-6 text-lg text-gray-700 leading-relaxed">
        As cyber threats become more sophisticated, security must be built into 
        applications from the ground up. This includes implementing proper 
        authentication, authorization, and data protection measures, as well as 
        regular security audits and updates.
      </p>
      
      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Conclusion</h2>
      <p class="mb-6 text-lg text-gray-700 leading-relaxed">
        The future of web development is bright and full of opportunities. By staying 
        current with these trends and continuously learning new technologies, developers 
        can position themselves for success in this ever-evolving field.
      </p>
    `,
    author: "Mina Emad",
    date: "January 15, 2024",
    readTime: "5 min read",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
    tags: ["Web Development", "Technology", "AI", "Performance", "Security"]
  };

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
    }, postRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={postRef} className="min-h-screen bg-white pt-16">
      <div className="container mx-auto px-4 py-16">
        {/* Back to Blog Link */}
        <div className="mb-8 animate-on-scroll">
          <Link
            href="/blog"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto">
          <header className="mb-12 animate-on-scroll">
            <div className="mb-6">
              <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                {blogPost.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {blogPost.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                {blogPost.author}
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                {blogPost.date}
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                {blogPost.readTime}
              </div>
            </div>
            <img
              src={blogPost.image}
              alt={blogPost.title}
              className="w-full h-64 md:h-96 object-cover rounded-xl"
            />
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none animate-on-scroll">
            <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200 animate-on-scroll">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {blogPost.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-12 p-6 bg-gray-50 rounded-xl animate-on-scroll">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">About the Author</h3>
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                alt={blogPost.author}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h4 className="font-semibold text-gray-900">{blogPost.author}</h4>
                <p className="text-gray-600 text-sm">
                  Founder & CEO with over 10 years of experience in technology and business development. 
                  Passionate about innovation and helping businesses succeed in the digital age.
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        <div className="mt-16 animate-on-scroll">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Related Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                <img
                  src={`https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop`}
                  alt="Related post"
                  className="w-full h-32 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                    Related Article Title {i}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    Brief description of the related article that provides additional context...
                  </p>
                  <Link
                    href={`/blog/${i}`}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm mt-3"
                  >
                    Read More
                    <ArrowLeft className="w-4 h-4 ml-1 rotate-180" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
