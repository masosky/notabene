import { createLogger, format, transports } from "winston";
const { combine, timestamp } = format;

const logger = createLogger({
    level: 'info',
    format: combine(format.json(), timestamp()),
    defaultMeta: { service: 'notabene-service' },
});

if (process.env.NODE_ENV !== 'production') {
    logger.add(new transports.Console({
        format: combine(format.json(), timestamp()),
    }));
}

export default logger;