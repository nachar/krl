new Vue({
     el: '#meApp',
     data: {
          band: [
               {
                    name: 'ILan Spollansky',
                    role: 'Animación',
                    description: 'Fundador de KRL Producciones SpA. Actor y Músico. Director de la primera orquesta de Rock & Clown del mundo , profesor de School Of Rock',
                    descriptionInside: 'Fundador de KRL Producciones SpA. Actor y Músico. Director de la primera orquesta de Rock & Clown del mundo , profesor de School Of Rock. La Ciscu Margaret Orquesta Clown, School of Rock , KRL. Se ha presentado en escenarios como; Movistar Arena, Quinta Vergara,Lollapalooza España, Francia, Perú, Colombia , Brasil y todo Chile.',
                    icon: '',
                    img: 'img/band_ilan_02.jpg',
                    imgInside: 'img/band_ilan_03.jpg',
                    right: false
               },
               {
                    name: 'Miguel Esbir',
                    role: 'Guitarra',
                    description: 'Fundador de KRL Producciones SpA . Músico, Compositor, arreglista. “Estudios especializados de Guitarra electrica en Universidad Musicians Institute (MI) Los Angeles, Hollywood, California.”',
                    descriptionInside: 'Fundador de KRL Producciones SpA . Músico, Compositor, arreglista. “Estudios especializados de Guitarra electrica en Universidad Musicians Institute (MI) Los Angeles, Hollywood, California.”. Cantante, compositor y guitarrista de la banda Vinilos (2010 - 2015), La Discreta Era (2016) y KRL . Director artístico, musical y guitarrista de Miguelo, girando constantemente de Arica a Punta Arenas por casinos Enjoy y Dreams.Profesor de guitarra en School Of Rock.',
                    icon: '',
                    img: 'img/band_miguel_03.jpg',
                    imgInside: 'img/gallery_01.jpg',
                    right: true
               },
               {
                    name: 'Daniel Concha',
                    role: 'Bajo',
                    description: 'Co-Fundador de KRL Producciones SpA. Músico compositor y arreglista con especialidad en bajo eléctrico y contrabajo. “Titulado de Pedagogía en la Universidad de Chile”',
                    descriptionInside: 'Co-Fundador de KRL Producciones SpA. Músico compositor y arreglista con especialidad en bajo eléctrico y contrabajo. “Titulado de Pedagogía en la Universidad de Chile”. Eventos y giras con destacados artistas nacionales por dentro de chile (Mario Guerrero, Neven Ilic, Miguelo, Alexis Fuentes, Jorge Bravo, Sonora Palacios, entre otros) y también en giras internacionales en conjunto con sus bandas (Aisles, Pelusa, Cala, entre otros).',
                    icon: '',
                    img: 'img/band_daniel_03.jpg',
                    imgInside: 'img/band_daniel.jpg',
                    right: false
               },
               {
                    name: 'Gonzalo Morales',
                    role: 'Teclado',
                    description: 'Co-Fundador de KRL Producciones SpA. Músico compositor con especialidad en Piano',
                    descriptionInside: 'Co-Fundador de KRL Producciones SpA. Músico compositor con especialidad en Piano. Ha participado en múltiples proyectos de diversos géneros (jazz, fusión latinoamericana, fusión flamenco, entre otros). Se ha presentado en escenarios como Lollapalooza y otros escenarios importantes del país.',
                    icon: '',
                    img: 'img/band_chalo_03.jpg',
                    imgInside: 'img/band_chalo.jpg',
                    right: true
               },
               {
                    name: 'Benjamin Galdames',
                    role: 'Batería',
                    description: 'Fundador de KRL Producciones SpA. Músico Baterista y Percusionista de sesión.“Licenciado en Música & Sonido con mención en Batería y Producción Musical”',
                    descriptionInside: 'Fundador de KRL Producciones SpA. Músico Baterista y Percusionista de sesión.“Licenciado en Música & Sonido con mención en Batería y Producción Musical”. Actual baterista de We Are The Grand y KRL, tocó en Los Verdaderos Cabrera hasta 2016 y Vinilos hasta 2015. Percusionista de La Ciscu Margaret, profesor de Batería. Se ha presentado en escenarios como; Lollapalooza, La Cumbre del Rock Chileno, Festival FiiS, México, Perú y en diferentes escenarios, hoteles y casinos a lo largo de todo Chile.',
                    icon: '',
                    img: 'img/band_benja_02.jpg',
                    imgInside: 'img/band_benja_03.jpg',
                    right: false
               }
          ],
          selectedMusician: {},
          instagram: [],
          mail: {
               name: '',
               mail: '',
               topic: '',
               message: ''
          },
          mailMessage: {
               ready: false,
               error: false
          },
          aboutTopText: 'Somos un equipo integrado por profesionales de las artes  y humanidades, que después de varios años entregados al levantamiento de espectáculos de todo tipo, se ha dado cuenta del valor formativo que su profesión puede tener para otros',
          aboutTopTextCollapse: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad culpa deleniti distinctio, doloribus ea eos illum laborum magni molestiae non, ratione rerum sunt? Aliquid aperiam deserunt dicta dolorum enim facilis hic impedit iusto, modi necessitatibus placeat quaerat recusandae, repudiandae? A aliquam doloribus ea explicabo in inventore iste neque non velit, voluptatibus? Ad adipisci asperiores, at atque commodi cupiditate deleniti dicta dolor doloremque enim, illo magni modi nam natus nulla numquam obcaecati reiciendis reprehenderit repudiandae sed sequi soluta temporibus voluptates. Amet dignissimos dolorem ea eaque est expedita id nisi non quaerat recusandae, repellendus suscipit, temporibus ullam, vel veniam? Commodi consequatur eveniet exercitationem officia perspiciatis quod recusandae. Ab, aperiam consectetur delectus doloribus dolorum error facere, itaque, magni maiores molestias nisi nobis quasi quis quisquam repellendus similique sint tenetur ut veniam voluptatibus! Accusamus aut consectetur consequatur, dolorem eaque excepturi exercitationem fuga harum id itaque laudantium libero mollitia nam officiis perferendis porro quaerat quas quasi similique sunt tenetur voluptate voluptatibus! Aliquam amet aperiam assumenda eos et excepturi expedita explicabo facilis iusto nam natus nostrum odit placeat porro quae quasi, qui sapiente voluptatem? A ad, blanditiis et illo iure modi mollitia tempore. Beatae commodi consectetur dolore et ex ipsam maxime nihil perspiciatis soluta, veritatis. Amet, dolorum, eum? Dolores, labore, numquam! Asperiores debitis, distinctio doloribus esse ex fuga nemo pariatur praesentium quaerat quod repellendus reprehenderit vero. Consectetur culpa numquam pariatur provident quisquam quos sapiente sequi voluptas voluptates. Fugit nobis voluptate voluptates. Adipisci delectus distinctio inventore numquam quia sequi vitae voluptatibus. Ab adipisci aliquid commodi ea est, expedita facilis, fuga fugiat harum hic libero maiores nemo, nesciunt nostrum pariatur placeat reiciendis sint sunt tempore tenetur. Debitis fuga nesciunt placeat reiciendis soluta. Accusamus asperiores commodi consectetur consequuntur dolor dolorem doloribus ducimus ea et impedit iusto, molestiae necessitatibus nesciunt nulla odio quae tempora ullam vitae voluptas voluptatibus. Accusamus adipisci at aut dicta dolore natus quasi tenetur. Blanditiis natus optio perspiciatis quae voluptatum. Animi, aut, cupiditate doloremque eum, illum ipsam ipsum laboriosam libero molestiae nihil obcaecati omnis pariatur reprehenderit tempore temporibus. Accusamus alias animi aperiam blanditiis cumque deleniti, deserunt distinctio doloribus, dolorum ducimus ea enim explicabo illo iure magnam minima nihil nisi pariatur quaerat quasi quidem quis, saepe sit velit vitae voluptas voluptatum? Accusamus aliquid aperiam asperiores consectetur consequatur cupiditate deleniti dolorem dolorum earum enim fuga impedit ipsam magni maiores necessitatibus non obcaecati omnis, perspiciatis praesentium quae qui repellendus sequi temporibus tenetur totam voluptate voluptates. Ad amet dicta dolorum earum eius, facilis fugiat illum ipsa laboriosam magni modi natus odio officiis perferendis placeat repellendus reprehenderit sit sunt. Accusantium aliquam delectus doloremque eius illo iusto magnam perspiciatis similique, sunt veritatis. Dolores harum incidunt ipsam laboriosam. Aliquam delectus laboriosam magni maxime odio officia qui repellendus, voluptates! Expedita, harum id impedit ipsa iste porro quis sequi veritatis. Accusantium dignissimos eos exercitationem inventore iure officiis possimus provident quas repellat similique. Accusamus alias amet asperiores blanditiis consequuntur cum enim, error et exercitationem facere facilis hic illo incidunt ipsam iure laudantium magni molestias nemo odit quo quod reiciendis sequi suscipit tenetur ullam veritatis voluptatem voluptatibus voluptatum.',
          dates: []
     },
     mounted: function () {
          this.getInstagramImages();
          this.createFixedDates();
     },
     methods: {
          /*** Get ***/
          getInstagramImages: function () {
               var self = this;
               var instagramToken = '6099209765.e131a33.975fc25be04a4878af318ca6dc10c20a';
               var settings = {
                    "url": "https://api.instagram.com/v1/users/self/media/recent/",
                    "method": "GET",
                    "data": {
                         "access_token": instagramToken
                    }
               }

               $.ajax(settings)
                    .done(function (response) {
                         self.orderInstagramMedia(response.data);
                    })
                    .fail(function () {
                         console.log("error: getInstagramImages()");
                    });
          },
          orderInstagramMedia: function (data) {
               var self = this;
               var _instagram = []
               $.each(data, function(mediaIndex, media) {
                    if (media.type === 'image'){
                         _instagram.push({
                              "id": media.id,
                              "url": media.link,
                              "img" : media.images.standard_resolution.url
                         });
                    }
               });

               var _length = _instagram.length;
               var quantity = 16;
               quantity = (_length < 16) ? 8 : quantity;
               for (var i = 0; i < quantity; i++){
                    self.instagram.push(_instagram[i]);
               }
          },
          menuClick: function () {
               $('.hidden-menu').toggleClass('active');
          },
          scrollToDiv: function (id) {
               $('html, body').animate({
                    scrollTop: ($('#' + id).offset().top - 76)
               }, 1000);
               $( "#menu-button" ).click();
          },
          sendMail: function () {
               var dataString = 'name='+ this.mail.name + '&mail=' + this.mail.mail + '&topic=' + this.mail.topic + '&message=' + this.mail.message;
               var self = this;
               $.ajax({
                    type: "POST",
                    url: "php/mail.php",
                    data: dataString,
                    success: function(){
                         self.onReadyMail();
                    },
                    error: function() {
                         self.onErrorMail();
                    }
               });
          },
          onReadyMail: function () {
               var self= this;
               this.mail = {name: '', mail: '', topic: '', message: ''};
               this.mailMessage.ready = true;
               setTimeout(function(){
                    self.mailMessage.ready = false;
               }, 10000);
          },
          onErrorMail: function () {
               var self= this;
               this.mailMessage.error = true;
               setTimeout(function(){
                    self.mailMessage.error = false;
               }, 10000);
          },
          closeReayMailMessage:  function () {
               this.mailMessage.ready = false;
          },
          closeErrorMailMessage:  function () {
               this.mailMessage.error = false;
          },
          changeAboutText: function () {
               this.aboutTopText = this.aboutTopTextCollapse;
               this.aboutTopTextCollapse = null;
          },
          selectMusician: function (musician) {
               this.selectedMusician = musician;
          },
          createFixedDates: function () {
               var _dates = this.getNextDates();
               this.dates = this.addCustomDates(_dates);
          },
          addCustomDates: function (dates) {
               // TODO: Así se agregan las fechas
               // dates.push({
               //      name: '',
               //      date: new Date('2017', '3', '05'),
               //      month: "lala",
               //      day: "lala",
               //      dayNumber: "lala"
               // });
               //

               // dates.push({
               //      name: '',
               //      date: new Date('2018', '2', '07'),
               //      month: "tutu",
               //      day: "tutu",
               //      dayNumber: "tutu"
               // });

               // Ordenar por fecha
               var _dates = dates.sort(function(a,b){
                    return new Date(a.date) - new Date(b.date);
               });


               // Elmiminar antiguas (Hay un error en esto, mejor no usar ya tampoco se están agregando fechas de forma manual)
               // var __dates = [];
               // for(var j = 0; j < _dates.length; j++){
               //      if (_dates[j].date >= new Date()) {
               //           __dates.push(_dates[j]);
               //      }
               // }
               // _dates = __dates;

               // Eliminar imagenes y dejar solo 4
               dates = [];
               var images = ['img/dates_01.jpg', 'img/dates_02.jpg', 'img/dates_03.jpg', 'img/dates_04.jpg', 'img/dates_01.jpg', 'img/dates_02.jpg', 'img/dates_03.jpg', 'img/dates_04.jpg'];
               for(var i = 0; i < 4; i++){
                    _dates[i].img = images[i];
                    dates.push(_dates[i]);
               }
               return dates;
          },
          getNextDates: function () {
               var dates = [];
               var months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
               var days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
               for(var i = 0; i < 31; i++) {
                    var date = new Date;
                    var day = new Date(date.setDate(date.getDate() + i));
                    var dayOfTheWeek = (day.getDate() < 10) ? '0' + day.getDate() : '' + day.getDate();

                    if(day.getDay() === 2){ /*   || day.getDay() === 6   */
                         dates.push({
                              name: 'Hard Rock Café',
                              date: day,
                              month: months[day.getMonth()],
                              day: days[day.getDay()],
                              dayNumber: dayOfTheWeek
                         });
                    }
                    if(day.getDay() === 3){
                         dates.push({
                              name: 'Johnny B. Good',
                              date: day,
                              month: months[day.getMonth()],
                              day: days[day.getDay()],
                              dayNumber: dayOfTheWeek
                         });
                    }
                    if(day.getDay() === 4){
                         dates.push({
                              name: 'Enjoy casino los Andes',
                              date: day,
                              month: months[day.getMonth()],
                              day: days[day.getDay()],
                              dayNumber: dayOfTheWeek
                         });
                    }
                    if(day.getDay() === 5){
                         dates.push({
                              name: 'Enjoy casino los Andes',
                              date: day,
                              month: months[day.getMonth()],
                              day: days[day.getDay()],
                              dayNumber: dayOfTheWeek
                         });
                    }
                    if (dates.length >= 4) {
                         break;
                    }

               }
               return dates;
          }
     }
})

