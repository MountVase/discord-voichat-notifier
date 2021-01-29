require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client()


client.on('ready', () => {
    console.log('Connected as ', client.user.tag)
})

const secret = process.env.BOT_SECRET_TOKEN

client.login(secret)


client.on('voiceStateUpdate', (prevMember, newMember) => {
    
    console.log('old: ', prevMember)
    console.log('new: ', newMember)
    //let channel = newMember.channel
    let channel = "800656175297200149"

    const generalChannel = client.channels.cache.get(channel)
    
    // if it's the first person joining voice, notify everyone
    if (!prevMember.channelID) {
        generalChannel.send(`@everyone ${newMember} just hopped on voice. WARWEEK Tribe go see what's up!`)
    }
})