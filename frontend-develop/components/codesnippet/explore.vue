<template>
    <div class="container mt-10">
        <h1>Explore snippets</h1>
        <div class="container explore">
            <ul>
                <li v-for="snippet in getSnippets" :key="snippet.id">
                    <n-link :to="localePath(`/codesnippet/${snippet.id}`)">{{ snippet.user.username }} / {{ snippet.name }}</n-link>
                    <span>-- {{ snippet.language.name }} -- {{ snippet.createdAt }}</span>
                </li>
            </ul>
        </div>
        <button @click="previousPage">Previous Page</button>
        <button @click="nextPage">Next Page</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            page: 0, 
        }
    },
    async mounted () {
        await this.$store.dispatch("explore/getSnippets", this.page);
    },
    computed: {
        getSnippets() {
            return this.$store.state.explore.snippets;
        }
    },
    methods: {
        nextPage() {
            this.page++;
            this.$store.dispatch("explore/getSnippets", this.page);
        },
        previousPage() {
            if(this.page == 0) {
                return;
            }
            this.page--;
            this.$store.dispatch("explore/getSnippets", this.page);
        }
    }
}
</script>