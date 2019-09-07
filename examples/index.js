/*
 * Created on Sat Sep 07 2019 3:13:25
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

const mojangApi = require('../src/index');

async function testAsyncAwait() {
  const batchUsernameToUuidResult = await mojangApi.batchUsernameToUuid(['Notch', 'NilsDev']);
  const usernameToUuidResult = await mojangApi.usernameToUuid('Notch');
  const uuidToProfileResult = await mojangApi.uuidToProfile('069a79f444e94726a5befca90e38aaf5');
  const uuidToUsernamesResult = await mojangApi.uuidToUsernames('069a79f444e94726a5befca90e38aaf5');

  console.log('--- batchUsernameToUuid ---');
  console.log(JSON.stringify(batchUsernameToUuidResult, null, 2));
  console.log('--- usernameToUuid ---');
  console.log(JSON.stringify(usernameToUuidResult, null, 2));
  console.log('--- uuidToProfile ---');
  console.log(JSON.stringify(uuidToProfileResult, null, 2));
  console.log('--- uuidToUsernames ---');
  console.log(JSON.stringify(uuidToUsernamesResult, null, 2));
}

testAsyncAwait();
