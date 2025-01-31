# Express.js Server Hangs on Large POST Requests

This repository demonstrates a common issue in Express.js applications where the server hangs or becomes unresponsive when processing large POST requests due to synchronous data handling.  The `bug.js` file shows the problematic code, while `bugSolution.js` provides a corrected version using asynchronous processing.

## Problem

The provided code processes incoming POST data synchronously. If the data is large or the processing takes a significant amount of time, the event loop is blocked. This prevents other requests from being handled, resulting in a frozen or unresponsive server.

## Solution

The solution involves using asynchronous operations to process the incoming data. This allows the event loop to continue handling other requests while the processing occurs in the background.  The corrected code uses `async/await` for better readability and error handling.
