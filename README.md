# Next.js v16.2.6 Bug Report: Client-Side Interactivity Freeze on Back Button Navigation

This repository serves as a Minimal Reproducible Example (MRE) created to document and report a critical regression found in **Next.js v16.2.6**. 

* **Reproduction Repository:** [nextjs-16.2.6-bug-report](https://github.com/barisdemirr/nextjs-16.2.6-bug-report)

## 🛠️ To Reproduce

1. Start the development server (`npm run dev`).
2. Open the application in any browser (Chrome, Edge, etc.).
3. Navigate from the initial page to any other route using client-side navigation.
4. Click the browser's **"Back"** button to return to the previous page.
5. Try interacting with any element that requires JavaScript (or check if initial scripts run).
6. Observe that **scripts are not executing and no errors are logged in the console**.

## 🔄 Current vs. Expected Behavior

* **Current Behavior:** Upon navigating back via browser history, the page UI restores visually from the cache perfectly. However, all client-side JavaScript execution completely freezes up, and client-side interactions become totally unresponsive with absolute lack of error logs, warnings, or stack traces in the browser console.
* **Expected Behavior:** When navigating back via the browser history, the page should restore correctly, and all client-side scripts should execute and remain functional without silent failures.

## 💻 Environment Information

* **OS:** Windows 10 Pro
* **Browsers:** Tested and verified on multiple browsers (Chrome, Edge, etc.)
* **Next.js Version:** 16.2.6 (Regression present)
* **Node.js Version:** v24.11.1
* **React Version:** 19.2.4

### 🎯 Affected Scope
* **Affected Area(s):** Cache Components, Script (`next/script`), Route Handlers
* **Affected Stage(s):** `next dev` (local), `next build` (local)

## 📝 Additional Context

This issue was highly frustrating to debug because of the absolute lack of error logs, warnings, or stack traces in the browser console. The page visually restores itself from the cache perfectly, but all JavaScript execution completely freezes up and client-side interactions become totally unresponsive only after using the browser's "Back" button.

I tested this behavior thoroughly across multiple browsers (including Chrome and Edge) on Windows 10 Pro, and the result is entirely consistent. It acts as a major blocker for daily local development since history navigation is a frequent part of the workflow.

The issue only triggered immediately after upgrading to Next.js v16.2.6. Rolling back to the previous working version instantly resolved the issue, which strongly indicates a regression within the router's client-side caching mechanism or bfcache handling in this specific release.
