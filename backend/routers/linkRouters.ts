import {Router} from "express";
import Link from "../models/Link";
import {ILink} from "../type";

const categoriesRouter = Router();

categoriesRouter.get('/:shortUrl', async (req, res, next) => {
    try {
        const result = await Link.findOne({shortUrl: req.params.shortUrl});

        if (!result) {
            return res.sendStatus(404);
        }

        res.status(301).redirect(result.link);
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
           shortUrl: `${rs}`
       }

       const link = new Link(linkData);
       await link.save();

       res.send(link);
   }catch (e) {
       next(e);
   }
});

export default categoriesRouter;