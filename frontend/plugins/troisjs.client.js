import {
    defineNuxtPlugin
} from "#app";

import {
    Box,
    Camera,
    LambertMaterial,
    PointLight,
    Renderer,
    Scene
} from "troisjs"

export default defineNuxtPlugin(({
    vueApp
}) => {
    vueApp.component('Box', Box)
    vueApp.component('Camera', Camera)
    vueApp.component('LambertMaterial', LambertMaterial)
    vueApp.component('PointLight', PointLight)
    vueApp.component('Renderer', Renderer)
    vueApp.component('Scene', Scene)
});