import { Router } from 'medusa-extender';
// import { Router, MedusaRequest } from 'medusa-extender';
import { Response } from "express";
// import { Response, NextFunction } from "express";

// export declare class CustomUser {
//     name: string
// }

@Router({
    routes: [
        {
            requiredAuth: false,
            path: '/admin/public-dashboard/',
            method: 'get',
            handlers: [(req, res: Response) => {
                res.send('hello');
            }]
        }
    ]
})
export class ExampleRouter {}
