import * as c from 'chai';
import m from 'mocha';

import RPSOpen from '../src/index';
import { RpsContext } from 'rpscript-interface';

m.describe('Open', () => {

  m.it('should open up a file with text editor', async function () {
    let open = new RPSOpen;

    await open.open(new RpsContext,{},"README.md");
    
    let output = await open.open(new RpsContext,{},"https://www.google.com.sg");
    console.log(output);

    let firefox:any = await open.open(new RpsContext,{app:'firefox'});
    console.log(firefox("https://www.google.com.sg"));

  }).timeout(0);

})
