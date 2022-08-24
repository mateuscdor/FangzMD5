let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} *Apa Su?* ${htka}

        IG: https://instagram.com/_alv.stn
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Chat', url: 'https://wa.me/6287734910547'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.customPrefix = /^(woi|hallo|p)$/i
handler.command = new RegExp

export default handler
