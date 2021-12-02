import {
    defineNuxtPlugin
} from '#app'

import * as THREE from 'three';
import {
    GLTFExporter
} from 'three/examples/js/exporters/GLTFExporter'

export default defineNuxtPlugin(({
    nuxtApp,
    vueApp
}) => {
    nuxtApp.vueApp.use(THREE);
    nuxtApp.vueApp.component('GLTFExporter', GLTFExporter);
});