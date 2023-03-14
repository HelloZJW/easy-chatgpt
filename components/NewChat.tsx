import { PlusIcon } from "@heroicons/react/24/outline";

function NewChat() {
  return (
    <div className="border-gray-700 border chatRow">
      <PlusIcon className="w-4 h-4" />
      <p>NewChat</p>
    </div>
  );
}

export default NewChat;
