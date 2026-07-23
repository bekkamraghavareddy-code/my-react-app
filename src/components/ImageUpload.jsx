import { useState } from "react";

export default function ImageUpload() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFile = (e) => {
    const file = e.target.files[0];

    const allowed = ["image/png","image/jpg","image/jpeg"];
    if(!allowed.includes(file.type)){
        alert("file must be image");
        return;
    }
    if(file.size > 2 * 1024 * 1024){
        alert("file size must be less than 2 MB");
        return;
    }

    setImage(file);
    setPreview(URL.createObjectURL(file)); 
  };

  return (
    <div className="p-4">
      <input type="file" accept="image/*" onChange={handleFile} />

      {preview && (
        <img
          src={preview}
          alt="Preview"
          className="w-40 h-40 mt-3 rounded object-cover"
        />
      )}
    </div>
  );
}
