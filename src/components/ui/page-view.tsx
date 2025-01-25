import { cn } from "@/lib/utils";

export type PageViewProps = React.HTMLAttributes<HTMLDivElement>;

export const PageView: React.FC<PageViewProps> = ({
  children,
  className,
  ...props
}) => {
  const classes = cn("h-screen max-w-screen", className);
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
