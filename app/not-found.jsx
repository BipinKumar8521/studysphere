import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
      <button>
        <Link href="/"> Back to Home</Link>
      </button>
    </div>
  );
};

export default NotFoundPage;
