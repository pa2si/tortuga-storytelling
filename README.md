v 1.0.10

What's new:

- after deleting the node-module and package-lock.json file and believing it can just be recreated as it was with npm install i couldn't redeploy it anymore to verccel. so i used the last working version and created a new repository just in case. i deployed it, and now its working (the deployment). i will here recreate everything that i commited after version 1.0.8.

- robots are set to false
- at font.js adjustFontFallback: false, at Playpen Sans added
- at Event.js events-card got added a time paragraph and
- at Events.js a bottom- adjustment due to the new paragraph in event-cards
- some conditional margin to paragraphs of event-cards

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
