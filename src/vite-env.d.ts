/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_VEMETRIC_TOKEN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module '*.css';
