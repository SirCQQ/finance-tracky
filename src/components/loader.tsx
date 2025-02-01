import { Box } from "./ui/box";

export const Loader = () => {
  return (
    <Box className="flex h-full w-full items-center justify-center">
      <div className="h-10 w-10 animate-spin rounded-full border-b-2 border-r-2 border-t-2 border-primary" />
    </Box>
  );
};
