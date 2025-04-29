import type { Schema, Struct } from '@strapi/strapi';

export interface CategoriesSubcategories extends Struct.ComponentSchema {
  collectionName: 'components_categories_subcategories';
  info: {
    displayName: 'subcategories';
  };
  attributes: {
    name: Schema.Attribute.String;
    slug: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
  };
}

export interface CommonButton extends Struct.ComponentSchema {
  collectionName: 'components_common_buttons';
  info: {
    description: '';
    displayName: 'Button';
  };
  attributes: {
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CommonImage extends Struct.ComponentSchema {
  collectionName: 'components_common_images';
  info: {
    displayName: 'Image';
    icon: 'picture';
  };
  attributes: {
    imageAlt: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
  };
}

export interface CommonLink extends Struct.ComponentSchema {
  collectionName: 'components_common_links';
  info: {
    description: '';
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    linkText: Schema.Attribute.String;
    linkUrl: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'categories.subcategories': CategoriesSubcategories;
      'common.button': CommonButton;
      'common.image': CommonImage;
      'common.link': CommonLink;
    }
  }
}
