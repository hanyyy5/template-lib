// import AsyncCompnent from "../components/common/AsyncComponent";
// const PageFql = AsyncCompnent(() => import('../pages/fql/index'));
import ProjectIndex from '../pages/project/index';
import MaterialIndex from '../pages/reactMaterials/index';
import SettingsIndex from '../pages/settings/index';

const ROUTES = [
    {
        key: 'Project',
        link: '/project',
        text: '我的项目',
        component: ProjectIndex
    },
    {
        key: 'Materials',
        link: '/materials',
        text: '我的物料',
        children: [
            {
                key: 'ReactMaterials',
                link: '/reactMaterials',
                text: 'React物料',
                component: MaterialIndex
            },
        ]
    },
    {
        key: 'Settings',
        link: '/settings',
        text: '物料设置',
        component: SettingsIndex
    }
];

export default  ROUTES