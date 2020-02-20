/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import * as core from "@actions/core";

const name = core.getInput("name", { required: true });
const time = new Date().toTimeString();
core.setOutput("time", time);
console.log(`Hello2 :), ${name}!`);
