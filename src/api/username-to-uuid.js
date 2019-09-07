/*
 * Created on Sat Sep 07 2019 2:35:41
 *
 * MIT License
 *
 * Copyright (c) 2019 Nils Müller
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

const request = require('request');

module.exports = function usernameToUuid(username, date) {
  /* eslint-disable consistent-return */
  return new Promise((resolve, reject) => {
    /* eslint-enable consistent-return */
    if (username === undefined || !RegExp(/^[a-zA-Z0-9_]{1,16}$/).test(username)) {
      return reject(new Error(`username '${username}' is not valid`));
    }

    const options = {
      method: 'GET',
      url: `https://api.mojang.com/users/profiles/minecraft/${username}`,
      json: true,
    };

    if (date) {
      options.qs = {
        at: (date instanceof Date)
          ? Math.round(date.getTime() / 1000)
          : date,
      };
    }

    request(options, (err, response, body) => {
      if (err) return reject(err);

      if (response.statusCode === 204) return reject(new Error('username does not exists'));
      if (response.statusCode !== 200) return reject(new Error(`request not successful '${response.statusCode}' '${JSON.stringify(body)}'`));

      return resolve(body);
    });
  });
};
