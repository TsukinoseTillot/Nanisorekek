//----- Config
module.exports = {
    token: "your-token-here",
    use_mongodb: true,                //optional: defaults to true
    osu_api: "osu-api-here",  //optional: defaults to the official osu api url. Will still use the official osu api for beatmap info.

    superadmins: [
        "discord-name"             //can be retrieved by typing \@discord_name in discord
    ]
};