import { API_URL } from "@/constants/constant";
import { fetchData } from "@/query/query";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

const MultiImage = () => {
  const getSettings = async () => {
    const response = await fetchData("api/settings");
    return response;
  };

  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["settings"],
    queryFn: () => getSettings(),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  console.log(data.banners);
  const [imageUrls, setImageUrls] = useState(data.banners);
  const [newImageUrl, setNewImageUrl] = useState("");

  const handleAddImage = () => {
    if (newImageUrl && imageUrls.length < 3) {
      setImageUrls([...imageUrls, newImageUrl]);
      setNewImageUrl("");
    }
  };

  const handleDeleteImage = (index) => {
    const updatedImages = imageUrls.filter((_, i) => i !== index);
    setImageUrls(updatedImages);
  };

  return (
    <div>
      {imageUrls.length > 3 ? (
        ""
      ) : (
        <>
          {" "}
          <input
            type="file"
            value={newImageUrl}
            onChange={(e) => setNewImageUrl(e.target.value)}
            placeholder="Enter image URL"
          />
          <button onClick={handleAddImage} disabled={imageUrls.length >= 3}>
            Add Image
          </button>
        </>
      )}

      <div>
        {imageUrls.map((url, index) => (
          <div key={index}>
            <img
              src={`${API_URL}/${url}`}
              alt={`Image ${index + 1}`}
              style={{ width: "100px", height: "100px" }}
            />
            <button onClick={() => handleDeleteImage(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiImage;
