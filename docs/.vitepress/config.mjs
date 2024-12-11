import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Lzzs Notebook",
  description: "A VitePress Site ,for Lzzs CS000 Notebook",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    nav: [
      { text: 'Home', link: 'https://lzzs.fun' },
      { text: 'Blog', link: 'https://lzzs.fun/blog' },
      {
        text: 'Dropdown Menu',
        items: [
          {
            text: 'Item A1', items: [
              { text: 'Section A Item A', link: '/item-3' }]
          },
          { text: 'Item B', link: '/item-3' },
          { text: 'Item C', link: '/item-3' }
        ]
      },
    ],

    logo: '/favicon.svg',
    // siteTitle: '----',

    footer: {
      // message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Lzz'
    },
    sidebar: [
      {
        text: 'CS 000',

        items: [
          { text: '首页', link: '/' },
          { text: 'Markdown Examples1', link: '/markdown/markdown-examples' },
          { text: 'Markdown Examples2', link: '/markdown/md' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ]
      },
      {
        text: 'Examples1',
        items: [
          { text: 'Markdown Examples1', link: '/md1' },
          { text: 'Markdown Examples2', link: '/markdown-examples3' },
          { text: 'Runtime API Examples', link: '/api-examples3' },
        ]
      },
      {
        text: 'Examples2',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples2' },
          {
            text: 'Runtime API Examples', items: [
              {
                text: 'Markdown Examples', items: [
                  { text: 'Markdown Examples1', link: '/markdown-examples' },
                  { text: 'Runtime API Examples', link: '/api-examples' }
                ]
              },
              { text: 'Runtime API Examples', link: '/api-examples1' }
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lzzsG' }
    ]

  },
  rewrites: {
    'md': '1/md',
    '': ''
  },
  cleanUrls: true,
  markdown: {
    // math: true

  }
})
