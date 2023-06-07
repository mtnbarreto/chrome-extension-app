import { defineManifest } from '@crxjs/vite-plugin'
import packageJson from './package.json'
const { version } = packageJson

const [major, minor, patch, label = '0'] = version
  .replace(/[^\d.-]+/g, '')
  .split(/[.-]/)

export default defineManifest(async (env) => ({
  name:
    env.mode === 'staging'
      ? '[INTERNAL] RookieRep.ai'
      : 'RookieRep.ai - AI powered sales autopilot',
  description: 'RookieRep.ai - sales bla bla bla',
  version: `${major}.${minor}.${patch}.${label}`,
  version_name: version,
  icons: {
    '16': 'icons/icon-16.png',
    '32': 'icons/icon-32.png',
    '48': 'icons/icon-48.png',
    '128': 'icons/icon-128.png',
  },
  action: {
    default_title: 'Default Action Title, default_popup: index.html',
  },
  background: {
    service_worker: 'src/pages/background/background.ts',
  },
  content_scripts: [
    {
      js: ['src/pages/content/actions.js'],
      matches: [
        'https://mail.google.com/mail/u/0/#*/*',
        'https://mail.google.com/mail/u/0/#label/*/*',
      ],
    },
  ],
  manifest_version: 3,
}))
