import React, { Dispatch, SetStateAction, useState } from "react";

export const PlantForm: React.FC = () => {
  const [filename, setFilename] : [string, Dispatch<SetStateAction<string>>] = useState("Please choose a image ending in .jpg or .png")

  const onChange = (event: any ) => {
    setFilename(event.target.files[0].name);
  };

  return (
    <form action="/upload" method="POST" encType="multipart/form-data">
      <div className="custom-file mb-3">
        <input
          type="file"
          name="file"
          className="custom-file-input"
          id="file"
          onChange={(event : React.InputHTMLAttributes<HTMLInputElement>) => onChange(event)}
        />
        <label style={{marginLeft: '15rem', marginRight: '15rem'}} className="custom-file-label" htmlFor="file">
            {filename}
        </label>
      </div>
    </form>
  )

}