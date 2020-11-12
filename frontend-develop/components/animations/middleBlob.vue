<template>
    <svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1364.42 731.26" style="overflow: visible">
        <defs>
            <style>.blobMiddleSVG{opacity:0.1;isolation:isolate;fill:url(#BlobMiddleGradient);}</style>
            <linearGradient id="BlobMiddleGradient" x1="2.18" y1="748.39" x2="0.9" y2="750" gradientTransform="matrix(865.6, 0, 0, -463.92, -542.6, 348024.75)"
                            gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#43ffd4"/>
                <stop offset="1" stop-color="#0093ff"/>
            </linearGradient>
        </defs>
        <path id="BlobMiddle" data-name="Path 1367-2" class="blobMiddleSVG" style="transform-origin: 50% 50%; transform-box: fill-box;"
              d="M39.29,263.19c54.28-170.45,236.52-114,471-161.38s419.54-165,600.87-59.26,396,298.85,124.43,482.24S593.11,778.42,264.45,698.15-15,433.64,39.29,263.19Z"
        />
    </svg>

</template>
<script>
    import anime from "animejs";

    export default {
        components: {
            anime,
        },
        mounted() {
            this.blobTransform()
        },
        methods: {
            blobTransform() {
                anime({
                    targets: "#BlobMiddle",
                    d: [
                        { value: "M39.29, 263.19c54.28-170.45, 236.52-114, 471-161.38s419.54-165, 500.87-59.26, 396, 200.85, 124.43, 482.24S593.11, 778.42, 264.45, 698.15-15, 433.64, 39.29, 263.19Z"},
                        { value: "M39.29, 263.19c54.28-170.45, 200.52-114, 471-161.38s419.54-165, 450.87-59.26, 396, 225.85, 124.43, 400.24S593.11, 778.42, 264.45, 600.15-15, 400.64, 39.29, 263.19Z"},
                        { value: "M39.29, 263.19c54.28-170.45, 200.52-114, 471-161.38s419.54-165, 500.87-59.26, 396, 225.85, 124.43, 450.24S593.11, 778.42, 264.45, 600.15-15, 410.64, 39.29, 263.19Z"},
                        { value: 'M39.29, 263.19c54.28-170.45, 236.52-114, 471-161.38s419.54-165, 600.87-59.26,396, 298.85,124.43, 482.24S593.11, 778.42, 264.45, 698.15-15, 433.64, 39.29, 263.19Z' },
                    ],
                    easing: 'linear',
                    duration: 20000,
                    loop: true,
                });
            }
        }
    }
</script>
