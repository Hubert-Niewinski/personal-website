# Pre-Commit Hook Setup

This project uses a pre-commit hook to ensure code quality before commits are made to the repository.

## 🔍 What Gets Checked

The pre-commit hook runs **three stages** in order:

### 1. **Code Formatting** (Prettier)

- Automatically formats code to maintain consistent style
- Checks: `.js`, `.jsx`, `.ts`, `.tsx`, `.json`, `.md`, `.css` files
- Configuration: `.prettierrc.json`

### 2. **Code Linting** (ESLint)

- Checks for code quality issues and potential bugs
- Automatically fixes auto-fixable issues
- Configuration: `eslint.config.mjs`

### 3. **Unit Tests** (Jest)

- Runs **all tests** in the test suite
- Uses `--bail` to stop on first failure
- Uses `--passWithNoTests` to not fail if no tests exist

**Important**: Each stage must pass before the next one runs. If any stage fails, the commit is aborted.

## 📦 Technologies Used

- **Husky**: Git hooks made easy
- **lint-staged**: Run linters on staged files only
- **Prettier**: Code formatter
- **ESLint**: JavaScript/TypeScript linter
- **Jest**: Testing framework

## 🚀 Available Scripts

### Formatting

```bash
# Check formatting issues
pnpm format:check

# Fix formatting issues
pnpm format
```

### Linting

```bash
# Check linting issues
pnpm lint

# Fix auto-fixable linting issues
pnpm lint:fix
```

### Testing

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage
```

## 🛠️ Setup (Already Done)

The pre-commit hook is already set up in this project. If you need to reinstall:

```bash
# Install dependencies
pnpm install

# Initialize Husky
pnpm prepare
```

## 📝 How It Works

When you commit changes:

1. **Git stages your files** (`git add`)
2. **Pre-commit hook triggers** automatically
3. **lint-staged runs** on staged files:
   - For `.js`, `.jsx`, `.ts`, `.tsx`:
     - ✨ Prettier formats the code
     - 🔍 ESLint checks and fixes issues
     - 🧪 Jest runs **all tests**
   - For `.json`, `.md`, `.css`:
     - ✨ Prettier formats the code
4. **If all checks pass**: Commit succeeds ✅
5. **If any check fails**: Commit is aborted ❌

## 🎯 Example Workflow

```bash
# Make changes to files
vim src/components/MyComponent.tsx

# Stage your changes
git add src/components/MyComponent.tsx

# Try to commit
git commit -m "feat: add new component"

# Pre-commit hook runs automatically:
# ✓ Formatting... (passes)
# ✓ Linting... (passes)
# ✓ Testing... (passes)
# ✓ Commit successful!
```

## 🔧 Configuration Files

### `.prettierrc.json`

Prettier configuration for code formatting:

- Single quotes
- Semicolons
- 100 character line width
- 2 spaces for indentation

### `eslint.config.mjs`

ESLint configuration for code linting

### `jest.config.js`

Jest configuration for running tests

### `package.json` → `lint-staged`

Configuration for what runs on staged files

### `.husky/pre-commit`

The actual pre-commit hook script

## ⚙️ Customization

### Skip Pre-Commit Hook (Not Recommended)

If you absolutely need to skip the pre-commit hook:

```bash
git commit -m "your message" --no-verify
```

**Warning**: Only use this in emergencies. It bypasses all quality checks.

### Modify Checks

Edit `package.json` under `lint-staged` section:

```json
"lint-staged": {
  "*.{js,jsx,ts,tsx}": [
    "prettier --write",
    "eslint --fix",
    "jest --bail --passWithNoTests"
  ]
}
```

## 🐛 Troubleshooting

### Pre-commit hook not running

```bash
# Reinstall Husky
pnpm prepare
```

### Prettier formatting conflicts

```bash
# Format all files
pnpm format
```

### ESLint errors

```bash
# Check for linting errors
pnpm lint

# Try to auto-fix
pnpm lint:fix
```

### Tests failing

```bash
# Run tests locally
pnpm test

# Run tests in watch mode to debug
pnpm test:watch
```

### Husky not installed

```bash
# Install Husky
pnpm add -D husky
pnpm prepare
```

## 📊 Benefits

- ✅ **Consistent code style** across the team
- ✅ **Catch bugs early** before they reach the repository
- ✅ **Automatic fixes** for common issues
- ✅ **Fast feedback loop** - know immediately if something is wrong
- ✅ **Full test coverage** - all tests run before commit
- ✅ **Prevents broken code** from being committed

## 🎓 Best Practices

1. **Don't skip the hook** - It's there to help you
2. **Fix issues locally** before committing
3. **Write tests** for your code
4. **Run tests manually** if you want faster feedback: `pnpm test:watch`
5. **Format before staging** if you want: `pnpm format`

## 📚 Additional Resources

- [Husky Documentation](https://typicode.github.io/husky/)
- [lint-staged Documentation](https://github.com/okonet/lint-staged)
- [Prettier Documentation](https://prettier.io/docs/en/)
- [ESLint Documentation](https://eslint.org/docs/latest/)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
