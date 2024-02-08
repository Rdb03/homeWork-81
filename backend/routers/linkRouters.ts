import {Router} from "express";
import Link from "../models/Link";
import {ILink} from "../type";

const categoriesRouter = Router();

categoriesRouter.get('/', async (req, res, next) => {
    try {
        const result = await Link.find(req.params);

        res.send(result);
    } catch (e) {
        return next(e);
    }
});

categoriesRouter.post('/',async (req, res, next) => {
   try {

       const alphabet = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ";


       let rs = "";
       while (rs.length < 7) {
           rs += alphabet[Math.floor(Math.random() * alphabet.length)];
       }

       const linkData: ILink = {
           link: req.body.link,
           shortUrl: `http://localhost:8000/${rs}`
       }

       const link = new Link(linkData);
       await link.save();

       res.send(link);
   }catch (e) {
       next(e);
   }
});

export default categoriesRouter;