import { useEffect, useState } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { useLocation, useNavigate } from 'react-router-dom';

import { ArrowIcon, CommentIcon } from 'assets';
import { getIssue } from 'services/getIssues';
import { IssueType } from 'types/issue';

import styles from './IssuePage.module.scss';

const DUMMY_DATA: IssueType = {
  title: '존재하지 않는 이슈입니다.',
  number: -1,
  body: '',
  created_at: '',
  html_url: '',
  comments: 0,
  user: null,
};

export const IssuePage = () => {
  const { pathname } = useLocation();
  const nav = useNavigate();
  const [issueData, setIssueData] = useState<IssueType | null>(null);

  useEffect(() => {
    getIssue(Number(pathname.slice(1)))
      .then((data) => {
        setIssueData(data);
      })
      .catch(() => {
        setIssueData({
          ...DUMMY_DATA,
          number: Number(pathname.slice(1)),
        });
      });
  }, [pathname]);

  function handleClickBackButton() {
    nav('/');
  }

  return (
    <>
      <div className={styles.header}>
        <button type='button' className={styles.backButton} onClick={handleClickBackButton}>
          <ArrowIcon />
        </button>
        <div className={styles.headerMetadata}>
          <span>Issue #{issueData ? issueData.number : 0}</span>
          <div className={styles.comment}>
            <CommentIcon />
            <span>{issueData ? issueData.comments : 0}</span>
          </div>
        </div>
      </div>
      {issueData ? (
        <>
          <div className={styles.mainTitle}>
            <h2>{issueData.title}</h2>
            <div className={styles.userInfo}>
              <img src={issueData.user?.avatar_url} alt='user avatar' />
              <h3>{issueData.user?.login}</h3>
              <span>{new Date(issueData.created_at).toLocaleDateString()}</span>
            </div>
          </div>
          <ReactMarkdown className={styles.markdown}>{issueData.body ?? ''}</ReactMarkdown>
        </>
      ) : (
        <div className={styles.mainTitle}>
          <h2>Loading...</h2>
        </div>
      )}
    </>
  );
};
