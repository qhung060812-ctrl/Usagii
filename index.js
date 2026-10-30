const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers
    ]
});

const WELCOME_CHANNEL_ID = '15656010860839'; 
const BOT_TOKEN = 'MTU2NTY2MTgxMDAwOTU3NTQ4NA.GOg90r.yzke71qbyMjFKbgE6cN2LYwjqfup6ABV6MF2Ek';

client.once('ready', () => {
    console.log(`✅ Bot ${client.user.tag} đã hoạt động!`);
});

client.on('guildMemberAdd', async (member) => {
    const channel = member.guild.channels.cache.get(WELCOME_CHANNEL_ID);
    if (!channel) return;

    const embed = new EmbedBuilder()
        .setColor('#FFB6C1')
        .setDescription(
            `chào mừng ${member} đến với gia đình usagi~\n` +
            `chúc bạn có khoảng thời gian vui vẻ khi đồng hành cùng server!`
        )
        .setImage('https://storage.googleapis.com/generativeai-downloads/images/2979FE68-F9D3-44CF-9B0C-3DA1C48559C1_331830.jpg');

    channel.send({ embeds: [embed] });
});

client.login(BOT_TOKEN);
