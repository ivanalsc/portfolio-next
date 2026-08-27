import type { Metadata } from "next";
import { StoryStudioDemo } from "@/components/StoryStudioDemo";

export const metadata: Metadata = {
  title: "Story Studio — Interactive Prototype",
  description: "Explore the scene editor in the Story Studio interactive product prototype."
};

export default function StoryStudioDemoPage() { return <StoryStudioDemo />; }
