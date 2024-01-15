<script setup>
import { ref, onMounted } from 'vue'
import Header from '../../components/customer/Header.vue';
import Footer from '../../components/customer/Footer.vue';
import '../../assets/css/base.css';
import axios from 'axios';

// Define data source
const dataSource = ref([
  {
    "status": "200",
    "message": "Get all products successfully",
    "data": [
        {
            "images": [
                {
                    "name": "Lược sử thời gian",
                    "pathFile": "https://down-vn.img.susercontent.com/file/5a9aa08248299c2fc7486aa3f9fdaa50",
                    "id": 1
                }
            ],
            "price": 92000.0,
            "quantity": 12,
            "addedDate": "2023-12-17T00:00:00",
            "description": "Lược sử thời gian",
            "author": {
                "fullName": "Stephen Hawking",
                "description": "Tò mò là một trong những phẩm chất bẩm sinh vô cùng quan trọng của chúng ta, và những vấn đề như Bản chất của vũ trụ là gì? Vũ trụ từ đâu ra? Chúng ta đến từ đâu và đóng vai trò gì trong vũ trụ? Có giới hạn cho sự nhận thức của con người không?... là những câu hỏi mà biết bao nhiêu thế hệ con người đã đặt ra dưới dạng này hoặc dạng khác từ khi bắt đầu biết nhận thức và suy ngẫm về thế giới này. Tất cả những vấn đề được nên ra trong tác phẩm Lược sử thời gian như Vũ trụ giãn nở, Lỗ đen, Nguồn gốc và số phận của vũ trụ, Mũi tên thời gian… đều là mong muốn của tác giả để phần nào trả lời được những câu hỏi đó, và hướng tới việc giải thích các giai đoạn lịch sử của toàn bộ vũ trụ.",
                "nationality": "USA",
                "dateOfBirth": null,
                "id": 1,
                "deathDate": null
            },
            "publisher": {
                "name": "Kim Đồng",
                "description": "Nhà xuất bản",
                "phoneNumber": "0337176055",
                "email": "nivt80@gmail.com",
                "id": 1
            },
            "title": null,
            "genre": "Khoa Học",
            "availability": true,
            "pages": 286,
            "id": 1
        }
    ]
  }
]);

// Fetch data from server 

