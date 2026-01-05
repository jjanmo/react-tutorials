import { createFileRoute, Link } from '@tanstack/react-router';

const Home = () => {
  return (
    <div>
      <Link to="/forms/job-application">Job Application</Link>
    </div>
  );
};

export const Route = createFileRoute('/')({
  component: Home,
});
