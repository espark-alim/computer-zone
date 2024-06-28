
export const laptops = [
    {
        "id": 1,
        "brand": "TechMaster",
        "model": "X1Carbon",
        "image": "/images/laptop-images/x1/x1.avif",
        "images": ["/images/laptop-images/x1/01.avif", "/images/laptop-images/x1/02.avif", "/images/laptop-images/x1/03.avif"],
        "sizes": ["6.4 inch", "8.9 inch", "10.6 inch", "11.1 inch", "12.1 inch", "13.3 inch", "15.4 inch", "16.1 inch", "17 inch", "18.4 inch"],
        "specs": {
            "processor": "Intel Core i7",
            "ram": "16GB",
            "storage": "512GB SSD",
            "display": "14 inch, 1920x1080",
            "battery": "Up to 15 hours"
        },
        "price": 1200,
        "description": "A sleek, lightweight laptop with powerful performance and long battery life.",
        "availability": "In Stock",
        "product": "laptop"
    },
    {
        "id": 2,
        "brand": "PowerTech",
        "model": "GamerPro",
        "image": "/images/laptop-images/game-pro/gamepro.avif",
        "images": ["/images/laptop-images/game-pro/01.avif", "/images/laptop-images/game-pro/02.avif", "/images/laptop-images/game-pro/03.avif"],
        "sizes": ["6.4 inch", "8.9 inch", "10.6 inch", "11.1 inch", "12.1 inch", "13.3 inch", "15.4 inch", "16.1 inch", "17 inch", "18.4 inch"],
        "specs": {
            "processor": "AMD Ryzen 7",
            "ram": "32GB",
            "storage": "1TB SSD",
            "display": "15.6 inch, 2560x1440",
            "battery": "Up to 8 hours"
        },
        "price": 1500,
        "description": "A high-performance gaming laptop designed for immersive gaming experiences.",
        "availability": "Limited Stock",
        "product": "laptop"
    },
    {
        "id": 3,
        "brand": "EcoLaptop",
        "model": "GreenBook",
        "image": "/images/laptop-images/green-book/greenbook.avif",
        "images": ["/images/laptop-images/green-book/01.avif", "/images/laptop-images/green-book/02.avif", "/images/laptop-images/green-book/03.avif"],
        "sizes": ["6.4 inch", "8.9 inch", "10.6 inch", "11.1 inch", "12.1 inch", "13.3 inch", "15.4 inch", "16.1 inch", "17 inch", "18.4 inch"],
        "specs": {
            "processor": "Intel Core i5",
            "ram": "8GB",
            "storage": "256GB SSD",
            "display": "13.3 inch, 1920x1080",
            "battery": "Up to 12 hours"
        },
        "price": 800,
        "description": "An eco-friendly laptop with sustainable materials and energy-efficient performance.",
        "availability": "Out of Stock",
        "product": "laptop"
    },

    {
        "id": 4,
        "brand": "UltraBook",
        "model": "SlimEdge",
        "image": "/images/laptop-images/slim-edge/slim-edge.avif",
        "images": ["/images/laptop-images/slim-edge/01.avif", "/images/laptop-images/slim-edge/02.avif", "/images/laptop-images/slim-edge/03.avif"],
        "sizes": ["6.4 inch", "8.9 inch", "10.6 inch", "11.1 inch", "12.1 inch", "13.3 inch", "15.4 inch", "16.1 inch", "17 inch", "18.4 inch"],
        "specs": {
            "processor": "Intel Core i9",
            "ram": "16GB",
            "storage": "1TB SSD",
            "display": "15 inch, 4K UHD",
            "battery": "Up to 10 hours"
        },
        "price": 1800,
        "description": "A premium ultrabook with a stunning 4K display and top-notch performance.",
        "availability": "In Stock",
        "product": "laptop"
    },
    {
        "id": 5,
        "brand": "GameMax",
        "model": "Alpha",
        "image": "/images/laptop-images/alpha/alpha.avif",
        "images": ["/images/laptop-images/alpha/01.avif", "/images/laptop-images/alpha/02.avif", "/images/laptop-images/alpha/03.avif"],
        "sizes": ["6.4 inch", "8.9 inch", "10.6 inch", "11.1 inch", "12.1 inch", "13.3 inch", "15.4 inch", "16.1 inch", "17 inch", "18.4 inch"],
        "specs": {
            "processor": "Intel Core i7",
            "ram": "16GB",
            "storage": "1TB SSD",
            "display": "17 inch, 2560x1440",
            "battery": "Up to 6 hours"
        },
        "price": 2000,
        "description": "A powerful gaming laptop with a large screen for immersive gaming.",
        "availability": "In Stock",
        "product": "laptop"
    },
    {
        "id": 6,
        "brand": "NotePro",
        "model": "Traveler",
        "image": "/images/laptop-images/traveler/traveler.avif",
        "images": ["/images/laptop-images/traveler/01.avif", "/images/laptop-images/traveler/02.avif", "/images/laptop-images/traveler/03.avif"],
        "sizes": ["6.4 inch", "8.9 inch", "10.6 inch", "11.1 inch", "12.1 inch", "13.3 inch", "15.4 inch", "16.1 inch", "17 inch", "18.4 inch"],
        "specs": {
            "processor": "Intel Core i5",
            "ram": "8GB",
            "storage": "512GB SSD",
            "display": "13.3 inch, 1920x1080",
            "battery": "Up to 14 hours"
        },
        "price": 900,
        "description": "A travel-friendly laptop with long battery life and lightweight design.",
        "availability": "In Stock",
        "product": "laptop"
    },
]

