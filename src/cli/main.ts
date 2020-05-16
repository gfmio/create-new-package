import chalk from 'chalk';
import program from './program';

const signalHandler = (signal: NodeJS.Signals) => {
  console.info(chalk.bold('Received ', chalk.blue(signal), '. Terminating.'));
  console.info('Any operations that are in progress will abort.');
  // eslint-disable-next-line unicorn/no-process-exit
  process.exit();
};

process.on('SIGINT', signalHandler);

process.on('uncaughtException', e => {
  console.error(chalk.red('The following uncaught error occurred. Terminating.'));
  console.error(e);
});

process.on('unhandledRejection', reason => {
  console.error(chalk.red('The following unhandled rejection occurred. Terminating.'));
  console.error(reason);
});

const main = async (argv: string[] = process.argv) => {
  try {
    await program.parseAsync(argv);
  } catch (error) {
    console.error(chalk.red('The following error occurred. Aborting.'));
    console.error(error);
  }
};

export default main;
