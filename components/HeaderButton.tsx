import Link from "next/link";

export default function HeaderButton({
  href,
  text,
  classes,
}: {
  href: string;
  text: string;
  classes?: string;
}) {
  return (
    <li
      className={
        "rounded-xl border-2 border-black bg-stone-100 px-2 py-0.5 dark:border dark:border-gray-300 dark:bg-gray-800 " +
        classes
      }
    >
      <Link href={href}>{text.toUpperCase()}</Link>
    </li>
  );
}
