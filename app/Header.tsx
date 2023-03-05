import HeaderButton from "@/components/HeaderButton";

export default function Header() {
  return (
    <header className="mb-4">
      <ul className="flex text-lg text-white md:text-xl">
        <HeaderButton />
      </ul>
    </header>
  );
}
