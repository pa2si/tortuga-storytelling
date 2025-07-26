v 1.0.36

- added canonical to / route and /all-events
- corrected the canonnical tipo of /all-avents${id} to " `/all-events${id}`,"
- changed in layout.js : process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000' (now to localohost instead of vercel app)

v 1.0.35

- removed FAX dummy number and UmSt dummy ID in Imprint

v 1.0.34

What's new:

- justify-center for date and time row in evnent modal

Done:

- Major content coming from Storyblok CMS including all images
- internationalization implementent and working testwise with the "about" menu button
- middleware checking the prefered locale
- Custom Google Fonts
- generate Static Params is active

- Header with Navbar
  - Language Buttons in Menu (wo function so far)
  - InView for Sections: Colored Menubuttons regarding the section that is in View
  - Titles directly in Section Components
    - Underline included
- Hero image
  - Blur and Opacity Effect for Hero when scrolling in Desktop version
- About Section
- Event Carousel with modal button for more info
- skeleton appears when loading image for singe event site

  - Motion Effect in View for Events and Programs
  - Icons view button in Events Section
    - --> leads to all-events route.
    - nested dynamic route for single Events
      - in Single Event modal for image on click

- Programs section with carousel
  - media queries for the arrows
- contact section with buttons for privacy and imprint

- SEO
  - robots js
  - static and dynamic sitemap
  - static and dynamic title
  - static and dynamic opengraph
  - static OpenGraph and twitter image in root and all events route.
  - dynamic OpenGraph for event slug
