import { Skeleton } from "../ui/skeleton";

const SkeletonForm = () => {
  return (
    <div>
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[500px] w-[500px] rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[500px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonForm;
