<template>
    <div class="mt-10 container" v-if="dataReady">
        <div>
            <h2>{{snippet.name}}</h2>
            <p>{{snippet.description}}</p>
            <h6 class="bold">{{ $moment(snippet.createdAt).format($store.state.const.momentDefaultFormat)}}</h6>
            <h6>{{snippet.changedAt}}</h6>
            <h6 v-if="snippet.category.name">category: {{snippet.category.name}}</h6>
        </div>

        <div class="code-editor" >
            <h6>{{snippet.language.name}}</h6>
            <h6>{{snippet.language.value}}</h6>
            <AppEditor :code_mode="snippet.language.value" :read_only="true" :set_code="snippet.snippet"/>
            <n-link v-if="this.$store.state.users.userId === this.$store.state.snippet.codeSnippet.userId" :to="localePath(`/codesnippet/edit/${snippet.id}`)">Edit</n-link>
            <AppCopyBtn :text_to_copy="snippet.snippet" :copy_text="'Copy to clipboard'"/>
        </div>
    </div>
</template>
<script>
    import AppEditor from "@codesnippet/editor";
    import AppCopyBtn from "~/components/uikit/copyButton";

    export default {
        data() {
            return {
                dataReady: false,
                snippetId: Number,
                snippet: {},
            }
        },
        components: {
            AppEditor,
            AppCopyBtn,
        },
        async mounted() {
            this.snippetId = this.$route.params.snippetId;
            await this.$store.dispatch("snippet/getSnippet", this.snippetId);
            this.snippet = this.$store.state.snippet.codeSnippet;

            //after this point, the AppEditor is gonna be loaded.
            this.dataReady = true;
        },
    }
</script>
