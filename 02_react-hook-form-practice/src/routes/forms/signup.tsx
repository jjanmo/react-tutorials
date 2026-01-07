import { createFileRoute } from '@tanstack/react-router';
import SignupForm from '@/components/SignupForm';

const SignupFormPage = () => {
  return <SignupForm />;
};

export const Route = createFileRoute('/forms/signup')({
  component: SignupFormPage,
});
