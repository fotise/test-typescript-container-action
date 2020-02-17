/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { getInput } from "@actions/core";

const name = getInput("name", { required: true });

console.log(`Hello :), ${name}!`);

// Get the JSON webhook payload for the event that triggered the workflow
const payload = JSON.stringify(github.context.payload, undefined, 2)

console.log(`The event payload: ${payload}`);
