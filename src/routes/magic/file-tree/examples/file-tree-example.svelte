<script>
  import Folder from "$lib/components/sv/magic/components/file-tree/folder.svelte";
  let root = [
    {
      type: "folder",
      name: "lib",
      files: [{ type: "file", name: "index.ts" }],
      expanded: true,
    },
    {
      type: "folder",
      name: "routes",
      files: [
        {
          type: "folder",
          name: "magic",
          files: [
            { type: "file", name: "+page.svelte" },
            { type: "file", name: "code.png" },
          ],
        },
        {
          type: "folder",
          name: "luxe",
          files: [
            { type: "file", name: "+page.svelte" },
            { type: "file", name: "+layout.svelte" },
          ],
        },
        { type: "file", name: "+page.svelte" },
        { type: "file", name: "+layout.svelte" },
        { type: "file", name: "+page.server.ts" },
      ],
    },
  ];
</script>

<div class="min-h-64 min-w-80 p-6 rounded-xl border dark:bg-black z-50 ">
  <Folder name="src" files={root} expanded />
</div>
