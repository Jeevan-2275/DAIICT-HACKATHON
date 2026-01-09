"use client";

import { Button } from "@/components/ui/button";
import React from "react";

interface PreviewResumeProps {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
    linkedin?: string;
    github?: string;
    portfolio?: string;
  };
  careerObjective: string;
  education: { degree: string; institution: string; year: string }[];
  workExperience: {
    title: string;
    company: string;
    duration: string;
    description: string;
  }[];
  projects: {
    title: string;
    link?: string;
    description: string[];
  }[];
  skills: {
    languages: string[];
    frameworks: string[];
    tools: string[];
    core: string[];
  };
  certifications: string[];
  achievements: string[];
  includeWorkExperience?: boolean;
}

export default function PreviewResume({
  personalInfo,
  careerObjective,
  education,
  workExperience,
  projects,
  skills,
  certifications,
  achievements,
  includeWorkExperience = true,
}: PreviewResumeProps) {
    return (
       <div className="flex justify-center items-start bg-gray-100 p-6 rounded-xl shadow-inner h-[90vh] overflow-y-auto">
      <div className="bg-white w-[794px] h-[1123px] shadow-md border border-gray-200 rounded-md p-10 text-gray-800 leading-relaxed overflow-y-auto">
        {/* HEADER */}
        <div className="border-b-2 border-gray-300 pb-4 mb-6 text-center">
          <h1 className="text-3xl font-bold text-gray-900 uppercase tracking-wide">
            {personalInfo.name || "Your Name"}
          </h1>
          <p className="text-sm mt-1 text-gray-600">
            {personalInfo.email || "youremail@gmail.com"}
            {" | "}
            {personalInfo.phone || "+91 00000 00000"}
            { (personalInfo.linkedin && personalInfo.linkedin.trim()) ? (
              <>
                {" | "}
                <a href={personalInfo.linkedin} target="_blank" className="text-blue-600 underline">LinkedIn</a>
              </>
            ) : null }
            { (personalInfo.github && personalInfo.github.trim()) ? (
              <>
                {" | "}
                <a href={personalInfo.github} target="_blank" className="text-blue-600 underline">GitHub</a>
              </>
            ) : null }
            { (personalInfo.portfolio && personalInfo.portfolio.trim()) ? (
              <>
                {" | "}
                <a href={personalInfo.portfolio} target="_blank" className="text-blue-600 underline">Portfolio</a>
              </>
            ) : null }
          </p>
        </div>
      </div>
    </div>
  );
}