# Setup Guide for GitHub Repository

This guide walks you through setting up the `churchtools-extension-points` package on GitHub.

## Step 1: Create GitHub Repository

1. Go to GitHub: https://github.com/ChurchToolsGmbH
2. Click "New repository"
3. **Repository name**: `churchtools-extension-points`
4. **Description**: `TypeScript type definitions for ChurchTools extension points`
5. **Visibility**: Public (so extensions can install it)
6. **Do NOT** initialize with README, .gitignore, or license (we already have them)
7. Click "Create repository"

## Step 2: Initialize Git and Push

In the `churchtools-extension-points` directory, run:

```bash
cd /Users/hubermat/Work/ChurchToolsGmbH/churchtools-extension-points

# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: ChurchTools extension points type definitions"

# Add GitHub remote (replace with your actual repo URL)
git remote add origin git@github.com:ChurchToolsGmbH/churchtools-extension-points.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Build and Test the Package

```bash
# Install dependencies (just TypeScript)
npm install

# Build the type definitions
npm run build

# Verify dist/ was created with .d.ts files
ls -la dist/
```

You should see:
```
dist/
├── index.js
├── index.d.ts
├── main.js
├── main.d.ts
├── admin.js
├── admin.d.ts
├── calendar-dialog.js
├── calendar-dialog.d.ts
├── person-details.js
└── person-details.d.ts
```

## Step 4: Create GitHub Release (Optional)

To create a versioned release:

1. Go to your repository on GitHub
2. Click "Releases" → "Create a new release"
3. **Tag version**: `v1.0.0`
4. **Release title**: `v1.0.0 - Initial Release`
5. **Description**:
   ```
   Initial release of ChurchTools extension points type definitions.

   Includes types for:
   - Main module extension point
   - Admin configuration extension point
   - Calendar dialog extension point
   - Person details sidebar extension point
   ```
6. Click "Publish release"

## Step 5: Test Installation in Extension Boilerplate

In the `extension-boilerplate` directory:

```bash
cd /Users/hubermat/Work/ChurchToolsGmbH/extension-boilerplate

# Install the package from GitHub
npm install

# This should install @churchtools/extension-points from GitHub
# Verify it's installed
ls node_modules/@churchtools/extension-points

# Build the extension
npm run build

# Should build successfully with no errors
```

## Step 6: Publish to npm (Optional)

If you want to publish to npm registry (makes installation faster):

```bash
cd /Users/hubermat/Work/ChurchToolsGmbH/churchtools-extension-points

# Login to npm (if not already)
npm login

# Publish (requires @churchtools organization membership)
npm publish --access public
```

After publishing to npm, update `extension-boilerplate/package.json`:

```json
"dependencies": {
    "@churchtools/extension-points": "^1.0.0"
}
```

## Verification Checklist

- ✅ Repository created on GitHub
- ✅ Code pushed to GitHub
- ✅ `npm run build` works
- ✅ Extension boilerplate can install and use the package
- ✅ TypeScript types are available in extensions
- ✅ (Optional) Package published to npm

## Updating the Package

When you need to add new extension points:

1. Add the new `.ts` file to `src/`
2. Export it from `src/index.ts`
3. Update `README.md` with documentation
4. Bump version in `package.json`
5. Commit and push
6. Create a new GitHub release
7. (Optional) Publish to npm

Extensions using the package can then update:

```bash
npm update @churchtools/extension-points
```

## Troubleshooting

### Package not found

If extensions can't install the package:
- Verify the repository is **public** on GitHub
- Check the package.json `repository` URL is correct
- Try the full GitHub URL: `"@churchtools/extension-points": "github:ChurchToolsGmbH/churchtools-extension-points"`

### Types not working

If TypeScript can't find the types:
- Verify `dist/` directory exists with `.d.ts` files
- Check `package.json` has correct `"types"` field
- Run `npm run build` in the types package
- Reinstall in the extension: `npm install --force`

### Build fails

If `npm run build` fails:
- Check TypeScript version: `npm install typescript@latest`
- Verify `tsconfig.json` is correct
- Check for TypeScript errors: `npx tsc --noEmit`

## Summary

The `churchtools-extension-points` package provides:
- ✅ Centralized type definitions for all extension points
- ✅ Versioned and maintained by ChurchTools
- ✅ Easy to install in any extension
- ✅ No runtime code, only types
- ✅ Works with both npm and GitHub installation

Extensions can now focus on implementation without managing type definitions!
