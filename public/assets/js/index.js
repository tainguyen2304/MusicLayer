$(document).ready(function() {

  //co the quay lai page da truy cap
    $('.card-music').click(function() {
      let id = $(this).attr('id');
      console.log(id);
      $(".tab-pane").removeClass('active show');
      $(`[aria-labelledby = "${id}"]`).addClass('active show');
    })

// xử lí khi click vào nút nghe nhạc
$('.btn-player-music').click(function() {
    $('.music-player').toggleClass('invisible')
})

// ** FROM VALIDA (SIGN UP )
function FormValida () {
  $("#email").blur(function() {
     if(checkEmail($(this).val()) === false) {
         $(this).next().addClass('invalid-feedback').html("Bạn vui lòng nhập giá trị hợp lệ.")
         .addClass('d-block');
     }
     else {
      $(this).next().removeClass('invalid-feedback').html("")
      .removeClass('d-block');
     }
  })
  $("#emailRepeat ").blur(function(){
      if(checkPswRepeat($(this).val(),$("#email").val()) === false) {
          $(this).next().addClass('invalid-feedback').html("Email không chính xác.")
          .addClass('d-block');
      }
      else {
          $(this).next().removeClass('invalid-feedback').html("")
          .removeClass('d-block');
         }
  })
  $("#password").blur(function() {
      if(checkPsw($(this).val()) === false) {
          $(this).next().addClass('invalid-feedback')
          .html("Mật khẩu có ít nhất 8 kí tự, gồm các kí tự Hoa, Thường , kí tự đặc biệt và số")
          .addClass('d-block');
      }
      else {
          $(this).next().removeClass('invalid-feedback').html("")
          .removeClass('d-block');
         }
  })
  $("#name").blur(function() {
  if(!$(this).val()) {
      $(this).next().addClass('invalid-feedback')
      .html("Vui lòng nhập tên của bạn.")
      .addClass('d-block');
  }
  else {
      $(this).next().removeClass('invalid-feedback').html("")
      .removeClass('d-block');
      }
  })
  $("#date").blur(function() {
  if(checkDate($(this).val()) === false ) {
      $(this).next().addClass('invalid-feedback')
      .html("Bạn vui lòng nhập ngày hợp lệ.")
      .addClass('d-block');
  }
  else {
      $(this).next().removeClass('invalid-feedback').html("")
      .removeClass('d-block');
      }
  })
  $("#year").blur(function() {
  if(checkYear($(this).val() === false)) {
      $(this).next().addClass('invalid-feedback')
      .html("Bạn vui lòng nhập năm hợp lệ.")
      .addClass('d-block');
  }
  else {
      $(this).next().removeClass('invalid-feedback').html("")
      .removeClass('d-block');
      }
  })
  $(".submit").click(function(){
      if (checkEmail($("#email").val()) && checkPswRepeat($("#email").val(),$("#emailRepeat").val()) && checkPsw($("#password").val()) && $('#name').val() && checkDate($("#date").val()) && checkYear($("#year").val()) )
      {
        if(localStorage) {
          let email = $('#email').val();
          let psw = $('#password').val();
          localStorage.setItem('email',email);
          localStorage.setItem('psw',psw);
        }

        $(".signUped").removeClass('invisible');
        setTimeout(function(){
              $(".signUped").addClass('invisible')
              $("form[name='signup']").submit();
          },2000)
        // lưu trông tin người dùng vào bộ nhớ cục bộ trên trình duyệt
      }
      else if(checkEmail($("#email").val()) === false) {
              $("#email").next().addClass('invalid-feedback').html("Bạn vui lòng nhập giá trị hợp lệ.")
              .addClass('d-block');
      }
      else if(checkPswRepeat($("#emailRepeat").val(),$("#email").val()) === false) {
          $("#emailRepeat").next().addClass('invalid-feedback').html("Email không chính xác.")
          .addClass('d-block');
      }
      else if(checkPsw($("#password").val()) === false) {
          $("#password").next().addClass('invalid-feedback')
          .html("Mật khẩu có ít nhất 8 kí tự, gồm các kí tự Hoa, Thường , kí tự đặc biệt và số")
          .addClass('d-block');
      }
      else if(!$("#name").val()) {
          $("#name").next().addClass('invalid-feedback')
          .html("Vui lòng nhập tên của bạn.")
          .addClass('d-block');
      }
      else if(checkDate($("#date").val()) === false) {
          $("#date").next().addClass('invalid-feedback')
          .html("Bạn vui lòng nhập ngày hợp lệ.")
          .addClass('d-block');
      }
      else if(checkYear($("#year").val()) === false ) {
          $("#year").next().addClass('invalid-feedback')
          .html("Bạn vui lòng nhập năm hợp lệ.")
          .addClass('d-block');
      }

  })
}
FormValida();

//hiển thị form đăng nhập
$(".click-login").click(function() {
  $('#wrapper-login').fadeIn(1000);
  $('.clicked-btn').addClass('invisible')
  $('.music-player').addClass('invisible')   
})

// submit dang nhap
$("#username").blur(function() {
    if($(this).val()) {
        $(this).next().removeClass('invalid-feedback')
        .html("")
        .removeClass('d-block');
    }
})
$("#userpassword").blur(function() {
  if($(this).val()) {
      $(this).next().removeClass('invalid-feedback')
      .html("")
      .removeClass('d-block');
  }
})
$(".submitLogin").click(function() {
  let email = localStorage.email;
  let psw = localStorage.psw;
    if($("#username").val() !== email) {
        $("#username").next().addClass('invalid-feedback')
        .html("Taì khoản không hợp lệ.")
        .addClass('d-block');
    }
    else if($("#userpassword").val() !== psw) {
        $("#userpassword").next().addClass('invalid-feedback')
        .html("Sai mật khẩu.")
        .addClass('d-block');
    }
    else  {
      //  - Sau khi đăng nhập 
      // hiện thông báo khi đăng ký thành công
          $(".loginEd").removeClass('invisible')
          setTimeout(function()
          { 
              // lay ten cua nguoi su dung sau khi dang nhap thanh cong
              let username = $('#username').val();
              $(".nameUser").text(username);
              $('#username').val('');
              $('#userpassword').val('');


              // sau 2 giay thi an thong bao
              $(".loginEd").addClass('invisible')

              //an form dang nhap
              $('#wrapper-login').fadeOut(1000);

              // ẩn phần bắt buộc đăng nhập
                $(".subnav").addClass("d-none").removeClass("invisible");
                $(".clicked-btn ").addClass('d-none')


            },2000)

      // xuất hiện avatar dăng nhập
          $('.login-signup').addClass("d-none");
          $(".beLogin").addClass('d-sm-none d-md-flex');

      // cho phep nguoi dung su dung cac muc "tao danh sach","thu vien cua ban","nhung bai hat yeu thich"
          $('#btn-danh-sach-phat').attr("data-bs-target","#Page-danh-sach-phat")
          $('#btn-tao-danh-sach').attr("data-bs-target","#Page-tao-danh-sach")
          $('#btn-nhung-bai-hat-yeu-thich').attr("data-bs-target","#Page-nhung-bai-hat-yeu-thich")

       // ẩn phần đăng nhập trên mobile
       $('.m-Login').addClass('d-none');
       $('.m-Logined').removeClass('d-none');
            
    }   
});

    // KHI Log-Out
function logOut () { 
  // ẩn avatar
  $('.login-signup').removeClass("d-none");
  $(".beLogin").removeClass('d-sm-none d-md-flex');
  $('.m-Login').removeClass('d-none');
  $('.m-Logined').addClass('d-none');

   // buộc người dùng phải đăng nhập trước khi sử dụng "tao danh sach","thu vien cua ban","nhung bai hat yeu thich"
  $(".subnav").removeClass("d-none").addClass("invisible");
  $('#btn-danh-sach-phat').attr("data-bs-target","");
  $('#btn-tao-danh-sach').attr("data-bs-target","");
  $('#btn-nhung-bai-hat-yeu-thich').attr("data-bs-target","")
  $(".clicked-btn ").removeClass('d-none')

  //chuyen lai trang chu 
  $('.tab-pane').removeClass('show active')
  $('#v-pills-home').addClass('show active');
  $(".nav-link").removeClass("active")
  $('#v-pills-home-tab').addClass('active')
}
$('.Log-Out').click(function() {
logOut();
});

//khi bấm vào nút play của các sản phẩm trong list
$(".click-to-play").click(function(){
$(this).next().toggleClass("invisible")
.find('.wrapper').css({"opacity":"1", "transform":"translateY(-10px)"})
  });
$(".close").click(function(){
  $(".clicked-btn").addClass("invisible")
  }); 

// buộc đăng nhập trước khi thao tác với các chức năng của navbar
  $(".btn-subnav").click(function(){
    $(this).find(".subnav").toggleClass("invisible");
  });

  // raiting
  $(".raiting-heart").click(function() {
      $(".bi-heart").toggleClass("d-none");
      $(".bi-heart-fill").toggleClass("d-none");
  });

});

