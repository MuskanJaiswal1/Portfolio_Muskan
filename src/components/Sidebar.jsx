"use client";

import { useState, useEffect } from "react";
import { Home, User, GraduationCap, Image, Phone, Download, Menu } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import Link from "next/link";

const navItems = [
  { href: "#home", label: "Home", icon: Home },
  { href: "#about", label: "About", icon: User },
  { href: "#experience", label: "Experience", icon: GraduationCap },
  { href: "#projects", label: "Projects", icon: Image },
  { href: "#contact", label: "Contact", icon: Phone },
  { href: "/img/Muskan_Jaiswal_Resume.pdf", label: "View CV", icon: Download },
];

export default function Sidebar() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <>
      {/*  Mobile Hamburger */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="bg-[#1f1f1f] text-white border border-gray-700 hover:bg-blue-600"
            >
              <Menu size={22} />
            </Button>
          </SheetTrigger>

          <SheetContent side="left" className="bg-[#1f1f1f] text-white w-72 p-6">
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <SheetDescription className="sr-only">
              Navigation menu for Muskan’s portfolio
            </SheetDescription>

            <div className="flex flex-col items-center gap-3 mb-8">
              <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-blue-400 to-blue-500">
                <img
                  src="/img/image.png"
                  alt="Muskan"
                  className="w-full h-full object-cover rounded-full border-4 border-[#111827]"
                />
              </div>
              <h2 className="text-xl font-semibold">Muskan Jaiswal</h2>
              <p className="text-sm text-gray-300">Web developer</p>
            </div>

            {/* Navigation */}
            <nav className="w-full">
              <ul className="flex flex-col gap-4">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isResume = item.label === "View CV";
                  return (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        {...(isResume ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        <Button className="w-full justify-start rounded-full px-6 py-4 bg-[#2b2b2b] hover:bg-blue-600 text-white">
                          <Icon size={18} className="mr-2" />
                          {item.label}
                        </Button>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="mt-10 flex justify-center gap-4">
              <a href="https://github.com/MuskanJaiswal1" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-[#111111]">
                <FaGithub size={20} />
              </a>
              <a href="https://instagram.com/muskanjais401" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-[#111111]">
                <FaInstagram size={20} />
              </a>
              <a href="https://www.linkedin.com/in/muskan-jaiswal-b6475b24b" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-[#111111]">
                <FaLinkedin size={20} />
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* 🔹 Desktop Sidebar */}
      <aside className="hidden md:flex md:w-72 flex-col items-center gap-6 p-6 bg-[#1f1f1f] text-white min-h-screen sticky top-0">
        <div className="flex flex-col items-center gap-3">
          <div className="w-36 h-36 rounded-full p-1 bg-gradient-to-tr from-blue-400 to-blue-500">
            <img
              src="/img/image.png"
              alt="Muskan"
              className="w-full h-full object-cover rounded-full border-4 border-[#111827]"
            />
          </div>
          <h2 className="text-2xl font-semibold">Muskan Jaiswal</h2>
          <p className="text-sm text-gray-300">Web developer</p>
        </div>

        {/* Navigation */}
        <nav className="w-full mt-4">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isResume = item.label === "View CV";
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    {...(isResume ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    <Button className="w-full justify-center rounded-full px-6 py-4 bg-[#2b2b2b] hover:bg-blue-600 text-white">
                      <Icon size={18} className="mr-2" />
                      {item.label}
                    </Button>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Social Icons */}
        <div className="mt-auto">
          <div className="flex gap-4">
            <a href="https://github.com/MuskanJaiswal1" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-[#111111]">
              <FaGithub size={20} />
            </a>
            <a href="https://instagram.com/muskanjais401" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-[#111111]">
              <FaInstagram size={20} />
            </a>
            <a href="https://www.linkedin.com/in/muskan-jaiswal-b6475b24b" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-[#111111]">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
