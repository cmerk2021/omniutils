import pino from 'pino';
import pretty from 'pino-pretty'

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

const prettyStream = pretty({
  colorize: true,
});

const logger = pino(
  {
    name: 'OmniUtils',
  },
  prettyStream
);

var config = {};

const OmniUtils = {
  defineConfig: (tempConfig) => {
    config = tempConfig;
  },
  internal: {
    error: (error) => {
        logger.error(error)
        if (config.errorCallback && typeof config.errorCallback === "function") {
            try {
                config.errorCallback(error)
            } catch (e) {
                logger.error(`CallbackError: An error occured in your errorCallback function: ${e}`)
            }
        } else {
            logger.warn("An error occured in OmniUtils, but no errorCallback was defined or is not a function.")
        }
    },
    debug: (message) => {
        if (config.debug === true) {
            logger.debug(message)
        }
    },
    isEmpty: () => {
      if (isEmpty(config)) {
        logger.info(
          "OmniUtils config NOT defined. The config is not required, but recommended to customize operaion. Learn more at https://omniutils.js.org."
        );
      } 
    }
  },
};

export default OmniUtils;

