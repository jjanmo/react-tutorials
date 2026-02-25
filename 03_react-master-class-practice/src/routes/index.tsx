import { createFileRoute, Link } from '@tanstack/react-router';

const Home = () => {
  return (
    <div>
      <Link to="/practices/36">36. 제어 컴포넌트 성능 지연 테스트</Link>
    </div>
  );
};

export const Route = createFileRoute('/')({
  component: Home,
});
