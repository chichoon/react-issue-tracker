import { useEffect, useState } from 'react';

import { IssueType } from 'types/issue';
import { getIssues } from 'services/getIssues';
import { IssueDataElement } from './IssueDataElement';
import { AdvertiseElement } from './AdvertiseElement';

import styles from './MainPage.module.scss';

export const MainPage = () => {
  const [dataList, setDataList] = useState<IssueType[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getIssues(page).then((data) => {
      setDataList(data);
    });
  }, [page]);

  return (
    <div>
      <ul className={styles.list}>
        {dataList.map((data, index) =>
          index % 5 === 0 && index !== 0 ? (
            <>
              <AdvertiseElement />
              <IssueDataElement key={data.number} issueData={data} />
            </>
          ) : (
            <IssueDataElement key={data.number} issueData={data} />
          )
        )}
      </ul>
    </div>
  );
};
