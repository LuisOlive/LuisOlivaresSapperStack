<script>
  import Nav from '../components/Nav.svelte'
  export let segment
</script>

<Nav {segment} />
<main>
  <slot />
</main>

<style src="../styl/index.styl" global>

</style>
