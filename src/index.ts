/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import * as core from "@actions/core";
import * as github from "@actions/github";

const name = core.getInput("name", { required: true });
const time = new Date().toTimeString();
core.setOutput("time", time);
const payload = JSON.stringify(github.context.payload, undefined, 2);
console.log(`The event payload: ${payload}`);
// core.error("This is an error");
core.setFailed("This is a failure");
console.log(`Hello2 :), ${name}!`);
