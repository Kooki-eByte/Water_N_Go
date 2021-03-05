import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Card } from "react-bootstrap";


export const PlantForm: React.FC = () => {
  const [filename, setFilename] : [string, Dispatch<SetStateAction<string>>] = useState("Please choose a image ending in .jpg or .png")
  const [image, setImage] = useState("https://via.placeholder.com/150")


  const onChange = (event: any ) => {
    const file = event.target.files[0]
    
    if (file.name == null) return setFilename("Please choose a image ending in .jpg or .png");
    
    setFilename(file.name);
    changeImage(file)
  };

  const changeImage = (file: Blob) => {
    const reader = new FileReader()
    

    reader.addEventListener("load", () => {
      // variable made due to typescript error for localstorage only wanting a string but (property) FileReader.result: string | ArrayBuffer | null
      let readerData : any = reader.result;
      localStorage.setItem("recent-image", readerData)

      setImage(readerData)
    });

    reader.readAsDataURL(file)
    
    // TODO: Figure out how to work formData and then do a local storage so that in the add plant page I can just grab that plus the other data to POST it to the DB...
  }

  useEffect(() => {
    console.log("Image state", image);
}, [image]);

  return (
    <>
      <Card style={{width: "15rem", objectFit: "cover", marginBottom: "10px"}}>
        <Card.Img id="plant-image-preview" alt="plant-image" src={image} />
      </Card>
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
    </>
  )

}