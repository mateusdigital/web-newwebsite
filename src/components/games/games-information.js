function make_platform_icons(platforms) { 
    const icons = [];
    for(let i = 0; i < platforms.length; ++i) { 
        const platform = platforms[i].trim().toLowerCase();


        if(platform == "xbox") { 
            icons.push('<i class="fab fa-xbox"></i>');
        } else if(platform == "playstation") {
            icons.push('<i class="fab fa-playstation"></i>');
        } else if(platform == "pc") { 
            icons.push('<i class="fas fa-desktop"></i>');
        } else if(platform == "steam") { 
            icons.push('<i class="fab fa-steam"></i>');
        } else if(platform == "mobile") { 
            icons.push('<i class="fas fa-mobile-alt"></i>');
        } else if(platform == "web") { 
            icons.push('<i class="fas fa-code"></i>');        
        } else if(platform == "game boy") { 
            // icons.push('<i class="fab fa-gg"></i>');
            icons.push('<i class="fas fa-microchip"></i>');        
        } else if(platform == "retro") { 
            icons.push('<i class="fas fa-microchip"></i>');        
        } else if(platform == "dlc") { 
            icons.push('<i class="fas fa-file-download"></i>');
        } else if(platform == "middleware") { 
            icons.push('<i class="fas fa-cogs"></i>');
        }
        else { 
            debugger;
        }
    }
    return icons;
}

function GamesInformation_(name) {
    const list = [
        {
            name:     "el_jamon_volador",
            title:    "El Jamon Volador",
            year:     "2019",
            type:     "personal",

            tech:     ["C", "gbdk"],
            platform: ["Game Boy"],

            download: [
                ["download-rom", "/dist/el-ramon-volador-gb.zip"],
                ["play-browser", "/modules/games/el_jamon_volador/website/index.html"]
            ]
        },

            // name:"personal/simple_snake",
        {
            name:     "simple_snake",
            title:    "Simple Snake!",
            year:     "2018",
            type:     "personal",
            platform: ["Web"],
            tech:     ["Javascript", "Canvas API"],

            is_playable_on_canvas: true,

            download: [
                ["play-browser", "/modules/games/nuclear_rain/website/index.html"],
            ]
        },

            // name:"personal/nuclear_rain"
        {
            name:     "nuclear_rain",
            title:    "Nuclear Rain",
            year:     "2018",
            type:     "personal",
            platform: ["Web"],
            tech:     ["Javascript", "Canvas API"],

            is_playable_on_canvas: true,

            download: [
                ["play-browser", "/modules/games/nuclear_rain/website/index.html"],
            ]
        },

            // name:"personal/cosmic_intruders"
        {
            name:     "cosmic_intruders",
            title:    "Cosmic Intruders",
            year:     "2018",
            type:     "personal",
            platform: ["Web"],
            tech:     ["C++", "Emscripten, Javascript"],

            is_playable_on_canvas: true,

            download: [
                ["play-browser", "/modules/games/nuclear_rain/website/index.html"],
            ]
        },

            // name:"personal/the_mistral_report"
        {
            name:"the_mistral_report",
            title:"The Mistral Report",
            year:"2020",
            type:     "personal",
            platform: ["RETRO"],
            tech:     ["C++", "Emscripten, Javascript"],

            download: [
                ["play-browser", "/modules/games/cosmic_intruders/website/index.html"],
            ]
        },

            // name:"personal/color_grid"
        {
            name:"color_grid",
            title:"Color Grid",
            year:"2020",
            platform: ["Web"],
            type:     "personal",
        },

            // name:"personal/memory_amazing_cow"
        {
            name:"memory_amazing_cow",
            title:"Memory - Amazing Cow!",
            year:"2020",
            platform: ["Web"],
            type:     "personal",
        },


        // --------------------------------------------------------------------
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
            year:    "2021",
            platform: ["PC", "XBOX", "PLAYSTATION"],

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
            platform: ["STEAM" ],

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
            name:     "fist_punch_2",
            title:    "Fist Punch 2",
            year:     "2016",
            platform: ["Web" ],

            type:    "professional",
            company: "Firehorse",
            role:    "Programmer",
            tech:    ["Unity" ],

            youtube_video_id: "V1tX-iznvSI",
        },

        // ---------------------------------------------------------------------
        {
            name:     "bow_and_arrow",
            title:    "Bow and Arrow",
            year:     "2020",
            platform: ["PC"],
            type:     "old",
            tech:     ["Monogame", "C#"],
        },
        {
            name:"kaboom",
            title:"Kaboom",
            year:     "2020",
            platform: ["PC"],
            type:     "old",
            tech:     ["Pygame", "python"],
        },
        {
            name:"ram_it",
            title:"Ram It",
            year:     "2020",
            platform: ["PC"],
            type:     "old",
            tech:     ["Pygame", "python"],
        },
        {
            name:"space_raiders",
            title:"Space Raiders",
            year:     "2020",
            platform: ["PC"],
            type:     "old",
            tech:     ["Terminal", "C++"],
        },
        {
            name:"taz",
            title:"Taz",
            year:     "2020",
            platform: ["PC"],
            type:     "old",
            tech:     ["Pygame", "python"],
        },

        ////////////////////////////////////////////////////////////////////////
        { type: "demo", name:"gameboy-css" , title:"Gameboy CSS"  , year:"2023", platform: ["Web"], tech: ["CSS"] },

        { type: "demo", name:"roses"       , title:"Roses"        , year:"2020", platform: ["Web"], tech: ["Javascript", "demolib"] },
        { type: "demo", name:"flowfield"   , title:"Flowfield"    , year:"2020", platform: ["Web"], tech: ["Javascript", "demolib"] },
        { type: "demo", name:"lissajous"   , title:"Lissajous"    , year:"2020", platform: ["Web"], tech: ["Javascript", "demolib"] },
        { type: "demo", name:"doom_fire"   , title:"Doom Fire!"   , year:"2020", platform: ["Web"], tech: ["Javascript", "demolib"] },
        { type: "demo", name:"game_of_life", title:"Game of Life" , year:"2020", platform: ["Web"], tech: ["Javascript", "demolib"] },
        { type: "demo", name:"simple_tree",  title:"Simple Trees!", year:"2020", platform: ["Web"], tech: ["Javascript", "demolib"] },
        { type: "demo", name:"simple_clock", title:"Simple Clock!", year:"2020", platform: ["Web"], tech: ["Javascript", "demolib"] },
        { type: "demo", name:"metaballs"   , title:"Metaballs"    , year:"2020", platform: ["Web"], tech: ["Javascript", "demolib"] },
        { type: "demo", name:"starfield"   , title:"Starfield"    , year:"2020", platform: ["Web"], tech: ["Javascript", "demolib"] },
    ];

    for(let i = 0; i < list.length; ++i) { 
        const item = list[i];
        item.platform_icons = make_platform_icons(item.platform);
    }

    if(!name) {
        return list;
    }

    for(let item of list) {
        if(item.name == name) {
            return item;
        }
    }
    return null;
}

module.exports = GamesInformation_;
// export default GamesInformation_;
