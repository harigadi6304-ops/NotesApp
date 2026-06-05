import { Button, TextareaAutosize, TextField } from "@mui/material";
import React, { useState } from "react";
import NotesItem from "../NotesItem/NotesItem";

interface FormData {
  title: string;
  description: string;
}
const NotesListing: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
  });

  const [notesData, setNotesData] = useState<FormData[]>([]);
  const handleAddItem = () => {
    if (formData.title === "" || formData.description === "") {
      alert("Please fill in all fields");
      return;
    }
    setNotesData([...notesData, formData]);
    setFormData({
      title: "",
      description: "",
    });
  };
  return (
    <div className="flex flex-col justify-center items-center p-10 shadow-lg rounded-xl box-content w-[60%] gap-5">
      <h1 className="text-[#4c63b6] font-semibold text-5xl"> Notes</h1>
      <div className="flex flex-col justify-center items-center gap-3 p-4 box-content rounded-xl w-[70%] border-2 border-gray-300">
        <TextField
          label="Title"
          sx={{
            width: "100%",
          }}
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <TextareaAutosize
          placeholder="Description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          className="w-full p-4 box-border rounded-lg border-2 border-gray-300"
          maxRows={10}
          minRows={10}
        />
        <Button
          variant="contained"
          className="self-end"
          onClick={handleAddItem}
        >
          Add
        </Button>
      </div>
      {notesData?.length === 0 ? (
        <div className="flex flex-col justify-center items-center gap-3">
          <img
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes_empty"
            className="w-50 h-50"
          />
          <h1 className="text-[#475569] font-semibold text-xl">No Notes Yet</h1>
          <p className="text-[#475569] font-light text-lg">
            Notes yo added will appear here.
          </p>
        </div>
      ) : (
        <div className="flex flex-row w-full justify-start gap-3 flex-wrap mt-5" >
          {notesData.map((note) => (
            <NotesItem item={note} />
          ))}
        </div>
      )}
    </div>
  );
};

export default NotesListing;
