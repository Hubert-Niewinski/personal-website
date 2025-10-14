#!/bin/bash

# Pre-Commit Hook Test Script
# This script demonstrates what happens during a commit

echo "🔍 PRE-COMMIT HOOK SIMULATION"
echo "================================"
echo ""

# Stage 1: Formatting
echo "📝 Stage 1: Code Formatting (Prettier)"
echo "---------------------------------------"
echo "Command: prettier --write <staged-files>"
echo ""
npx prettier --check "src/components/ui/Icon.tsx" && echo "✅ Formatting passed" || echo "❌ Formatting failed"
echo ""

# Stage 2: Linting
echo "🔍 Stage 2: Code Linting (ESLint)"
echo "---------------------------------------"
echo "Command: eslint --fix <staged-files>"
echo ""
npx eslint src/components/ui/Icon.tsx && echo "✅ Linting passed" || echo "❌ Linting failed"
echo ""

# Stage 3: Testing
echo "🧪 Stage 3: Unit Tests (Jest)"
echo "---------------------------------------"
echo "Command: jest --bail --findRelatedTests <staged-files>"
echo ""
npm test -- --bail --findRelatedTests src/components/ui/Icon.tsx --passWithNoTests && echo "✅ Tests passed" || echo "❌ Tests failed"
echo ""

echo "================================"
echo "✨ All checks completed!"
echo ""
echo "💡 This is what runs automatically when you commit."
echo "   If all stages pass ✅, your commit succeeds."
echo "   If any stage fails ❌, your commit is aborted."
