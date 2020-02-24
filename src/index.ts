/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

const core = require("@actions/core");
const github = require("@actions/github");

// const name = core.getInput("name", { required: true });

// const time = new Date().toTimeString();
// core.setOutput("time", time);
// const payload = JSON.stringify(github.context.payload, undefined, 2);
// console.log(`The event payload: ${payload}`);
// // core.error("This is an error");
// core.setFailed("This is a failure");
// console.log(`Hello2 :), ${name}!`);

const main = async () => {
  const token = core.getInput("github-token");
  const message = core.getInput("message");

  const context = github.context;
  if (context.payload.pull_request == null) {
    core.setFailed("No pull request found.");
    return;
  }
  const pull_request_number = context.payload.pull_request.number;

  const octokit = new github.GitHub(token);
  octokit.issues.createComment({
    ...context.repo,
    issue_number: pull_request_number,
    body: message,
  });

  await octokit.pulls.update({
    ...context.repo,
    pull_number: context.issue.number,
    state: "closed",
  });

  // core.setFailed("Please set project or pattern input");
};

main().catch(err => core.setFailed(err.message));
