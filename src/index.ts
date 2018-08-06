import opn from 'opn';
import {ChildProcess, execSync} from 'child_process';
import {RpsContext,RpsModule,rpsAction,R} from 'rpscript-interface';
var deasyncPromise = require('deasync-promise');


/** Open a file or url in the user's preferred application.
 * 
 * @see https://www.npmjs.com/package/opn {@link https://www.npmjs.com/package/opn|Opn}
 * @namespace Open
 * 
 * @example
 * rps install open
 * 
*/
@RpsModule("open")
export default class RPSOpen {

/**
 * @function open
 * @memberof Open
 * @example
 * ;Opens a browser  
 * open "http://www.google.com"
 * open --app="firefox" "http://www.google.com"
 * 
 * 
 * @param {string} filepath file to open.
 * @param {*} options refer to Opn documentation.
 * @summary open :: String → ChildProcess
 * @description
 * 
*/
  @rpsAction({verbName:'open'})
  open (ctx:RpsContext,opts:Object, filepath?:string) : Promise<ChildProcess>|Function{
    if(!filepath){ 
      return function (filepath) {
        return deasyncPromise(opn(filepath,opts));
      }
    }
    else return opn(filepath,opts);
  }

  private childProcessOpen (filepath:string) :Buffer {
    return execSync(`xdg-open ${filepath}`);
  }

}
