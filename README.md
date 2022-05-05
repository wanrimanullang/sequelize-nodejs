# sequelize-nodejs

  # langkah pertama   
  ```shell  
  npx sequelize-cli init    
  ```
  ```shell
  npm init   
  ```
  ```shell 
  npm install pg --save 
  ```   
  membuat author pada package.json  

  ```shell
  install --save-dev sequelize-cli    
  ```
  syntax ini untuk membuat package-lock.json dan package.jso dan menginstall library yang berkaitan dengan sequelize.
  membuat folder yang dibutuhkan dalam konfigurasi nanti ke database terdiri dari :     
  
  config : sebagai konfigurasi ke database.  
  migrations : sebagai pembuatan kolom ke database.  
  models : konfigurasi sequelize.  
  seeders : memasukkan data secara otomatis kedalam database.  
  
  membuat database sesuaikan dengan username, password, database name. noted : saya disini menggunakan database postgres.
  konfigurasi config.json berada pada folder config : 
  ```javascript  
  {     
    "development": {    
      "username": " ",     //username database kalian   
      "password": " ",     //password database kalian
      "database": " ",     //nama database yang kalian buat
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
  ```

  # langkah kedua
  ```shell
  npx sequelize-cli model:generate --name User --attributes email:string 
  ```   
  generate untuk tabel User yang dimana isi nya ada coloumn email dengan tipe data String  
  generate otomatis jadi ada di folder models dan migrations  
  atur untuk kolom yang di inginkan. kalo saya ingin membuat kolom email tidak boleh kosong dan harus unik noted : diatur dalam migrations  
  Membuat beberapa kolom. sebagai berikut :     
  
  kolom user : row id, nama, dan email   
  movie : row id, name,dan user_name   
  video : row id, title.  

  # langkah ketiga
  Mengganti dropall table    
  before : await queryInterface.dropTable('Users');     
  after : await queryInterface.dropAllTables();    
  # langkah keempat
  Menambahkan script debug pada Package.json     
  pada penambahan ini dilakukan agar mempermudah dalam pemanggilan script sequelize. untuk script yang dimasukkan kedalam package.json ada 2 yaitu :  
  ```javascript
    "make-model": "npx sequelize-cli model:generate --name user --attributes email:string",  
    "migrate": "npx sequelize-cli db:migrate", 
  ``` 
  jadi pada saat nanti pemanggilan hanya cukup mengetikkan "npm run migrate" atau "npm run make-model"  
  lalu lihat kolom database (refresh) kalian.BOOM!!  
  <img src="img/database-1.PNG" >  
  <img src="img/database-2.PNG">  
  oke kita udah bisa memasukkan tabel-tabel yang kita inginkan, sekarang kita membuat studi kasus jika pada saat kita mengalami masalah dalam penginputan ehh ternyata untuk table nya ada yang kurang atau untuk type data nya ada yang salah. kita bisa melakukan undo sebagai berikut.  

  # undo migrate    
  memasukkan script untuk ke dalam package.json : "undo-migrate":"npx sequelize-cli db:migrate:undo", => jadi saat kita ingin undo hanya tekan "<b>npm undo -migrate</b>"    
<img src="img/undo-migrate_1.PNG">   berikut adalah penyimpanan script untuk undo  
<img src="img/undo-migrate_2.PNG">  berikut adalah pada saat menjalankan comment untuk undo  
<img src="img/undo-migrate_3.PNG">  BOOM! database pun tidak ada kolom lagi  
  oke selanjutnya kita akan mencoba untuk membuat seed atau memasukkan data kedalam tabel sesuai dengan yang kita mau. jadi kita tidak perlu lagi untuk membuat nya secara manual. seperti INSERT INTO dll. itu tidak akan lagi dipakai. sekarang akan kita coba secara otomatis sebagai berikut  
  "make-seed":"npx sequelize-cli seed:generate --name demo-user",    
  pada kode diatas kita masukkan dahulu ke dalam package.json. agar pemanggilan akan gampang. untuk pemanggilan "npm run make-seed" sebagai berikut:     
<img src="/img/make-seed_1.PNG">    
  lanjut untuk memasukkan data secara manual ke seeds. berdasarkan kolom yang di inginkan. berikut disini memakai kolom user.     
  ```javascript
  await queryInterface.bulkInsert(  
    'user',  
    [  
      {  
        id: 1,  
        name: 'user1',  
        email: 'user1@test.com',  
        created_at: new Date(),  
        updated_at: new Date(),  
      },  
      {  
        id: 2,  
        name: 'user2',  
        email: 'user2@test.com',  
        created_at: new Date(),  
        updated_at: new Date(),  
      },  
      {  
        id: 3,  
        name: 'user3',  
        email: 'user3@test.com',  
        created_at: new Date(),  
        updated_at: new Date(),  
      },  
    ],  
    {}  
berikut untuk kolom Channel :  
  await queryInterface.bulkInsert(  
    'channel',  
    [  
      {  
        id: 1,  
        name: 'channel1',  
        user_id: 1,  
        created_at: new Date(),  
        updated_at: new Date(),  
      },  
      {  
        id: 2,  
        name: 'channel2',  
        user_id: 2,  
        created_at: new Date(),  
        updated_at: new Date(),  
      },  
    ],  
    {}  
  ); 
  ``` 
  masukkan script "problem-seed": "sequelize db:seed:all --debug", atau   "seed": "npx sequelize-cli db:seed:all",    
  script tersebut untuk memasukkan data kedalam database nanti. perbedaan antara debug dan tidak ada debug adalah, --debug memiliki alert jika mengalami kesalahan dalam pemasukkan data. saya lebih prefer ke --debug  

    # thank you for productioncoder channel: https://youtu.be/Eu-h3iUk45o






