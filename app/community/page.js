import Link from "next/link";

function Community() {
  return (
    <div>
      <p>community </p>
      <Link href="/meals">Meals</Link>
      <Link href="/meals/share">Share Meal</Link>
    </div>
  );
}

export default Community;
