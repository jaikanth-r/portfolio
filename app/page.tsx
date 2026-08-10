"use client";

import { useState } from "react";
import FileTree from "@/components/FileTree/FileTree";
import Profile from "@/components/Content/Profile";
import Education from "@/components/Content/Education";
import Interests from "@/components/Content/Interests";
import Hyperledger from "@/components/Content/Hyperledger";
import ImageMatcher from "@/components/Content/ImageMatcher";
import CloudMonitor from "@/components/Content/CloudMonitor";
import Skills from "@/components/Content/Skills";
import Experience from "@/components/Content/Experience";
import Research from "@/components/Content/Research";
import Contact from "@/components/Content/Contact";
import Resume from "@/components/Content/Resume";
import CursorSpotlight from "@/components/UI/CursorSpotlight";

export default function Home() {
  const [selectedFile, setSelectedFile] = useState("profile");

  return (
    <>
      <main className="min-h-screen">
        <div className="flex min-h-screen flex-col md:flex-row">

          {/* Sidebar */}
          <aside className="flex w-full shrink-0 flex-col border-b border-white/10 md:w-60 md:border-b-0 md:border-r lg:w-64">

            <div className="border-b border-white/10 px-5 py-4 lg:px-6 lg:py-5">
              <p className="text-sm font-medium text-white">
                ~/portfolio
              </p>

              <p className="mt-1 text-xs text-neutral-600">
                software developer
              </p>
            </div>

            <div className="max-h-52 flex-1 overflow-y-auto p-4 md:max-h-none lg:p-5">
              <FileTree
                selectedFile={selectedFile}
                onSelect={setSelectedFile}
              />
            </div>

            <div className="hidden border-t border-white/10 px-5 py-4 md:block lg:px-6">
              <div className="flex items-center gap-2 text-xs text-neutral-500">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                available for opportunities
              </div>
            </div>
          </aside>

          {/* Content */}
          <section className="min-h-0 min-w-0 flex-1 overflow-y-auto">

            <div className="flex justify-end px-5 pt-5 sm:px-7 sm:pt-6 lg:px-10 lg:pt-7">
            </div>

            <div className="w-full px-5 pb-12 pt-8 sm:px-7 sm:pb-16 sm:pt-10 md:px-10 lg:px-14 xl:px-20">
              <div className="w-full max-w-5xl">

                {selectedFile === "profile" && <Profile />}
                {selectedFile === "education" && <Education />}
                {selectedFile === "interests" && <Interests />}

                {selectedFile === "ai-audit" && <Hyperledger />}
                {selectedFile === "cloud-sec" && <ImageMatcher />}
                {selectedFile === "payroll" && <CloudMonitor />}

                {selectedFile === "skills" && <Skills />}
                {selectedFile === "experience" && <Experience />}
                {selectedFile === "research" && <Research />}
                {selectedFile === "contact" && <Contact />}
                {selectedFile === "resume.pdf" && <Resume />}

                {![
                  "profile",
                  "education",
                  "interests",
                  "ai-audit",
                  "cloud-sec",
                  "payroll",
                  "skills",
                  "experience",
                  "research",
                  "contact",
                  "resume.pdf",
                ].includes(selectedFile) && (
                  <p className="text-neutral-500">
                    {selectedFile}
                  </p>
                )}

              </div>
            </div>
          </section>
        </div>
      </main>

      <CursorSpotlight />
    </>
  );
}
