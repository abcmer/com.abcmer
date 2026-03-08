# Next.js Migration

This project has been migrated to Next.js.

The new Next.js project is located at: ../com.abcmer-nextjs

## Migration notes
- Node version: 20 (via nvm)
- Next.js version: 16 (App Router)
- Original framework: Create React App (React 16) with React Router v4
- Original dependencies: @material-ui/core v4, @material-ui/icons, bootstrap, reactstrap, clsx, react-router-dom

## Migration decisions
- MUI v4 (@material-ui/core) upgraded to MUI v5 (@mui/material); makeStyles replaced with sx prop
- react-router-dom replaced by Next.js App Router file-based routing
- Routes: / (PhotoGrid) and /projects (Projects)
- TopNav and LeftDrawer use 'use client' directive (MUI requires it)
- PhotoGrid uses 'use client' directive (window.innerWidth, setInterval)
- Projects is a Server Component (static data only)
- Static assets copied to public/static/
- photoNames.json (S3 URLs) copied to src/photoNames.json
- reactstrap preserved for Projects grid layout
