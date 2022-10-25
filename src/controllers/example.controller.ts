
// Example Controllers
import { Request, Response } from 'express';
import { Category } from '../models/category.model';

// export const ping = (req: Request, res: Response) => {

//     res.status(200).send(`Hello strange! <br><br> Date: ${new Date().toLocaleDateString()} <br> Time: ${new Date().toLocaleTimeString()}`);

// };

class Controller {

    constructor() {

        this.ping = this.ping.bind(this);
        this.pingById = this.pingById.bind(this);
        
    }

    getTest(req: Request, res: Response) {

        res.status(200).send(`<div style="text-align: center;">
                                <img src="https://lumiere-a.akamaihd.net/v1/images/thr-wave2-singlehero-desktop_76bad369.jpeg?region=0,0,1200,752" width="500px" />
                                <h2>Ok</h2>
                              </div>`);

    };

    ping(req: Request, res: Response) { 

        res.status(200).send(`Hello strange! <br><br> Date: ${new Date().toLocaleDateString()} <br> Time: ${new Date().toLocaleTimeString()}`); 
    
    };

    pingById(req: Request, res: Response) { 

        console.log(req.params.id);
        res.status(200).send(`Hello strange! <br><br> Date: ${new Date().toLocaleDateString()} <br> Time: ${new Date().toLocaleTimeString()} <br> Id: ${req.params.id}`); 
    
    };

}

export default new Controller;
