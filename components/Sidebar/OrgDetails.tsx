import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OrgDetails = () => {
  return (
    <div className="rounded bg-blue-800 border border-blue-600 p-4 flex justify-between items-center">
      <div>
        <span className="font-bold block text-blue-200">Apple Inc.</span>
        <span className="text-blue-100/50">1324 members</span>
      </div>
      <div className="rounded-[50%] bg-blue-100 p-2 h-10 w-10 flex items-center justify-center border border-blue-300">
        <FontAwesomeIcon icon={faPenToSquare} />
      </div>
    </div>
  );
};

export default OrgDetails;
