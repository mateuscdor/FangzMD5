let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} GOPAY ${htka}

Hayðâ¹, ingin Donasi?

ð *Pembayaran*
ð³ Via: Gopay
ð Nomor: ----
ð¤ A/n: XhimmerBot
ð Mitra: -----
ð° Metode pembayaran: Online ( ~Cod~ )


Â®KLIK *SUDAH BAYAR* JIKA SUDAH TRANSFER 
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'QRIS', url: Menyusul'}},
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
handler.help = ['gopay']
handler.tags = ['info']
handler.command = /^(donasidana)$/i
handler.private = true

export default handler
