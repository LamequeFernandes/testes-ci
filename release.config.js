module.exports = {
    branches: ['main'],
    repositoryUrl: 'https://github.com/LamequeFernandes/testes-ci',
    plugins: [
      '@semantic-release/commit-analyzer',
      '@semantic-release/release-notes-generator',
      '@semantic-release/github',
      [
        '@semantic-release/npm',
        {
          npmPublish: false
        }
      ],
      ["@semantic-release/git", {
        "assets": ["main.js"],
        "message": "chore(release)"
      }],
    ]
}
