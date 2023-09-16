export interface DevInterface {
    app: {
        port: Number | String
    }
}

export interface ProInterface {
    app: {
        port: Number | String
    }
}

export interface EnvInterface {
    app: {
        port: Number | String 
    }
}

export interface ConfigInterface {
    DEV: DevInterface,
    PRO: ProInterface
}