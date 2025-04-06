/*_______________________________________________________________________________________________________________________________________________________________________________________________________________________
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────── 
─██████████████──██████████──██████──────────██████████████──██████──────────██████──██████████████──██████──────────██████████████──██████──██████──██████████████──████████████████─── 
─██░░░░░░░░░░██──██░░░░░░██──██░░██──────────██░░░░░░░░░░██──██░░██████████──██░░██──██░░░░░░░░░░██──██░░██──────────██░░░░░░░░░░██──██░░██──██░░██──██░░░░░░░░░░██──██░░░░░░░░░░░░██─── 
─██░░██████████──████░░████──██░░██──────────██░░██████████──██░░░░░░░░░░██──██░░██──██████░░██████──██░░██──────────██░░██████░░██──██░░██──██░░██──██░░██████████──██░░████████░░██─── 
─██░░██────────────██░░██────██░░██──────────██░░██──────────██░░██████░░██──██░░██──────██░░██──────██░░██──────────██░░██──██░░██──██░░██──██░░██──██░░██──────────██░░██────██░░██─── 
─██░░██████████────██░░██────██░░██──────────██░░██████████──██░░██──██░░██──██░░██──────██░░██──────██░░██──────────██░░██──██░░██──██░░██──██░░██──██░░██████████──██░░████████░░██─── 
─██░░░░░░░░░░██────██░░██────██░░██──────────██░░░░░░░░░░██──██░░██──██░░██──██░░██──────██░░██──────██░░██──────────██░░██──██░░██──██░░██──██░░██──██░░░░░░░░░░██──██░░░░░░░░░░░░██─── 
─██████████░░██────██░░██────██░░██──────────██░░██████████──██░░██──██░░██──██░░██──────██░░██──────██░░██──────────██░░██──██░░██──██░░██──██░░██──██░░██████████──██░░██████░░████─── 
─────────██░░██────██░░██────██░░██──────────██░░██──────────██░░██──██░░██████░░██──────██░░██──────██░░██──────────██░░██──██░░██──██░░░░██░░░░██──██░░██──────────██░░██──██░░██───── 
─██████████░░██──████░░████──██░░██████████──██░░██████████──██░░██──██░░░░░░░░░░██──────██░░██──────██░░██████████──██░░██████░░██──████░░░░░░████──██░░██████████──██░░██──██░░██████─ 
─██░░░░░░░░░░██──██░░░░░░██──██░░░░░░░░░░██──██░░░░░░░░░░██──██░░██──██████████░░██──────██░░██──────██░░░░░░░░░░██──██░░░░░░░░░░██────████░░████────██░░░░░░░░░░██──██░░██──██░░░░░░██─ 
─██████████████──██████████──██████████████──██████████████──██████──────────██████──────██████──────██████████████──██████████████──────██████──────██████████████──██████──██████████─ 
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────── 
created by Silent_lover432 🕵
contact me 923096287432 ♻️
© Copy coder alert ⚠
*/



const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const fs = require('fs');
const path = require('path');
const {runtime} = require('../lib/functions')
const axios = require('axios')
const {sleep} = require('../lib/functions')
const fetch = require('node-fetch');

