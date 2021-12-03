<template>
    <button id="save-models" v-on:click="save()">GLTFExporter</button>
    <Renderer ref="renderer" antialias :orbit-ctrl="{ enableDamping: true }" resize="window" shadow>
        <Camera :position="{ z: 10 }" />
        <Scene ref="scene">
            <PointLight :position="{ y: 50, z: 50 }" />
            <Box ref="box" :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }">
                <LambertMaterial />
            </Box>
        </Scene>
    </Renderer>
</template>

<script>
    import * as THREE from "three"
    import {
        GLTFExporter
    } from "three/examples/jsm/exporters/GLTFExporter";

    export default {
        name: 'model-three',
        data() {
            const exporter = new GLTFExporter();
            return {
                exporter,
            }
        },
        methods: {
            toblob: function(blob, filename) {
                var link = document.createElement('a');
                link.style.display = 'none';
                document.body.appendChild(link);
                link.href = URL.createObjectURL(blob);
                link.download = filename;
                link.click();
            },
            saveString: function(text, filename) {
                this.toblob(new Blob([text], {
                    type: 'text/plain'
                }), filename);
            },
            downloadJSON: function(json, filename) {
                this.saveString(JSON.stringify(json), filename);
                console.log(json)
                console.log(filename)
            },
            save: function() {
                this.exporter.parse(
                    this.$refs.scene,
                    // called when the gltf has been generated
                    (gltf) => {
                        this.downloadJSON(gltf, 'mytshirt.gltf');
                    }
                );
            }
        },
        mounted() {
            const renderer = this.$refs.renderer;
            const box = this.$refs.box.mesh;
            renderer.onBeforeRender(() => {
                box.rotation.x += 0.01;
            });
        },
    };
</script>