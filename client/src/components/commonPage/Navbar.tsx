import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-200 border h-8 flex justify-center text-gray-700">
      <ul className="flex flex-row gap-6 items-center">
        <li className="">
          <Link href="/">
            <span className="">Home</span>
          </Link>
        </li>
        <li className="">
          <Link href="/find-job">
            <span className="">Find Job</span>
          </Link>
        </li>
        <li className="">
          <Link href="/employers">
            <span className="">Employers</span>
          </Link>
        </li>
        <li className="">
          <Link href="/candidates">
            <span className="">Candidates</span>
          </Link>
        </li>
        <li className="">
          <Link href="/customer-support">
            <span className="">Customer Support</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;