export const desktop_pc = [
    {
        "id": 1,
        "brand": "Legion Tower 7i Gen 8 (Intel) with RTX 4080 Super",
        "rating": 4.4,
        "reviews": 356,
        "partNumber": "90V6000MUS",
        "price": 2339.99,
        "image": "/images/desktop-images/4080-super/4080-super.avif",
        "images": ["/images/desktop-images/4080-super/01.avif", "/images/desktop-images/4080-super/02.avif", "/images/desktop-images/4080-super/03.avif"],
        "availability": {
            "status": "In Stock",
            "delivery": "FREE Standard Delivery: Get it by Wed. Jul 03",
            "deliveryOptions": "Delivery options for 60654"
        },
        "specialOffers": {
            "businessPrice": "Business Price: secure-lock Members Only Join Lenovo Pro & Save",
            "studentTeacherPrice": "Student & Teachers Price: success-alert Verify & Save Learn More",
            "rewards": {
                "earn": "$70",
                "description": [
                    "Earn & redeem rewards",
                    "Engagement rewards",
                    "Member exclusive offers",
                    "Free to Join — Join now!",
                    "in Rewards + Free expedited delivery Join Now!"
                ]
            }
        },
        "buyBackProgram": "Lenovo Buy Back Program: Earn Money while helping the planet. Recycle your old PCs & Electronics and earn a Visa Gift Card to use anywhere Visa is accepted. Easy and Free Shipping! Trade In Now",
        "specs": {
            "processor": "14th Generation Intel® Core™ i9-14900KF Processor (E-cores up to 4.40 GHz P-cores up to 5.60 GHz)",
            "operatingSystem": "Windows 11 Home 64",
            "graphicCard": "NVIDIA® GeForce RTX™ 4080 SUPER™ 16GB GDDR6X",
            "memory": "32 GB DDR5-5200MHz (UDIMM) - (2 x 16 GB)",
            "storage": "2 TB SSD M.2 2280 PCIe Gen4 Performance TLC Opal",
            "acAdapter": "850W",
            "coolingSystem": "250W 360mm Liquid Cooling + 1 x Rear + 2 x Top with ARGB + 3 x Front attached to Liquid Cooler Radiator aRGB",
            "pointingDevice": "USB Optical Mouse",
            "keyboard": "USB, Calliope, Black - English (US)",
            "wifiAdapter": "Wi-Fi 6E 2x2 AX & Bluetooth® 5.1 or above",
            "warranty": "One Year Legion Ultimate Support",
            "addons": "3 Month Xbox Game Pass"
        },
        "description": "A powerful desktop PC with high-end specifications, ideal for gaming and heavy-duty tasks.",
        "product": "desktop"
    },
    {
        "id": 2,
        "brand": "IdeaCentre 3i (Intel)",
        "rating": 4.5,
        "reviews": 57,
        "partNumber": "90VT008MUS",
        "price": 549.99,
        "image": "/images/desktop-images/Idea-centre-3i/Idea-centre-3i.avif",
        "images": ["/images/desktop-images/Idea-centre-3i/01.avif", "/images/desktop-images/Idea-centre-3i/02.avif", "/images/desktop-images/Idea-centre-3i/03.avif"],
        "availability": {
            "status": "Store Pickup: Ready in 5 Days at BEST BUY North Avenue",
            "delivery": "Delivery Unavailable",
            "deliveryOptions": "See all pickup locations"
        },
        "specialOffers": {
            "businessPrice": "Business Price: secure-lock Members Only Join Lenovo Pro & Save",
            "studentTeacherPrice": "Student & Teachers Price: success-alert Verify & Save Learn More",
            "rewards": {
                "earn": "$16",
                "description": [
                    "Earn & redeem rewards",
                    "Engagement rewards",
                    "Member exclusive offers",
                    "Free to Join — Join now!",
                    "in Rewards + Free expedited delivery Join Now!"
                ]
            }
        },
        "buyBackProgram": "Lenovo Buy Back Program: Earn Money while helping the planet. Recycle your old PCs & Electronics and earn a Visa Gift Card to use anywhere Visa is accepted. Easy and Free Shipping! Trade In Now",
        "specs": {
            "processor": "14th Generation Intel® Core™ i5-14400 Processor (E-cores up to 3.50 GHz P-cores up to 4.70 GHz)",
            "operatingSystem": "Windows 11 Home 64",
            "graphicCard": "Integrated Intel® UHD Graphics 730",
            "memory": "8 GB DDR4-3200MHz (UDIMM)",
            "storage": "256 GB SSD M.2 2280 PCIe Gen4 TLC",
            "pointingDevice": "USB Optical Mouse",
            "keyboard": "USB, Calliope, Black - English (US)",
            "wifiAdapter": "Wi-Fi 6 2x2 AX & Bluetooth® 5.1 or above",
            "warranty": "1 Year Mail-in",
            "addons": "3 Month Xbox Game Pass"
        },
        "description": "A reliable and affordable desktop PC with solid performance for everyday tasks.",
        "product": "desktop"
    },
    {
        "id": 3,
        "brand": "ThinkCentre M90t Gen 3 (Intel)",
        "rating": 4.3,
        "reviews": 78,
        "partNumber": "11T4000MUS",
        "price": 999.99,
        "image": "/images/desktop-images/m90t/m90t.avif",
        "images": ["/images/desktop-images/m90t/01.avif", "/images/desktop-images/m90t/02.avif", "/images/desktop-images/m90t/03.avif"],
        "availability": {
            "status": "In Stock",
            "delivery": "FREE Standard Delivery: Get it by Mon. Jul 10",
            "deliveryOptions": "Delivery options for 60654"
        },
        "specialOffers": {
            "businessPrice": "Business Price: secure-lock Members Only Join Lenovo Pro & Save",
            "studentTeacherPrice": "Student & Teachers Price: success-alert Verify & Save Learn More",
            "rewards": {
                "earn": "$30",
                "description": [
                    "Earn & redeem rewards",
                    "Engagement rewards",
                    "Member exclusive offers",
                    "Free to Join — Join now!",
                    "in Rewards + Free expedited delivery Join Now!"
                ]
            }
        },
        "buyBackProgram": "Lenovo Buy Back Program: Earn Money while helping the planet. Recycle your old PCs & Electronics and earn a Visa Gift Card to use anywhere Visa is accepted. Easy and Free Shipping! Trade In Now",
        "specs": {
            "processor": "13th Generation Intel® Core™ i7-13700 Processor (E-cores up to 3.40 GHz P-cores up to 5.10 GHz)",
            "operatingSystem": "Windows 11 Pro 64",
            "graphicCard": "NVIDIA® GeForce RTX™ 3060 12GB GDDR6",
            "memory": "16 GB DDR4-3200MHz (UDIMM)",
            "storage": "1 TB SSD M.2 2280 PCIe Gen4 TLC",
            "pointingDevice": "USB Optical Mouse",
            "keyboard": "USB, Calliope, Black - English (US)",
            "wifiAdapter": "Wi-Fi 6 2x2 AX & Bluetooth® 5.1 or above",
            "warranty": "3 Year Onsite Support",
            "addons": "1 Year Microsoft Office 365"
        },
        "description": "A robust desktop PC designed for business use, offering reliable performance and security features.",
        "product": "desktop"
    },
    {
        "id": 4,
        "brand": "ThinkStation P360 Ultra (Intel)",
        "rating": 4.6,
        "reviews": 124,
        "partNumber": "30FM001YUS",
        "price": 1499.99,
        "image": "/images/desktop-images/p360-ultra/p360-ultra.avif",
        "images": ["/images/desktop-images/p360-ultra/01.avif", "/images/desktop-images/p360-ultra/02.avif", "/images/desktop-images/p360-ultra/03.avif"],
        "availability": {
            "status": "In Stock",
            "delivery": "FREE Standard Delivery: Get it by Fri. Jul 07",
            "deliveryOptions": "Delivery options for 60654"
        },
        "specialOffers": {
            "businessPrice": "Business Price: secure-lock Members Only Join Lenovo Pro & Save",
            "studentTeacherPrice": "Student & Teachers Price: success-alert Verify & Save Learn More",
            "rewards": {
                "earn": "$45",
                "description": [
                    "Earn & redeem rewards",
                    "Engagement rewards",
                    "Member exclusive offers",
                    "Free to Join — Join now!",
                    "in Rewards + Free expedited delivery Join Now!"
                ]
            }
        },
        "buyBackProgram": "Lenovo Buy Back Program: Earn Money while helping the planet. Recycle your old PCs & Electronics and earn a Visa Gift Card to use anywhere Visa is accepted. Easy and Free Shipping! Trade In Now",
        "specs": {
            "processor": "12th Generation Intel® Core™ i9-12900 Processor (E-cores up to 3.80 GHz P-cores up to 5.10 GHz)",
            "operatingSystem": "Windows 11 Pro 64",
            "graphicCard": "NVIDIA® Quadro RTX™ 4000 8GB GDDR6",
            "memory": "32 GB DDR5-4800MHz (UDIMM)",
            "storage": "1 TB SSD M.2 2280 PCIe Gen4 TLC",
            "pointingDevice": "USB Optical Mouse",
            "keyboard": "USB, Calliope, Black - English (US)",
            "wifiAdapter": "Wi-Fi 6E 2x2 AX & Bluetooth® 5.2 or above",
            "warranty": "3 Year Onsite Support",
            "addons": "3 Year Accidental Damage Protection"
        },
        "description": "A high-performance workstation with advanced graphics and computing power for professional use.",
        "product": "desktop"
    },
    {
        "id": 5,
        "brand": "Yoga AIO 7 (AMD)",
        "rating": 4.7,
        "reviews": 89,
        "partNumber": "F0G7005MUS",
        "price": 1799.99,
        "image": "/images/desktop-images/aIO-7-amd/aIO-7-amd.avif",
        "images": ["/images/desktop-images/aIO-7-amd/01.avif", "/images/desktop-images/aIO-7-amd/02.avif", "/images/desktop-images/aIO-7-amd/03.avif"],
        "sizes": ["6.4 inch", "8.9 inch", "10.6 inch", "11.1 inch", "12.1 inch", "13.3 inch", "15.4 inch", "16.1 inch", "17 inch", "18.4 inch"],
        "availability": {
            "status": "In Stock",
            "delivery": "FREE Standard Delivery: Get it by Tue. Jul 05",
            "deliveryOptions": "Delivery options for 60654"
        },
        "specialOffers": {
            "businessPrice": "Business Price: secure-lock Members Only Join Lenovo Pro & Save",
            "studentTeacherPrice": "Student & Teachers Price: success-alert Verify & Save Learn More",
            "rewards": {
                "earn": "$54",
                "description": [
                    "Earn & redeem rewards",
                    "Engagement rewards",
                    "Member exclusive offers",
                    "Free to Join — Join now!",
                    "in Rewards + Free expedited delivery Join Now!"
                ]
            }
        },
        "buyBackProgram": "Lenovo Buy Back Program: Earn Money while helping the planet. Recycle your old PCs & Electronics and earn a Visa Gift Card to use anywhere Visa is accepted. Easy and Free Shipping! Trade In Now",
        "specs": {
            "processor": "AMD Ryzen™ 7 5800H Processor (3.2 GHz up to 4.4 GHz)",
            "operatingSystem": "Windows 11 Home 64",
            "graphicCard": "AMD Radeon™ RX 6600M 8GB GDDR6",
            "memory": "16 GB DDR4-3200MHz (SODIMM)",
            "storage": "1 TB SSD M.2 2280 PCIe Gen3 TLC",
            "pointingDevice": "Wireless Optical Mouse",
            "keyboard": "Wireless, Calliope, Black - English (US)",
            "wifiAdapter": "Wi-Fi 6 2x2 AX & Bluetooth® 5.1 or above",
            "warranty": "2 Year Depot or Carry-in",
            "addons": "1 Month Xbox Game Pass"
        },
        "description": "A stylish all-in-one desktop PC with a sleek design and powerful performance, perfect for multimedia use.",
        "product": "desktop"
    },
    {
        "id": 6,
        "brand": "IdeaCentre Mini 5i (Intel)",
        "rating": 4.2,
        "reviews": 47,
        "partNumber": "90Q7003MUS",
        "price": 649.99,
        "image": "/images/desktop-images/mini-5i/mini-5i.avif",
        "images": ["/images/desktop-images/mini-5i/01.avif", "/images/desktop-images/mini-5i/02.webp", "/images/desktop-images/mini-5i/03.webp"],
        "availability": {
            "status": "In Stock",
            "delivery": "FREE Standard Delivery: Get it by Thu. Jul 06",
            "deliveryOptions": "Delivery options for 60654"
        },
        "specialOffers": {
            "businessPrice": "Business Price: secure-lock Members Only Join Lenovo Pro & Save",
            "studentTeacherPrice": "Student & Teachers Price: success-alert Verify & Save Learn More",
            "rewards": {
                "earn": "$20",
                "description": [
                    "Earn & redeem rewards",
                    "Engagement rewards",
                    "Member exclusive offers",
                    "Free to Join — Join now!",
                    "in Rewards + Free expedited delivery Join Now!"
                ]
            }
        },
        "buyBackProgram": "Lenovo Buy Back Program: Earn Money while helping the planet. Recycle your old PCs & Electronics and earn a Visa Gift Card to use anywhere Visa is accepted. Easy and Free Shipping! Trade In Now",
        "specs": {
            "processor": "11th Generation Intel® Core™ i5-11400 Processor (2.6 GHz up to 4.4 GHz)",
            "operatingSystem": "Windows 11 Home 64",
            "graphicCard": "Integrated Intel® Iris® Xe Graphics",
            "memory": "8 GB DDR4-2666MHz (SODIMM)",
            "storage": "512 GB SSD M.2 2280 PCIe Gen3 TLC",
            "pointingDevice": "USB Optical Mouse",
            "keyboard": "USB, Calliope, Black - English (US)",
            "wifiAdapter": "Wi-Fi 6 2x2 AX & Bluetooth® 5.1 or above",
            "warranty": "1 Year Mail-in",
            "addons": "3 Month Xbox Game Pass"
        },
        "description": "A compact and versatile desktop PC with good performance for everyday computing tasks.",
        "product": "desktop"
    },
];

