/*
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'Masukin Apikey', // Ambil apikey di zenz biar fitur yg make api work
}

// Other
global.owner = ['6285648504586','6285649064565','6285804325802']
global.premium = ['6285649064565']
global.ownernomer = '6285804325802'
global.ownername = '𝙵𝙰𝙸𝚁𝚄𝚉'
global.botname = '𝙵𝚁𝚉 - 𝙼𝙳 '
global.footer = '👑ғᴀɪʀᴜᴢ㍐​᭄'
global.ig = 'https://instagram.com/fairus_makers'
global.email = 'fairuzztzy@gmail.com'
global.region = 'Indonesia'
global.sc = 'https://youtube.com/channel/UC0kxCB-Uci5et_Tz9PcrB6w'
global.myweb = 'https://bit.ly/fạiruzmạkers'
global.packname = '𝙵𝚁𝚉 - 𝙼𝙳'
global.author = '𝙽𝙾𝚃 𝙵𝙰𝙼𝙾𝚄𝚂 💥'
global.sessionName = 'fuck'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '༆⃟➢⊰'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 1000
}
global.thumb = fs.readFileSync('./image/chika.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
