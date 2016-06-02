var MONSTER = {};

MONSTER = function() {
	this.init();
};

MONSTER.prototype = {
    gui:        [],
    video:      [],
	preload:	[],
	socket:		[],

    init: function() {
        MONSTER.instance = this;

		this.preload = new MONSTER.PRELOAD();
		$(this.preload).bind("preloadComplete",this.preloadComplete);
		//this.preloadComplete();
    },

	preloadComplete: function(){
        this.gui = new MONSTER.GUI();
        this.video = new MONSTER.VIDEO();
		this.socket = new MONSTER.SOCKET();

		$(this.gui).bind("clickPlay", this.video.play);
		$(this.gui).bind("stopVideo", this.video.stop);
	}
}

$(document).ready(function() {
	soundManager.setup({url: 'assets/swf/'});
	var monster = new MONSTER();
});