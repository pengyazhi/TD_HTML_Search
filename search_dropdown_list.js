const city = document.getElementById('city');
const citys = ['臺北市','新北市','桃園市','臺中市','臺南市','高雄市','新竹縣','苗栗縣','彰化縣','南投縣','雲林縣','嘉義縣','屏東縣','宜蘭縣','花蓮縣','臺東縣','澎湖縣','金門縣','連江縣','基隆市','新竹市','嘉義市'];

let display_citys='';
for(let i = 0; i<citys.length;i++){
    display_citys+=`<li class="tags display_row_controls"><input type="checkbox">${citys[i]}</li>`;
}
city.innerHTML = display_citys;

/*<div class="category display_column_controls" id="product_category">
    <div class="display_row_controls" id="category_click">
        <label class="lblCategory" >商品類別</label>
        <div class="div_img_center">
            <img src="icon/arrow_bottom_down_icon.png">
        </div>
   </div>
   <ul class="tags" id="product_tag">
   </ul>
</div>*/
const product_category = document.getElementById('product_category');
const categories=['景點門票','活動 & 展覽','戶外活動','舒壓 & 放鬆','工作坊 & 在地文化','觀光行程','住宿']
const product_tag = document.getElementById('product_tag');
const tags_for_id_1 = ['景點門票','主題樂園','博物館&美術館','水族館&動物園','歷史景點'];
const tags_for_id_2 = ['運動賽事','娛樂表演','展覽&美術館'];
const tags_for_id_3 = ['冒險&極限運動','雪地活動','露營','遠足&登山','觀光農場','水上活動'];
const tags_for_id_4 = ['Spa & 按摩','美容 & 沙龍','溫泉'];
const tags_for_id_5 = ['工作坊 & 課程','文化體驗','手作材料包'];
const tags_for_id_6 = ['半/一日遊','多日遊','線上旅遊','單車旅遊','遊船觀光'];
const tags_for_id_7 = ['飯店','渡假村','民宿'];

let display_categories = '';
let display_tags='';
/*for(let i = 0; i < categories.length; i++){
    let tags_li = tags_for_id_[i];
    display_categories+=
    `<div class="display_row_controls" id="category_click">
        <label class="lblCategory" >${categories[i]}</label>
        <div class="div_img_center">
            <img src="icon/arrow_bottom_down_icon.png">
        </div>
    </div>`
    for(let j =0; j<tags_li.length;j++){
        display_tags+=
        `<ul class="tags" id="product_tag">
        </ul>`;
    }
    
}*/
for (let i = 0; i < categories.length; i++) {
    let tags_li = [];
    switch (i) {
      case 0:
        tags_li = tags_for_id_1;
        break;
      case 1:
        tags_li = tags_for_id_2;
        break;
      case 2:
        tags_li = tags_for_id_3;
        break;
      case 3:
        tags_li = tags_for_id_4;
        break;
      case 4:
        tags_li = tags_for_id_5;
        break;
      case 5:
        tags_li = tags_for_id_6;
        break;
      case 6:
        tags_li = tags_for_id_7;
        break;
    }
  
    let tags_html = '';
    for (let j = 0; j < tags_li.length; j++) {
      tags_html += `<li class="tags display_row_controls"><input type="checkbox">${tags_li[j]}</li>`;
    }
  
    display_categories +=
      `<div class="display_row_controls category_click">
          <label class="lblCategory">${categories[i]}</label>
          <div class="div_img_center">
              <img src="icon/arrow_bottom_down_icon.png">
            </div>
        </div>
        <ul class="tags" id="product_tag">
            ${tags_html}
        </ul>
      `;
  }
product_category.innerHTML=display_categories;

const product_type = document.getElementById('product_type');
const product_type_list = ['門票','自助行程','旅行團'];
let display_product_type='';
for(let i = 0; i<product_type_list.length;i++){
  display_product_type+=`<li class="tags display_row_controls"><input type="checkbox">${product_type_list[i]}</li>`;
}
product_type.innerHTML = display_product_type;



  