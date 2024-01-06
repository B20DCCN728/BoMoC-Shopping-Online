<script setup>
import { ref, onMounted } from 'vue'
import Header from '../../components/customer/Header.vue';
import Footer from '../../components/customer/Footer.vue';
import '../../assets/css/base.css';
import axios from 'axios';
import { useRoute } from 'vue-router';

// Declare 
const route = useRoute();
const productId = ref(route.params.id);

// Define data source
const dataSource = ref(
  {
    "status": "200",
    "message": "Get product successfully",
    "data": {
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
}
);

// Fetch data from server 

const fetchData = async () => {
  try {
    const response = await axios.get(`http://localhost:8080/api/product/product-detail/${productId.value}`);
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
            
            <!-- Product detail -->
            <div class="grid__column-8">
                <div class="grid__row">
                    <!-- Home -->
                    <div class="grid__column-3-4">
                        <img :src="dataSource.data.images[0].pathFile" alt="product-img" class="product-detail__img">
                    </div>   
                    <div class="grid__column-3-4">
                        <div class="product-detail">
                            <!-- Title -->
                            <h3 class="product-detail__title">
                                {{ dataSource.data.description }}
                            </h3>
                            <!-- Price and quantity -->
                            <div class="product-detail__status">
                            <div class="product-detail__status-content">Giá: {{ dataSource.data.price }}</div>
                            <div class="product-detail__status-content">Kho hàng: 12</div>
                            </div>
                            <!-- Select Quantities -->
                            <div class="product-detail__quantity">
                                
                                <div class="product-detail__quantity-input">
                                    <div class="product-detail__quantity-select">Chọn số lượng:</div>   
                                    <input id="product-detail__quantity--value" type="text" name="quantity" value="1" data-minimum="1" class="product-detail__quantity--value">
                                    <button class="product-detail__quantity-btn btn__spinner-box btn-minus">-</button>
                                    <button class="product-detail__quantity-btn btn__spinner-box btn btn-plus">+</button>
                                </div>
                            </div>
                            <!-- Add to cart -->
                            <div class="product-detail__cart">
                                <a href="#" class="product-detail__cart-btn btn product-detail__cart-add">
                                    <i class="product-detail__cart-icon fa-solid fa-cart-plus"></i>
                                    Thêm vào giỏ
                                </a>
                                <a href="#" class="product-detail__cart-btn btn product-detail__cart-order">
                                    <i class="product-detail__cart-icon fa-solid fa-money-check-dollar"></i>
                                    Mua hàng ngay
                                </a>
                            </div>
                        </div>
                    </div>  
                    <!-- Description -->
                    <div class="grid__column-3-8">
                        <div class="product-info">
                            <div><div class="product-info__option">Mô Tả Sản Phẩm</div></div>
                            <div class="product-info__body">
                                <h3 class="product-info__title">{{ dataSource.data.author.description }}</h3>
                                <p class="product-info__content">Phần Upper của giày được làm từ chất liệu mesh thoáng khí và da cao cấp, bộ đệm Air Max được thiết kế khá dày mang đến sự êm ái tuyệt vời. Giày Nike Air Max SYSTM có thể sử dụng trong mọi hoạt động hàng ngày.</p>
                                <img :src="dataSource.data.images[0].pathFile" alt="" class="product-info__img">
                              </div>
                        </div>
                    </div>         
                    <!-- Comments -->
                    <div class="grid__column-3-8">
                        <div class="product-comment">   
                            <div><div class="product-comment__option">Bình Luận Của Khách Hàng</div></div>
                            <div class="product-comment__client">
                                <div class="product-comment__client-each">
                                    <h3 class="product-comment__name">Khách hàng: Nguyen Hoang Viet</h3>
                                    <p class="product-comment__content">Nội dung: Sản phẩm chất lượng cao</p>
                                </div>
                                <div class="product-comment__client-each">
                                    <h3 class="product-comment__name">Khách hàng: Nguyen Hoang Viet</h3>
                                    <p class="product-comment__content">Nội dung: Sản phẩm chất lượng cao</p>
                                </div>
                                <div class="product-comment__client-each">
                                    <h3 class="product-comment__name">Khách hàng: Nguyen Hoang Viet</h3>
                                    <p class="product-comment__content">Nội dung: Sản phẩm chất lượng cao</p>
                                </div>
                                <div class="product-comment__client-each">
                                    <h3 class="product-comment__name">Khách hàng: Nguyen Hoang Viet</h3>
                                    <p class="product-comment__content">Nội dung: Sản phẩm chất lượng cao xịn xò và đầy đủ các tính năng như đã giới thiệu</p>
                                </div>
                            </div>
                            <div class="product-comment__me">
                                <input type="text" class="product-comment__value" placeholder="Hãy nhập bình luận của bạn">
                                <button class="product-comment__btn btn">Gửi bình luận</button>
                            </div>
                        </div>   
                    </div>     
                </div>
            </div>

            <!-- Propose -->
            <div class="grid__column-2">               
                <!-- Navbar item -->
                <nav class="category">
                  <!-- Heading navbar -->
                  <h3 class="category__heading">
                    <i class="fa-regular fa-down"></i>
                    <!-- <i class="category__heading-icon fa-solid fa-list"></i> -->
                    <i class="category__heading-icon fa-solid fa-arrow-down"></i>
                    Tương Tự
                  </h3>
                  <!-- Item -->
                  <div class="grid__row-propose">
                    <div class="grid__column-2-1">
                      <a class="home-product-item" href="#">  
                        <!-- Product img -->
                        <div class="home-product-item__img" style="background-image: url(https://i.pinimg.com/originals/bf/fa/cb/bffacb16c45d8efb3e3ed884005ed7d5.jpg)"></div>
                        <!-- Title -->
                        <h4 class="home-product-item__name">PMC WAGNER Multi Cam</h4>
                        <div class="home-product-item__price">
                          <span class="home-product-item__price-old">1.200.000đ</span>                        
                          <span class="home-product-item__price-current">0.000.000đ</span>
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
                      </a>    
                    </div>
                    <div class="grid__column-2-1">
                      <a class="home-product-item" href="#">  
                        <!-- Product img -->
                        <div class="home-product-item__img" style="background-image: url(https://i.pinimg.com/originals/bf/fa/cb/bffacb16c45d8efb3e3ed884005ed7d5.jpg)"></div>
                        <!-- Title -->
                        <h4 class="home-product-item__name">PMC WAGNER Multi Cam</h4>
                        <div class="home-product-item__price">
                          <span class="home-product-item__price-old">1.200.000đ</span>                        
                          <span class="home-product-item__price-current">0.000.000đ</span>
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
                      </a>    
                    </div>
                  </div>
                </nav>
            </div>
      </div>
        </div>
      </div>


    <!-- footer -->
    <Footer />
    </div>
</template>

<style scoped>
/* Product detail */
.product-detail__img {
    width: 100%;
    border: 1px solid var(--border-product-color);
    border-radius: 1px;
}

.product-detail {
    border-right: 1px solid var(--border-product-color);
    padding: 0 12px;
}

/* Title */
.product-detail__title {
    font-size: 1.7rem;
    line-height: 1.8rem;
    font-weight: 600;
    color: var(--text-color);
    margin: 0;
    padding: 16px 0;
    border-bottom: 1px solid var(--border-product-color);
}

/* Price and quantity */
.product-detail__status {
    width: 100%;
    padding: 10px 0;
    display: flex;
    border-bottom: 1px solid var(--border-product-color);
}

.product-detail__status-content {
    font-size: 1.7rem;
    padding: 10px 0;
    font-weight: 400;
    width: 50%;
    color: var(--text-color);
}

.product-detail__status-content:first-child {
    color: var(--primary-color);
}

.product-detail__status-content:last-child {
    text-align: center;
    /* padding-left: 4px; */
    border-left: 1px solid var(--border-product-color);
}

/* Select Quantities */
.product-detail__quantity {
    padding: 16px 0;
    border-bottom: 1px solid var(--border-product-color);
}

.product-detail__quantity-input {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}

.product-detail__quantity-select {
    font-size: 1.4rem;
    padding-right: 4px;
    margin: auto;
    font-weight: 400; 
    color: var(--text-color);
}

.product-detail__quantity--value {
    flex: 1;
    margin: 0px 3px 0 0;
    height: 30px;
    border-radius: 2px;
    outline: none;
    font-size: 1.4rem;
    border: 1px solid var(--border-product-color);
    background-color: var(--white-color);
    color: var(--text-color);
}

.product-detail__quantity-btn {

}

.btn-minus {
    padding: 0 16px;
}

/* Add to cart */
.product-detail__cart {
    padding: 30px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.product-detail__cart-btn {

}

.product-detail__cart-btn {
    background-color: var(--primary-color);
    color: var(--white-color);
    min-width: 180px;
    height: 40px;
    font-size: 1.6rem;
}

.product-detail__cart-add {

}

.product-detail__cart-order {

}

.product-detail__cart-icon {
    padding-right: 10px;
}

/* <!-- Description --> */
.product-info {
    margin: 40px 0;
    /* padding: 0 12px; */
}

.product-info__option {
    width: 20%;
    border: 1px solid var(--border-product-color);
    font-size: 1.8rem;
    font-weight: 400;
    padding: 20px 0;
    text-align: center;
    color: var(--primary-color);
}

.product-info__body {
    border: 1px solid var(--border-product-color);
    padding: 0 12px;
}

.product-info__title {
    font-size: 1.6rem;
    font-weight: 600;
}

.product-info__content {
    font-size: 1.4rem;
    font-weight: 400;
}

.product-info__img {
    width: 80%;
}

/* Comment */
.product-comment {
    margin: 10px 0 80px 0;
    /* padding: 0 12px; */
}

.product-comment__option {
    width: 30%;
    border: 1px solid var(--border-product-color);
    font-size: 1.8rem;
    font-weight: 400;
    padding: 20px 0;
    text-align: center;
    color: var(--primary-color);
}
.product-comment__client {
    padding: 20px;
    border: 1px solid var(--border-product-color);
}

.product-comment__client-each {
    border: 1px solid var(--border-product-color);
    padding: 0 12px;
    margin-bottom: 20px;
}

.product-comment__name{
    font-size: 1.6rem;
    font-weight: 600;
}

.product-comment__content {
    font-size: 1.4rem;
    font-weight: 400;
}

.product-comment__me {
    margin: 20px 0;
    display: flex;
}

.product-comment__value {
    flex: 1;
    margin-right: 10px;
    border-radius: 2px;
    font-size: 1.5rem;
    border: 1px solid var(--border-product-color);
    outline: none;
}

.product-comment__btn {
    color: var(--white-color);
    background-color: var(--primary-color);
}

</style>