<template>
    <div>
        <client-only>
            <notifications :duration="3000" position="top center"/>
        </client-only>
        <nuxt/>
    </div>
</template>

<script>
    export default {
        middleware: "auth",
    }
</script>
