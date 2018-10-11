import React, { Component } from 'react';
import Header from './components/header';
import Itembody from './components/itemBody';
class App extends Component {
    constructor() {
        super();
        this.availableLists = []; // global variable to store filtered products
        this.updateProductList = this.updateProductList.bind(this);
        this.filterWithSearch = this.filterWithSearch.bind(this);
        this.updateSearchText = this.updateSearchText.bind(this);
        this.state = {
            products: [
                {
                    "summary": {
                        "model": "Samsung Galaxy A7",
                        "price": "23990",
                        "brand": "Samsung",
                        "processor": "Samsung Exynos 7 Octa 7885",
                        "display": "6.0 inches",
                        "storage": "64GB",
                        "camera": "Triple (24MP + 8MP + 5MP)",
                        "battery": "3300 mAh",
                        "ram": "4GB"
                    },
                    "display": {
                        "display_type": "Super AMOLED",
                        "resolution": "1080x2220 pixels",
                        "aspect_ratio": "18.5:9",
                        "screen_size": "6.0 inches",
                        "pixel_density": "411 pixels per inch (ppi)",
                        "touchscreen_type": "Capacitive",
                        "color_reproduction": "16M Colors",
                        "protection": "Corning Gorilla Glass",
                        "screen_to_body_percentage": "74.4%"
                    },
                    "storage": {
                        "ram": "4GB",
                        "internal": "64GB",
                        "expandable": "microSD, Upto 512GB (Dedicated Slot)"
                    },
                    "general": {
                        "dimensions": "6.29 x 3.02 x 0.30 inches (159.8 x 76.8 x 7.5 mm)",
                        "water_resistant": "No",
                        "weight": "168 grams (5.93 oz)",
                        "colors": "Black, Blue, Gold, Pink"
                    },
                    "software": {
                        "operating_system": "Android v8.0 (Oreo)"
                    },
                    "camera": {
                        "rear": "Triple (24MP + 8MP + 5MP)",
                        "selfie": "24MP",
                        "rear_camera_features": "LED flash, Panorama, HDR",
                        "selfie_camera_features": "HDR",
                        "physical_aperture": "Rear (f/1.7) + (f/2.4) + (f/2.2), Front (f/2.0)",
                        "video": "2160p@30fps, 1080p@30fps"
                    },
                    "battery": {
                        "removable_battery": "No",
                        "type": "Li-Ion",
                        "wireless_charging": "No",
                        "capacity": "3300 mAh",
                        "fast_charging": "Yes"
                    },
                    "connectivity": {
                        "gps": "Yes, with A-GPS, GLONASS, BDS",
                        "bluetooth": "v5.0 with A2DP, LE",
                        "wi_fi": "Yes, with dual-band, WiFi Direct, hotspot",
                        "network": "4G VoLTE, 4G",
                        "usb": "microUSB 2.0",
                        "voice_over_lte": "Yes(VoLTE)",
                        "sim_configuration": "Dual, Nano-SIM (Dedicated Slot)",
                        "nfc_cChipset": "Yes",
                        "infrared": "No"
                    },
                    "processor": {
                        "chipset": "Samsung Exynos 7 Octa 7885",
                        "cpu": "2.2 GHz Cortex-A53",
                        "graphics": "Mali-G71 MP2",
                        "architecture": "64 bit",
                        "no_of_cores": "8 (Octa Core)"
                    },
                    "sensors": {
                        "accelerometer": "Yes",
                        "gyroscope": "Yes",
                        "fingerprint_sensor": "Yes, Side-mounted",
                        "other_sensors": "Ambient Light, Proximity, Compass"
                    },
                    "sound": {
                        "speaker": "Yes",
                        "audio_jack": "3.5mm"
                    },
                    "imagePath": "../assets/samsung_galaxy_a7_(2018).jpg"
                },
                {
                    "summary": {
                        "model": "Samsung Galaxy J8",
                        "price": "16490",
                        "brand": "Samsung",
                        "processor": "Qualcomm SDM450 Snapdragon 450",
                        "display": "6.0 inches",
                        "storage": "64GB",
                        "camera": "Dual (16MP + 5MP)",
                        "battery": "3500 mAh",
                        "ram": "4GB"
                    },
                    "display": {
                        "resolution": "720 x 1480 pixels",
                        "aspect_ratio": "18.5:9",
                        "display_type": "Super AMOLED",
                        "screen_size": "6.0 inches",
                        "pixel_density": "274 pixels per inch (ppi)",
                        "touchscreen_type": "Capacitive",
                        "color_reproduction": "16M Colors",
                        "screen_to_body_percentage": "75.8%"
                    },
                    "storage": {
                        "ram": "4GB",
                        "internal": "64GB",
                        "expandable": "microSD, Upto 256GB (Dedicated Slot)"
                    },
                    "general": {
                        "launch_date": "28 June 2018",
                        "dimensions": "6.27 x 2.98 x 0.32 inches (159.2 x 75.7 x 8.2 mm)",
                        "water_resistant": "No",
                        "weight": "177 grams (6.24 oz)",
                        "colors": "Black, Gold, Blue, Purple"
                    },
                    "software": {
                        "operating_system": "Android v8.0 (Oreo)"
                    },
                    "camera": {
                        "selfie": "16MP",
                        "rear": "Dual (16MP + 5MP)",
                        "rear_camera_features": "LED flash, panorama, HDR",
                        "selfie_camera_features": "LED flash",
                        "physical_aperture": "Rear (f/1.7) + (f/1.9), Front (f/1.9)",
                        "video": "1080p@30fps"
                    },
                    "battery": {
                        "type": "Li-Ion",
                        "removable_battery": "No",
                        "talk_time": "Up to 23 hrs",
                        "wireless_charging": "No",
                        "capacity": "3500 mAh",
                        "fast_charging": "No"
                    },
                    "connectivity": {
                        "gps": "Yes, with A-GPS, GLONASS, BDS",
                        "wi_fi": "Yes with Wi-Fi Direct, hotspot",
                        "bluetooth": "v4.2 with A2DP",
                        "network": "4G VoLTE, 4G",
                        "usb": "MicroUSB 2.0",
                        "voice_over_lte": "Yes(VoLTE)",
                        "sim_configuration": "Dual, Nano-SIM (Dedicated Slot)",
                        "nfc_chipset": "No",
                        "infrared": "No"
                    },
                    "processor": {
                        "chipset": "Qualcomm SDM450 Snapdragon 450",
                        "cpu": "1.6 GHz Cortex-A53",
                        "graphics": "Adreno 506",
                        "architecture": "64 bit",
                        "no_of_cores": "8 (Octa Core)"
                    },
                    "sensors": {
                        "accelerometer": "Yes",
                        "gyroscope": "Yes",
                        "fingerprint_sensor": "Yes, Rear- mounted",
                        "other_sensors": "Ambient Light Sensor, Proximity Sensor"
                    },
                    "sound": {
                        "speaker": "Yes",
                        "audio_jack": "3.5mm"
                    },
                    "imagePath": "../assets/samsung_galaxy_j8.jpg"
                },
                {
                    "summary": {
                        "model": "Oppo A5",
                        "price": "13491",
                        "brand": "Oppo",
                        "processor": "Qualcomm Snapdragon 450",
                        "display": "6.2 inches",
                        "storage": "32GB",
                        "camera_dDual": "(13MP + 2MP)",
                        "battery": "4230 mAh",
                        "ram": "3GB"
                    },
                    "display": {
                        "display_type": "IPS LCD",
                        "resolution": "720x1520 pixels",
                        "aspect_ratio": "19:9",
                        "screen_size": "6.2 inches",
                        "pixel_density": "271 pixels per inch (ppi)",
                        "touchscreen_type": "Capacitive",
                        "color_reproduction": "16M Colors",
                        "protection": "Corning Gorilla Glass 3",
                        "screen_to_body_percentage": "81.2%"
                    },
                    "storage": {
                        "ram": "3GB",
                        "internal": "32GB",
                        "expandable": "microSD, Upto 256GB (Dedicated Slot)"
                    },
                    "general": {
                        "dimensions": "6.15 x 2.98 x 0.32 inch (156.2 x 75.6 x 8.2 mm)",
                        "water_resistant": "No",
                        "weight": "168 grams (5.93 oz)",
                        "colors": "Diamond Black, Diamond Red, Diamond Blue"
                    },
                    "software": {
                        "operating_system": "Android v8.1 (Oreo)"
                    },
                    "camera": {
                        "rear": "Dual (13MP + 2MP)",
                        "selfie": "8MP",
                        "rear_camera_features": "LED flash, Bokeh Mode, AF Focusing, Consecutive Capture Mode - 20 in a Row, Front Camera HDR",
                        "selfie_camera_features": "AI Beautification 2.0, Bokeh Mode",
                        "physical_aperture": "Rear (f/2.2) + (f/2.4), Front (f/2.2)",
                        "image_stabilization": "No",
                        "other_features": "Autofocus, HDR, Face Detection, 2x Digital Zoom",
                        "video": "1080p@30fps"
                    },
                    "battery": {
                        "removable_battery": "No",
                        "type": "Li-Ion",
                        "wireless_charging": "No",
                        "capacity": "4230 mAh",
                        "fast_charging": "No"
                    },
                    "connectivity": {
                        "gps": "Yes, with A-GPS",
                        "bluetooth": "v4.2, A2DP, LE",
                        "wi_fi": "Yes with hotspot",
                        "network": "4G VoLTE, 4G",
                        "usb": "microUSB 2.0",
                        "voice_over_lte": "Yes(VoLTE)",
                        "sim_configuration": "Dual, Nano SIM (Dedicated Slot)",
                        "nfc_chipset": "No",
                        "infrared": "No"
                    },
                    "processor": {
                        "chipset": "Qualcomm Snapdragon 450",
                        "cpu": "1.8 GHz Cortex-A53",
                        "graphics": "Adreno 506",
                        "architecture": "64 bit",
                        "no_of_cores": "8 (Octa Core)"
                    },
                    "sensors": {
                        "accelerometer": "Yes",
                        "gyroscope": "No",
                        "fingerprint_sensor": "Yes, Rear- mounted",
                        "other_sensors": "Ambient Light Sensor, Proximity Sensor"
                    },
                    "sound": {
                        "speaker": "Yes",
                        "audio_jack": "3.5mm"
                    },
                    "imagePath": "../assets/oppo_a5.jpg"
                },
                {
                    "summary": {
                        "model": "Xiaomi Redmi 6A",
                        "price": "5999",
                        "brand": "Xiaomi",
                        "processor": "Mediatek Helio A22",
                        "display": "5.45 inches",
                        "storage": "16GB",
                        "camera": "13MP",
                        "battery": "3000 mAh",
                        "ram": "2GB"
                    },
                    "display": {
                        "resolution": "720x1440 pixels",
                        "aspect_ratio": "18:9",
                        "display_type": "IPS LCD",
                        "screen_size": "5.45 inches",
                        "pixel_density": "295 pixels per inch (ppi)",
                        "touchscreen_type": "Capacitive",
                        "color_reproduction": "16M Colors",
                        "screen_to_body_percentage": "72.7%"
                    },
                    "storage": {
                        "ram": "2GB",
                        "internal": "16GB",
                        "expandable": "microSD, Upto 256GB (Dedicated Slot)"
                    },
                    "general": {
                        "launch_date": "19 September 2018",
                        "dimensions": "5.8 x 2.8 x 0.3 inches (147.5 x 71.5 x 8.3 mm)",
                        "water_resistant": "No",
                        "weight": "145 grams (5.11 oz)",
                        "colors": "Grey, Blue, Gold, Rose Gold"
                    },
                    "software": {
                        "operating_system": "Android v8.1 (Oreo)"
                    },
                    "camera": {
                        "selfie": "5MP",
                        "rear": "13MP",
                        "rear_camera_features": "LED flash, HDR, Panorama",
                        "selfie_camera_features": "Portrait mode, Beautify, Standard HDR, Face unlock, Age recognition, Selfie timer",
                        "physical_aperture": "Rear (f/2.2), Front (f/2.2)",
                        "other_features": "PDAF, Low light photo enhancement",
                        "video": "1080p@30fps"
                    },
                    "Battery": {
                        "type": "Li-Ion",
                        "removable_battery": "No",
                        "wireless_charging": "No",
                        "capacity": "3000 mAh",
                        "fast_charging": "No"
                    },
                    "connectivity": {
                        "gps": "Yes, with A-GPS, GLONASS, BDS",
                        "wi_fi": "Yes with Wi-Fi Direct, hotspot",
                        "bluetooth": "v4.2 with A2DP",
                        "network": "4G VoLTE, 4G",
                        "usb": "microUSB v2.0",
                        "voice_over_lte": "Yes(VoLTE)",
                        "sim_configuration": "Dual, Nano-SIM (Dedicated Slot)",
                        "nfc_chipset": "No",
                        "infrared": "No"
                    },
                    "processor": {
                        "chipset": "Mediatek Helio A22",
                        "cpu": "2.0 GHz Cortex-A53",
                        "graphics": "PowerVR GE8300",
                        "architecture": "64 bit",
                        "no_of_cores": "4 (Quad Core)"
                    },
                    "sensors": {
                        "accelerometer": "Yes",
                        "gyroscope": "No",
                        "fingerprint_sensor": "No",
                        "other_sensors": "Ambient Light Sensor, Proximity Sensor"
                    },
                    "sound": {
                        "speaker": "Yes",
                        "audio_jack": "3.5mm"
                    },
                    "imagePath": "../assets/xiaomi_redmi_6A.jpg"
                },
                {
                    "summary": {
                        "model": "Xiaomi Redmi Note 5 Pro",
                        "price": "13368",
                        "brand": "Xiaomi",
                        "processor": "Qualcomm SDM636 Snapdragon 636",
                        "display": "5.8 inches",
                        "storage": "64GB",
                        "camera_dual": "(16MP + 5MP)",
                        "battery": "3060 mAh",
                        "ram": "4GB"
                    },
                    "display": {
                        "resolution": "1080x2280 pixels",
                        "aspect_ratio": "19:9",
                        "display_type": "IPS LCD",
                        "screen_size": "5.8 inches",
                        "pixel_density": "432 pixels per inch (ppi)",
                        "touchscreen_type": "Capacitive",
                        "color_reproduction": "16M Colors",
                        "protection": "Corning Gorilla Glass 3",
                        "screen_to_body_percentage": "81.5%"
                    },
                    "storage": {
                        "ram": "4GB",
                        "internal": "64GB",
                        "expandable": "microSD Upto 400GB (Hybrid Slot)"
                    },
                    "general": {
                        "launch_date": "30 August 2018",
                        "water_resistant": "No",
                        "dimensions": "5.8x2.8x0.3 inches (147.2 x 71 x 8 mm)",
                        "weight": "151 grams (5.33 oz)",
                        "colors": "Black, Blue, White"
                    },
                    "software": {
                        "operating_system": "Android v8.1 (Oreo)"
                    },
                    "camera": {
                        "rear": "Dual (16MP + 5MP)",
                        "selfie": "16MP",
                        "rear_camera_features": "Dual LED Flash, Hybrid Zoom (Digital), AF, HDR (High Dynamic Range) Photography and AI Assistance , Selfie Bokeh, Live Bokeh",
                        "selfie_camera_features": "Front Display Flash",
                        "physical_aperture": "Rear (f/2.0) + (f/2.4), Front (f/2.0)",
                        "other_features": "Exposure compensation, ISO control, Panorama, HDR, Spot Color, Color and Mono, Slow-motion Video",
                        "video": "1080p@30fps (gyro-EIS)"
                    },
                    "battery": {
                        "removable_battery": "No",
                        "type": "Li-Ion",
                        "wireless_charging": "No",
                        "capacity": "3060 mAh",
                        "fast_charging": "Yes, Quick Charge 3.0"
                    },
                    "connectivity": {
                        "gps": "Yes, with A-GPS, GLONASS, BDS",
                        "bluetooth": "v5.0 with A2DP, LE",
                        "wi_fi": "Yes, with dual-band, WiFi Direct, hotspot",
                        "network": "4G VoLTE, 4G",
                        "usb": "2.0, Type-C 1.0 reversible connector, USB On-The-Go",
                        "voice_over_lte": "Yes(VoLTE)",
                        "sim_configuration": "Dual, Nano-SIM (Hybrid Slot)",
                        "nfc_chipset": "No",
                        "infrared": "No"
                    },
                    "processor": {
                        "chipset": "Qualcomm SDM636 Snapdragon 636",
                        "cPU": "1.8 GHz, Kryo 260",
                        "graphics": "Adreno 509",
                        "architecture": "64 bit",
                        "no_of_cores": "8 (Octa Core)"
                    },
                    "sensors": {
                        "accelerometer": "Yes",
                        "gyroscope": "Yes",
                        "fingerprint_sensor": "Yes, Rear-mounted",
                        "other_sensors": "Ambient Light, Proximity, Compass"
                    },
                    "sound": {
                        "speaker": "Yes",
                        "audio_jack": "3.5mm"
                    },
                    "imagePath": "../assets/xiaomi_redmi_note_5_pro.jpg"
                },
                {
                    "summary": {
                        "model": "Apple iPhone 7",
                        "price": "33990",
                        "processor": "Apple A10 Fusion",
                        "brand": "Apple",
                        "display": "4.7 inches",
                        "storage": "32GB",
                        "camera": "12MP",
                        "battery": "1960 mAh",
                        "ram": "2GB"
                    },
                    "display": {
                        "resolution": "750x1334 pixels",
                        "aspect_ratio": "16:9",
                        "display_type": "IPS LCD",
                        "screen_size": "4.7 inches",
                        "pixel_density": "326 pixels per inch (ppi)",
                        "touchscreen_type": "Capacitive",
                        "color_reproduction": "16M Colors",
                        "protection": "Ion-Strengthened Glass, Oleophobic coating",
                        "screen_to_body_percentage": "65.6%"
                    },
                    "storage": {
                        "ram": "2GB",
                        "internal": "32GB",
                        "expandable": "No"
                    },
                    "general": {
                        "launch_date": "7 October 2016",
                        "dimensions": "5.4 x 2.6 x 0.2 inches (138.3 x 67.1 x 7.1 mm)",
                        "water_resistant": "Yes",
                        "weight": "138 grams (4.87 oz)",
                        "colors": "Jet Black, Black, Silver, Gold, Rose Gold, Red"
                    },
                    "software": {
                        "operating_system": "iOS 10"
                    },
                    "camera": {
                        "rear": "12MP",
                        "selfie": "7MP",
                        "rear_camera_features": "Quad-LED dual-tone flash, HDR",
                        "selfie_camera_features": "Face detection, HDR, panorama",
                        "physical_aperture": "Rear (f/1.8), Front (f/2.2)",
                        "image_stabilization": "Yes, Optical Image Stabilisation",
                        "video": "2160p@30fps, 1080p@60fps,1080p@120fps, 720p@240fps"
                    },
                    "battery": {
                        "standby_time": "Upto 240 hrs (3G)",
                        "removable_battery": "No",
                        "type": "Li-Po",
                        "talk_time": "Upto 14 hrs (3G)",
                        "wireless_charging":"No",
                        "capacity": "1960 mAh",
                        "fast_charging": "No"
                    },
                    "connectivity": {
                        "gps": "Yes, with A-GPS, GLONASS, GALILEO, QZSS",
                        "wi_fi": "Yes with dual-band, hotspot",
                        "bluetooth": "v4.2 with A2DP, LE",
                        "network": "4G VoLTE, 4G",
                        "usb": "v2.0, proprietary reversible connector",
                        "voice_over_lte": "Yes(VoLTE)",
                        "sim_configuration": "Single, Nano SIM",
                        "nfc_chipset": "Yes",
                        "infrared": "No"
                    },
                    "processor": {
                        "chipset": "Apple A10 Fusion",
                        "cpu": "2.34 GHz (2x Hurricane + 2x Zephyr)",
                        "graphics": "PowerVR 7XT Plus",
                        "architecture": "64 bit",
                        "no_of_cores": "4 (Quad Core)"
                    },
                    "sensors": {
                        "accelerometer": "Yes",
                        "gyroscope": "Yes",
                        "fingerprint_sensor": "Yes, Front- mounted",
                        "other_sensors": "Ambient Light Sensor, Proximity Sensor"
                    },
                    "sound": {
                        "speaker": "Yes",
                        "audio_jack": "No"
                    },
                    "imagePath": "../assets/apple_iPhone_7.jpg"
                },
                {
                    "summary": {
                        "model": "Oppo F9",
                        "price": "15992",
                        "processor": "MediaTek Helio P60",
                        "brand": "Oppo",
                        "display": "6.3 inches",
                        "storage": "64GB",
                        "camera_dual": "(16MP + 2MP)",
                        "battery": "3500 mAh",
                        "ram": "6GB"
                    },
                    "display": {
                        "resolution": "1080x1920 pixels",
                        "aspect_ratio": "19.5:9",
                        "display_type": "IPS LCD",
                        "screen_size": "6.3 inches",
                        "pixel_density": "409 pixels per inch (ppi)",
                        "touchscreen_type": "Capacitive",
                        "color_reproduction": "16M Colors",
                        "protection": "Corning Gorilla Glass 6",
                        "screen_to_body_percentage": "84.0%"
                    },
                    "storage": {
                        "ram": "6GB",
                        "internal": "64GB",
                        "expandable": "microSD, Upto 256GB (Dedicated Slot)"
                    },
                    "general": {
                        "launch_date": "31 August 2018",
                        "dimensions": "6.17 x 2.91 x 0.31 inches (156.7 x 74 x 8 mm)",
                        "water_resistant": "No",
                        "weight": "169 grams (5.96 oz)",
                        "colors": "Sunrise Red, Starry Purple, Twilight Blue"
                    },
                    "software": {
                        "operating_system": "Android v8.1 (Oreo)"
                    },
                    "camera": {
                        "selfie": "25MP",
                        "rear": "Dual (16MP + 2MP)",
                        "rear_camera_features": "LED flash, HDR, panorama",
                        "selfie_camera_features": "Wide Angle Selfie",
                        "physical_aperture": "Rear (f/1.8) + (f/2.4), Front (f/2.0)",
                        "other_features": "Autofocus, Digital Zoom",
                        "video": "1080p@30fps"
                    },
                    "battery": {
                        "removable_battery": "No",
                        "type": "Li-Ion",
                        "wireless_charging": "No",
                        "capacity": "3500 mAh",
                        "fast_charging": "Yes with VOOC"
                    },
                    "connectivity": {
                        "gps": "Yes, with A-GPS, GLONASS, BDS",
                        "wi_fi": "Yes with hotspot",
                        "bluetooth": "v4.2 with A2DP, LE",
                        "network": "4G VoLTE, 4G",
                        "usb": "Type C",
                        "voice_over_lte": "Yes(VoLTE)",
                        "sim_configuration": "Dual, Nano SIM (Dedicated Slot)",
                        "nfc_chipset": "No",
                        "infrared": "No"
                    },
                    "processor": {
                        "chipset": "MediaTek Helio P60",
                        "cpu": "4x2.0 GHz Cortex-A73 & 4x2.0 GHz Cortex-A53",
                        "graphics": "Mali-G72 MP3",
                        "architecture": "64 bit",
                        "no_of_cores": "8 (Octa Core)"
                    },
                    "sensors": {
                        "accelerometer": "Yes",
                        "gyroscope": "Yes",
                        "fingerprint_sensor": "Yes, Rear- mounted",
                        "other_sensors": "Ambient Light Sensor, Proximity Sensor"
                    },
                    "sound": {
                        "speaker": "Yes",
                        "audio_jack": "3.5mm"
                    },
                    "imagePath": "../assets/oppo_f9.jpg"
                },
                {
                    "summary": {
                        "model": "Vivo V11 Pro",
                        "price": "23149",
                        "processor": "Qualcomm Snapdragon 660",
                        "brand": "Vivo",
                        "display": "6.2 inches",
                        "storage": "64GB",
                        "camera_dual": "(16MP + 5MP)",
                        "battery": "5000 mAh",
                        "ram": "4GB"
                    },
                    "display": {
                        "resolution": "1080x1920 pixels",
                        "aspect_ratio": "19:9",
                        "display_type": "IPS LCD",
                        "screen_size": "6.2 inches",
                        "pixel_density": "402 pixels per inch (ppi)",
                        "touchscreen_type": "Capacitive",
                        "color_reproduction": "16M Colors",
                        "protection_corning": "Gorilla Glass",
                        "screen_to_body_percentage": "81.7%"
                    },
                    "storage": {
                        "ram": "4GB",
                        "internal": "64GB",
                        "expandable": "microSD, Upto 256GB (Dedicated Slot)"
                    },
                    "general": {
                        "dimensions": "6.14 x 2.99 x 0.33 inches (156 x 76 x 8.4 mm)",
                        "water_resistant": "Yes, Splash proof",
                        "weight": "198 grams (6.98 oz)",
                        "colors": "Midnight Black"
                    },
                    "software": {
                        "operating_system": "Android, v8.1 (Oreo)"
                    },
                    "camera": {
                        "selfie": "12MP",
                        "rear": "Dual (16MP + 5MP)",
                        "rear_camera_features": "Dual-LED dual-tone Flash, HDR, Panorama, PDAF",
                        "selfie_camera_features": "LED Flash",
                        "physical_aperture": "Rear (f/1.8) + (f/2.2), Front (f/2.0)",
                        "other_features": "Continuos Shooting, High Dynamic Range mode (HDR)",
                        "video": "1080p@30fps"
                    },
                    "battery": {
                        "type": "Li-Ion",
                        "removable_battery": "No",
                        "wireless_charging": "No",
                        "capacity": "5000 mAh",
                        "fast_charging": "Yes"
                    },
                    "connectivity": {
                        "gps": "Yes, with A-GPS, GLONASS, BDS",
                        "wi_fi": "Yes with WiFi Direct, hotspot",
                        "bluetooth": "v5.0 with A2DP, LE, EDR",
                        "network": "4G VoLTE, 4G",
                        "usb": "Type-C 1.0 reversible connector",
                        "voice_over_lte": "Yes(VoLTE)",
                        "sim_configuration": "Dual, Nano-SIM (Dedicated Slot)",
                        "nfc_chipset": "Yes",
                        "infrared": "No"
                    },
                    "processor": {
                        "chipset": "Qualcomm Snapdragon 660",
                        "cpu": "1.8 GHz Kryo 260",
                        "graphics": "Adreno 509",
                        "architecture": "64 bit",
                        "no_of_cores": "8 (Octa Core)"
                    },
                    "sensors": {
                        "accelerometer": "Yes",
                        "gyroscope": "Yes",
                        "fingerprint_sensor": "Yes, Rear- mounted",
                        "other_sensors": "Ambient Light Sensor, Proximity Sensor"
                    },
                    "sound": {
                        "speaker": "Yes",
                        "audio_jack": "3.5mm"
                    },
                    "imagePath": "../assets/vivo_v11_pro.jpg"
                },
                {
                    "summary": {
                        "model": "Motorola One Power",
                        "processor": "Qualcomm Snapdragon 660",
                        "price": "15999",
                        "brand": "Motorola",
                        "display": "6.41 inches",
                        "storage": "64GB",
                        "camera_dual": "(12MP + 5MP)",
                        "battery": "3400 mAh",
                        "ram": "6GB"
                    },
                    "display": {
                        "resolution": "1080x2340 pixels",
                        "aspect_ratio": "19.5:9",
                        "display_type": "Super AMOLED",
                        "screen_size": "6.41 inches",
                        "pixel_density": "402 pixels per inch (ppi)",
                        "touchscreen_type": "Capacitive",
                        "color_reproduction": "16M Colors",
                        "protection_corning": "Gorilla Glass",
                        "screen_to_body_percentage": "85.2%"
                    },
                    "storage": {
                        "ram": "6GB",
                        "internal": "64GB",
                        "expandable": "microSD, Upto 256GB (Dedicated Slot)"
                    },
                    "general": {
                        "launch_date": "12 September 2018",
                        "dimensions": "6.2 x 2.9 x 0.3 inches (157.9 x 75 x 7.9 mm)",
                        "water_resistant": "No",
                        "weight": "156 grams (5.50 oz)",
                        "colors": "Starry Night, Dazzling Gold, Nebula"
                    },
                    "software": {
                        "operating_system": "Android v8.1 (Oreo)"
                    },
                    "camera": {
                        "rear": "Dual (12MP + 5MP)",
                        "selfie": "25MP",
                        "rear_camera_features": "Rear LED Flash, Professional, Slow, Time-lapse Photography, Camera Filter, Live, Bokeh",
                        "selfie_camera_features": "Front Screen Flash, Ultra HD, PPT, Live, Bokeh, HDR, AI Face Beauty",
                        "physical_aperture": "Rear (f/2.2), Front (f/2.0)",
                        "image_stabilization": "No",
                        "other_features": "Autofocus, HDR, Face Detection, Digital Zoom",
                        "video": "1080p@30fps"
                    },
                    "battery": {
                        "removable_battery": "No",
                        "type": "Li-Po",
                        "wireless_charging": "No",
                        "capacity": "3400 mAh",
                        "fast_charging": "Yes"
                    },
                    "connectivity": {
                        "gps": "Yes, with A-GPS, GLONASS",
                        "wi_fi": "Yes with dual-band, WiFi Direct, hotspot",
                        "bluetooth": "v5.0, A2DP, LE, EDR",
                        "network": "4G VoLTE, 4G",
                        "usb": "microUSB 2.0",
                        "voice_over_lte": "Yes(VoLTE)",
                        "sim_configuration": "Dual, Nano-SIM (Dedicated Slot)",
                        "nfc_chipset": "No",
                        "infrared": "No"
                    },
                    "processor": {
                        "chipset": "Qualcomm Snapdragon 660",
                        "cpu": "4x2.2 GHz Kryo 260 & 4x1.8 GHz Kryo 260",
                        "graphics": "Adreno 512",
                        "architecture": "64 bit",
                        "no_of_cores": "8 (Octa Core)"
                    },
                    "sensors": {
                        "accelerometer": "Yes",
                        "gyroscope": "Yes",
                        "fingerprint_sensor": "Yes, Under-display",
                        "other_sensors": "Ambient Light Sensor, Proximity Sensor"
                    },
                    "sound": {
                        "speaker": "Yes",
                        "audio_jack": "3.5mm"
                    },
                    "imagePath": "../assets/motorola_one_power.jpg"
                },
                {
                    "summary": {
                        "model": "Xiaomi Poco F1",
                        "price": "20999",
                        "brand": "Xiaomi",
                        "processor": "Qualcomm Snapdragon 845",
                        "display": "6.28 inches",
                        "storage": "64GB",
                        "camera": "Dual (16MP + 20MP (16MP effective) )",
                        "battery": "3300 mAh",
                        "ram": "6GB"
                    },
                    "display": {
                        "display_type": "Optic AMOLED",
                        "resolution": "1080x2280 pixels",
                        "aspect_ratio": "19:9",
                        "screen_size": "6.28 inches",
                        "pixel_density": "402 pixels per inch (ppi)",
                        "touchscreen_type": "Capacitive",
                        "color_reproduction": "16M Colors",
                        "protection": "Corning Gorilla Glass 5",
                        "screen_to_body_percentage": "83.8%"
                    },
                    "storage": {
                        "ram": "6GB",
                        "internal": "64GB",
                        "expandable": "No"
                    },
                    "general": {
                        "launch_date": "21 May 2018",
                        "water_resistant": "Yes",
                        "dimensions": "6.1 x 2.9 x 0.3 inches (155.7 x 75.4 x 7.8 mm)",
                        "weight": "177 grams (6.24 oz)",
                        "colors": "Midnight Black, Mirror Black, Silk White, Amber Red"
                    },
                    "software": {
                        "operating_system": "Android v8.1 (Oreo)"
                    },
                    "camera": {
                        "rear": "Dual (16MP + 20MP (16MP effective))",
                        "selfie": "16MP",
                        "rear_camera_features": "Dual-LED flash, HDR, panorama",
                        "selfie_camera_features": "Auto-HDR",
                        "physical_aperture": "Rear (f/1.7) + (f/1.7), Front (f/2.0)",
                        "image_stabilization": "Yes, Optical Image Stabilisation",
                        "video": "2160p@30fps, 1080p@30/60fps, 720p@30/120fps"
                    },
                    "battery": {
                        "removable_battery": "No",
                        "type": "Li-Po",
                        "wireless_charging": "No",
                        "capacity": "3300 mAh",
                        "fast_charging": "Yes (Dash Charge)"
                    },
                    "connectivity": {
                        "gps": "Yes, with A-GPS, GLONASS, BDS, GALILEO",
                        "bluetooth": "v5.0 with A2DP, LE, aptX HD",
                        "wi_fi": "Yes with dual-band, WiFi Direct, DLNA, hotspot",
                        "network": "4G VoLTE, 4G",
                        "usb": "Type-C 1.0 reversible connector",
                        "voice_over_lte": "Yes(VoLTE)",
                        "sim_configuration": "Dual, Nano-SIM",
                        "nfc_chipset": "Yes",
                        "infrared": "No"
                    },
                    "processor": {
                        "chipset": "Qualcomm Snapdragon 845",
                        "cpu": "4x2.8 GHz Kryo 385 Gold + 4x1.7 GHz Kryo 385 Silver",
                        "graphics": "Adreno 630",
                        "architecture": "64 bit",
                        "no_of_cores": "8 (Octa Core)"
                    },
                    "sensors": {
                        "accelerometer": "Yes",
                        "gyroscope": "Yes",
                        "fingerprint_sensor": "Yes, Rear- mounted",
                        "other_sensors": "Ambient Light, Proximity, Compass"
                    },
                    "sound": {
                        "speaker": "Yes",
                        "audio_jack": "3.5mm"
                    },
                    "imagePath": "../assets/xiaomi_poco_f1.jpg"
                }
            ],
            filterProductList : [],  // state variable to store fltered product so update in jsx will occur
            searchText: "" // Search field model value
        }
    };
    // Update the state value of search model
    // show all product list if search field is empty
    updateSearchText(evt) {
        this.setState({
            searchText: evt.target.value,
        });
        if (!evt.target.value) {
            this.filterWithSearch();
        }
    }
    // update the product list to show filtered list
    // fallback to original product list if filtered list is empty
    updateProductList(products) {
        if (products.length == 0) {
            products = this.state.products;
        }
        this.setState({
            filterProductList: products,
        });
    }
    // filter product list with entered search string
    filterWithSearch(text) {
        if (text) {
            let products = this.state.products;
            this.availableLists = [];
            let textArray = text.split(' ');
            products.forEach((p) => {
                this.checkOccurence(p, textArray, p)
            })
            let unique_array = this.availableLists.filter(function(elem, index, self) {
                return index == self.indexOf(elem);
            });
            this.availableLists = unique_array;
        } else {
            this.availableLists = [];
        }
        this.updateProductList(this.availableLists);
    }
    // Recurrsion to search random search in nested object level in product list
    // & store the filtered product in global variable
    checkOccurence(element, textArray, parentElem, stringAvailable) {
        stringAvailable = stringAvailable ? stringAvailable : false;
        textArray.forEach((text, index) => {
            for (let k in element) {
                if (typeof element[k] == 'object') {
                    this.checkOccurence(element[k], textArray, parentElem, stringAvailable)
                } else {
                    if (((element[k].toLowerCase()).indexOf(text.toLowerCase())>-1) && ((index == 0) || (stringAvailable && index>0))) {
                        stringAvailable = true;
                        if (index == (textArray.length-1))  {
                            this.availableLists.push(parentElem);
                            return;
                        }
                    }
                }
            }
        })
    }
    render() {
        let products = this.state.filterProductList.length > 0 ? this.state.filterProductList : this.state.products;
        return (
            <div id="container">
                <Header onSearch={this.filterWithSearch} updateSearchText={this.updateSearchText} searchText={this.state.searchText}></Header>
                <Itembody products={products} allProducts={this.state.products} onFilter={this.updateProductList}></Itembody>
            </div>
        );
    }
}

export default App;