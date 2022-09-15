function nav(){
    return `<div class="navbar">

    <div id="menulogo">
        <i class="fas fa-bars"></i>
    </div>

    


    <div class="logodiv">
        <img id="navlogo" src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg" alt="">
    </div>

    <p class="in">IN</p>

    <div class="inputbox">
        <input type="text" placeholder="Search" id="search">
        <div class="sdiv">
            <i onclick="searchmovies()" class="fas fa-search"></i>
        </div>
        <div class="micro">
            <i class="fas fa-microphone"></i>
        </div>
    </div>

    <div class="box9">
        <img id="box9" src="https://cdn-icons-png.flaticon.com/512/80/80975.png" alt="">
    </div>
    
    <div class="dot3">
        <i class="fas fa-ellipsis-v"></i>
    </div>

    <div class="userbox">
        <i class="far fa-user-circle"></i>
        <p id="userName">SIGN IN</p>
    </div>
    
</div>`
}
export default nav;