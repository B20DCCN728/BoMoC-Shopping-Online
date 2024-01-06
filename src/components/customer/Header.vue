<template>
    <header class="header">
    <!-- grid --> 
    <div class="grid">
        <!-- navbar -->
        <nav class="header__navbar">
        <!-- navbar left -->
        <ul class="header__navbar-list">
            <li class="header__navbar-item header__navbar-item--has-qr header__navbar-item--separate">
            Vào cửa hàng Shoes Store Online
            <!-- Header QR code -->
            <div class="header__qr">
                <img src="../../assets/imgs/qr.png" alt="QR code" class="header__qr-img">
                <div class="header__qr-apps">
                <a href="https://www.forexfactory.com/" class="header__qr-link">
                    <img src="../../assets/imgs/appstore.png" alt="App Store" class="header__qr-download-img">
                </a>
                <a href="https://docs.google.com/spreadsheets/d/16ByD37z7RyU_BakwA6hk_jC6su5292X_iYZhclb_ny0/edit#gid=1802802883" class="header__qr-link">
                    <img src="../../assets/imgs/googleplay.png" alt="Google Play" class="header__qr-download-img">
                </a>
                </div>
            </div>
            </li>  
            <li class="header__navbar-item">
            <span class="header__navbar-title--no--pointer">Kết nối</span>
            <a href="" class="header__navbar-icon-link">
                <i class="header__navbar-icon fa-brands fa-facebook"></i>
            </a>
            <a href="" class="header__navbar-icon-link">
                <i class="header__navbar-icon fa-brands fa-instagram"></i>
            </a>
            </li>          
        </ul>
        <!-- navbar right -->
        <ul class="header__navbar-list">
            <li class="header__navbar-item header__navbar-item--has-notify">
            <a href="" class="header__navbar-item-link">
                <i style="margin: 0 4px" class="fas fa-bell"></i>
                Thông báo
            </a>
            <!-- Notification -->
            <div class="header__notify">
                <header class="header__notify-header">
                <h3>Thông báo mới nhận</h3>
                </header>
                <ul class="header__notify-list">
                <li class="header__notify-item header__notify-item--viewed">
                    <a href="" class="header__notify-link">
                    <img src="../../assets/imgs/doraemon_1.jpg" alt="" class="header__notify-img">
                    <div class="header__notify-info">
                        <span class="header__notify-name">Hiện tại đơn hàng của bạn đã bị xóa khỏi cơ sở dữ liệu, bạn có muốn khôi phục nó không?</span>
                        <span class="header__notify-description">Mặt hàng này hiện đã hết</span>
                    </div>
                    </a>
                </li>  
                <li class="header__notify-item header__notify-item--viewed">
                    <a href="" class="header__notify-link">
                    <img src="../../assets/imgs/doraemon_2.jpg" alt="" class="header__notify-img">
                    <div class="header__notify-info">
                        <span class="header__notify-name">Doraemon chapter 100</span>
                        <span class="header__notify-description">Mặt hàng này hiện đã hết</span>
                    </div>
                    </a>
                </li>  
                <li class="header__notify-item">
                    <a href="" class="header__notify-link">
                    <img src="../../assets/imgs/doraemon_1.jpg" alt="" class="header__notify-img">
                    <div class="header__notify-info">
                        <span class="header__notify-name">Doraemon chapter 100</span>
                        <span class="header__notify-description">Mặt hàng này hiện đã hết</span>
                    </div>
                    </a>
                </li>  
                <li class="header__notify-item">
                    <a href="" class="header__notify-link">
                    <img src="../../assets/imgs/doraemon_1.jpg" alt="" class="header__notify-img">
                    <div class="header__notify-info">
                        <span class="header__notify-name">Doraemon chapter 100</span>
                        <span class="header__notify-description">Mặt hàng này hiện đã hết</span>
                    </div>
                    </a>
                </li>                                                              
                </ul>    
                <footer class="header__notify-footer">
                <a href="" class="header__notify-footer-btn">Xem tất cả</a>
                </footer>             
            </div>
            </li>
            <li class="header__navbar-item">
            <a href="" class="header__navbar-item-link">
                <i style="margin: 0 4px" class="far fa-circle-question"></i>
                Trợ giúp
            </a>  
            </li>
            <!-- Đăng nhập và đăng kí -->
            <li id="signup" class="header__navbar-item header__navbar-item--strong header__navbar-item--separate">Đăng kí</li>
            <li id="login" class="header__navbar-item header__navbar-item--strong">Đăng nhập</li>

            <!-- Already Login -->
            <!-- <li class="header__navbar-item header__navbar-user">
            <img src="/Web Pages/imgs/avatar.jpg" alt="avatar" class="header__navbar-user-avatar">
            <span class="header__navbar-username">Nguyễn Hoàng Việt</span>
            <ul class="header__navbar-user-menu">
                <li class="header__navbar-user-item">
                <a href="" class="header__navbar-user-item-link">
                    <i class="header__navbar-user-icon fa-solid fa-user"></i>
                    <span>Thông tin tài khoản</span>
                </a>
                </li>
                <li class="header__navbar-user-item">
                <a href=""  class="header__navbar-user-item-link">
                    <i class="header__navbar-user-icon fa-solid fa-bag-shopping"></i>
                    <span>Đơn hàng đã mua</span>
                </a>
                </li>
                <li class="header__navbar-user-item header__navbar-user-item-link--separate">
                <a href="" class="header__navbar-user-item-link">
                    <i class="header__navbar-user-icon fa-solid fa-right-from-bracket"></i>
                    <span>Đăng xuất</span>
                </a>
                </li>
            </ul>
            </li> -->
            
        </ul>
        </nav>  

        <!-- Header with search -->
        <div class="header-with-search">
        <div class="header__logo">
            <a href="https://twitter.com/campus2k2" class="header__logo-link">
            <svg viewBox="0 0 192 65" class="header__logo-img">
                <g fill-rule="evenodd">
                <path fill="#fff" d="M35.6717403 44.953764c-.3333497 2.7510509-2.0003116 4.9543414-4.5823845 6.0575984-1.4379707.6145919-3.36871.9463856-4.896954.8421628-2.3840266-.0911143-4.6237865-.6708937-6.6883352-1.7307424-.7375522-.3788551-1.8370513-1.1352759-2.6813095-1.8437757-.213839-.1790053-.239235-.2937577-.0977428-.4944671.0764015-.1151823.2172535-.3229831.5286218-.7791994.45158-.6616533.5079208-.7446018.5587128-.8221779.14448-.2217688.3792333-.2411091.6107855-.0588804.0243289.0189105.0243289.0189105.0426824.0333083.0379873.0294402.0379873.0294402.1276204.0990653.0907002.0706996.14448.1123887.166248.1287205 2.2265285 1.7438508 4.8196989 2.7495466 7.4376251 2.8501162 3.6423042-.0496401 6.2615109-1.6873341 6.7308041-4.2020035.5160305-2.7675977-1.6565047-5.1582742-5.9070334-6.4908212-1.329344-.4166762-4.6895175-1.7616869-5.3090528-2.1250697-2.9094471-1.7071043-4.2697358-3.9430584-4.0763845-6.7048539.296216-3.8283059 3.8501677-6.6835796 8.340785-6.702705 2.0082079-.004083 4.0121475.4132378 5.937338 1.2244562.6816382.2873109 1.8987274.9496089 2.3189359 1.2633517.2420093.1777159.2898136.384872.1510957.60836-.0774686.12958-.2055158.3350171-.4754821.7632974l-.0029878.0047276c-.3553311.5640922-.3664286.5817134-.447952.7136572-.140852.2144625-.3064598.2344475-.5604202.0732783-2.0600669-1.3839063-4.3437898-2.0801572-6.8554368-2.130442-3.126914.061889-5.4706057 1.9228561-5.6246892 4.4579402-.0409751 2.2896772 1.676352 3.9613243 5.3858811 5.2358503 7.529819 2.4196871 10.4113092 5.25648 9.869029 9.7292478M26.3725216 5.42669372c4.9022893 0 8.8982174 4.65220288 9.0851664 10.47578358H17.2875686c.186949-5.8235807 4.1828771-10.47578358 9.084953-10.47578358m25.370857 11.57065968c0-.6047069-.4870064-1.0948761-1.0875481-1.0948761h-11.77736c-.28896-7.68927544-5.7774923-13.82058185-12.5059489-13.82058185-6.7282432 0-12.2167755 6.13130641-12.5057355 13.82058185l-11.79421958.0002149c-.59136492.0107446-1.06748731.4968309-1.06748731 1.0946612 0 .0285807.00106706.0569465.00320118.0848825H.99995732l1.6812605 37.0613963c.00021341.1031483.00405483.2071562.01173767.3118087.00170729.0236381.003628.0470614.00554871.0704847l.00362801.0782207.00405483.004083c.25545428 2.5789222 2.12707837 4.6560709 4.67201764 4.7519129l.00576212.0055872h37.4122078c.0177132.0002149.0354264.0004298.0531396.0004298.0177132 0 .0354264-.0002149.0531396-.0004298h.0796027l.0017073-.0015043c2.589329-.0706995 4.6867431-2.1768587 4.9082648-4.787585l.0012805-.0012893.0017073-.0350275c.0021341-.0275062.0040548-.0547975.0057621-.0823037.0040548-.065757.0068292-.1312992.0078963-.1964115l1.8344904-37.207738h-.0012805c.001067-.0186956.0014939-.0376062.0014939-.0565167M176.465457 41.1518926c.720839-2.3512494 2.900423-3.9186779 5.443734-3.9186779 2.427686 0 4.739107 1.6486899 5.537598 3.9141989l.054826.1556978h-11.082664l.046506-.1512188zm13.50267 3.4063683c.014933.0006399.014933.0006399.036906.0008531.021973-.0002132.021973-.0002132.044372-.0008531.53055-.0243144.950595-.4766911.950595-1.0271786 0-.0266606-.000853-.0496953-.00256-.0865936.000427-.0068251.000427-.020262.000427-.0635588 0-5.1926268-4.070748-9.4007319-9.09145-9.4007319-5.020488 0-9.091235 4.2081051-9.091235 9.4007319 0 .3871116.022399.7731567.067838 1.1568557l.00256.0204753.01408.1013102c.250022 1.8683731 1.047233 3.5831812 2.306302 4.9708108-.00064-.0006399.00064.0006399.007253.0078915 1.396026 1.536289 3.291455 2.5833031 5.393601 2.9748936l.02752.0053321v-.0027727l.13653.0228215c.070186.0119439.144211.0236746.243409.039031 2.766879.332724 5.221231-.0661182 7.299484-1.1127057.511777-.2578611.971928-.5423827 1.37064-.8429007.128211-.0968312.243622-.1904632.34346-.2781231.051412-.0452164.092372-.083181.114131-.1051493.468898-.4830897.498124-.6543572.215249-1.0954297-.31146-.4956734-.586228-.9179769-.821744-1.2675504-.082345-.1224254-.154023-.2267215-.214396-.3133151-.033279-.0475624-.033279-.0475624-.054399-.0776356-.008319-.0117306-.008319-.0117306-.013866-.0191956l-.00256-.0038391c-.256208-.3188605-.431565-.3480805-.715933-.0970445-.030292.0268739-.131624.1051493-.14997.1245582-1.999321 1.775381-4.729508 2.3465571-7.455854 1.7760208-.507724-.1362888-.982595-.3094759-1.419919-.5184948-1.708127-.8565509-2.918343-2.3826022-3.267563-4.1490253l-.02752-.1394881h13.754612zM154.831964 41.1518926c.720831-2.3512494 2.900389-3.9186779 5.44367-3.9186779 2.427657 0 4.739052 1.6486899 5.537747 3.9141989l.054612.1556978h-11.082534l.046505-.1512188zm13.502512 3.4063683c.015146.0006399.015146.0006399.037118.0008531.02176-.0002132.02176-.0002132.044159-.0008531.530543-.0243144.950584-.4766911.950584-1.0271786 0-.0266606-.000854-.0496953-.00256-.0865936.000426-.0068251.000426-.020262.000426-.0635588 0-5.1926268-4.070699-9.4007319-9.091342-9.4007319-5.020217 0-9.091343 4.2081051-9.091343 9.4007319 0 .3871116.022826.7731567.068051 1.1568557l.00256.0204753.01408.1013102c.250019 1.8683731 1.04722 3.5831812 2.306274 4.9708108-.00064-.0006399.00064.0006399.007254.0078915 1.396009 1.536289 3.291417 2.5833031 5.393538 2.9748936l.027519.0053321v-.0027727l.136529.0228215c.070184.0119439.144209.0236746.243619.039031 2.766847.332724 5.22117-.0661182 7.299185-1.1127057.511771-.2578611.971917-.5423827 1.370624-.8429007.128209-.0968312.243619-.1904632.343456-.2781231.051412-.0452164.09237-.083181.11413-.1051493.468892-.4830897.498118-.6543572.215246-1.0954297-.311457-.4956734-.586221-.9179769-.821734-1.2675504-.082344-.1224254-.154022-.2267215-.21418-.3133151-.033492-.0475624-.033492-.0475624-.054612-.0776356-.008319-.0117306-.008319-.0117306-.013866-.0191956l-.002346-.0038391c-.256419-.3188605-.431774-.3480805-.716138-.0970445-.030292.0268739-.131623.1051493-.149969.1245582-1.999084 1.775381-4.729452 2.3465571-7.455767 1.7760208-.507717-.1362888-.982582-.3094759-1.419902-.5184948-1.708107-.8565509-2.918095-2.3826022-3.267311-4.1490253l-.027733-.1394881h13.754451zM138.32144123 49.7357905c-3.38129629 0-6.14681004-2.6808521-6.23169343-6.04042014v-.31621743c.08401943-3.35418649 2.85039714-6.03546919 6.23169343-6.03546919 3.44242097 0 6.23320537 2.7740599 6.23320537 6.1960534 0 3.42199346-2.7907844 6.19605336-6.23320537 6.19605336m.00172791-15.67913203c-2.21776751 0-4.33682838.7553485-6.03989586 2.140764l-.19352548.1573553V34.6208558c0-.4623792-.0993546-.56419733-.56740117-.56419733h-2.17651376c-.47409424 0-.56761716.09428403-.56761716.56419733v27.6400724c0 .4539841.10583425.5641973.56761716.5641973h2.17651376c.46351081 0 .56740117-.1078454.56740117-.5641973V50.734168l.19352548.1573553c1.70328347 1.3856307 3.82234434 2.1409792 6.03989586 2.1409792 5.27140956 0 9.54473746-4.2479474 9.54473746-9.48802964 0-5.239867-4.2733279-9.48781439-9.54473746-9.48781439M115.907646 49.5240292c-3.449458 0-6.245805-2.7496948-6.245805-6.1425854 0-3.3928907 2.79656-6.1427988 6.245805-6.1427988 3.448821 0 6.24538 2.7499081 6.24538 6.1427988 0 3.3926772-2.796346 6.1425854-6.24538 6.1425854m.001914-15.5438312c-5.28187 0-9.563025 4.2112903-9.563025 9.4059406 0 5.1944369 4.281155 9.4059406 9.563025 9.4059406 5.281657 0 9.562387-4.2115037 9.562387-9.4059406 0-5.1946503-4.280517-9.4059406-9.562387-9.4059406M94.5919049 34.1890939c-1.9281307 0-3.7938902.6198995-5.3417715 1.7656047l-.188189.1393105V23.2574169c0-.4254677-.1395825-.5643476-.5649971-.5643476h-2.2782698c-.4600414 0-.5652122.1100273-.5652122.5643476v29.2834155c0 .443339.1135587.5647782.5652122.5647782h2.2782698c.4226187 0 .5649971-.1457701.5649971-.5647782v-9.5648406c.023658-3.011002 2.4931278-5.4412923 5.5299605-5.4412923 3.0445753 0 5.516841 2.4421328 5.5297454 5.4630394v9.5430935c0 .4844647.0806524.5645628.5652122.5645628h2.2726775c.481764 0 .565212-.0824666.565212-.5645628v-9.5710848c-.018066-4.8280677-4.0440197-8.7806537-8.9328471-8.7806537M62.8459442 47.7938061l-.0053397.0081519c-.3248668.4921188-.4609221.6991347-.5369593.8179812-.2560916.3812097-.224267.551113.1668119.8816949.91266.7358184 2.0858968 1.508535 2.8774525 1.8955369 2.2023021 1.076912 4.5810275 1.646045 7.1017886 1.6975309 1.6283921.0821628 3.6734936-.3050536 5.1963734-.9842376 2.7569891-1.2298679 4.5131066-3.6269626 4.8208863-6.5794607.4985136-4.7841067-2.6143125-7.7747902-10.6321784-10.1849709l-.0021359-.0006435c-3.7356476-1.2047686-5.4904836-2.8064071-5.4911243-5.0426086.1099976-2.4715346 2.4015793-4.3179454 5.4932602-4.4331449 2.4904317.0062212 4.6923065.6675996 6.8557356 2.0598624.4562232.2767364.666607.2256796.9733188-.172263.035242-.0587797.1332787-.2012238.543367-.790093l.0012815-.0019308c.3829626-.5500403.5089793-.7336731.5403767-.7879478.258441-.4863266.2214903-.6738208-.244985-1.0046173-.459427-.3290803-1.7535544-1.0024722-2.4936356-1.2978721-2.0583439-.8211991-4.1863175-1.2199998-6.3042524-1.1788111-4.8198184.1046878-8.578747 3.2393171-8.8265087 7.3515337-.1572005 2.9703036 1.350301 5.3588174 4.5000778 7.124567.8829712.4661613 4.1115618 1.6865902 5.6184225 2.1278667 4.2847814 1.2547527 6.5186944 3.5630343 6.0571315 6.2864205-.4192725 2.4743234-3.0117991 4.1199394-6.6498372 4.2325647-2.6382344-.0549182-5.2963324-1.0217793-7.6043603-2.7562084-.0115337-.0083664-.0700567-.0519149-.1779185-.1323615-.1516472-.1130543-.1516472-.1130543-.1742875-.1300017-.4705335-.3247898-.7473431-.2977598-1.0346184.1302162-.0346012.0529875-.3919333.5963776-.5681431.8632459">
                </path>
                </g>
            </svg>    
            </a>
        </div>

        <div class="header__search">
            <div class="header__search-input-wrap">
            <input type="text" class="header__search-input" placeholder="Nhập để tìm kiếm sản phẩm phù hợp" value="">
            <!-- Search History -->
            <div class="header__search-history">
                <h3 class="header__search-history-heading">
                Search History
                </h3>
                <ul class="header__search-history-list">
                <li class="header__search-history-item">
                    <a href="https://twitter.com/campus2k2">AK-12 Russian</a>
                </li>
                <li class="header__search-history-item">
                    <a href="">Fagot ATGM</a>
                </li>
                <li class="header__search-history-item">
                    <a href="">Kornet ATGM</a>
                </li>
                </ul>
            </div>
            </div>
            <div class="header__search-select">
            <span class="header__search-select-label">Trong Shop</span>
            <i class="header__search-select-icon fa-sharp fa-solid fa-chevron-down"></i>
            <ul class="header__search-options">
                <li class="header__search-option-item header__search-option-item--active">
                <span>Trong Shop</span>
                <i class="fa-solid fa-check"></i>
                </li>
                <li class="header__search-option-item">
                <span>Ngoài Shop</span>
                <i class="fa-solid fa-check"></i>
                </li>
            </ul>
            </div>
            <button class="header__search-btn" onclick="">
            <i class="header__search-btn-icon fa-solid fa-magnifying-glass"></i>
            </button>
        </div>

        <div class="header__cart">
            <i class="header__cart-icon fa-solid fa-cart-shopping"></i>
        </div>
        </div>
    </div>
    </header>
