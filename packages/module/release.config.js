module.exports = {
  branches: [
    'do-not-delete',
    { name: 'main', channel: 'prerelease', prerelease: 'prerelease' },
    { name: 'v6', channel: 'prerelease-v6', range: '6.x' },
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
