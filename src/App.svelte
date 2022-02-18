<script lang="ts">
  import { Router, Route } from "svelte-routing";

  import Detail from "./components/Detail.svelte";
  import Home from "./components/Home.svelte";

  export let url = "";
</script>

<main>
  <Router {url}>
    <Route path="/"><Home /></Route>
    <Route path="/detail/:id" component={Detail} />
  </Router>
</main>

<style>
</style>
