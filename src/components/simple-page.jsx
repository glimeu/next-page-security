import Link from 'next/link';

function Anchor({ children, href, ...rest }) {
  return (
    <Link href={href} passHref>
      <a className='px-6 py-2 rounded-lg transition-colors text-white bg-violet-500 hover:bg-violet-600' {...rest}>{children}</a>
    </Link>
  );
}

export function SimplePage({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <main className='flex flex-col items-center gap-6'>
        <h1>{children}</h1>

        <div className="flex items-center justify-center flex-wrap gap-4 max-w-sm">
          <Anchor href="/">Home</Anchor>
          <Anchor href="/signup">SignUp</Anchor>
          <Anchor href="/signin">SignIn</Anchor>
          <Anchor href="/dashboard">Dashboard</Anchor>
          <Anchor href="/course">Course</Anchor>
          <Anchor href="/course/aula-01">Course Class</Anchor>
          <Anchor href="/students">Students</Anchor>
        </div>
      </main>
    </div>
  );
}
