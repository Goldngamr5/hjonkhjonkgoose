const Discord = require("discord.js")
const fs = require("fs")
const client = new Discord.Client()
require("dotenv").config()

fs.readdir("./events/", (err, files) => {
    files.forEach((file) => {
        const eventHandler = require(`./events/${file}`)
        const eventName = file.split(".")[0]
        client.on(eventName, (...args) => eventHandler(client, ...args))
    })
})

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
client.on("message", (msg) => {
  if (msg.content === "this is going to take a while") {
    msg.reply("yes it is")
  }
})
client.on("message", (msg) => {
  if (msg.content.startsWith === "ping") {
    msg.reply("ping")
  }
})
client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("ping")
  }
})
client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("ping")
  }
})
client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("ping")
  }
})
client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("ping")
  }
})
client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("ping")
  }
})
client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("ping")
  }
})
client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("ping")
  }
})
client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("ping")
  }
})
client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("ping")
  }
})
client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("ping")
  }
})
client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("ping")
  }
})
client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("ping")
  }
})
client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("ping")
  }
})
client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("ping")
  }
})
client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("ping")
  }
})
client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("ping")
  }
})
client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("ping")
  }
})
client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("ping")
  }
})
client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("ping")
  }
})
client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("ping")
  }
})
client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("ping")
  }
})
client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("ping")
  }
})
client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("ping")
  }
})
client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("ping")
  }
})
client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("ping")
  }
})
client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("ping")
  }
})
client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("ping")
  }
})
client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("ping")
  }
})
client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("ping")
  }
})
client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("ping")
  }
})
client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("ping")
  }
})
client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("ping")
  }
})
client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("ping")
  }
})
client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("ping")
  }
})
client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("ping")
  }
})
client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("ping")
  }
})
client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("ping")
  }
})
client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("ping")
  }
})
client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("ping")
  }
})
client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("ping")
  }
})
client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("ping")
  }
})
client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("ping")
  }
})
client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("ping")
  }
})
client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("ping")
  }
})
client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("ping")
  }
})
client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("ping")
  }
})
client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("ping")
  }
})
client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("ping")
  }
})
client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("ping")
  }
})
client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("ping")
  }
})
client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("ping")
  }
})
client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("ping")
  }
})
client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("ping")
  }
})
client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("ping")
  }
})
client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("ping")
  }
})
client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("ping")
  }
})
client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("ping")
  }
})
client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("ping")
  }
})
client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("ping")
  }
})
client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("ping")
  }
})
client.on("message", (msg) => {
  if (msg.content === "that was a while") {
    msg.reply("yes it was")
  }
})
client.on("message", (msg) => {
  if (msg.content === "is it done") {
    msg.reply("yes")
  }
})
client.on("message", (msg) => {
  if (msg.content === "finally") {
    msg.reply("yep")
  }
})
client.login("NzUyNjcwMzc3Njk5ODM1OTQ1.X1bA6Q.a1sfeb_Id07U58_9hu6Lr1F1NZM")