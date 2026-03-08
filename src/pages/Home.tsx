import Hero from "../components/Hero";
import Highlights from "../components/Highlights";

export default function Home() {
  return (
    <div>
      <Hero />
      <Highlights />
      {/* Contact */}
      <section id="contact" className="bg-gray-50 py-24 pt-0">
        <div className="max-w-xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-6">Let’s work together</h2>
          <p className="text-gray-600 mb-8">
            Email us and we’ll get back to you within one business day.
          </p>
          <a
            href="mailto:contact@yantix.com"
            className="inline-block !bg-gray-900 !text-white px-8 py-3 rounded-lg shadow hover:bg-black-700 transition"
          >
            contact@yantix.com
          </a>
        </div>
      </section>
    </div>
  );
}
