import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./store.ts";
import {Link} from "../../type";
import {createLink} from "./linkThunk.ts";

interface LinkState {
    link: Link | null;
    createLink: boolean;
}

const initialState: LinkState = {
    link: null,
    createLink: false,
};

export const linkSlice = createSlice({
    name: 'link',
    initialState,
    reducers: {},
    extraReducers:(builder) => {
        builder.addCase(createLink.pending, (state) => {
            state.createLink = true;
        });
        builder.addCase(createLink.fulfilled, (state, {payload: link}: PayloadAction<Link>) => {
            state.link = link;
            state.createLink = false;
        });
        builder.addCase(createLink.rejected, (state) => {
            state.createLink = false;
        });
    }
});

export const linkReducer = linkSlice.reducer;
export const selectLink = (state: RootState) => state.link.link;