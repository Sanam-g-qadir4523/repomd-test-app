# repomd-sample-app

A minimal sample project with **intentionally planted issues**, used to demo
**RepoMD — Code Health Monitor**, built on IBM Bob 2.0.

## Planted Issues (for demo purposes only)

| Category | Count | Location |
|---|---|---|
| 🐛 Bugs / Code Quality | 5 | `src/app.js` (duplicate logic, dead code, high complexity) |
| 🔐 Security | 2 | `package.json` (outdated `lodash`, `axios`) |
| 🧪 Missing Tests | all functions | `src/app.js`, `src/utils.js` (no `__tests__` folder) |
| 📝 Documentation | all functions | `src/utils.js`, `calculatePrice` in `app.js` (no JSDoc) |

## Expected RepoMD Audit Output

Run:
```
Audit repomd-test-app using RepoMD workflow
```

Expected baseline Health Score: **~45/100**

Then run:
```
Fix security + generate tests for RepoMD
```

Expected post-fix Health Score: **~88/100**

## Note
This repo is deliberately imperfect — do not use as a real project template.
