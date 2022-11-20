const uploadUrl = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`;

const checkfileSize = (file) => {
  const MAX_BYTE = 2000000;
  if (file.size > MAX_BYTE) {
    return false;
  }
  return true;
};

// cloudynary 이미지 스토리지에 image upload
const uploadImage = async (file) => {
  if (!checkfileSize(file)) {
    window.alert("이미지 용량은 2MB를 초과할 수 없습니다. 다시 등록해주세요.");
    return null;
  }
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET);
  console.log(file.size);
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
