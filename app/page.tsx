import Link from "next/link";
import { ArrowRight, Book } from 'lucide-react'

export default function HomePage() {
  return (
  <Link href="/docs" className="block w-full h-screen">
      <section className="w-full h-full flex items-center justify-center bg-gradient-to-r from-purple-700 to-indigo-800 text-white hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 cursor-pointer group">
        <div className="max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <Book className="h-16 w-16 mx-auto mb-8 animate-pulse" />
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            Explore Our Documentation
          </h1>
          <p className="mt-6 text-xl sm:text-2xl text-zinc-200 max-w-2xl mx-auto">
          Find guides and references to easily integrate and customize pre-built React components for your app.
          </p>
          <div className="mt-10 flex items-center justify-center space-x-2 text-2xl font-semibold">
            <span>Get Started</span>
            <ArrowRight className="h-8 w-8 transform group-hover:translate-x-2 transition-transform duration-300 ease-in-out" />
          </div>
        </div>
      </section>
    </Link>
  );
}
