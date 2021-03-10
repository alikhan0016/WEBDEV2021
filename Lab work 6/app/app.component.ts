import { Component, Input, Output } from '@angular/core';
import { Item } from './item';
import { ItemList } from './itemList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  items1: Item[] = [
    new Item(
      "ColoWorld Remanufactured Ink Cartridges Replacement for HP 63",
      "HP Envy 4520 3634 OfficeJet 3830 5252 4650 5258 4655 4652 5255 DeskJet 3636 1111 3630 1112 Printer",
    4.9,
    "https://www.amazon.com/dp/B08NWYDQBF/ref=syn_sd_onsite_desktop_72?psc=1&uh_it=7651d320f7b0185097a82752e80597d2_CT&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUE0UFBGRzBHTUVQRVEmZW5jcnlwdGVkSWQ9QTA5OTY1NjQyMjNBUTNUTTFNVzRVJmVuY3J5cHRlZEFkSWQ9QTAxMzY3MTcxU1hSV0hHQlFNS1daJndpZGdldE5hbWU9c2Rfb25zaXRlX2Rlc2t0b3AmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl",
    ["https://images-na.ssl-images-amazon.com/images/I/81oemmn78jL._AC_SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71rz1P8ipSL._AC_SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71zjpDt-1DL._AC_SL1500_.jpg"]

    ),
    new Item(
      "ZIPRINT Remanufactured Ink",
      "Workforce Wf-3640 Wf-3620 Wf-7610 Wf-7620 Wf-7710 Wf-7720 Wf-7210",
      4.3,
      "https://www.amazon.com/dp/B07MHHLJ45/ref=syn_sd_onsite_desktop_27?psc=1&uh_it=7fe2dfab390dff8b577d7d32d86c9cc7_CT&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEySDBFTllLMTZGQlZKJmVuY3J5cHRlZElkPUEwMTE5ODkwMlFPMVdVVFNGM1FJVSZlbmNyeXB0ZWRBZElkPUEwNzcxNzY1MlA0Q1RPOEdWVUZCQiZ3aWRnZXROYW1lPXNkX29uc2l0ZV9kZXNrdG9wJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==",
      ["https://images-na.ssl-images-amazon.com/images/I/71eHemBVkSL._AC_SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/712J-5Msg%2BL._AC_SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/61J8fJNVUsL._AC_SL1500_.jpg"]
    ),
    new Item(
      "Ink Cartridge Replacement for HP 63XL",
      "21.5 inches Full HD (1920 x 1080) widescreen IPS display",
      4.4,
      "https://www.amazon.com/ONLYU-Remanufactured-Cartridge-Replacement-OfficeJet/dp/B088BHX7PX/ref=pd_di_sccai_6?pd_rd_w=1CrGc&pf_rd_p=c9443270-b914-4430-a90b-72e3e7e784e0&pf_rd_r=CE51G0DF2YFYPFWWWN2J&pd_rd_r=5f96d1e5-a88e-4e8e-a057-a5c41e0ae68c&pd_rd_wg=uxCrQ&pd_rd_i=B088BHX7PX&psc=1",
      ["https://images-na.ssl-images-amazon.com/images/I/71bh70p155L._AC_SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71GxaJE6XWL._AC_SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71jJVUOcvJL._AC_SL1500_.jpg"]
    ),
    new Item(
      "Etekcity Food Kitchen Scale, Gifts for Cooking, Baking, Meal Prep, Keto Diet",
      "Cooking, Baking, Meal Prep, Keto Diet",
      4.4,
      "https://www.amazon.com/Etekcity-Multifunction-Stainless-Batteries-Included/dp/B0113UZJE2/ref=gbps_img_m-9_475e_c131d213?smid=ATVPDKIKX0DER&pf_rd_p=5d86def2-ec10-4364-9008-8fbccf30475e&pf_rd_s=merchandised-search-9&pf_rd_t=101&pf_rd_i=15529609011&pf_rd_m=ATVPDKIKX0DER&pf_rd_r=QPMTY8G73BAZWH32QJ9R",
      ["https://images-na.ssl-images-amazon.com/images/I/71KqYzhTeVL._AC_SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/81mSaNHPduL._AC_SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/81iOIREQGqL._AC_SL1500_.jpg"]
    ),
    new Item(
      "Anker USB C to Lightning Cable",
      "6ft MFi Certified",
      3.9,
      "https://www.amazon.com/Anker-Powerline-Lightning-Connector-Certified/dp/B07H256MBK/ref=gbps_img_m-9_475e_047504c7?smid=A1KWJVS57NX03I&pf_rd_p=5d86def2-ec10-4364-9008-8fbccf30475e&pf_rd_s=merchandised-search-9&pf_rd_t=101&pf_rd_i=15529609011&pf_rd_m=ATVPDKIKX0DER&pf_rd_r=P2D1C2J5DX25VEEV14XV",
      ["https://images-na.ssl-images-amazon.com/images/I/51dK6Od0J2L._AC_SL1500_.jpg"]
    )
  ];

  items2:Item[] = [
    new Item(
      'Anna Karenina',
      'none',
      5.0,
      'https://www.britannica.com/list/12-novels-considered-the-greatest-book-ever-written',
      [
        'https://cdn.britannica.com/s:800x1000/82/175382-050-8B76E4A8/Greta-Garbo-Anna-Karenina-Clarence-Brown.jpg'
      ]
    ),
    new Item(
      'Anna Karenina',
      'none',
      5.0,
      'https://www.britannica.com/list/12-novels-considered-the-greatest-book-ever-written',
      [
        'https://cdn.britannica.com/s:800x1000/82/175382-050-8B76E4A8/Greta-Garbo-Anna-Karenina-Clarence-Brown.jpg'
      ]
    ),new Item(
      'Anna Karenina',
      'none',
      5.0,
      'https://www.britannica.com/list/12-novels-considered-the-greatest-book-ever-written',
      [
        'https://cdn.britannica.com/s:800x1000/82/175382-050-8B76E4A8/Greta-Garbo-Anna-Karenina-Clarence-Brown.jpg'
      ]
    ),new Item(
      'Anna Karenina',
      'none',
      5.0,
      'https://www.britannica.com/list/12-novels-considered-the-greatest-book-ever-written',
      [
        'https://cdn.britannica.com/s:800x1000/82/175382-050-8B76E4A8/Greta-Garbo-Anna-Karenina-Clarence-Brown.jpg'
      ]
    ),new Item(
      'Anna Karenina',
      'none',
      5.0,
      'https://www.britannica.com/list/12-novels-considered-the-greatest-book-ever-written',
      [
        'https://cdn.britannica.com/s:800x1000/82/175382-050-8B76E4A8/Greta-Garbo-Anna-Karenina-Clarence-Brown.jpg'
      ]
    ),
  ];
  items3:Item[] = [
    new Item(
    'The Seven Samurai',
    'none',
    4.7,
    'https://www.hollywoodreporter.com/lists/100-best-films-ever-hollywood-favorites-818512',
    [
      'https://static.hollywoodreporter.com/sites/default/files/2014/06/100_The_Seven_Samurai.jpg'
    ]
  ),
    new Item(
      'The Seven Samurai',
      'none',
      4.7,
      'https://www.hollywoodreporter.com/lists/100-best-films-ever-hollywood-favorites-818512',
      [
        'https://static.hollywoodreporter.com/sites/default/files/2014/06/100_The_Seven_Samurai.jpg'
      ]
    ),
    new Item(
      'The Seven Samurai',
      'none',
      4.7,
      'https://www.hollywoodreporter.com/lists/100-best-films-ever-hollywood-favorites-818512',
      [
        'https://static.hollywoodreporter.com/sites/default/files/2014/06/100_The_Seven_Samurai.jpg'
      ]
    ),
    new Item(
      'The Seven Samurai',
      'none',
      4.7,
      'https://www.hollywoodreporter.com/lists/100-best-films-ever-hollywood-favorites-818512',
      [
        'https://static.hollywoodreporter.com/sites/default/files/2014/06/100_The_Seven_Samurai.jpg'
      ]
    ),
    new Item(
      'The Seven Samurai',
      'none',
      4.7,
      'https://www.hollywoodreporter.com/lists/100-best-films-ever-hollywood-favorites-818512',
      [
        'https://static.hollywoodreporter.com/sites/default/files/2014/06/100_The_Seven_Samurai.jpg'
      ]
    ),
  ];
  items4:Item[] = [
    new Item(
      'Barista Career',
      'none',
      4.4,
      'https://www.mymajors.com/career/baristas/',
      [
        'https://perfectdailygrind.com/wp-content/uploads/2017/02/cirquecoffee_9_2_2017_20_10_19_56-e1486751998432.jpg'
      ]
    ),
    new Item(
      'Barista Career',
      'none',
      4.4,
      'https://www.mymajors.com/career/baristas/',
      [
        'https://perfectdailygrind.com/wp-content/uploads/2017/02/cirquecoffee_9_2_2017_20_10_19_56-e1486751998432.jpg'
      ]
    ),
    new Item(
      'Barista Career',
      'none',
      4.4,
      'https://www.mymajors.com/career/baristas/',
      [
        'https://perfectdailygrind.com/wp-content/uploads/2017/02/cirquecoffee_9_2_2017_20_10_19_56-e1486751998432.jpg'
      ]
    ),
    new Item(
      'Barista Career',
      'none',
      4.4,
      'https://www.mymajors.com/career/baristas/',
      [
        'https://perfectdailygrind.com/wp-content/uploads/2017/02/cirquecoffee_9_2_2017_20_10_19_56-e1486751998432.jpg'
      ]
    ),
    new Item(
      'Barista Career',
      'none',
      4.4,
      'https://www.mymajors.com/career/baristas/',
      [
        'https://perfectdailygrind.com/wp-content/uploads/2017/02/cirquecoffee_9_2_2017_20_10_19_56-e1486751998432.jpg'
      ]
    )
  ];
  itemList1 : ItemList = new ItemList(this.items1,'Techniques');


  itemLists: ItemList[] = [this.itemList1, new ItemList(this.items2,'book'), new ItemList(this.items3,'Movies'), new ItemList(this.items4,'Jobs')];

  title = 'Lab work 5';

  showCategory(i:number):void{
    let itemList : ItemList = this.itemLists[i]

    itemList.isVisible = !itemList.isVisible;
    /*if(itemList.isVisible){
      for(let iL of this.itemLists){
        if(iL.myId != itemList.myId ){
          iL.isVisible = false;
        }
      }
    }else{
      for(let iL of this.itemLists){
        if(iL.myId != itemList.myId ){
          iL.isVisible = true;
        }
      }
    }*/
  }
}
