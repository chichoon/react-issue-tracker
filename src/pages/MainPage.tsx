import { Octokit } from 'octokit';
import { useEffect, useState } from 'react';

import { IssueType } from 'types/issue';
import { getIssues } from 'services/getIssues';

export const MainPage = () => {
  const [dataList, setDataList] = useState<IssueType[]>([]);
  const [page, setPage] = useState(1);
  const octokit = new Octokit({
    auth: process.env.REACT_APP_GITHUB_TOKEN,
  });

  useEffect(() => {
    getIssues(page).then((data) => {
      setDataList(data);
      console.log(data);
    });
  }, []);

  return (
    <div>
      <ul>
        {dataList.map((data, index) =>
          index % 5 === 0 && index !== 0 ? (
            <>
              <li>광고</li>
              <li key={data.number}>{data.title}</li>
            </>
          ) : (
            <li key={data.number}>{data.title}</li>
          )
        )}
      </ul>
    </div>
  );
};
