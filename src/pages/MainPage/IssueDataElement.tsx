import { Link } from 'react-router-dom';

import { IssueType } from 'types/issue';
import { CommentIcon } from 'assets';

import styles from './IssueDataElement.module.scss';

interface Props {
  issueData: IssueType;
}

export const IssueDataElement = ({ issueData }: Props) => (
  <li className={styles.issueWrapper}>
    <Link to={`/${issueData.number}`}>
      <div className={styles.issueTitle}>
        <span>#{issueData.number}</span>
        <span>{issueData.title}</span>
      </div>
      <div className={styles.issueInfo}>
        <div className={styles.userInfo}>
          <span>작성자: </span>
          <img src={issueData.user?.avatar_url} alt={`${issueData.user?.login} avatar`} />
          <span>{issueData.user?.login}</span>
        </div>
        <span>작성일: {new Date(issueData.created_at).toLocaleDateString()} </span>
        <div className={styles.issueCommentWrapper}>
          <CommentIcon />
          {issueData.comments}
        </div>
      </div>
    </Link>
  </li>
);
