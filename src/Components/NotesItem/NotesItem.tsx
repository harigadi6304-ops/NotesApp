import React from "react";

interface NoteItemProps {
  item: {
    title: string;
    description: string;
  };
}
const NotesItem: React.FC<NoteItemProps> = ({ item }) => {
  return (
    <div className="flex flex-col gap-1 justify-center p-3 box-border border-2 border-gray-300 rounded-2xl">
      <h3 className="font-semibold">{item?.title}</h3>
      <p>{item?.description}</p>
    </div>
  );
};

export default NotesItem;
