let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} MOTION PAY ${htka}

Hayðâ¹, ingin Donasi?

ð *Pembayaran*
ð³ Via: Motion Pay
ð Nomor: -----
ð¤ A/n: -----
ð Mitra: XhimmerBot
ð° Metode pembayaran: Online ( ~Cod~ )


Â®KLIK *SUDAH BAYAR* JIKA SUDAH TRANSFER 
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'QRIS', url: 'Menyusul'}},
    {index: 4, quickReplyButton: {displayText: 'Sudah membayar', id: '.sudahbayar'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['motionpay']
handler.tags = ['info']
handler.command = /^(donasimotionpay)$/i
handler.private = true

export default handler
