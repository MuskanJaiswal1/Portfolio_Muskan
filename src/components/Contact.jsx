"use client";

import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Instagram,
  Send,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* CONTACT SECTION */}
      <section id="contact" className="flex-grow py-20 px-6 md:px-16">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-2">
          <span className="text-blue-500">Contact</span> Me
        </h2>
        <hr className="border-gray-700 mb-12" />

        {/* Two Columns */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LEFT: Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold uppercase">
              Contact Information
            </h3>

            <div className="space-y-4 text-gray-200">
              <p className="flex items-center gap-3">
                <Mail className="text-blue-500 w-5 h-5" />
                muskanj9161@gmail.com
              </p>
              <p className="flex items-center gap-3">
                <Phone className="text-blue-500 w-5 h-5" />
                +91 9161751614
              </p>
              <p className="flex items-center gap-3">
                <MapPin className="text-blue-500 w-5 h-5" />
                JSSATE, Noida
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 text-2xl">
              <a
                href="https://github.com/MuskanJaiswal1"
                target="_blank"
                className="hover:text-blue-400"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com/muskanjais401"
                target="_blank"
                className="hover:text-blue-400"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/muskan-jaiswal-b6475b24b"
                target="_blank"
                className="hover:text-blue-400"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* RIGHT: Form */}
          <form
            action="mailto:muskanj9161@gmail.com"
            method="post"
            encType="text/plain"
            className="space-y-4"
          >
            <Input
              type="text"
              placeholder="Name"
              required
              className="bg-[#111] border-none text-gray-200"
            />
            <Input
              type="email"
              placeholder="Email"
              required
              className="bg-[#111] border-none text-gray-200"
            />
            <Input
              type="text"
              placeholder="Your Thoughts"
              className="bg-[#111] border-none text-gray-200"
            />
            <Textarea
              placeholder="Enter Your Message"
              rows={6}
              required
              className="bg-[#111] border-none text-gray-200 h-40"
            />
            <Button
              type="submit"
              className="px-6 py-2 rounded-full bg-white text-black font-semibold flex items-center gap-2 hover:bg-blue-500 hover:text-white transition-all"
            >
              Submit <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-black border-t border-gray-800">
        <div className="m-5 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} <span className="text-blue-500">Muskan Jaiswal</span>. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
