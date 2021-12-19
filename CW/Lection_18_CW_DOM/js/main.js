// import { items } from "./items.js";
const items = [
    {
        id: 1,
        category: 'mac',
        imgUrl: 'items/macbook-air.png',
        name: 'MacBook Air',
        display: 13.3, // дюймы
        color: ['Gold', 'Silver', 'Space Grey'],
        price: 999, // доллары
        chip: {
            name: 'M1',
            cores: 8,
        },
        ram: 8, // Гб
        storage: 256, // Гб
        touchId: true,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0'],
        camera: {
            front: '720p FaceTime HD camera',
            back: null,
        },
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '1.61', // cm
            width: '30.41', // cm
            depth: '21.24', // cm
            weight: '1.29', // Кг
        },
        os: 'macOS',
        InTheBox: ['MacBook Air', '30W USB-C Power Adapter', 'USB-C Charge Cable (2 m)'],
        orderInfo: {
        	inStock: 435, // кол-во едениц товара в наличии
        	reviews: 77, // процент положительных отзывов
        }
    },
    {
        id: 2,
        category: 'mac',
        imgUrl: 'items/macbook-air.png',
        name: 'MacBook Air',
        display: 13.3, // дюймы
        color: ['Gold', 'Silver', 'Space Grey'],
        price: 1249, // доллары
        chip: {
            name: 'M1',
            cores: 8,
        },
        ram: 16, // Гб
        storage: 512, // Гб
        touchId: true,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0'],
        camera: {
            front: '720p FaceTime HD camera',
            back: null,
        },
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '1.61', // cm
            width: '30.41', // cm
            depth: '21.24', // cm
            weight: '1.29', // Кг
        },
        os: 'macOS',
        InTheBox: ['MacBook Air', '30W USB-C Power Adapter', 'USB-C Charge Cable (2 m)'],
        orderInfo: {
        	inStock: 0, // кол-во едениц товара в наличии
        	reviews: 84, // процент положительных отзывов
        }
    },
    {
        id: 3 ,
        category: 'mac',
        imgUrl: 'items/macbook-pro13.png',
        name: 'MacBook Pro 13',
        display: 13.3, // дюймы
        color: [ 'Silver', 'Space Grey'],
        price: 1299, // доллары
        chip: {
            name: 'Intel Core i5',
            cores: 8,
        },
        ram: 8, // Гб
        storage: 512, // Гб
        touchId: true,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0'],
        camera: {
            front: '720p FaceTime HD camera',
            back: null,
        },
        audio: {
            microphone: 'Studio-quality three-mic array with high signal-to-noise ratio and directional‑beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '1.56', // cm
            width: '30.41', // cm
            depth: '21.24', // cm
            weight: '1.4', // Кг
        },
        os: 'macOS',
        InTheBox: ['MacBook pro 13', '61W USB-C Power Adapter', 'USB-C Charge Cable (2 m)'],
        orderInfo: {
        	inStock: 25, // кол-во едениц товара в наличии
        	reviews: 85, // процент положительных отзывов
        }
    },
    {
        id: 4 ,
        category: 'mac',
        imgUrl: 'items/macbook-pro13.png',
        name: 'MacBook Pro 13',
        display: 13.3, // дюймы
        color: [ 'Silver', 'Space Grey'],
        price: 1499, // доллары
        chip: {
            name: 'M1',
            cores: 8,
        },
        ram: 16, // Гб
        storage: 1024, // TB
        touchId: true,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0'],
        camera: {
            front: '720p FaceTime HD camera',
            back: null,
        },
        audio: {
            microphone: 'Studio-quality three-mic array with high signal-to-noise ratio and directional‑beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '1.56', // cm
            width: '30.41', // cm
            depth: '21.24', // cm
            weight: '1.4', // Кг
        },
        os: 'macOS',
        InTheBox: ['MacBook pro 13', '61W USB-C Power Adapter', 'USB-C Charge Cable (2 m)'],
        orderInfo: {
        	inStock: 256, // кол-во едениц товара в наличии
        	reviews: 80, // процент положительных отзывов
        }
    },
    {
        id: 5 ,
        category: 'mac',
        imgUrl: 'items/macbook-pro16.png',
        name: 'MacBook Pro 16',
        display: 16, // дюймы
        color: [ 'Silver', 'Space Grey'],
        price: 2399, // доллары
        chip: {
            name: ' Intel Core i7',
            cores: 6,
        },
        ram: 16, // Гб
        storage: 1024, // TB
        touchId: true,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0'],
        camera: {
            front: '720p FaceTime HD camera',
            back: null,
        },
        audio: {
            microphone: 'Studio‑quality three-mic array with high signal-to-noise ratio and directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '1.62', // cm
            width: '35.79', // cm
            depth: '24.59', // cm
            weight: '2', // Кг
        },
        os: 'macOS',
        InTheBox: ['MacBook pro 16', '96W USB-C Power Adapter', 'USB-C Charge Cable (2 m)'],
        orderInfo: {
        	inStock: 124, // кол-во едениц товара в наличии
        	reviews: 91, // процент положительных отзывов
        }
    },
    {
        id: 6 ,
        category: 'mac',
        imgUrl: 'items/macbook-pro16.png',
        name: 'MacBook Pro 16',
        display: 16, // дюймы
        color: [ 'Silver', 'Space Grey'],
        price: 2799, // доллары
        chip: {
            name: ' Intel Core i9',
            cores: 8,
        },
        ram: 32, // Гб
        storage: 2048, // TB
        touchId: true,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0'],
        camera: {
            front: '720p FaceTime HD camera',
            back: null,
        },
        audio: {
            microphone: 'Studio‑quality three-mic array with high signal-to-noise ratio and directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '1.62', // cm
            width: '35.79', // cm
            depth: '24.59', // cm
            weight: '2', // Кг
        },
        os: 'macOS',
        InTheBox: ['MacBook pro 16', '96W USB-C Power Adapter', 'USB-C Charge Cable (2 m)'],
        orderInfo: {
        	inStock: 69, // кол-во едениц товара в наличии
        	reviews: 90, // процент положительных отзывов
        }
    },
    {
        id: 7 ,
        category: 'mac',
        imgUrl: 'items/imac.png',
        name: 'IMac',
        display: 21.5, // дюймы
        color: [  'Space Grey'],
        price: 1099, // доллары
        chip: {
            name: 'Intel Core i5,',
            cores: '6',//dual‑core
        },
        ram: 8, // Гб
        storage: 256,
        touchId: false,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 4.2 '],
        camera: {
            front: '720p FaceTime HD camera',
            back: null,
        },
        audio: {
            microphone: 'Microphone',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '45', // cm
            width: '52.8', // cm
            depth: '17.5', // cm
            weight: '5.44', // Кг
        },
        os: 'macOS',
        InTheBox: ['iMac ', 'Magic Keyboard', 'Magic Mouse 2', 'Power cord', 'Lightning to USB Cable', 'Polishing cloth'],
        orderInfo: {
        	inStock: 742, // кол-во едениц товара в наличии
        	reviews: 75, // процент положительных отзывов
        }
    },
    {
        id: 8 ,
        category: 'mac',
        imgUrl: 'items/imac.png',
        name: 'IMac',
        display: 27, // дюймы
        color: [  'Space Grey'],
        price: 1799, // доллары
        chip: {
            name: 'Intel Core i5,',
            cores: '6',//dual‑core
        },
        ram: 8, // Гб
        storage: 256,
        touchId: false,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0 '],
        camera: {
            front: '720p FaceTime HD camera',
            back: null,
        },
        audio: {
            microphone: 'Microphone',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '51.6', // cm
            width: '65', // cm
            depth: '20.3', // cm
            weight: '8.92', // Кг
        },
        os: 'macOS',
        InTheBox: ['iMac with Retina 5K display ', 'Magic Keyboard', 'Magic Mouse 2', 'Power cord', 'Lightning to USB Cable', 'Polishing cloth'],
        orderInfo: {
        	inStock: 0, // кол-во едениц товара в наличии
        	reviews: 99, // процент положительных отзывов
        }
    },
    {
        id: 9 ,
        category: 'mac',
        imgUrl: 'items/mac_pro.png',
        name: 'Mac Pro',
        display: null, // дюймы
        color: [  'Space Grey'],
        price: 2499, // доллары
        chip: {
            name: 'Intel Xeon W',
            cores: '16',//dual‑core
        },
        ram: 64, // Гб
        storage: 1024,//
        touchId: false,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0 '],
        camera: {
            front: null,
            back: null,
        },
        audio: {
            microphone: 'Microphone',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '50', // cm
            width: '30', // cm
            depth: '60', // cm
            weight: '18', // Кг
        },
        os: 'macOS',
        InTheBox: ['Mac Pro', 'Magic Keyboard with Numeric Keypad', 'Magic Mouse 2', 'USB-C to Lightning Cable (1 m)', 'Power cord (2 m)'],
        orderInfo: {
        	inStock: 587, // кол-во едениц товара в наличии
        	reviews: 56, // процент положительных отзывов
        }
    },
    {
        id: 10 ,
        category: 'ipad',
        imgUrl: 'items/ipad-pro.jpeg',
        name: 'IPad Pro ',
        display: 11, // дюймы
        color: [ 'Silver', 'Space Grey'],
        price: 750, // доллары
        chip: {
            name: 'A12Z Bionic',
            cores: null,
        },
        ram: null, // Гб
        storage: 128, // TB
        touchId: false,
        faceId: true,
        wireless: ['Wi-Fi', 'Bluetooth 5.0'],
        camera: {
            front: '720p FaceTime HD camera',
            back: 'Ultra Wide: 10MP',
        },
        audio: {
            microphone: 'Studio‑quality three-mic array with high signal-to-noise ratio and directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '24.7', // cm
            width: '17.8', // cm
            depth: '0.6', // cm
            weight: '0.470', // Кг
        },
        os: 'macOS',
        InTheBox: ['iPad Pro', 'USB-C Charge Cable (1 meter)', '18W USB-C Power Adapter'],
        orderInfo: {
        	inStock: 32, // кол-во едениц товара в наличии
        	reviews: 99, // процент положительных отзывов
        }
    },
    {
        id: 34 ,
        category: 'ipad',
        imgUrl: 'items/ipad-air.png',
        name: 'IPad Air',
        display: 10.9, // дюймы
        color: [ 'Silver', 'Space Grey','Rose Gold','Green','Sky Blue'],
        price: 549, // доллары
        chip: {
            name: 'A14 Bionic ',
            cores: null,
        },
        ram: null, // Гб
        storage: 64, // TB
        touchId: true,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0'],
        camera: {
            front: '720p FaceTime HD camera',
            back: 'Ultra Wide: 10MP',
        },
        audio: {
            microphone: 'Dual microphones for calls, video recording, and audio recording',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '24.7', // cm
            width: '17.8', // cm
            depth: '0.6', // cm
            weight: '0.458', // Кг
        },
        os: 'macOS',
        InTheBox: ['iPad Air', 'USB-C Charge Cable (1 meter)', '20W USB-C Power Adapter'],
        orderInfo: {
        	inStock: 97, // кол-во едениц товара в наличии
        	reviews: 97, // процент положительных отзывов
        }
    },
    {
        id: 11 ,
        category: 'ipad',
        imgUrl: 'items/ipad.png',
        name: 'IPad',
        display: 10.2, // дюймы
        color: [ 'Silver', 'Space Grey','Gold'],
        price: 309, // доллары
        chip: {
            name: 'A12 Bionic  ',
            cores: null,
        },
        ram: null, // Гб
        storage: 32, // TB
        touchId: true,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0'],
        camera: {
            front: '720p FaceTime HD camera',
            back: 'Ultra Wide: 10MP',
        },
        audio: {
            microphone: 'Dual microphones for calls, video recording, and audio recording',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '25.7', // cm
            width: '17.4', // cm
            depth: '0.6', // cm
            weight: '0.490', // Кг
        },
        os: 'macOS',
        InTheBox: ['iPad', 'USB-C Power Adapter', 'Lightning to USB-C Cable'],
        orderInfo: {
        	inStock: 90, // кол-во едениц товара в наличии
        	reviews: 0, // процент положительных отзывов
        }
    },
    {
        id: 12 ,
        category: 'ipad',
        imgUrl: 'items/ipad-mini.png',
        name: 'IPad mini',
        display: 7.9, // дюймы
        color: [ 'Silver', 'Space Grey','Gold'],
        price: 309, // доллары
        chip: {
            name: 'A12 Bionic  ',
            cores: null,
        },
        ram: null, // Гб
        storage: 64, // TB
        touchId: true,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0'],
        camera: {
            front: '720p FaceTime HD camera',
            back: 'Ultra Wide: 10MP',
        },
        audio: {
            microphone: 'Dual microphones for calls, video recording, and audio recording',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '20.3', // cm
            width: '13.4', // cm
            depth: '0.6', // cm
            weight: '0.300', // Кг
        },
        os: 'macOS',
        InTheBox: ['iPad mini', 'USB-C Power Adapter', 'Lightning to USB-C Cable'],
        orderInfo: {
        	inStock: 77, // кол-во едениц товара в наличии
        	reviews: 85, // процент положительных отзывов
        }
    },
    {
        id: 13 ,
        category: 'Watch',
        imgUrl: 'items/apple-watch-series-6.png',
        name: 'Apple Watch Series 6',
        display: 1.73228, // дюймы
        color: [ 'Silver', 'Space Grey','Gold','Blue','Graphite'],
        price: 399, // доллары
        chip: {
            name: 'S6 SiP   ',
            cores: null,
        },
        ram: null, // Гб
        storage: 32, // TB
        touchId: false,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0'],
        camera: {
            front: null,
            back: null,
        },
        audio: {
            microphone: 'Dual microphones for calls, video recording, and audio recording',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '4,4', // cm
            width: '3.8', // cm
            depth: '0.6', // cm
            weight: '1.07', // Кг
        },
        os: 'macOS',
        InTheBox: ['Case', 'Solo Loop', '1m Magnetic Charging Cable'],
        orderInfo: {
        	inStock: 90, // кол-во едениц товара в наличии
        	reviews: 458, // процент положительных отзывов
        }
    },
    {
        id: 14 ,
        category: 'Watch',
        imgUrl: 'items/apple-watch-se.jpg',
        name: 'Apple Watch Series SE',
        display: 1.73228, // дюймы
        color: [ 'Silver', 'Space Grey','Gold','Blue','Graphite'],
        price: 309, // доллары
        chip: {
            name: 'S5 SiP   ',
            cores: null,
        },
        ram: null, // Гб
        storage: 22.1654, // TB
        touchId: false,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0'],
        camera: {
            front: null,
            back: null,
        },
        audio: {
            microphone: 'Dual microphones for calls, video recording, and audio recording',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '4,4', // cm
            width: '3.8', // cm
            depth: '0.6', // cm
            weight: '1.07', // Кг
        },
        os: 'macOS',
        InTheBox: ['Case', 'Band (can be configured for either S/M or M/L length)', '1m Magnetic Charging Cable'],
        orderInfo: {
        	inStock: 79, // кол-во едениц товара в наличии
        	reviews: 69, // процент положительных отзывов
        }
    },
    {
        id: 15 ,
        category: 'Watch',
        imgUrl: 'items/apple-watch3.jpg',
        name: 'Apple Watch Series 3',
        display: 22.1654 ,// дюймы
        color: [ 'Silver', 'Space Grey','Gold','Blue','Graphite'],
        price: 309, // доллары
        chip: {
            name: 'S5 SiP   ',
            cores: null,
        },
        ram: null, // Гб
        storage: 8, // TB
        touchId: false,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0'],
        camera: {
            front: null,
            back: null,
        },
        audio: {
            microphone: 'Dual microphones for calls, video recording, and audio recording',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '4,2', // cm
            width: '3.3', // cm
            depth: '0.6', // cm
            weight: '1.07', // Кг
        },
        os: 'macOS',
        InTheBox: ['Case', 'Band (can be configured for either S/M or M/L length)', '1m Magnetic Charging Cable'],
        orderInfo: {
        	inStock: 47, // кол-во едениц товара в наличии
        	reviews: 93, // процент положительных отзывов
        }
    },
    {
        id: 16,
        category: 'iphone',
        imgUrl: 'items/iphone_12.jpg',
        name: 'IPhone 12',
        display: 6.1, // дюймы
        color: ['Black', 'White', 'Green', 'Blue', 'Red'],
        price: 799, // доллары
        chip: {
            name: 'A14',
            cores: null,
        },
        ram: null, // Гб
        storage: 128, // Гб
        touchId: false,
        faceId: true,
        wireless: ['Wi-Fi', 'Bluetooth 5.0', '5G GSM/EDGE'],
        camera: {
            front: '720p FaceTime HD camera',
            back: 'Dual 12MP camera system',
        },
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '14.6', // cm
            width: '7.1', // cm
            depth: '0.7', // cm
            weight: '0.164', // Кг
        },
        os: 'IOS',
        InTheBox: ['iPhone with iOS 14', 'USB-C to Lightning Cable', 'Documentation'],
        orderInfo: {
        	inStock: 73, // кол-во едениц товара в наличии
        	reviews: 12, // процент положительных отзывов
        }
    },
    {
        id: 17,
        category: 'iphone',
        imgUrl: 'items/iphone_12.jpg',
        name: 'IPhone 12',
        display: 6.1, // дюймы
        color: ['Black', 'White', 'Green', 'Blue', 'Red'],
        price: 899, // доллары
        chip: {
            name: 'A14',
            cores: null,
        },
        ram: null, // Гб
        storage: 256, // Гб
        touchId: false,
        faceId: true,
        wireless: ['Wi-Fi', 'Bluetooth 5.0', '5G GSM/EDGE'],
        camera: {
            front: '720p FaceTime HD camera',
            back: 'Dual 12MP camera system',
        },
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '14.6', // cm
            width: '7.1', // cm
            depth: '0.7', // cm
            weight: '0.164', // Кг
        },
        os: 'IOS',
        InTheBox: ['iPhone with iOS 14', 'USB-C to Lightning Cable', 'Documentation'],
        orderInfo: {
        	inStock: 0, // кол-во едениц товара в наличии
        	reviews: 73, // процент положительных отзывов
        }
    },
    {
        id: 18,
        category: 'iphone',
        imgUrl: 'items/iphone_12.jpg',
        name: 'IPhone 12 Mini',
        display: 5.4, // дюймы
        color: ['Black', 'White', 'Green', 'Blue', 'Red'],
        price: 669, // доллары
        chip: {
            name: 'A14',
            cores: null,
        },
        ram: null, // Гб
        storage: 128, // Гб
        touchId: false,
        faceId: true,
        wireless: ['Wi-Fi', 'Bluetooth 5.0', '5G GSM/EDGE'],
        camera: {
            front: '720p FaceTime HD camera',
            back: 'Dual 12MP camera system',
        },
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '13.1', // cm
            width: '6.41', // cm
            depth: '0.7', // cm
            weight: '0.135', // Кг
        },
        os: 'IOS',
        InTheBox: ['iPhone with iOS 14', 'USB-C to Lightning Cable', 'Documentation'],
        orderInfo: {
        	inStock: 43, // кол-во едениц товара в наличии
        	reviews: 100, // процент положительных отзывов
        }
    },
    {
        id: 19,
        category: 'iphone',
        imgUrl: 'items/iphone-12-pro.jpeg',
        name: 'IPhone 12 Pro',
        display: 6.1, // дюймы
        color: ['Silver', 'Graphite', 'Gold', 'Pacific Blue'],
        price: 999, // доллары
        chip: {
            name: 'A14',
            cores: null,
        },
        ram: null, // Гб
        storage: 256, // Гб
        touchId: false,
        faceId: true,
        wireless: ['Wi-Fi', 'Bluetooth 5.0', '5G GSM/EDGE'],
        camera: {
            front: '720p FaceTime HD camera',
            back: 'Pro 12MP camera system',
        },
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '14.6', // cm
            width: '7.1', // cm
            depth: '0.7', // cm
            weight: '0.164', // Кг
        },
        os: 'IOS',
        InTheBox: ['iPhone with iOS 14', 'USB-C to Lightning Cable', 'Documentation'],
        orderInfo: {
        	inStock: 84, // кол-во едениц товара в наличии
        	reviews: 99, // процент положительных отзывов
        }
    },
    {
        id: 20,
        category: 'iphone',
        imgUrl: 'items/iphone-12-pro.jpeg',
        name: 'IPhone 12 Pro',
        display: 6.1, // дюймы
        color: ['Silver', 'Graphite', 'Gold', 'Pacific Blue'],
        price: 1099, // доллары
        chip: {
            name: 'A14',
            cores: null,
        },
        ram: null, // Гб
        storage: 512, // Гб
        touchId: false,
        faceId: true,
        wireless: ['Wi-Fi', 'Bluetooth 5.0', '5G GSM/EDGE'],
        camera: {
            front: '720p FaceTime HD camera',
            back: 'Pro 12MP camera system',
        },
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '14.6', // cm
            width: '7.1', // cm
            depth: '0.7', // cm
            weight: '0.164', // Кг
        },
        os: 'IOS',
        InTheBox: ['iPhone with iOS 14', 'USB-C to Lightning Cable', 'Documentation'],
        orderInfo: {
        	inStock: 2, // кол-во едениц товара в наличии
        	reviews: 99, // процент положительных отзывов
        }
    },
    {
        id: 21,
        category: 'iphone',
        imgUrl: 'items/iphone-12-pro.jpeg',
        name: 'IPhone 12 Pro Max',
        display: 6.7, // дюймы
        color: ['Silver', 'Graphite', 'Gold', 'Pacific Blue'],
        price: 1099, // доллары
        chip: {
            name: 'A14',
            cores: null,
        },
        ram: null, // Гб
        storage: 256, // Гб
        touchId: false,
        faceId: true,
        wireless: ['Wi-Fi', 'Bluetooth 5.0', '5G GSM/EDGE'],
        camera: {
            front: '720p FaceTime HD camera',
            back: 'Pro 12MP camera system',
        },
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '16.0', // cm
            width: '7.8', // cm
            depth: '0.7', // cm
            weight: '0.228', // Кг
        },
        os: 'IOS',
        InTheBox: ['iPhone with iOS 14', 'USB-C to Lightning Cable', 'Documentation'],
        orderInfo: {
        	inStock: 5, // кол-во едениц товара в наличии
        	reviews: 100, // процент положительных отзывов
        }
    },
    {
        id: 22,
        category: 'iphone',
        imgUrl: 'items/iphone-se.jpeg',
        name: 'IPhone SE',
        display: 4.7, // дюймы
        color: ['Black', 'White', 'Red'],
        price: 1099, // доллары
        chip: {
            name: 'A13',
            cores: null,
        },
        ram: null, // Гб
        storage: 128, // Гб
        touchId: false,
        faceId: true,
        wireless: ['Wi-Fi', 'Bluetooth 5.0', '5G GSM/EDGE'],
        camera: {
            front: '720p FaceTime HD camera',
            back: '12MP Wide camera',
        },
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '13.8', // cm
            width: '7.7', // cm
            depth: '0.7', // cm
            weight: '0.148', // Кг
        },
        os: 'IOS',
        InTheBox: ['iPhone with iOS 14', 'USB-C to Lightning Cable', 'Documentation'],
        orderInfo: {
        	inStock: 81, // кол-во едениц товара в наличии
        	reviews: 73, // процент положительных отзывов
        }
    },
    {
        id: 23,
        category: 'iphone',
        imgUrl: 'items/iphone11.jpeg',
        name: 'IPhone 11',
        display: 6.1, // дюймы
        color: ['Black', 'Green', 'Yellow', 'Purple', 'White', 'Red'],
        price: 899, // доллары
        chip: {
            name: 'A13',
            cores: null,
        },
        ram: null, // Гб
        storage: 256, // Гб
        touchId: false,
        faceId: true,
        wireless: ['Wi-Fi', 'Bluetooth 5.0', '5G GSM/EDGE'],
        camera: {
            front: '720p FaceTime HD camera',
            back: 'Dual 12MP Ultra Wide and Wide cameras',
        },
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '15.0', // cm
            width: '7.5', // cm
            depth: '0.8', // cm
            weight: '0.194', // Кг
        },
        os: 'IOS',
        InTheBox: ['iPhone with iOS 14', 'USB-C to Lightning Cable', 'Documentation'],
        orderInfo: {
        	inStock: 98, // кол-во едениц товара в наличии
        	reviews: 100, // процент положительных отзывов
        }
    },
    {
        id: 24,
        category: 'iphone',
        imgUrl: 'items/iphone11.jpeg',
        name: 'IPhone 11',
        display: 6.1, // дюймы
        color: ['Black', 'Green', 'Yellow', 'Purple', 'White', 'Red'],
        price: 999, // доллары
        chip: {
            name: 'A13',
            cores: null,
        },
        ram: null, // Гб
        storage: 512, // Гб
        touchId: false,
        faceId: true,
        wireless: ['Wi-Fi', 'Bluetooth 5.0', '5G GSM/EDGE'],
        camera: {
            front: '720p FaceTime HD camera',
            back: 'Triple 12MP Ultra Wide and Wide cameras',
        },
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '15.0', // cm
            width: '7.5', // cm
            depth: '0.8', // cm
            weight: '0.194', // Кг
        },
        os: 'IOS',
        InTheBox: ['iPhone with iOS 14', 'USB-C to Lightning Cable', 'Documentation'],
        orderInfo: {
        	inStock: 115, // кол-во едениц товара в наличии
        	reviews: 100, // процент положительных отзывов
        }
    },
    {
        id: 25,
        category: 'iphone',
        imgUrl: 'items/iphone11.jpeg',
        name: 'IPhone 11',
        display: 6.1, // дюймы
        color: ['Black', 'Green', 'Yellow', 'Purple', 'White', 'Red'],
        price: 899, // доллары
        chip: {
            name: 'A13',
            cores: null,
        },
        ram: null, // Гб
        storage: 256, // Гб
        touchId: false,
        faceId: true,
        wireless: ['Wi-Fi', 'Bluetooth 5.0', '5G GSM/EDGE'],
        camera: {
            front: '720p FaceTime HD camera',
            back: 'Triple 12MP Ultra Wide and Wide cameras',
        },
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '15.0', // cm
            width: '7.5', // cm
            depth: '0.8', // cm
            weight: '0.194', // Кг
        },
        os: 'IOS',
        InTheBox: ['iPhone with iOS 14', 'USB-C to Lightning Cable', 'Documentation'],
        orderInfo: {
        	inStock: 0, // кол-во едениц товара в наличии
        	reviews: 100, // процент положительных отзывов
        }
    },
    {
        id: 26,
        category: 'iphone',
        imgUrl: 'items/iphone-xr.jpg',
        name: 'IPhone XR',
        display: 6.1, // дюймы
        color: ['Black', 'Coral', 'Yellow', 'Blue', 'White', 'Red'],
        price: 699, // доллары
        chip: {
            name: 'A12',
            cores: null,
        },
        ram: null, // Гб
        storage: 64, // Гб
        touchId: false,
        faceId: true,
        wireless: ['Wi-Fi', 'Bluetooth 5.0', 'FDD‑LTE GSM/EDGE'],
        camera: {
            front: '720p FaceTime HD camera',
            back: '12MP Wide camera',
        },
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '15.0', // cm
            width: '7.5', // cm
            depth: '0.8', // cm
            weight: '0.194', // Кг
        },
        os: 'IOS',
        InTheBox: ['iPhone with iOS 14', 'USB-C to Lightning Cable', 'Documentation'],
        orderInfo: {
        	inStock: 23, // кол-во едениц товара в наличии
        	reviews: 86, // процент положительных отзывов
        }
    },
    {
        id: 27,
        category: 'iphone',
        imgUrl: 'items/iphone-xs.jpg',
        name: 'IPhone XS',
        display: 5.8, // дюймы
        color: ['White', 'Rose Gold', 'Space Grey'],
        price: 699, // доллары
        chip: {
            name: 'A12',
            cores: null,
        },
        ram: null, // Гб
        storage: 128, // Гб
        touchId: false,
        faceId: true,
        wireless: ['Wi-Fi', 'Bluetooth 5.0', 'FDD‑LTE GSM/EDGE'],
        camera: {
            front: '720p FaceTime HD camera',
            back: '12MP Wide camera',
        },
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '14.3', // cm
            width: '7.0', // cm
            depth: '0.7', // cm
            weight: '0.177', // Кг
        },
        os: 'IOS',
        InTheBox: ['iPhone with iOS 12', 'USB-A to Lightning Cable', 'Documentation'],
        orderInfo: {
        	inStock: 34, // кол-во едениц товара в наличии
        	reviews: 94, // процент положительных отзывов
        }
    },
    {
        id: 28,
        category: 'iphone',
        imgUrl: 'items/iphone-xs.jpg',
        name: 'IPhone XS',
        display: 5.8, // дюймы
        color: ['White', 'Rose Gold', 'Space Grey'],
        price: 799, // доллары
        chip: {
            name: 'A12',
            cores: null,
        },
        ram: null, // Гб
        storage: 256, // Гб
        touchId: false,
        faceId: true,
        wireless: ['Wi-Fi', 'Bluetooth 5.0', 'FDD‑LTE GSM/EDGE'],
        camera: {
            front: '720p FaceTime HD camera',
            back: '12MP Wide camera',
        },
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '14.3', // cm
            width: '7.0', // cm
            depth: '0.7', // cm
            weight: '0.177', // Кг
        },
        os: 'IOS',
        InTheBox: ['iPhone with iOS 12', 'USB-A to Lightning Cable', 'Documentation'],
        orderInfo: {
        	inStock: 0, // кол-во едениц товара в наличии
        	reviews: 94, // процент положительных отзывов
        }
    },
    {
        id: 29,
        category: 'tv',
        imgUrl: 'items/apple-tv.jpeg',
        name: 'Apple TV 4K',
        display: null, // дюймы
        color: ['Black'],
        price: 179, // доллары
        chip: {
            name: 'A10X',
            cores: null,
        },
        ram: null, // Гб
        storage: 32, // Гб
        touchId: false,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0'],
        camera: null,
        audio: null,
        size: {
            height: '3.5', // cm
            width: '9.8', // cm
            depth: '3.5', // cm
            weight: '0.425', // Кг
        },
        os: 'tvOS',
        InTheBox: ['Apple TV 4K', 'Siri Remote', 'Power cord', 'Lightning to USB cable', 'Documentation'],
        orderInfo: {
        	inStock: 2, // кол-во едениц товара в наличии
        	reviews: 99, // процент положительных отзывов
        }
    },
    {
        id: 30,
        category: 'tv',
        imgUrl: 'items/apple-tv.jpeg',
        name: 'Apple TV 4K',
        display: null, // дюймы
        color: ['Black'],
        price: 199, // доллары
        chip: {
            name: 'A10X',
            cores: null,
        },
        ram: null, // Гб
        storage: 64, // Гб
        touchId: false,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0'],
        camera: null,
        audio: null,
        size: {
            height: '3.5', // cm
            width: '9.8', // cm
            depth: '3.5', // cm
            weight: '0.425', // Кг
        },
        os: 'tvOS',
        InTheBox: ['Apple TV 4K', 'Siri Remote', 'Power cord', 'Lightning to USB cable', 'Documentation'],
        orderInfo: {
        	inStock: 1, // кол-во едениц товара в наличии
        	reviews: 100, // процент положительных отзывов
        }
    },
    {
        id: 31,
        category: 'airpods',
        imgUrl: 'items/airpods.jpg',
        name: 'AirPods',
        display: null, // дюймы
        color: ['White'],
        price: 199, // доллары
        chip: {
            name: 'H!',
            cores: null,
        },
        ram: null, // Гб
        storage: null, // Гб
        touchId: false,
        faceId: false,
        wireless: ['Bluetooth 5.0'],
        camera: null,
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '5.3', // cm
            width: '4.4', // cm
            depth: '0.2', // cm
            weight: '0.04', // Кг
        },
        os: null,
        InTheBox: ['AirPods', 'Wireless Charging Case', 'Lightning to USB-A Cable', 'Documentation'],
        orderInfo: {
        	inStock: 23, // кол-во едениц товара в наличии
        	reviews: 100, // процент положительных отзывов
        }
    },
    {
        id: 32,
        category: 'airpods',
        imgUrl: 'items/airpods_pro.jpg',
        name: 'AirPods Pro',
        display: null, // дюймы
        color: ['White'],
        price: 299, // доллары
        chip: {
            name: 'H!',
            cores: null,
        },
        ram: null, // Гб
        storage: null, // Гб
        touchId: false,
        faceId: false,
        wireless: ['Bluetooth 5.0'],
        camera: null,
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '4.5', // cm
            width: '6.0', // cm
            depth: '0.21', // cm
            weight: '0.04', // Кг
        },
        os: null,
        InTheBox: ['AirPods Pro', 'Wireless Charging Case', 'Lightning to USB-C Cable', 'Documentation', 'Silicone ear tips (three sizes)'],
        orderInfo: {
        	inStock: 29, // кол-во едениц товара в наличии
        	reviews: 94, // процент положительных отзывов
        }
    },
    {
        id: 33,
        category: 'airpods',
        imgUrl: 'items/airpods-max.jpg',
        name: 'AirPods Max',
        display: null, // дюймы
        color: ['White'],
        price: 599, // доллары
        chip: {
            name: 'H!',
            cores: null,
        },
        ram: null, // Гб
        storage: null, // Гб
        touchId: false,
        faceId: false,
        wireless: ['Bluetooth 5.0'],
        camera: null,
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '18.7', // cm
            width: '16.8', // cm
            depth: '8.3', // cm
            weight: '0.38', // Кг
        },
        os: null,
        InTheBox: ['AirPods MAx', 'Smart Case', 'Lightning to USB-C Cable', 'Documentation'],
        orderInfo: {
        	inStock: 0, // кол-во едениц товара в наличии
        	reviews: 5, // процент положительных отзывов
        }
    },
];



