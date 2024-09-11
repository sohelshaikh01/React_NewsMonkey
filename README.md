# NewsMonkey 
## Gives you daily dose of latest news

- It has categories to search the news
- It provides news for different countery
- Detailed news pages link
- Modern UI and UX


### Installations
- npm prop-types
- npm react-router-dom
- npm i react-infinite-scroll-component


accountability and professionalism on GitHub. Here's a structured branching strategy that works well for a news app project:

1. Main Branches

`main` branch: This is the production-ready branch, containing stable, tested, and fully working code. Never work directly on this branch.

`develop` branch: This is the main working branch for integrating features. It serves as the integration branch for features before they are merged into `main`.

2. Feature Branches

For each feature or task, create a new branch from develop. Examples:

`feature/infinite-scrolling`
`feature/loading-spinner`
`feature/api-integration`

When to switch: Switch to a new feature branch when starting work on a new feature.

Merging: Once a feature is complete, thoroughly test it, then merge it back into `develop` using a pull request (PR) to ensure code review. This will help maintain accountability.

3. Hotfix Branches

If a bug is found in the `main` branch, create a `hotfix/bug-name` branch from `main`. Once the bug is fixed, merge it back into both `main` and `develop` to ensure the fix is in future releases too.

4. Release Branches

When you're ready for a release (like deploying the app), create a `release/version` branch from `develop` (e.g., `release/v1.0`). Perform final testing, bug fixing, and documentation updates in this branch. Once everything is ready, merge it into main and tag the release.

### Example Workflow

- Create a new branch from `develop`: `git checkout -b feature/infinite-scrolling`
- Work on the feature, commit changes: `git commit -m "Add infinite scrolling"`
- Push the feature branch: `git push origin feature/infinite-scrolling`
- Open a PR for code review and merge into `develop` once approved.
- Repeat for other features.
- Before a release, create a release branch: `git checkout -b release/v1.0` and prepare for deployment.
- Merge the release into `main` and tag it.

This structured approach ensures your GitHub repository looks professional, with clean branch management and a clear development history.
