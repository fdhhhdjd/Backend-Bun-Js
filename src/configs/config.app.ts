//* LIBRARY

import { ConfigInterface, DevInterface, ProInterface } from "@/interfaces/config.interface";

const DEV: DevInterface = {
    app: {
        port: process.env.PORT|| 5000
    },
}
const PRO: ProInterface = {
    app: {
        port: process.env.PORT || 5000
    }
}
const config: ConfigInterface = { DEV, PRO }

const env: string = process.env.NODE_ENV || 'DEV'

const selectedConfig = env === 'DEV' ? config.DEV : config.PRO;

export default  selectedConfig