import dashboardlayout from "@/components/dashboardlayout.vue";
// app-hospital
import app_1 from "@/components/hospitalapp.vue";
import forma from "@/components/forma.vue";
import formb from "@/components/formb.vue";

const routes = [
    {
        path: "/",
        component: dashboardlayout,
        redirect: "/hospital",
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: "/hospital",
                name: "hospital",
                // meta: {
                //     requiresAuth: true
                // },
                component: app_1,
            },
            {
                path: "/forma",
                name: "forma",
                // meta: {
                //     requiresAuth: true
                // },
                component: forma,
            },
            {
                path: "/formb",
                name: "formb",
                // meta: {
                //     requiresAuth: true
                // },
                component: formb,
            },
        ]
    },
    // {
    //     path: "/viewpdf/:id",
    //     name: "view pdf",
    //     component: ,
    //     props: true,
    // },
]

/**
   * Asynchronously load view (Webpack Lazy loading compatible)
   * The specified component must be inside the Views folder
   * @param  {string} name  the filename (basename) of the view to load.
    function view(name) {
      var res= require('../components/Dashboard/Views/' + name + '.vue');
      return res;
    };
**/

export default routes;