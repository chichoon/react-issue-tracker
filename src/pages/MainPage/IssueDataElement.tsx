import { IssueType } from 'types/issue';

import styles from './IssueDataElement.module.scss';

interface Props {
  issueData: IssueType;
}

export const IssueDataElement = ({ issueData }: Props) => (
  <li className={styles.issueWrapper}>
    <div className={styles.issueTitle}>
      <span>#{issueData.number}</span>
      <span>{issueData.title}</span>
    </div>
    <div className={styles.issueInfo}>
      <span>작성자: {issueData.user?.login}</span>
      <span>작성일: {new Date(issueData.created_at).toLocaleDateString()} </span>
    </div>
  </li>
);
