export const LINKS = {
  repo: "https://github.com/pavlenchichikov/Atratus",
  github: "https://github.com/pavlenchichikov",
  email: "sammolet@yahoo.com",
};

// Public assets are referenced through BASE_URL so the relative-base build works
// on GitHub Pages project pages and plain file servers alike.
export const asset = (name: string): string => `${import.meta.env.BASE_URL}${name}`;
