import {Router} from '@vaadin/router';


const ROUTES = [
    {
        title: 'Underground Athletics',
        path: '/',
        componentName: 'h-ome'
    },
    {
        title: 'Team | Underground Athletics',
        path: '/team',
        componentName: 't-eam'
    },
    {
        title: 'Join | Underground Athletics',
        path: '/join',
        componentName: 'j-oin'
    },
    {
        title: 'Photos | Underground Athletics',
        path: '/photos',
        componentName: 'pho-tos'
    },
    {
        title: 'Schedule | Underground Athletics',
        path: '/schedule',
        componentName: 'sch-edule'
    }
];

export const setupRouter = ctx => {
    const router = new Router(ctx);

    router.setRoutes([
        ...ROUTES.map(({
            title,
            path,
            componentName
        }) =>
            ({
                path: `${path}`,
                component: componentName,
                action: async() => {
                    window.scrollTo(0, 0);
                    await import(`../views/${componentName}.js`);
                    document.title = title;
                }
            })
        ),
        // Fallback.
        {
            path: '(.*)',
            action: (vaadinCtx, commands) => commands.redirect('/')
        }
    ]);
};
