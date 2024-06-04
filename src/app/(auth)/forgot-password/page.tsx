import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Forgot Password',
};

function ForgotPassword() {
  return (
    <h1 className="flex justify-center pt-64 text-5xl">FORGOT PASSWORD</h1>
  );
}

export default ForgotPassword;
