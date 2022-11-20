const uploadUrl = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`;

// cloudynary 이미지 스토리지에 image upload
const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET);

  try {
    const result = await fetch(uploadUrl, {
      method: "POST",
      body: formData,
    });
    return await result.json();
  } catch (e) {
    console.error(e);
  }
};

export default uploadImage;
