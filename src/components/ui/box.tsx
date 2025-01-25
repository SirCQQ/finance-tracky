import { cn } from "@/lib/utils";

export type BoxProps = React.HTMLAttributes<HTMLDivElement>;

export const Box: React.FC<BoxProps> = ({ children, className, ...props }) => {
  const classes = cn("p-4 m-2  lg:text-md sm:text-lg", className);
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
