module.exports = {
  base: '/docs/',
  lang: 'en-US',
  title: 'zircle-ui',
  description: 'A frontend library to develop zoomable user interfaces',
  head: [
    ['meta', { name: 'google-site-verification', content: 'lqlMbv1DObhjKSaf9r5ZaJpaj7FVtJ-mxNYH5NmCcwg' }],
    ['meta', { name: 'keywords', content: 'javascript, library, vuejs, zui, zoomable, ui, ux, user-interface, user-experience, circle, circular' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: `/icons/apple-touch-icon.png` }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: `/icons/favicon-32x32.png` }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: `/icons/favicon-16x16.png` }],
    ['link', { rel: 'manifest', href: `/site.webmanifest` }],
    ['link', { rel: 'mask-icon', href: `/icons/safari-pinned-tab.svg`, color: '#5bbad5' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'Zircle UI Docs' }],
    ['meta', { name: 'application-name', content: 'Zircle UI Docs' }],
    ['meta', { name: 'msapplication-TileColor', content: '#2d89ef' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }]
  ],
  ga: 'UA-108782619-1',
  serviceWorker: true,
  theme: 'zircle',
  themeConfig: {
    repo: 'zircleUI/zircleUI',
    docsRepo: 'zircleUI/docs',
    docsDir: 'docs',
    editLinks: true,
    sidebarDepth: 2,
    algolia: {
      apiKey: '29089c5b9bf92344538cb47b2c1dcaba',
      indexName: 'zircle'
    },
    /* nav: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/guide/' },
          { text: 'Getting started', link: '/guide/getting-started' },
          { text: 'Tutorial', link: '/guide/tutorial' },
          { text: 'Themes', link: '/guide/themes-styles-and-colors' }
        ]
      }
    ] */
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Tutorial',
        link: '/tutorial/',
      },
      {
        text: 'API Reference',
        link: '/api/'
      },
      {
        text: 'Examples',
        link: '/examples/vuejs-ecosystem'
      },
      {
        text: 'Contribute',
        link: '/contribute/'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'getting-started',
            'design-guide',
            'themes-styles-and-colors',
            'using-vue-router',
            'migration',
            'older-version-docs'
          ]
        }
      ],
      '/tutorial/': [
        {
          title: 'Tutorial',
          collapsable: false
        },
        {
          title: 'First steps',
          collapsable: true,
          children: [
            '',
            'creating',
            'setup-files'
          ]
        },
        {
          title: 'Define views',
          collapsable: true,
          children: [
            'views',
            'home-view',
            'settings-view',
            'scenes-view',
            'family-view',
            'rooms-view',
            'livingroom-view'
          ]
        },
        {
          title: 'Final touches',
          collapsable: true,
          children: [
            'wrapping-views',
            'using-vuerouter',
            'building'
          ]
        },
        {
          title: 'Bonus',
          collapsable: true,
          children: [
            'bonus',
            'tv-view',
            'devices-view',
            'device-view',
            'status-view',
            'logs-view'
          ]
        }
      ],
      '/api/': [
        { title: 'API',
          collapsable: false,
          children: [
            ''
          ]
        },
        {
          title: 'Main components',
          collapsable: false,
          children: [
            'z-canvas',
            'z-view',
            'z-spot',
            'z-list',
            'z-dialog'
          ]
        },
        {
          title: 'Child components',
          collapsable: false,
          children: [
            'z-view-manager',
            'z-knob',
            'z-slider',
            'z-scroll',
            'z-list-pagination'
          ]
        },
        {
          title: 'State management',
          collapsable: false,
          children: [
            'public-api',
            'internal-api'
          ]
        }
      ],
      '/examples/': [
        {
          title: 'Examples',
          collapsable: false
        },
        {
          title: '',
          collapsable: false,
          children: [
            'smart-home',
            'vuejs-ecosystem',
            'counter',
            'zooming-slider',
            'cuba-libre-recipe',
            'fruit-basquet'
          ]
        },
        {
          title: 'CodeSanboxes',
          collapsable: true,
          children: [
            'codepen',
            'jsfiddle',
            'codesandbox'
          ]
        },
       /* {
          title: 'Community',
          collapsable: true,
          children: [
            ''
          ]
        },
        {
          title: '0.3.3',
          collapsable: true,
          children: [
            ''
          ]
        }*/
      ],
      '/contribute/': [
        {
          title: 'Contribute',
          collapsable: false,
          children: [
            ''
          ]
        }
      ]
    }
  }
}
