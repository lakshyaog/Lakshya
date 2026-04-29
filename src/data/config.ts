const config = {
  title: "Lakshya Solanki | Full Stack Developer & Cross Platform App Developer",
  description: {
    long: "Explore the portfolio of Lakshya Solanki, a full-stack developer and cross-platform application developer specializing in innovative web and mobile experiences. Discover my latest work and let's build something amazing together!",
    short:
      "Discover the portfolio of Lakshya Solanki, a full-stack and cross-platform application developer creating interactive and innovative projects.",
  },
  keywords: [
    "Lakshya Solanki",
    "portfolio",
    "full-stack developer",
    "cross-platform application developer",
    "web development",
    "app development",
    "React",
    "Next.js",
  ],
  author: "Lakshya Solanki",
  email: "contact@example.com",
  site: "https://yoursite.com",

  // for github stars button
  githubUsername: "",
  githubRepo: "",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/lakshyaogg",
    linkedin: "https://www.linkedin.com/in/lakshya-solanki-4a94b7317",
    instagram: "https://www.instagram.com/lakshya_630p",
    facebook: "",
    github: "https://github.com/lakshyaog",
  },
};
export { config };
