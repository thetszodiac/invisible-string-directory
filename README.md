# The Invisible String Directory

A romantic, editorial-style worldwide directory concept for Swiftie-owned businesses and Taylor-inspired independent businesses.

**Tagline:** A little thread connecting a whole community.

## Files
- `index.html` — website structure and content
- `styles.css` — brand styling and responsive layouts
- `businesses.js` — directory data
- `script.js` — search, filters and category shortcuts

## Preview locally
Open `index.html` in a browser. No build tools or package installation are required.

## Update the directory
Edit `businesses.js`. Each entry follows this structure:

```js
{
  name: "Business name",
  category: "Art & Prints",
  country: "United Kingdom",
  type: "Swiftie-owned", // or "Taylor-inspired" or "Both"
  description: "A short description.",
  url: "https://your-shop.example",
  symbol: "B"
}
```

The included listings are fictional demo examples using `example.com`. Replace or remove them before launch.

## Update the existing GitHub Pages site
1. Open your existing GitHub repository.
2. Choose **Add file → Upload files**.
3. Upload these four files, replacing the existing versions when prompted.
4. Commit the changes to the `main` branch.
5. GitHub Pages will redeploy automatically.

Keep the files at the repository root so the existing Pages configuration (`main` / root) continues to work.

## Before public launch
- Confirm final brand name, domain and social handle availability.
- Replace demo listings with real businesses that have agreed to be listed.
- Add a proper submission and moderation workflow.
- Publish clear inclusion criteria, privacy information and contact details.

## Independence
This is an independent fan-created directory and is not affiliated with, endorsed by, or sponsored by Taylor Swift or her representatives. Avoid official logos, copyrighted artwork and unlicensed lyrics in branding or promotional copy.