const fetchData = async () => {
  try {
    const response = await axios.get(`http://localhost:8080/api/product/getAllBooks`);
    dataSource.value = response.data; // Replace dataSource with the fetched data

    console.log('Data fetched:', response.data); // Add this line
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

onMounted(() => {
  fetchData();
})

</script>


<template>
    <!-- Block Element Modifier -->
    <div class="app">
    <!-- header -->
    <Header />

    <!-- container -->
    <div class="app__container">
    <div class="grid">
        <!-- Grid row -->
        <div class="grid__row app__content">
        <!-- Side bar -->
        <div class="grid__column-2">
            <!-- Navbar item -->
            <nav class="category">
            <!-- Heading navbar -->
            <h3 class="category__heading">
                <i class="category__heading-icon fa-solid fa-list"></i>
                Danh Mục
            </h3>
            <!-- List item -->
            <ul class="category-list">
                  <li class="category-item category-link--active">
                    <a href="#" class="category-link">Sách thiếu nhi</a>
                  </li>
                  <li class="category-item">
                    <a href="#" class="category-link">Sách khoa học</a>
                  </li>
                  <li class="category-item">
                    <a href="#" class="category-link">Sách tiểu thuyết</a>
                  </li>
                  <li class="category-item">
                    <a href="#" class="category-link">Sách chính trị</a>
                  </li>
                </ul>
    
            </nav>
        </div>
        <!-- Componenet -->
        <div class="grid__column-10">
            <!-- Home filter -->
            <div class="home-filter">

            <span class="home-filter__label">Sắp xếp theo</span>
            <button class="home-filter__btn btn">Tồn kho</button>
            <button class="home-filter__btn btn btn--primary">Mới nhất</button>
            <button class="home-filter__btn btn">Bán chạy</button>

            <div class="select-input">  
                <span class="select-input__label">Price</span>
                <i class="select-input__icon fa-sharp fa-solid fa-chevron-down"></i>
                <!-- List option -->
                <ul class="select-input__list">
                <li class="select-input__item">
                    <a href="#" class="select-input__link">Giá: Thấp đến cao</a>
                </li>
                <li class="select-input__item">
                    <a href="#" class="select-input__link">Giá: Cao đến thấp</a>
                </li>
                </ul> 
            </div>

            <div class="home-filter__page">
                <span class="home-filter__page-num">
                <span class="home-filter__page-current">1</span>/14
                </span>

                <div class="home-filter__page-control">
                <a href="" class="home-filter__page-btn home-filter__page-btn--disable">
                    <i class="home-filter__page-icon fa-sharp fa-solid fa-chevron-left"></i>
                </a>
                <a href="" class="home-filter__page-btn">
                    <i class="home-filter__page-icon fa-sharp fa-solid fa-chevron-right"></i>
                </a>
                </div>
            </div>
            </div>
            <!-- Product -->
            <div class="home-product">
            <!--Create 1 - Row  -->
            <div class="grid__row">
              <div class="grid__column-2-4" v-for="(item, index) in dataSource.data" :key="index">
                <router-link class="home-product-item" :to="'/product-detail/' + item.id">
                  <!-- Product img -->
                  <div class="home-product-item__img" :style="{ backgroundImage: 'url(' + item.images[0].pathFile + ')' }"></div>
                  <!-- Title -->
                  <h4 class="home-product-item__name">{{ item.description }}</h4>
                  <div class="home-product-item__price">
                  <span class="home-product-item__price-old">{{ item.price * 2}}</span>                        
                  <span class="home-product-item__price-current">{{ item.price }} đồng</span>
                  </div>
                  <!-- Like and vote rating and sold -->
                  <div class="home-product-item__action">
                  <span class="home-product-item__like home-product-item__like--liked">
                      <i class="home-product-item__like-icon--empty fa-regular fa-heart"></i>
                      <i class="home-product-item__like-icon--fill fa-solid fa-heart"></i>
                  </span>
                  <div class="home-product-item__rating">
                      <i class="home-product-item_star--gold fa-solid fa-star"></i>
                      <i class="home-product-item_star--gold fa-solid fa-star"></i>
                      <i class="home-product-item_star--gold fa-solid fa-star"></i>
                      <i class="home-product-item_star--gold fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                  </div>
                  <span class="home-product-item__sold">Đã bán</span>
                  </div>
                  <!-- Branch and Product Source -->
                  <div class="home-product-item__origin">
                  <span class="home-product-item__branch">Converse</span>
                  <span class="home-product-item__source">USA</span>
                  </div>
                  <!-- Favourite -->
                  <div class="home-product-item__favourite">
                  <i class="fa-solid fa-check"></i>
                  <span>Yêu thích</span>
                  </div>
                  <!-- Sell off -->
                  <div class="home-product-item__sell-off">
                  <span class="home-product-item__sell-off-percent">43%</span>
                  <span class="home-product-item__sell-off-label">Giảm</span> 
                  </div>  
                </router-link>             
              </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>

    <!-- footer -->
    <Footer />
    </div>
</template>

<style scoped>
/* App container */
.app__container {
  background-color: #F5F5F5;
}

.app__content {
  padding-top: 36px;
}

.category {
  background-color: var(--white-color);
  border-radius: 2px;
}

.category__heading {
  font-size: 1.7rem;
  color: var(--text-color);
  margin-top: 0;
  padding: 12px 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

.category__heading-icon {
  font-size: 1.4rem;
  margin-right: 4px;
  position: relative;
  top: -1px;
}

.category-list {
  padding: 0 0 8px 0;
  list-style: none;
  margin-left: 9px;
}

.category-link--active .category-link {
  color: var(--primary-color);
}

.category-link--active .category-link::before {
  content: "";
  top: 50%;
  left: 7px;
  position: absolute;
  border: 4px solid;
  transform: translateY(calc(-50% - 1px));
  border-color: transparent transparent transparent var(--primary-color);
}

.category-link {
  position: relative;
  font-size: 1.4rem;
  text-decoration: none;
  color: var(--text-color);
  padding: 6px 16px;
  display: block;
  transition: right linear 0.1s;
  right: 0;
}

.category-link:hover {
  right: -4px;
  color: var(--primary-color);
  background-color: rgba(233, 99, 99, 0.1);
}

/* Home sort + filter*/

.home-filter {
  background-color: rgba(0, 0, 0, 0.04);
  display: flex;
  align-items: center;
  padding: 12px 22px;
  border-radius: 2px;
}

.home-filter__label {
  font-size: 1.4rem;
  color: #555555;
  margin-right: 16px;
}

.home-filter__btn {
  min-width: 90px;
  margin-right: 12px;
}

/* Home filter page */
.home-filter__page {
  margin-left: auto;
  display: flex;
  align-items: center;
}

.home-filter__page-num {
  font-size: 1.5rem;
  color: var(--text-color);
  margin-right: 22px;
}

.home-filter__page-current {
  color: var(--primary-color);
}

.home-filter__page-control {
  border-radius: 2px;
  overflow: hidden;
  display: flex;
  width: 72px;
  height: 36px;
}

.home-filter__page-btn {
  flex: 1;
  display: flex;
  background-color: var(--white-color);
  text-decoration: none;
}

.home-filter__page-icon {
  margin: auto;
  font-size: 1.2rem;
  color: #555;
}

.home-filter__page-btn:first-child {
  border-right: 1px solid #dedede;
}

.home-filter__page-btn--disable {
  background-color: #f6f0f0;
  cursor: default;
}

.home-filter__page-btn--disable .home-filter__page-icon {
  color: #286822;
}

/* Product Items */
.home-product {
  margin-bottom: 10px;
}

.home-product-item {
  display: block;
  text-decoration: none;
  margin-top: 10px;
  position: relative;
  background-color: var(--white-color);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1); /* Tao bong do */
  transition: transform ease-in 0.1s;
}

.home-product-item:hover {
  transform: translateY(-1px);
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.4);
}

.home-product-item__img {
  padding-bottom: 100%; /* Để bức ảnh hiện ra */
  background-repeat: no-repeat; /* Không cho ảnh lặp lại */
  background-size: contain; /* Cho bức ảnh nằm gọn trong thẻ chứa nó */
  background-size: cover; /* Chỉnh khi ảnh quá dài */
  background-position: center; /* Luôn ở trọng tâm bức ảnh */
}

.home-product-item__name {
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--text-color);

  line-height: 1.8rem;
  height: 3.6rem;  /* Chỉnh số lượng dòng */
  margin: 10px 10px 6px;
  overflow: hidden;
  display: block;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /* Chỉnh sửa kích thước dòng và thêm dấy 3 chấm */
  text-overflow: ellipsis;
  /* 
  text-overflow: ellipsis;
  white-space: nowrap; Đây là cách 1 dòng
   */
}

