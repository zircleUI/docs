module.exports = {
  base: '/docs/',
  lang: 'en-US',
  title: 'Zircle UI',
  description: 'A lightweight front-end library for developing zoomable user interfaces',
  head: [
    ['meta', { name: 'google-site-verification', content: 'lqlMbv1DObhjKSaf9r5ZaJpaj7FVtJ-mxNYH5NmCcwg' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: `/icons/apple-touch-icon.png` }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: `/icons/favicon-32x32.png` }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: `/icons/favicon-16x16.png` }],
    ['link', { rel: 'manifest', href: `/site.webmanifest` }],
    ['link', { rel: 'mask-icon', href: `/icons/safari-pinned-tab.svg`, color: '#5bbad5' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'Zircle UI Docs' }],
    ['meta', { name: 'application-name', content: 'Zircle UI Docs' }],
    ['meta', { name: 'msapplication-TileColor', content: '#2d89ef' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['script', { src: 'https://use.fontawesome.com/releases/v5.0.10/js/all.js', crossorigin: 'anonymous' }]
  ],
  ga: 'UA-108782619-1',
  serviceWorker: true,
  theme: 'zircle',
  themeConfig: {
    logo: '/icons/android-chrome-256x256.png',
    repo: 'zircleUI/zircleUI',
    docsRepo: 'zircleUI/docs',
    docsDir: 'docs',
    editLinks: true,
    algolia: {
      apiKey: '29089c5b9bf92344538cb47b2c1dcaba',
      indexName: 'zircle'
    },
    nav: [
      {
        text: 'Guide',
        link: '/guide/introduction',
      },
      {
        text: 'API Reference',
        link: '/api/api'
      },
      {
        text: 'Examples',
        link: '/examples/examples'
      },
      {
        text: 'Contribute',
        link: '/contribute/'
      }
    ],
    sidebar: {
      '/guide/': [
        'introduction',
        'guide'
      ],
      '/api/': [
        'api',
        'z-canvas',
        'z-view-manager',
        'z-panel',
        'z-scale',
        'z-button',
        'z-list',
        'z-alert'
      ],
      '/examples/': [
        'examples',
        'vuejs-ecosystem',
        'counter',
        'zooming-slider',
        'cuba-libre-recipe',
        'fruit-basquet',
        'themes-and-colors-selector',
        'zircle-with-vue-router',
        'zircle-without-router'
      ],
      '/contribute/': genSidebarConfig('Contribute')
    }
  }
}

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        ''
      ]
    }
  ]
}
