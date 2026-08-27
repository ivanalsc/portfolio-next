export type Project = {
  id: string;
  slug: string;
  title: string;
  year: string;
  question: string;
  description: string;
  tags: string[];
  size: "wide" | "medium" | "small";
  visual: "story" | "rndm" | "songod";
  featured?: boolean;
  role: string;
  tools: string;
  sections: { title: string; text: string }[];
};

export const projects: Project[] = [
  {
    id: "01", slug: "random", title: "Random", year: "2026",
    question: "A personal log for what you read, watch and listen to.",
    description: "A personal media log for books, films, series and albums.",
    tags: ["Product", "Design engineering", "Code"], size: "medium", visual: "rndm",
    role: "Product Design · Design Engineering · Frontend Development", tools: "Next.js · TypeScript · Supabase",
    sections: [
      { title: "The idea", text: "RNDM is a quiet personal archive: less about ratings, more about remembering what shaped a week, month or year." },
      { title: "Exploration", text: "The interface tests mixed media, lightweight logging and connections between things that do not share the same metadata." }
    ]
  },
  {
    id: "02", slug: "story-studio", title: "Story Studio", year: "2026",
    question: "A focused workspace for creating stories with AI.",
    description: "An interactive product prototype organized around stories, scenes and iteration.",
    tags: ["Product", "AI", "Design engineering"], size: "wide", visual: "story", featured: true,
    role: "Design Engineering · Product Design · Frontend", tools: "Next.js · React · TypeScript · Local simulation",
    sections: [
      { title: "Context", text: "Story-making tools often split writing, illustration and narration into separate workflows. This experiment asks how those pieces might feel like one coherent process." },
      { title: "The idea", text: "A focused studio where a creator can shape a story, preserve its voice and move between text, image and sound without losing context." },
      { title: "What I learned", text: "AI is most useful here as an editable collaborator. Clear checkpoints and visible control matter more than automating every step." }
    ]
  },
  /* TODO: Re-enable Carpicuentos when it is ready to be shown.
  {
    id: "03", slug: "carpicuentos", title: "Carpicuentos", year: "2026",
    question: "Can AI help one person create an illustrated storytelling pipeline?",
    description: "A children’s storytelling experiment spanning characters, illustration, narration and publishing workflows.",
    tags: ["AI", "Storytelling", "Visual"], size: "small", visual: "carpi",
    role: "Creative direction · Workflow design · Development", tools: "Generative AI · Audio · Web",
    sections: [
      { title: "Context", text: "Keeping a character recognizable across scenes is a small production challenge with a surprisingly large technical surface." },
      { title: "What I built", text: "A repeatable pipeline for story beats, visual references, illustration prompts, narration and final assembly." }
    ]
  },
  */
  {
    id: "03", slug: "songod", title: "Songod", year: "2025",
    question: "An artist portfolio designed as a living digital archive.",
    description: "A portfolio for artist Sergio Páez, balancing a distinct visual identity with an artwork archive that stays easy to maintain.",
    tags: ["Visual", "Code"], size: "medium", visual: "songod",
    role: "Web Design · Creative Development", tools: "Next.js · TypeScript · Tailwind CSS · Framer Motion · Notion",
    sections: [
      { title: "The idea", text: "Treat the portfolio less like a catalog and more like an album: paced, atmospheric and anchored by a strong visual voice." },
      { title: "What I learned", text: "Small transitions and typographic timing can establish identity without competing with the work itself." }
    ]
  }
];

export const filters = ["All", "Product", "Code", "AI", "Visual", "Play"] as const;
