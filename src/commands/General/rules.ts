/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";

import MessageHandler from "../../Handlers/MessageHandler";

import BaseCommand from "../../lib/BaseCommand";

import WAClient from "../../lib/WAClient";

import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {

  constructor(client: WAClient, handler: MessageHandler) {

    super(client, handler, {

      command: "rules",

      description: "shows the rules for beyond",

      category: "general",

      usage: `${client.config.prefix}rules`,

      baseXp: 0,

    });

  }

  run = async (M: ISimplifiedMessage): Promise<void> => {

    const buttons = [

      {

        buttonId: "rules",

        buttonText: { displayText: `${this.client.config.prefix}rules` },

        type: 1,

      },

    ];

    const buttonMessage: any = {

      contentText: `\n\n_*

          🍁 *Rules for Shikimori's usage*

🚀  Do not call Shikimori, if you do then you'll get automatically blocked and banned instantly by her.

🚀  Do not spam Shikimori with commands, if it's not responding then it means either bot is off or the owner is having internet issue.

🚀  Do not abuse/disrespect Hitagi and it's owner.

🚀  If you see any bugs or having any issues contact owner.

🚀  If you want this bot in your group then contact owner (Fantox) by typing -owner/mod

🚀  If you Break Rules you will be banned soon. \n\n`,

      footerText: "© 𝙎𝙝𝙞𝙠𝙞𝙢𝙤𝙧𝙞 𝘽𝙤𝙩 𝙗𝙮 𝙁𝙖𝙣𝙩𝙤𝙭",

      buttons: buttons,

      headerType: 1,

    };

    await M.reply(buttonMessage, MessageType.buttonsMessage);

  };

}

