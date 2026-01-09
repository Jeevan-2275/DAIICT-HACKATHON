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
        <div>
            
        </div>
    )
}