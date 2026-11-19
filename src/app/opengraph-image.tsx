import { ImageResponse } from "next/og";

export const alt = "Abhishek Yadav — Frontend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "#08090c", color: "#eceef5", fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", fontSize: 28, color: "#d4ff3f", letterSpacing: 6, textTransform: "uppercase" }}>Portfolio</div>
        <div style={{ display: "flex", fontSize: 128, fontWeight: 700, marginTop: 24, letterSpacing: -4 }}>Abhishek Yadav</div>
        <div style={{ display: "flex", fontSize: 44, color: "#8f95a8", marginTop: 16 }}>Frontend Developer · React · TypeScript</div>
        <div style={{ display: "flex", width: 220, height: 8, borderRadius: 4, marginTop: 48, background: "linear-gradient(90deg,#d4ff3f,#8b7bff)" }} />
      </div>
    ),
    size,
  );
}
