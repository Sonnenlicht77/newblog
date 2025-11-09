import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "个人博客搭建",
  description: "基于UniCloud搭建的前后端分离的个人博客系统",
  base: '/newblog/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '知识 & 需求', link: '/pre_need/pre_need' },
      { text: '文档', link: '/blog_docs' },
      { text: '错误处理', link: '/errs' }
    ],

    sidebar: {
      '/pre_need': {
        base: '/pre_need',
        items: [
          { text: 'uniCloud', link: '/pre-uniCloud' },
          { text: '相关知识', link: '/related_knowledge' },
          { text: '需求分析', link: '/pre_need' }
        ]
      },
      '/blog_docs': {
        items: [
          { text: '博客搭建文档', link: '/blog_docs' }
        ]
      },
      '/errs': {
        items: [
          { text: '遇到的问题', link: '/errs' }
        ]
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://sonnenlicht77.github.io/' }
    ]
  }
})
