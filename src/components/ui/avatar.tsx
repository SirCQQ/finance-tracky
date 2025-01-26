import { forwardRef } from "react";
import { Box } from "./box";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { cn } from "@/lib/utils";

export type AvatarProps = {
  imageSrc?: string;
  username?: string;
  fullName?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, imageSrc, username, fullName, ...props }, ref) => {
    const initials = (username ?? fullName)?.split("");

    let avatar: React.ReactNode;

    if (imageSrc) {
      avatar = (
        <Image src={imageSrc} alt="User image" width={100} height={100} />
      );
    } else if (initials) {
      avatar = (
        <Box className="bg-primary m-0 flex h-full w-full items-center justify-center p-0">
          <p className="h-full w-full text-center leading-10">{initials[0]}</p>
        </Box>
      );
    } else {
      avatar = (
        <Box className="bg-primary m-0 flex h-full w-full items-center justify-center p-0">
          <FaUser style={{ height: "20px", width: "20px" }} />
        </Box>
      );
    }

    return (
      <Box
        className={cn(
          "m-0 h-full w-full overflow-hidden rounded-full p-0",
          className,
        )}
        {...props}
      >
        {avatar}
      </Box>
    );
  },
);
