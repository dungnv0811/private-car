import type { Struct, Schema } from '@strapi/strapi';

export interface LayoutTopNav extends Struct.ComponentSchema {
  collectionName: 'components_layout_top_navs';
  info: {
    displayName: 'Top Nav';
    description: '';
  };
  attributes: {
    logoText: Schema.Attribute.String;
    navItems: Schema.Attribute.Component<'elements.link', true>;
    cta: Schema.Attribute.Component<'elements.link', false>;
    logo: Schema.Attribute.String;
  };
}

export interface LayoutSectionHeading extends Struct.ComponentSchema {
  collectionName: 'components_layout_section_headings';
  info: {
    displayName: 'Section Heading';
    description: '';
  };
  attributes: {
    subHeading: Schema.Attribute.String;
    heading: Schema.Attribute.Text;
    text: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface LayoutPriceGrid extends Struct.ComponentSchema {
  collectionName: 'components_layout_price_grids';
  info: {
    displayName: 'Price Grid';
  };
  attributes: {
    priceCard: Schema.Attribute.Component<'elements.price-card', true>;
  };
}

export interface LayoutHero extends Struct.ComponentSchema {
  collectionName: 'components_layout_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    heading: Schema.Attribute.String;
    text: Schema.Attribute.Text;
    topLink: Schema.Attribute.Component<'elements.link', false>;
    buttonLink: Schema.Attribute.Component<'elements.link', true>;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
    description: '';
  };
  attributes: {
    text: Schema.Attribute.Text;
    socialLinks: Schema.Attribute.Component<'elements.link', true>;
    contactLinks: Schema.Attribute.Component<'elements.link', true>;
  };
}

export interface LayoutContentWithImage extends Struct.ComponentSchema {
  collectionName: 'components_layout_content_with_images';
  info: {
    displayName: 'Content With Image';
  };
  attributes: {
    heading: Schema.Attribute.String;
    subHeading: Schema.Attribute.String;
    text: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    reverse: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface LayoutCardGrid extends Struct.ComponentSchema {
  collectionName: 'components_layout_card_grids';
  info: {
    displayName: 'Card Grid';
    description: '';
  };
  attributes: {
    cardItems: Schema.Attribute.Component<'elements.card', true>;
  };
}

export interface ElementsPriceCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_price_cards';
  info: {
    displayName: 'Price Card';
    description: '';
  };
  attributes: {
    selected: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    heading: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    price: Schema.Attribute.String;
    feature: Schema.Attribute.Component<'elements.feature', true>;
    link: Schema.Attribute.Component<'elements.link', false>;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
    description: '';
  };
  attributes: {
    href: Schema.Attribute.String;
    text: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isPrimary: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    iconLink: Schema.Attribute.String;
  };
}

export interface ElementsFeature extends Struct.ComponentSchema {
  collectionName: 'components_elements_features';
  info: {
    displayName: 'Feature';
    description: '';
  };
  attributes: {
    description: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ElementsFeatureWithImage extends Struct.ComponentSchema {
  collectionName: 'components_elements_feature_with_images';
  info: {
    displayName: 'FeatureWithImage';
  };
  attributes: {
    FeatureWithImage: Schema.Attribute.Component<'elements.feature', false>;
  };
}

export interface ElementsCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'Card';
    description: '';
  };
  attributes: {
    icon: Schema.Attribute.Enumeration<
      [
        'Frame',
        'Download',
        'Globe',
        'Sparkles',
        'LayoutPanelLeft',
        'Palette',
        'Phone',
        'Mail',
        'WhatsApp',
        'Kakaotalk',
      ]
    >;
    heading: Schema.Attribute.String;
    text: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    test: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'layout.top-nav': LayoutTopNav;
      'layout.section-heading': LayoutSectionHeading;
      'layout.price-grid': LayoutPriceGrid;
      'layout.hero': LayoutHero;
      'layout.footer': LayoutFooter;
      'layout.content-with-image': LayoutContentWithImage;
      'layout.card-grid': LayoutCardGrid;
      'elements.price-card': ElementsPriceCard;
      'elements.link': ElementsLink;
      'elements.feature': ElementsFeature;
      'elements.feature-with-image': ElementsFeatureWithImage;
      'elements.card': ElementsCard;
    }
  }
}
