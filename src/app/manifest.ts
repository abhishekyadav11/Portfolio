import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Abhishek Yadav — Frontend Developer",
    short_name: "Abhishek Yadav",
    description: "Portfolio of Abhishek Yadav, Frontend Developer.",
    start_url: "/",
    display: "standalone",
    background_color: "#08090c",
    theme_color: "#08090c",
    icons: [{ src: "/icon", sizes: "64x64", type: "image/png" }],
  };
}
