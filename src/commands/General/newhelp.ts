import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { IParsedArgs, ISimplifiedMessage } from "../../typings";
import { MessageType, Mimetype } from "@adiwajshing/baileys";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "newhelp",
			description:
				"Displays the help",
			category: "general",
			aliases: ["nh"],
			baseXp: 30,
		});
	}

	run = async (
		M: ISimplifiedMessage,
		parsedArgs: IParsedArgs
	): Promise<void> => {
		const buttons = [
            {
              buttonId: "help 1",
              buttonText: { displayText: `${this.client.config.prefix}help 1` },
              type: 1,
            },
            ];
          
            const buttonMessage: any = {
            contentText: `please press the button to continue`,
            footerText: "🎇 Beyond 🎇",
            buttons: buttons,
            headerType: 1,
            };
            await M.reply(buttonMessage, MessageType.buttonsMessage);
            ;
          
          };
        }
      