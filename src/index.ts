import opn from 'opn';
import {ChildProcess, execSync} from 'child_process';
import {RpsContext,RpsModule,rpsAction} from 'rpscript-interface';


/** Open a file or url in the user's preferred application.
 * @see {@link https://www.npmjs.com/package/opn|Opn}
 * @namespace Open
*/
@RpsModule("open")
export default class RPSOpen {

    /**
 * @function open
 * @memberof Open
 * @example
 * ;Opens a browser  
 * open "http://www.google.com"
 * open "http://www.google.com" --app="firefox"
 * ;Opens a text file with preferred editor
 * open "test.txt"
 * @param {string} filepath file to be open
 * @param {string} preferredApp optional. 
 * @returns {void} 
 * @summary Make beep sound
 * 
 * @see {@link https://www.npmjs.com/package/opn}
 * 
*/
  @rpsAction({verbName:'open'})
  open (ctx:RpsContext,opts:Object, filepath:string,preferredApp?:string) : Promise<ChildProcess|Buffer>{
    return opn(filepath,opts);
  }

  private childProcessOpen (filepath:string) :Buffer {
    return execSync(`xdg-open ${filepath}`);
  }

}
