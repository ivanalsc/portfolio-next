export type StudioScene = {
  id: number;
  title: string;
  duration: string;
  status: "ready" | "draft";
  narration: string;
  prompt: string;
};

export const studioStory = {
  title: "The Last Broadcast",
  premise: "During her final late-night radio show, a host receives an unexpected call that changes the ending she had planned."
};

export const studioScenes: StudioScene[] = [
  { id: 1, title: "Last Show", duration: "0:32", status: "ready", narration: "At midnight, Elena turned on the red studio light for the final time. She had already written every word she wanted to say.", prompt: "Late-night radio host alone in a small studio, red on-air light, quiet cinematic mood, restrained editorial image." },
  { id: 2, title: "An Unexpected Call", duration: "0:41", status: "ready", narration: "The phone rang before the first song ended. Elena almost ignored it, but something made her open the line.", prompt: "Telephone lighting up inside a dark radio studio, host watching from behind a microphone, warm red and black palette." },
  { id: 3, title: "A Familiar Voice", duration: "0:38", status: "ready", narration: "The caller remembered Elena’s first broadcast fifteen years earlier. He repeated a sentence she had forgotten saying, but had never forgotten hearing.", prompt: "Radio host listening closely through headphones during a late-night call, analog equipment, intimate cinematic framing." },
  { id: 4, title: "Dead Air", duration: "0:46", status: "draft", narration: "For six seconds, Elena said nothing. The silence felt longer than any story she had prepared for the night.", prompt: "Empty radio studio suspended in a moment of silence, microphone and waveform display, minimal dark composition." },
  { id: 5, title: "One More Song", duration: "0:35", status: "draft", narration: "Elena folded her closing script and chose one final song. This time, she let the ending arrive without explaining it.", prompt: "Radio host choosing one final record before sunrise, studio window turning blue, understated hopeful ending." }
];

export const studioVoices = [
  { id: "warm", name: "Warm Storyteller", detail: "Calm · grounded" },
  { id: "playful", name: "Playful Narrator", detail: "Bright · animated" },
  { id: "soft", name: "Soft Documentary", detail: "Measured · intimate" }
];
