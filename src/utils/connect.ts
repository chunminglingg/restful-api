import mongoose from "mongoose";
import config from "config";
import log from "./logger";

async function connect() {
    const dbUri = config.get<string>("dbUri")
    try {
        await mongoose.connect(dbUri);
        log.info("connection successfully");
    } catch (err) {
        log.error("connection failed", err);
        process.exit(1);
    }
}

export default connect;