import * as express from 'express';
import { 
    AgreementController_create_get,
    AgreementController_getAllAgreements_get } from './controllers'
export default express.Router()
.get('/agreement/create/:agreement', AgreementController_create_get)
.get('/agreement/getAllAgreements', AgreementController_getAllAgreements_get)
