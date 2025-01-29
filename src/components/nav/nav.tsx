import { cn } from "@/lib/utils";
import { Box } from "../ui/box";
import { ThemeToggle } from "../theme/theme-toggle";
import { UserButton } from "../auth/user-button/user-button";
import Link from "next/link";
import { MobileNavButton } from "./mobile-nav-button";

export type NavbarProps = React.HTMLAttributes<HTMLDivElement>;

export const Navbar: React.FC<NavbarProps> = ({ className, ...props }) => {
  const classes = cn(
    "backdrop-blur-xl sticky top-0 h-20 flex flex-row justify-between border-b-primary border-b-2 items-center px-4",
    className,
  );
  return (
    <nav className={classes} {...props}>
      <span className="text-xl font-bold">
        <Link href="/">Tracky</Link>
      </span>
      <Box className="hidden flex-row items-center justify-around gap-4 sm:flex">
        <Link href="/finances" prefetch>
          Finances
        </Link>
        <UserButton />
        <ThemeToggle />
      </Box>
      <Box className="m-0 p-0 sm:hidden">
        <MobileNavButton />
      </Box>
    </nav>
  );
};
