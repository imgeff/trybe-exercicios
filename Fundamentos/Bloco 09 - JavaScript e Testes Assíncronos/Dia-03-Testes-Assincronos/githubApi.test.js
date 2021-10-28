// // githubApi.test.js

const getRepos = (url) => (
  fetch(url)
    .then((response) => response.json())
    .then((data) => data.map((repo) => repo.name))
);

it('gets a list of repositories names', async () => {
  const url = 'https://api.github.com/orgs/tryber/repos';

  const result = await getRepos(url);
  
  expect(result).toContain('sd-01-week4-5-project-todo-list');
  expect(result).toContain('sd-01-week4-5-project-meme-generator');
});