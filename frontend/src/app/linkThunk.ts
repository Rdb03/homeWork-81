import {Link, LinkMutation} from "../../type";
import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../axiosApi.ts";

export const createLink = createAsyncThunk<Link, LinkMutation>(
    'link/create',
    async (link) => {
        try {
            const response = await axiosApi.post('/', link);
            return response.data;
        } catch (error) {
            console.error('Error creating link:', error);
        }
    }
);
