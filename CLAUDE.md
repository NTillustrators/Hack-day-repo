# Project notes

Nick Tomlinson's personal portfolio site: static HTML/CSS/JS, served from the `master` branch.

## Working preferences

- Don't ask for confirmation before actions in Claude or on GitHub for this project
  (committing, pushing to `master`, repo settings) as long as they cost no money and are legal.
- Always commit and push finished work to the repository's remote without waiting to be asked.
- Push finished changes to `master` so the live site updates.
- After every change, run `./bump-version.sh` before committing so browsers fetch
  fresh copies of the CSS, JS and images instead of cached ones.
