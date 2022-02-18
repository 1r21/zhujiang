<script lang="ts">
  import { onMount } from "svelte";
  import { getNews, type News } from "@1r21/api-h5";
  import Article from "./Article.svelte";

  let articles: News[] = [];

  onMount(async () => {
    const { list } = await getNews();
    articles = list;
  });
</script>

<div class="w-9/12 h-full mx-auto">
  <ul class="flex flex-wrap">
    {#each articles as article}
      <li class="w-1/5 p-2">
        <Article {article} />
      </li>
    {/each}
  </ul>
</div>