export const led_tv = [
    {
        "id": 1,
        "brand": "Samsung",
        "model": "QLED Q80T",
        "rating": 4.7,
        "reviews": 1050,
        "partNumber": "QN55Q80TAFXZA",
        "price": 999.99,
        "image": "/images/led-images/q80T/q80T.avif",
        "images": ["/images/led-images/q80T/01.avif", "/images/led-images/q80T/02.avif", "/images/led-images/q80T/03.avif"],
        "availability": {
            "status": "In Stock",
            "delivery": "FREE Standard Delivery: Get it by Wed. Jul 03",
            "deliveryOptions": "Delivery options for 60654"
        },
        "specialOffers": {
            "discount": "10% off for first-time buyers",
            "extendedWarranty": "Add a 3-year extended warranty for $100",
            "rewards": {
                "earn": "$50",
                "description": [
                    "Earn & redeem rewards",
                    "Exclusive offers for members",
                    "Free to Join — Join now!"
                ]
            }
        },
        "specs": {
            "screenSize": "55 inches",
            "resolution": "4K UHD (3840 x 2160)",
            "smartTv": true,
            "refreshRate": "120 Hz",
            "hdmiPorts": 4,
            "usbPorts": 2,
            "operatingSystem": "Tizen",
            "wifi": "Yes",
            "ethernet": "Yes",
            "bluetooth": "Yes",
            "warranty": "1 Year Manufacturer Warranty"
        },
        "description": "A high-performance QLED TV with vibrant colors and smart features, perfect for home entertainment.",
        "product": "led"
    },
    {
        "id": 2,
        "brand": "LG",
        "model": "OLED C1",
        "rating": 4.8,
        "reviews": 1250,
        "partNumber": "OLED55C1PUB",
        "price": 1299.99,
        "image": "/images/led-images/c1/c1.avif",
        "images": ["/images/led-images/c1/01.avif", "/images/led-images/c1/02.avif", "/images/led-images/c1/03.avif"],
        "availability": {
            "status": "In Stock",
            "delivery": "FREE Standard Delivery: Get it by Mon. Jul 10",
            "deliveryOptions": "Delivery options for 60654"
        },
        "specialOffers": {
            "discount": "15% off with code LG15",
            "extendedWarranty": "Add a 5-year extended warranty for $150",
            "rewards": {
                "earn": "$65",
                "description": [
                    "Earn & redeem rewards",
                    "Exclusive offers for members",
                    "Free to Join — Join now!"
                ]
            }
        },
        "specs": {
            "screenSize": "55 inches",
            "resolution": "4K UHD (3840 x 2160)",
            "smartTv": true,
            "refreshRate": "120 Hz",
            "hdmiPorts": 4,
            "usbPorts": 3,
            "operatingSystem": "webOS",
            "wifi": "Yes",
            "ethernet": "Yes",
            "bluetooth": "Yes",
            "warranty": "2 Year Manufacturer Warranty"
        },
        "description": "An OLED TV with deep blacks and stunning picture quality, ideal for movie lovers and gamers.",
        "product": "led"
    },
    {
        "id": 3,
        "brand": "Sony",
        "model": "BRAVIA XR A80J",
        "rating": 4.6,
        "reviews": 900,
        "partNumber": "XR55A80J",
        "price": 1399.99,
        "image": "/images/led-images/xR-a80J/xR-a80J.avif",
        "images": ["/images/led-images/xR-a80J/01.avif", "/images/led-images/xR-a80J/02.avif", "/images/led-images/xR-a80J/03.avif"],
        "availability": {
            "status": "In Stock",
            "delivery": "FREE Standard Delivery: Get it by Tue. Jul 05",
            "deliveryOptions": "Delivery options for 60654"
        },
        "specialOffers": {
            "discount": "Save $100 on a soundbar with purchase",
            "extendedWarranty": "Add a 4-year extended warranty for $120",
            "rewards": {
                "earn": "$70",
                "description": [
                    "Earn & redeem rewards",
                    "Exclusive offers for members",
                    "Free to Join — Join now!"
                ]
            }
        },
        "specs": {
            "screenSize": "55 inches",
            "resolution": "4K UHD (3840 x 2160)",
            "smartTv": true,
            "refreshRate": "120 Hz",
            "hdmiPorts": 4,
            "usbPorts": 3,
            "operatingSystem": "Google TV",
            "wifi": "Yes",
            "ethernet": "Yes",
            "bluetooth": "Yes",
            "warranty": "1 Year Manufacturer Warranty"
        },
        "description": "A premium OLED TV with exceptional picture quality and advanced smart features, perfect for any living room.",
        "product": "led"
    },
];