</template>

<style scoped>
/* Header */
.header {
    height: var(--header-heigth);
    /* background-image: linear-gradient(0, #fe6433, #f53e2d); */
    background-image: linear-gradient(0, rgb(27, 164, 125), rgb(10, 124, 92));
 }
 
 .header__navbar {
   display: flex;
   justify-content: space-between;
 }
 
 .header__navbar-list {
   list-style: none;
   padding-left: 0;
   margin: 4px 0 0 0;
   display: flex;
 }
 
 .header__navbar-item {
   /* margin: 0 8px; */
   padding: 0 8px;
   position: relative;
   min-height: 26px;
 }
 
 .header__navbar-user {
   display: flex;
   justify-items: center;
   position: relative;
   padding: 0;
   margin: 0 10px;
 }
 
 .header__navbar-user:hover .header__navbar-user-menu {
   display: block;
 }
 
 .header__navbar-user-avatar {
   width: 24px;
   border-radius: 50%;
   border: 1px solid rgba(0, 0, 0, 0.1);
 }
 
 .header__navbar-username {
   margin-left: 4px;
   font-size: 1.4rem;
   font-weight: 400;
 }
 
 .header__navbar-user-menu {
   display: none;
   z-index: 1;
   position: absolute;
   width: 180px;
   top: calc(100% + 10px);
   padding-left: 0;
   right: 0;
   background-color: var(--white-color);
   border-radius: 3px;
   /* border: 1px solid #666; */
   list-style: none; 
   box-shadow: 0 1px 2px #e0e0e0;
 }
 
 .header__navbar-user-menu::before {
   content: "";
   z-index: -1;
   border-width: 20px 27px;
   border-style: solid;
   border-color: transparent transparent var(--white-color) transparent;
   position: absolute;
   right: 18px;
   top: -30px;
 }
 
 .header__navbar-user-menu::after {
   content: "";
   display: block;
   position: absolute;
   width: calc(100% - 18px);
   right: 0;
   top: -16px;
   height: 20px;
 }
 
 .header__navbar-user-item {
   width: 100%; 
 }
 
 .header__navbar-user-item-link {
   /* display: block; */
   display: flex;
   flex: 1;
   align-items: center;
   padding: 12px 14px;
   text-decoration: none;
 }
 
 .header__navbar-user-item-link--separate {
   border-top: 1px solid rgba(126, 126, 126, 0.5);
 }
 
 .header__navbar-user-item:hover {
   background-color: #e9e8e8;
 }
 
 .header__navbar-user-item:first-child {
   border-top-left-radius: 3px;
   border-top-right-radius: 3px;
 }
 
 .header__navbar-user-item:last-child {
   border-bottom-left-radius:3px;
   border-bottom-right-radius: 3px;
 }
 
 .header__navbar-user-icon {
   font-size: 1.8rem;
   padding-right: 14px;
   color: var(--primary-color);
 }
 
 .header__navbar-user-item-link span {
   /* padding-left: 20px; */
   font-size: 1.4rem;
   font-weight: 400;
   color: var(--text-color);
 }
 
 
 /* Notification */
 
 .header__navbar-item--has-notify:hover .header__notify {
   display: block;
 }
 
 .header__navbar-item--has-qr:hover .header__qr {
   display: block;
 }
 
 .header__navbar-item, 
 .header__navbar-item-link {
   display: inline-block;
   font-size: 1.36rem;
   color: var(--white-color);
   text-decoration: none;
   font-weight: 300;
 }
 
 .header__navbar-icon-link, 
 .header__navbar-item, 
 .header__navbar-item-link {
   display: flex;
   align-items: center; 
 }
 
 
 .header__navbar-item:hover, 
 .header__navbar-item-link:hover,
 .header__navbar-icon-link:hover {
   color: RGBA(255, 255, 255, 0.7);
   cursor: pointer;
 }
 
 .header__navbar-icon-link {
     color: var(--white-color);
     text-decoration: none;
 }
 
 .header__navbar-icon-link:nth-child(2) {
   margin-left: 3px;
 }
 
 .header__navbar-item--separate {
   border-right:  1px solid #3fb867;
 }
 /* can tim hieu after */
 
 /* .header__navbar-item--separate::after {
   content: "";
   display: block;
   position:  absolute;
   border-left: 1px solid #fb9086;
   height: 14px;
   top: 50%;
   right: -9px;
   transform: translateY(-50%);
 } */
 
 .header__navbar-item--strong {
   font-weight: 450;
   text-align:inherit
 }
 
 .header__navbar-icon {
   font-size: 1.8rem;
   margin: 0 4px;
 }
 
 .header__navbar-title--no--pointer {
   cursor: text;
   color: var(--white-color);
 }
 
 /* Header QR code */
 
 .header__qr {
   width: 186px;
   background-color: var(--white-color);
   position: absolute;
   left: 3%;
   top: 145%;
   padding: 8px;
   border-radius: 2px;
   display: none;
   animation: fadeIn ease-in 0.3s;
 }
 
 .header__qr::before {
   position: absolute;
   content: "";
   left: 0;
   top: -16px;
   width: 100%;
   height: 20px;
   display: block;
 }
 
 .header__qr-img {
   width: 100%;
 }
 
 .header__qr-apps {
   display: flex;
   justify-content: space-between;
 }
 
 .header__qr-link:nth-child(1) {
   margin-left: 11px;
 }
 
 .header__qr-link:nth-child(2) {
   margin-right: 11px;
 }
 
 .header__qr-download-img {
   height: 16px;
 } 
 
 /* Header notification */
 .header__notify {
   cursor: default;
   z-index: 1;
   position: absolute;
   top: 130%;
   width: 404px;
   right: 0;
   background-color: var(--white-color);
   border: 1px solid rgba(0, 0, 0, 0.1);
   border-radius: 3px;
   transform-origin: calc(100% - 32px) top;
   animation: headerNotifyGrowth ease-in 0.25s;
   will-change: opacity, transform;
   display: none;
 }
 
 .header__notify::before {
   content: "";
   border-width: 20px 27px;
   border-style: solid;
   border-color: transparent transparent var(--white-color) transparent;
   position: absolute;
   right: 12px;
   top: -31px;
 }
 
 .header__notify::after {
   content: "";
   display: block;
   position: absolute;
   width: 120px;
   right: 0;
   top: -16px;
   height: 20px;
 }
 
 @keyframes headerNotifyGrowth {
   from {
     opacity: 0;
     transform: scale(0);
   }
   to {
     opacity: 1;
     transform: scale(1);
   }
 }
 
 .header__notify-header {
   height: 40px;
   background-color: var(--white-color);
 }
 
 .header__notify-header h3 {
   color: #999;
   margin: 0;
   font-weight: 400;
   font-size: 1.45rem; 
   line-height: 40px;
   margin: 0 0 0 12px;
   user-select: none;
 }
 
 .header__notify-list {
   padding-left: 0;
 }
 
 .header__notify-item {
 
 }
 
 .header__notify-item:hover {
   background-color: #F1F1F1F1;
 }
 
 .header__notify-item--viewed {
   background-color: rgba(238, 75, 43, 0.09);
 }
 
 .header__notify-link {
   padding: 12px;
   display: flex;
   text-decoration: none;
   width: 100%;
 }
 
 .header__notify-img {
   width: 38px;
   height: 100%;
   border: 1px solid rgb(210, 201, 149);
 }
 
 .header__notify-info {
   margin-left: 12px;
 
 }
 
 .header__notify-name {
   display: block;
   font-size: 1.4rem;
   font-weight: 400;
   line-height: 1.6rem;
   color: var(--text-color);
 }
 
 .header__notify-description {
   margin-top: 4px;
   display: block;
   font-size: 1.2rem;
   line-height: 1.6rem;
   color: #756F6E;
 }
 
 .header__notify-footer {
   /* display: flex; */
   /* height: 30px; */
 }
 
 .header__notify-footer-btn {
   /* border: 1px solid rgb(198, 214, 218); */
   text-decoration: none;
   color: var(--text-color);
   padding: 8px 0;
   width: 100%;
   font-size: 1.4rem;
   font-weight: 400;
   /* line-height: 30px;
   display: block; */
   /* margin: auto; */
   text-align: center;
   display: block;
 }
 
 /* Authen modal */
 
 .auth-form {
   width: 500px;
   background-color: var(--white-color);
   border-radius: 5px;
   overflow: hidden;
 }
 
 .auth-form__container {
   padding: 0 32px;
 }
 
 .auth_form__header {
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 0 12px;
   margin-top: 10px;
 }
 
 .auth_form__heading {
   font-size: 2.2rem;
   font-weight: 400;
   color: var(--text-color);
 }
 
 .auth-form__switch-btn {
   cursor: pointer;
   font-size: 1.6rem;
   font-weight: 400;
   color: var(--primary-color);
 }
 
 .auth-form__form {
   /* margin-top: 16px; */
 }
 
 .auth-form__input {
   width: 100%;
   height: 40px;  
   margin-top: 16px;
   padding: 0 12px;
   font-size: 1.4rem;
   border-radius: 2px;
   border: 1px solid var(--border-color);
   outline: none;
 }
 
 .auth-form__input:focus {
   border-color: #777;
 }
 
 /* bonus */
 
 .auth-form__aside {
   margin-top: 18px;
 }
 
 /* help */
 
 .auth-form__help {
   display: flex;
   justify-content: flex-end;
 }
 
 .auth-form__help-link {
   text-decoration: none;
   font-size: 1.4rem;
   color: #939393;
 }
 
 .auth-form__help-separate {
   display: block;
   border-left: 1px solid var(--border-color);
   height: 22px;
   margin: -2.5px 16px 0;
 }
 
 .auth-form__help-forgot {
   color: var(--primary-color);
 }
 
 /* join us */
 
 .auth-form__policy-text {
   font-weight: 400;
   line-height: 1.8rem;
   font-size: 1.3rem;
   text-align: center;
   padding: 12px;
 }
 
 .auth-form__text-link {
   text-decoration: none;
   color: var(--primary-color);
 }
  
 
 .auth-form__controls {
   margin-top: 80px;
   display: flex;
   justify-content: flex-end;
 }
 
 .auth-form__control-back {
   margin-right: 16px;
   /* background-color: transparent; */
 }
 /* social */
 .auth-form__socials {
   background-color: #f5f5f5;
   padding: 16px 36px;
   display: flex;
   justify-content: space-between;
   margin-top: 22px;
 }
 
 .auth-form__socials-icon {
   font-size: 1.8rem;
 }
 
 .auth-form__socials-title {
   margin: 0 36px;
 }
 
 .auth-form__facebook-icon {
   color: var(--white-color);
   background-color: #3A5A98;
   margin-right: 4px;
 }
 
 .auth-form__google-icon {
   background-color: var(--white-color);
   color: #666;
   margin-left: 4px;
 }
 
 
 /* Header with Search */
 .header-with-search {
   height: var(--header-with-search-heigth);
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 0 8px; 
 }
 
 .header__logo {
   width: 200px;
 }
 
 .header__logo-link {
   text-decoration: none;
 }
 
 .header__logo-img {
   width: 150px;
   color: var(--white-color);
   margin-bottom: 4px;
 }
 
 .header__search {
   flex: 1;
   height: 40px;
   border-radius: 2px;
   background-color: var(--white-color);
   display: flex;
   align-items: center;
 }
 
 .header__search-input-wrap {
   flex: 1;
   height: 100%;
   position: relative;
 }
 
 .header__search-input {
   height: 100%;
   width: 100%;
   border-radius: 2px;
   border: none;
   outline: none;
   font-size: 1.4rem;
   color: var(--text-color);
   padding: 0 16px;
 }
 
 .header__cart {
   width: 150px;
   text-align: center;
 }
 
 .header__cart-icon {
   margin-top: 6px;
   color: var(--white-color);
   font-size: 2.4rem;
   cursor: pointer;
 }
 
 .header__search-select {
   border-left: 1px solid #d7d4d4;
   padding-left: 16px;
   position: relative;
   cursor: pointer;
 }
 
 .header__search-select-label {
   font-size: 1.4rem;
   font-weight: 400;
   color: var(--text-color);
 }
 
 .header__search-select-icon {
   font-size: 1.2rem;
   color: rgb(95, 95, 95);
   margin: 0 14px; 
 }
 
 .header__search-btn {
   background-color: var(--primary-color);
   border: none;
   outline: none;
   height: 34px;
   margin-right: 3px;
   width: 60px;
   border-radius: 3px;
 }
 /* hover button */
 .header__search-btn:hover {
   background-color: #fb6445;
 }
 /* icon button */
 .header__search-btn-icon {
   font-size: 1.4rem;
   color: var(--white-color);
 }
 
 .header__search-select:hover .header__search-options {
   display: block;
 }
 
 .header__search-options {
   display: none;
   position: absolute;
   box-shadow: 0 1px 2px #e0e0e0;
   right: 0;
   animation: fadeIn ease-in 0.2s;
   top: calc(100% + 3px);
   width: 130px;
   border-radius: 3px;
   list-style: none;
   padding-left: 0;
   /* overflow: hidden; */
 }
 
 .header__search-options::after {
   position: absolute;
   content: "";
   display: block;
   width: 100%;
   height: 20px;
   top: -20px;
 }
 
 .header__search-option-item {
   background-color: var(--white-color);
   padding: 8px;
 }
 
 .header__search-option-item:first-child {
   border-top-right-radius: 3px;
   border-top-left-radius: 3px;
 }
 
 .header__search-option-item:last-child {
   border-bottom-right-radius: 3px;
   border-bottom-left-radius: 3px;
 }
 
 .header__search-option-item:hover {
   background-color: #e3e3e3;
   cursor: pointer;
 }
 
 .header__search-option-item span {
   font-size: 1.4rem;
   margin-left: 8px;
   color: var(--text-color);
 }
 
 .header__search-option-item i {
   font-size: 1.4rem;
   color: var(--primary-color);
   margin: 0 0 0 12px;
   display: none;
 }
 
 .header__search-option-item--active i {
   display: inline-block;
 }
 
 /* Search History */
 
 .header__search-input:focus ~ .header__search-history {
   display: block;
 }
 
 .header__search-history {
   display: none;
   position: absolute;
   top: calc(100% + 2px);
   left: 0;
   width: calc(100% - 16px);
   background-color: var(--white-color);
   border-radius: 3px;
   overflow: hidden;
   box-shadow: 0 0 3px rgb(189, 189, 189);
 }
 
 .header__search-history-heading {
   margin: 6px 12px;
   font-size: 1.4rem;
   color: #898989;
   font-weight: 400;
 }
 
 .header__search-history-list {
   list-style: none;
   padding: 0;
   margin: 6px 0 0;
 }
 
 .header__search-history-item {
   height: 38px;
 }
 .header__search-history-item:hover {
   background-color: #efe8e8;
   cursor: pointer;
 }
 
 .header__search-history-item a {
   line-height: 38px;
   padding: 0 12px;
   display: block;
   width: 100%;
   text-decoration: none;
   font-size: 1.4rem;
   color: var(--text-color);
 }

</style>