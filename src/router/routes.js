import Home from '../views/home'

let routes = [{
        path: '/',
        redirect: '/screenManage/screenCatalog'
        // component: Home,
        // children: [{
        //     path: 'home',
        //     name: 'home',
        //     component: Home
        // }]
    },
    // {
    //   path: '/admin/:id',
    //   name: 'admin',
    //   component: () => import('../views/admin')
    // },
    {
        path: '/screen',
        name: 'screen',
        component: () =>
            import('../views/screen')
    },
    {
        path: '/admin',
        name: 'admin',
        component: () =>
            import('@/views/screenManage/screenEdit/admin')
    },
    {
        path: '/layout',
        name: '布局容器',
        component: () =>
            import('@/layout/index'),
        children: [{
                path: '/screenManage',
                name: '大屏管理',
                component: () =>
                    import('@/views/screenManage/index'),
                children: [{
                    path: 'screenCatalog',
                    name: '大屏目录',
                    component: () =>
                        import('@/views/screenManage/screenCatalog/screenCatalog')
                }]
            },
            {
                path: '/dataSource',
                name: '数据源',
                component: () =>
                    import('@/views/dataSource/index'),
                children: [{
                        path: 'dataAccess',
                        name: '数据接入',
                        component: () =>
                            import('@/views/dataSource/dataAccess/dataAccess')
                    },
                    {
                        path: 'dataAccess-setting',
                        name: '设置',
                        component: () =>
                            import('@/views/dataSource/dataAccess/setting/dataAccess-setting')
                    },
                    {
                        path: 'dataModel',
                        name: '数据模型',
                        component: () =>
                            import('@/views/dataSource/dataModel/dataModel')
                    },
                    {
                        path: 'Model-Edit',
                        name: '编辑模型',
                        component: () =>
                            import('@/views/dataSource/dataModel/model-edit/Model-Edit')
                    }
                ]
            }
        ]
    }
]

export default routes
