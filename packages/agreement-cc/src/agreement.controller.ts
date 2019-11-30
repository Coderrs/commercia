import { ChaincodeTx } from '@worldsibu/convector-platform-fabric';
import {
  Controller,
  ConvectorController,
  Invokable,
  Param
} from '@worldsibu/convector-core';

import { Agreement } from './agreement.model';

@Controller('agreement')
export class AgreementController extends ConvectorController<ChaincodeTx> {
  @Invokable()
  public async create(
    @Param(Agreement)
    agreement: Agreement
  ) {
    await agreement.save();
  }
  @Invokable()
  public async getAllAgreements()
  {
    const storedAgreements = await Agreement.getAll('io.worldsibu.agreement');
    return storedAgreements;
  }
}
