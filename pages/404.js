import Link from 'next/link';

export default function FourOhFour() {
  return (
    <>
      <h1  data-aos='fade-in'>404 - Page Not Found</h1>
      <Link href='/'>
        <a>Go back home</a>
      </Link>
    </>
  );
}