let productsInBasket = [];
let spanbasket = document.getElementById("spanbasket");
spanbasket.title = "";


function addProduct ({name, imgUrl, id, faceId, price, storage}) {
    let columnsRadio = document.getElementsByName ("columsNumber");
    let b = document.createElement("button");
    b.innerText = "Buy";
    b.classList = "btn btn-primary";
    let a = document.createElement("div");

    a.classList = "card";
    let columns;
    for (let i = 0; i < columnsRadio.length; i++) {
        if (columnsRadio[i].checked === true) {
            columns = columnsRadio[i].value;
        }

        switch (columns) {
            case "3":
                a.classList.add("col-4");
                break;
            case "6":
                a.classList.add("col-2");
                break;
            default:
                break;
        }
    }   

    a.innerHTML = `
    <h4>${name}</h4>
    <image src="img/${imgUrl}" class="card-img-top" alt="...">
    <input type="checkbox" ${faceId ? "checked" : ""}
    <span>${price}</span>
    `
    // a.appendChild(b);
    a.append(b);

    b.addEventListener("click", (e) => {
        // storage > 0 ? alert("You bought product with price " + price) : alert("No products");
        if (storage > 0) {
            let spanbasketValue = spanbasket.textContent;
            spanbasket.textContent = ++spanbasketValue;
            items.forEach(item => {
                if(id === item.id){
                    productsInBasket.push(item);
                }
            })
            // spanbasket.title = productsInBasket.forEach(item => {spanbasket.title += item.name});
            spanbasket.title += `${name}\n`;
            console.log(productsInBasket);

        }
        else {
            alert ("No product in stock")
        };
    });
    // b.addEventListener("click", buyProduct);
    document.getElementById("container").append(a);
}

