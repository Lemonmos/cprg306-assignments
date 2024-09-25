import Image from "next/image";
import Link from "next/link";

export default function Home() {
  let weeks = [2,3,4,5,6,7,8,9,10,11,12,13,14];
  return (
    <div>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      {weeks.map((week) => (
        <li key= {week} className="hover:text-green-500 text-pink-500 font-bold">
        <Link href={`/week-${week}`}>Week-{week}</Link>
        </li>
    ))}
    </div>
  );
}
