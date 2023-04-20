import { Post } from "../app/post";

export const POSTS: Post[] = [
    {
        id: 0,
        country: "Portugal",
        city: "Faro",
        startDate: new Date("2023-02-09T00:00:00"),
        returnDate: new Date("2023-02-19T00:00:00"),
        mainPicture: {
            img: "assets/portugal/portugal.JPG",
            altText: "photo du Portugal"
        },
        pictureGallery: [
            {
                img: "assets/portugal/portugal-2.JPG",
                altText: "photo du bord d'une route"
            },
            {
                img: "assets/portugal/portugal-3.jpeg",
                altText: "photo d'une place de Faro"
            },
            {
                img: "assets/portugal/portugal-4.jpeg",
                altText: "photo des marais"
            },
            {
                img: "assets/portugal/portugal-5.jpeg",
                altText: "photo d'un coucher de soleil à la plage"
            }],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor massa id sem iaculis, et rutrum ligula ornare. Etiam malesuada diam justo, nec sagittis ligula rhoncus sit amet. Fusce ac viverra nisi. Integer nibh urna, posuere euismod dolor ac.\n\nDonec commodo pellentesque sapien eu interdum. Vestibulum neque nulla, mattis eget hendrerit nec, tempus pharetra est. Nulla facilisi. Curabitur elit lorem, rhoncus quis quam et, imperdiet euismod mi. Morbi eget elit ac velit porttitor sodales. Nulla scelerisque risus ex, a faucibus est eleifend sed. Aliquam ac facilisis lorem, ut ornare velit.dignissim metus. Aliquam dignissim lorem id nisi aliquet, a sodales ipsum dignissim.",
        positivePoints: ["Un pays très simple à sillonner, sans embrouilles ni complexité", "Des habitants gentils, spontanés et qui cherchent le contact", "Un relief vallonné, offrant de superbes paysages dotés de villages pittoresques"],
        negativePoints: ["Le climat torride en juillet-août, sauf en montagne",
            "La côte très fréquentée l’été et de plus en plus bétonnée"],
        advices: ["Prenez une paire de tong !"],
        summary: "L’Albanie est un pays que nous avons adoré visiter, en grande partie grâce à l’accueil chaleureux des Albanais, mais pas seulement ! Nous avons découvert une culture fièrement préservée, une variété de paysages captivante et de nombreux coins tranquilles, y compris au mois de juillet. Seule la côte adriatique sature de touristes l’été. Notre conseil, si vous venez à cette saison, serait alors de s’éloigner de la mer et de privilégier les villages et les montagnes dans le reste du pays, où se concentre à notre avis tout le charme de l’Albanie.",
        highlightTravel: true,
    },
    {
        id: 1,
        country: "Espagne",
        city: "Tenerife",
        startDate: new Date("2022-01-07T00:00:00"),
        returnDate: new Date("2022-01-15T00:00:00"),
        mainPicture: {
            img: "assets/espagne/tenerife.jpg",
            altText: "photo de Tenerife"
        },
        pictureGallery: [
            {
                img: "assets/espagne/tenerife-2.jpg",
                altText: "photo des rochers dans la mer"
            },
            {
                img: "assets/espagne/tenerife-3.jpg",
                altText: "photo du desert autour du Teide"
            },
            {
                img: "assets/espagne/tenerife-4.jpg",
                altText: "photo du Teide enneigé"
            },
            {
                img: "assets/espagne/tenerife-5.jpg",
                altText: "photo de Teide"
            }],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor massa id sem iaculis, et rutrum ligula ornare. Etiam malesuada diam justo, nec sagittis ligula rhoncus sit amet. Fusce ac viverra nisi. Integer nibh urna, posuere euismod dolor ac.\n\nDonec commodo pellentesque sapien eu interdum. Vestibulum neque nulla, mattis eget hendrerit nec, tempus pharetra est. Nulla facilisi. Curabitur elit lorem, rhoncus quis quam et, imperdiet euismod mi. Morbi eget elit ac velit porttitor sodales. Nulla scelerisque risus ex, a faucibus est eleifend sed. Aliquam ac facilisis lorem, ut ornare velit.dignissim metus. Aliquam dignissim lorem id nisi aliquet, a sodales ipsum dignissim.",
        positivePoints: ["Un pays très simple à sillonner, sans embrouilles ni complexité", "Des habitants gentils, spontanés et qui cherchent le contact", "Un relief vallonné, offrant de superbes paysages dotés de villages pittoresques"],
        negativePoints: [],
        advices: ["Prenez une paire de tong !"],
        summary: "L’Albanie est un pays que nous avons adoré visiter, en grande partie grâce à l’accueil chaleureux des Albanais, mais pas seulement ! Nous avons découvert une culture fièrement préservée, une variété de paysages captivante et de nombreux coins tranquilles, y compris au mois de juillet. Seule la côte adriatique sature de touristes l’été. Notre conseil, si vous venez à cette saison, serait alors de s’éloigner de la mer et de privilégier les villages et les montagnes dans le reste du pays, où se concentre à notre avis tout le charme de l’Albanie.",
        highlightTravel: false,
    },
    {
        id: 2,
        country: "France",
        city: "Île Tudy",
        startDate: new Date("2022-07-20T00:00:00"),
        returnDate: new Date("2022-07-28T00:00:00"),
        mainPicture: {
            img: "assets/france/tudy.jpg",
            altText: "photo des falaises bretonnes"
        },
        pictureGallery: [
            {
                img: "assets/france/tudy-2.jpg",
                altText: "photo de menhirs"
            },
            {
                img: "assets/france/tudy-3.jpg",
                altText: "photo d'un port de plaisance"
            },
            {
                img: "assets/france/tudy-4.jpg",
                altText: "photo d'un bord de mer"
            }],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor massa id sem iaculis, et rutrum ligula ornare. Etiam malesuada diam justo, nec sagittis ligula rhoncus sit amet. Fusce ac viverra nisi. Integer nibh urna, posuere euismod dolor ac.\n\nDonec commodo pellentesque sapien eu interdum. Vestibulum neque nulla, mattis eget hendrerit nec, tempus pharetra est. Nulla facilisi. Curabitur elit lorem, rhoncus quis quam et, imperdiet euismod mi. Morbi eget elit ac velit porttitor sodales. Nulla scelerisque risus ex, a faucibus est eleifend sed. Aliquam ac facilisis lorem, ut ornare velit.dignissim metus. Aliquam dignissim lorem id nisi aliquet, a sodales ipsum dignissim.",
        positivePoints: ["Un pays très simple à sillonner, sans embrouilles ni complexité", "Des habitants gentils, spontanés et qui cherchent le contact", "Un relief vallonné, offrant de superbes paysages dotés de villages pittoresques"],
        negativePoints: ["Le climat torride en juillet-août, sauf en montagne",
            "La côte très fréquentée l’été et de plus en plus bétonnée"],
        advices: ["Prenez une paire de tong !"],
        summary: "L’Albanie est un pays que nous avons adoré visiter, en grande partie grâce à l’accueil chaleureux des Albanais, mais pas seulement ! Nous avons découvert une culture fièrement préservée, une variété de paysages captivante et de nombreux coins tranquilles, y compris au mois de juillet. Seule la côte adriatique sature de touristes l’été. Notre conseil, si vous venez à cette saison, serait alors de s’éloigner de la mer et de privilégier les villages et les montagnes dans le reste du pays, où se concentre à notre avis tout le charme de l’Albanie.",
        highlightTravel: false,
    },
    {
        id: 3,
        country: "Belgique",
        city: "Bruxelles",
        startDate: new Date("2021-04-08T00:00:00"),
        returnDate: new Date("2021-04-16T00:00:00"),
        mainPicture: {
            img: "assets/belgique/bruxelles-2.JPG",
            altText: "photo d'une rue de Bruxelles"
        },
        pictureGallery: [
            {
                img: "assets/belgique/bruxelles.JPG",
                altText: "photo de maisons bruxelloises"
            },
            {
                img: "assets/belgique/bruxelles-3.JPG",
                altText: "photo de building dans le quartier d'affaires"
            },
            {
                img: "assets/belgique/bruxelles-4.JPG",
                altText: "photo du parc botanique"
            },
            {
                img: "assets/belgique/bruxelles-5.JPG",
                altText: "photo d'un parc"
            },
            {
                img: "assets/belgique/bruxelles-6.JPG",
                altText: "photo de coucher de soleil"
            }],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor massa id sem iaculis, et rutrum ligula ornare. Etiam malesuada diam justo, nec sagittis ligula rhoncus sit amet. Fusce ac viverra nisi. Integer nibh urna, posuere euismod dolor ac.\n\nDonec commodo pellentesque sapien eu interdum. Vestibulum neque nulla, mattis eget hendrerit nec, tempus pharetra est. Nulla facilisi. Curabitur elit lorem, rhoncus quis quam et, imperdiet euismod mi. Morbi eget elit ac velit porttitor sodales. Nulla scelerisque risus ex, a faucibus est eleifend sed. Aliquam ac facilisis lorem, ut ornare velit.dignissim metus. Aliquam dignissim lorem id nisi aliquet, a sodales ipsum dignissim.",
        positivePoints: ["Un pays très simple à sillonner, sans embrouilles ni complexité", "Des habitants gentils, spontanés et qui cherchent le contact", "Un relief vallonné, offrant de superbes paysages dotés de villages pittoresques"],
        negativePoints: ["Le climat torride en juillet-août, sauf en montagne",
            "La côte très fréquentée l’été et de plus en plus bétonnée"],
        advices: ["Prenez une paire de tong !"],
        summary: "L’Albanie est un pays que nous avons adoré visiter, en grande partie grâce à l’accueil chaleureux des Albanais, mais pas seulement ! Nous avons découvert une culture fièrement préservée, une variété de paysages captivante et de nombreux coins tranquilles, y compris au mois de juillet. Seule la côte adriatique sature de touristes l’été. Notre conseil, si vous venez à cette saison, serait alors de s’éloigner de la mer et de privilégier les villages et les montagnes dans le reste du pays, où se concentre à notre avis tout le charme de l’Albanie.",
        highlightTravel: false,
    },
    {
        id: 4,
        country: "Allemagne",
        city: "Berlin",
        startDate: new Date("2020-01-08T00:00:00"),
        returnDate: new Date("2020-01-15T00:00:00"),
        mainPicture: {
            img: "assets/allemagne/berlin.jpg",
            altText: "photo de Berlin"
        },
        pictureGallery: [
            {
                img: "assets/allemagne/berlin-2.jpg",
                altText: "photo du Reichstag"
            },
            {
                img: "assets/allemagne/berlin-3.jpg",
                altText: "photo d'un joli bâtiment à Berlin"
            },
            {
                img: "assets/allemagne/berlin-4.jpg",
                altText: "photo de la porte de Brandenburg"
            },
            {
                img: "assets/allemagne/berlin-5.jpg",
                altText: "photo du toit du Sony Center"
            }
        ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor massa id sem iaculis, et rutrum ligula ornare. Etiam malesuada diam justo, nec sagittis ligula rhoncus sit amet. Fusce ac viverra nisi. Integer nibh urna, posuere euismod dolor ac.\n\nDonec commodo pellentesque sapien eu interdum. Vestibulum neque nulla, mattis eget hendrerit nec, tempus pharetra est. Nulla facilisi. Curabitur elit lorem, rhoncus quis quam et, imperdiet euismod mi. Morbi eget elit ac velit porttitor sodales. Nulla scelerisque risus ex, a faucibus est eleifend sed. Aliquam ac facilisis lorem, ut ornare velit.dignissim metus. Aliquam dignissim lorem id nisi aliquet, a sodales ipsum dignissim.",
        positivePoints: ["Un pays très simple à sillonner, sans embrouilles ni complexité", "Des habitants gentils, spontanés et qui cherchent le contact", "Un relief vallonné, offrant de superbes paysages dotés de villages pittoresques"],
        negativePoints: ["Le climat torride en juillet-août, sauf en montagne",
            "La côte très fréquentée l’été et de plus en plus bétonnée"],
        advices: ["Prenez une paire de tong !"],
        summary: "L’Albanie est un pays que nous avons adoré visiter, en grande partie grâce à l’accueil chaleureux des Albanais, mais pas seulement ! Nous avons découvert une culture fièrement préservée, une variété de paysages captivante et de nombreux coins tranquilles, y compris au mois de juillet. Seule la côte adriatique sature de touristes l’été. Notre conseil, si vous venez à cette saison, serait alors de s’éloigner de la mer et de privilégier les villages et les montagnes dans le reste du pays, où se concentre à notre avis tout le charme de l’Albanie.",
        highlightTravel: false,
    },
]
