// tslint:disable:no-unused-expression
import { join } from 'path';
import { expect } from 'chai';
import * as uuid from 'uuid/v4';
import { MockControllerAdapter } from '@worldsibu/convector-adapter-mock';
import { ClientFactory, ConvectorControllerClient } from '@worldsibu/convector-core';
import 'mocha';

import { Agreement, AgreementController } from '../src';

describe('Agreement', () => {
  let adapter: MockControllerAdapter;
  let agreementCtrl: ConvectorControllerClient<AgreementController>;
  
  before(async () => {
    // Mocks the blockchain execution environment
    adapter = new MockControllerAdapter();
    agreementCtrl = ClientFactory(AgreementController, adapter);

    await adapter.init([
      {
        version: '*',
        controller: 'AgreementController',
        name: join(__dirname, '..')
      }
    ]);

    adapter.addUser('Test');
  });
  
  it('should create a default model', async () => {
    const modelSample = new Agreement({
      id: uuid(),
      name: 'Test',
      created: Date.now(),
      modified: Date.now()
    });

    await agreementCtrl.$withUser('Test').create(modelSample);
  
    const justSavedModel = await adapter.getById<Agreement>(modelSample.id);
  
    expect(justSavedModel.id).to.exist;
  });
});