import HeaderButton from "@/components/HeaderButton";

export default function Header() {
  return (
    <header className="mb-4">
      <ul className="flex gap-3 text-lg text-black dark:text-white md:text-xl">
        <HeaderButton href="/" text="A*K" />
        <HeaderButton href="/contact" text="Contact" />
        <HeaderButton href="/resume" text="Resume" classes="ml-auto" />
      </ul>
    </header>
  );
}
