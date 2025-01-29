import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";

export type UserAvatatProps = {
  imageSrc?: string;
  name?: string;
  username?: string;
};

export const UserAvatar: React.FC<UserAvatatProps> = ({
  imageSrc,
  name,
  username,
}) => {
  let initials: string = "";
  if (name) {
    initials = name.split("")[0]?.toLocaleUpperCase() as string;
  }

  return (
    <Avatar className="flex h-full w-full items-center justify-center">
      <AvatarImage src={imageSrc} />
      <AvatarFallback>{initials}</AvatarFallback>
    </Avatar>
  );
};