// let productsInBasket = [];
// function buyProduct(e) {
//     let spanbasket = document.getElementById("spanbasket");
//     let spanbasketValue = spanbasket.textContent;
//     spanbasket.textContent = ++spanbasketValue;
//     productsInBasket.push();

// }



items.map((item) => addProduct(item));
// addProduct(items[0]);

////////////////////////////////// поиск по имени //////////////////////////////////////
let searchPanel = document.getElementById ("searchPanel");
let searchLabel = document.createElement("label");
searchLabel.innerText = "Search:"
searchPanel.appendChild(searchLabel);

let searchBox = document.createElement("input");
searchBox.type = "text";
searchPanel.appendChild(searchBox);

let searchBtn = document.createElement("button");
searchBtn.textContent = "Search";
searchPanel.appendChild(searchBtn);

searchBtn.addEventListener("click", findByName);

function findByName () {
    let findByNameResult = [];
    let patternSearch = searchBox.value.toLowerCase();

    findByNameResult = items.filter (item => item.name.toLowerCase().includes(patternSearch));

    if(findByNameResult.length > 0) {
        container.innerHTML = "";
        findByNameResult.map((item) => addProduct(item));
    }
    else{
        alert("Nothing found!");
    }
}


////////////////////////////////// поиск по цене //////////////////////////////////////
function getMinMaxPrice (items) {
    // let minPrice = items[0].price;
    let minPrice = Infinity;
    let maxPrice = 0;

    for (let i = 0; i < items.length; i++) {
        if(items[i].price < minPrice) {
            minPrice = items[i].price;
        }
        if(items[i].price > maxPrice) {
            maxPrice = items[i].price;
        }
    }
    return [minPrice, maxPrice];

    // items.map(item => {
    //     if (item.price < minPrice) {minPrice = item.price};
    //     if (item.price > maxPrice) {maxPrice = item.price};
    // })

    // items.filter (item => (item.price < 1500) && (item.price > 1000));
}