cmd({
    pattern: "restart",
    alias: ["rebot","reboot"], 
    react: "🐬",
    desc: "restart the bot",
    category: "owner",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!isOwner) return reply("*_You're not bot owner 🪄._*");
const {exec} = require("child_process")
reply("*_SILENT-SOBX-MD RESTARTING...🚀_*")
await sleep(1500)
exec("pm2 restart all")
reply("*_SILENT-SOBX-MD SUCCESSFULLY RESTART...✨_*")
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({

    pattern: "settings",

    react: "☣️",

    alias: ["setting","env"],

    desc: "Get bot\'s settings list.",

    category: "main",

    use: '.setting',

    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, umarmd, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{
if (!isOwner) return reply("You're not bot owner 🪄.");
let madeSetting =`
*[ •  SILENT-SOBX-MD - SETTINGS‎ • ]*
*╭━━━〔 SETTING-LIST 📃 〕━━━┈⊷*
*┃★╭──────────────*
*┃◈┃•* *♾️ AUTO_READ_STATUS:* ➠ ${config.AUTO_READ_STATUS}
*┃◈┃•* *♾️ MODE:* ➠ ${config.MODE} 
*┃◈┃•* *♾️ AUTO_VOICE:* ➠ ${config.AUTO_VOICE} 
*┃◈┃•* *♾️ AUTO_STICKER:* ➠ ${config.AUTO_STICKER} 
*┃◈┃•* *♾️ AUTO_REPLY:* ➠ ${config.AUTO_REPLY} 
*┃◈┃•* *♾️ AUTO_REPLY_STATUS:* ➠ ${config.AUTO_REPLY_STATUS} 
*┃◈┃•* *♾️ ALIVE_IMG:* ➠ ${config.ALIVE_IMG} 
*┃◈┃•* *♾️ ALIVE_MSG:* ➠ ${config.ALIVE_MSG} 
*┃◈┃•* *♾️ ANTI_LINK:* ➠ ${config.ANTI_LINK} 
*┃◈┃•* *♾️ ANTI_BAD:* ➠ ${config.ANTI_BAD} 
*┃◈┃•* *♾️ PREFIX:* ➠ [${config.PREFIX}]
*┃◈┃•* *♾️ FAKE_RECORDING:* ➠ ${config.FAKE_RECORDING}
*┃◈┃•* *♾️ FAKE_TYPING:* ➠ ${config.FAKE_TYPING}
*┃◈┃•* *♾️ AUTO_REACT:* ➠ ${config.AUTO_REACT} 
*┃◈┃•* *♾️ HEART_REACT:* ➠ ${config.HEART_REACT} 
*┃◈┃•* *♾️ OWNER_REACT:* ➠ ${config.OWNER_REACT} 
*┃◈┃•* *♾️ BOT_NAME:* ➠ ${config.BOT_NAME}
*┃◈┃•* *♾️ READ_MESSAGE:* ➠ ${config.READ_MESSAGE}
*┃◈┃•* *♾️ READ_CMD:* ➠ ${config.READ_CMD}
*┃◈┃•* *♾️ CAPTION:* ➠ ${config.CAPTION}
*┃◈┃•* *♾️ ALWAYS_ONLINE:* ➠ ${config.ALWAYS_ONLINE}
*┃◈┃•* *♾️ CURRENT_STATUS:* ➠ ${config.CURRENT_STATUS}
*┃◈┃•* *♾️ STATUS_REPLY:* ➠ ${config.STATUS_REPLY}
*┃◈┃•* *♾️ STATUS_REACT:* ➠ ${config.STATUS_REACT}
*┃◈┃•* *♾️ ANTI_DEL_PATH:* ➠ ${config.ANTI_DEL_PATH}
*┃★╰──────────────*
*╰━━━━━━━━━━━━━━━┈⊷*

*•────────────•⟢*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ sɪʟᴇɴᴛʟᴏᴠᴇʀ⁴³²
*•────────────•⟢*
`


await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeSetting, 
                             contextInfo: {

mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363189714152560@newsletter',
                    newsletterName: 'sιℓεηт-sσвx-м∂',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });
    } catch (e) {
        console.error(e);
        reply(`An error occurred: ${e.message}`);
    }
});

cmd({
  pattern: 'system',
  alias: ["status", "runtime", "uptime","info"],
  react: '🚀',
  desc: "Check bot's version, system stats, and update info.",
  category: 'info',
  filename: __filename
}, async (conn, mek, m, {
  from, sender, pushname, reply
}) => {
  try {
    // Read local version data
    const localVersionPath = path.join(__dirname, '../my_data/version.json');
    let localVersion = 'Unknown';
    let changelog = 'No changelog available.';
    if (fs.existsSync(localVersionPath)) {
      const localData = JSON.parse(fs.readFileSync(localVersionPath));
      localVersion = localData.version;
      changelog = localData.changelog;
    }

    // Fetch latest version data from GitHub
    const rawVersionUrl = 'https://raw.githubusercontent.com/SILENTLOVER0432/SILENT-SOBX-XMD/main/my_data/version.json';
    let latestVersion = 'Unknown';
    let latestChangelog = 'No changelog available.';
    try {
      const { data } = await axios.get(rawVersionUrl);
      latestVersion = data.version;
      latestChangelog = data.changelog;
    } catch (error) {
      console.error('Failed to fetch latest version:', error);
    }

    // Count total plugins
    const pluginPath = path.join(__dirname, '../plugins');
    const pluginCount = fs.readdirSync(pluginPath).filter(file => file.endsWith('.js')).length;

    // Count total registered commands
    const totalCommands = commands.length;

    // System info
    const uptime = runtime(process.uptime());
    const ramUsage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
    const totalRam = (os.totalmem() / 1024 / 1024).toFixed(2);
    const hostName = os.hostname();
    const lastUpdate = fs.statSync(localVersionPath).mtime.toLocaleString();

    // GitHub stats
    const githubRepo = 'https://github.com/SILENTLOVER0432/SILENT-SOBX-XMD';

    // Check update status
    let updateMessage = `✅ YOUR BOT SILENT-SOBX-MD IS UP-TO-DATE! 🚀❤️`;
    if (localVersion !== latestVersion) {
      updateMessage = `🚀 YOUR BOT SILENT-SOBX-MD IS OUTDATED!
🔹 *CURRENT VERSION:* ${localVersion}
🔹 *LATEST VERSION:* ${latestVersion}

USE *.UPDATE* TO UPDATE YOUR BOT.`;
    }

    const statusMessage = `🌟 *GOOD ${new Date().getHours() < 12 ? 'MORNING' : 'NIGHT'}, ${pushname}!* 🌟\n\n` +
      `📌 *BOT NAME:* SILENT-SOBX-MD\n🔖 *CURRENT VERSION 🚀:* ${localVersion}\n📢 *LATEST VERSION:* ${latestVersion}\n📂 *TOTAL PLUGINS:* ${pluginCount}\n🔢 *TOTAL COMMANDS🚀:* ${totalCommands}\n\n` +
      `💾 *SYSTEM INFO:*\n⏳ *UPTIME:* ${uptime}\n📟 *RAM USAGE:* ${ramUsage}MB / ${totalRam}MB\n⚙️ *HOST NAME:* ${hostName}\n📅 *LAST UPDATE:* ${lastUpdate}\n\n*_♻️PLATFORM:➠_* ${process.env.DYNO ? "Heroku" : "Localhost"}` +
      `📝 *CHANGELOG:*\n${latestChangelog}\n\n` +
      `⭐ *GITHUB REPO:* ${githubRepo}\n👤 *OWNER:* [SILENTLOVER432](https://github.com/SILENTLOVER0432)\n\n${updateMessage}\n\n🚀 *HEY! DON'T FORGET TO FORK & STAR 🌟 THE REPO!*`;

    // Send the status message with an image
    await conn.sendMessage(from, {
      image: { url: 'https://telegra.ph/file/2a06381b260c3f096a612.jpg' },
      caption: statusMessage,
      contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363189714152560@newsletter',
          newsletterName: 'SILENT-SOBX-MD',
          serverMessageId: 143
        }
      }
    }, { quoted: mek });
  } catch (error) {
    console.error('Error fetching version info:', error);
    reply('❌ An error occurred while checking the bot system.');
  }
});

