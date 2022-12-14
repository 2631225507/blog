// const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
// import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
module.exports = {
    // 标题
    title: '学习笔记',
    // 描述
    description: 'Just playing around',
    // 部署gitHub
    base: '/blog/',
    // 使用自定义vue组件
    plugins: [
        'demo-container'
        // registerComponentsPlugin({
        //     componentsDir: path.resolve(__dirname, './components'),
        // }),
        // backToTopPlugin(),
    ], 
    // 配置项
    themeConfig: {
        // 顶部tabbar
        nav: [
            {
                text: '文档',
                link: '/'
            },
            {
                text: 'GitHub',
                link: 'https://2631225507.github.io/blog/'
            },
        ],
        // 侧边栏
        sidebar: [{
                title: "基础",
                path: '/note/uniapp', // 默认激活的选项
                collapsable: false, // 不折叠
                children: [{
                        title: "uni-app",
                        path: "/note/uniapp"
                    },
                    {
                        title: "vue3",
                        path: "/note/vue3"
                    },
                    {
                        title: "canvas",
                        path: "/note/canvas"
                    },
                ],
            },
            {
                title: "组件",
                path: '/components/displayTable', // 默认激活的选项
                collapsable: false, // 不折叠
                children: [{
                    title: "组合表格",
                    path: "/components/displayTable"
                },{
                    title: "下拉单选树",
                    path: "/components/treeSelect"
                },{
                    title: "下拉多选树",
                    path: "/components/mulTreeSelect"
                },{
                    title: "时钟展示",
                    path: "/components/clock"
                },{
                    title: "按钮选中",
                    path: "/components/buttonSelect"
                }],
            }
        ]
    }, 
    sass: { indentedSyntax: true },
    // chainWebpack: (config, isServer) => {
    //     config.resolveLoader
    //         .modules
    //         .add(path.resolve(__dirname, './node_modules'))
    // }
}