# sequelize-nodejs

<h1> tutorial install sequelize </h1>
<h3>install --save-dev sequelize-cli</h3><br>
<p>syntax ini untuk membuat package-lock.json dan package.jso dan menginstall library yang berkaitan dengan sequelize. </p>
<h3>npx sequelize-cli init</h3><br>
<h3>npm init</h3><br>
<h3>npm install pg --save</h3><br>
<p>membuat author pada package.json</p>
<p>membuat folder yang dibutuhkan dalam konfigurasi nanti ke database terdiri dari : </p><br>
<ul>
    <li>config : sebagai konfigurasi ke database.</li>
    <li>migrations : sebagai pembuatan kolom ke database.</li>
    <li>models : konfigurasi sequelize.</li>
    <li>seeders : memasukkan data secara otomatis kedalam database.</li>
</ul>
<h3>membuat database sesuaikan dengan username, password, database name. noted : saya disini menggunakan database postgres.
<h3>konfigurasi config.json berada pada folder config : </h3>
{
  "development": {
    "username": "postgres",
    "password": "admin",
    "database": "sequelize_tutorial",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": { 
    "username": "postgres",
    "password": "admin",
    "database": "sequelize_tutorial",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "postgres",
    "password": "admin",
    "database": "sequelize_tutorial",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
<h3>npx sequelize-cli model:generate --name User --attributes email:string</h3><br>
<p>generate untuk tabel User yang dimana isi nya ada coloumn email dengan tipe data String</p>
<p>generate otomatis jadi ada di folder models dan migrations</p>
<p>atur untuk kolom yang di inginkan. kalo saya ingin membuat kolom email tidak boleh kosong dan harus unik noted : diatur dalam migrations</p>
<h3>Membuat beberapa kolom. sebagai berikut : </h3><br>
<ul>
    <li>kolom user : row id, nama, dan email </li>
    <li>movie : row id, name,dan user_name </li>
    <li>video : row id, title.</li>
</ul>
<h3>Mengganti dropall table</h3><br>
<p>before : await queryInterface.dropTable('Users');</p> <br>
<p>after : await queryInterface.dropAllTables();</p><br>
<h3>Menambahkan script debug pada Package.json </h3><br>
<p>pada penambahan ini dilakukan agar mempermudah dalam pemanggilan script sequelize. untuk script yang dimasukkan kedalam package.json ada 2 yaitu :</p>
<br><p>"make-model": "npx sequelize-cli model:generate --name user --attributes email:string",</p>
<br><p>"migrate": "npx sequelize-cli db:migrate",</p>
<br><p>jadi pada saat nanti pemanggilan hanya cukup mengetikkan "npm run migrate" atau "npm run make-model"</p>
<h3>lalu lihat kolom database (refresh) kalian.BOOM!!<h3>
<img src="img/database-1.PNG" ><br>
<img src="img/database-2.PNG"><br>
<p>oke kita udah bisa memasukkan tabel-tabel yang kita inginkan, sekarang kita membuat studi kasus jika pada saat kita mengalami masalah dalam penginputan ehh ternyata untuk table nya ada yang kurang atau untuk type data nya ada yang salah. kita bisa melakukan undo sebagai berikut.</p>

<h3>undo migrate<h3><br>
<p>memasukkan script untuk ke dalam package.json : "undo-migrate":"npx sequelize-cli db:migrate:undo", => jadi saat kita ingin undo hanya tekan "<b>npm undo -migrate</b>"</p><br>
<img src="img/undo-migrate_1.PNG"> <p>berikut adalah penyimpanan script untuk undo</p>
<img src="img/undo-migrate_2.PNG"><p>berikut adalah pada saat menjalankan comment untuk undo</p>
<img src="img/undo-migrate_3.PNG"><p>BOOM! database pun tidak ada kolom lagi</p>






