<template>
    <button id="save-models">GLTFExporter</button>
    <Renderer ref="renderer" antialias :orbit-ctrl="{ enableDamping: true }" resize="window" shadow>
        <Camera :position="{ z: 10 }" />
        <Scene>
            <PointLight :position="{ y: 50, z: 50 }" />
            <Box ref="box" :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }">
                <LambertMaterial />
            </Box>
        </Scene>
    </Renderer>
</template>

<script>
    export default {
        mounted() {
            const renderer = this.$refs.renderer;
            const box = this.$refs.box.mesh;
            renderer.onBeforeRender(() => {
                box.rotation.x += 0.01;
            });

            // Instantiate a exporter
            const exporter = new GLTFExporter();

            document.getElementById('save-models').addEventListener('click', function() {
                console.log("this was save-models")
                console.log(exporter)
            })

        },
    };
</script>