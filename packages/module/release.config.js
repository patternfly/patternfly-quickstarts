module.exports = {
  branches: [
    'do-not-delete-v6',
    { name: 'main', channel: 'prerelease', prerelease: 'prerelease' },
    { name: '6.2.x', channel: 'prerelease-bugfix', range: '6.2.x' },
  ],
  analyzeCommits: {
    preset: 'angular',
  },
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'angular',
        releaseRules: [
          { type: 'chore', scope: 'deps', release: 'patch' },
          { type: 'chore', scope: 'ci-release', release: 'patch' },
        ],
      },
    ],
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
    '@semantic-release/npm',
  ],
  tagFormat: 'v${version}',
  dryRun: true
};