import { writeFile } from "node:fs/promises";

const apiKey = process.env.GOOGLE_TTS_API_KEY;
if (!apiKey) throw new Error("Missing GOOGLE_TTS_API_KEY environment variable.");

const text = "December mein nayi ride ka plan hai? Sri Ram eScooters laaya hai dhamakedaar offer! Electric scooter par paaiye sixty percent OFF. Apni daily ride ko banaiye electric, aur savings ka mazaa lijiye. Yeh special offer sirf December month ke liye hai. Toh der kis baat ki? Aaj hi Sri Ram eScooters visit karein. Ride electric, save big!";

const response = await fetch(`https://texttospeech.googleapis.com/v1/text:synthesize?key=${encodeURIComponent(apiKey)}`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    input: { text },
    voice: { languageCode: "hi-IN", name: "hi-IN-Neural2-A" },
    audioConfig: { audioEncoding: "MP3", speakingRate: 1.04, pitch: 0, volumeGainDb: 0 }
  })
});
if (!response.ok) {
  const detail = await response.text();
  throw new Error(`Google Cloud Text-to-Speech failed (${response.status}): ${detail}`);
}
const data = await response.json();
if (!data.audioContent) throw new Error("Google TTS response did not include audioContent.");
await writeFile(new URL("./voice.mp3", import.meta.url), Buffer.from(data.audioContent, "base64"));
console.log("Generated voice.mp3 with Google hi-IN Neural2-A.");
