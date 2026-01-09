"use client";
import { Dispatch, SetStateAction } from "react";
import { Button } from "@/components/ui/button";

interface ProjectEntry {
  title: string;
  link?: string;
  description: string[];
}

interface ProjectsFormProps {
  data: ProjectEntry[];
  setData: Dispatch<SetStateAction<ProjectEntry[]>>;
}

export default function ProjectsForm({ data, setData }: ProjectsFormProps) {
  const handleChange = (
    index: number,
    field: keyof ProjectEntry,
    value: string
  ) => {
    setData((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value } as ProjectEntry;
      return updated;
    });
  };

  const handleDescriptionChange = (projIndex: number, descIndex: number, value: string) => {
    setData((prev) => {
      const updated = [...prev];
      const descs = [...(updated[projIndex].description || [])];
      descs[descIndex] = value;
      updated[projIndex] = { ...updated[projIndex], description: descs };
      return updated;
    });
  };

  const addDescription = (projIndex: number) => {
    setData((prev) => {
      const updated = [...prev];
      const descs = [...(updated[projIndex].description || [])];
      descs.push("");
      updated[projIndex] = { ...updated[projIndex], description: descs };
      return updated;
    });
  };

  const removeDescription = (projIndex: number, descIndex: number) => {
    setData((prev) => {
      const updated = [...prev];
      const descs = [...(updated[projIndex].description || [])].filter((_, i) => i !== descIndex);
      updated[projIndex] = { ...updated[projIndex], description: descs };
      return updated;
    });
  };

  const addProject = () => {
    setData((prev) => [...prev, { title: "", link: "", description: [""] }]);
  };

  const removeProject = (index: number) => {
    setData((prev) => prev.filter((_, i) => i !== index));
  };
    return (
        <div>

        </div>
    )
}