export interface DevInterface {
  app: {
    port: number | string;
  };
}

export interface ProInterface {
  app: {
    port: number | string;
  };
}

export interface EnvInterface {
  app: {
    port: number | string;
  };
}

export interface ConfigInterface {
  DEV: DevInterface;
  PRO: ProInterface;
}
