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




const yts = require('yt-search');
const path = require('path');
const axios = require("axios");
const fs = require('fs');
const config = require('../config');
const { cmd } = require('../command');
const { ytsearch, ytmp3, ytmp4 } = require('@dark-yasiya/yt-dl.js'); 

// video

cmd({
  'pattern': 'video',
  'alias': ["ytv", "ytmp4"], 
  'react': '🎬',
  'desc': "Download video from YouTube by searching for keywords.",
  'category': "media",
  'use': ".video <keywords>",
  'filename': __filename
}, async (_0x24c315, _0x3a6d67, _0x1fe974, {
  from: _0x767c92,
  args: _0x55bbc3,
  reply: _0x5b120e
}) => {
  try {
    const _0x4d3a95 = _0x55bbc3.join(" ");
    if (!_0x4d3a95) {
      return _0x5b120e("*Please provide a video title or keywords to search for.*");
    }
    _0x5b120e("*_VIDEO FIND UPLOADING...🚀_*");
    const _0x2110e1 = await yts(_0x4d3a95);
    if (!_0x2110e1.videos || _0x2110e1.videos.length === 0x0) {
      return _0x5b120e("❌ No results found for \"" + _0x4d3a95 + "\".");
    }
    const _0x4ed4c1 = _0x2110e1.videos[0x0];
    const _0x2ef690 = _0x4ed4c1.url;
    const _0x23109c = "https://api.davidcyriltech.my.id/download/ytmp4?url=" + _0x2ef690;
    const _0x567fa0 = await axios.get(_0x23109c);
    if (!_0x567fa0.data.success) {
      return _0x5b120e("❌ Failed to fetch video for \"" + _0x4d3a95 + "\".");
    }
    const {
      title: _0x390c02,
      download_url: _0x519f84
    } = _0x567fa0.data.result;
    await _0x24c315.sendMessage(_0x767c92, {
      'video': {
        'url': _0x519f84
      },
      'mimetype': 'video/mp4',
      'caption': _0x390c02\n\nPOWERD BY SILENTLOVER432 ♥️
    }, {
      'quoted': _0x3a6d67
    });
  } catch (_0x5e8828) {
    console.error(_0x5e8828);
    _0x5b120e("❌ An error occurred while processing your request.");
  }
});
// play

cmd({ 
     pattern: "play2", 
     alias: ["song2", "yta2"], 
     react: "🎶", 
     desc: "Download Youtube song",
     category: "main", 
     use: '.song2 < Yt url or Name >', 
     filename: __filename }, 
     async (conn, mek, m, { from, prefix, quoted, q, reply }) => 
     
     { try { if (!q) return await reply("Please provide a YouTube URL or song name.");

const yt = await ytsearch(q);
    if (yt.results.length < 1) return reply("No results found!");
    
    let yts = yt.results[0];  
    let apiUrl = `https://apis.davidcyriltech.my.id/youtube/mp3?url=${encodeURIComponent(yts.url)}`;
    
    let response = await fetch(apiUrl);
    let data = await response.json();
    
    if (data.status !== 200 || !data.success || !data.result.downloadUrl) {
        return reply("Failed to fetch the audio. Please try again later.");
    }
    
    let ytmsg = `╭━━━〔 *sɪʟᴇɴᴛ-sᴏʙx-ᴍᴅ* 〕━━━┈⊷
┃▸╭───────────
┃▸┃๏ *MUSIC DOWNLOADER*
┃▸└───────────···๏
╰────────────────┈⊷
╭━━❐
┇๏ *Tital* -  ${yts.title}
┇๏ *Duration* - ${yts.timestamp}
┇๏ *Views* -  ${yts.views}
┇๏ *Author* -  ${yts.author.name} 
┇๏ *Link* -  ${yts.url}
╰━━❑
> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ sɪʟᴇɴᴛʟᴏᴠᴇʀ⁴³² ♡*`;



// Send song details
    await conn.sendMessage(from, { image: { url: data.result.image || '' }, caption: ytmsg }, { quoted: mek });
    
    // Send audio file
    await conn.sendMessage(from, { audio: { url: data.result.downloadUrl }, mimetype: "audio/mpeg" }, { quoted: mek });
    
    // Send document file
    await conn.sendMessage(from, { 
        document: { url: data.result.downloadUrl }, 
        mimetype: "audio/mpeg", 
        fileName: `${data.result.title}.mp3`, 
        caption: `> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ sɪʟᴇɴᴛʟᴏᴠᴇʀ⁴³² ♡*`
    }, { quoted: mek });

} catch (e) {
    console.log(e);
    reply("An error occurred. Please try again later.");
}

});
