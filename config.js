const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "08171554706";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_18_24_08_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjM3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDQsXG4gICAgICAgIDQwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4LFxuICAgICAgICAyMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAzNixcbiAgICAgICAgNTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjI4LFxuICAgICAgICA5MixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDU2LFxuICAgICAgICAzNixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMixcbiAgICAgICAgMTk1LFxuICAgICAgICAzMixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDMsXG4gICAgICAgIDIyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjExLFxuICAgICAgICA2MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTk5LFxuICAgICAgICA5NyxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjIyLFxuICAgICAgICA2NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDExNixcbiAgICAgICAgMzMsXG4gICAgICAgIDE1LFxuICAgICAgICAxODQsXG4gICAgICAgIDYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyOSxcbiAgICAgICAgMjE4LFxuICAgICAgICAwLFxuICAgICAgICA4NixcbiAgICAgICAgMzMsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE3LFxuICAgICAgICA1NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDksXG4gICAgICAgIDU3LFxuICAgICAgICAxODQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDg3LFxuICAgICAgICAyMTksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDExLFxuICAgICAgICA2NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMCxcbiAgICAgICAgODAsXG4gICAgICAgIDc3LFxuICAgICAgICAzMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzksXG4gICAgICAgIDcyLFxuICAgICAgICA0MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0MixcbiAgICAgICAgNzUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDM4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDYzLFxuICAgICAgICAxODUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzLFxuICAgICAgICAzOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDI3LFxuICAgICAgICA0NyxcbiAgICAgICAgMjUyLFxuICAgICAgICA2NixcbiAgICAgICAgMTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTgxLFxuICAgICAgICA0MyxcbiAgICAgICAgODYsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQxLFxuICAgICAgICA1MixcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDQxLFxuICAgICAgICA2MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTc2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTAxLFxuICAgICAgICA1NixcbiAgICAgICAgNjQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTc5LFxuICAgICAgICA1NixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI2LFxuICAgICAgICAxMixcbiAgICAgICAgNzMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDk3LFxuICAgICAgICA2NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZWQwcVhoUWRoMm9aSUpQNUhtRHAzUkwwQVlaeXByWmlONy9tc0tNeHV3QT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiX2haeWVaVFpSLUtJY0VfVF9ZSVJ1UVwiLFxuICBcInBob25lSWRcIjogXCJmZjc1OWQ2Zi1lOTBhLTQ1YTMtODk1Ny0wYjhhYTJiMjJjZTNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ1LFxuICAgICAgMzQsXG4gICAgICAxNSxcbiAgICAgIDc1LFxuICAgICAgNTIsXG4gICAgICAxNyxcbiAgICAgIDkwLFxuICAgICAgMzIsXG4gICAgICAxODEsXG4gICAgICAxNjgsXG4gICAgICAxMTgsXG4gICAgICAyNTQsXG4gICAgICAxNDQsXG4gICAgICAyNTUsXG4gICAgICA4NCxcbiAgICAgIDE1NyxcbiAgICAgIDEwNCxcbiAgICAgIDIxNixcbiAgICAgIDExNSxcbiAgICAgIDE0OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4LFxuICAgICAgMTk1LFxuICAgICAgMTkxLFxuICAgICAgODIsXG4gICAgICAyLFxuICAgICAgMTk3LFxuICAgICAgMTEwLFxuICAgICAgMjI2LFxuICAgICAgMjUxLFxuICAgICAgMTcsXG4gICAgICAyNDYsXG4gICAgICAxMTksXG4gICAgICAyNTEsXG4gICAgICA5MixcbiAgICAgIDEwMixcbiAgICAgIDI0NixcbiAgICAgIDcyLFxuICAgICAgMTIxLFxuICAgICAgMTgsXG4gICAgICAyMTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUVIzUVgyNEpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNzE1NTQ3MDY6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzY5ODc3NzUzMjQyMjk6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNaWV2TElCRU02Y3lMWUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInMwNVBVMTBjRC9QK2ovQ2plUFJPbGRrSXJQV0V0RnhpckZVRk9OTzdUVEk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwia0pUNXFMTlpvTGppQ0tQd01hMjlqcDNjMmhHRytIVjNoVENNSnNuYk9YNE1yYWd1aFJtaTdITWpBSnI4Y25hOVBuMjJJUUJkTnVSS2F4TmlpUVlLQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTXBnaGdERFBXRk5zdFFJY3ZFK0MzOXlKclZFclFrcEZXWUJQRFJRa3orQS9NZUJRajBaaTFQcVhUNWIwU1lvaVFCaklQUzI4SEdYcjhId3ZTVUoramc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE3MTU1NDcwNjoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNTA0MjI1OFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
