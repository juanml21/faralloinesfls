const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
client.login(process.env.TOKEN);

var PREFIX = config.PREFIX;
client.on("message", (message) => {
    if (message.content.startsWith(PREFIX + "comando")){
    
        message.channel.send('**'+message.author.username+'**, Revisa tus mensajes privados.');
        message.author.send('**COMANDOS DE FLS**\n```\n'+
                            '-> '+PREFIX+'kpi            :: Hola, hola, aviadores.\n'+
                            '-> '+PREFIX+'fls            :: CapiLeyton saludando FLS.\n'+
                            '-> '+PREFIX+'santiaga       :: Soy Santiaga.\n'+
                            '-> '+PREFIX+'ayno           :: Ay no.\n'+
                            '-> '+PREFIX+'bga            :: Bucaramanga.\n'+
                            '-> '+PREFIX+'limon          :: Limoncito con ron.\n'+
                            '-> '+PREFIX+'estres         :: Demasiado estresado - versión Guitarra.\n'+
                            '-> '+PREFIX+'dudas          :: No tengo dudas, pero tampoco pruebas.\n'+
                            '-> '+PREFIX+'desgrac        :: Que pase el descraciado!\n'+
                            '-> '+PREFIX+'flor           :: Pluma, pluma gay.\n'+
                            '-> '+PREFIX+'prob           :: Tocó probarsela a Martin.\n'+
                            '-> '+PREFIX+'bonice         :: Bonice bajó de precio!\n'+
                            '-> '+PREFIX+'marcho         :: Y se marchó...\n'+
                            '-> '+PREFIX+'gol            :: Martin gol!\n'+
                            '-> '+PREFIX+'madre          :: Lo sabrá su madre!\n'+
                            '-> '+PREFIX+'crack          :: Gracias por el dato crack...\n'+
                            '-> '+PREFIX+'madre          :: Lo sabrá su madre!\n'+
                            '-> '+PREFIX+'ja             :: Ja!\n```\n\n'+
                            'Proyecto financiado por el ingeniero Martin');
        
                        }
                    });

let prefix = process.env.PREFIX;
client.on("message", (message) => {
  if (!message.guild)
   return;
  if (message.author.bot) return;
  const cont = message.content.split(" ").slice(1);
  const args = cont.join(" ");
  if (message.content === '!kpi') {
    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./music/test/cora.mp3").on("finish", () =>
        VoiceConnection
      );
    });
    
  }
});
client.on("message", (message) => {
  if (!message.guild)
   return;
  if (message.author.bot) return;
  const cont = message.content.split(" ").slice(1);
  const args = cont.join(" ");
  if (message.content === '!kpi') {
    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./music/test/cora.mp3").on("finish", () =>
        VoiceConnection
      );
    });
    
  }
});
client.on("message", (message) => {
  if (message.author.bot) return;
  const cont = message.content.split(" ").slice(1);
  const args = cont.join(" ");
  if (message.content === '!bonice') {
    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./music/test/bon.wav").on("finish", () =>
        VoiceConnection
      );
    });
    
  }
});
client.on("message", (message) => {
  if (message.author.bot) return;
  const cont = message.content.split(" ").slice(1);
  const args = cont.join(" ");
  if (message.content === '!limon') {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./music/test/limon.mp3").on("finish", () =>
        VoiceConnection
      );
    });
    
  }
});
client.on("message", (message) => {
  if (message.author.bot) return;
  const cont = message.content.split(" ").slice(1);
  const args = cont.join(" ");
  if (message.content === '!drama') {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./music/test/drama.mp3").on("finish", () =>
        VoiceConnection
      );
    });
    
  }
});
client.on("message", (message) => {
  if (message.author.bot) return;
  const cont = message.content.split(" ").slice(1);
  const args = cont.join(" ");
  if (message.content === '!flor') {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./music/test/flor.mp3").on("finish", () =>
        VoiceConnection
      );
    });
    
  }
});
client.on("message", (message) => {
  if (message.author.bot) return;
  const cont = message.content.split(" ").slice(1);
  const args = cont.join(" ");
  if (message.content === '!hpta') {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./music/test/hpta.mp3").on("finish", () =>
        VoiceConnection
      );
    });
    
  }
});
client.on("message", (message) => {
  if (message.author.bot) return;
  const cont = message.content.split(" ").slice(1);
  const args = cont.join(" ");
  if (message.content === '!santiaga') {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./music/test/santiaga.mp3").on("finish", () =>
        VoiceConnection
      );
    });
    
  }
});
client.on("message", (message) => {
  if (message.author.bot) return;
  const cont = message.content.split(" ").slice(1);
  const args = cont.join(" ");
  if (message.content === '!vaca') {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./music/test/vaca.mp3").on("finish", () =>
        VoiceConnection
      );
    });
    
  }
});
client.on("message", (message) => {
  if (message.author.bot) return;
  const cont = message.content.split(" ").slice(1);
  const args = cont.join(" ");
  if (message.content === '!dudas') {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");


    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./music/test/dudas.mp3").on("finish", () =>
        VoiceConnection
      );
    });
    
  }
});
client.on("message", (message) => {
  if (message.author.bot) return;
  const cont = message.content.split(" ").slice(1);
  const args = cont.join(" ");
  if (message.content === '!marcho') {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./music/test/marcho.mp3").on("finish", () =>
        VoiceConnection
      );
    });
    
  }
});
client.on("message", (message) => {
  if (message.author.bot) return;
  const cont = message.content.split(" ").slice(1);
  const args = cont.join(" ");
  if (message.content === '!fls') {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./music/test/fls.mp3").on("finish", () =>
        VoiceConnection
      );
    });
    
  }
});

