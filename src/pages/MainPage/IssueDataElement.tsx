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
        <span>작성자: {issueData.user?.login}</span>
        <span>작성일: {new Date(issueData.created_at).toLocaleDateString()} </span>
        <div className={styles.issueCommentWrapper}>
          <CommentIcon />
          {issueData.comments}
        </div>
      </div>
    </Link>
  </li>
);
