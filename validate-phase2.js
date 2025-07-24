#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// ANSI color codes
const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const RESET = '\x1b[0m';

let errors = 0;
let warnings = 0;
let passes = 0;

function log(message, type = 'info') {
  if (type === 'error') {
    console.log(`${RED}✗ ${message}${RESET}`);
    errors++;
  } else if (type === 'warning') {
    console.log(`${YELLOW}⚠ ${message}${RESET}`);
    warnings++;
  } else if (type === 'pass') {
    console.log(`${GREEN}✓ ${message}${RESET}`);
    passes++;
  } else {
    console.log(message);
  }
}

console.log('\n🎨 Phase 2 Validation: Visual Design System\n');

// Check 1: Verify design token implementation
console.log('1. Checking design token implementation...');
const globalsPath = path.join(__dirname, 'src/styles/globals.css');
if (fs.existsSync(globalsPath)) {
  const globalsContent = fs.readFileSync(globalsPath, 'utf8');
  
  // Check for LCH colors
  if (globalsContent.includes('lch(')) {
    log('LCH color system implemented', 'pass');
  } else {
    log('LCH color system not found in globals.css', 'error');
  }
  
  // Check for CSS variables
  if (globalsContent.includes(':root') && globalsContent.includes('--')) {
    log('CSS variables properly defined', 'pass');
  } else {
    log('CSS variables not properly defined', 'error');
  }
} else {
  log('globals.css not found', 'error');
}

// Check 2: Verify no animations in Phase 2
console.log('\n2. Checking for animations (should be none in Phase 2)...');
const srcDir = path.join(__dirname, 'src');
let animationFound = false;

function checkForAnimations(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      checkForAnimations(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css')) {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check for animation keywords
      if (content.includes('transition-') && !content.includes('transition-colors')) {
        log(`Animation/transition found in ${filePath}`, 'warning');
        animationFound = true;
      }
      if (content.includes('@keyframes') || content.includes('animate-')) {
        log(`Animation found in ${filePath}`, 'error');
        animationFound = true;
      }
    }
  });
}

checkForAnimations(srcDir);
if (!animationFound) {
  log('No animations found (correct for Phase 2)', 'pass');
}

// Check 3: Verify component styling
console.log('\n3. Checking component styling...');
const componentsToCheck = [
  'src/components/layout/header.tsx',
  'src/components/sections/hero-section.tsx',
  'src/components/sections/demos-section.tsx',
  'src/components/sections/process-section.tsx',
  'src/components/sections/team-section.tsx',
  'src/components/sections/cta-section.tsx'
];

componentsToCheck.forEach(componentPath => {
  const fullPath = path.join(__dirname, componentPath);
  if (fs.existsSync(fullPath)) {
    const content = fs.readFileSync(fullPath, 'utf8');
    
    // Check for Tailwind classes
    if (content.includes('className=')) {
      log(`${path.basename(componentPath)} has styling`, 'pass');
    } else {
      log(`${path.basename(componentPath)} missing styling`, 'error');
    }
    
    // Check for hardcoded colors
    if (content.match(/#[0-9a-fA-F]{3,6}/)) {
      log(`${path.basename(componentPath)} has hardcoded colors`, 'error');
    }
  } else {
    log(`${componentPath} not found`, 'error');
  }
});

// Check 4: Verify Inter font loading
console.log('\n4. Checking Inter font implementation...');
const layoutPath = path.join(__dirname, 'src/app/layout.tsx');
if (fs.existsSync(layoutPath)) {
  const layoutContent = fs.readFileSync(layoutPath, 'utf8');
  
  if (layoutContent.includes('Inter') && layoutContent.includes('next/font')) {
    log('Inter font properly implemented', 'pass');
  } else {
    log('Inter font not properly implemented', 'error');
  }
} else {
  log('layout.tsx not found', 'error');
}

// Check 5: Verify shadcn/ui integration
console.log('\n5. Checking shadcn/ui integration...');
const uiComponents = ['button', 'card', 'badge'];
let shadcnFound = true;

uiComponents.forEach(component => {
  const componentPath = path.join(__dirname, `src/components/ui/${component}.tsx`);
  if (!fs.existsSync(componentPath)) {
    log(`shadcn/ui ${component} component not found`, 'error');
    shadcnFound = false;
  }
});

if (shadcnFound) {
  log('All required shadcn/ui components present', 'pass');
}

// Check 6: Verify dependencies
console.log('\n6. Checking dependencies...');
const packageJsonPath = path.join(__dirname, 'package.json');
if (fs.existsSync(packageJsonPath)) {
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  const requiredDeps = ['tailwindcss', 'lucide-react', '@radix-ui/react-slot'];
  
  requiredDeps.forEach(dep => {
    if (packageJson.dependencies[dep] || packageJson.devDependencies[dep]) {
      log(`${dep} installed`, 'pass');
    } else {
      log(`${dep} not installed`, 'error');
    }
  });
}

// Summary
console.log('\n📊 Validation Summary:');
console.log(`${GREEN}Passed: ${passes}${RESET}`);
console.log(`${YELLOW}Warnings: ${warnings}${RESET}`);
console.log(`${RED}Errors: ${errors}${RESET}`);

if (errors === 0 && warnings === 0) {
  console.log(`\n${GREEN}✨ Phase 2 validation passed! Ready for Phase 3.${RESET}\n`);
  process.exit(0);
} else if (errors === 0) {
  console.log(`\n${YELLOW}⚠️  Phase 2 validation passed with warnings.${RESET}\n`);
  process.exit(0);
} else {
  console.log(`\n${RED}❌ Phase 2 validation failed. Please fix errors before proceeding.${RESET}\n`);
  process.exit(1);
}