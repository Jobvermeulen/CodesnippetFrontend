<template>
    <button @click="copyToClipboard">{{copy_text}}</button>
</template>
<script>
    export default {
        props: {
            text_to_copy: String,
            copy_text: String,
        },
        methods: {
            copyToClipboard(){
                navigator.clipboard.writeText(this.text_to_copy).then(function() {
                    console.log('copied!');
                }, function() {
                    console.log('not copied!');
                    /* clipboard write failed */
                });
                // this.text_to_copy.select();
                // document.execCommand("copy");
            },
        }
    }
</script>
