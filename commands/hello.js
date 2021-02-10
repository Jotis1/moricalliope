module.exports.run = (message) => {
    message.channel.send("Hi")
}

module.exports.config = {
    name: "hello",
    aliases: ["hi", "yo", "mori"]
}