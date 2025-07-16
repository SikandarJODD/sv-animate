<script>
  import Lens from "$lib/components/sv/aceternity/lens.svelte";
  let hovering = $state(false);
</script>

<div class="flex justify-center items-center  w-full">
  <div class="relative z-10">
    <Lens bind:hovering>
        <img
          src="https://i.pinimg.com/564x/d3/0c/84/d30c84f735785bb97b2f502dcfbecd16.jpg"
          alt="image_c"
          class="h-full w-[380px] scale-110 object-cover origin-center"
        />
    </Lens>
  </div>
</div>