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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348171554706";




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

  sessionName:process.env.SESSION_ID || "SUHAIL_19_12_08_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDQyLFxuICAgICAgICA4MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAzOSxcbiAgICAgICAgMjUwLFxuICAgICAgICA0MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDkwLFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OCxcbiAgICAgICAgMTM2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDksXG4gICAgICAgIDQsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTksXG4gICAgICAgIDk1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjksXG4gICAgICAgIDk3LFxuICAgICAgICAzLFxuICAgICAgICA2MixcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjA1LFxuICAgICAgICA5NixcbiAgICAgICAgMjM2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTg5LFxuICAgICAgICA4NixcbiAgICAgICAgMjE3LFxuICAgICAgICAzMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTM0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAzMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzEsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMixcbiAgICAgICAgOTUsXG4gICAgICAgIDc2LFxuICAgICAgICAyOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDc0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzksXG4gICAgICAgIDgwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTI3LFxuICAgICAgICAyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTIwLFxuICAgICAgICA0OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE0LFxuICAgICAgICA2NCxcbiAgICAgICAgMjI0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTk2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTY5LFxuICAgICAgICA1NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAzN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAwLFxuICAgICAgICAxMjksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTU5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDUyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODMsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMixcbiAgICAgICAgMTMsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjE2LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MixcbiAgICAgICAgMjAxLFxuICAgICAgICAxODMsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjAyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDQzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTY4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDU5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTM0LFxuICAgICAgICA2LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTM3LFxuICAgICAgICA5NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDExMixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTkzLFxuICAgICAgICA2MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNixcbiAgICAgICAgNTgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQ3LFxuICAgICAgICA4MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTYzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTcyLFxuICAgICAgICA2NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDg3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJXM1hwZkxtcnR3RnVrMFVUTGduWngrV2M3ZXpHMk1PUnJ2ZFp6Zml1SXlFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJhd2V6cER5ZFR4SzBPb1Z1MHBUTW53XCIsXG4gIFwicGhvbmVJZFwiOiBcIjhjNWZiY2ZlLTU1ZjUtNDliMi1iNjY0LWY0OTEwMGJjM2ZkN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTQsXG4gICAgICA3LFxuICAgICAgMjQzLFxuICAgICAgMjUwLFxuICAgICAgMTUxLFxuICAgICAgNjgsXG4gICAgICAxOTIsXG4gICAgICAxOTUsXG4gICAgICA1NSxcbiAgICAgIDE5LFxuICAgICAgMTgyLFxuICAgICAgOTAsXG4gICAgICAxMTIsXG4gICAgICAyMCxcbiAgICAgIDE4NSxcbiAgICAgIDI0MCxcbiAgICAgIDIzOSxcbiAgICAgIDE1MCxcbiAgICAgIDUyLFxuICAgICAgMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE0LFxuICAgICAgMjMxLFxuICAgICAgMTM5LFxuICAgICAgNzcsXG4gICAgICAxNDgsXG4gICAgICA1NyxcbiAgICAgIDIxMSxcbiAgICAgIDE0OSxcbiAgICAgIDE2MixcbiAgICAgIDE4OSxcbiAgICAgIDExNSxcbiAgICAgIDI1MSxcbiAgICAgIDI1MixcbiAgICAgIDEyNSxcbiAgICAgIDcsXG4gICAgICA5OSxcbiAgICAgIDIxOSxcbiAgICAgIDE3MixcbiAgICAgIDEyNSxcbiAgICAgIDQ4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlhRUUdOV0ZMXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTcxNTU0NzA2OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjc2OTg3Nzc1MzI0MjI5OjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTWlldkxJQkVQclZ6YllHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJzMDVQVTEwY0QvUCtqL0NqZVBST2xka0lyUFdFdEZ4aXJGVUZPTk83VFRJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIndacjNDKy8ySHZ1Yk8vbkc2OVB0dVA4RFdDYUtUeDIyWE5TaExtM0d6VmFVdlNia1NJbXB6S2FUaTNHSEtwWGY3WGRwWURLanY4MTFReVl5VS9LQkFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIktQVWdwUm5aUWZMQTNZcjlMVFpORUg4cnZUdkNoTGFZdmN4cVlEd0tVWlNDc1lYL0dsby8wSG5ZTWFyaW1QT253M0paTWF4OTM0TU1KdGRFSXF5SmdBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNzE1NTQ3MDY6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDUwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjUxMzE1MTgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKcjZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpyNi5qc29uIjogIntcImtleURhdGFcIjpcIlhmaW9pZDBIcnRHRW43alBnalJXVWI0aE9nYU9Xd055d0xXS1BqdVNyQlU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Mzc0MjgwMDA4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjUwNDIyOTQwMjZcIn0iCn0=",  // PUT SESSION ID HERE 
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
 
