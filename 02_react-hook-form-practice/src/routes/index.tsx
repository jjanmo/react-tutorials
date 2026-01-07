import { createFileRoute, Link } from '@tanstack/react-router';
import styles from '@/styles/home.module.css';
import { ROUTE_DATA } from '@/constants';

const Home = () => {
  return (
    <ul className={styles.listContainer}>
      {ROUTE_DATA.map(({ path, label, className }) => {
        return (
          <li key={path} className={[styles.listItem, styles[className]].join(' ')}>
            <Link to={path}>{label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export const Route = createFileRoute('/')({
  component: Home,
});
