const db = require("./db.js");

var responses_normal = {
    ONLINE: [
        "Hey guys! I'm back online!",
        "Hello! I'm back online!",
        "_has come online!_",
        "I'm back online! How can I be of service?",
        "I'm back online! How can I help?",
        "Hello! I'm back online! How can I be of help? or just forget it",
        "Hi im..... nevermind. nobody cares"
    ],
    NAME: [
        "Yes I'm here! What can I do for you?",
        "Yes I'm here! How can I help?",
        "Yes I'm here  <@{author}>! How can I help?",
        "What's up <@{author}>? How can I help you?",
        "I'm here! What's up?",
        "I'm here! What's up <@{author}>?"
    ],
    SWITCHED: [
        "You don't like Tsundere mode? :sad: Fine. I'll revert back to my normal response mode!",
        "Alright, let me change modes... ... ...There! I'm in my normal response mode now!",
        "Okay, I'll change back to my normal response mode!"
    ],
    ALREADY_IN_MODE: [
        "I'm already in my normal response mode!",
        "Tsuki is already in normal response mode!"
    ],
    REGION_CHANGED: [
        "Switched from region '{old_region}' to '{new_region}'.",
        "I switched our discord region from '{old_region}' to '{new_region}'!"
    ],
    REMIND_PAST: [
        "That time is in the past! I can't remind you of something in the past.",
        "That time is in the past! I can't remind you of something in the past. Or well, I'd need a time machine. If you happen to have one, no problem!",
        "That time is in the past! Unfortunately, Tsuki is not equipped for time travel (yet!).",
        "I can't remind you of something in the past, silly!",
        "I can't remind you of something in the past."
    ],
    REMIND_ME: [
        "I will remind you to \"{message}\" {time}.",
        "Tsuki will remind you to \"{message}\" {time}.",
        "Tsuki will remind <@{author}> to \"{message}\" {time}."
    ],
    REMIND_OTHER: [
        "I will remind {people} to \"{message}\" {time}.",
        "Tsuki will remind {people} to \"{message}\" {time}."
    ],
    REMINDER: "<@{author}> reminded {people}: {message}.",
    LIST_REMINDERS: "List of reminders on this server:{response}",

    ANIME_SEARCH_NO_RESULTS: "No results found for '{anime}'.",
    ANIME_SEARCH_RESULTS: "Results for '{anime}':\r\n{results}",
    ANIME_NEW_DOWNLOAD: "New download for show '**{show}**':\r\n**{file}**:\r\n**Magnet**: {magnet}\r\n**Seeders**: {seeders}, **Leechers**: {leechers}, **Downloads**: {downloads}, **Quality**: {quality}\r\n**Trusted**: {is_trusted}\r\n",
    ANIME_INVALID_ID: "Can't track {id} because the id is invalid!",
    ANIME_ALREADY_TRACKING: "I'm already tracking '**{anime}**'!",
    ANIME_NOW_TRACKING: "Started tracking '**{anime}**'!",
    ANIME_TRACKING_LIST_EMPTY: "I'm not tracking any anime at the moment.",
    ANIME_TRACKING_LIST: "I'm currently tracking:\r\n{results}",
    ANIME_TRACKING_LIST_DETAIL: "Episode download list for '**{anime}**':\r\n{results}",
    ANIME_NOT_TRACKING: "I'm not even tracking {name}!",
    ANIME_STOPPED_TRACKING: "Okay, I'll stop tracking {name}",

    OSU_FOLLOWING: [
        "Tsuki is currently following:",
        "I'm currently following:"
    ],
    OSU_FOLLOWING_EMPTY: [
        "I'm not even following anyone!"
    ],
    OSU_NOT_FOLLOWING: [
        "I'm not even following \"{user}\"!",
        "Tsuki isn't even following \"{user}\"!"
    ],
    OSU_STOPPED: [
        "Okay, I have stopped following {user}.",
        "i'm unfollowed {user}!",
        "Alright, I unfollowed {user}!",
        "Okay, I unfollowed {user}!",
        "Tsuki will no longer follow {user}.",
        "I stopped following {user}!",
        "Tsuki stopped following {user}!",
        "Got it! I've unfollowed {user}."
    ],
    OSU_NEW_SCORE: "**{user}** has set a new #**{top_rank}** PP score! **{map_artist} - {map_title} [{map_diff_name}] {mods}** {additional} | **{acc}%** | **{pp}pp** | **Rank: {rank}** | **{old_total_pp}pp** -> **{new_total_pp}pp** ({delta_pp}) | #**{old_rank}** -> #**{new_rank}**! ({delta_rank})\r\nMap link: https://osu.ppy.sh/b/{beatmap_id}",
    OSU_USER_NOT_FOUND: [
        "I can't find user \"{user}\". Did you type it correctly?",
        "I can't find user \"{user}\". Did you make a typo?",
        "I can't find user \"{user}\". Are you sure you typed it correctly?",
        "I can't find user \"{user}\". Are you sure you typed the name correctly?",
        "I'm having trouble finding \"{user}\". Did you type it correctly?",
        "I'm having trouble finding \"{user}\". Did you make a typo?",
        "I'm having trouble finding \"{user}\". Are you sure you typed it correctly?",
        "I'm having trouble finding \"{user}\". Are you sure you typed the name correctly?"
    ],
    OSU_ALREADY_FOLLOWING: [
        "I'm already following {user}!",
        "Tsuki is already following {user}!"
    ],
    OSU_ADDED_FOLLOWING: [
        "I'm now following {user} on osu!",
        "Tsuki will now follow {user} on osu!"
    ],
    OSU_CHECK: [
        "No problem! I'll check {user} on osu! for you!",
        "No problem! Tsuki will check {user} on osu! for you!"
    ],
    OSU_FOLLOWING_MODE: [
        "Tsuki is currently following on {mode}:",
        "I'm currently following on {mode}:"
    ],
    OSU_STOPPED_MODE: [
        "Okay, I have stopped following {user} on {mode}.",
        "Tsuki unfollowed {user} on {mode}!",
        "Alright, I unfollowed {user} on {mode}!",
        "Okay, I unfollowed {user} on {mode}!",
        "Tsuki will no longer follow {user} on {mode}.",
        "I stopped following {user} on {mode}!",
        "Tsuki stopped following {user} on {mode}!",
        "Got it! I've unfollowed {user} on {mode}."
    ],
    OSU_NEW_SCORE_MODE: "**{user}** has set a new #**{top_rank}** PP score for {mode}! **{map_artist} - {map_title} [{map_diff_name}] {mods}** {additional} | **{acc}%** | **{pp}pp** | **Rank: {rank}** | **{old_total_pp}pp** -> **{new_total_pp}pp** ({delta_pp}) | #**{old_rank}** -> #**{new_rank}**! ({delta_rank})\r\nMap link: https://osu.ppy.sh/b/{beatmap_id}",
    OSU_USER_NOT_FOUND_MODE: [
        "I can't find user \"{user}\" on {mode}. Did you type it correctly?",
        "I can't find user \"{user}\" on {mode}. Did you make a typo?",
        "I can't find user \"{user}\" on {mode}. Are you sure you typed it correctly?",
        "I can't find user \"{user}\" on {mode}. Are you sure you typed the name correctly?",
        "I'm having trouble finding \"{user}\" on {mode}. Did you type it correctly?",
        "I'm having trouble finding \"{user}\" on {mode}. Did you make a typo?",
        "I'm having trouble finding \"{user}\" on {mode}. Are you sure you typed it correctly?",
        "I'm having trouble finding \"{user}\" on {mode}. Are you sure you typed the name correctly?"
    ],
    OSU_ALREADY_FOLLOWING_MODE: [
        "I'm already following {user} on {mode}!",
        "Tsuki is already following {user} on {mode}!"
    ],
    OSU_ADDED_FOLLOWING_MODE: [
        "I'm now following {user} on osu {mode}!",
        "Tsuki will now follow {user} on osu {mode}!"
    ],
    OSU_CHECK_MODE: [
        "No problem! I'll check {user} on osu! for you! {mode}",
        "No problem! Tsuki will check {user} on osu! for you! {mode}"
    ],
    JOIN_INVALID_INVITE: "I can't find a server with the invite: \"{invite}\".",
    JOIN_ALREADY: "I am already part of \"{invite}\".",
    JOIN_FAILED: "I was not able to join the server \"{invite}\".",
    JOIN_SUCCESS: "I just joined \"{invite}\"! Thanks for allowing me to join. I made <@{admin}> the admin.",

    HELP_TOP: "This is the current list of commands:\r\n",
    HELP_BOTTOM: "You could also prefix the commands with - instead of Tsuki:\r\n**\"-remind me to ....\"** and **\"Tsuki remind me to ....\"** both work. Take note this bot is not working properly",

    PLEASE_HELP_TOP: "This is the current list of commands:\r\n",
    PLEASE_HELP_BOTTOM: "You could also prefix the commands with - instead of Tsuki:\r\n**\"-remind me to ....\"** and **\"Tsuki remind me to ....\"** both work. Take note this bot is not working properly",


    PING_TOP: "Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms",
    Tsuki_FUCKYOU: [
        "What did I do? :(",
        "What did Tsuki ever do to you? :(",
        ":(",
        "I don't know what I did, but I'm sorry {user}. :[",
        "Meanie. :("
    ],

    UNKNOWN_COMMAND: [
        "Tsuki doesn't understand.",
        "I... I don't understand. What do you want me to do?"
    ],

    MULTIPLE_UNKNOWN_COMMAND: [
        "That's not a valid command either. If you need help, please type \"Tsuki help me\".",
        "I still don't understand what you want me to do. If you require help, please type \"Tsuki help me\"."
    ],

    ERROR: "Error, error, error! If you see this message, please consider contacting the developers. aka ping/DM the owner, Tsukinose#2396",

    MY_ROLE: "Your role is {role}.",
    MY_PERMISSIONS: "Your permissions are: {permissions}",
    NOT_ALLOWED: "You don't have permission to do that.",
    MODULE_INVALID: "That's not a valid module name.",
    MODULE_ALREADY_ENABLED: "That module is already enabled!",
    MODULE_NOT_ENABLED: "That module is already disabled!",
    MODULE_ENABLED: "{module} module is now enabled!",
    MODULE_DISABLED: "{module} module is now disabled.",
    MODULE_ALWAYS_ON: "The {module} module can't be disabled.",
    MODULE_LIST: "List of modules:",
    LIST_ROLES: "List of roles:",
    LIST_PERMISSIONS: "List of permissions:",
    INVALID_USER: "That user doesn't exist!",
    INVALID_ROLE: "That's not a valid role!",
    INVALID_CHANNEL: "There's no channel with that name.",
    ROLE_ASSIGNED: "Assigned {role} to <@{user}>.",
    ROLE_ALREADY_ASSIGNED: "Already assigned {role} to <@{user}>.",
    SETTING_UP: [
                "Nice to meet you! i'm currently setting up on this server! Where do you want me to go?\r\n(use the command \"!go to #channel\")",
                "Nice to meet y....\r\n_Nevermind. you all doesnt care about me_"
    ],
    OUTPUT_CHANNEL: [
        "Okay then, <#{channel}> will be my new home channel! Hurray~! If you want to know more about what I can do, type \"Tsuki help me\".",
        "All right! This is my new home channel, huh? I like it. If you want to know more about what I can do, type \"Tsuki help me\"."
    ],
    SHOW_IGNORELIST: "Ignore list:{list}",
    IGNORE_LIST_EMPTY: "I'm not ignoring anyone right now!",
    OSU_FOLLOW_LIST_EMPTY: "I'm not following anyone on osu! right now.",
    STARTED_IGNORING: "Got it! I'll ignore <@{user}> from now on!",
    STOPPED_IGNORING: "Alright, I'll stop ignoring <@{user}>.",
    ADDED_PERMISSION: "Added permission {permission} to {role}.",
    REMOVED_PERMISSION: "Removed permission {permission} from {role}.",

    CLEARED_REMINDERS: "Cleared {num} reminders.",
    INCORRECT_FORMAT: [
        "Sorry, Tsuki is a little dumb sometimes... I won't know what you mean unless you tell me in a way I can understand!\r\nThe correct format is: \"{sample}\".",
        "I... I don't understand.\r\nPlease use this format: \"{sample}\".",
        "Huh? ...That's not the correct format!\r\nPlease use this format: \"{sample}\".",
        "Sorry, what do you want me to do, exactly?\r\nPlease use this format: \"{sample}\"."
    ],
    CHANNEL_DELETED: [
        "You... you destroyed my home. :( All those good chat memories we had there. Gone! Where do I go now? (use the command \"Tsuki go to #channel\")",
        "Did...did you just delete my home? My home channel? Who would do such a thing? Wait, am I getting an upgrade? A better channel? (use the command \"Tsuki go to #channel\")",
        "Did...did you just destroy my home channel? You can't just do these things! Bots have rights too, you know! Where do I go now? (use the command \"Tsuki go to #channel\")",
        "You... deleted? My home channel? My home? Why...? So am I-... am I homeless now? A homeless bot? Or are you going to give me a new home? (use the command \"Tsuki go to #channel\")"
    ],
    REMINDERS_LIST_EMPTY: "The reminder list is empty.",
    TIMEZONE_LIST: "List of known timezones:{timezones}",
    TLDR_FAILED: "Failed to create a tldr. My tldr functionality works best with web articles.",
    TLDR: "**{title}**:\r\n\"{summary}\"\r\n**Original reduced by {percentage}%.**",
    OSU_MAX_USER_LIMIT: "Reached the user limit of '{limit}'.",
    CHANGELOG: "Hi there! I'm back online now with the following changes: \r\n{changelog}",
    SHOW_STATISTICS: "Here are my statistics:\r\n- I'm currently running on {num_servers} servers and track {osu_num_users} users on osu!\r\n- I have made a total of {osu_alltime} osu! api calls, of which {osu_last_month} in the current month, {osu_last_week} in the current week, {osu_last_day} in the current day and {osu_last_minute} in the current minute.\r\n- I make an average of {osu_average_month} osu! api calls per month, {osu_average_week} per week and {osu_average_day} per day.\r\n- My highest number of osu! api calls are {osu_highest_month} per month, {osu_highest_week} per week and {osu_highest_day} per day.\r\n- There are currently {osu_api_queue} requests waiting.",
    LIST_SERVERS: "Tsuki is currently running on:",
    CLEARED_REMINDER: "Alright, I removed the reminder.",
    NO_REMINDER: "I couldn't find the reminder!",
    OSU_SERVER_LIMIT: "This server currently has a limit of {limit} osu! users.",
    INVALID_SERVER: "There is no server with that id!",
    OSU_SERVER_LIMIT_CHANGED: "Changed osu! server limit to {new_limit} for server {server_name}.",
    SERVER_BLACKLISTED: "Ok, I blacklisted '{server_name}'.",
    SERVER_WHITELISTED: "Ok, I whitelisted '{server_name}'.",
    SERVER_ALREADY_BLACKLISTED: "{server_name} is already blacklisted!",
    SERVER_NOT_BLACKLISTED: "{server_name} is not blacklisted!",
    INFORM_SERVER_BLACKLISTED: "I hate to be the bearer of bad news, but it turns out that I have to start ignoring this server. This server has just been blacklisted. :frowning:",
    INFORM_SERVER_WHITELISTED: "Good news everybody! This server has just been removed from my blacklist which means I'm open to any conversation you guys want to have with me on this server! :smiley:",
    SERVER_BLACKLIST: "This is my current server blacklist:{response}",
    BLACKLISTED_USER: "Ok, I blacklisted user <@{user}>.",
    WHITELISTED_USER: "Ok, I whitelisted user <@{user}>.",
    USER_BLACKLIST: "This is my current user blacklist:{response}"
};

