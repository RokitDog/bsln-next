export default {
  name: 'HomePage',
  title: 'HomePage',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'bannerHeading',
      title: 'Banner Heading',
      type: 'string',
    },
    {
      name: 'bannerSubHeading',
      title: 'Banner Sub Heading',
      type: 'string',
    },
    {
      name: 'cardsSlug',
      title: 'Cards Slug',
      type: 'string',
    },
    {
      name: 'cardsHeading',
      title: 'Cards Heading',
      type: 'string',
    },
    {
      name: 'cardsSubHeading',
      title: 'Cards Sub Heading',
      type: 'string',
    },
    {
      name: 'cardsUnderlinedHeadingWord',
      title: 'Cards Underlined Heading Word',
      type: 'string',
    },
    {
      name: 'cards',
      title: 'Cards',
      type: 'document',
      fields: [
        {
          name: 'cardImage1',
          title: 'Card Image',
          type: 'image',
        },
        {
          name: 'cardTitle1',
          title: 'Card Title',
          type: 'string',
        },
        {
          name: 'cardDescription1',
          title: 'Card Description',
          type: 'string',
        },
        {
          name: 'cardImage2',
          title: 'Card Image',
          type: 'image',
        },
        {
          name: 'cardTitle2',
          title: 'Card Title',
          type: 'string',
        },
        {
          name: 'cardDescription2',
          title: 'Card Description',
          type: 'string',
        },
        {
          name: 'cardImage3',
          title: 'Card Image',
          type: 'image',
        },
        {
          name: 'cardTitle3',
          title: 'Card Title',
          type: 'string',
        },
        {
          name: 'cardDescription3',
          title: 'Card Description',
          type: 'string',
        },
        {
          name: 'cardImage4',
          title: 'Card Image',
          type: 'image',
        },
        {
          name: 'cardTitle4',
          title: 'Card Title',
          type: 'string',
        },
        {
          name: 'cardDescription4',
          title: 'Card Description',
          type: 'string',
        },
      ],
    },
    {
      name: 'cardsCtaContent',
      title: 'Cards Cta Content',
      type: 'string',
    },
    {
      name: 'cardsCtaButton',
      title: 'Cards Cta Button',
      type: 'string',
    },
    {
      name: 'testimonials',
      title: 'Testimonials',
      type: 'document',
      fields: [
        {
          name: 'testimonialImage',
          title: 'Testimonial Image',
          type: 'image',
        },
        {
          name: 'testimonialName',
          title: 'Testimonial Name',
          type: 'string',
        },
        {
          name: 'testimonialFirm',
          title: 'Testimonial Firm',
          type: 'string',
        },
        {
          name: 'testimonialContent',
          title: 'Testimonial Content',
          type: 'blockContent',
        },
      ],
    },
    {
      name: 'brandsHeading',
      title: 'Brands Heading',
      type: 'string',
    },
    {
      name: 'brandsScrollText1',
      title: 'Brands Scroll Text 1',
      type: 'string',
    },
    {
      name: 'brandsScrollText2',
      title: 'Brands Scroll Text 2',
      type: 'string',
    },
    {
      name: 'brandsScrollText3',
      title: 'Brands Scroll Text 3',
      type: 'string',
    },
    {
      name: 'delayedText',
      title: 'Delayed Text',
      type: 'string',
    },
    {
      name: 'b2bText',
      title: 'B2B Text',
      type: 'document',
      fields: [
        {
          name: 'b2bText',
          title: 'B2B Text',
          type: 'string',
        },
        {
          name: 'b2bLinkText',
          title: 'B2B Link Text',
          type: 'string',
        },
      ],
    },
    {
      name: 'b2cText',
      title: 'B2C Text',
      type: 'document',
      fields: [
        {
          name: 'b2cText',
          title: 'B2c Text',
          type: 'string',
        },
        {
          name: 'b2cLinkText',
          title: 'B2C Link Text',
          type: 'string',
        },
      ],
    },
    {
      name: 'processText1',
      title: 'Process Text 1',
      type: 'string',
    },
    {
      name: 'processText2',
      title: 'Process Text 2',
      type: 'string',
    },
    {
      name: 'processText3',
      title: 'Process Text 3',
      type: 'string',
    },
    {
      name: 'processText4',
      title: 'Process Text 4',
      type: 'string',
    },
    {
      name: 'footerHeading',
      title: 'Footer Heading',
      type: 'string',
    },
    {
      name: 'footerSubHeading',
      title: 'Footer Sub Heading',
      type: 'string',
    },
    {
      name: 'footerButton',
      title: 'Footer Button',
      type: 'string',
    },
  ],
};
