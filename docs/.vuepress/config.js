/*
 * @describe: 配置vuepress
 * @Author: superDragon
 * @Date: 2019-09-25 10:30:34
 * @LastEditors: superDragon
 * @LastEditTime: 2020-03-01 23:21:41
 */
const baseMap = {
  dev: '/',
  test: '/interview/',
  prod: '/interview/'
}
let started = [
  'v-copy'
]
module.exports = {
  base: '/interview/',
  theme: 'vuepress-theme-api',
  title: 'interview',
  description: '一个基于vue的面试宝典',
  head: [['link', { rel: 'icon', href: '/images/favicon.ico' }]],
  themeConfig: {

    sidebarGroupOrder: [
      'start' // 分组名称，即文件夹名称
    ],
    lastUpdated: '最后更新',
    repo: 'https://github.com/xkloveme/interview',
    repoLabel: 'GitHub'
  },
  markdown: {
    anchor: { permalink: true }
  },
  extendMarkdown: md => {
    // 使用更多的 markdown-it 插件!
    md.use(require('markdown-it-checkbox')).use(require('markdown-it-kbd'))
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-102352377-1' // UA-102352377-1
      }
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'tips',
        before: info => `<div class="tips"><p class="title">${info}</p>`,
        after: '</div>',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'info',
        before: info => `<div class="tips info"><p class="title">${info}</p>`,
        after: '</div>',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'success',
        before: info => `<div class="tips success"><p class="title">${info}</p>`,
        after: '</div>',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'error',
        before: info => `<div class="tips error"><p class="title">${info}</p>`,
        after: '</div>',
      },
    ],
    '@vuepress/back-to-top', '@vuepress/medium-zoom', 'demo-block'],
  serviceWorker: true
}
