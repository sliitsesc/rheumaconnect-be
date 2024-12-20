import type { Schema, Struct } from '@strapi/strapi';

export interface CommonLink extends Struct.ComponentSchema {
  collectionName: 'components_common_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    linkText: Schema.Attribute.String;
    linkUrl: Schema.Attribute.String;
  };
}

export interface LandingPageHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    mainTitle: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'common.link': CommonLink;
      'landing-page.hero-section': LandingPageHeroSection;
    }
  }
}
