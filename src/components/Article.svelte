<script lang="ts">
  import { Link } from "svelte-routing";
  import type { News } from "@1r21/api-h5";

  import imagePlaceholder from "../assets/place/10.jpg";
  export let article: News;

  let imageSrc = article.cover;
  function imageErrHandle() {
    imageSrc = imagePlaceholder;
  }
</script>

<Link to={`/detail/${article.id}`} class="inline-block w-full">
  <div class="h-28 rounded overflow-hidden bg-gray-300 group">
    <img
      src={imageSrc}
      class="block w-full h-full text-white bg-gray-300 transition-transform duration-1000 group-hover:rotate-[5deg] group-hover:scale-110"
      on:error={imageErrHandle}
      alt="Fetch cover err"
    />
  </div>
  <p class="text-xs my-2">{article.date}</p>
  <p class="line-clamp-3 text-sm" title={article.title}>
    {article.title}
  </p>
</Link>
