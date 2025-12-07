"use strict";

(() => {
    // ==========================================
    // 1. Constants & Configuration
    // ==========================================
    var m;
    (function(e) {
        e.CUSTOM_CSRF_TOKEN = "x-csrf-token";
        e.LOGIN_AS_USER_ID = "x-login-as-user-id";
    })(m || (m = {}));

    // API Endpoints
    var b = {
        CREATE: "/create",
        FOLLOWING: "/following",
        NEW_EDITOR: "/editor",
        NEW_PEN: "/pen",
        SEARCH: "/search",
        SHARED_WORK: "/shared",
        TRENDING: "/trending",
        YOUR_WORK: "/your-work"
    };

    // View Modes
    var g;
    (function(e) {
        e.WITH_YOU = "with-you";
        e.WITH_OTHERS = "with-others";
        e.DEPLOYED = "deployed";
        e.INVITES = "invites";
        e.ACTIVITY = "activity";
    })(g || (g = {}));

    // Environment Detection
    var k = !!(typeof window < "u" && window.document && window.document.createElement);
    var c = k;

    // ==========================================
    // 2. Iframe Sandbox & Feature Policy Logic
    // ==========================================
    var d = {
        disallowedGridSandboxAttributes: ["allow-popups", "allow-top-navigation-by-user-activation"],
        sandboxAttributes: {
            safari: [
                "allow-downloads", "allow-forms", "allow-modals", "allow-pointer-lock",
                "allow-popups-to-escape-sandbox", "allow-popups", "allow-same-origin",
                "allow-scripts", "allow-top-navigation-by-user-activation"
            ],
            default: [
                "allow-downloads", "allow-forms", "allow-modals", "allow-pointer-lock",
                "allow-popups-to-escape-sandbox", "allow-popups", "allow-presentation",
                "allow-same-origin", "allow-scripts", "allow-top-navigation-by-user-activation"
            ]
        },
        allowAttributes: {
            chrome: [
                "accelerometer", "bluetooth", "camera", "clipboard-read", "clipboard-write",
                "display-capture", "encrypted-media", "geolocation", "gyroscope",
                "language-detector", "language-model", "microphone", "midi", "rewriter",
                "serial", "summarizer", "translator", "web-share", "writer", "xr-spatial-tracking"
            ],
            firefox: ["camera", "display-capture", "geolocation", "microphone", "web-share"],
            default: [
                "accelerometer", "ambient-light-sensor", "camera", "display-capture",
                "encrypted-media", "geolocation", "gyroscope", "microphone", "midi",
                "payment", "serial", "vr", "web-share", "xr-spatial-tracking"
            ]
        }
    };

    // Helper to generate the sandbox/allow strings based on User Agent
    function h(e = c ? navigator.userAgent : null, t = c ? new URLSearchParams(window.location.search) : null) {
        let r = O(e, t);
        return Object.fromEntries(Object.entries(r).map(([o, i]) => [o.toLowerCase(), i.toString()]));
    }

    function O(e = c ? navigator.userAgent : null, t = c ? new URLSearchParams(window.location.search) : null) {
        let r = !1,
            o = !1,
            i = !1;
        if (e) {
            r = /^((?!chrome|android).)*safari/i.test(e);
            o = /Chrome/.test(e);
            o && c && (o = /Google Inc/.test(navigator.vendor));
            i = e.toLowerCase().includes("firefox");
        }
        if (t?.has("turn_off_js")) return { sandbox: "allow-pointer-lock" };

        let l = (r ? d.sandboxAttributes.safari : d.sandboxAttributes.default).join(" ");
        let a = d.allowAttributes.default;
        
        if (i) a = d.allowAttributes.firefox;
        else if (o) a = d.allowAttributes.chrome;
        
        let s = a.join("; ");
        return { sandbox: l, allow: s, allowpaymentrequest: "true", allowFullScreen: !0 };
    }

    // ==========================================
    // 3. File Type & Syntax Mapping
    // ==========================================
    var I = {
        _HTML_TYPES: ["html", "xml", "haml", "markdown", "slim", "pug", "application/x-slim"],
        _CSS_TYPES: ["css", "less", "scss", "sass", "stylus", "postcss", "text/css", "text/x-sass", "text/x-scss", "text/x-less", "text/x-styl"],