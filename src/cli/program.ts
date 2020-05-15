import commander from 'commander';
import { askQuestions, template } from '../template';
import createFileTreeWriter from 'file-tree-writer';
import directoryIsEmpty from '../utils/directoryIsEmpty';
import removeErrorLogs from '../utils/removeErrorLogs';

export interface CommandLineOptions {}

export const action = async (aPath: string, options: CommandLineOptions) => {
  // Initial check to prevent users from answeing all the questions only to then fail
  await directoryIsEmpty(aPath);

  // Remove error logs
  await removeErrorLogs(aPath);

  // Ask questions
  const props = await askQuestions();

  // Populate template
  const populatedTemplate = await template(props);

  // Duplicate check to ensure that the directory is now actually empty
  await directoryIsEmpty(aPath);

  // Write files
  const fileTreeWriter = createFileTreeWriter(populatedTemplate);
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
