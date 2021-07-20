$(document).ready(function () {
  const listSongs = $('#list-songs');

  const app = {
    dataAlbum: [
      {
        class: "Hot-Hits-VietNam",
        img: "./assets/img/haanhtuan.jpg",
        title: "Hot hits vietnam",
        description: "Đông tới Tây, đây là những ca khúc thịnh hành nhất ở Việt Nam."
      },
      {
        class: "Vpop-Khong-The-Thieu",
        img: "./assets/img/V-pop.jpg",
        title: "V-Pop Không Thể Thiếu",
        description: "V-Pop đã đơm hoa trên những khúc ca này. Ảnh bìa: Hứa Kim Tuyền, Hoàng Duyên"
      },
      {
        class: "Pop-Rising",
        img: "./assets/img/poprising.jpg",
        title: "Pop Rising Vietnam",
        description: "Những ca khúc sẽ thành hit trong nay mai. Ảnh bìa: Orange, Hoàng Dũng"
      },
      {
        class: "Nghe-gi",
        img: "./assets/img/nghegi.jpg",
        title: "Thiên Hạ Nghe Gì",
        description: "Những gì mà người bên cạnh bạn đang nghe... Ảnh bìa: The Weeknd, Ariana Grande"
      },
      {
        class: "Fresh-Find",
        img: "./assets/img/freshFind.jpg",
        title: "Fresh Finds Vietnam",
        description: "Khám phá các bài hát đáng nghe từ những cái tên có thể bạn chưa biết. Ảnh bìa: buitruonglinh"
      },
      {
        class: "Top50-VietNam",
        img: "./assets/img/top50.jpg",
        title: "Top 50 - Vietnam",
        description: "Your daily update of the most played tracks right now - Vietnam."
      },
      {
        class: "Top50-Global",
        img: "./assets/img/top50Global.jpg",
        title: "Top 50 - Global",
        description: "Your daily update of the most played tracks right now - Vietnam."
      },
      {
        class: "Sleep",
        img: "./assets/img/sleep.jpg",
        title: "Sleep",
        description: "Gentle ambient piano to help you fall asleep."
      },
      {
        class: "Peaceful-Piano",
        img: "./assets/img/peacefull.jpg",
        title: "Peaceful Piano",
        description: "Relax and indulge with beautiful piano pieces"
      },
      {
        class: "Tat-Den",
        img: "./assets/img/tatden.jpg",
        title: "Tắt Đèn",
        description: "Không gì bằng một giấc ngủ ngon cùng những giai điệu đẹp."
      },
      {
        class: "Baby-Sleep",
        img: "./assets/img/babysleep.jpg",
        title: "Baby Sleep",
        description: "Soothing instrumental music for sleepy babies."
      },
      {
        class: "Rain-Sounds",
        img: "./assets/img/RainSounds.jpg",
        title: "Rain Sounds",
        description: "Steady rain without any thunder."
      },
      {
        class: "Em-Dem",
        img: "./assets/img/emDEM.jpg",
        title: "Êm Đềm",
        description: "Thư giãn cùng những giai điệu dịu êm"
      },
      {
        class: "Ta-Noi-No-Dzui",

        img: "./assets/img/TANOINOVUI.jpg",
        title: "Ta Nói Nó Dzui",
        description: "Cười như mọi ngày, cày như mọi người. "
      },
      {
        class: "Phut-Co-Don-Ngay-Mua",
        img: "./assets/img/phutcodonngaymua.jpg",
        title: "Phút Cô Đơn Ngày Mưa",
        description: "Giọt mưa trên cửa kính gợi ký ức về một thời đã xa."
      },
      {
        class: "Dieu-Buon-Nhat",

        img: "./assets/img/dieubuonhat.jpg",
        title: "Điều Buồn Nhất",
        description: "Điều buồn nhất là anh biết lại làm như không biết... Ảnh bìa: T.R.I"
      },
      {
        class: "Alone-Again",

        img: "./assets/img/aloneagain.jpg",
        title: "Alone Again",
        description: "Being alone (again) can be tough, but these songs will keep you company."
      },
      {
        class: "Young-Wild-Free",
        img: "./assets/img/youndandFree.jpg",
        title: "Young, Wild & Free",
        description: "That’s how its supposed to be. Living young, wild and free!"
      },
      {
        class: "New-Music-Friday-Vietnam",
        img: "./assets/img/friday.jpg",
        title: "New Music Friday Vietnam",
        description: "Những chiếc nhạc mới trong tuần, được tuyển chọn cẩn thận. Ảnh bìa: Ngọt"
      },
      {
        class: "Save-Your-Tears-Remix",
        img: "./assets/img/saveyourremix.jpg",
        title: "Save Your Tears (Remix)",
        description: "The Weeknd,Ariana Grande"
      },
      {
        class: "Page-Khi-Em-Lon",
        img: "./assets/img/khiemlon.jpg",
        title: "khi em lớn",
        description: "orange,hoang dung"
      },
      {
        class: "de-quen",
        img: "./assets/img/dequen.jpg",
        title: "để quên",
        description: "Ngọt"
      },
      {
        class: "Intense-Studying",
        img: "./assets/img/studying.jpg",
        title: "Intense Studying",
        description: "Focus-enhancing piano for your study session."
      },
      {
        class: "rang-khon",

        img: "./assets/img/rangkhon.jpg",
        title: "Răng Khôn (feat. RIN9)",
        description: "Phí Phương Anh"
      },
      {
        class: "Tu-Man-Anh",
        img: "./assets/img/tumananh.jpg",
        title: "Từ Màn Ảnh",
        description: "Nhạc phim Vincenzo, Người Yêu Tôi Là Hồ Ly... và những bộ phim khác"
      },
      {
        class: "Dinner-With-Friends",

        img: "./assets/img/diner.jpg",
        title: "Dinner with Friends",
        description: "Dinner with Friends? Here's the perfect playlist."
      },
      {
        class: "Songs-to-Sing-in-the-Shower",
        img: "./assets/img/songstosing.jpg",
        title: "Songs to Sing in the Shower",
        description: "Make your shower more uplifting by singing along to these hits."
      },

    ],
    dataListSongs: [
      {
        id: "Vpop-Khong-The-Thieu",
        imgName: "V-pop",
        title: "V-Pop Không Thể Thiếu",
        bg: "bg--Vpop-Khong-The-Thieu",
        description: "V-Pop đã đơm hoa trên những khúc ca này. Ảnh bìa: Hứa Kim Tuyền, Hoàng Duyên"
      },
      {

        id: "Pop-Rising",
        imgName: "poprising",
        title: "Pop Rising Vietnam",
        bg: "bg--Pop-Siring",
        description: "Những ca khúc sẽ thành hit trong nay mai. Ảnh bìa: Orange, Hoàng Dũng"
      },
      {

        id: "Nghe-gi",
        imgName: "nghegi",
        title: "Thiên Hạ Nghe Gì",
        bg: "bg--Nghe-gi",
        description: "Những gì mà người bên cạnh bạn đang nghe... Ảnh bìa: The Weeknd, Ariana Grande"
      },
      {

        id: "Fresh-Find",
        imgName: "freshFind",
        title: "Fresh Finds Vietnam",
        bg: "bg--Fresh-Find",
        description: "Khám phá các bài hát đáng nghe từ những cái tên có thể bạn chưa biết. Ảnh bìa: buitruonglinh"
      },
      {

        id: "Top50-VietNam",
        imgName: "top50",
        title: "Top 50 - Vietnam",
        bg: "bg--Top50-VietNam",
        description: "Your daily update of the most played tracks right now - Vietnam."
      },
      {

        id: "Top50-Global",
        imgName: "top50Global",
        title: "Top 50 - Global",
        bg: "bg--Top50-Global",
        description: "Your daily update of the most played tracks right now - Vietnam."
      },
      {

        id: "Sleep",
        imgName: "sleep",
        title: "Sleep",
        bg: "bg--Sleep",
        description: "Gentle ambient piano to help you fall asleep."
      },
      {

        id: "Peaceful-Piano",
        imgName: "peacefull",
        title: "Peaceful Piano",
        bg: "bg--Peaceful-Piano",
        description: "Relax and indulge with beautiful piano pieces"
      },
      {

        id: "Tat-Den",
        imgName: "tatden",
        title: "Tắt Đèn",
        bg: "bg--Tat-Den",
        description: "Không gì bằng một giấc ngủ ngon cùng những giai điệu đẹp."
      },
      {

        id: "Baby-Sleep",
        imgName: "babysleep",
        title: "Baby Sleep",
        bg: "bg--Baby-Sleep",
        description: "Soothing instrumental music for sleepy babies."
      },
      {

        id: "Rain-Sounds",
        imgName: "RainSounds",
        title: "Rain Sounds",
        bg: "bg--Rain-Sounds",
        description: "Steady rain without any thunder."
      },
      {

        id: "Em-Dem",
        imgName: "emDEM",
        title: "Êm Đềm",
        bg: "bg--Em-Dem",
        description: "Thư giãn cùng những giai điệu dịu êm"
      },
      {

        id: "Ta-Noi-No-Dzui",
        imgName: "TANOINOVUI",
        title: "Ta Nói Nó Dzui",
        bg: "bg--Ta-Noi-No-Dzui",
        description: "Cười như mọi ngày, cày như mọi người. "
      },
      {

        id: "Phut-Co-Don-Ngay-Mua",
        imgName: "phutcodonngaymua",
        title: "Phút Cô Đơn Ngày Mưa",
        bg: "bg--Phut-Co-Don-Ngay-Mua",
        description: "Giọt mưa trên cửa kính gợi ký ức về một thời đã xa."
      },
      {

        id: "Dieu-Buon-Nhat",
        imgName: "dieubuonhat",
        title: "Điều Buồn Nhất",
        bg: "bg--Dieu-Buon-Nhat",
        description: "Điều buồn nhất là anh biết lại làm như không biết... Ảnh bìa: T.R.I"
      },
      {

        id: "Alone-Again",
        imgName: "aloneagain",
        title: "Alone Again",
        bg: "bg--Alone-Again",
        description: "Being alone (again) can be tough, but these songs will keep you company."
      },
      {

        id: "Young-Wild-Free",
        imgName: "youndandFree",
        title: "Young, Wild & Free",
        bg: "bg--Young-Wild-Free",
        description: "That’s how its supposed to be. Living young, wild and free!"
      },
      {

        id: "New-Music-Friday-Vietnam",
        imgName: "friday",
        title: "New Music Friday Vietnam",
        bg: "bg--New-Music-Friday-Vietnam",
        description: "Những chiếc nhạc mới trong tuần, được tuyển chọn cẩn thận. Ảnh bìa: Ngọt"
      },
      {

        id: "Save-Your-Tears-Remix",
        imgName: "saveyourremix",
        title: "Save Your Tears (Remix)",
        bg: "bg--Save-Your-Tears-Remix",
        description: "The Weeknd,Ariana Grande"
      },
      {
        id: "Khi-Em-Lon",
        imgName: "khiemlon",
        title: "khi em lớn",
        bg: "bg--Khi-Em-Lon",
        description: "orange,hoang dung"
      },
      {

        id: "de-quen",
        title: "để quên",
        imgName: "dequen",
        bg: "bg--de-quen",
        description: "Ngọt"
      },
      {
        id: "Intense-Studying",
        imgName: "studying",
        bg: "bg--Intense-Studying",
        title: "Intense Studying",

        description: "Focus-enhancing piano for your study session."
      },
      {

        id: "rang-khon",
        imgName: "rangkhon",
        title: "Răng Khôn (feat. RIN9)",
        bg: "bg--rang-khon",
        description: "Phí Phương Anh"
      },
      {

        id: "THoai-Mai-Gac-Chan-Len",
        imgName: "thoaimai",
        title: "Từ Màn Ảnh",
        bg: "bg--THoai-Mai-Gac-Chan-Len",
        description: "Nhạc phim Vincenzo, Người Yêu Tôi Là Hồ Ly... và những bộ phim khác"
      },
      {

        id: "Music-For-Concentration",
        imgName: "concentration",
        title: "Music-For-Concentration",
        bg: "bg--Music-For-Concentration",
        description: "Minimalism, electronica and modern classical to concentrate to."
      },
      {

        id: "Tu-Man-Anh",
        imgName: "tumananh",
        title: "Dinner with Friends",
        bg: "bg--Tu-Man-Anh",
        description: "Dinner with Friends? Here's the perfect playlist."
      },
      {

        id: "Dinner-With-Friends",
        imgName: "diner",
        title: "Songs to Sing in the Shower",
        bg: "bg--Dinner-With-Friends",
        description: "Make your shower more uplifting by singing along to these hits."
      },
      {

        id: "Songs-to-Sing-in-the-Shower",
        imgName: "songstosing",
        bg: "bg--Songs-to-Sing-in-the-Shower",
      },
    ],
    handleEvent() {
      const _this = this;
      // ẩn thanh tìm kiếm
      $('#v-pills-home-tab').click(() => {
        $('.search').addClass('d-none')
      })

      // hiện thanh tim kiếm 
      $('#v-pills-profile-tab').click(() => {
        $('.search').removeClass('d-none')
      })

      // hiẹn ra ablum khi tìm kiếm
      $('.timBaiHat').change((e) => {
        $('.tab-pane').removeClass("show active");
        $('#page-listSongs').addClass('show active');
        $('.ablum-Songs').remove();

        let value = e.target.value.trim();
        if (value === '') {
          _this.renderError();
        }
        else {
          _this.renderAlbum(value);
        }
        return;
      })

    },
    renderAlbum(value) {
      $('#khongTImThay').remove();
      const valueInput = new RegExp(value, 'i');
      const ketQuaTimKiem = this.dataAlbum.filter((song) => {
        return valueInput.test(song.title);
      })
      if (ketQuaTimKiem.length === 0) {
        this.renderError();
      }
      else {
        const htmls = ketQuaTimKiem.map((song) => {
          return ` 
                <div class=" col-sm-12 col-md-4 col-lg-2 ablum-Songs p-md-4 p-xl-0">
                  <div class="card">
                      <a href="" aria-current="page" data-bs-toggle="pill" class="card-music ${song.class}" data-bs-target="Page-${song.class}" role="tab" aria-controls="Page" aria-selected="true">
                        <img src="${song.img}" class="card-img-top" alt="">
                      </a>
                      <button class="click-to-play ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                          <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                        </svg>
                      </button>
                      <div class="clicked-btn invisible d-flex  justify-content-center align-items-center">
                        <div class="wrapper">
                          <div class="box d-flex justify-content-between">
                            <div class="left w-50 d-flex">
                              <img src="./assets/img/haanhtuan.jpg" alt="">
                            </div>
                            <div class="right w-50 p-4 text-center">
                              <h2>Start listening with a free Spotify account</h2>
                              <div class="w-100 bg-login btn"><a href="./signup.html">SIGN UP FREE</a></div>
                              <div class="w-100 bg-light btn"><a href="">DOWNLOAD APP</a></div>
                              <p class="d-flex align-items-center">Already have an account?
                                <span class="btn click-login"> <a href="#">LOG IN</a></span>
                              </p>
                            </div>
                          </div>
                          <div class="close">Close</div>
                      </div>
                    </div>
                      <div class="card-body mt-3">
                        <h5 class="card-title fw-bolder">${song.title}</h5>
                        <p class="card-text">${song.description}</p>
                      </div>
                  </div>
                </div>
              `
        });
        listSongs.append(htmls.join('\n'));

        // hiện page nghe nhạc khi click vào ablum
        this.dataAlbum.forEach((song) => {
          $(`.${song.class}`).click(() => {
            $('.tab-pane').removeClass('show active');
            $(`#Page-${song.class}`).addClass('show active');
          })
        });
        //khi bấm vào nút play của các sản phẩm trong list
        $(".click-to-play").click(function () {
          $(this).next().toggleClass("invisible")
            .find('.wrapper').css({ "opacity": "1", "transform": "translateY(-10px)" })
        });
        $(".close").click(function () {
          $(".clicked-btn").addClass("invisible")
        });
      }


    },
    renderError() {
      $('#khongTImThay').remove();
      const htmls = () =>
        `
          <div class="col-12 d-flex" id='khongTImThay'>
            <h5 class="m-auto text-secondary  ">Không tìm thấy 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown-fill" viewBox="0 0 16 16">
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm-2.715 5.933a.5.5 0 0 1-.183-.683A4.498 4.498 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 0 1-.866.5A3.498 3.498 0 0 0 8 10.5a3.498 3.498 0 0 0-3.032 1.75.5.5 0 0 1-.683.183zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z"/>
            </svg>
            </h5>
          </div>

        `
      listSongs.append(htmls);

    },
    renderPageListSong() {
      const htmls = this.dataListSongs.map(page => {
        return `<div class="tab-pane fade ${page.bg}" id="Page-${page.id}" role="tabpanel" aria-labelledby="Btn-${page.id}">
          <div class="page-listenMusic">
            <div class="bg__top-list">
              <div class="container">
                <div class="card border-0">
                  <div class="row g-0">
                    <div class="col-12 col-md-4 ">
                      <img src="./assets/img/${page.imgName}.jpg" alt="" class="card-img-top ">
                    </div>
                    <div class="col-12 col-md-8 d-flex align-items-end">
                      <div class="card-body">
                        <h5 class="card-title">Playlist</h5>
                        <h2 class="card-title">${page.title}</h2>
                        <p class="card-text">${page.description}</p>
                        <ul class="d-flex ">
                          <li><a href="" class="">Spotify</a></li>
                          <li>480,055 likes</li>
                          <li>255 songs, about 7 hr 30 min</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg__body-list">
                <div class="container p-4">
                  <div class="options-list pb-5">
                    <span>
                      <button class="btn-player-music  ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                          <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                        </svg>
                      </button>
                    </span>
                    <span class="raiting-heart">
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-heart text-light " viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-heart-fill d-none " viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                      </svg>
                    </span>
                    <span class=" dropdown">
                      <a class="display-2 fw-bold text-secondary" href="#" id="listDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        ...
                      </a>
                      <ul class="dropdown-menu p-2 bg-dark" aria-labelledby="listDropdown">
                        <li><a class="dropdown-item active" href="#">Add to queue</a></li>
                        <li><hr class="dropdown-divider text-dark"></li>
                        <li><a class="dropdown-item" href="#">Start playlist radio</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#">Make public</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#">Add to Your Library</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li class="dropdown sub-dropdown d-none d-md-block">
                          <a class="dropdown-item dropdown-toggle" >
                            Share
                          </a>
                          <ul class="dropdown-menu p-2 bg-dark" aria-labelledby="sub-dropdown">
                            <li><a class="dropdown-item " href="#">Copy link to playlist</a></li>
                            <li><a class="dropdown-item " href="#">Copy embed code</a></li>
                          </ul>
                        </li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#">About recommendations</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#">Open in Desktop app</a></li>
                      </ul>
                    </span>
                  </div>
                  <div class="play-list">
                    <div class="row play-list__title">
                      <div class="col-10 col-md-5">#  title</div>
                      <div class="d-none d-md-block col-md-3">album</div>
                      <div class="d-none d-md-block col-md-3">date added</div>
                      <div class="col-2 col-md-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-clock " viewBox="0 0 16 16">
                          <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                        </svg>
                      </div>
                    </div>
                    <hr class="text-light">
                    <div class="row  play-list__body">
                      <div class="col-2 col-md-1">
                        <ul>
                          <li class="list-stt">1</li>
                          <li class="list-stt">2</li>
                          <li class="list-stt">3</li>
                          <li class="list-stt">4</li>
                          <li class="list-stt">5</li>
                          <li class="list-stt">6</li>
                          <li class="list-stt">7</li>
                          <li class="list-stt">8</li>
                          <li class="list-stt">9</li>
                          <li class="list-stt">10</li>
                          <li class="list-stt">11</li>
                          <li class="list-stt">12</li>
                          <li class="list-stt">13</li>
                          <li class="list-stt">14</li>
                          <li class="list-stt">15</li>
                          <li class="list-stt">16</li>
                          <li class="list-stt">17</li>
                          <li class="list-stt">18</li>
                        </ul>
                      </div>
                      <div class="col-8 col-md-4">
                        <ul class="p-0" type="1">
                          <li>
                            <div class="align-items-center w-100">
                              <div class="card border-0" >
                                <div class="row g-0">
                                  <div class="col-3">
                                    <a href="#">
                                      <img src="./assets/img/thangmayenhoa.jpg" alt="">
                                    </a>
                                  </div>
                                  <div class="col-9">
                                    <div class="card-body">
                                      <h5 class="card-title">Tháng Mấy Em Nhớ Anh?</h5>
                                      <p class="card-text"><a href=""> Ha Anh Tuan </a></p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="align-items-center">
                              
                              <div class="card border-0" >
                                <div class="row g-0">
                                  <div class="col-3">
                                    <a href="#">
                                      <img src="./assets/img/yourpower.jpg" alt="">
                                    </a>
                                  </div>
                                  <div class="col-9">
                                    <div class="card-body">
                                      <h5 class="card-title">Your Power</h5>
                                      <p class="card-text"><a href="">Billie Eilish</a></p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="align-items-center">
                              <div class="card border-0" >
                                <div class="row g-0">
                                  <div class="col-3">
                                    <a href="#">
                                      <img src="./assets/img/saigondaulongqua.jpg" alt="">
                                    </a>
                                  </div>
                                  <div class="col-9">
                                    <div class="card-body">
                                      <h5 class="card-title">Sài Gòn Đau Lòng Quá</h5>
                                      <p class="card-text"><a href="">Hứa Kim Tuyền,</a>
                                        <a href="">Hoàng Duyên</a></p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="align-items-center">
                              <div class="card border-0" >
                                <div class="row g-0">
                                  <div class="col-3">
                                    <a href="#">
                                      <img src="./assets/img/giua dai lo dong tay.jpg" alt="">
                                    </a>
                                  </div>
                                  <div class="col-9">
                                    <div class="card-body">
                                      <h5 class="card-title">Giữa Đại Lộ Đông Tây</h5>
                                      <p class="card-text"><a href="">Uyên Linh</a></p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="align-items-center">
                              <div class="card border-0" >
                                <div class="row g-0">
                                  <div class="col-3">
                                    <a href="#">
                                      <img src="./assets/img/phaichangemdayeu.jpg" alt="">
                                    </a>
                                  </div>
                                  <div class="col-9">
                                    <div class="card-body">
                                      <h5 class="card-title">Phải Chăng Em Đã Yêu?</h5>
                                      <p class="card-text"><a href="">Juky San</a><a href="">REDT</a></p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="align-items-center">
                              
                              <div class="card border-0" >
                                <div class="row g-0">
                                  <div class="col-3">
                                    <a href="#">
                                      <img src="./assets/img/leavedoot.jpg" alt="">
                                    </a>
                                  </div>
                                  <div class="col-9">
                                    <div class="card-body">
                                      <h5 class="card-title">Leave The Door Open</h5>
                                      <p class="card-text"><a href="">Bruno Mars,</a><a href="">Anderson .Paak,</a><a href="">Silk Sonic</a></p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="align-items-center">
                              
                              <div class="card border-0" >
                                <div class="row g-0">
                                  <div class="col-3">
                                    <a href="#">
                                      <img src="./assets/img/pêchast.jpg" alt="">
                                    </a>
                                  </div>
                                  <div class="col-9">
                                    <div class="card-body">
                                      <h5 class="card-title">Peaches (feat. Daniel Caesar & Giveon)</h5>
                                      <p class="card-text"><a href="">Justin Bieber,</a>
                                        <a href="">Daniel Caesar,</a>
                                        <a href="">Giveon</a>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="align-items-center">
                              
                              <div class="card border-0" >
                                <div class="row g-0">
                                  <div class="col-3">
                                    <a href="#">
                                      <img src="./assets/img/atmaywork.jpg" alt="">
                                    </a>
                                  </div>
                                  <div class="col-9">
                                    <div class="card-body">
                                      <h5 class="card-title">At My Worst</h5>
                                      <p class="card-text"><a href="">Pink Sweat$</a></p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="align-items-center">
                              
                              <div class="card border-0" >
                                <div class="row g-0">
                                  <div class="col-3">
                                    <a href="#">
                                      <img src="./assets/img/gone.jpg" alt="">
                                    </a>
                                  </div>
                                  <div class="col-9">
                                    <div class="card-body">
                                      <h5 class="card-title">On The Ground</h5>
                                      <p class="card-text"><a href="">ROSÉ</a></p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="align-items-center">
                              
                              <div class="card border-0" >
                                <div class="row g-0">
                                  <div class="col-3">
                                    <a href="#">
                                      <img src="./assets/img/xindungnhanmay.jpg" alt="">
                                    </a>
                                  </div>
                                  <div class="col-9">
                                    <div class="card-body">
                                      <h5 class="card-title">Xin Đừng Nhấc Máy</h5>
                                      <p class="card-text"><a href="">B Ray,</a>
                                        <a href="">Han Sara,</a>
                                        <a href="">Masew</a>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="align-items-center">
                              
                              <div class="card border-0" >
                                <div class="row g-0">
                                  <div class="col-3">
                                    <a href="#">
                                      <img src="./assets/img/yeutham.jpg" alt="">
                                    </a>
                                  </div>
                                  <div class="col-9">
                                    <div class="card-body">
                                      <h5 class="card-title">Yêu Thầm</h5>
                                      <p class="card-text"><a href="">Hoàng Yến Chibi</a>
                                        <a href="">Tlinh,</a>
                                        <a href="">TDK</a>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="align-items-center">
                              
                              <div class="card border-0" >
                                <div class="row g-0">
                                  <div class="col-3">
                                    <a href="#">
                                      <img src="./assets/img/khiemlon.jpg" alt="">
                                    </a>
                                  </div>
                                  <div class="col-9">
                                    <div class="card-body">
                                      <h5 class="card-title">Khi Em Lớn</h5>
                                      <p class="card-text"><a href="">Orange</a>
                                        <a href="">Hoang Dung</a>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="align-items-center">
                              
                              <div class="card border-0" >
                                <div class="row g-0">
                                  <div class="col-3">
                                    <a href="#">
                                      <img src="./assets/img/saveyourteast.jpg" alt="">
                                    </a>
                                  </div>
                                  <div class="col-9">
                                    <div class="card-body">
                                      <h5 class="card-title">Save Your Tears (with Ariana Grande) (Remix)</h5>
                                      <p class="card-text"><a href="">The Weeknd</a>
                                        <a href="">Ariana Grande</a>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="align-items-center">
                              
                              <div class="card border-0" >
                                <div class="row g-0">
                                  <div class="col-3">
                                    <a href="#">
                                      <img src="./assets/img/tuthichthanhthuong.jpg" alt="">
                                    </a>
                                  </div>
                                  <div class="col-9">
                                    <div class="card-body">
                                      <h5 class="card-title">từ thích thích thành thương thương</h5>
                                      <p class="card-text"><a href="">AMEE</a>
                                        <a href="">Hoang Dung</a></p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="align-items-center">
                              
                              <div class="card border-0" >
                                <div class="row g-0">
                                  <div class="col-3">
                                    <a href="#">
                                      <img src="./assets/img/kismemore.jpg" alt="">
                                    </a>
                                  </div>
                                  <div class="col-9">
                                    <div class="card-body">
                                      <h5 class="card-title">Kiss Me More (feat. SZA)</h5>
                                      <p class="card-text"><a href="">Doja Cat,</a>
                                        <a href="">SZA</a>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="align-items-center">
                              
                              <div class="card border-0" >
                                <div class="row g-0">
                                  <div class="col-3">
                                    <a href="#">
                                      <img src="./assets/img/holdon.jpg" alt="">
                                    </a>
                                  </div>
                                  <div class="col-9">
                                    <div class="card-body">
                                      <h5 class="card-title">Hold On</h5>
                                      <p class="card-text"><a href="">Justin Bieber</a></p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="align-items-center">
                              
                              <div class="card border-0" >
                                <div class="row g-0">
                                  <div class="col-3">
                                    <a href="#">
                                      <img src="./assets/img/beatymisteak.jpg" alt="">
                                    </a>
                                  </div>
                                  <div class="col-9">
                                    <div class="card-body">
                                      <h5 class="card-title">Beautiful Mistakes (feat. Megan Thee Stallion)</h5>
                                      <p class="card-text"><a href="">Maroon 5</a>
                                        <a href="">Megan Thee Stallion</a>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="align-items-center">
                              
                              <div class="card border-0" >
                                <div class="row g-0">
                                  <div class="col-3">
                                    <a href="#">
                                      <img src="./assets/img/nangtho.jpg" alt="">
                                    </a>
                                  </div>
                                  <div class="col-9">
                                    <div class="card-body">
                                      <h5 class="card-title">Nàng Thơ</h5>
                                      <p class="card-text"><a href="">Hoang Dung</a></p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>

                        </ul>
                      </div>
                      <div class="d-none d-md-block col-md-3">
                        <ul>
                          <li><a class="album" href="">Tháng Mấy Em Nhớ Anh?</a></li>
                          <li><a class="album" href="">Your Power</a></li>
                          <li><a class="album" href="">Sài Gòn Đau Lòng Quá</a></li>
                          <li><a class="album" href="">Giữa Đại Lộ Đông Tây</a></li>
                          <li><a class="album" href="">Phải Chăng Em Đã Yêu?</a></li>
                          <li><a class="album" href="">Leave The Door Open</a></li>
                          <li><a class="album" href="">Justice</a></li>
                          <li><a class="album" href="">The Prelude</a></li>
                          <li><a class="album" href="">R</a></li>
                          <li><a class="album" href="">Xin Đừng Nhấc Máy</a></li>
                          <li><a class="album" href="">Yêu Thầm</a></li>
                          <li><a class="album" href="">Khi Em Lớn</a></li>
                          <li><a class="album" href="">Save Your Tears (Remix)</a></li>
                          <li><a class="album" href="">dreAMEE (acoustic)</a></li>
                          <li><a class="album" href="">Kiss Me More (feat. SZA)</a></li>
                          <li><a class="album" href="">Hold On</a></li>
                          <li><a class="album" href="">Beautiful Mistakes (feat. Megan Thee Stallion)</a></li>
                          <li><a class="album" href="">Nàng Thơ</a></li>
                        </ul>
                      </div>
                      <div class="d-none d-md-block col-md-3">
                        <ul>
                          <li><a href="" class="date">Apr 28, 2021</a></li>
                          <li><a href="" class="date">Apr 29, 2021</a></li>
                          <li><a href="" class="date">Apr 28, 2021</a></li>
                          <li><a href="" class="date">Apr 28, 2021</a></li>
                          <li><a href="" class="date">Apr 28, 2021</a></li>
                          <li><a href="" class="date">Apr 28, 2021</a></li>
                          <li><a href="" class="date">Apr 28, 2021</a></li>
                          <li><a href="" class="date">Apr 28, 2021</a></li>
                          <li><a href="" class="date">Apr 28, 2021</a></li>
                          <li><a href="" class="date">Apr 28, 2021</a></li>
                          <li><a href="" class="date">Apr 28, 2021</a></li>
                          <li><a href="" class="date">Apr 29, 2021</a></li>
                          <li><a href="" class="date">Apr 29, 2021</a></li>
                          <li><a href="" class="date">Apr 29, 2021</a></li>
                          <li><a href="" class="date">Apr 28, 2021</a></li>
                          <li><a href="" class="date">Apr 28, 2021</a></li>
                          <li><a href="" class="date">Apr 28, 2021</a></li>
                          <li><a href="" class="date">Apr 28, 2021</a></li>
                        </ul>
                      </div>
                      <div class="col-2 col-md-1">
                       <ul>
                         <li class="time-play">5:00</li>
                         <li class="time-play">4:05</li>
                         <li class="time-play">5:08</li>
                         <li class="time-play">3:46</li>
                         <li class="time-play">3:10</li>
                         <li class="time-play">4:02</li>
                         <li class="time-play">3:18</li>
                         <li class="time-play">2:50</li>
                         <li class="time-play">2:48</li>
                         <li class="time-play">3:07</li>
                         <li class="time-play">4:12</li>
                         <li class="time-play">3:48</li>
                         <li class="time-play">3:11</li>
                         <li class="time-play">3:24</li>
                         <li class="time-play">3:28</li>
                         <li class="time-play">2:50</li>
                         <li class="time-play">3:47</li>
                         <li class="time-play">4:14</li>
                       </ul>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            
        </div>
            </div>`
      });
      $('#v-pills-tabContent').append(htmls.join('\n'));

    },
    start() {
      this.renderPageListSong();
      this.handleEvent();
    }

  };
  app.start();

})