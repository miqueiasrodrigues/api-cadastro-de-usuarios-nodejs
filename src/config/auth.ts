import { readFileSync } from "fs";

const privateKey = readFileSync("private.key", "utf-8");

export default {
    jwt: {
        secret: privateKey,
        expiresIn: '2h'
    }
}