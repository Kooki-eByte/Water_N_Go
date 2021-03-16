import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Card } from "react-bootstrap";


export const PlantForm: React.FC = () => {
  const [filename, setFilename] : [string, Dispatch<SetStateAction<string>>] = useState("Please choose a image ending in .jpg or .png")
  const [image, setImage] = useState("https://via.placeholder.com/150")

  useEffect(() => {
    localStorage.removeItem("recent-image")
  }, [])
  

  const onChange = (e: any ) => {
    const file = e.target.files[0]
    
    if (!file.name) return setFilename("Please choose a image ending in .jpg or .png");
    
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
 
  }

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
            accept="image/*"
            onChange={(e : React.InputHTMLAttributes<HTMLInputElement>) => onChange(e)}
          />
          <label style={{marginLeft: '15rem', marginRight: '15rem'}} className="custom-file-label" htmlFor="file">
              {filename}
          </label>
        </div>
      </form>
    </>
  )

}