import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

type SubmeauEntryProps = {
  items: {
    name: string;
    href: string;
  }[];
};

export default function SubmeauEntry({ items }: SubmeauEntryProps) {
  const pathname = usePathname();
  return (
    <div className="flex flex-col">
      <span>
        {items.map((link) => {
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                "flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
                {
                  "text-blue-600": pathname === link.href,
                },
              )}
            >
              <p className="hidden md:block">{link.name}</p>
            </Link>
          );
        })}
      </span>
    </div>
  );
}
