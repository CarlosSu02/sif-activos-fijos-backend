
// Example Controllers
import { Request, Response } from 'express';

export const ping = (req: Request, res: Response) => {

    res.status(200).send(`Hello strange! <br><br> Date: ${new Date().toLocaleDateString()} <br> Time: ${new Date().toLocaleTimeString()}`);

};
