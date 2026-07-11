export const LINKS = {
  repo: "https://github.com/pavlenchichikov/G-Trade",
  github: "https://github.com/pavlenchichikov",
  email: "p.galashin@proton.me",
};

// Public assets are referenced through BASE_URL so the relative-base build works
// on GitHub Pages project pages and plain file servers alike.
export const asset = (name: string): string => `${import.meta.env.BASE_URL}${name}`;
