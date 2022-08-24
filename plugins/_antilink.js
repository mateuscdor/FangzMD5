let handler = m => m

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
handler.before = async function (m, { user, isBotAdmin, isAdmin }) {
  if ((m.isBaileys && m.fromMe) || m.fromMe || !m.isGroup) return true
  let chat = global.db.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink && isGroupLink) {
    await m.reply(`「 ANTI LINK 」\n\nDetected ${await conn.getName(m.sender)} Kamu Menyebar Link Group!\n\nMaaf Kamu Saya Kick AWOKAWOK!`)
    if (isAdmin) return m.reply('Eh maap cuk luwh admin njir. hehe..')
    if (!isBotAdmin) return m.reply('Bot bukan admin anj, gabisa kick si tai _-')
    let linkGC = ('https://chat.whatsapp.com/' + await conn.groupInviteCode(m.chat))
    let isLinkconnGc = new RegExp(linkGC, 'i')
    let isgclink = isLinkconnGc.test(m.text)
    if (isgclink) return m.reply('「 ANTI LINK 」\n\nBot tidak akan ngekick luwh.\nJika antilink tidak aktif')
    await conn.sendMessage(m.chat, { delete: m.key })
    await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
  }
  return true
}

export default handler
