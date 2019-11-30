import { Request, Response } from 'express';
import { AgreementControllerBackEnd } from '../convector';


export async function AgreementController_create_get(req: Request, res: Response): Promise<void>{
    try{
        let params = req.params;
        res.status(200).send(await AgreementControllerBackEnd
            .create(params.agreement));
        
    } catch(ex) {
        console.log('Error get AgreementController_create', ex.stack);
        res.status(500).send(ex);
    }
}
export async function AgreementController_getAllAgreements_get(req: Request, res: Response): Promise<void>{
    try{
        let params = req.params;
        res.status(200).send(await AgreementControllerBackEnd
            .getAllAgreements());
        
    } catch(ex) {
        console.log('Error get AgreementController_getAllAgreements', ex.stack);
        res.status(500).send(ex);
    }
}