module.exports = {
    name: "kiss",
    description: "Creates a new embed",
    usage: '>kiss',
    trigger: "kiss",
    category: "Stuff",
    async execute(client, msg, args) {
        msg.mentions.members.forEach(element => {
            msg.channel.send(`*Kisses ${element.user.username}*`)
        })
        msg.delete()
    }
}