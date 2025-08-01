# isa-landing-page

## Project setup
1.	Instal paket Vue dengan `npm install -g @vue/cli` di terminal. Syarat khusus, harus memiliki Node.JS versi 8.9 atau versi terbaru. Pastikan versi Vue adalah versi @vue/cli 5.0.8, bisa dicek dengan menjalankan `vue –version` di terminal. Dapat dicek di dokumentasi Vue CLI.
2.	Jalankan `npm update -g @vue/cli` untuk memastikan memiliki dependency terupdate.
3.	Buat proyek menggunakan `vue create (nama-proyek)`. Kemudian pilih `preset: Default ([Vue 3] babel, eslint)` dan tunggu hinggal instalasi selesai.
4.	Masuk ke proyek dengan `cd (nama-proyek)`.
5.	Tambah baris `"inspect": "vue-cli-service inspect > webpack.config.output.js"` pada file package.json, tepat setelah `“"lint": "vue-cli-service lint" di “scripts”`.
6.	Jalankan npm run inspect agar file bernama `webpack.config.output.js` muncul.
7.	Jika file tesebut telah muncul, pastikan di dalam file `webpack.config.output.js` hanya ada satu `new HtmlWebpackPlugin` dan pastikan rute folder (path) antara plugin dan windows sama (seperti nama, separator, dash, dan lain-lain).
8.	Jika tidak ada yang berbeda, maka bisa langsung manjalankan `npm run serve` untuk memulai proyek.
9.	Jika terdapat `ERROR in Conflict: Multiple assets emit different content to the same filename index.html` saat menjalankan `npm run serve`, maka terdapat perbedaan rute folder (path) antara plugin dan windows. Untuk menghilangkan error ini, ubah isi `vue.config.js` menjadi:
<pre> ```js module.exports = {
  chainWebpack: config => {
    // to make the webpack trully ignore any index.html, other than only from new HtmlWebpackPlugin
    config.plugin('copy').tap(args => {
      args[0].patterns[0].globOptions.ignore.push('**/index.html');
      return args;
    });
  }
};
 ``` </pre>
10.	Jika App dapat berjalan lancar, kemudian instal SASS dengan menjalankan `npm install -D sass-loader sass`  di terminal untuk css.
11.	Kemudian agar dapat membuat animasi, instal GSAP dengan manjalankan `npm install gsap` di terminal.
12.	Terakhir, install Plyr melalui `npm i vue-plyr` dan `npm add vue-plyr –save` untuk manambahkan paket ke package.json untuk menambahkan video youtube di laman.
13.	Setup proyek selesai
