System.register(["guid-typescript"], function (exports_1, context_1) {
    "use strict";
    var guid_typescript_1, Playlist;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (guid_typescript_1_1) {
                guid_typescript_1 = guid_typescript_1_1;
            }
        ],
        execute: function () {
            Playlist = class Playlist {
                constructor() {
                    this.guid = guid_typescript_1.Guid.create();
                }
                //setter
                setPlaylistVideos(_videos) {
                    this.playlistVideos = _videos;
                }
                setPlaylistUser(_user) {
                    this.playlistUser = _user;
                }
                setPlaylistName(_name) {
                    this.playlistName = _name;
                }
                //getter
                getPlaylistVideos() {
                    return this.playlistVideos;
                }
                getPlaylistUser() {
                    return this.playlistUser;
                }
                getPlaylistName() {
                    return this.playlistName;
                }
                getGuid() {
                    return this.guid;
                }
            };
            exports_1("Playlist", Playlist);
        }
    };
});
//# sourceMappingURL=Playlist.js.map