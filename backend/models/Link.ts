import mongoose from "mongoose";

const Schema = mongoose.Schema;

const LinkSchema = new Schema({
   link: {
       type: String,
       required: true,
   },
   shortUrl: String,
});

const Link = mongoose.model('Link', LinkSchema);

export default Link;