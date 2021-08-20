import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export const router = new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            component: () => import('@/views/Home')
        },
        {
            path: "/sign_in",
            component: () => import("@/components/auth/sign_in")
        },
        {
            path: "/sign_up",
            component: () => import("@/components/auth/sign_up")
        },
        {
            path: "/quiz/",
            component: () => import("@/components/content/pages/quiz_page"),
            children: [
                {
                    path: "usa-states",
                    component: () => import("@/components/content/maps/usa_states_map")
                },
                {
                    path: "serbia-states",
                    component: () => import("@/components/content/maps/serbia_map")
                }
            ]
        },
        {
            path: "/hello",
            component: () => import("@/components/content/pages/hello_page")
        }
    ]
});