let [minPrice, maxPrice] = getMinMaxPrice(items);

let firstPanel = document.querySelector (".firstPanel");

firstPanel.innerHTML = `
    <span>$ from</span>
    <input id = "inputMin" type="number" value=${minPrice}></input>
    <span>to</span>
    <input id = "inputMax" type="number" value=${maxPrice}></input>
    `
let findPriceBtn = document.createElement("button");
findPriceBtn.textContent = "Find";
firstPanel.appendChild(findPriceBtn);

findPriceBtn.addEventListener("click", () => {
    let minPrice = +document.getElementById("inputMin").value;
    let maxPrice = +document.getElementById("inputMax").value;
    if(minPrice <= maxPrice){
        container.innerHTML = "";
        let filteredItems = items.filter (item => ((item.price <= maxPrice) && (item.price >= minPrice)));
        filteredItems.map((item) => addProduct(item));
    }
    else {
        alert("minPrice > maxPrice!");
    }
});


/////////////// второй вариант панели поиска по цене///////////////////
// let textFrom = document.createElement("span");
// textFrom.innerHTML = "from";
// firstPanel.appendChild(textFrom);

// let minPriceBox = document.createElement("input");
// minPriceBox.type = "number";
// minPriceBox.name = "minPrice";
// minPriceBox.placeholder = minPrice;
// firstPanel.appendChild(minPriceBox);

