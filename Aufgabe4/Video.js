System.register(["guid-typescript"], function (exports_1, context_1) {
    "use strict";
    var guid_typescript_1, Video;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (guid_typescript_1_1) {
                guid_typescript_1 = guid_typescript_1_1;
            }
        ],
        execute: function () {
            Video = class Video {
                constructor() {
                    this.guid = guid_typescript_1.Guid.create();
                }
                //setter
                setVideoTitle(_title) {
                    this.videoTitle = _title;
                }
                setVideoLength(_videoLength) {
                    this.videoLengthInSecs = _videoLength;
                }
                setVideoSize(_videoSize) {
                    this.videoSize = _videoSize;
                }
                setAspectRatio(_aspectRatio) {
                    this.videoAspectRatio = _aspectRatio;
                }
                //getter
                getVideoTitle() {
                    return this.videoTitle;
                }
                getVideoLength() {
                    return this.videoLengthInSecs;
                }
                getVideoSize() {
                    return this.videoSize;
                }
                getAspectRatio() {
                    return this.videoAspectRatio;
                }
                getGuid() {
                    return this.guid;
                }
                playVideo() {
                    console.log("Video wird abgespielt.");
                }
            };
            exports_1("Video", Video);
        }
    };
});
//# sourceMappingURL=Video.js.map