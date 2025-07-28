# Deploy Command

Safely deploys the application to specified environments with comprehensive pre-flight checks and rollback capabilities.

## Usage

```
/deploy [environment] [--flags]
```

## Arguments

- `environment` (optional):
  - `preview`: Deploy to preview/staging (default)
  - `production`: Deploy to production
  - `test`: Deploy to test environment

## Flags

- `--force`: Skip non-critical checks
- `--dry-run`: Show what would be deployed without deploying
- `--rollback`: Rollback to previous deployment
- `--tag=[version]`: Tag deployment with version
- `--no-cache`: Clear cache after deployment

## Examples

```bash
/deploy                          # Deploy to preview environment
/deploy production              # Deploy to production (with extra checks)
/deploy --dry-run              # See what would be deployed
/deploy production --force      # Skip non-critical warnings
/deploy --rollback             # Rollback last deployment
/deploy production --tag=v1.2.0 # Tagged production release
```

## Execution Process

### 1. **Pre-Flight Checks**

#### For ALL Deployments:
```
✓ Git status clean (no uncommitted changes)
✓ On correct branch (main/master for production)
✓ All tests passing
✓ TypeScript compilation successful
✓ No console errors in build
```

#### Additional for PRODUCTION:
```
✓ Full validation passing (all layers)
✓ Lighthouse scores meet thresholds:
  - Performance: 90+
  - Accessibility: 90+
  - Best Practices: 90+
  - SEO: 90+
✓ Bundle size within budget (<150KB)
✓ Security audit passing
✓ Recent QA approval (within 24h)
✓ No TODO or FIXME comments
✓ Documentation up to date
```

### 2. **Build Process**
```bash
# Clean previous build
rm -rf .next out

# Run production build
npm run build

# Analyze build output
- Check for build warnings
- Verify all pages built
- Analyze bundle composition
- Check for missing dependencies
```

### 3. **Deployment Steps**

#### Preview Deployment:
1. Deploy to Vercel preview URL
2. Run smoke tests
3. Generate preview link
4. Notify team (if configured)

#### Production Deployment:
1. Create deployment tag in git
2. Deploy to Vercel production
3. Run production smoke tests
4. Verify deployment health
5. Update deployment tracking
6. Clear CDN cache if needed
7. Monitor for 5 minutes

### 4. **Post-Deployment**

## Output Format

### Pre-Flight Summary
```
🚀 Deployment Pre-Flight Check
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Target: PRODUCTION
Branch: main (up to date)
Commit: a3b2c1d "feat: add testimonials section"

✅ Code Quality
   └─ TypeScript: 0 errors
   └─ ESLint: 0 warnings
   └─ Tests: 42 passing

✅ Performance
   └─ Lighthouse: 94/96/92/98
   └─ Bundle: 144KB (96% of budget)
   └─ FPS: 60 stable

⚠️  Warnings (non-blocking)
   └─ 2 TODO comments found
   └─ Image optimization possible (save 8KB)

Ready to deploy? [Y/n]
```

### Deployment Progress
```
📦 Building application...
   ✓ Compiled successfully in 45.2s
   ✓ Collecting page data
   ✓ Generating static pages (7/7)
   ✓ Finalizing page optimization

📤 Deploying to Vercel...
   ✓ Uploading build artifacts
   ✓ Assigning domains
   ✓ Updating edge config
   ✓ Invalidating cache

🔍 Running smoke tests...
   ✓ Homepage loads successfully
   ✓ All routes accessible
   ✓ API endpoints responding
   ✓ Assets loading correctly

✅ Deployment Successful!

Production URL: https://novum-labs.com
Preview URL: https://novum-labs-a3b2c1d.vercel.app
Deployment ID: dpl_FKj3k2jKLjk3

Monitoring for 5 minutes...
[=====>    ] 2:30 remaining
```

### Rollback Output
```
⏮️  Rollback Initiated
━━━━━━━━━━━━━━━━━━━━━

Current: v1.2.1 (deployed 10 minutes ago)
Target: v1.2.0 (last stable)

Proceed with rollback? [y/N]

Rolling back...
✓ Reverted to previous deployment
✓ Cache cleared
✓ Health check passed

Rollback complete. Now running v1.2.0
```

## Health Checks

After deployment, automatic health checks run:

1. **Availability Check**
   - Homepage returns 200
   - All routes accessible
   - No 404 or 500 errors

2. **Performance Check**
   - Time to First Byte < 200ms
   - Core Web Vitals in range
   - No client-side errors

3. **Functional Check**
   - Interactive elements work
   - Forms submit correctly
   - API connections valid

## Rollback Strategy

Automatic rollback triggers if:
- Error rate > 5% in first 5 minutes
- Page load time > 3 seconds
- Core functionality broken
- Manual rollback requested

## Environment Variables

Handled automatically per environment:
```
Preview:
- NEXT_PUBLIC_API_URL=https://api-preview.novum-labs.com
- NEXT_PUBLIC_ENVIRONMENT=preview

Production:
- NEXT_PUBLIC_API_URL=https://api.novum-labs.com
- NEXT_PUBLIC_ENVIRONMENT=production
```

## Integration Points

- **With Validation**: Must pass before deploy
- **With Git**: Creates deployment tags
- **With Monitoring**: Sends deployment events
- **With Team**: Notifies via Slack/Discord

## Deployment Checklist

Before production deployment:
- [ ] All PRs merged to main
- [ ] Validation passing on all layers
- [ ] QA has signed off
- [ ] Performance budgets met
- [ ] Backup plan ready
- [ ] Team notified
- [ ] Monitoring dashboards open

## Error Handling

1. **Build Failures**
   ```
   ❌ Build failed: Cannot find module './components/Hero'
   
   Check import paths and file names
   Run locally: npm run build
   ```

2. **Deployment Timeout**
   ```
   ❌ Deployment timed out after 5 minutes
   
   Possible causes:
   - Large bundle size
   - Network issues
   - Vercel service problems
   ```

3. **Failed Health Checks**
   ```
   ❌ Post-deployment health check failed
   
   Issue: Homepage returning 500 error
   Action: Automatic rollback initiated
   ```

## Best Practices

- Always deploy to preview first
- Monitor for 10-15 minutes after production deploy
- Tag production releases with version numbers
- Keep rollback plan ready
- Deploy during low-traffic periods
- Have team member available for issues

## Notes

- Deployments are atomic (all or nothing)
- Zero-downtime deployments enabled
- Automatic SSL and CDN included
- Deploy hooks can trigger external services
- Deployment history kept for 90 days