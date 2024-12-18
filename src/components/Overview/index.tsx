import React from "react";
import { IOverviewProps } from "type";

const Overview: React.FC<IOverviewProps> = ({
  totalTaskCount,
  completedTaskCount,
}) => {
  return (
    <div className="mb-[38px] border-[#c2b39a] border rounded-xl p-3 flex justify-around items-center">
      <div className="mr-4">
        <p className="text-[33px] tracking-[1px] leading-[34px]">Task Done</p>
        <p className="text-[24px] tracking-[1px] leading-[34px]">Keep it up</p>
      </div>
      <div className="h-[150px] w-[150px] text-center flex items-center text-5xl bg-[#88ab33] text-center justify-center rounded-[50%]">
        {`${completedTaskCount}/${totalTaskCount}`}
      </div>
    </div>
  );
};

export default Overview;