// let textTo = document.createElement("span");
// textTo.innerHTML = "to";
// firstPanel.appendChild(textTo);

// let maxPriceBox = document.createElement("input");
// maxPriceBox.type = "number";
// maxPriceBox.name = "maxPrice";
// maxPriceBox.placeholder = maxPrice;
// firstPanel.appendChild(maxPriceBox);

// let fromToFindButton = document.createElement("button");
// fromToFindButton.textContent = "Find";
// firstPanel.appendChild(fromToFindButton);
///////

////////////////////////////////// 3 или 6 //////////////////////////////////////
document.body.addEventListener ("change", (e) => {
    let card = document.getElementsByClassName("card");
    let target = e.target;
    switch (target.id) {
        case "radioThree":
            for (let i = 0; i < card.length; i++){
                card[i].classList.add("col-4");
                card[i].classList.remove("col-2");
            }
            break;
        case "radioSix":
            for (let i = 0; i < card.length; i++){
                card[i].classList.add("col-2");
                card[i].classList.remove("col-4");
            }
            break;
        default:
            break;
    }
})

// let radioThree = document.createElement("input");
// radioThree.type = "radio";
// radioThree.name="threeOrSix"
// radioThree.value = "3";
// radioThree.checked = true;
// secondPanel.appendChild(radioThree);

// let labelRadioThree = document.createElement("label");
// labelRadioThree.innerText = "3";
// labelRadioThree.setAttribute("for", "radioThree")
// secondPanel.appendChild(labelRadioThree);

// let radioSix = document.createElement("input");
// radioSix.type = "radio";
// radioThree.name="threeOrSix"
// radioSix.value = "6";
// secondPanel.appendChild(radioSix);













///////////////////////
// function aaa () {
//     let a = (c = 1)
// }
// aaa(); // c = 1;







