import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo } from "react";

const OrgDetails = () => {
  return (
    <div className="rounded bg-aubergine border border-black/50 p-4 flex justify-between items-center">
      <div>
        <span className="font-bold block text-white">Apple Inc.</span>
        <span className="text-blue-100/50">1324 members</span>
      </div>
      <div className="rounded-[50%] bg-white p-2 h-10 w-10 flex items-center justify-center text-blue-950 border border-black/50">
        <FontAwesomeIcon icon={faPenToSquare} />
      </div>
    </div>
  );
};

export default memo(OrgDetails);
