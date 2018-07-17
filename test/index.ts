import * as c from 'chai';
import m from 'mocha';

import RPSOpen from '../src/index';
import { RpsContext } from 'rpscript-interface';

m.describe('Open', () => {

  m.it('should open up a file with text editor', async function () {
    let open = new RPSOpen;

    await open.open(new RpsContext,{},"README.md");

    await open.open(new RpsContext,{},"https://www.google.com.sg");
    await open.open(new RpsContext,{app:'firefox'},"https://www.google.com.sg");

  }).timeout(0);

})
