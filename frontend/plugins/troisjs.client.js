import {
    defineNuxtPlugin
} from "#app";
import TroisJSVuePlugin from "troisjs";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(TroisJSVuePlugin, {
        property: {
            id: "GA_MEASUREMENT_ID"
        }
    });
});