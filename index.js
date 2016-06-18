
'use strict';

const _ = require('lodash');
const util = require('util');

module.exports = (envvarOrArrayOfEnvvars) => {
  const envvars = envvarOrArrayOfEnvvars;
  if (!_.isArray(envvars)) {
    envvars = [envvarOrArrayOfEnvvars];
  }

  _.each(envvars, (envvar) => {
    if (_.isEmpty(process.env[envvar])) {
      throw new Error(util.format('Process enviroment %s must be defined', envvar));
    }
  });
};
