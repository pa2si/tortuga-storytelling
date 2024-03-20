export const getFetchData = async (lang) => {
  try {
    const version = process.env.SB_DATA_VERSION;
    const token = process.env.SB_TOKEN;
    const url = `https://api.storyblok.com/v2/cdn/stories/landing-page?version=${version}&token=${token}&language=${lang}`;

    const response = await fetch(url, { next: { revalidate: 10 } });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const storyData = await response.json();

    // Extract the various sections from the storyData
    const {
      landing_page_meta_data,
      nav_section,
      hero_section,
      about_section,
      events_section,
      programs_section,
      contacts_section,
      contact_component,
      all_events_section,
      single_event_section,
      imprint_section,
      privacy_section,
    } = storyData.story.content;

    return {
      landing_page_meta_data: landing_page_meta_data[0],
      nav_section: nav_section[0],
      hero_section: hero_section[0],
      about_section: about_section[0],
      events_section: events_section[0],
      programs_section: programs_section[0],
      contacts_section: contacts_section[0],
      contact_component: contact_component[0],
      all_events_section: all_events_section[0],
      single_event_section: single_event_section[0],
      imprint_section: imprint_section[0],
      privacy_section: privacy_section[0],
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    // Handle the error as needed, such as returning null or default data
    return null; // or any fallback data
  }
};
