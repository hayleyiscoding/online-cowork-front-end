import { format } from "date-fns";

const Item = ({ item }) => {
  return (
    <li className="bg-white flex items-center text-center shadow-lg rounded-lg my-6 py-4 px-4 mx-auto w-10/12 font-light">
      <p className={`flex-1 text-gray-800 `}>
        On {format(new Date(item.fields.time), "PPPPpppp")}, an Online CoWorker
        added a task:&nbsp;{" "}
        <strong className="font-bold">{item.fields.Task}!</strong> 🥳
      </p>
    </li>
  );
};

export default Item;
