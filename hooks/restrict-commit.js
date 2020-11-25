import { spawnSync } from 'child_process';

// Constants
const RESTRICTED_BRANCH = 'master';
const ALLOWED_USER = {
  name: 'Roberto Rossini',
  email: 'robertorossini96@gmail.com',
};

// Catch any exception and exit with code 1
try {
  // Get current branch
  const getBranch = spawnSync('git', ['rev-parse', '--abbrev-ref', 'HEAD']);
  const branch = getBranch.stdout.toString().trim();

  // Check if the current branch is the restriced one
  if (branch === RESTRICTED_BRANCH) {
    // Get current user information
    const getUserName = spawnSync('git', ['config', '--get', 'user.name']);
    const getUserEmail = spawnSync('git', ['config', '--get', 'user.email']);
    const userName = getUserName.stdout.toString().trim();
    const userEmail = getUserEmail.stdout.toString().trim();

    // Check if the current user is the allowed user
    if (userName === ALLOWED_USER.name && userEmail === ALLOWED_USER.email) {
      // User is allowed
      // console.log('\n✅ \x1b[32mAllowed\x1b[0m.');
      console.log('\n\x1b[32mAllowed.\x1b[0m\n');
      process.exit(0);
    } else {
      // User not allowed
      // const errorMsg = \n🚫 \x1b[1m\x1b[31mUser not allowed to commit on this branch!\x1b[0m\n\x1b[33mConsider creating a new branch and commit your changes there.\x1b[0m\n
      const errorMsg =
        '\n\x1b[1m\x1b[31mUser not allowed to commit on this branch!\x1b[0m\n\x1b[33mConsider creating a new branch and commit your changes there.\x1b[0m\n';
      throw new Error(errorMsg);
    }
  } else {
    // This branch is not restricted
    console.log('\n\x1b[32mAllowed.\x1b[0m\n');
    process.exit(0);
  }
} catch (err) {
  // Exception has been raised --> exit with error
  console.log(err.message);
  process.exit(2);
}

// It should not be needed, but just in case fail if it reaches this point
process.exit(1);
