# JavaScript Runtime Environment — Teaching Demos

Simple, no-framework code examples to teach: Call Stack, WebAPIs,
Microtask/Task Queues, and the Event Loop.

No flashy output — just `console.log` statements designed to be predicted
BEFORE running, then verified after.

## Files

| File                          | Concept                                   |
|--------------------------------|--------------------------------------------|
| `01_call_stack.js`             | Call stack push/pop order (LIFO)          |
| `02_blocking.js`                | Single-threaded blocking behavior         |
| `03_webapi_settimeout.js`      | setTimeout delegated to WebAPI            |
| `04_microtask_vs_task.js`      | Microtask queue runs before Task queue    |
| `05_event_loop_full.js`        | Full combined event loop walkthrough      |
| `index.html`                   | Browser version (adds DOM click events)   |

## How to run in VS Code (Node.js)

1. Install Node.js if you don't have it: https://nodejs.org
2. Open this folder in VS Code: `code jre-demo`
3. Open the built-in terminal (`` Ctrl+` ``)
4. Run any file:
   ```bash
   node 01_call_stack.js
   node 02_blocking.js
   node 03_webapi_settimeout.js
   node 04_microtask_vs_task.js
   node 05_event_loop_full.js
   ```
5. Before running, ask students to PREDICT the console.log order.
   Then run it and compare.

## How to run in the browser

1. Double-click `index.html` (or right-click → Open With → your browser)
2. Open DevTools Console: `F12` (Windows/Linux) or `Cmd+Opt+I` (Mac)
3. Click the button on the page and watch the console output order.

## How to commit this to your GitHub repo

Run these commands from inside the `jre-demo` folder:

```bash
# initialize git (skip if repo already exists)
git init

# stage all files
git add .

# commit
git commit -m "Add JS Runtime Environment teaching demos"

# link to your GitHub repo (replace with your actual repo URL)
git remote add origin https://github.com/<your-username>/<your-repo>.git

# push
git branch -M main
git push -u origin main
```

If you already have a repo and just want to add these files to it:

```bash
cp -r jre-demo/* /path/to/your/existing-repo/
cd /path/to/your/existing-repo/
git add .
git commit -m "Add JS Runtime Environment teaching demos"
git push
```

## Suggested classroom flow

1. Run `01_call_stack.js` — trace the stack on a whiteboard alongside it.
2. Run `02_blocking.js` — let students feel the "freeze" effect.
3. Run `03_webapi_settimeout.js` — ask why "2" prints before "3" even with 0ms delay.
4. Run `04_microtask_vs_task.js` — get students to predict order before running.
5. Run `05_event_loop_full.js` — the "boss level" exercise, combines everything.
6. Open `index.html` in browser — show DOM click events also flow through the Task Queue.
