"use client";
import { Dispatch,SetStateAction } from "react";
import { Button  } from "@/components/ui/button";

interface SkillsFormProps {
  skills: {
    languages: string[];
    frameworks: string[];
    tools: string[];
    core: string[];
  };
  setSkills: Dispatch<SetStateAction<{
    languages: string[];
    frameworks: string[];
    tools: string[];
    core: string[];
  }>>;
  certifications: string[];
  setCertifications: Dispatch<SetStateAction<string[]>>;
  achievements: string[];
  setAchievements: Dispatch<SetStateAction<string[]>>;
}

export default function SkillsForm({ skills, setSkills, certifications, setCertifications, achievements, setAchievements }: SkillsFormProps) {

  const handleSkillCategoryChange = (
    category: keyof typeof skills,
    index: number,
    value: string
  ) => {
    setSkills((prev) => {
      const updated = { ...prev };
      const arr = [...updated[category]];
      arr[index] = value;
      return { ...updated, [category]: arr };
    });
  };

  const addSkillItem = (category: keyof typeof skills) => {
    setSkills((prev) => ({ ...prev, [category]: [...prev[category], ""] }));
  };

  const removeSkillItem = (category: keyof typeof skills, index: number) => {
    setSkills((prev) => ({ ...prev, [category]: prev[category].filter((_, i) => i !== index) }));
  };

  const handleArrayChange = (
    setter: React.Dispatch<React.SetStateAction<string[]>>,
    index: number,
    value: string
  ) => {
    setter((prev) => {
      const updated = [...prev];
      updated[index] = value;
      return updated;
    });
  };

  const addItem = (setter: React.Dispatch<React.SetStateAction<string[]>>) => setter((prev) => [...prev, ""]);

  const removeItem = (setter: React.Dispatch<React.SetStateAction<string[]>>, index: number) => setter((prev) => prev.filter((_, i) => i !== index));

  const handleRegenerate = () => {
    console.log("Regenerate skills/achievements from AI");
  };

    return (
        <div>

        </div>
    )
}