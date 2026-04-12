# LuxEstate Project Guide

## Overview

LuxEstate is a multi-page static real estate frontend. The project is organized around reusable shared assets and page-specific content. Most interactive behavior is handled from a single shared JavaScript file.

This guide documents the actual structure currently present in the project.

## Technology stack

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts
- Remix Icon CDN

## Entry flow

- [index.html](C:/Users/venka/Desktop/Real%20Estate/index.html) redirects to [pages/index.html](C:/Users/venka/Desktop/Real%20Estate/pages/index.html)
- Public pages live inside [pages/](C:/Users/venka/Desktop/Real%20Estate/pages)
- Shared assets live inside [assets/](C:/Users/venka/Desktop/Real%20Estate/assets)

## Project directories

### Pages

- [pages/index.html](C:/Users/venka/Desktop/Real%20Estate/pages/index.html): primary homepage
- [pages/home-2.html](C:/Users/venka/Desktop/Real%20Estate/pages/home-2.html): alternate homepage variant
- [pages/about.html](C:/Users/venka/Desktop/Real%20Estate/pages/about.html): brand story, stats, and supporting information
- [pages/properties.html](C:/Users/venka/Desktop/Real%20Estate/pages/properties.html): property catalog with progressive reveal behavior
- [pages/property-overview.html](C:/Users/venka/Desktop/Real%20Estate/pages/property-overview.html): detail page hydrated by script data and query parameters
- [pages/agents.html](C:/Users/venka/Desktop/Real%20Estate/pages/agents.html): agent listing page
- [pages/agent-details.html](C:/Users/venka/Desktop/Real%20Estate/pages/agent-details.html): agent detail page rendered from shared profile data
- [pages/blog.html](C:/Users/venka/Desktop/Real%20Estate/pages/blog.html): article listing page
- [pages/blog-details.html](C:/Users/venka/Desktop/Real%20Estate/pages/blog-details.html): article detail page populated dynamically
- [pages/contact.html](C:/Users/venka/Desktop/Real%20Estate/pages/contact.html): contact UI and FAQ accordion behavior
- [pages/account.html](C:/Users/venka/Desktop/Real%20Estate/pages/account.html): login and signup interface
- [pages/admin-dashboard.html](C:/Users/venka/Desktop/Real%20Estate/pages/admin-dashboard.html): admin operations dashboard
- [pages/user-dashboard.html](C:/Users/venka/Desktop/Real%20Estate/pages/user-dashboard.html): customer dashboard
- [pages/pricing.html](C:/Users/venka/Desktop/Real%20Estate/pages/pricing.html): pricing section
- [pages/sell-with-us.html](C:/Users/venka/Desktop/Real%20Estate/pages/sell-with-us.html): lead capture page for sellers
- [pages/404.html](C:/Users/venka/Desktop/Real%20Estate/pages/404.html): not found page

### Styles

- [assets/css/style.css](C:/Users/venka/Desktop/Real%20Estate/assets/css/style.css): base layout, components, utilities, dashboard styling, sections, and responsive rules
- [assets/css/dark-mode.css](C:/Users/venka/Desktop/Real%20Estate/assets/css/dark-mode.css): overrides applied when `data-theme="dark"` is active
- [assets/css/rtl.css](C:/Users/venka/Desktop/Real%20Estate/assets/css/rtl.css): directional adjustments when `dir="rtl"` is active

### Scripts

- [assets/js/main.js](C:/Users/venka/Desktop/Real%20Estate/assets/js/main.js): central behavior controller for the site
- [assets/js/dashboard.js](C:/Users/venka/Desktop/Real%20Estate/assets/js/dashboard.js): small helper for dashboard bar widths

### Other files

- [README.md](C:/Users/venka/Desktop/Real%20Estate/README.md): quick start and summary documentation
- [robots.txt](C:/Users/venka/Desktop/Real%20Estate/robots.txt): crawler directives
- [sitemap.xml](C:/Users/venka/Desktop/Real%20Estate/sitemap.xml): sitemap entries for deployment
- [TODO.md](C:/Users/venka/Desktop/Real%20Estate/TODO.md): internal task note from earlier formatting work

## Shared JavaScript behavior

The main script in [assets/js/main.js](C:/Users/venka/Desktop/Real%20Estate/assets/js/main.js) handles most of the site logic.

### Core UI features

- Theme initialization from localStorage and system preference
- RTL direction initialization from localStorage
- Mobile navigation toggle
- Submenu behavior
- Dashboard sidebar toggle
- Footer year auto-fill

### Content and interaction features

- Client-side form validation for forms marked with `data-validate`
- Scroll reveal animation for elements marked with `data-reveal`
- Count-up animation for elements marked with `data-count-up`
- Testimonial slider controls
- Accordion behavior for about and contact sections
- Property grid "Read more" expansion
- Generic load-more sections using `data-load-more-grid`

### Dynamic page rendering

- Agent detail rendering from shared profile presets
- Agent card hydration
- Property overview page rendering from selected property context
- Blog detail page rendering from query-string data
- Blog card link preparation for detail-page navigation
- Media diversification for cards across listing pages

## Shared HTML conventions

The project relies on consistent data attributes and class names instead of a component framework.

Common patterns include:

- `data-prefix` for relative asset path handling
- `data-theme-toggle` for theme switching buttons
- `data-dir-toggle` for RTL toggle buttons
- `data-menu-toggle` for mobile menu controls
- `data-reveal` for on-scroll animations
- `data-validate` for forms with built-in validation
- `data-testimonial-slider` for testimonial carousel sections

## Dashboards

### Admin dashboard

[pages/admin-dashboard.html](C:/Users/venka/Desktop/Real%20Estate/pages/admin-dashboard.html) contains:

- Sidebar navigation
- KPI cards
- Chart-style visual sections
- Property management table
- Agent and user metrics
- Theme and RTL controls

### User dashboard

[pages/user-dashboard.html](C:/Users/venka/Desktop/Real%20Estate/pages/user-dashboard.html) is the customer-facing dashboard and shares the global styling and interaction system.

## Assets

### Images and video

[assets/images/](C:/Users/venka/Desktop/Real%20Estate/assets/images) contains:

- Property photography
- Team and agent imagery
- Marketing backgrounds
- Blog visuals
- Video assets used for premium hero sections

The project uses mixed asset formats including `jpg`, `jpeg`, `avif`, and `mp4`.

## SEO and deployment notes

- Several pages include titles, descriptions, theme color metadata, and structured data
- [index.html](C:/Users/venka/Desktop/Real%20Estate/index.html) includes a canonical URL and redirect behavior
- [pages/index.html](C:/Users/venka/Desktop/Real%20Estate/pages/index.html) includes JSON-LD structured data for the real estate brand
- If the final hosting URL changes, review:
  - canonical links
  - JSON-LD `url`, `logo`, and `image`
  - [robots.txt](C:/Users/venka/Desktop/Real%20Estate/robots.txt)
  - [sitemap.xml](C:/Users/venka/Desktop/Real%20Estate/sitemap.xml)

## Maintenance guidance

- Keep page-to-page links relative so the site works in static hosting environments
- Keep the `data-*` hooks unchanged when updating markup, because the JavaScript depends on them
- Update image paths carefully because several pages reuse shared media helpers
- When adding new detail pages, follow the existing query-parameter and preset-based rendering approach if you want to stay consistent with the current architecture

## Accuracy note

An older version of the documentation referenced `assets/js/layout.js`. That file is not present in the current repository, so this guide has been updated to reflect the actual codebase.