cmd({
    pattern: "repo",
    alias: ["sc", "script", "repository"],
    desc: "Fetch information about a GitHub repository.",
    react: "📂",
    category: "info",
    filename: __filename,
},
async (conn, mek, m, { from, reply }) => {
    const githubRepoURL = 'https://github.com/SILENTLOVER0432/SILENT-SOBX-XMD';

    try {
        // Extract username and repo name from the URL
        const [, username, repoName] = githubRepoURL.match(/github\.com\/([^/]+)\/([^/]+)/);

        // Fetch repository details using GitHub API
        const response = await fetch(`https://api.github.com/repos/${username}/${repoName}`);
        
        if (!response.ok) {
            throw new Error(`GitHub API request failed with status ${response.status}`);
        }

        const repoData = await response.json();

        // Format the repository information
        const formattedInfo = `🌟 *GOOD ${new Date().getHours() < 12 ? 'MORNING' : 'NIGHT'} ${pushname}!* 🌟\n\n> *SILENT-SOBX-XMD A BEST MULTI DEVICE WHATSAPP BOT THIS SCRIPT CREATED TO USE ~@bailey's~ SCRIPT CREATED BY CYBER-X TEAM PUBLISHERS SILENTLOVER 432 © COPY CODERS GIVE CREDITS ❤️⚠️🚀*\n*[ PROJECT • NAME:📦 ]*\n> ${repoData.name}\n\n*[ PROJECT • OWNER:🪩 ]*\n> SILENTLOVER432❤️\n\n*[ PROJECT STARS:🌟 ]*\n> ${repoData.stargazers_count}\n\n*[ PROJECT FORKS:🚀 ]*\n> ${repoData.forks_count}\n\n*[ PROJECT • LINK:💫 ]*\n> ${repoData.html_url}\n\n*[ PROJECT DESCRIPTION:🤖 ]*\n> ${repoData.description || '*THE WORLD 🌍 BEST WHATSAPP BOT CREATED BY SILENTLOVER432 ♥️*'}\n\n*DON'T FORGET TO STAR 🌟 AND FORK REPOSITORY 🚀*\n\n> *© POWERED BY SILENTLOVER432 ♥️*`;

        // Send an image with the formatted info as a caption and context info
        await conn.sendMessage(from, {
            image: { url: `https://files.catbox.moe/vswco6` },
            caption: formattedInfo,
            contextInfo: { 
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363189714152560@newsletter',
                    newsletterName: 'SILENT-SOBX-MD',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

        // Send the audio file with context info
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/SILENTLOVER0432/SILENT-SOBX-MD-DATABASE/raw/refs/heads/main/Auto_voice/AUD-20250309-WA0019.m4a' },
            mimetype: 'audio/mp4',
            ptt: true,
            contextInfo: { 
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363189714152560@newsletter',
                    newsletterName: 'SILENT-SOBX-MD',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (error) {
        console.error("Error in repo command:", error);
        reply("Sorry, something went wrong while fetching the repository information. Please try again later.");
    }
});