.home-product-item__price {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
}

.home-product-item__price-old {
  margin-left: 10px;
  font-size: 1.4rem;
  color: #666;
  text-decoration: line-through;
}

.home-product-item__price-current { 
  font-size: 1.7rem;
  color: var(--primary-color);
  margin-left: 10px;
}

.home-product-item__action {
  display: flex;
  justify-content: space-between;
  margin: 6px 10px 0;
}

.home-product-item__like {
  font-size: 1.3rem;
  color: var(--primary-color);
}

.home-product-item__like-icon--empty {
  color: var(--primary-color);
}

i.home-product-item__like-icon--fill {
  color: #F63D30;
  display: none;
}

.home-product-item__like--liked .home-product-item__like-icon--empty {
  display: none;
}

.home-product-item__like--liked i.home-product-item__like-icon--fill {
  display: inline-block;
}

.home-product-item__rating {
  margin-right: 4px;
  /* font-size: 0.8rem; */
  transform: scale(0.8);
  transform-origin: right;
  margin: -1px 0 0 auto;
  /* color: var(--primary-color); */
}

.home-product-item_star--gold {
  color: var(--star-gold-color);
}

.home-product-item__sold {
  font-size: 1.2rem;
  color: var(--text-color);
  margin-left: 4px;
}

.home-product-item__origin {
  display: flex;
  font-size: 1.2rem;
  font-weight: 380;
  justify-content:space-between;
  margin: 3px 10px 0;
  color: #595959;
}

.home-product-item__branch {
  /* margin-right: auto; */   
  color: #f42373;
}

.home-product-item__source {
  /* margin-left: auto; */
  color: #d48610;
}

/* Favourite icon */
.home-product-item__favourite {
  position: absolute;
  top: 10px;
  left: -4px;
  color: var(--primary-color);
  background-color: currentColor;
  font-weight: 500;
  line-height: 1.6rem;
  padding-right: 4px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}

.home-product-item__favourite::after {
  content: "";
  left: 0;
  bottom: -3px;
  position: absolute;
  border-top: 3px solid currentColor;
  border-left: 3px solid transparent;
  filter: brightness(60%);
}

.home-product-item__favourite i {
  color: var(--white-color);
  font-size: 0.9rem;
  margin: 0 2px 0 5px;
}

.home-product-item__favourite span {
  color: var(--white-color);
}

/* Giam gia */
.home-product-item__sell-off {
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 36px;
  padding: 3px 0 0;
  text-align: center;
  color: rgba(255, 216, 64, 0.94);
  background-color: currentColor;
}

.home-product-item__sell-off-percent {
  color: #EE4D2D;
  font-weight: 600;
  font-size: 1.3rem;
  line-height: 1.3rem;
}

.home-product-item__sell-off-label {
  font-size: 1.36rem;
  font-weight: 500;
  color: var(--white-color);
}

.home-product-item__sell-off::after {
  content: "";
  position: absolute;
  left: 0;
  /* bottom: -6px; */
  top: 100%;
  border-width: 0 20px 4px;
  border-style: solid;
  border-color: transparent currentColor transparent currentColor;
}
</style>