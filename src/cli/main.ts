import program from './program';

const main = async (argv: string[] = process.argv) => {
  try {
    await program.parseAsync(argv);
  } catch (e) {
    console.error(e);
  }
};

export default main;