// hàm chúc năng kiểm qua biêu mẫu đăng ký và đăng nhập
function checkEmail(values) {
values.split("");
let valueLength = values.length;
let dem = 0;
for (let value of values) {
 if (value == '@')
     dem += 1;
}
if (dem === 0) return false;
if (dem > 1) return false;
if (values[0] === '@' || values[valueLength-1] === '@') return false;
return true;
}
function checkPsw(values) {
let coKiTuHoa = false;
let coKiTuSo = false;
let coKiTuDacBiet = false;
let length = values.length;
if (length < 8)
return false;
for (value of values) {
 if (value >= 'A' && value <= 'Z') coKiTuHoa = true;
 else if (value >= '0' && value <= '9') coKiTuSo = true;
 else if (!(value >= 'a' && value <= 'z')) coKiTuDacBiet = true;
}
return coKiTuDacBiet && coKiTuHoa && coKiTuSo;
}
function checkPswRepeat(valuePw,valuePwsRepeat) {
if (!valuePwsRepeat) return false;
if ( valuePw === valuePwsRepeat) return true;
else return false;
}
function checkDate(values) {
if (!values || values < 0 || values > 31)
    return false;
return true;
}
function checkYear(values) {
if (!values || values < 0 )
    return false;
return true;
}



// nghe nhạc


