/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EXAMPLE_ENV: number
  readonly VITE_FALSE: boolean
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
