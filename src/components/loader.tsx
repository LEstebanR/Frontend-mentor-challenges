import { FC } from "react";

const Loader: FC = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="size-32 animate-spin rounded-full border-b-2 border-primary"></div>
    </div>
  );
};

export default Loader;
