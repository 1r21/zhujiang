<script lang="ts">
  import { onMount } from "svelte";
  import { getNewsById, type News } from "@1r21/api-h5";
  import { type Text, parseText } from "@1r21/util";

  export let texts: Text[] = [];
  export let article: News;

  onMount(async () => {
    const id = location.pathname.replace(/\/\w+\/(\d)/, "$1");
    const article = await getNewsById(id);
    texts = parseText(article.transcript);
  });
</script>

<div class="w-3/5 mx-auto pb-[100px]">
  <div>
    {#each texts as text}
      <p class="my-2">
        {text.value}
      </p>
    {/each}
    <p class="text-right">
      from:
      <a
        href={article?.source}
        rel="noreferrer"
        target="_blank"
        class=" text-blue-500 italic underline"
      >
        pbs
      </a>
    </p>
  </div>
  <audio
    controls
    src={article?.src}
    class="fixed bottom-2 w-3/5 outline-none"
  />
</div>
