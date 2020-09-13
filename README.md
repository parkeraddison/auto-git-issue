# Auto Git Issue

A firebase function that will post a GitHub issue on behalf of a user who doesn't have a GitHub (or doesn't want to log in). To be used as the action of a form submission.

Backend:
- Firebase function to format/make the GitHub API request
- Firebase environment variable to store the GitHub personal access token
- Octokit to actually call the request