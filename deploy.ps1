# Stop script on error
$ErrorActionPreference = "Stop"

# Build the project
npm run build

# Navigate into the build output directory
Set-Location -Path ./dist

# Initialize a new Git repository
git init
git add -A
git commit -m 'deploy'

# Replace <USERNAME> and <REPO> with your GitHub username and repository
git push -f https://github.com/THETONN/acne-severity.git master:gh-pages

# Return to the original directory
Set-Location -Path ..
