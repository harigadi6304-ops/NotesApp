import { Button, TextareaAutosize, TextField } from "@mui/material";
import React, { useState } from "react";

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
    setNotesData([...notesData, formData]);
    setFormData({
      title: "",
      description: "",
    });
  };
  return (
    <div className="flex flex-col justify-center items-center p-10 shadow-lg rounded-xl box-content w-[60%] gap-5">
      <h1>Notes</h1>
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
          className="w-full"
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
    </div>
  );
};

export default NotesListing;
