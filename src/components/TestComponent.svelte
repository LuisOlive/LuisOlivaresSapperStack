<script>
  export let title = 'Soy el h2',
    content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, soluta.'
    
  const f = x => x**2 + 5*x
  const print = s => `f(x) = ${s}`
  
  class Algo {
    #hola = 'Hola'
    get hola() {
      return this.#hola
    }
  }
  
  let algo = new Algo()
  let x = 0
  
  $: saludo = algo?.hola
  $: y = x |> f |> print
  
</script>

<style lang="stylus">
  h2
    color red
</style>

<h2>{saludo}, {title}</h2>
<p>{content}</p>

<p class="bold">
  {y}
</p>
<button on:click={() => x++}></button>