var Loader = function() {
	var c = !1,
	t = 0,
	i = 0,
	e = 0,
	n = 0,
	o = "",
	l = "",
	a = "",
	p = {
		iFileData: [],
		bgColor: "#000",
		mainWrap: "#Jmain",
		defaultAnimation: !0,
		width: 0,
		height: 0,
		d:'',
		lcolor:'',
		bColor:'',
		customAnimation: function() {},
		completeCallback: function() {}
	},
	m = function(c) {
		return "#" == c.charAt(0) ? document.getElementById(c.slice(1)) : "." == c.charAt(0) ? document.querySelectorAll(c) : document.getElementsByTagName(c)
	},
	u = function() {
		if (c && p.defaultAnimation) {
			var o = n / e;
			o > 1 && (o = 1);
			var l = window.innerWidth,
			r = p.width,
			d = p.height;
			ll = .5 * (l - r),
			lt = .5 * (window.innerHeight - d),
			loadTopId_ele = m("#" + a),
			t = r,
			i = d,
			loadTopId_ele.style.clip = "clip:rect(" + (d - d * o) + "px," + r + "px," + d + "px,0)",
			loadTopId_ele.style.webkitTransition = "all 350ms linear",
			loadTopId_ele.style.transition = "all 350ms linear"
		}
	},
	f = function() {
		if (c = !1, "function" == typeof p.completeCallback && p.completeCallback(), p.defaultAnimation) {
			var t = m("#" + o);
			t.style.webkitTransition = "all 300ms linear",
			t.style.transition = "all 300ms linear";
			t.style.opacity = "1";
			setTimeout(function() {
				document.body.removeChild(t)
			},
			200);
		}
	},
	s = function() {
		if (p.defaultAnimation) {
			var c = +new Date,
			t = document.createElement("div");
			o = "Nie_load_id" + c,
			l = "Nie_loadBg_id" + c,
			a = "Nie_loadTop_id" + c;
			var t = document.createElement("div");
			t.id = o,
			//灰色 load content
			t.style.cssText = "position:absolute;z-index:9999;left:0;top:0;width:100%;height:100%;background:" + p.bgColor + ";overflow:hidden;margin:0;padding:0;",
			t.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" id="' + l + '" style="position:absolute;width:'+p.width+'px;height:'+p.height+'px;left:50%;top:50%;margin-left:-'+p.width/2+'px;margin-top:-'+p.height/2+'px;"><g><path fill="#aaaaaa" d="' + p.d + '" /></g></svg><svg xmlns="http://www.w3.org/2000/svg" id="' + a + '" style="position:absolute;width:'+p.width+'px;height:0;left:50%;top:50%;margin-left:-'+p.width/2+'px;margin-top:-'+p.height/2+'px;"><g><path fill="' + p.lcolor + '" d="' + p.d + '" /></g></svg>',
			document.body.appendChild(t)
		}
	},
	g = function(t) {
		for (i in t) p[i] = t[i];
		if (s(), p.defaultAnimation && (m("#" + o).style.backgroundColor = p.bgColor, m("#" + a).style.height = p.height+"px", m("#" + a).style.clip = "rect("+p.width+"px "+p.width+"px "+p.height+"px 0)"), c = !0, e = p.iFileData.length, 0 == e) return void f();
		n = 0;
		for (var i = 0; e > i; i++) h(p.iFileData[i]);
		u(),
		window.onresize = function() {
			u()
		}
	},
	h = function(c) {
		var t = new Image;
		t.onload = t.onerror = function() {
			n++,
			y()
		},
		t.src = c
	},
	y = function() {
		var c = n / e;
		c > 1 && (c = 1),
		"function" == typeof p.customAnimation && p.customAnimation(c),
		p.defaultAnimation && (m("#" + a).style.clip = "rect(" + (i - i * c) + "px," + t + "px," + i + "px,0)"),
		n == e && setTimeout(function() {
			try {
				m(p.mainWrap).style.display = "block"
			} catch(c) {}
			f()
		},
		450)
	};
	return {
		show: g
	}
} ();