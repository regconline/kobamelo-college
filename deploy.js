import { exec } from 'child_process';
import pkg from 'gh-pages';
const { publish } = pkg;

console.log('Building app...');
exec('npm run build', (error, stdout, stderr) => {
  if (error) {
    console.error(`Build error: ${error}`);
    return;
  }
  
  console.log(stdout);
  console.log('Build complete. Deploying to GitHub Pages...');
  
  // When built, our site will be in dist/client folder
  publish('dist/client', {
    branch: 'gh-pages',
    repo: 'https://github.com/regconline/kobamelo-college.git',
    message: 'Auto-deploy from Replit',
    user: {
      name: 'Replit Deployment',
      email: 'replit@example.com'
    }
  }, (err) => {
    if (err) {
      console.error('Deployment error:', err);
      return;
    }
    console.log('Deployment successful!');
  });
});