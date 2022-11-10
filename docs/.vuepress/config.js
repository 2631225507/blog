module.exports = {
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            {
                text: '博客',
                items: [
                    { text: 'GitHub', link: 'https://github.com/2631225507/blog.git' },
                    { text: '线上地址', link: 'https://blog.csdn.net/weixin_44155115' }
                ]
            }],
        // 侧边栏配置
        sidebar: [
            {
                title: "基础知识",
                path: '/note/uniapp', // 默认激活的选项
                collapsable: false, // 不折叠
                children: [
                    { title: "uni-app", path: "/note/uniapp" },
                    { title: "vue3", path: "/note/vue3" },
                    { title: "canvas", path: "/note/canvas" },
                ],
            }
        ]
    }
}