const tai = document.querySelector.bind(document);

const cd = tai(".cd");
const cdThumb = tai(".cd-thumb");
const audio = tai(".audio");
const playBtn = tai(".btn-toggle-play");
const progress = tai(".progress");
const prevBtn = tai(".btn-prev");
const nextBtn = tai(".btn-next");
const randomBtn = tai(".btn-random");
const repeatBtn = tai(".btn-repeat");
const playlis = tai(".playlist");
const btnPlay = tai(".btn-play");
const btnPause = tai(".btn-pause");

const app = {
currentIndex: 0,
isPlaying: false,
isRanDom: false,
isLoop: false,
songs: [
{
    img:"./assets/img/thangmayenhoa.jpg",
    audio:"./assets/audio/thang may em nho anh.mp3"
},
{
    img:"./assets/img/yourpower.jpg",
    audio:"./assets/audio/Billie_Eilish_-_Your_Power.mp3"
},
{
    img:"./assets/img/saigondaulongqua.jpg",
    audio:"./assets/audio/sai gon co don qua.mp3"
},
{
    img:"./assets/img/giua dai lo dong tay.jpg",
    audio:"./assets/audio/giuadailodongtay.mp3"
},
{
    img:"./assets/img/phaichangemdayeu.jpg",
    audio:"./assets/audio/phai chang em da yeu.mp3"
},
{
    img:"./assets/img/leavedoot.jpg",
    audio:"./assets/audio/LeaveTheDoorOpen-BrunoMarsAndersonPaakSilkSonic-6959442.mp3"
},
{
    img:"./assets/img/pêchast.jpg",
    audio:"./assets/audio/Peaches - Justin Bieber_ Daniel Caesar_.mp3"
},
{
    img:"./assets/img/atmaywork.jpg",
    audio:"./assets/audio/AtMyWorst-PinkSweat-6704978.mp3"
},
{
    img:"./assets/img/gone.jpg",
    audio:"./assets/audio/OnTheGround-ROSE-6964051.mp3"
},
{
    img:"./assets/img/xindungnhanmay.jpg",
    audio:"./assets/audio/Xin Dung Nhac May - B Ray_ Han Sara_ Gre.mp3"
},
 {
    img:"./assets/img/yeutham.jpg",
    audio:"./assets/audio/YeuTham-HoangYenChibiTlinhTDK-6998347.mp3"
},
{
  img:"./assets/img/emlon.jpg",
  audio:"./assets/audio/KhiEmLon-OrangeHoangDungTheVoice-7007588.mp3"
},
  {
    img:"./assets/img/saveyourteast.jpg",
    audio:"./assets/audio/SaveYourTears-TheWeeknd-6238885.mp3"
},
{
  img:"./assets/img/tuthichthanhthuong.jpg",
  audio:"./assets/audio/Tu Thich Thich Thanh Thuong Thuong - AMe.mp3"
},
{
        img:"./assets/img/kismemore.jpg",
        audio:"./assets/audio/KissMeMore-DojaCatSZA-6999624.mp3"
    },
    {
      img:"./assets/img/holdon.jpg",
      audio:"./assets/audio/Hold On - Chord Overstreet.mp3"
  },
  {
    img:"./assets/img/nangtho.jpg",
    audio:"./assets/audio/nang tho.mp3"
},
],

defineProperties: function () {
Object.defineProperty(this, "currentSong", {
  get: function () {
    return this.songs[this.currentIndex];
  }
});
},
handleEvents: function () {
const _this = this;
// Xử lý CD quay
const cdThumbAnimate = cdThumb.animate([{ transform: "rotate(360deg)" }], {
  duration: 10000, // 10 seconds
  iterations: Infinity,
});
cdThumbAnimate.pause();

  // Xử lý khi click play
  playBtn.onclick = function () {
    if (_this.isPlaying === false) {
      audio.play()
    } else {
      audio.pause();
    }
  }
  
  // khi audio duoc play
  audio.onplay = function () {
    _this.isPlaying = true;
    btnPlay.classList.remove('d-none');
    btnPause.classList.add('d-none');
    cdThumbAnimate.play();
    
  };
  // khi audio bi pause
  audio.onpause = function () {
    _this.isPlaying = false;
    btnPlay.classList.add('d-none');
    btnPause.classList.remove('d-none');
    cdThumbAnimate.pause();
  };
    //  thanh tiến độ của bài hát
  audio.ontimeupdate = function () {
    if (audio.duration) {
        const progressPercent = Math.floor(
          (audio.currentTime / audio.duration) * 100
          );
        progress.value = progressPercent;
    }
  };
  // khi kết thúc bài hát
  audio.onended = function () {
    if (_this.isLoop) {
      this.play();
    }
    else {
      nextBtn.click();
    }
  }
    
  // Xử lý khi tua bài hát
  progress.onchange = function () {
    const seekTime = audio.duration * (this.value / 100);
    audio.currentTime = seekTime;
  }

  // Khi next bài hát
  nextBtn.onclick = function() {
    if (_this.isRanDom === true) {
      _this.playRandomSong();
    }
    else {
      _this.nextSong();
    }
    audio.play();

  }

  // Khi prev bài hát
  prevBtn.onclick = function () {
    if (_this.isRanDom === true) {
      _this.playRandomSong();
    }
    else {
      _this.prevSong();
    }
  audio.play();
  }

  // Xử lý bật / tắt random song
  randomBtn.onclick = function () {
    this.classList.toggle('toggle-color-controls');
    if(_this.isRanDom === false) _this.isRanDom = true;
    else _this.isRanDom = false;
  };

  // Xử lý lặp lại một song
  repeatBtn.onclick = function () {
    this.classList.toggle('toggle-color-controls');
      if(_this.isLoop === false) _this.isLoop = true;
      else _this.isLoop = false;
  };

},
loadCurrentSong: function () {
cdThumb.style.backgroundImage = `url('${this.currentSong.img}')`;
audio.src = this.currentSong.audio;

},
nextSong: function() {
this.currentIndex++;
// nếu là bài hát cuối cùng khi prev thì đến bài đầu tiên
if(this.currentIndex > this.songs.length - 1 )  {
  this.currentIndex = 0;
}
this.loadCurrentSong();
},
prevSong: function () {
this.currentIndex--;
// nếu là bài hát đầu tiên khi prev thì đến bài cuối cùng
if (this.currentIndex < 0) {
  this.currentIndex = this.songs.length - 1;
}
this.loadCurrentSong();
},
playRandomSong: function () {
let newIndex;
// nếu bài hát dc random chùng với bài hát hiện tại thì sẽ random lại
do {
    newIndex = Math.floor(Math.random() * this.songs.length);
}while(newIndex === this.currentIndex);
this.currentIndex = newIndex;
this.loadCurrentSong();
 
},
start: function () {
// Định nghĩa các thuộc tính cho object
this.defineProperties();

// Lắng nghe / xử lý các sự kiện (DOM events)
this.handleEvents();

// Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
this.loadCurrentSong();
}
};

app.start();
