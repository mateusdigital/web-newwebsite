export default function GamesInformation_(name) {
    const list = [
        {
            name:"     el_jamon_volador",
            title:    "El Jamon Volador",
            year:     "2020",
            platform: "Web",
            type:     "personal_game",
        },

            // name:"personal/simple_snake",
        {
            name:    "simple_snake",
            title:   "Simple Snake",
            year:    "2020",
            platform:"Web",
        },

            // name:"personal/nuclear_rain"
        {
            name:"nuclear_rain",
            thumbnail_path: "img/games/personal/nuclear_rain.png",
            title:"Nuclear Rain",
            year:"2020",
            platform:"Web",
        },

            // name:"personal/cosmic_intruders"
        {
            name:"cosmic_intruders",
            thumbnail_path: "img/games/personal/cosmic_intruders.png",
            title:"Cosmic Intruders",
            year:"2020",
            platform:"Web",
        },

            // name:"personal/the_mistral_report"
        {
            name:"the_mistral_report",
            thumbnail_path: "img/games/personal/the_mistral_report.png",
            title:"The Mistral Report",
            year:"2020",
            platform:"Web",
        },

            // name:"personal/color_grid"
        {
            name:"color_grid",
            thumbnail_path: "img/games/personal/color_grid.png",
            title:"Color Grid",
            year:"2020",
            platform:"Web",
        },

            // name:"personal/memory_amazing_cow"
        {
            name:"memory_amazing_cow",
            thumbnail_path: "img/games/personal/memory_amazing_cow.png",
            title:"Memory - Amazing Cow!",
            year:"2020",
            platform:"Web",
        },



        {
            name:    "farcry6",
            title:   "Far Cry 6",
            year:    "2022",
            platform: ["DLC" ],

            type:    "professional",
            company: "Ubisoft",
            role:    "Senior Programmer",
            tech:    ["Dunia", "C++", "Perforce", "A11Y"],

            youtube_video_id: "LRMbuyJyUzU",
        },

        {
            name:    "skull_and_bones",
            title:   "Skull & Bones",
            year:    "2022",
            platform: ["PC", "XB", "PS", "Luna" ],

            type:    "professional",
            company: "Ubisoft",
            role:    "Senior Programmer",
            tech:    ["Anvil", "C++", "Perforce", "A11Y"],

            youtube_video_id: "fgy4WZ9ta7E",
        },


        {
            name:     "wot_blitz",
            title:    "World of Tanks - Blitz",
            year:     "2020",
            platform: ["Mobile" ],

            type:    "professional",
            company: "Wargaming",
            role:    "Programmer",
            tech:    ["Unreal Engine 4", "Blueprints", "C++", "Git"],

            youtube_video_id: "_Vtvjg8dYqI",
        },

        // --------------------------------------------------------------------
        {
            name:     "8_ball_pool",
            title:    "8 Ball Pool",
            year:     "2019",
            platform: ["Mobile", "Web" ],

            type:    "professional",
            company: "Miniclip",
            role:    "Programmer",
            tech:    ["Cocos2d-x", "Emscripten", "C++", "JS", "Obj-C", "Git"],

            youtube_video_id: "f0xHb8pxMco",
        },
        {
            name:     "pacman_io",
            title:    "PACMAN.IO",
            year:     "2018",
            platform: ["Web" ],

            type:    "professional",
            company: "Miniclip",
            role:    "Programmer",
            tech:    ["Canvas API", "Emscripten", "C++", "JS", "Git"],

            youtube_video_id: "u4sEgDM0EZ0",
        },

        // --------------------------------------------------------------------
        {
            name:     "the_banner_saga",
            title:    "The Banner Saga",
            year:     "2017",
            platform: ["Mobile" ],

            type:    "professional",
            company: "Firehorse",
            role:    "Programmer",
            tech:    ["Action Script 3", "Ant", "Mercurial"],

            youtube_video_id: "y-42WWUOD1M",
        },

        {
            name:     "the_banner_saga_2",
            title:    "The Banner Saga 2",
            year:     "2017",
            platform: ["Mobile" ],

            type:    "professional",
            company: "Firehorse",
            role:    "Programmer",
            tech:    ["Action Script 3", "Ant", "Mercurial"],

            youtube_video_id: "NRoaB0iSsJE",
        },

        {
            name:     "killers_and_thieves",
            title:    "Killers and Thieves",
            year:     "2017",
            platform: ["PC" ],

            type:    "professional",
            company: "Firehorse",
            role:    "Programmer",
            tech:    ["Unity", "Lua", "C#", "Middleware"],

            youtube_video_id: "2HhmN1_SvFA",
        },

        {
            name:     "like_a_boss",
            title:    "Like a Boss",
            year:     "2017",
            platform: ["Mobile" ],

            type:    "professional",
            company: "Firehorse",
            role:    "Programmer",
            tech:    ["Unity", "C#",],

            youtube_video_id: "gqNCs0slp8U",
        },
        {
            name:     "at_sundown",
            title:    "At Sundown",
            year:     "2017",
            platform: ["Middleware" ],

            type:    "professional",
            company: "Firehorse",
            role:    "Programmer",
            tech:    ["Unity", "AlienFX", "C#", "C++" ],

            youtube_video_id: "AbZGdmOC-eM",
        },
        {
            name:     "let_them_come",
            title:    "Let them Come",
            year:     "2017",
            platform: ["Middleware" ],

            type:    "professional",
            company: "Firehorse",
            role:    "Programmer",
            tech:    ["GameMaker", "AlienFX", "C++" ],

            youtube_video_id: "AbZGdmOC-eM",

        },
        {
            name:     "fist_punch",
            title:    "Fist Punch",
            year:     "2016",
            platform: ["Web" ],

            type:    "professional",
            company: "Firehorse",
            role:    "Programmer",
            tech:    ["Unity" ],

            youtube_video_id: "V1tX-iznvSI",
        },



        {
            name:"bow_and_arrow",
            thumbnail_path:"img/games/old/bow_and_arrow.png",
            title:"Bow and Arrow",
            year:"",
            platform:"PC",
            company: "",
            role: "Programmer"
        },
        {
            name:"kaboom",
            thumbnail_path:"img/games/old/kaboom.png",
            title:"Kaboom",
            year:"",
            platform:"PC",
            company: "",
            role: "Programmer"
        },
        {
            name:"ram_it",
            thumbnail_path:"img/games/old/ram_it.png",
            title:"Ram It",
            year:"",
            platform:"PC",
            company: "",
            role: "Programmer"
        },
        {
            name:"space_raiders",
            thumbnail_path:"img/games/old/space_raiders.png",
            title:"Space Raiders",
            year:"",
            platform:"PC",
            company: "",
            role: "Programmer"
        },
        {
            name:"taz",
            thumbnail_path:"img/games/old/taz.png",
            title:"Taz",
            year:"",
            platform:"PC",
            company: "",
            role: "Programmer"
        },


        ////////////////////////////////////////////////////////////////////////
        { name:"roses"       , thumbnail_path: "img/demos/roses.gif",        title:"Roses"        , year:"2020", platform:"Web" },
        { name:"flowfield"   , thumbnail_path: "img/demos/flowfield.gif",    title:"Flowfield"    , year:"2020", platform:"Web" },
        { name:"lissajous"   , thumbnail_path: "img/demos/lissajous.gif",    title:"Lissajous"    , year:"2020", platform:"Web" },
        { name:"doom_fire"   , thumbnail_path: "img/demos/doom_fire.gif",    title:"Doom Fire!"   , year:"2020", platform:"Web" },
        { name:"game_of_life", thumbnail_path: "img/demos/game_of_life.gif", title:"Game of Life" , year:"2020", platform:"Web" },
        { name:"simple_tree", thumbnail_path: "img/demos/simple_tree.gif", title:"Simple Trees!", year:"2020", platform:"Web" },
        { name:"simple_clock", thumbnail_path: "img/demos/simple_clock.gif", title:"Simple Clock!", year:"2020", platform:"Web" },
        { name:"metaballs"   , thumbnail_path: "img/demos/metaballs.gif",    title:"Metaballs"    , year:"2020", platform:"Web" },
        { name:"starfield"   , thumbnail_path: "img/demos/starfield.gif",    title:"Starfield"    , year:"2020", platform:"Web" },
    ];


    for(let item of list) {
        if(item.name == name) {
            return item;
        }
    }
    return null;
}