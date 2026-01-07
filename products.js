
const products = [
    {
        id: 1,
        name: "بستنی ساز",
        price: 14900000,
        description: "دستگاه بستنی ساز پاورولوژی مدل Powerology Ice Cream & Frozen Yogurt Machine",
        
        image:"Ice Cream.png",
        images:[
            "Ice Cream1.png",
            "Ice Cream2.png" ,
            "Ice Cream3.png",
            "Ice Cream4.png",
            "Ice Cream5.png"
        ]
    
    },

    {
        id: 2,
        name: "جارو رباتیک",
        price: 54000000,
        description:"جارو رباتیک شیائومی درما مدل Deerma X70 Smart Robot Vacuum Cleaner",
        image: "Cleaner.png",
        images:[
            "Cleaner.png",
            "Cleaner1.png",
            "Cleaner2.png",
            "Cleaner3.png",
            "Cleaner4.png",
            "Cleaner5.png",
            "Cleaner6.png"
        ]
    },
     {
        id: 3,
        name: "فن هوشمند ",
        price: 14900000,
         description: "فن هوشمند شیائومی مدل Xiaomi Smart Tower Fan 2 BPTSO2DMU",
        
        image:"Fan.png",
        images:[
            "Fan.png",
            "Fan1.png",
            "Fan2.png",
            "Fan3.png",
            "Fan4.png"
        ]


    },

    {
        id: 4,
        name: " کتری برقی",
        price: 3990000,
         description: "کتری برقی شیائومی میجیا مدل Mijia Electric Kettle 3",
        image: "Kettle.png",
        images:[
            "Kettle.png",
            "Kettle1.png",
            "Kettle2.png",
            "Kettle3.png",
            "Kettle4.png"
        ]
    },

    {
        id: 5,
        name: "پنکه",
        price: 14500000,
         description:"پنکه گرین لاین مدل Green Lion Air Ring Cooler Electric Bladeless Fan",
        
        image: "Cooler.png",
        images:[
            "Cooler.png",
            "Cooler1.png",
            "Cooler2.png"
        ]
    },

    {
        id: 6,
        name: "اسپرسوساز",
        price: 10190000,
         description: "اسپرسو ساز قابل حمل مدل Cerat Coffee Machine PCM04A",
        
        image: "Coffee.png",
        images:[
            "Coffee.png",
            "Coffee1.png",
            "Coffee2.png",
            "Coffee3.png",
            "Coffee4.png"
        ]
    },

    {
        id: 7,
        name: " مخلوط کن (شیکر)",
        price: 3190000,
         description:"مخلوط کن (شیکر) قابل حمل بومیدی مدل Bomidi Portable Juice Blender JB01",
        
        image: "Juice Blender.png",
        images:[
            "Juice Blender.png",
            "Juice Blender(1).png",
            "Juice Blender(2).png",
            "Juice Blender(3).png",
            "Juice Blender(4).png",
            "Juice Blender(5).png"
        ]
    },

    {
        id: 8,
        name: "   سرخ کن بدن روغن 12لیتری",
        price: 26000000, 
         description: "سرخ کن بدون روغن(هواپز) 12 لیتری شیائومی مدل Xiaomi Smart Double Stack Air Fryer 12L",
        
        image: "Stack Air Fryer 12L.png",
        images:[
            "Stack Air Fryer 12L.png",
            "Stack Air Fryer 12L(1).png",
            "Stack Air Fryer 12L(2).png",
            "Stack Air Fryer 12L(3).png"
        ]
    },

    {
        id: 9,
        name: "سرخ کن بدون روغن 7.5لیتری",
        price: 8900000,
         description:"سرخ کن بدون روغن (هواپز) 7.5 لیتری شیائومی درما مدل Deerma Air Fryer 7.5L DEM-KZ120W",
        
        image:"Air Fryer 7.5L.png",
        images:[
            "Air Fryer 7.5L.png",
            "Air Fryer 7.5L(1).png",
            "Air Fryer 7.5L(2).png",
            "Air Fryer 7.5L(3).png",
            "Air Fryer 7.5L(4).png"
        ]
    },

    {
        id: 10,
        name: "اسکوتر",
        price: 10350000,
         description: "اسکوتر سه چرخ کودک شیائومی مدل Xiaomi Mitu HBC01YM Kids 3 Wheels Scooter",
        
        image: "Scooter.jpeg",
        images:[
            "Scooter.jpeg",
            "Scooter(1).jpeg",
            "Scooter(2).jpeg",
            "Scooter(3).jpeg"
        ]
    },

    {
        id: 11,
        name: "تصفیه هوا",
        price: 15000000,
         description:"دستگاه تصفیه هوای شیائومی Mi Air Purifier 4 Compact",
        
        image: "Air Purifier.jpeg",
        images:[
            "Air Purifier.jpeg",
            "Air Purifier(1).jpeg",
            "Air Purifier(2).jpeg",
            "Air Purifier(3).jpeg",
            "Air Purifier(4).jpeg"
        ]
    },

    {
        id: 12,
        name:"اتوی مو",
        price: 1950000,
         description: "اتو مو بومیدی مدل Bomidi HS1 Electric Hair Straightening Iron Multi-level",
        
        image:"Iron.png",
        images:[
            "Iron.png",
            "Iron2.png",
            "Iron3.png",
            "Iron4.png",
            "Iron5.png",
            "Iron6.png",
            "Iron7.png",
            "Iron8.png",
            "Iron9.png"
        ]
    },
    {
        id:13,
        name:" ماشین اصلاح ",
        price:5590000,
        description:"ماشین اصلاح گرین لاین مدل Green Lion Pro Trim Duo Hair Clipper" ,
       
        
        image:"Hair Clipper.png",
        images:[
            "Hair Clipper.png",
            "Hair Clipper(1).png",
            "Hair Clipper(2).png",
            "Hair Clipper(3).png"
        ]
        

    },

     {
        id:14,
        name:" حالت دهنده ی مو  ",
        price:13900000,
        description:"سشوار و حالت دهنده مو ایربات مدل Airbot Aria HyperStyler Hairwrap HD198" ,
       
        
        image:"HyperStyler.png",
        images:[
            " HyperStyler.png",
            "HyperStyler1.png ",
            "HyperStyler2.png ",
            "HyperStyler3.png"
        ]
        

    },

     {
        id:15,
        name:"  خوشبو کننده هوا ",
        price:3190000,
        description:"خوش بو کننده هوای هوشمند شیائومی مدل Xiaomi Smart Scent Diffuser MJXFJ03XW" ,
       
        
        image:"Diffuser.png ",
        images:[
            "Diffuser.png ",
            "Diffuser1.png ",
            "Diffuser2.png",
            "Diffuser3.png ",
            "Diffuser4.png",
            "Diffuser5.png"
        ]
        

    },
     {
        id:16,
        name:"  سشوار ",
        price:6900000,
        description: "سشوار شیائومی میجیا مدل Mijia High Speed Hair Dryer H501" ,
        image:"Dryer.png",
        images:[
            "Dryer.png ",
            "Dryer1.png ",
            "Dryer2.png ",
            "Dryer3.png",
            "Dryer4.png ",
            "Dryer5.png",
            "Dryer6.png"
        ]
    }
];