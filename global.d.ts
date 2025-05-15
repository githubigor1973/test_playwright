// global.d.ts
declare namespace NodeJS {
  interface ProcessEnv {
    SUPPORT_USER: string;
    SUPPORT_PASS: string;
  }
}