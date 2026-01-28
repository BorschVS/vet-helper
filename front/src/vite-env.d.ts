/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly BASE_URL: string;
  readonly VITE_API_URL?: string;
  readonly VITE_BASE_PATH?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "*.svg?react" {
  import * as React from "react";
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
