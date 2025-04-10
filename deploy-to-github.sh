#!/bin/bash

# Repository details
REPO_NAME="kobamelo-college"
GITHUB_USER="regconline"

# Check if the repository exists
REPO_CHECK=$(curl -s -H "Authorization: token $GITHUB_TOKEN" https://api.github.com/repos/$GITHUB_USER/$REPO_NAME)

if echo $REPO_CHECK | grep -q "Not Found"; then
  echo "Creating new repository: $REPO_NAME..."
  
  # Create repository
  curl -H "Authorization: token $GITHUB_TOKEN" \
       -d "{\"name\":\"$REPO_NAME\", \"description\":\"Kobamelo College Website\", \"private\": false, \"has_issues\": true, \"has_wiki\": true}" \
       https://api.github.com/user/repos
  
  if [ $? -ne 0 ]; then
    echo "Failed to create repository."
    exit 1
  fi
  
  echo "Repository created successfully."
else
  echo "Repository already exists, proceeding with push."
fi

# Configure remote
git remote remove origin 2>/dev/null
git remote add origin https://$GITHUB_TOKEN@github.com/$GITHUB_USER/$REPO_NAME.git

# Add all files
git add .

# Commit
git commit -m "Initial commit from Replit"

# Push to main branch
git push -u origin main --force

echo "Code pushed successfully to GitHub."
echo "Website will be available at: https://$GITHUB_USER.github.io/$REPO_NAME/"
echo "It may take a few minutes for GitHub Pages to build and deploy the site."