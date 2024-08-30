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

  sessionName:process.env.SESSION_ID || "SUHAIL_22_09_08_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDY2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjksXG4gICAgICAgIDYwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNixcbiAgICAgICAgMjAzLFxuICAgICAgICA5MixcbiAgICAgICAgNzMsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwMixcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTksXG4gICAgICAgIDEyLFxuICAgICAgICAxMDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDg3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTE4LFxuICAgICAgICA4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDMsXG4gICAgICAgIDk4LFxuICAgICAgICA2NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxODQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODUsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjE5LFxuICAgICAgICA4MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDUwLFxuICAgICAgICA3MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDExLFxuICAgICAgICAyMDMsXG4gICAgICAgIDk4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAzMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAzNixcbiAgICAgICAgNDMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTAwLFxuICAgICAgICA3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDQ0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTUxLFxuICAgICAgICA4NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTcxLFxuICAgICAgICA1NixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTExLFxuICAgICAgICA1MyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTksXG4gICAgICAgIDI5LFxuICAgICAgICA1NyxcbiAgICAgICAgMjUwLFxuICAgICAgICA1OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIsXG4gICAgICAgIDExNixcbiAgICAgICAgOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjEyLFxuICAgICAgICA1OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTAxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODIsXG4gICAgICAgIDM2LFxuICAgICAgICAzNixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDkxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDQ0LFxuICAgICAgICA1NixcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTExLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDY4LFxuICAgICAgICA5MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNyxcbiAgICAgICAgODMsXG4gICAgICAgIDIyLFxuICAgICAgICA1MixcbiAgICAgICAgMjEsXG4gICAgICAgIDg0LFxuICAgICAgICA5NixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIwLFxuICAgICAgICA0NSxcbiAgICAgICAgNixcbiAgICAgICAgMjQ2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTM1LFxuICAgICAgICA5OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTEyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicjJzbTJiVzRob0FQdm5yOFYwajJUSWVsRWRsaXF4M2hrbXBGd2ltd3hiRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibUdtYmRudlFST1ctdk00c0MwZmhlZ1wiLFxuICBcInBob25lSWRcIjogXCI4MjI5Nzc2My1hNzVjLTQ2YzUtOGE3YS05NDc5NzU3NjdmODZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAwLFxuICAgICAgNTEsXG4gICAgICAyNSxcbiAgICAgIDExMSxcbiAgICAgIDI0NyxcbiAgICAgIDgwLFxuICAgICAgNzIsXG4gICAgICAxODAsXG4gICAgICAxODIsXG4gICAgICA2NSxcbiAgICAgIDQ5LFxuICAgICAgMzIsXG4gICAgICAyNCxcbiAgICAgIDEzOCxcbiAgICAgIDQ0LFxuICAgICAgNjEsXG4gICAgICAyMzQsXG4gICAgICA0MyxcbiAgICAgIDkxLFxuICAgICAgMjQxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1LFxuICAgICAgMjI3LFxuICAgICAgMTUwLFxuICAgICAgMTM3LFxuICAgICAgMjUsXG4gICAgICA0OCxcbiAgICAgIDE5MyxcbiAgICAgIDIxLFxuICAgICAgMjQsXG4gICAgICA1NixcbiAgICAgIDE4NixcbiAgICAgIDExNyxcbiAgICAgIDYyLFxuICAgICAgNTMsXG4gICAgICAxNjYsXG4gICAgICA3OCxcbiAgICAgIDU3LFxuICAgICAgODIsXG4gICAgICA2NCxcbiAgICAgIDI5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIldTWlRBU1lQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTcxNTU0NzA2OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjc2OTg3Nzc1MzI0MjI5OjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTWlldkxJQkVJQ0d5YllHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJzMDVQVTEwY0QvUCtqL0NqZVBST2xka0lyUFdFdEZ4aXJGVUZPTk83VFRJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImNIWVk4TDczWmNqUWxVVENZemJueGlkUnB1QTVOUDE4Sy9rMm9zOTZ2OXE1S2RQaVY3OTBWWFNOWCtwZ3ZNRUx3NlE0RklaT01QVVJPZFc0NndoTUNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkl0Z3ppaUllVzVJTVdGaHFTc1BzMmpTR3JmUmdxWUpKN3lpSHNMbHl3VXdYWHlGVXVvNDc1UDRlelFpWmNyNFYvY1AzOTE5Tkxlc3dqOUJFdGVFYWpnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNzE1NTQ3MDY6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDUwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjUwNTU3NDcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKcjZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpyNi5qc29uIjogIntcImtleURhdGFcIjpcIlhmaW9pZDBIcnRHRW43alBnalJXVWI0aE9nYU9Xd055d0xXS1BqdVNyQlU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Mzc0MjgwMDA4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjUwNDIyOTQwMjZcIn0iCn0=",  // PUT SESSION ID HERE 
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
 
