
// Example Controllers
import { Request, Response } from 'express';

// export const ping = (req: Request, res: Response) => {

//     res.status(200).send(`Hello strange! <br><br> Date: ${new Date().toLocaleDateString()} <br> Time: ${new Date().toLocaleTimeString()}`);

// };

class Controller {

    constructor() {

        this.ping = this.ping.bind(this);
        this.pingById = this.pingById.bind(this);
        
    }

    ping(req: Request, res: Response) { 

        res.status(200).send(`Hello strange! <br><br> Date: ${new Date().toLocaleDateString()} <br> Time: ${new Date().toLocaleTimeString()}`); 
    
    };

    pingById(req: Request, res: Response) { 

        console.log(req.params.id);
        res.status(200).send(`Hello strange! <br><br> Date: ${new Date().toLocaleDateString()} <br> Time: ${new Date().toLocaleTimeString()} <br> Id: ${req.params.id}`); 
    
    };

}

export default new Controller;
