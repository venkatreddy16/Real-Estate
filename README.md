# LuxEstate Real Estate Website

LuxEstate is a static real estate website built with HTML, CSS, and vanilla JavaScript. It includes public marketing pages, account screens, admin and user dashboards, reusable UI patterns, theme switching, RTL support, and SEO starter files.

## Project type

- Static frontend website
- No build step required
- Ready to open directly in a browser
- Suitable for GitHub Pages or similar static hosting

## How to run

1. Open [index.html](C:/Users/venka/Desktop/Real%20Estate/index.html) in a browser, or
2. Open [pages/index.html](C:/Users/venka/Desktop/Real%20Estate/pages/index.html) directly

The root `index.html` file redirects users to the main homepage in `pages/index.html`.

## Main features

- Two home page variants
- Responsive navigation and mobile menu
- Dark mode toggle with localStorage persistence
- RTL toggle with direction persistence
- Property cards, agent cards, and testimonial slider
- Account page with client-side form validation
- Admin dashboard and user dashboard screens
- Dynamic agent detail content powered by query parameters and shared JavaScript
- Dynamic property overview and blog detail rendering
- Scroll reveal animations and count-up effects
- SEO support through `robots.txt`, `sitemap.xml`, and page metadata

## Folder structure

- [index.html](C:/Users/venka/Desktop/Real%20Estate/index.html): redirect entry page
- [pages/](C:/Users/venka/Desktop/Real%20Estate/pages): all website pages
- [assets/css/](C:/Users/venka/Desktop/Real%20Estate/assets/css): shared stylesheets
- [assets/js/](C:/Users/venka/Desktop/Real%20Estate/assets/js): shared JavaScript files
- [assets/images/](C:/Users/venka/Desktop/Real%20Estate/assets/images): site images and video assets
- [documentation/guide.md](C:/Users/venka/Desktop/Real%20Estate/documentation/guide.md): detailed internal documentation
- [robots.txt](C:/Users/venka/Desktop/Real%20Estate/robots.txt): crawler rules
- [sitemap.xml](C:/Users/venka/Desktop/Real%20Estate/sitemap.xml): sitemap for indexed pages

## Important pages

- [pages/index.html](C:/Users/venka/Desktop/Real%20Estate/pages/index.html): main homepage
- [pages/home-2.html](C:/Users/venka/Desktop/Real%20Estate/pages/home-2.html): alternate homepage
- [pages/about.html](C:/Users/venka/Desktop/Real%20Estate/pages/about.html): company overview
- [pages/properties.html](C:/Users/venka/Desktop/Real%20Estate/pages/properties.html): property listing page
- [pages/property-overview.html](C:/Users/venka/Desktop/Real%20Estate/pages/property-overview.html): single property detail page
- [pages/agents.html](C:/Users/venka/Desktop/Real%20Estate/pages/agents.html): agents listing
- [pages/agent-details.html](C:/Users/venka/Desktop/Real%20Estate/pages/agent-details.html): single agent detail page
- [pages/blog.html](C:/Users/venka/Desktop/Real%20Estate/pages/blog.html): blog listing
- [pages/blog-details.html](C:/Users/venka/Desktop/Real%20Estate/pages/blog-details.html): single blog article page
- [pages/account.html](C:/Users/venka/Desktop/Real%20Estate/pages/account.html): login and signup UI
- [pages/admin-dashboard.html](C:/Users/venka/Desktop/Real%20Estate/pages/admin-dashboard.html): admin control panel
- [pages/user-dashboard.html](C:/Users/venka/Desktop/Real%20Estate/pages/user-dashboard.html): user dashboard
- [pages/contact.html](C:/Users/venka/Desktop/Real%20Estate/pages/contact.html): contact page
- [pages/pricing.html](C:/Users/venka/Desktop/Real%20Estate/pages/pricing.html): pricing page
- [pages/sell-with-us.html](C:/Users/venka/Desktop/Real%20Estate/pages/sell-with-us.html): seller-focused page
- [pages/404.html](C:/Users/venka/Desktop/Real%20Estate/pages/404.html): error page

## Stylesheets

- [assets/css/style.css](C:/Users/venka/Desktop/Real%20Estate/assets/css/style.css): main visual system and component styling
- [assets/css/dark-mode.css](C:/Users/venka/Desktop/Real%20Estate/assets/css/dark-mode.css): dark theme overrides
- [assets/css/rtl.css](C:/Users/venka/Desktop/Real%20Estate/assets/css/rtl.css): right-to-left layout adjustments

## Scripts

- [assets/js/main.js](C:/Users/venka/Desktop/Real%20Estate/assets/js/main.js): primary UI logic for navigation, theme, forms, reveals, dynamic page content, sliders, and interaction helpers
- [assets/js/dashboard.js](C:/Users/venka/Desktop/Real%20Estate/assets/js/dashboard.js): dashboard-specific progress bar initialization

## Notes for developers

- The site is fully static and uses relative links between pages.
- Theme and direction preferences are saved in `localStorage`.
- Several detail pages are hydrated by JavaScript using URL parameters and shared preset data.
- If you change the deployment domain, update canonical URLs, JSON-LD values, `robots.txt`, and `sitemap.xml`.
- The previous documentation referenced `assets/js/layout.js`, but that file is not part of the current project.

## Documentation

For a more complete page map and behavior reference, see [documentation/guide.md](C:/Users/venka/Desktop/Real%20Estate/documentation/guide.md).
