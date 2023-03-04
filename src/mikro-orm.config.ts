import { Logger } from '@nestjs/common';
import { Options } from '@mikro-orm/core';
import { DemoTable } from './entities/demo';

const logger = new Logger('MikroORM');
const config: Options = {
  entities: [DemoTable],
  dbName: 'NewDemoDB',
  type: 'postgresql',
  port: 5432,
  debug: true,
  logger: logger.log.bind(logger),
};

export default config;
