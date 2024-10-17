require('dotenv').config();
const {Client, IntentsBitField, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle} = require('discord.js');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ]  
});

const roles = [
    {
        id: '1295064790083043484', 
        label: 'Unreal Engine Group 1'
    },
    {
        id: '1295064831216324679', 
        label: 'Roblox Studio Group 1'
    },
]

client.on('ready', async (c) => {
    try {
        const channel = await client.channels.cache.get("1296546885250715708")
        if(!channel) return;

        const row = new ActionRowBuilder();

        roles.forEach((role) => {
            row.components.push(
                new ButtonBuilder().setCustomId(role.id).setLabel(role.label).setStyle(ButtonStyle.Primary)
            )
        })

        await channel.send({
            content: 'Need access to a group to oversee but dont have access? Click to get your roles!',
            components: [row]
        });
        process.exit();
    } catch (error) {
        console.log(error);
    }
})


client.login(process.env.TOKEN);