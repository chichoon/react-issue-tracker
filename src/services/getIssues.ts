import { Octokit } from 'octokit';

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export async function getIssues(page: number) {
  const res = await octokit.request('GET /repos/{owner}/{repo}/issues', {
    owner: 'facebook',
    repo: 'react',
    page,
  });
  if (res.status !== 200) {
    return [];
  }
  return res.data.sort((a, b) => b.comments - a.comments);
}
