import type { Metadata } from "next";
import { StoryStudioCaseStudy } from "@/components/StoryStudioCaseStudy";

export const metadata: Metadata = {
  title: "Story Studio — Product Design & Design Engineering Case Study",
  description: "Designing an interactive prototype for a focused, scene-based AI storytelling workspace."
};

export default function StoryStudioPage() { return <StoryStudioCaseStudy />; }
