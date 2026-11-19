// Public, build-time configuration. Set the values in .env.local or in Vercel's environment settings.
const clean = (v?: string) => (v && v.trim() ? v.trim() : "");

export const siteUrl = clean(process.env.NEXT_PUBLIC_SITE_URL) || "http://localhost:3000";

export const socials = {
  github: clean(process.env.NEXT_PUBLIC_GITHUB_URL),
  linkedin: clean(process.env.NEXT_PUBLIC_LINKEDIN_URL),
};

export const resumePdf = "/Abhishek_Yadav_Resume.pdf";
