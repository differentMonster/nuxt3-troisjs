import {
    defineNuxtPlugin
} from "#app";
import {
    createTroisJS
} from "troisjs";
import {
    Box,
    Camera,
    LambertMaterial,
    MeshPublicInterface,
    PointLight,
    Renderer,
    RendererPublicInterface,
    Scene
} from "troisjs/src/export.ts"

export default defineNuxtPlugin((nuxtApp) => {
    const TroisJSVuePlugin = createTroisJS({
        components: {
            Box,
            Camera,
            LambertMaterial,
            PointLight,
            Renderer,
            Scene
        }
    })
    nuxtApp.vueApp.use(TroisJSVuePlugin)
});