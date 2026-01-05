import { createFileRoute } from '@tanstack/react-router';
import JobApplicationForm from '@/components/JobApplicationForm';

const JobForm = () => {
  return <JobApplicationForm />;
};

export const Route = createFileRoute('/forms/job-application')({
  component: JobForm,
});
