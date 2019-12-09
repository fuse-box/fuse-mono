import { fusebox } from 'fuse-box';
const fuse = fusebox({
  homeDir: '../',
  entry: 'Website/src/index.ts',
  devServer: true,
  webIndex: true,
});

fuse.runDev();