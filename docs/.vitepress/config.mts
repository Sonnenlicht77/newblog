import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "个人博客搭建",
  description: "基于UniCloud搭建的前后端分离的个人博客系统",
  base: '/newblog/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '前置知识', link: '/pre_need' },
      { text: '文档', link: '/blog_docs' },
      { text: '错误处理', link: '/errs' }
    ],

    sidebar: {
      '/pre_need': [
        { text: '前置知识', link: '/pre_need' }
      ],
      '/blog_docs': [
        { text: '博客搭建文档', link: '/blog_docs' }
      ],
      '/errs': [
        { text: '遇到的问题', link: '/errs' }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://sonnenlicht77.github.io/' }
    ]
  }
})