client.on("message", (message) => {
  if (message.author.bot) return;
  const cont = message.content.split(" ").slice(1);
  const args = cont.join(" ");
  if (message.content === '!desgrac') {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./music/test/desgrac.mp3").on("finish", () =>
        VoiceConnection
      );
    });
    
  }
});

client.on("message", (message) => {
  if (message.author.bot) return;
  const cont = message.content.split(" ").slice(1);
  const args = cont.join(" ");
  if (message.content === '!prob') {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./music/test/marto.wav").on("finish", () =>
        VoiceConnection
      );
    });
    
  }
});

client.on("message", (message) => {
  if (message.author.bot) return;
  const cont = message.content.split(" ").slice(1);
  const args = cont.join(" ");
  if (message.content === '!ayno') {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./music/test/guita1.mp3").on("finish", () =>
        VoiceConnection
      );
    });
    
  }
});

client.on("message", (message) => {
  if (message.author.bot) return;
  const cont = message.content.split(" ").slice(1);
  const args = cont.join(" ");
  if (message.content === '!desar') {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./music/test/guita1.mp3").on("finish", () =>
        VoiceConnection
      );
    });
    
  }
});

client.on("message", (message) => {
  if (message.author.bot) return;
  const cont = message.content.split(" ").slice(1);
  const args = cont.join(" ");
  if (message.content === '!estres') {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./music/test/guita2.mp3").on("finish", () =>
        VoiceConnection
      );
    });
    
  }
});
client.on("message", (message) => {
  if (message.author.bot) return;
  const cont = message.content.split(" ").slice(1);
  const args = cont.join(" ");
  if (message.content === '!bga') {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./music/test/guita3.mp3").on("finish", () =>
        VoiceConnection
      );
    });
    
  }
});
client.on("message", (message) => {
  if (message.author.bot) return;
  const cont = message.content.split(" ").slice(1);
  const args = cont.join(" ");
  if (message.content === '!gol') {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./music/test/guita4.mp3").on("finish", () =>
        VoiceConnection
      );
    });
    
  }
});
client.on("message", (message) => {
  if (message.author.bot) return;
  const cont = message.content.split(" ").slice(1);
  const args = cont.join(" ");
  if (message.content === '!madre') {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./music/test/marto4.mp3").on("finish", () =>
        VoiceConnection
      );
    });
    
  }
});
client.on("message", (message) => {
  if (message.author.bot) return;
  const cont = message.content.split(" ").slice(1);
  const args = cont.join(" ");
  if (message.content === '!crack') {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./music/test/crack.mp3").on("finish", () =>
        VoiceConnection
      );
    });
    
  }
});
client.on("message", (message) => {
  if (message.author.bot) return;
  const cont = message.content.split(" ").slice(1);
  const args = cont.join(" ");
  if (message.content === '!ja') {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./music/test/ja.mp3").on("finish", () =>
        VoiceConnection
      );
    });
    
  }
});
client.on("message", (message) => {
  if (message.author.bot) return;
  const cont = message.content.split(" ").slice(1);
  const args = cont.join(" ");
  if (message.content === '!hello') {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./music/test/marto5.mp3").on("finish", () =>
        VoiceConnection
      );
    });
    
  }
});
client.on("message", (message) => {
  if (message.author.bot) return;
  const cont = message.content.split(" ").slice(1);
  const args = cont.join(" ");
  if (message.content === '!guita') {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./music/test/guita6.mp3").on("finish", () =>
        VoiceConnection
      );
    });
    
  }
});
client.on("message", (message) => {
  if (message.author.bot) return;
  const cont = message.content.split(" ").slice(1);
  const args = cont.join(" ");
  if (message.content === '!morcillo') {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./music/test/morcillo.mp3").on("finish", () =>
        VoiceConnection
      );
    });
    
  }
});