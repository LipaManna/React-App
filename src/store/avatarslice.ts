import {createSlice} from '@reduxjs/toolkit';

interface IAvatarState {
    name: string;
    email: string;
    profileImgSrc: string | null;
    phone: string;
    location: string;
    social: {name:string, url: string}[];
}

const initialState: IAvatarState = {
    name: '',
    email: '',
    profileImgSrc: localStorage.getItem("uploadedImage"),
    phone: '',
    location: '',
    social: []
}

const avatarSlice = createSlice({
    name: 'avatar',
    initialState:initialState,
    reducers: {
        uploadImage: (state,data) => {
            state.profileImgSrc = data.payload;
            localStorage.setItem("uploadedImage", data.payload);
        },
        removeImage: (state) => {
            state.profileImgSrc = '' ;
            localStorage.removeItem("uploadedImage");
        }
        
    }
})

export const {uploadImage, removeImage} = avatarSlice.actions;
export default avatarSlice.reducer;