const functions = require('firebase-functions');
const { Octokit } = require('@octokit/core');

const octokit = new Octokit({
    auth: functions.config().github.token
});

exports.createIssue = functions.https.onRequest((request, response) => {

    // const userName = request.body.userName;
    // const userEmail = request.body.userEmail;

    // const message = request.body.message;

    // const page = ;

    const OWNER = 'parkeraddison';
    const REPOSITORY = 'auto-git-issue';
    const url = `https://api.github.com/repos/${OWNER}/${REPOSITORY}/issues`;

    const title = 'Example title';
    const body = 'Example message';

    // const response = await octokit.request('POST /repos/:owner/:repo/issues', {
    //     owner: OWNER,
    //     repo: REPOSITORY
    // });

    console.log(`Creating issue with token ${functions.config().github.token}`);
    return response.sendStatus(200)
});
