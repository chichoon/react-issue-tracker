import { Octokit } from 'octokit';

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export async function getIssues(page: number) {
  const res = await octokit.request('GET /repos/{owner}/{repo}/issues?sort=comments&state=open', {
    owner: 'facebook',
    repo: 'react',
    page,
  });
  if (res.status !== 200) {
    return [];
  }
  return res.data;
}

export async function getIssue(id: number) {
  const res = await octokit.request('GET /repos/{owner}/{repo}/issues/{issue_number}', {
    owner: 'facebook',
    repo: 'react',
    issue_number: id,
  });

  if (res.status !== 200) {
    return null;
  }
  return res.data;
}
