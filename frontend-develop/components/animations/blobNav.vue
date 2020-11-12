<template>
    <div @click="routeToHome()">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="911" height="870" viewBox="0 0 911 870" style="overflow: visible;">
            <defs>
                <linearGradient id="gradientEllipse" x1="1.23" y1="0.5" x2="-0.152" y2="0.5" gradientUnits="objectBoundingBox">
                    <stop offset="0%" style="stop-color:#0093FF"/>
                    <stop offset="100%" style="stop-color:#43FFD4"/>
                </linearGradient>
            </defs>
            <ellipse id="Ellipse_19" data-name="Ellipse 19" cx="455.5" cy="435" rx="455.5" ry="435" opacity="0.1" fill="url(#gradientEllipse)" style="cursor: pointer"/>
        </svg>
    </div>

</template>
<script>
    export default {
        methods: {
            async routeToHome() {
                await this.$router.push(this.localePath("/"));
            }
        }
    }
</script>
