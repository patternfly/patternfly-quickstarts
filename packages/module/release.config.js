module.exports = {
  branches: [
    'do-not-delete',
    { name: 'v4', channel: 'prerelease-v4', range: '4.x' },
    { name: 'main', channel: 'prerelease', prerelease: 'prerelease' },
    { name: 'v5', channel: 'prerelease-v5', range: '5.4.x' },
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
  tagFormat: 'prerelease-v${version}',
  dryRun: true,
};
