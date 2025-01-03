import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen text-white bg-gradient-to-tr from-emerald-900 via-slate-900 to-emerald-900 bg-fixed">
      <SignUp />
    </div>
  );
}
