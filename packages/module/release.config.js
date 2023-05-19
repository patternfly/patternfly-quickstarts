module.exports = {
  branches: [{ name: 'v4', channel: 'prerelease' }],
  analyzeCommits: {
    preset: 'angular',
  },
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
    '@semantic-release/npm',
  ],
  tagFormat: 'v${version}',
};
