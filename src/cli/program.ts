import commander from 'commander';
import createFileTreeWriter from 'file-tree-writer';
import chalk from 'chalk';
import { askQuestions, template } from '../template';
import directoryIsEmpty from '../utils/directoryIsEmpty';
import removeErrorLogs from '../utils/removeErrorLogs';

export interface CommandLineOptions {
  silent: boolean;
  verbose: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const action = async (aPath: string, _options: CommandLineOptions) => {
  console.info(chalk.blueBright('Welcome to ', chalk.bold('create-new-package')));

  // Initial check to prevent users from answeing all the questions only to then fail
  await directoryIsEmpty(aPath);

  // Remove error logs
  await removeErrorLogs(aPath);

  // Ask questions
  const props = await askQuestions();

  // Populate template
  const populatedTemplate = template(props);

  // Duplicate check to ensure that the directory is now actually empty
  await directoryIsEmpty(aPath);

  // Write files
  const fileTreeWriter = createFileTreeWriter(populatedTemplate);
  fileTreeWriter.on('write', event => {
    console.info(`Creating ${chalk.blue(event.path)}`);
  });
  await fileTreeWriter.writeTo(aPath);

  // Execute yarn install?
};

const program = commander
  .createCommand()
  .name('create-new-package')
  .description('Creates a new package')
  .passCommandToAction(false)
  .storeOptionsAsProperties(false)
  .arguments('<path>')
  .action(action);

export default program;
