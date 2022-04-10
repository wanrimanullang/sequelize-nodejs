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
<p>{ </p><br>
<p>  "development": {</p><br>
<p>    "username": "postgres",</p><br>
<p>    "password": "admin",</p><br>
<p>    "database": "sequelize_tutorial",</p><br>
<p>    "host": "127.0.0.1",</p><br>
<p>    "dialect": "postgres"</p><br>
<p>  },</p><br>
<p>  "test": { </p><br>
<p>    "username": "postgres",</p><br>
<p>    "password": "admin",</p><br>
<p>    "database": "sequelize_tutorial",</p><br>
<p>    "host": "127.0.0.1",</p><br>
<p>    "dialect": "postgres"</p><br>
<p>  },</p><br>
<p>  "production": {</p><br>
<p>    "username": "postgres",</p><br>
<p>    "password": "admin",</p><br>
<p>    "database": "sequelize_tutorial",</p><br>
<p>    "host": "127.0.0.1",</p><br>
<p>    "dialect": "postgres"</p><br>
<p>  }</p><br>
<p>}</p><br>
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
<p>oke selanjutnya kita akan mencoba untuk membuat seed atau memasukkan data kedalam tabel sesuai dengan yang kita mau. jadi kita tidak perlu lagi untuk membuat nya secara manual. seperti INSERT INTO dll. itu tidak akan lagi dipakai. sekarang akan kita coba secara otomatis sebagai berikut</p>
<h3>"make-seed":"npx sequelize-cli seed:generate --name demo-user",</h3><br>
<p>pada kode diatas kita masukkan dahulu ke dalam package.json. agar pemanggilan akan gampang. untuk pemanggilan "npm run make-seed" sebagai berikut: </p><br>
<img src="/img/make-seed_1.PNG"><br><br>
<h3>lanjut untuk memasukkan data secara manual ke seeds. berdasarkan kolom yang di inginkan. berikut disini memakai kolom user. </h3><br>
    await queryInterface.bulkInsert(<br>
      'user',<br>
      [<br>
        {<br>
          id: 1,<br>
          name: 'user1',<br>
          email: 'user1@test.com',<br>
          created_at: new Date(),<br>
          updated_at: new Date(),<br>
        },<br>
        {<br>
          id: 2,<br>
          name: 'user2',<br>
          email: 'user2@test.com',<br>
          created_at: new Date(),<br>
          updated_at: new Date(),<br>
        },<br>
        {<br>
          id: 3,<br>
          name: 'user3',<br>
          email: 'user3@test.com',<br>
          created_at: new Date(),<br>
          updated_at: new Date(),<br>
        },<br>
      ],<br>
      {}<br>
<h3>berikut untuk kolom Channel :</h3>
    await queryInterface.bulkInsert(<br>
      'channel',<br>
      [<br>
        {<br>
          id: 1,<br>
          name: 'channel1',<br>
          user_id: 1,<br>
          created_at: new Date(),<br>
          updated_at: new Date(),<br>
        },<br>
        {<br>
          id: 2,<br>
          name: 'channel2',<br>
          user_id: 2,<br>
          created_at: new Date(),<br>
          updated_at: new Date(),<br>
        },<br>
      ],<br>
      {}<br>
    );<br>
<h3>masukkan script "problem-seed": "sequelize db:seed:all --debug", atau <br>"seed": "npx sequelize-cli db:seed:all",</h3><br>
<p>script tersebut untuk memasukkan data kedalam database nanti. perbedaan antara debug dan tidak ada debug adalah, --debug memiliki alert jika mengalami kesalahan dalam pemasukkan data. saya lebih prefer ke --debug</p>







