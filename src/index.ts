/**
 * @module Notifier
 */

import opn from 'opn';
import {ChildProcess, execSync} from 'child_process';
import {RpsContext,RpsModule,rpsAction} from 'rpscript-interface';



@RpsModule("open")
export default class RPSOpen {

  @rpsAction({verbName:'open'})
  open (ctx:RpsContext,opts:{}, filepath:string) : Promise<ChildProcess|Buffer>{
    if(process.platform === 'linux'){
      let result = this.childProcessOpen(filepath);
      return Promise.resolve(result);
    }
    else return opn(filepath);
  }

  private childProcessOpen (filepath:string) :Buffer {
    return execSync(`xdg-open ${filepath}`);
  }

}