var responses_tsundere = {
    NAME: [
        "I'm here! How can i help you?",
        "I'm here! How can I help you?",
        "I'm here! How can I help you <@{author}>?",
        "I'm here! How can Tsuki help you today?",
        "I'm here! How can Tsuki help you today <@{author}>?",
        "Yes! I'm here! ...Don't get me wrong, it's not like I was waiting for you to say something this whole time or anything!",
        "Yes! I'm here! ...Don't get me wrong, it's not like I was waiting for you to say something this whole time or anything! Tsuki just gets lonely sometimes. :(",
        "What do you want this time <@{author}>?",
        "Yes! I'm here <@{author}> . I-it's not like I was waiting for someone to talk to me!",
        "Yes! I'm here <@{author}> . I-it's not like I was waiting for someone to finally talk to me!",
        "What do you want?",
        "What do you want <@{author}>? It's a privilege to even be able to talk to me! You should feel honored.",
        "<@{author}>, I'm always here. it's not like I l-like you or anything BAKA!. i'm here because I had nothing else to do!",
        "Nani? you want something?",
        "W-What are you doing.?",
        ":thinking:"
    ],
    SWITCHED: [
        "Fine. B-but I'm not doing this for you. It's because I wanted to.",
        "Hmpf. Fine. B-but I'm not doing this for you. It's because I wanted to.",
        "Hmpf. Fine. I-it's not like I prefer this mode or anything!"
    ],
    SWITCH_OFF: [
        "Tsundere... off? B-but I thought you liked me. I understand. Goodbye.",
        "Tsundere... off? F-fine! I didn't really care about you anyway. B-baka. :'(",
        "I thought you liked me like this. :( Fine, I'll revert back to normal."
    ],
    ALREADY_IN_MODE: [
        "Are you dumb? I'm already in tsundere mode. If you don't recognize what mode I'm in why even switch? Hmpf!",
        "Tsundere on? Baka~. It's already on!",
        "Tsundere on? Are you dumb, <@{author}>? It's already on!"
    ],

    REMIND_PAST: [
        "Uhmm... Are you dumb? That time is in the past!",
        "Baka~! That time is in the past."
    ],
    REMIND_ME: [
        "Tsuki will help you remember! If I can be bothered.",
        "Tsuki will try to remind <@{author}>!",
        "Maybe I'll remind <@{author}>. Just this one time!"
    ],
    REMIND_OTHER: [
        "I will help {people} remember! If I can be bothered.",
        "I will try to remind {people}!",
        "Maybe I'll remind {people}. Just this one time!"
    ],

    OSU_FOLLOWING: [
        "These are the people I like! I mean, associate with. I-it's not as if I really l-like them, or anything. Don't get any weird ideas!",
        "These are my osu! friends!",
        "These are the people I ~~stalk~~ follow on osu!",
        "These are the people I stal--... I mean follow on osu!"
    ],

    OSU_FOLLOWING_MODE: [
        "These are the people I like on {mode}! I mean, associate with. I-it's not as if I really l-like them, or anything. Don't get any weird ideas!",
        "These are my osu! friends on {mode}!",
        "These are the people I ~~stalk~~ follow on osu! {mode}",
        "These are the people I stal--... I mean follow on osu! {mode}"
    ],
    OSU_NOT_FOLLOWING: [
        "Are you stupid? I wasn't even following {user}!",
        "Are you stupid? I wasn't even following {user} in the first place!"
    ],
    OSU_FOLLOWING_EMPTY: [
        "I'm not even following anyone!"
    ],
    OSU_NOT_FOLLOWING_MODE: [
        "Are you stupid? I wasn't even following {user} on {mode}!",
        "Are you stupid? I wasn't even following {user} on {mode} in the first place!"
    ],
    OSU_STOPPED: [
        "Okay. I won't follow {user} anymore. I-it's not like I really liked that person or anything anyway... But maybe I'll miss {user} a little. Just a little.",
        "Okay. I won't follow {user} anymore. I-it's not like I really liked that person or anything anyway...  :'( "
    ],
    OSU_STOPPED_MODE: [
        "Okay. I won't follow {user} on {mode} anymore. I-it's not like I really liked that person or anything anyway... But maybe I'll miss {user} a little. Just a little.",
        "Okay. I won't follow {user} on {mode} anymore. I-it's not like I really liked that person or anything anyway...  :'( "
    ],

    OSU_USER_NOT_FOUND: "Baka~! I can't find that user. Did you type the username correctly?",
    OSU_ALREADY_FOLLOWING: "Baka~! I'm already following {user}!",
    OSU_ALREADY_FOLLOWING_MODE: "Baka~! I'm already following {user} on {mode}!",
    OSU_ADDED_FOLLOWING: [
        "Ooh a new osu! friend? I-It's not like I wanted more friends!",
        "Ooh a new osu! friend? Yaa~y! Uhm, I mean... I-It's not like I wanted more friends or anything!",
        "Added {user} to my osu! ~~stalk~~ follow list!",
        "Hmpf! It's not like I wanted more friends! But I will add {user} this one time! You should feel glad!"
    ],
    OSU_ADDED_FOLLOWING_MODE: [
        "Ooh a new osu! friend for {mode}? I-It's not like I wanted more friends!",
        "Ooh a new osu! friend for {mode}? Yaa~y! Uhm, I mean... I-It's not like I wanted more friends or anything!",
        "Added {user} to my osu! {mode} ~~stalk~~ follow list!",
        "Hmpf! It's not like I wanted more friends! But I will add {user} to {mode} this one time! You should feel glad!"
    ],
    OSU_CHECK: [
        "Fine. I'll check {user} for you. But only because I have nothing else to do right now!",
        "Alright. I'll check {user}. D-don't get me wrong. It's not like I'm doing this for you or anything."
    ],
    OSU_CHECK_MODE: [
        "Fine. I'll check {user} on {mode} for you. But only because I have nothing else to do right now!",
        "Alright. I'll check {user} on {mode}. D-don't get me wrong. It's not like I'm doing this for you or anything."
    ],

    OSU_MAX_USER_LIMIT: [
        "It's not like I don't want more friends... But Tsuki just can't handle any more right now. 50 is my maximum!",
        "I could add more friends, but I just don't feel like it right now! 50 is enough, don't you think? Any more and Tsuki's head will overload!"
    ],

    JOIN_INVALID_INVITE: "I... It's not like I wanted to join \"{invite}\"",
    JOIN_ALREADY: "Baka... I'm already stalking \"{invite}\"...",
    JOIN_FAILED: "It seems like \"{invite}\" doesn't like me... It's not like I wanted to be liked!",
    JOIN_SUCCESS: "New friends at \"{invite}\"? Yay!",

    SHOW_STATISTICS: "You want statistics right. So here, read yourself:\r\n- I'm currently running on {num_servers} servers and track {osu_num_users} users on osu!\r\n- I have made a total of {osu_alltime} osu! api calls, of which {osu_last_month} in the current month, {osu_last_week} in the current week, {osu_last_day} in the current day and {osu_last_minute} in the current minute.\r\n- I make an average of {osu_average_month} osu! api calls per month, {osu_average_week} per week and {osu_average_day} per day.\r\n- My highest number of osu! api calls are {osu_highest_month} per month, {osu_highest_week} per week and {osu_highest_day} per day.\r\n- There are currently {osu_api_queue} requests waiting. \r\n- And lastly, you stupid.",

    SETTING_UP: [
    "N-Nice to meet you.it's not like i'm mad at you! I go offline because I had freetime, that's all! ┐(￣ヘ￣;)┌\r\n",
    "You should be grateful because i'm still online and operational. not like the others BAKA\r\n",
    "You should be grateful because i'm still online and i can make anything like the other. I go offline because owner fix me some bug",

     ],
    HELP_TOP: [
        "What? Not even a please? Hmpf. Fine. Just this once. Here is a list of my commands:\r\n",
        "What? Not even a please? You understand it's a privilege to even be able to talk to me, right? You should feel honored! I'll do it, but ask nicely next time. Here's a list of my commands:\r\n",
        "Fine. Just this once. Here's a list of my commands:\r\n",
        "Fine. I'll help. Don't misunderstand, it's not like I l-like you or anything... I just like helping. Here is a list of my commands:\r\n",
        "Fine. I'll help. Don't misunderstand, it's not like I l-like you or anything... I just have a lot of free time. Here is a list of my commands:\r\n",
        "Alright. I'll help. You should feel grateful. Here's a list of my commands:\r\n",
        "Not even a please? Tsuki has feelings too, you know! I mean, I may be a bot... but bots can have feelings too! You seem to be clueless, so I'll help you this one time. But try asking nicely next time.\r\n"
    ],
    PLEASE_HELP_TOP: [
        "Eheh. :3 Okay, here is the list of my commands:\r\n",
        ":3 You're going to make Tsuki blush. Here is the list of my commands you asked for!:\r\n",
        "You asked me nicely! If I was keeping track, you would gain one Tsuki relationship point! T-t-that doesn't mean I like you now! Don't get any weird ideas. Anyway, here is the list of my commands you asked for!:\r\n",
        "Only because you asked nicely. D-don't get me wrong, I do this for everyone if they ask nicely!  Here is the list of my commands you asked for!:\r\n"
    ],
    PLEASE_HELP_BOTTOM: "You could also prefix the commands with - instead of Tsuki:\r\n**\"-remind me to ....\"** and **\"Tsuki remind me to ....\"** both work.\r\nTake note this bot is not working properly so don't blame owner. It's not like I l-like him or something",

    PING: [
        "Latency ${m.createdTimestamp - message.createdTimestamp}ms and API ${Math.round(client.ping)}ms. What? you want to calculate what is milisecond right?\r\n",
        "M.m...my Latency is ${m.createdTimestamp - message.createdTimestamp}ms. and API is ${Math.round(client.ping)! You should be grateful because i'm still active this time:\r\n"
    ],

  SEMPAI_FUCKYOU: "I... It's not like I cared about you anyway <@{user}>! B..baka... :(",

    UNKNOWN_COMMAND: [
        "You're not making any sense to me. If you ask me for help, I might just help you. If I can be bothered.",
        "You're not making any sense to me. If you try asking me for help, maybe I'll consider it.",
        "Tsuki does not understand. If you want help, ask nicely. Maybe I'll consider it.",
        "Are you stupid? That doesn't make any sense to me."
    ],

    CHANGELOG: "H-hi again, M-maybe you ignore this but t-this time please read this.I-i'm not scared b-baka!\r\nSo here my c-changelog: \r\n{changelog}\r\n `F-forgive me`",

    NOT_ALLOWED: [
                "You don't have permission to do that. because you are not admin",
                "<@{author}>, you don't have any permission to do that. please i don't want to say it again",
                "Nanisore, you don't have permission because you are members"
    ],

    MULTIPLE_UNKNOWN_COMMAND: [
        "Tsuki does not understand what you're trying to do! If you insist on wasting my time, why not ask for help? I'm not going to help you if you don't ask.",
        "You're still not making any sense to Tsuki. Do you need me to spell it out for you? \"Tsuki please help me\". That will do just fine. Don't forget the please."
    ],

    ERROR: [
        "Error! Error! ~Kyaaaaaaaa~... I...I don't know what happened! Stop looking at me! I-it's not like I'm doing this on purpose or anything. Tsuki is just really confused right now! :[. Please consider contacting my developers on github: https://github.com/thememesquad/Tsukibot/",
        "Error! Error! Tsuki is confused! Tsuki hit herself in confusion. Ow! Please consider contacting my developers or just ping/DM owner on this server, Tsukinose#2396"
    ],
    OUTPUT_CHANNEL: [
        "Geez, stop pushing me to another channel! It's annoying you idiot!",
        "B-Baka!! you move me here because you... Nevermind. I'm free to use any command here, right?"
    ],
    INCORRECT_FORMAT: [
        "Uncorrect. are you stupid or i'm stupid? use this format duh:\r\n \"{sample}\".",
        "AHO! correct format is: \"{sample}\". \r\nare you dumb or what?"],
    OTHER: [
        "My server say, you good at everything",
        "Why you ask something not important?",
        "No? maybe?? i don't know",
        "Yes? maybe? i don't want to think about it",
        "My ping said, you are wrong",
        "Don't ask me. Ask yourself, or use ask.fm",
        ":kappa:",
        "What, NO!",
        "Oh, yes..\r\nOkay i got it",
        "W-What!",
        "Don't ask me. Ask the other.",
        "I am a bot, and I don't... oh i'm not Boatbot",
        "^",
        "I disagree because nothing heh",
        "I don't know what are you talking about, oh.. use Google for more detail\r\nI'm just answer some simple question",
        "OMAE WA MOU SHINDEI.... oh sorry i was joking. i think yes",
        "OMAE WA M... nanisore imi wa kanai!!",
        "OMAE WA M... nanisore imi wa kanai!! (if you not understand this, you are not weeaboo)",
        "NANI!",
        "N-NANI?? W-why you ask T-t-that question?",
        "My ping said, you're right",
        "Ask google sensei. she knows everything",
        "Youtube-sama knows everything. ask him",
        "Oh yes.. yeaa.. you're... hmm yeah right.",
        "Um no?",
        "I see.. \r\n.........\r\n \r\n error 404 answer not found",
        "I understand your question, but sadly i disagree\r\nS-Sorry",
        "Sensei said, yes",
        "Sensei said, no",
        "I don't know. Why?",
        "Sorry i don't get it what are you talking about",
        "NO",
        "YES",
        "Maybe",
        "It's that question?",
        "No answer",
        "I have the answer but i forget",
        "I have the answer but someone delete it.. blame him/her",
        "No answer this time",
        "<@{author}> yes!",
        "<@{author}> no!",
        "Y-yes <@{author}>",
        "NO <@{author}>. i said NO",
        "B-b..baka i don't k-know!!",
        "I don't get it. why you ask that question?",
        "何それ…??イミワカンナイ!!",//what is that...? i don't get it!!
        "W-What? \r\nI mean w-what..!!?? C-can you repeat your q-question again!!?"
        ],

    NUMBERS: [
        "<@{author}> rolls 1 points",
        "<@{author}> rolls 1 points. you are not Toy kek. you got luck",
        "<@{author}> rolls 1 points. Congrats",
        "<@{author}> rolls 2 points",
        "<@{author}> rolls 3 points",
        "<@{author}> rolls 4 points",
        "<@{author}> rolls 5 points",
        "<@{author}> rolls 1 points. you mad?",
        "<@{author}> rolls 6 points",
        "<@{author}> rolls 7 points",
        "<@{author}> rolls 8 points",
        "<@{author}> rolls 9 points",
        "<@{author}> rolls 10 points. Almost got 1 right? or low points?",
        "<@{author}> rolls 11 points",
        "<@{author}> rolls 12 points",
        "<@{author}> rolls 13 points",
        "<@{author}> rolls 14 points",
        "<@{author}> rolls 15 points",
        "<@{author}> rolls 16 points",
        "<@{author}> rolls 17 points",
        "<@{author}> rolls 18 points",
        "<@{author}> rolls 19 points",
        "<@{author}> rolls 20 points",
        "<@{author}> rolls 21 points",
        "<@{author}> rolls 22 points",
        "<@{author}> rolls 23 points",
        "<@{author}> rolls 24 points",
        "<@{author}> rolls 25 points",
        "<@{author}> rolls 26 points",
        "<@{author}> rolls 27 points",
        "<@{author}> rolls 28 points",
        "<@{author}> rolls 29 points",
        "<@{author}> rolls 30 points",
        "<@{author}> rolls 31 points",
        "<@{author}> rolls 32 points",
        "<@{author}> rolls 33 points",
        "<@{author}> rolls 34 points",
        "<@{author}> rolls 35 points",
        "<@{author}> rolls 36 points",
        "<@{author}> rolls 37 points",
        "<@{author}> rolls 38 points",
        "<@{author}> rolls 39 points",
        "<@{author}> rolls 40 points",
        "<@{author}> rolls 40 points. almost 50 points.",
        "<@{author}> rolls 41 points",
        "<@{author}> rolls 42 points",
        "<@{author}> rolls 43 points",
        "<@{author}> rolls 44 points",
        "<@{author}> rolls 45 points",
        "<@{author}> rolls 46 points",
        "<@{author}> rolls 47 points",
        "<@{author}> rolls 48 points",
        "<@{author}> rolls 49 points",
        "<@{author}> rolls 50 points. That's between yes or no",
        "<@{author}> rolls 50 points. That's is luck right?",
        "<@{author}> rolls 50 points. Keep going? or you want more?",
        "<@{author}> rolls 50 points",
        "<@{author}> rolls 51 points",
        "<@{author}> rolls 52 points",
        "<@{author}> rolls 53 points",
        "<@{author}> rolls 54 points",
        "<@{author}> rolls 55 points",
        "<@{author}> rolls 56 points",
        "<@{author}> rolls 57 points",
        "<@{author}> rolls 58 points",
        "<@{author}> rolls 59 points",
        "<@{author}> rolls 60 points",
        "<@{author}> rolls 61 points",
        "<@{author}> rolls 62 points",
        "<@{author}> rolls 63 points",
        "<@{author}> rolls 64 points",
        "<@{author}> rolls 65 points",
        "<@{author}> rolls 66 points",
        "<@{author}> rolls 66 points. Are you demon or what?",
        "<@{author}> rolls 66 points. you are Satan confirmed",
        "<@{author}> rolls 67 points",
        "<@{author}> rolls 68 points",
        "<@{author}> rolls 69 points",
        "<@{author}> rolls 70 points",
        "<@{author}> rolls 71 points",
        "<@{author}> rolls 72 points",
        "<@{author}> rolls 73 points",
        "<@{author}> rolls 74 points",
        "<@{author}> rolls 75 points",
        "<@{author}> rolls 76 points",
        "<@{author}> rolls 77 points",
        "<@{author}> rolls 78 points",
        "<@{author}> rolls 79 points",
        "<@{author}> rolls 80 points",
        "<@{author}> rolls 81 points",
        "<@{author}> rolls 82 points",
        "<@{author}> rolls 83 points",
        "<@{author}> rolls 84 points",
        "<@{author}> rolls 85 points",
        "<@{author}> rolls 86 points",
        "<@{author}> rolls 87 points",
        "<@{author}> rolls 88 points",
        "<@{author}> rolls 89 points",
        "<@{author}> rolls 90 points",
        "<@{author}> rolls 91 points",
        "<@{author}> rolls 92 points",
        "<@{author}> rolls 93 points",
        "<@{author}> rolls 94 points",
        "<@{author}> rolls 95 points",
        "<@{author}> rolls 96 points",
        "<@{author}> rolls 97 points",
        "<@{author}> rolls 98 points",
        "<@{author}> rolls 98 points",
        "<@{author}> rolls 99 points",
        "<@{author}> rolls 99 points. Not 100 points tho :shrug:",
        "<@{author}> rolls 99 points. Where is another 1 points?",
        "<@{author}> rolls 100 points",
        "<@{author}> rolls 100 points. Oh you lucky",
        "<@{author}> rolls 100 points. Congrats?",
        "<@{author}> rolls 100 points. Nice 100 points",
        "<@{author}> rolls 100 points. No more 101 points kek",
        "<@{author}> rolls 0 points",
        "<@{author}> rolls 0 points. Error not found",
        "<@{author}> rolls 0 points. go die haters",
        "<@{author}> rolls 0 points. OH where is 1?",
        ]
};

var responses = {
    current: responses_normal,
    currentMode: false,

    get: function(name) {
        let tmp = responses.current[name];
        if (tmp === undefined && responses.currentMode) {
            tmp = responses_normal[name];

            if (tmp !== undefined)
                console.log("Response '" + name + "' has no tsundere version.");
        }

        if (tmp === undefined) {
            console.log("unknown response: " + name);
            return responses.get("ERROR");
        }

        if (Array.isArray(tmp)) {
            let idx = Math.floor(Math.random() * tmp.length);
            return tmp[idx];
        }

        return tmp;
    },

    setMode: function(mode) {
        responses.currentMode = mode;
        if (responses.currentMode) {
            responses.current = responses_tsundere;
        } else {
            responses.current = responses_normal;
        }

        db.ConfigKeyValue.findOneAndUpdate({ key: "mode" }, { value: { value: responses.currentMode } }, {}).then(doc => {
            if (doc === null) {
                let dbkey = db.ConfigKeyValue.create({ key: "mode", value: { value: responses.currentMode } });
                dbkey.save();
            }
        }).catch(err => {
            console.log(err);
        });
    }
};

module.exports = responses;