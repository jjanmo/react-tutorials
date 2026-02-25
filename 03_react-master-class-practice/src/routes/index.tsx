import Accordion from '@/components/Accordion';
import { REACT_MASTER_CLASS_PART2_SECTIONS, REACT_MASTER_CLASS_PART3_SECTIONS } from '@/constants/home';
import { createFileRoute } from '@tanstack/react-router';

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-10">
      <div className="mx-auto max-w-[960px] flex flex-row gap-8">
        <Accordion title="리액트 마스터 클래스 Part2" sections={REACT_MASTER_CLASS_PART2_SECTIONS} />
        <Accordion title="리액트 마스터 클래스 Part3" sections={REACT_MASTER_CLASS_PART3_SECTIONS} />
      </div>
    </div>
  );
};

export const Route = createFileRoute('/')({
  component: Home,
});
