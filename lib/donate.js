exports.donate = (id, A187, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwhatsapp, youtube) => {
	return `
  
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
📢 Bot Aktif ; *${aktif}*
         ───
         
 *TERIMAKASIH SUDAH DONASI... SEMOGA REJEKINYA MAKIN BANYAK, SEMAKIN LANCAR, POKOKNYA TERIMAKASIH YA CUY...*        
╔════════════════════
║ *DONASI KE ${A187}*
╠════════════════════
║╭──❉ *DONASI YUK* ❉────
║│➸ *PULSA*: _+62 857-350-546-93_
║│➸ *KUOTA*: _INDOSAT_
║╰───────────────────
╠════════════════════
║  *${A187}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│➸ *Group WhatsApp*
║│ _${groupwhatsapp}_
║│➸ *Instagram <Follow>*
║│ _${instagram}_
║│➸ *Creator ${A187}*
║│ _${nomer}_
║╰───────────────────
╠════════════════════
║ _*POWERED BY JAMER FUNKY*_
╚════════════════════`
}

