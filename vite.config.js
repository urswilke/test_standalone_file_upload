import { defineConfig } from "vite";

export default defineConfig({
    base: '/test_standalone_file_upload/',  
    // from here:
    esbuild: {
        supported: {
          'top-level-await': true //browsers can handle top-level-await features
        },
      },
})