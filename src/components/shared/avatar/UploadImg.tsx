import { useState, useRef } from "react";
import { MdAdd, MdEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  removeImage,
  uploadImage,
} from "../../../store/avatarslice";
import { RootState } from "../../../store/store";

interface IUploadImgProps {}

const UploadImg: React.FC<IUploadImgProps> = () => {
  const [avatarOptionsVisible, setAvatarOptionsVisible] = useState(false);
  const reduxAvatar = useSelector(
    (state: RootState) => state.avatar.profileImgSrc
  );
  const dispatch = useDispatch();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAvatarMenuClick = () => {
    setAvatarOptionsVisible((prev) => !prev);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result as string;
      dispatch(uploadImage(base64));
      if (fileInputRef.current) fileInputRef.current.value = ""; // reset input value
    };
    reader.readAsDataURL(file);
  };

  const handleOptionClick = (action: string) => {
    if (action === "delete") {
      dispatch(removeImage());
    }
    setAvatarOptionsVisible(false);
  };

  return (
    <>
      {/* File input is always rendered for stable ref */}
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: "none" }}
        id="avatar-upload-input"
        ref={fileInputRef}
      />

      {!reduxAvatar ? (
        <label
          htmlFor="avatar-upload-input"
          className="addAvatar"
          style={{ cursor: "pointer" }}
        >
          <MdAdd size={20} />
        </label>
      ) : (
        <div
          className="editAvatarWrap"
          tabIndex={0}
          onBlur={() => setTimeout(() => setAvatarOptionsVisible(false), 100)}
        >
          <div onClick={handleAvatarMenuClick} className="addAvatar">
            <MdEdit />
          </div>
          {avatarOptionsVisible && (
            <ul className="editAvatarOptions">
              <li
                onClick={() => fileInputRef.current?.click()}
                tabIndex={0}
              >
                Change Avatar
              </li>
              <li
                onClick={() => handleOptionClick("delete")}
                tabIndex={0}
              >
                Delete Avatar
              </li>
            </ul>
          )}
        </div>
      )}
    </>
  );
};

export default UploadImg;
