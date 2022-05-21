/**
 * /*eslint-disable @typescript-eslint/no-explicit-any
 *
 * @format
 */

/*eslint-disable @typescript-eslint/no-unused-vars*/
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { IParsedArgs, ISimplifiedMessage } from "../../typings";
import { MessageType } from "@adiwajshing/baileys";
export default class Command extends BaseCommand {
    
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: "help 1",
            description: 'Displays the Econamy menu',
            category: "general",
            aliases: ["h", "menu"],
            usage: `${client.config.prefix}help [1]`,
        })
    }

    run = async (M: ISimplifiedMessage, { joined }: IParsedArgs): Promise<void> => {
            if (!joined)
            return void (await M.reply(`that's not the way bruh.Use ${this.client.config.prefix}help 1`));
            const help: any = joined.trim();
            const buttons = [
              {
                buttonId: "help2",
                buttonText: { displayText: `${this.client.config.prefix}help2` },
                type: 1,
              },
              ];
              if ( help === 1) {
              const buttonMessage: any = {
              contentText: `\n\n *🍁ECONOMY🍁* \n\n 
              🎊${this.client.config.prefix}slot\n\n🎊 ${this.client.config.prefix}gamble\n\n🎊 ${this.client.config.prefix}give\n\n🎊 ${this.client.config.prefix}bank\n\n🎊 ${this.client.config.prefix}rob\n\n🎊 ${this.client.config.prefix}wallet\n\n🎊 ${this.client.config.prefix}deposit\n\n🎊 ${this.client.config.prefix}withdraw🎊${this.client.config.prefix}daily`,
              footerText: "🦋 Shikimori Bot 🦋",
              buttons: buttons,
              headerType: 1,
              };
              await M.reply(buttonMessage, MessageType.buttonsMessage);
              ;
              
            
            };
          }
        }
