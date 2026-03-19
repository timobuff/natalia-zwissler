import { config, fields, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: 'timobuff/natalia-zwissler',
  },
  singletons: {
    hero: singleton({
      label: 'Hero Bereich',
      path: 'src/content/einstellungen/hero',
      schema: {
        titel: fields.text({ label: 'Titel' }),
        untertitel: fields.text({ label: 'Untertitel' }),
        ctaText: fields.text({ label: 'Button Text' }),
      },
    }),
    intro: singleton({
      label: 'Intro Text',
      path: 'src/content/einstellungen/intro',
      schema: {
        titel: fields.text({ label: 'Überschrift' }),
        text: fields.text({ label: 'Text', multiline: true }),
      },
    }),
  },
});
