import { cn } from "@/lib/utils";

export type BubbleProps = React.HTMLAttributes<HTMLDivElement>;

export const Bubble: React.FC<BubbleProps> = ({
  children,
  className,
  ...props
}) => {
  const classes = cn(
    "p-4 m-2 text-wrap",
    // "hover:animate-[wiggle_2s_ease-out-out_infinite] ",
    "animate-[bounce_5s_ease-in-out_infinite] ",
    // "animate-bounce",

    "rounded-full group lg:text-md sm:text-lg bg-primary text-primary-foreground w-64 h-64 text-center flex justify-center items-center relative",
    className,
  );
  return (
    <div className={classes} {...props}>
      <div
        id="reflet"
        className="absolute right-1/4 top-[10%] h-10 w-10 animate-[bounce_5s_ease-in-out_infinite] rounded-full bg-white"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
