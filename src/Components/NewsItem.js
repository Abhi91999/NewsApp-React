import React, { Component } from 'react'
import NewsItemComponent from './NewsItemComponent'

export class NewsItem extends Component {
    articles = [
        {
        "source": {
        "id": "engadget",
        "name": "Engadget"
        },
        "author": "Jon Fingas",
        "title": "Parler's new owner immediately took the social network offline",
        "description": "Months after Ye dropped his bid, Parler has a new owner... and is out of commission for the time being. Starboard, the owner of pro-conservative news outlets like American Wire News, has shut down Parler on a temporary but indefinite basis after completing it…",
        "url": "https://www.engadget.com/parlers-new-owner-immediately-took-the-social-network-offline-165613235.html",
        "urlToImage": "https://s.yimg.com/uu/api/res/1.2/t_GyA5IC18j1Gxbs.zCj2w--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2022-08/4d4b46d0-2af0-11ed-bac3-8d8beb34a91a.cf.jpg",
        "publishedAt": "2023-04-14T16:56:13Z",
        "content": "Months after Ye dropped his bid, Parler has a new owner... and is out of commission for the time being. Starboard, the owner of pro-conservative news outlets like American Wire News, has shut down Pa… [+2152 chars]"
        },
        {
        "source": {
        "id": "engadget",
        "name": "Engadget"
        },
        "author": "Nicole Lee",
        "title": "A beginner's guide to smart sous vide",
        "description": "Cooking via “sous vide” might sound complicated and intimidating, but it’s actually a lot easier than you might think. French for “under vacuum,” “sous vide” simply translates to immersing vacuum-sealed food in a temperature-controlled water bath until the fo…",
        "url": "https://www.engadget.com/smart-sous-vide-guide-151821790.html",
        "urlToImage": "https://s.yimg.com/uu/api/res/1.2/Na4XD1B0TRbKhj2NmhI4cQ--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2022-05/a8603ca0-cbd3-11ec-bf3f-e46c93ddaff9.cf.jpg",
        "publishedAt": "2023-04-14T15:18:21Z",
        "content": "All products recommended by Engadget are selected by our editorial team, independent of our parent company. Some of our stories include affiliate links. If you buy something through one of these link… [+8254 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Android Central"
        },
        "author": "andrew.myrick@futurenet.com (Andrew Myrick)",
        "title": "There's very little a Chromebook can't do compared to Windows or a Mac",
        "description": "It might have taken Google longer than expected, but ChromeOS has matured to a point where there's not much a Chromebook can't do.",
        "url": "https://www.androidcentral.com/chromebooks-laptops/is-there-anything-chromebook-cant-do",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/xkA4yfsLEBGDCczDiJ2TGE-1200-80.jpg",
        "publishedAt": "2023-04-14T12:30:00Z",
        "content": "If you were to ask the question posed in the title five, or even three, years ago, we would have a much different answer. Since then, ChromeOS has continued to mature as a platform, bringing with it … [+5804 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "The Guardian"
        },
        "author": "Phil Harrison",
        "title": "Dead Ringers to The Diplomat: the seven best shows to stream this week",
        "description": "Rachel Weisz inhabits the weird, troubling Mantle twins in the new mini-series adapted from David Cronenberg’s film, while a glossy thriller plunges a US ambassador into a huge international crisis Continue reading...",
        "url": "https://www.theguardian.com/tv-and-radio/2023/apr/14/dead-ringers-to-the-diplomat-the-seven-best-shows-to-stream-this-week",
        "urlToImage": "https://i.guim.co.uk/img/media/a750302c6a5d3a719234ff8cf0c81f16078adfad/6_31_2994_1796/master/2994.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=50a69766e02d97888ee542b9d6720ab0",
        "publishedAt": "2023-04-14T06:00:05Z",
        "content": "Pick of the week\r\nDead Ringers\r\nThe fact its adapted from a David Cronenberg film should be a hint that this series about identical twin gynaecologists is not for the faint-hearted. The brothers from… [+5449 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "The Guardian"
        },
        "author": "Fiona Beckett",
        "title": "Riesling: a wine worth raving about | Fiona Beckett on drinks",
        "description": "Why isn’t riesling more popular? Try it – it’s not all as sweet as you might presumeThe most unexpected restaurant meal I had on a recent trip to New York was at a Hawaiian restaurant called Noreetuh. To be honest, I’d booked because I couldn’t resist the ide…",
        "url": "https://www.theguardian.com/food/2023/apr/14/riesling-a-wine-worth-raving-about",
        "urlToImage": "https://i.guim.co.uk/img/media/e51c8d36006e15f40a91df068aaa84eb6220a79d/0_160_4256_2552/master/4256.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=b3c48681f7131e8de602a6138e9d4bc7",
        "publishedAt": "2023-04-14T13:00:13Z",
        "content": "The most unexpected restaurant meal I had on a recent trip to New York was at a Hawaiian restaurant called Noreetuh. To be honest, Id booked because I couldnt resist the idea of a restaurant that ser… [+3497 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "The Guardian"
        },
        "author": "Stuart Heritage",
        "title": "Family bromance: could Woody Harrelson and Matthew McConaughey really be brothers?",
        "description": "It’s not just receding hair and a shared taste in recreational drugs that makes the two look related. But it is an awfully similar story to their new dramaFamilies can be complicated, beguiling things. Long-kept secrets can simmer away for generations before …",
        "url": "https://www.theguardian.com/film/2023/apr/14/are-woody-harrelson-and-matthew-mcconaughey-really-brothers",
        "urlToImage": "https://i.guim.co.uk/img/media/bc11b19da6d8b0097b2da5a7a8fdea574391e7d2/468_70_902_541/master/902.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=d1977953892be3700e1e6289633cc5e9",
        "publishedAt": "2023-04-14T09:46:29Z",
        "content": "Families can be complicated, beguiling things. Long-kept secrets can simmer away for generations before exploding in a mess of trauma and recriminations. Children can learn that they have a different… [+4158 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "MacRumors"
        },
        "author": "Hartley Charlton",
        "title": "The MacRumors Show: macOS 14 Wishlist – What Do We Want to See?",
        "description": "On this week's episode of The MacRumors Show, we discuss some of the top features and changes we would like to see in the next major update to macOS. \n\n\n\n\r\nSubscribe to the MacRumors YouTube channel for more videos\n\nApple is expected to unveil macOS 14 at WWD…",
        "url": "https://www.macrumors.com/2023/04/14/the-macrumors-show-macos-14-wishlist/",
        "urlToImage": "https://images.macrumors.com/t/h6U4sL4KjELtvBZNLGCq9PX0tig=/2560x/article-new/2023/04/macrumors-show-macos-14-thumb.jpg",
        "publishedAt": "2023-04-14T17:03:27Z",
        "content": "On this week's episode of The MacRumors Show, we discuss some of the top features and changes we would like to see in the next major update to macOS. \r\nApple is expected to unveil macOS 14 at WWDC in… [+1964 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "CNET"
        },
        "author": "Sareena Dayaram",
        "title": "iPhone Tip: Tags Are the Easiest Way to Avoid Losing Important Notes - CNET",
        "description": "Get into the habit of tagging your notes. Your future self will thank you.",
        "url": "https://www.cnet.com/tech/mobile/iphone-tip-tags-are-the-easiest-way-to-avoid-losing-important-notes/",
        "urlToImage": "https://www.cnet.com/a/img/resize/5b43ae5fa0a3f49853d4e16029858ee3414ea7c7/hub/2022/11/23/d3763471-18a6-4205-aead-b0e5f8b38300/20220916-iphone-14-pro-01.jpg?auto=webp&fit=crop&height=630&width=1200",
        "publishedAt": "2023-04-14T12:00:00Z",
        "content": "Apple's Notes app is one of the most powerful note-taking tools in the mobile world. It's clutch for shopping lists, on-the-fly reminders and even the occasional celebrity apology letter. \r\nThere are… [+3468 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "MacRumors"
        },
        "author": "Juli Clover",
        "title": "MacRumors Giveaway: Win Custom-Colored AirPods or AirPods Pro From ColorWare",
        "description": "For this week's giveaway, we're teaming up with ColorWare to offer MacRumors readers a chance to win a set of custom-painted third-generation AirPods or second-generation AirPods Pro. All of ColorWare's products come in hundreds of unique color combinations.\n…",
        "url": "https://www.macrumors.com/2023/04/14/macrumors-giveaway-colorware-airpods-pro-april/",
        "urlToImage": "https://images.macrumors.com/t/gSZFjSFFIsTq6xdj8eUC6P6yaFw=/2000x/article-new/2023/04/colorware-shiny-gold.jpg",
        "publishedAt": "2023-04-14T16:04:42Z",
        "content": "For this week's giveaway, we're teaming up with ColorWare to offer MacRumors readers a chance to win a set of custom-painted third-generation AirPods or second-generation AirPods Pro. All of ColorWar… [+3723 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Pete Syme",
        "title": "Disney CEO Bob Iger says his return to company was inspired by Steve Jobs' Apple homecoming, and comebacks need 'unbelievable enthusiasm'",
        "description": "Bob Iger bought Pixar from Steve Jobs during his first year as Disney's CEO, and told Time about the \"unbelievable enthusiasm\" needed to come back.",
        "url": "https://www.businessinsider.com/disney-ceo-bob-iger-comeback-inspired-by-steve-jobs-apple-2023-4",
        "urlToImage": "https://i.insider.com/64391022051ad10018c4819e?width=1200&format=jpeg",
        "publishedAt": "2023-04-14T10:36:31Z",
        "content": "Bob Iger, and Steve Jobs in 1998.Charley Gallay/Getty Images for Disney; William STEVENS/Gamma-Rapho via Getty Images\r\n<ul>\n<li>Bob Iger returned to the helm of Disney last November, less than a year… [+2081 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Emilia David",
        "title": "Why banning TikTok could be a bad idea",
        "description": "In this edition, Lemon8's popularity proves banning TikTok is a bad idea, Big Tech return-to-office and why Google is closing some of its cafes.",
        "url": "https://www.businessinsider.com/lemon8-and-the-tiktok-ban-google-amazon-2023-4",
        "urlToImage": "https://i.insider.com/64392266f62706001942f927?width=1200&format=jpeg",
        "publishedAt": "2023-04-14T10:30:12Z",
        "content": "Happy Friday, readers! I'm Emilia David. I'm glad we made it to the weekend. I'm writing this from Insider's New York office. Maybe you don't want to think about the office this weekend (or any weeke… [+4237 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "ReadWrite"
        },
        "author": "Deanna Ritchie",
        "title": "Best iPhone Chargers of 2023",
        "description": "As we continue through 2023, the iPhone has become an essential part of our lives, serving as a communication device, a camera, a music player, and more. However, even with the advancements in battery technology, the need for a reliable and efficient iPhone c…",
        "url": "https://readwrite.com/best-iphone-chargers/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2023/04/best-iphone-charger-with-minimalistic-red-background.jpg",
        "publishedAt": "2023-04-14T15:00:09Z",
        "content": "As we continue through 2023, the iPhone has become an essential part of our lives, serving as a communication device, a camera, a music player, and more. However, even with the advancements in batter… [+10403 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Hipertextual"
        },
        "author": "Rubén Chicharro",
        "title": "Twitter ahora admite tweets de 10.000 caracteres, pero con una condición",
        "description": "Los 280 caracteres de Twitter ya son historia. Al menos, para los usuarios de Twitter Blue. La red social ha anunciado la posibilidad de compartir publicaciones con un máximo de 10.000 caracteres —lo que equivaldría a unas 2.000 palabras, aproximadamente—, añ…",
        "url": "http://hipertextual.com/2023/04/twitter-ahora-admite-tweets-de-10-000-caracteres-pero-con-una-condicion",
        "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2020/02/hipertextual-twitter-te-facilitara-crear-hilos-con-tweets-antiguos-2020075484.jpg",
        "publishedAt": "2023-04-14T09:45:01Z",
        "content": "Los 280 caracteres de Twitter ya son historia. Al menos, para los usuarios de Twitter Blue. La red social ha anunciado la posibilidad de compartir publicaciones con un máximo de 10.000 caracteres lo … [+3018 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Hipertextual"
        },
        "author": "Tomás Rivero",
        "title": "Spotify estrena un nuevo widget para la pantalla de bloqueo de iOS 16 y es justo lo que queríamos",
        "description": "Con el lanzamiento de iOS 16, Apple presentó una serie de widgets para la pantalla de bloqueo que prometían cambiar la forma en la que usábamos nuestro iPhone. Pocos meses después, y cada vez más cerca de iOS 17, los desarrolladores parecen no haber puesto mu…",
        "url": "http://hipertextual.com/2023/04/spotify-estrena-novedad-ios-16-asi-puedes-probarla",
        "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2023/04/Widget-de-Spotify-para-iOS-16.jpg",
        "publishedAt": "2023-04-14T13:20:34Z",
        "content": "Con el lanzamiento de iOS 16, Apple presentó una serie de widgets para la pantalla de bloqueo que prometían cambiar la forma en la que usábamos nuestro iPhone. Pocos meses después, y cada vez más cer… [+3017 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Boing Boing"
        },
        "author": "Rusty Blazenhoff",
        "title": "Woody Harrelson and Matthew McConaughey consider DNA test to learn if they're half brothers",
        "description": "This a wild way to promote a new show. After years of being mistaken for each other in photos, there's a chance that Matthew McConaughey and Woody Harrelson might be more than just besties—they could be blood brothers. In a recent podcast interview, McConaugh…",
        "url": "https://boingboing.net/2023/04/13/woody-harrelson-and-matthew-mcconaughey-consider-dna-test-to-learn-if-theyre-half-brothers.html",
        "urlToImage": "https://i0.wp.com/boingboing.net/wp-content/uploads/2023/04/Woody-Tinseltown-Shutterstock.com-Matthew-DFree-Shutterstock.com_.png?fit=1200%2C675&ssl=1",
        "publishedAt": "2023-04-14T01:31:00Z",
        "content": "This a wild way to promote a new show. After years of being mistaken for each other in photos, there's a chance that Matthew McConaughey and Woody Harrelson might be more than just bestiesthey could … [+1201 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "HuffPost"
        },
        "author": "David Moye",
        "title": "Matthew McConaughey Wonders If Woody Harrelson Is Actually His Half-Brother",
        "description": "The two stars were vacationing together when McConaughey’s mom said, “Woody, I knew your dad.’” The actor told Kelly Ripa, “It was a loaded K-N-E-W.”",
        "url": "https://www.huffpost.com/entry/matthew-mcconaughey-woody-harrelson-think-half-brothers_n_643977c2e4b0ed74f2a1d93f",
        "urlToImage": "https://img.huffingtonpost.com/asset/6439782c22000034005b8ad2.jpeg?cache=BZKGPjvjVm&ops=1200_630",
        "publishedAt": "2023-04-14T17:08:30Z",
        "content": "Matthew McConaughey has had a long-standing bromance with Woody Harrelson, but now they are wondering if its because they might actually be brothers.\r\nThe two have known each other since 1997, when t… [+2043 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Xataka.com"
        },
        "author": "Manu García (Visnuh)",
        "title": "Televisiones baratas, barras de sonido de diseño o teléfonos tope de gama a precios rebajados: Cazando Gangas",
        "description": "Atrás quedan ya las vacaciones de Semana Santa, pero lo que no quedan atrás son las buenas ofertas. Hoy, como cada viernes te traemos una nueva remesa de ellas, con precios más que atractivos en televisores, smartphones, portátiles o dispositivos para el hoga…",
        "url": "https://www.xataka.com/seleccion/televisiones-baratas-barras-sonido-diseno-telefonos-tope-gama-a-precios-rebajados-cazando-gangas",
        "urlToImage": "https://i.blogs.es/2395cd/cazando-gangas-neon/840_560.jpeg",
        "publishedAt": "2023-04-14T10:40:16Z",
        "content": "Atrás quedan ya las vacaciones de Semana Santa, pero lo que no quedan atrás son las buenas ofertas. Hoy, como cada viernes te traemos una nueva remesa de ellas, con precios más que atractivos en tele… [+10501 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Ebay.com"
        },
        "author": "John Gruber",
        "title": "Print Editions of ‘Make Something Wonderful’ for Sale on eBay",
        "description": null,
        "url": "https://www.ebay.com/sch/i.html?_from=R40&_trksid=p4432023.m570.l1313&_nkw=make+something+wonderful&_sacat=0",
        "urlToImage": null,
        "publishedAt": "2023-04-14T11:58:19Z",
        "content": "Speaking of books, print copies of the Steve Jobs Archive’s Make Something Wonderful: Steve Jobs in His Own Words — presumably copies given to folks at Apple and Disney — have hit eBay. Prices are re… [+391 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Digital Trends"
        },
        "author": "Andy Boxall",
        "title": "Forget gaming — there’s another big reason to buy the ROG Phone 7 Ultimate",
        "description": "Yes, the Asus ROG Phone 7 Ultimate is a brilliant gaming phone, but there is a secret second reason why you should buy it.",
        "url": "https://www.digitaltrends.com/mobile/forget-gaming-buy-the-asus-rog-phone-7-ultimate-for-another-reason/",
        "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2023/04/ROG-Phone-7-Ultimate-Back.jpg?resize=1200%2C630&p=1",
        "publishedAt": "2023-04-14T13:00:50Z",
        "content": "Skip to main content\r\nThe Asus ROG Phone 7 Ultimate is, first and foremost, a gaming smartphone. But during my review, I found it also hides a secret, as it’s also really good at something else too.\r… [+8040 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Thefp.com"
        },
        "author": "Adam Popescu",
        "title": "Your iPhone Was Built with Child Labor",
        "description": "‘Rarely in history has the practice of preying on the weak been so severe, generated such profit, and touched the lives of so many.’",
        "url": "https://www.thefp.com/p/your-iphone-was-built-with-child",
        "urlToImage": "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa310ac48-9c7e-4922-bf36-5cf34baf2e13_1024x683.jpeg",
        "publishedAt": "2023-04-14T01:16:15Z",
        "content": "Artisanal miners in the Congo carry sacks of cobalt ore, a vital element in the making of smartphones and EV batteries. (Junior Kannah via Getty Images)\r\nRarely in history has the practice of preying… [+10128 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "heise online"
        },
        "author": "Ben Schwan",
        "title": "Eine Frage der Knöpfe: iPhone 15 Pro nun wohl doch mit veränderter Bedienung",
        "description": "Keine Solid-State-Buttons, dafür aber eine Action-Taste: Apple arbeitet weiter an einer Änderung des iPhone-Bedienkonzepts. Was über das 15 Pro bekannt ist.",
        "url": "https://www.heise.de/news/Eine-Frage-der-Knoepfe-iPhone-15-Pro-nun-wohl-doch-mit-veraenderter-Bedienung-8962422.html",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/1/4/1/0/6/5/iphone15prosolid-2e8463b5e43c3f7e-ca468309d23fea75-80e2a2664d3f2568-2f864c64122b0b10.jpeg",
        "publishedAt": "2023-04-14T09:22:00Z",
        "content": "Eigentlich war sich die Gerüchteküche weitgehend einig, dass Apple den im Herbst erwarteten Modellen iPhone 15 Pro und iPhone 15 Pro Max neue Bedienknöpfe verpassen wird. Statt beweglicher physischer… [+2560 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "heise online"
        },
        "author": "Leo Becker",
        "title": "Mehr Zuschauer für TV+: Apple schließt Deal mit Pay-TV-Riesen Canal+",
        "description": "Kunden von Canal+ erhalten als Teil ihres Abos direkten Zugriff auf die Inhalte von TV+. Apple verweist auf seine europäischen TV-Produktionen.",
        "url": "https://www.heise.de/news/Mehr-Zuschauer-fuer-TV-Apple-schliesst-Deal-mit-Pay-TV-Riesen-Canal-8963862.html",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/1/4/1/5/5/5/shutterstock_471991831-819610fe59250cb7.jpg",
        "publishedAt": "2023-04-14T15:35:00Z",
        "content": "Ein ungewöhnlicher Deal im Streaming-Markt: Alle Inhalte von Apples Streaming-Dienst TV+ sind in Kürze bei dem zum Medienkonzern Vivendi gehörenden Pay-TV-Anbieter Canal+ verfügbar, ohne ein zusätzli… [+2076 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "heise online"
        },
        "author": "Malte Kirchner",
        "title": "iOS 17: Dynamic Island angeblich neue Heimat für Siri und mehr",
        "description": "Die Dynamic Island soll in iOS 17 noch stärker belebt werden. Warum Apples Marketing angeblich darauf drängt und was das für Siri bedeuten könnte.",
        "url": "https://www.heise.de/news/iOS-17-Dynamic-Island-angeblich-neue-Heimat-fuer-Siri-und-mehr-8963286.html",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/1/4/1/2/5/4/Siri-9260ccfa737539f6.png",
        "publishedAt": "2023-04-14T10:49:00Z",
        "content": "Apple soll Pläne verfolgen, die Display-Erweiterung Dynamic Island in iOS 17 noch intensiver für Benachrichtigungen zu nutzen. Unter anderem soll Sprachassistent Siri mit seiner Anzeige von der unter… [+2175 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "heise online"
        },
        "author": "Stefan Baumgartner",
        "title": "Viel Lärm um nichts? Kommentar zum neuen Trademark-Entwurf der Rust Foundation",
        "description": "Der Entwurf neuer Regeln für die Wortmarke und das Logo von Rust versetzt die Community in Aufregung. Zeit, sie zum Guten anzupassen, meint Stefan Baumgartner.",
        "url": "https://www.heise.de/meinung/Viel-Laerm-um-nichts-Kommentar-zum-neuen-Trademark-Entwurf-der-Rust-Foundation-8951338.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/1/4/0/2/4/8/Rust-6439c58707bfa2f0.jpg",
        "publishedAt": "2023-04-14T07:07:00Z",
        "content": "Am 7. April hat die Rust Foundation einen Entwurf zur Neuformulierung der Regeln für den Einsatz der Wort- und der Bildmarke Rust vorgelegt und das Internet ist in Rage geraten: \"Zu strikt\", \"zu eins… [+8933 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "heise online"
        },
        "author": "Daniel Clören",
        "title": "DJI Inspire 3: Profidrohne mit 8K-Vollformat-Sensor für 15.000 Euro​",
        "description": "DJI bringt mit der Inspire 3 eine neue High-End-Drohne in den Handel – der Preispunkt für den Nachfolger der Inspire 2 liegt bei 15.000 Euro.",
        "url": "https://www.heise.de/news/DJI-Inspire-3-Profidrohne-mit-8K-Vollformat-Sensor-fuer-15-000-Euro-8963290.html",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/1/4/1/2/5/6/KV4-0b1860453413286d.jpg",
        "publishedAt": "2023-04-14T11:01:00Z",
        "content": "Inhaltsverzeichnis\r\nDer chinesische Drohnenhersteller DJI bringt einen Nachfolger der mittlerweile sechs Jahre alten Inspire 2 mit einem schlankeren Design, einer Nachtsicht-FPV-Kamera mit einem Sich… [+7222 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "9to5Mac"
        },
        "author": "Benjamin Mayo",
        "title": "Apple TV+ shows and movies: Everything to watch on Apple TV Plus",
        "description": "Apple TV+ offers exclusive Apple original TV shows and movies in 4K HDR quality. You can watch across all of your screens and pick up where you left off on any device. Apple TV+ costs $6.99 per month. Here’s every Apple original television show and movie avai…",
        "url": "https://9to5mac.com/2023/04/14/apple-tv-plus-tv-shows-movies-guide/",
        "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2019/12/apple-tv-plus.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
        "publishedAt": "2023-04-14T08:15:18Z",
        "content": "Apple TV+ offers exclusive Apple original TV shows and movies in 4K HDR quality. You can watch across all of your screens and pick up where you left off on any device. Apple TV+ costs $6.99 per month… [+62138 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "9to5Mac"
        },
        "author": "Benjamin Mayo",
        "title": "How to watch The Last Thing He Told Me TV show",
        "description": "The Last Thing He Told Me quickly in 2021. It is now adapted as a TV show streaming on Apple TV+, starring Jennifer Garner and Nikolaj Coster-Waldau. Here’s how to watch.\n more…\nThe post How to watch The Last Thing He Told Me TV show appeared first on 9to5Mac.",
        "url": "https://9to5mac.com/2023/04/13/how-to-watch-the-last-thing-he-told-me-tv-show/",
        "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/04/The_Last_Thing_He_Told_Me_Photo_010701-2.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
        "publishedAt": "2023-04-14T04:29:00Z",
        "content": "The Last Thing He Told Me quickly became a bestselling novel in 2021. It is now adapted as a TV show streaming on Apple TV+, starring Jennifer Garner and Nikolaj Coster-Waldau. Here’s how to watch.\r\n… [+1532 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "9to5Mac"
        },
        "author": "Ben Lovejoy",
        "title": "Make Something Wonderful printed books on eBay – and rapidly being removed",
        "description": "When we learned that a limited run of Make Something Wonderful printed books had been produced by the Steve Jobs Archive to gift to a number of Apple and Disney employees, it was only a matter of time before some of them ended up on eBay.\nWe weren’t expecting…",
        "url": "https://9to5mac.com/2023/04/14/make-something-wonderful-printed-books/",
        "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/04/Make-Something-Wonderful-printed-books.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
        "publishedAt": "2023-04-14T12:42:30Z",
        "content": "When we learned that a limited run of Make Something Wonderful printed books had been produced by the Steve Jobs Archive to gift to a number of Apple and Disney employees, it was only a matter of tim… [+2101 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "9to5Mac"
        },
        "author": "Chance Miller",
        "title": "Bob Iger cites Steve Jobs as an inspiration for his decision to return as Disney’s CEO",
        "description": "Bob Iger made the surprise decision to return to his post as Disney’s CEO last year, after parting with the company towards the end of 2021. In a new profile with Time, Iger discussed that decision and pointed to Steve Jobs as one of his inspirations for retu…",
        "url": "https://9to5mac.com/2023/04/14/bob-iger-disney-ceo-steve-jobs/",
        "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/04/disneys-bob-iger-reminisces-about-deal-making-with-steve-jobs@0.5x.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
        "publishedAt": "2023-04-14T17:18:58Z",
        "content": "Bob Iger made the surprise decision to return to his post as Disney’s CEO last year, after parting with the company towards the end of 2021. In a new profile with Time, Iger discussed that decision a… [+2302 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "9to5Mac"
        },
        "author": "Rikka Altland",
        "title": "12.9-inch M2 iPad Pro starts at $1,000 in Friday’s best deals, Twelve South HiRise Pro stand $84, more",
        "description": "Heading into the weekend, all of today’s best deals are now up for grabs and headlined by the best price of the year on Apple’s 12.9-inch M2 iPad Pro from $1,000. MacBook owners can also score the lowest price yet on Twelve South’s new HiRise Pro MacBook stan…",
        "url": "https://9to5mac.com/2023/04/14/m2-ipad-pro-twelve-south-hirise-pro-sale/",
        "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/10/m2-ipad-pro-vs-m1-pro-conclusion.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
        "publishedAt": "2023-04-14T15:48:08Z",
        "content": "Heading into the weekend, all of todays best deals are now up for grabs and headlined by the best price of the year on Apples 12.9-inch M2 iPad Pro from $1,000. MacBook owners can also score the lowe… [+4529 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Android Police"
        },
        "author": "Arol Wright",
        "title": "Winamp is coming to Android, but it's not what you think",
        "description": "Legendary music player turned niche streaming service",
        "url": "https://www.androidpolice.com/winamp-android/",
        "urlToImage": "https://static1.anpoimages.com/wordpress/wp-content/uploads/2023/04/winamp-logo-milkdrop-visualizer.jpg",
        "publishedAt": "2023-04-14T14:48:38Z",
        "content": "There are few brands in software with as rich of a history as Winamp. The program was first launched all the way back in 1997 with a no-frills, yet highly customizable interface — it was definitely o… [+2284 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "MarketWatch"
        },
        "author": "Steve Goldstein",
        "title": "Need to Know: Bank earnings season is here. This popular value fund just bought Kroger and a regional lender.",
        "description": "Bank earnings are here. Why one value fund is snapping up a lender whose shares have been battered this year.",
        "url": "https://www.marketwatch.com/story/bank-earnings-season-is-here-this-popular-value-fund-just-bought-kroger-and-a-regional-lender-17ad7fc9",
        "urlToImage": "https://images.mktw.net/im-763582/social",
        "publishedAt": "2023-04-14T10:27:00Z",
        "content": "Bank earnings season has arrived, and theres a lot more questions than usual.Results will be parsed not just on whether the U.S. economy is about to head into a recession the latest data hasnt been g… [+5360 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "AppleInsider"
        },
        "author": "news@appleinsider.com (William Gallagher)",
        "title": "You can now get Manga webtoons in Apple Books -- but only in Japan",
        "description": "Readers in Japan can now buy vertical reading Manga, or webtoons, from a new Apple Books section which includes titles exclusive to Apple.Apple is continuing to expand its Apple Books offering, following up its controversial AI audiobooks feature with a poten…",
        "url": "https://appleinsider.com/articles/23/04/14/you-can-now-get-manga-webtoons-in-apple-books----but-only-in-japan",
        "urlToImage": "https://photos5.appleinsider.com/gallery/53967-108564-000-lead-Apple-Books-xl.jpg",
        "publishedAt": "2023-04-14T10:31:58Z",
        "content": "AppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nReaders in Japan can now buy vertical reading Manga, or webtoons, from a new Apple Books section which incl… [+1078 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "AppleInsider"
        },
        "author": "news@appleinsider.com (William Gallagher)",
        "title": "Bob Iger's says his return to Disney was inspired by Steve Jobs' Apple recovery",
        "description": "As Disney lays off employees and cuts costs, CEO Bob Iger says be believes that it was watching Steve Jobs's return to Apple that is helping him manage the changes for the best.Steve Jobs (left) and Bob IgerJust as Steve Jobs left Apple and later came back to…",
        "url": "https://appleinsider.com/articles/23/04/14/bob-igers-says-his-return-to-disney-was-inspired-by-steve-jobs-apple-recovery",
        "urlToImage": "https://photos5.appleinsider.com/gallery/53969-108566-000-lead-Steve-Jobs-and-Bob-Iger-xl.jpg",
        "publishedAt": "2023-04-14T11:22:35Z",
        "content": "Steve Jobs (left) and Bob Iger\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nAs Disney lays off employees and cuts costs, CEO Bob Iger says be believes … [+2589 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "AppleInsider"
        },
        "author": "news@appleinsider.com (Wesley Hilliard)",
        "title": "Apple Savings is soon, iOS 17 interactive Widgets, 'Make Something Wonderful'",
        "description": "Alleged details of iOS 17, the launch of Apple's long-awaited savings account, and the release of the new Steve Jobs book \"Make Something Wonderful,\" and more, all on this week's episode of the AppleInsider Podcast.iOS 17 will be announced in JuneIt's been a …",
        "url": "https://appleinsider.com/articles/23/04/14/apple-savings-is-soon-ios-17-interactive-widgets-make-something-wonderful",
        "urlToImage": "https://photos5.appleinsider.com/gallery/53963-108545-iOS-17-Icon-xl.jpg",
        "publishedAt": "2023-04-14T12:35:08Z",
        "content": "iOS 17 will be announced in June\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nAlleged details of iOS 17, the launch of Apple's long-awaited savings acc… [+2131 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "AppleInsider"
        },
        "author": "news@appleinsider.com (Jess Pingrey)",
        "title": "Daily Deals: iPhone 12 & 13 from $280, $250 off iPhone 14 Pro Max, 14\" MacBooks from $1,390, more",
        "description": "Today's top deals include 40% off a 2021 Amazon Fire HD 10 tablet, 27% off an Anker USB outlet extender, 82% off an ASUS mid-tower computer case, 28% off Beats Fit Pro earbuds, and $600 off an MSI Creator M16 laptop.Get iPhone 12 and 13 Models from $280The Ap…",
        "url": "https://appleinsider.com/articles/23/04/14/daily-deals-iphone-12-13-from-280-250-off-iphone-14-pro-max-14-macbooks-from-1390-more",
        "urlToImage": "https://photos5.appleinsider.com/gallery/53964-108546-daily-deals-april-14-xl.jpg",
        "publishedAt": "2023-04-14T14:08:05Z",
        "content": "Get iPhone 12 and 13 Models from $280\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nToday's top deals include 40% off a 2021 Amazon Fire HD 10 tablet, 2… [+2753 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "AppleInsider"
        },
        "author": "news@appleinsider.com (William Gallagher)",
        "title": "Stephen Curry bio will debut simultaneously in theaters and on Apple TV+ soon",
        "description": "Apple TV+ has announced a simultaneous theatrical and streaming release for its \"Stephen Curry: Underrated\" sports documentary about the basketball star.First announced in October 2022, the film documents Curry's unique playing style, which saw him rocket tom…",
        "url": "https://appleinsider.com/articles/23/04/14/stephen-curry-bio-will-debut-simultaneously-in-theaters-and-on-apple-tv-soon",
        "urlToImage": "https://photos5.appleinsider.com/gallery/53968-108565-000-lead-Stephen-Curry-xl.jpg",
        "publishedAt": "2023-04-14T10:54:49Z",
        "content": "AppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nApple TV+ has announced a simultaneous theatrical and streaming release for its \"Stephen Curry: Underrated\"… [+963 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "AppleInsider"
        },
        "author": "news@appleinsider.com (Charles Martin)",
        "title": "Drop ALT mechanical keyboard review: good key travel at a cost",
        "description": "The Drop ALT Light-up mechanical keyboard offers users nearly total control of every aspect of the typing experience, but is overkill for those more interested in old-school typing.The ALT keyboard comes in a matte black or this matte gray option.Some of the …",
        "url": "https://appleinsider.com/articles/23/04/14/drop-alt-mechanical-keyboard-review-good-key-travel-at-a-cost",
        "urlToImage": "https://photos5.appleinsider.com/gallery/53878-108398-Alternate-ALT-color-xl.jpg",
        "publishedAt": "2023-04-14T12:05:09Z",
        "content": "The ALT keyboard comes in a matte black or this matte gray option.\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nThe Drop ALT Light-up mechanical keyboa… [+7648 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Elespanol.com"
        },
        "author": "Manuel Ramírez",
        "title": "Los mejores hacks para usar ChatGPT en tu móvil iPhone o Android",
        "description": "ChatGPT se sumerge en nuestras vidas al igual que lo puede hacer a través de nuestros móviles con esta serie de hacks que no dejan de ser apps para así llevar la IA de OpenAI a un móvil iPhone o un mismo Android.",
        "url": "https://www.elespanol.com/elandroidelibre/tutoriales/20230414/mejores-hacks-usar-chatgpt-movil-iphone-android/756174480_0.html",
        "urlToImage": "https://s1.eestatic.com/2023/04/14/elandroidelibre/tutoriales/756184640_232416024_1200x630.jpg",
        "publishedAt": "2023-04-14T11:11:00Z",
        "content": "Con todas las opciones disponibles que tenemos para acceder a ChatGPT desde la web o las apps oficiales de Microsoft, hay otras vías o hacks para tener a esta IA en nuestro mismo móvil Android o iPho… [+3939 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Gizmodo.jp"
        },
        "author": "メディアジーンメディアコマース",
        "title": "ながーいケーブルは持たなくて大丈夫！AnkerのApple Watch用ケーブルレス充電器が15%オフ【楽天お買い物マラソン】",
        "description": "楽天市場では、複数ショップでの買い回りで還元ポイントがアップする｢お買い物マラソン｣が4月16日（日）1:59まで開催中。\n現在、体組成計「Eufy Smart Scale P2 Pro」が25％オフ、ケーブルレスのApple Watch用充電器が15％オフなど、お得なAnker製品が多数登場しています。",
        "url": "https://www.gizmodo.jp/2023/04/rakuten-sale-2023-0414-1-1.html",
        "urlToImage": "https://media.loom-app.com/gizmodo/dist/images/2023/04/14/GIZ.jpg?w=1280&h=630&f=jpg",
        "publishedAt": "2023-04-14T08:45:00Z",
        "content": "4161:59\r\nEufy Smart Scale P2 Pro25Apple Watch15Anker\r\n AnkerApple Watch\r\nAnkerApple WatchPortable Magnetic Charger for Apple Watch15\r\nPCUSB-C/USB-AAppleWatchMFi\r\n25% Anker\r\nAnkerEufy Smart Scale P2 P… [+221 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "CNET"
        },
        "author": "Zachary McAuliffe",
        "title": "iOS 16.5 Beta 2: New Features Your iPhone Could Get Soon - CNET",
        "description": "If you don't want to wait, you can sign up to become a beta tester and try the latest features now.",
        "url": "https://www.cnet.com/tech/services-and-software/ios-16-5-beta-2-new-features-your-iphone-could-get-soon/",
        "urlToImage": "https://www.cnet.com/a/img/resize/607291ee50c0fdce122e816f9d17509b6c041bf3/hub/2023/04/14/81832586-f2a2-4fce-810d-c004e3de23bd/gettyimages-1235707352.jpg?auto=webp&fit=crop&height=630&width=1200",
        "publishedAt": "2023-04-14T16:30:02Z",
        "content": "Apple released the second beta version of iOS 16.5 less than a week after it pushed out an important security update with iOS 16.4.1 on April 7. Both iOS 16.5 beta versions brought smaller, more incr… [+1851 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Yanko Design"
        },
        "author": "Tim Stevens",
        "title": "2023 Land Rover Defender 130 Review",
        "description": "2023 Land Rover Defender 130 ReviewAdventures are better with friends. The grandest of scenery looks finer when you have someone to share it with, the most grueling of hikes feels...",
        "url": "https://www.yankodesign.com/2023/04/14/2023-land-rover-defender-130-review/",
        "urlToImage": "https://www.yankodesign.com/images/design_news/2023/04/2023-land-rover-defender-130-review/2023_Land-Rover_Defender-130_Review_yankodesign_hero.jpg",
        "publishedAt": "2023-04-14T14:10:05Z",
        "content": "PROS:\r\n<ul><li>Clean, stately looks</li><li>Stellar off-road performance</li><li>Seating for eight</li></ul>\r\nCONS:\r\n<ul><li>Thirsty</li><li>Lots of wind noise</li><li>Optional adaptive cruise</li></… [+9383 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Uncrate.com"
        },
        "author": "Uncrate",
        "title": "DJI Inspire 3 Camera Drone",
        "description": "Arriving seven years after the release of the Inspire 2, DJI's Inspire 3 is a serious upgrade to its pro-level camera drone. The all-new design is built around the X9-8K full-frame three-axis gimbal camera, capable of capturing 8K/75fps Apple ProRes...",
        "url": "https://uncrate.com/dji-inspire-3-camera-drone/",
        "urlToImage": "https://uncrate.com/p/2023/04/dji-inspire-3.jpg",
        "publishedAt": "2023-04-14T15:00:32Z",
        "content": "An effective body wash cleanses the skin, but Jack Henry's Cleanse+ goes beyond the call of duty. Formulated with organic aloe vera, sea kelp, and dead sea salt, the gel is loaded with superfood amin… [+433 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Uncrate.com"
        },
        "author": "Uncrate",
        "title": "2024 Acura Integra Type S",
        "description": "After a 17-year absence, the Integra Type S is back - and the most powerful Integra ever. The Type S gets the 2-liter turbocharged four from the Civic Type R, massaged to make 320 horsepower, with a real six-speed manual...",
        "url": "https://uncrate.com/2024-acura-integra-type-s/",
        "urlToImage": "https://uncrate.com/p/2023/04/acura-integra-type-s-1.jpg",
        "publishedAt": "2023-04-14T16:00:00Z",
        "content": "Huel is releasing its first supplement to add to its lineup of nutrient dense meals. Enter, Huel Daily Greens. The super greens powder provides the ideal blend of 91 vitamins, minerals, and wholefood… [+518 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "AnandTech"
        },
        "author": "Zhiye Liu",
        "title": "Asus Announces ROG Phone 7 & ROG Phone 7 Ultimate Gaming Smartphones",
        "description": "Many gaming-eccentric smartphones may already be on the market, but Asus wants that throne all for itself. The company recently announced its latest ROG Phone 7 series of high-end gaming smartphones during their \"For Those Who Dare\" virtual event. The ROG Pho…",
        "url": "https://www.anandtech.com/show/18814/asus-announced-rog-phone-7-phone-7-ultimate",
        "urlToImage": "https://images.anandtech.com/doci/18814/2023-2-8-0210_1200x628_WW_crop_678x452.jpg",
        "publishedAt": "2023-04-14T13:00:00Z",
        "content": "Many gaming-eccentric smartphones may already be on the market, but Asus wants that throne all for itself. The company recently announced its latest ROG Phone 7 series of high-end gaming smartphones … [+8668 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Journal du geek"
        },
        "author": "Tristan",
        "title": "Les batteries des iPhone vont changer radicalement en 2025",
        "description": "Apple veut faire un geste pour la planète et arrêter d'extraire du cobalt pour la production de ses batteries. \nLes batteries des iPhone vont changer radicalement en 2025",
        "url": "https://www.journaldugeek.com/2023/04/14/les-batteries-des-iphone-vont-changer-radicalement-en-2025/",
        "urlToImage": "https://www.journaldugeek.com/content/uploads/2022/10/iphone-charge.jpg",
        "publishedAt": "2023-04-14T12:00:09Z",
        "content": "Apple veut faire un geste pour la planète et arrêter d'extraire du cobalt pour la production de ses batteries.Apple vient dannoncer un changement de taille dans la confection des prochains iPhone. Da… [+2521 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Journal du geek"
        },
        "author": "Chris Klippel",
        "title": "L’iPad mini 6 s’offre une belle promotion grâce à ce code",
        "description": "Pour bien finir la semaine, Rakuten vous propose une double promotion sur l'iPad mini 6 vous permettant d'économiser -13%. \nL’iPad mini 6 s’offre une belle promotion grâce à ce code",
        "url": "https://www.journaldugeek.com/bon-plan/lipad-mini-6-soffre-une-belle-promotion-grace-a-ce-code/",
        "urlToImage": "https://www.journaldugeek.com/content/uploads/2023/04/ipad-mini-6.jpg",
        "publishedAt": "2023-04-14T15:46:03Z",
        "content": "Pour bien finir la semaine, Rakuten vous propose une double promotion sur l'iPad mini 6 vous permettant d'économiser -13%.Pour finir la semaine en beauté, Rakuten vous propose une double promotion su… [+3557 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Journal du geek"
        },
        "author": "Anh Phan",
        "title": "Test Huawei FreeBuds 5, deux gouttes dans un océan de bruits",
        "description": "Annoncé il y a une petite semaine, les Huawei FreeBuds 5 seront disponibles la semaine prochaine. On a passé une dizaine de jours avec et voici notre avis sur les nouvelles gouttes de Huawei.\nTest Huawei FreeBuds 5, deux gouttes dans un océan de bruits",
        "url": "https://www.journaldugeek.com/test/test-huawei-freebuds-5-deux-gouttes-dans-un-ocean-de-bruits/",
        "urlToImage": "https://www.journaldugeek.com/content/uploads/2023/04/huawei-freebuds-5-live-03.jpg",
        "publishedAt": "2023-04-14T09:00:17Z",
        "content": "Annoncé il y a une petite semaine, les Huawei FreeBuds 5 seront disponibles la semaine prochaine. On a passé une dizaine de jours avec et voici notre avis sur les nouvelles gouttes de Huawei.Alors qu… [+6533 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Applesfera.com"
        },
        "author": "Jesús Quesada",
        "title": "Rebajado uno de los MacBook más potentes de Apple, descuentos en iPhone y Apple Watch de última generación y más: Cazando Gangas",
        "description": "Como cada viernes, volvemos con la sección Cazando Gangas, el espacio de Applesfera dedicado a recopilar las mejores ofertas de dispositivos de Apple. Ya sea porque buscas un iPhone, Apple Watch, iPad, Mac u otros dispositivos de la compañía, aquí encontrarás…",
        "url": "https://www.applesfera.com/seleccion/rebajado-uno-macbook-potentes-apple-descuentos-iphone-apple-watch-ultima-generacion-cazando-gangas",
        "urlToImage": "https://i.blogs.es/68664c/mbp-aw-cazando-gangas/840_560.jpeg",
        "publishedAt": "2023-04-14T06:01:24Z",
        "content": "Como cada viernes, volvemos con la sección Cazando Gangas, el espacio de Applesfera dedicado a recopilar las mejores ofertas de dispositivos de Apple. Ya sea porque buscas un iPhone, Apple Watch, iPa… [+6310 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Applesfera.com"
        },
        "author": "Fran Bouzas",
        "title": "Un iPhone 100% reciclado: Apple da pasos hacia un plan único en la industria",
        "description": "Apple es una empresa que siempre se ha preocupado por el medioambiente. Lo hace en todos aquellos aspectos posibles, desde el diseño del Apple Park hasta la fabricación de sus productos. Uno de sus “retos” que más promocionan es el de alcanzar la neutralidad …",
        "url": "https://www.applesfera.com/apple-1/iphone-100-reciclado-apple-da-pasos-plan-unico-industria",
        "urlToImage": "https://i.blogs.es/5d27e9/apple-recycled-materials-technology-team-01/840_560.jpeg",
        "publishedAt": "2023-04-14T08:04:24Z",
        "content": "Apple es una empresa que siempre se ha preocupado por el medioambiente. Lo hace en todos aquellos aspectos posibles, desde el diseño del Apple Park hasta la fabricación de sus productos. Uno de sus r… [+1694 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Applesfera.com"
        },
        "author": "Fran Bouzas",
        "title": "Si te ofrecen 10.000 euros a cambio de no comprar un iPhone nunca más, ¿aceptarías?: Warren Buffett sabe la respuesta",
        "description": "Warren Buffet es, sin duda, uno de los inversores más importantes de toda la historia. Su fondo se llama Berkshire Hathaway Inc, que actualmente cuenta con unos activos por valor de 686 billones de dólares. Posee el 5,7% de Apple, el 12,9% de Bank of America,…",
        "url": "https://www.applesfera.com/curiosidades/te-ofrecen-10-000-euros-a-cambio-no-comprar-iphone-nunca-aceptarias-warren-buffett-sabe-respuesta",
        "urlToImage": "https://i.blogs.es/6db19b/portada-iphone/840_560.jpeg",
        "publishedAt": "2023-04-14T14:02:40Z",
        "content": "Warren Buffet es, sin duda, uno de los inversores más importantes de toda la historia. Su fondo se llama Berkshire Hathaway Inc, que actualmente cuenta con unos activos por valor de 686 billones de d… [+4697 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Applesfera.com"
        },
        "author": "Miguel López",
        "title": "La subida de precio de HBO Max me da igual: esta plataforma ofrece más de 12.000 películas gratis y ni sabía que existía",
        "description": "La transformación de HBO Max a Max implicará una subida de precios de la que estamos pendientes de ver cómo se traduce en España. Ya estamos escarmentados después de lo que ha ocurrido con Netflix, así que no dudo demasiado en que habrá personas que también b…",
        "url": "https://www.applesfera.com/general/subida-precio-hbo-max-me-da-igual-esta-plataforma-ofrece-12-000-peliculas-gratis-sabia-que-existia",
        "urlToImage": "https://i.blogs.es/0e1d3e/captura-de-pantalla-2023-04-14-a-las-12.42.32/840_560.jpeg",
        "publishedAt": "2023-04-14T12:01:27Z",
        "content": "La transformación de HBO Max a Max implicará una subida de precios de la que estamos pendientes de ver cómo se traduce en España. Ya estamos escarmentados después de lo que ha ocurrido con Netflix, a… [+1815 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Applesfera.com"
        },
        "author": "Miguel López",
        "title": "Spotify lanza su novedad más esperada en iOS 16: así es el widget para controlar la app sin desbloquear la pantalla de tu iPhone",
        "description": "Si quieres que tu servicio musical se integre a la perfección con iOS, la elección es clara: Apple Music. Spotify también tiene sus argumentos para destacar, pero sus funciones en los iPhone no son uno de ellos. Sobre eso tenemos buenas noticias, porque los d…",
        "url": "https://www.applesfera.com/aplicaciones-ios-1/spotify-lanza-su-novedad-esperada-ios-16-asi-widget-para-controlar-app-desbloquear-pantalla-tu-iphone",
        "urlToImage": "https://i.blogs.es/2ddc7b/spotify-ios-16-widget/840_560.jpeg",
        "publishedAt": "2023-04-14T11:01:26Z",
        "content": "Si quieres que tu servicio musical se integre a la perfección con iOS, la elección es clara: Apple Music. Spotify también tiene sus argumentos para destacar, pero sus funciones en los iPhone no son u… [+1619 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Applesfera.com"
        },
        "author": "Pedro Aznar",
        "title": "\"Mi cuñado necesitaba una solución en iOS y no existía, así que la inventé\": entrevistamos a Diego Cid, creador de Tr@mite. La app que nos ayuda con la Renta y otros cientos de trámites con la Administración",
        "description": "Diego Cid es natural de Ourense y tiene experiencia trabajando con la administración pública, ya que hace unos años trabajó para Indra. En su actual puesto en Imatia sigue manteniendo proyectos con ellos y eso le dio la perspectiva necesaria para solucionar u…",
        "url": "https://www.applesfera.com/entrevistas/mi-cunado-necesitaba-solucion-ios-no-existia-asi-que-invente-entrevistamos-a-diego-cid-creador-tr-mite-app-que-nos-ayuda-renta-otros-cientos-tramites-administracion",
        "urlToImage": "https://i.blogs.es/c87df9/tramite-app-ios-entrevista-agencia-tributaria-aps/840_560.jpeg",
        "publishedAt": "2023-04-14T09:00:07Z",
        "content": "Diego Cid es natural de Ourense y tiene experiencia trabajando con la administración pública, ya que hace unos años trabajó para Indra. En su actual puesto en Imatia sigue manteniendo proyectos con e… [+4638 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Applesfera.com"
        },
        "author": "Miguel López",
        "title": "¿Quieres tener ChatGPT gratis en tu Mac? Te contamos cómo instalar la última versión de esta IA",
        "description": "Puede que ChatGPT se las tenga que ver con las leyes europeas dentro de poco, pero mientras eso no sucede los usuarios y las empresas siguen dando con modos de poder facilitar el uso de esta inteligencia artificial. Uno de esos modos es GPT4all, una versión q…",
        "url": "https://www.applesfera.com/aplicaciones-os-x-1/quieres-tener-chatgpt-gratis-tu-mac-te-contamos-como-instalar-ultima-version-esta-ia",
        "urlToImage": "https://i.blogs.es/ced5d3/gpt4all/840_560.jpeg",
        "publishedAt": "2023-04-14T17:01:28Z",
        "content": "Puede que ChatGPT se las tenga que ver con las leyes europeas dentro de poco, pero mientras eso no sucede los usuarios y las empresas siguen dando con modos de poder facilitar el uso de esta intelige… [+1691 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "MakeUseOf"
        },
        "author": "Bolanle Abiodun",
        "title": "How to Use the FIND Function in Excel",
        "description": "Do you want to quickly find specific text in your Excel sheet? Learn how to use the FIND function to locate and extract data in a snap!",
        "url": "https://www.makeuseof.com/use-find-function-excel/",
        "urlToImage": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/02/laptop-on-desk-with-excel-logo.jpg",
        "publishedAt": "2023-04-14T16:30:16Z",
        "content": "Looking for a specific piece of information in a large Excel spreadsheet can be a daunting task, especially if you have to scroll through rows and columns of data. Fortunately, Excel has a powerful t… [+5860 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "MakeUseOf"
        },
        "author": "Alvin Wanjala",
        "title": "Which Fitbit Models Have Always-On Displays?",
        "description": "If an always-on display is a make-or-break feature for your smartwatch, check out which Fitbit models support it before you make a purchase.",
        "url": "https://www.makeuseof.com/which-fitbit-models-have-always-on-displays/",
        "urlToImage": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2022/09/Fitbit-sense-2-smartwatch.jpg",
        "publishedAt": "2023-04-14T16:46:17Z",
        "content": "Fitbit has several models, from the kid-friendly Ace series to devices targeted at adults. With different prices, you can find a Fitbit whether you want a fitness tracker or a full-fledged smartwatch… [+4175 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Nature.com"
        },
        "author": "Benjamin Thompson",
        "title": "How to battle misinformation with Sander van der Linden",
        "description": "Psychologist Sander van der Linden talks to Nature about the science of misinformation.",
        "url": "https://www.nature.com/articles/d41586-023-00899-0",
        "urlToImage": "https://media.nature.com/lw1024/magazine-assets/d41586-023-00899-0/d41586-023-00899-0_25214642.jpg",
        "publishedAt": "2023-04-14T00:00:00Z",
        "content": "Psychologist Sander van der Linden talks to Nature about the science of misinformation.\r\nYour browser does not support the audio element.\r\nIn the latest episode of Nature hits the books, psychologist… [+654 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Presse-citron"
        },
        "author": "Romain Vitt",
        "title": "Apple TV+ arrive sur Canal+ : comment en profiter et combien ça coûte ?",
        "description": "C'est historique ! Canal+ s'associe à Apple pour diffuser les contenus Apple TV+. Comment en profiter et combien ça coûte ? On vous dit tout.",
        "url": "https://www.presse-citron.net/apple-tv-arrive-sur-canal-comment-en-profiter-et-combien-ca-coute/",
        "urlToImage": "https://www.presse-citron.net/app/uploads/2021/12/setup-apple-tv-4k.jpg",
        "publishedAt": "2023-04-14T07:01:13Z",
        "content": "<ul><li>Canal+ devient le premier partenaire local dApple TV+</li><li>Les abonnés Canal+ pourront profiter des séries et films originaux dApple TV+ dès le 20 avril</li><li>Canal+ pourra également dif… [+2597 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Presse-citron"
        },
        "author": "Setra",
        "title": "La recette des batteries iPhone change en 2025",
        "description": "Apple s’engage à utiliser 100 % de cobalt recyclé pour ses batteries à partir de 2025. La firme va aussi utiliser plus de terres rares et d’or recyclés, et complètement éliminer le plastique de ses emballages.",
        "url": "https://www.presse-citron.net/la-recette-des-batteries-iphone-change-en-2025/",
        "urlToImage": "https://www.presse-citron.net/app/uploads/2023/04/Batterie-iPhone-demontage-composants-recyclage.jpg",
        "publishedAt": "2023-04-14T07:30:10Z",
        "content": "<ul><li>Apple annonce quà partir de 2025, ses batteries seront à 100 % en cobalt recyclé</li><li>Des engagements similaires ont été pris concernant les terres rares, lor et létain</li><li>En plus de … [+4206 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Presse-citron"
        },
        "author": "Setra",
        "title": "Une étude révèle qui est réellement accro à l’iPhone",
        "description": "Les 18 - 24 ans sont les plus accros à l’iPhone ? Une nouvelle étude met en doute les a priori.",
        "url": "https://www.presse-citron.net/une-etude-revele-qui-est-reellement-accro-a-liphone/",
        "urlToImage": "https://www.presse-citron.net/app/uploads/2022/12/test-apple-watch-ultra-iphone-louise.jpg",
        "publishedAt": "2023-04-14T12:15:18Z",
        "content": "<ul><li>CIRP a réalisé une étude auprès de clients dApple</li><li>Et daprès ses conclusions, les 18 – 24 ans seraient les moins pressés de remplacer un iPhone (cassé, perdu ou volé)</li><li>Cela pour… [+2255 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Golem.de"
        },
        "author": "Moritz Tremmel",
        "title": "Streamingdienste: Universal fordert Spotify auf, Lieder vor KI zu schützen",
        "description": "Die Universal Music Group will Musik bei Streamingdiensten wie Spotify und Apple geschützt wissen. Auch gegen KI-Musik geht das Label demanch vor. (KI, Urheberrecht)",
        "url": "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fstreamingdienste-universal-fordert-spotify-auf-lieder-vor-ki-zu-schuetzen-2304-173431.html&referer=https%3A%2F%2Ft.co%2F1e3eb45143",
        "urlToImage": null,
        "publishedAt": "2023-04-14T09:03:02Z",
        "content": "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Pitchfork"
        },
        "author": "Jazz Monroe, Evan Minsker, Madison Bloom",
        "title": "10 New Albums You Should Listen to Now: Feist, Kara Jackson, Angel Olsen, and More",
        "description": "Stream new releases from Feist, Kara Jackson, Angel Olsen, Fenne Lily, Kiko el Crazy, Terry, MC Yallah, Shawny Binladen, Jesus Piece, and Natural Information Society",
        "url": "https://pitchfork.com/news/10-new-albums-you-should-listen-to-now-feist-kara-jackson-angel-olsen/",
        "urlToImage": "https://media.pitchfork.com/photos/6436cedc47e9f49f0961a41b/16:9/w_1280,c_limit/Feist.jpg",
        "publishedAt": "2023-04-14T12:41:01Z",
        "content": "With so much good music being released all the time, it can be hard to determine what to listen to first. Every week, Pitchfork offers a run-down of significant new releases available on streaming se… [+1253 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "The A.V. Club"
        },
        "author": "Saloni Gajjar",
        "title": "6 things you have to watch on TV this weekend",
        "description": "Welcome to the weekend edition of What’s On. Here are the big things happening on TV from Friday, April 14, to Sunday, April 16. All times are Eastern. [Note: The weekly What’s On will publish on Sundays.]Read more...",
        "url": "https://www.avclub.com/whats-on-tv-april-14-to-16-barry-marvelous-mrs-maisel-1850320763",
        "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/00334489a5b7b55424b0d17bd278b016.png",
        "publishedAt": "2023-04-14T11:00:00Z",
        "content": "Welcome to the weekend edition of Whats On. Here are the big things happening on TV from Friday, April 14, to Sunday, April 16. All times are Eastern. [Note: The weekly Whats On will publish on Sunda… [+3731 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Mental Floss"
        },
        "author": "Ellen Gutoskey",
        "title": "This Stunning 4K Video Shows What New York City Looked Like in 1911",
        "description": "The city that never sleeps had a lot more hats and a lot less traffic in the early 20th century.",
        "url": "https://www.mentalfloss.com/posts/video-new-york-city-1911",
        "urlToImage": "https://images2.minutemediacdn.com/image/upload/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/_4k__60_fps__a_trip_through_new_york_city_in_1911-21e76aae89efee88de1416914b013de4.jpg",
        "publishedAt": "2023-04-14T17:00:00Z",
        "content": "In the early 20th century, a Swedish production company called Svenska Biografteatern dispatched a camera crew to capture footage of five hotspots in Europe and North America: Niagara Falls, Paris, M… [+1693 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Ritholtz.com"
        },
        "author": "Barry Ritholtz",
        "title": "10 Friday AM Reads",
        "description": "My end-of-week morning train WFH reads: • What Happened When the IRS Got Audited: Obsolete software. Archaic code. Tech so old it makes the typical member of Congress look young. The IRS has an IT problem. (Wall Street Journal) • A beginner’s guide to account…",
        "url": "https://ritholtz.com/2023/04/10-friday-am-reads-403/",
        "urlToImage": "https://ritholtz.com/wp-content/uploads/2023/04/supercoreinflation.png",
        "publishedAt": "2023-04-14T10:55:00Z",
        "content": "What Happened When the IRS Got Audited: Obsolete software. Archaic code. Tech so old it makes the typical member of Congress look young. The IRS has an IT problem. (Wall Street Journal)\r\nA beginners … [+3468 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Xataka Android"
        },
        "author": "Álvaro García M.",
        "title": "Todo lo que sabemos de los Google Pixel 8, los futuros móviles de referencia para Android",
        "description": "La serie de los Pixel 7 y Pixel 7 Pro de Google está a punto de cerrarse con la incorporación del Pixel 7a. Sin embargo, buena parte de las miradas están ya puestas en la próxima generación de gama alta de Google. Y aunque la empresa de Mountain View no los h…",
        "url": "https://www.xatakandroid.com/nuevo/nuevo-google-pixel-8-informacion",
        "urlToImage": "https://i.blogs.es/8957af/google-pixel-8-renders/840_560.jpeg",
        "publishedAt": "2023-04-14T10:01:26Z",
        "content": "La serie de los Pixel 7 y Pixel 7 Pro de Google está a punto de cerrarse con la incorporación del Pixel 7a. Sin embargo, buena parte de las miradas están ya puestas en la próxima generación de gama a… [+5714 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "HYPEBEAST"
        },
        "author": "info@hypebeast.com (Hypebeast)",
        "title": "Universal Music Group Is Calling on Streaming Services to Prevent AI Companies From Using Copyrighted Music",
        "description": "Universal Music Group (UMG), who controls approximately a third of the global music market, has asked streaming services to obstruct AI companies from creating \"new\" music by using copyrighted music.As stated by Variety, the major label's move was confirmed b…",
        "url": "https://hypebeast.com/2023/4/universal-music-asks-streamers-spotify-apple-music-stop-ai-using-copyrighted-songs",
        "urlToImage": "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F04%2Funiversal-music-asks-streamers-spotify-apple-music-stop-ai-using-copyrighted-songs-tw.jpg?w=960&cbr=1&q=90&fit=max",
        "publishedAt": "2023-04-14T07:56:51Z",
        "content": "Universal Music Group (UMG), who controls approximately a third of the global music market, has asked streaming services to obstruct AI companies from creating “new” music by using copyrighted music.… [+1283 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Presse-citron"
        },
        "author": "RPB",
        "title": "Universal Music déclare la guerre aux IA, mais a-t-il une chance ?",
        "description": "Il semble que l'argument juridique de Universal va se heurter à un énorme bug",
        "url": "https://www.presse-citron.net/universal-music-declare-la-guerre-aux-ia-mais-a-t-il-une-chance/",
        "urlToImage": "https://www.presse-citron.net/app/uploads/2023/04/jolene-holly-plus.jpg",
        "publishedAt": "2023-04-14T17:00:56Z",
        "content": "<ul><li>Universal Music Group (UMG) se lance dans une guerre contre les chansons générées par des IA</li><li>Très inquiet des transformations causées par d’autres IA comme ChatGPT, le label exige des… [+3318 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Presse-citron"
        },
        "author": "Romain Vitt",
        "title": "iPhone : de fanboy à (Warren) Buffett sans volonté",
        "description": "Warren Buffett adore son iPhone. Mais pas au point de ruiner son business.",
        "url": "https://www.presse-citron.net/?p=548718",
        "urlToImage": "https://www.presse-citron.net/app/uploads/2022/09/test-iphone-14-avis.jpg",
        "publishedAt": "2023-04-14T12:25:39Z",
        "content": "<ul><li>L’investisseur milliardaire estime que les utilisateurs d’iPhone ne vendraient pas leur appareil pour 10 000 dollars</li><li>Il loue le travail de Tim Cook à la tête d’Apple et la fidélité de… [+3029 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Presse-citron"
        },
        "author": "Setra",
        "title": "Quel est ce curieux pendentif Xiaomi ?",
        "description": "Xiaomi fait le teasing de son prochain accessoire connecté, et ce n’est pas ce que vous croyez.",
        "url": "https://www.presse-citron.net/quel-est-ce-curieux-pendentif-xiaomi/",
        "urlToImage": "https://www.presse-citron.net/app/uploads/2023/04/bracelet-Xiaomi.jpg",
        "publishedAt": "2023-04-14T13:00:16Z",
        "content": "<ul><li>Le prochain bracelet connecté de Xiaomi pourra aussi être porté comme un pendentif, ou sur une chaussure</li><li>Lei Jun, le PDG de lentreprise, a publié quelques images sur les réseaux socia… [+2632 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "HYPEBEAST"
        },
        "author": "info@hypebeast.com (Hypebeast)",
        "title": "Best New Tracks: Post Malone, SZA x Doja Cat and More",
        "description": "As the week in music comes to a close, HYPEBEAST has rounded up the best projects for the latest installment of Best New Tracks.This week’s lineup is led by Post Malone and SZA x Doja Cat, who released the tracks \"Chemicals\" and the remix of \"Kill Bill\" respe…",
        "url": "https://hypebeast.com/2023/4/best-new-tracks-post-malone-sza-doja-cat",
        "urlToImage": "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F04%2Ftw-best-new-tracks-post-malone-sza-doja-cat.jpg?w=960&cbr=1&q=90&fit=max",
        "publishedAt": "2023-04-14T09:43:17Z",
        "content": "As the week in music comes to a close, HYPEBEAST has rounded up the best projects for the latest installment ofBest New Tracks.\r\nThis weeks lineup is led by Post Malone and SZA x Doja Cat, who releas… [+3830 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "HYPEBEAST"
        },
        "author": "info@hypebeast.com (Hypebeast)",
        "title": "A24 Announces Ti West's 'X' and 'Pearl' Follow-Up Film 'MaXXXine' Has Currently Begun Filming",
        "description": "Following the success of A24 horror sequels, X and Pearl, the studio had recently announced the arrival of the upcoming third film of Ti West trilogy.Having announced that Halsye and Moses Sumney are to star in the upcoming A24 horror film, the studio has now…",
        "url": "https://hypebeast.com/2023/4/a24-ti-west-x-pearl-follow-up-film-maxxxine-begins-filming-announcement",
        "urlToImage": "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F04%2Fa24-ti-west-x-pearl-follow-up-film-maxxxine-begins-filming-announcement-tw.jpg?w=960&cbr=1&q=90&fit=max",
        "publishedAt": "2023-04-14T08:19:11Z",
        "content": "Following the success of A24 horror sequels, X and Pearl, the studio had recently announced the arrival of the upcoming third film of Ti West trilogy.\r\nHaving announced that Halsye and Moses Sumney a… [+1410 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "BGR"
        },
        "author": "José Adorno",
        "title": "Apple is working on iOS 16.6 for iPhone ahead of iOS 17",
        "description": "Apple is currently testing iOS 16.5, but those thinking this would be the last major software update before iOS 17 arrives can wait way more. …\nThe post Apple is working on iOS 16.6 for iPhone ahead of iOS 17 appeared first on BGR.",
        "url": "https://bgr.com/tech/apple-is-working-on-ios-16-6-for-iphone-ahead-of-ios-17/",
        "urlToImage": "https://bgr.com/wp-content/uploads/2022/11/ios-16-2-beta-bgr.jpg?quality=82&strip=all",
        "publishedAt": "2023-04-14T15:41:50Z",
        "content": "If you buy through links on BGR, we may receive an affiliate commission. Learn more.Apple is currently testing iOS 16.5, but those thinking this would be the last major software update before iOS 17 … [+1650 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "BGR"
        },
        "author": "José Adorno",
        "title": "Ford commits to CarPlay in EVs as GM and Rivian wave adios",
        "description": "These past few weeks have been hard for CarPlay users. While GM stated it would no longer support Apple’s software solution for EVs, Rivian reinforced …\nThe post Ford commits to CarPlay in EVs as GM and Rivian wave adios appeared first on BGR.",
        "url": "https://bgr.com/tech/ford-commits-to-carplay-in-evs-as-gm-and-rivian-wave-adios/",
        "urlToImage": "https://bgr.com/wp-content/uploads/2023/02/new-carplay-2023-bgr.jpg?quality=82&strip=all",
        "publishedAt": "2023-04-14T12:21:12Z",
        "content": "If you buy through links on BGR, we may receive an affiliate commission. Learn more.These past few weeks have been hard for CarPlay users. While GM stated it would no longer support Apple’s software … [+1697 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Space.com"
        },
        "author": "Scott Snowden",
        "title": "'Star Trek: Picard' season 3 episode 9 is a predictable set up to an overkill of nostalgia",
        "description": "The show has yet again relied on the \"What's in the box?!!\" formula to get to this point that's little more than an excessive reliving of the past",
        "url": "https://www.space.com/star-trek-picard-season-3-episode-9-review",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/dVny23JGA8zkSQDUewGKzY-1200-80.jpg",
        "publishedAt": "2023-04-14T17:30:01Z",
        "content": "Warning: Spoilers ahead for \"Star Trek: Picard\" Season 3, episode 9\r\nWe've said it before and after next week we won't have to say it ever again, but this third season of \"Picard\" would've really ben… [+6437 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "iMore"
        },
        "author": "heyimjoew@gmail.com (Joe Wituschek)",
        "title": "Apple Watch Ultra review: The best watch Apple has ever created",
        "description": "The Apple Watch Ultra is a triumph of design and functionality, and the best smartwatch Apple has ever made.",
        "url": "https://www.imore.com/health-fitness/apple-watch/apple-watch-ultra-review-actually-the-best-apple-watch-for-most-people-this-year",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/aKDQ5SzYNwk2YngRnFzTcP-1200-80.jpg",
        "publishedAt": "2023-04-14T15:46:04Z",
        "content": "At Apple’s September 2022 event, the company unveiled a completely new version of the Apple Watch: the Apple Watch Ultra. The company positioned it as a smartwatch for the adventurer. Whether you are… [+15957 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "iMore"
        },
        "author": "john-anthony.disotto@futurenet.com (John-Anthony Disotto)",
        "title": "Apple is making moves to win over manga fans",
        "description": "Apple Books has announced a new partnership to bring webtoons, vertical reading manga, to your iOS device.",
        "url": "https://www.imore.com/ios/apple-is-making-moves-to-win-over-manga-fans",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/xrAESQEthdfsYBEP4j7kpP-1200-80.jpg",
        "publishedAt": "2023-04-14T09:19:40Z",
        "content": "Apple Books has announced a new webtoons page in Japan with exclusive series in popular genres, including action, fantasy, horror, mystery, romance, sci-fi, and isekai.\r\nThe new webtoons (Tate-Yomi-M… [+1833 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "iMore"
        },
        "author": "oliver@monkeymanmedia.com (Oliver Haslam)",
        "title": "Is the iPhone SE dead and buried? It could be a huge mistake if so",
        "description": "We'd previously been told to expect an iPhone SE that looks like an iPhone 14, but now that's been thrown into doubt. Is the iPhone SE ever going to be refreshed?",
        "url": "https://www.imore.com/iphone/iphone-se/is-the-iphone-se-dead-and-buried-it-could-be-a-huge-mistake-if-so",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/CZp3R4ZT6Vp2v59jArJEok-1200-80.jpg",
        "publishedAt": "2023-04-14T16:02:33Z",
        "content": "What on Earth is happening with the iPhone SE right now? Does anyone know? The analysts certainly don't seem to and it would appear there is a chance that we won't see a new model for some time yet. … [+3237 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "iMore"
        },
        "author": "oliver@monkeymanmedia.com (Oliver Haslam)",
        "title": "Stunning iOS 17 concept imagines huge changes to Messages, Control Center, and more",
        "description": "A new iOS 17 concept imagines some sweeping changes, some of which might actually happen this year. But some definitely won't.",
        "url": "https://www.imore.com/ios/ios-17/stunning-ios-17-concept-imagines-huge-changes-to-messages-control-center-and-more",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/Bo5cKuQBswr3KxqPTa53oc-1200-80.jpeg",
        "publishedAt": "2023-04-14T15:03:10Z",
        "content": "If everything goes the way that we expect it to, Apple will announce iOS 17 during its WWDC23 event this June. And while the iOS 17 leaks keep on coming it's still a long time to wait. But why wait a… [+1914 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "iMore"
        },
        "author": "Lloyd Coombes",
        "title": "What we want to see from iPadOS 17: Multitasking, Lock Screen & more",
        "description": "With WWDC dated, we’ll be hearing all about iPadOS 17 soon. Here’s what we want to see from the tablet OS.",
        "url": "https://www.imore.com/ipad/ipados/what-we-want-to-see-from-ipados-17-multitasking-lock-screen-and-more",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/8ncfEyWLTJ8NpUgg4vnQ6D-1200-80.jpg",
        "publishedAt": "2023-04-14T14:00:00Z",
        "content": "It’s hard to believe it’s been thirteen years since the iPad debuted, and that makes iPadOS one of Apple’s most mature platforms ahead of iPadOS 17.\r\nAnd yet, it always feels a little like an afterth… [+6458 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "iMore"
        },
        "author": "Lloyd Coombes",
        "title": "I was in iPad Pro bliss for 20 minutes - then I woke up",
        "description": "The iPad has come a long way, but it’s still got plenty to work on for my workflow.",
        "url": "https://www.imore.com/ipad/i-was-in-ipad-pro-bliss-for-20-minutes-then-i-woke-up",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/QtjGj4FaCumxCHcQdiesdW-1200-80.png",
        "publishedAt": "2023-04-14T12:00:39Z",
        "content": "As a tech writer, there's always a degree of curiosity when it comes to workflows. Checking out new productivity apps and utilities can lead to fun new developments, shaving minutes or even hours off… [+5544 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "iMore"
        },
        "author": "oliver@monkeymanmedia.com (Oliver Haslam)",
        "title": "iOS 17 could make Home Screen widgets way more useful",
        "description": "Apple's iOS 17 is rumored to finally be bringing interactive Home Screen widgets to the iPhone.",
        "url": "https://www.imore.com/ios/ios-17/ios-17-could-make-home-screen-widgets-way-more-useful",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/bU6duxMvFVGrSwMDGGhrgn-1200-80.jpg",
        "publishedAt": "2023-04-14T09:42:12Z",
        "content": "Apple is likely to announce iOS 17 during the WWDC 2023 opening keynote in June and expectations are already beginning to grow. That keynote might still be a couple of months out, but we're seeing pl… [+1833 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "iMore"
        },
        "author": "Stephen Warwick",
        "title": "One of Apple's most popular iPhones might not get an upgrade for two more years",
        "description": "Hours after revealing an iPhone SE 4 update might have a different design than previously thought, a top insider now says it may no longer be on the cards altogether.",
        "url": "https://www.imore.com/iphone/iphone-se/one-of-apples-most-popular-iphones-might-not-get-an-upgrade-for-two-more-years",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/zevkwdxuaQgApxDTmcj6JA-1200-80.jpg",
        "publishedAt": "2023-04-14T09:31:41Z",
        "content": "Just hours after suggesting Apple's rumored iPhone SE 4 may not in fact adopt the design of the iPhone 14, the same top insider and analyst has now poured more cold water on the budget device, sugges… [+1779 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "iMore"
        },
        "author": "Tammy Rogers",
        "title": "Spotify gets a new iPhone Lock Screen widget so that you can launch your tunes quicker",
        "description": "Spotify can now be placed as a quick launch widget on the Lock Screen of your iPhone, letting you get to your music with a single tap.",
        "url": "https://www.imore.com/music-movies-tv/apple-music/spotify-gets-a-new-iphone-lock-screen-widget-so-that-you-can-launch-your-tunes-quicker",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/ESY9jTeV35aDAbaxepTf6U-1200-80.jpg",
        "publishedAt": "2023-04-14T09:13:49Z",
        "content": "Spotify may not have had the strongest 2023, but there have been a couple of quality-of-life improvements that have made the app a little better. One of which is this new feature, which makes it poss… [+1728 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "iMore"
        },
        "author": "Tammy Rogers",
        "title": "Glorious GMMK 2: The gaming keyboard for everyone",
        "description": "The Glorious GMMK 2 is the newest keyboard for peripheral maker Glorious and comes in a very compelling prebuilt form. Here's what we thought about this new keyboard.",
        "url": "https://www.imore.com/accessories/glorious-gmmk-2-the-gaming-keyboard-for-everyone",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/Z2tzNNUdzKJg4eeNw7perW-1200-80.jpg",
        "publishedAt": "2023-04-14T13:00:54Z",
        "content": "The mechanical keyboard space has burgeoned over the last year or so, going from the territory of enthusiasts and gamers to the domain of anyone who wants something nicer to type on. With that have c… [+9224 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Techdirt"
        },
        "author": "Karl Bode",
        "title": "28 State AGs Urge Congress To Pass Stalled ‘Right To Repair’ Bills",
        "description": "In just the last five years, the “right to repair” movement has shifted from nerdy niche to the mainstream, thanks in part to significant support from the Biden FTC. We’ve seen numerous state bills make significant inroads in passing laws opening the door to …",
        "url": "https://www.techdirt.com/2023/04/14/28-state-ags-urge-congress-to-pass-stalled-right-to-repair-bills/",
        "urlToImage": "https://www.techdirt.com/wp-content/themes/techdirt/assets/images/td-rect-logo-white.png",
        "publishedAt": "2023-04-14T12:27:36Z",
        "content": "from the let-me-fix-my-own-shit dept\r\nIn just the last five years, the “right to repair” movement has shifted from nerdy niche to the mainstream, thanks in part to significant support from the Biden … [+2689 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Vox"
        },
        "author": "Miles Bryan",
        "title": "Companies are keeping their prices inflated",
        "description": "Prices aren’t going down. “Excuseflation,” explained.",
        "url": "https://www.vox.com/podcasts/23682466/inflation-prices-us-economy",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/a9Fsf1JofQ4G8uJS7FBkGRTMxN4=/0x136:3000x1707/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24583732/1316693205.jpg",
        "publishedAt": "2023-04-14T12:00:00Z",
        "content": "The Wingstop logo on the front door of one of the company’s restaurants on May 6, 2021, in Chicago, Illinois. | Scott Olson/Getty Images\r\n\n \n\n Prices aren’t going down. “Excuseflation,” explained. Ne… [+7630 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Vida Extra"
        },
        "author": "R. Márquez",
        "title": "Digits es el nuevo juego gratis del New York Times con retos diarios: el Wordle de números quiere ser la próxima gran revolución",
        "description": "¿Alguien sigue jugando a Wordle? Pese a que la fiebre inicial por el pasatiempo hace mucho que desapareció, en el New York Times llevan tiempo trabajando en su siguiente gran bombazo, un nuevo juego gratis con retos diarios que tome el relevo de aquél éxito. …",
        "url": "https://www.vidaextra.com/pc/digits-nuevo-juego-gratis-new-york-times-retos-diarios-wordle-numeros-quiere-ser-proxima-gran-revolucion",
        "urlToImage": "https://i.blogs.es/9dbe96/hero-image.fill.size_1248x702.v1681280770/840_560.jpeg",
        "publishedAt": "2023-04-14T08:04:47Z",
        "content": "¿Alguien sigue jugando a Wordle? Pese a que la fiebre inicial por el pasatiempo hace mucho que desapareció, en el New York Times llevan tiempo trabajando en su siguiente gran bombazo, un nuevo juego … [+3249 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Vida Extra"
        },
        "author": "Alberto Martín",
        "title": "Horizon Forbidden West muestra al detalle el contenido exclusivo por reservar el DLC Burning Shores: desde un arco hasta ropa para Aloy",
        "description": "{\"videoId\":\"x8k2uxm\",\"autoplay\":true,\"title\":\"Horizon Forbidden West: Burning Shores - Tráiler Oficial\",\"tag\":\"\"}\n \r\n\n\r\n\n Nuestro regreso a las tierras salvajes de Horizon Forbidden West es inminente. El 19 de abril se lanza el DLC Burning Shores. Guerrilla G…",
        "url": "https://www.vidaextra.com/accion/horizon-forbidden-west-muestra-al-detalle-contenido-exclusivo-reservar-dlc-burning-shores-arco-ropa-para-aloy",
        "urlToImage": "https://i.blogs.es/6f7193/x720/840_560.jpeg",
        "publishedAt": "2023-04-14T08:03:52Z",
        "content": "Nuestro regreso a las tierras salvajes de Horizon Forbidden West es inminente. El 19 de abril se lanza el DLC Burning Shores. Guerrilla Games ha mostrado un tráiler para recordar a los fans que todav… [+1282 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Vida Extra"
        },
        "author": "Frankie MB",
        "title": "La acción estratégica nunca había estado al alcance de tantos jugadores. Análisis Minecraft Legends",
        "description": "Del sandbox definitivo a la estrategia más accesible hay un trecho muy, muy largo y cruzarlo no es nada sencillo. Mojang no solo se atreve con el desafío, sino que le suma un giro más: implementar a la idea ese tan característico conjunto de elementos propios…",
        "url": "https://www.vidaextra.com/analisis/review-minecraft-legends-experiencia-juego-trailer-gameplay-para-playstation-xbox-switch-pc",
        "urlToImage": "https://i.blogs.es/73ce86/minecraft-legends-xbox-pc-playstation-nintendo-switch/840_560.jpeg",
        "publishedAt": "2023-04-14T07:02:00Z",
        "content": "Del sandbox definitivo a la estrategia más accesible hay un trecho muy, muy largo y cruzarlo no es nada sencillo. Mojang no solo se atreve con el desafío, sino que le suma un giro más: implementar a … [+12719 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "MacRumors"
        },
        "author": "Tim Hardwick",
        "title": "Canal+ Subscribers in France to Get Full Access to Apple TV+ From April 20",
        "description": "Apple TV+ will be made available to every Canal+ subscriber in France at no extra cost from April 20, Apple has announced. \n\n\n\n\n\nThe move means millions of Canal+ customers will soon be able to access TV+ content directly on their existing set-top box – no se…",
        "url": "https://www.macrumors.com/2023/04/14/apple-tv-plus-canal-plus-france-april-20/",
        "urlToImage": "https://images.macrumors.com/t/odn2ILgT1U13z3OTEX0iSuZT8ks=/1960x/article-new/2023/04/Apple-TV-Plus-announcement-UK-hero.jpg",
        "publishedAt": "2023-04-14T10:38:24Z",
        "content": "Apple TV+ will be made available to every Canal+ subscriber in France at no extra cost from April 20, Apple has announced. \r\nThe move means millions of Canal+ customers will soon be able to access TV… [+1363 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "MacRumors"
        },
        "author": "Mitchel Broussard",
        "title": "Deals: Beats Studio Buds Hit Record Low $99.95 Price ($50 Off)",
        "description": "Amazon today has the Beats Studio Buds in six colors for $99.95, down from $149.95. This is a match of the all-time low price on the earbuds, and Amazon is estimating an April 16-20 delivery date for most colors.\n\n\n\nNote: MacRumors is an affiliate partner wit…",
        "url": "https://www.macrumors.com/2023/04/14/deals-beats-studio-buds-record-low/",
        "urlToImage": "https://images.macrumors.com/t/nbKWcHm760oBp1pF-pAClxwNFRI=/1920x/article-new/2022/04/beats-studio-buds-april-2022-colors.jpg",
        "publishedAt": "2023-04-14T16:47:36Z",
        "content": "Amazon today has the Beats Studio Buds in six colors for $99.95, down from $149.95. This is a match of the all-time low price on the earbuds, and Amazon is estimating an April 16-20 delivery date for… [+558 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Les Numériques"
        },
        "author": "Laure Renouard",
        "title": "Actualité : L'Apple iPhone 13 intègre notre guide des meilleurs smartphones Apple et Samsung",
        "description": "Notre guide des meilleurs smartphones Apple et Samsung, dans la catégorie des smartphones / téléphones portables (Téléphonie), vient d'être mis à jour. L'iPhone 13 d'Apple y fait son entrée.",
        "url": "https://www.lesnumeriques.com/telephone-portable/l-apple-iphone-13-integre-notre-guide-des-meilleurs-smartphones-apple-et-samsung-ng208887.html",
        "urlToImage": "https://cdn.lesnumeriques.com/optim/test/16/169081/7158d4d6-iphone-13-toujours-efficace-et-bien-plus-endurant__1200_630__139-125-1891-1045.jpeg",
        "publishedAt": "2023-04-14T07:10:08Z",
        "content": "LiPhone 12 d'Apple inaugurait un nouveau design, un écran à technologie Oled et le support de la 5G. Son successeur, l'iPhone 13, confirme ces qualités et entend en combler les lacunes.\r\nIl intègre l… [+553 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Xatakamovil.com"
        },
        "author": "Enrique Moraleda",
        "title": "El iPad más pequeño y versátil, ahora con un descuento de 250 euros",
        "description": "Mientras Apple sigue preparando el lanzamiento de sus nuevos dispositivos para 2023, desde Cupertino dan pistas sobre cómo podrían ser esos terminales. Si sois seguidores de la compañía estadounidense, y no podéis esperar a la llegada de esos terminales, podé…",
        "url": "https://www.xatakamovil.com/apple/ipad-pequeno-versatil-ahora-descuento-250-euros",
        "urlToImage": "https://i.blogs.es/00e775/plantilla-imagenes-53-/840_560.jpeg",
        "publishedAt": "2023-04-14T15:01:25Z",
        "content": "Mientras Apple sigue preparando el lanzamiento de sus nuevos dispositivos para 2023, desde Cupertino dan pistas sobre cómo podrían ser esos terminales. Si sois seguidores de la compañía estadounidens… [+1979 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Xatakamovil.com"
        },
        "author": "Álvaro García M.",
        "title": "Móviles de alta gama a precio de locos: Apple, Samsung y Xiaomi los reyes del descuento. Cazando Gangas",
        "description": "Tras un pequeño parón por Semana Santa, toca volver a nuestra sección semanal favorita, el Cazando Gangas. Una sección que, si no la conoces, nos sirve para repasar las mejores ofertas en móviles y accesorios. Además, no sólo en gama alta como destacamos esta…",
        "url": "https://www.xatakamovil.com/guias-de-compra/moviles-alta-gama-a-precio-locos-apple-samsung-xiaomi-reyes-descuento-cazando-gangas",
        "urlToImage": "https://i.blogs.es/652d7b/xiaomi-13-cazando-gangas/840_560.jpeg",
        "publishedAt": "2023-04-14T09:01:26Z",
        "content": "Tras un pequeño parón por Semana Santa, toca volver a nuestra sección semanal favorita, el Cazando Gangas. Una sección que, si no la conoces, nos sirve para repasar las mejores ofertas en móviles y a… [+6172 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Xatakamovil.com"
        },
        "author": "Enrique Moraleda",
        "title": "Uno de los mejores teléfonos de Motorola, ahora más barato: el Edge 30 Pro con una gran cámara frontal por menos de 600 euros",
        "description": "Motorola comenzó 2023 con el lanzamiento de nuevos smartphones de las gamas media y alta. Con estos dispositivos, intenta competir contra las firmas líderes en ambos segmentos. Ahora, los fans incondicionales de una compañía que en su momento, estaba en la ci…",
        "url": "https://www.xatakamovil.com/motorola/uno-mejores-telefonos-motorola-ahora-barato-edge-30-pro-gran-camara-frontal-600-euros",
        "urlToImage": "https://i.blogs.es/c66306/plantilla-imagenes-55-/840_560.jpeg",
        "publishedAt": "2023-04-14T13:01:26Z",
        "content": "Motorola comenzó 2023 con el lanzamiento de nuevos smartphones de las gamas media y alta. Con estos dispositivos, intenta competir contra las firmas líderes en ambos segmentos. Ahora, los fans incond… [+1909 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Marksdailyapple.com"
        },
        "author": "Mark Sisson",
        "title": "New and Noteworthy: What I Read This Week—Edition 217",
        "description": "Research of the Week\nUnintended effects of \"child neglect\" laws.\nMosquitoes love light pollution.\nThe Indo European expansion may have used ships, not just horses.\nWhy did duelers in the South use inaccurate weapons?\nDuring energy restriction, both moderate a…",
        "url": "https://www.marksdailyapple.com/new-and-noteworthy-217/",
        "urlToImage": "https://marksdailyapple.com/uploads/2018/12/Mark-Fridays.jpg",
        "publishedAt": "2023-04-14T16:57:55Z",
        "content": "Research of the Week\r\nUnintended effects of “child neglect” laws.\r\nMosquitoes love light pollution.\r\nThe Indo European expansion may have used ships, not just horses.\r\nWhy did duelers in the South us… [+1604 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Caschys Blog"
        },
        "author": "caschy",
        "title": "UMG fordert Streamingdienste auf, Songs vor KI zu schützen",
        "description": "Die Universal Music Group richtet sich derzeit an Streamingdienste wie Spotify und auch Apple Music. Die Anbieter sollen KI-Dienste daran hindern, Melodien und Texte aus den urheberrechtlich geschützten Liedern auszulesen, wie aus E-Mails hervorgeht, die der …",
        "url": "https://stadt-bremerhaven.de/umg-fordert-streamingdienste-auf-songs-vor-ki-zu-schuetzen/",
        "urlToImage": "https://stadt-bremerhaven.de/wp-content/uploads/2023/04/musik-music-simon-noh-0rmby-3OTeI-unsplash_.jpg",
        "publishedAt": "2023-04-14T11:30:41Z",
        "content": "Foto von Simon Noh auf Unsplash\r\nDie Universal Music Group richtet sich derzeit an Streamingdienste wie Spotify und auch Apple Music. Die Anbieter sollen KI-Dienste daran hindern, Melodien und Texte … [+1289 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Frandroid"
        },
        "author": "Théo Sire",
        "title": "Apple pourrait proposer des méta-verres pour ses lunettes connectées",
        "description": "Non, ce n'est pas juste un mauvais jeu de mots : la firme californienne compte intégrer une nouvelle technologie de lentilles pour lunettes et capteurs photo dans ses futurs produits, selon un célèbre analyste, dont les prochaines Apple Glass. On vous expliqu…",
        "url": "https://www.frandroid.com/marques/apple/1664997_apple-pourrait-proposer-des-meta-verres-pour-ses-lunettes-connectees",
        "urlToImage": "https://images.frandroid.com/wp-content/uploads/2020/05/apple-glass.jpg",
        "publishedAt": "2023-04-14T16:04:19Z",
        "content": "Non, ce n'est pas juste un mauvais jeu de mots : la firme californienne compte intégrer une nouvelle technologie de lentilles pour lunettes et capteurs photo dans ses futurs produits, selon un célèbr… [+2815 chars]"
        }
        ]
    constructor(){
        super();
        console.log("Hello I am a constructor");
        this.state = {
            articles : this.articles,
            loading : false
        }
    }

  render() {
    return (
      <div className = "container my-3">
        <h2>Current News Update</h2>
        {
            this.state.articles.map((elements)=>{console.log(elements)})
        }
        <div className="row">
            <div className="col-md-3">
            <NewsItemComponent title= "MyTitle" description ="mydesc" 
            imageUrl ="https://s.yimg.com/uu/api/res/1.2/t_GyA5IC18j1Gxbs.zCj2w--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2022-08/4d4b46d0-2af0-11ed-bac3-8d8beb34a91a.cf.jpg"/>
            newsUrl = "to do"</div>
        </div>
      </div>
    )
  }
}

export default NewsItem
