// ==UserScript==
// @name           Hudson Console Icon
// @include        http://aubne-s-dvl01b.dev.mincom.com:8080/*
// @include        http://aubne-s-dvl01b.ventyx.abb.com:8080/*
// ==/UserScript==

var ds = document.getElementsByClassName("build-row no-wrap");
for (var i = 0; i < ds.length; i++) {
  var element = ds[i];
  var relativeLink = element.getElementsByClassName('tip')[0].attributes[1].textContent
  var consoleImage = "<img title=\"Console output\" alt=\"Console output\" src=\"/static/dc668826/images/16x16/terminal.gif\" border=\"0\" />"
  var notepadImage = "<img title=\"Text output\" alt=\"Console output\" src=\"/static/dc668826/images/16x16/notepad.gif\" border=\"0\" />"
  var configImage = "<img title=\"Settings\" alt=\"Settings\" src=\"/static/dc668826/images/16x16/setting.png\" border=\"0\" />"
  var rebuildImage = "<img title=\"Settings\" alt=\"Settings\" src=\"/static/dc668826/images/16x16/clock.png\" border=\"0\" />"

  var consoleLink = "<a href=\"" + relativeLink +"console\">" + consoleImage + "</a>";
  var notepadLink = "<a href=\"" + relativeLink +"consoleText\">" + notepadImage + "</a>";
  var parametersLink = "<a href=\"" + relativeLink +"parameters\">" + configImage + "</a>";
  var injectedVarsLink = "<a href=\"" + relativeLink +"injectedEnvVars\">" + configImage + "</a>";
  var rebuildLink = "<a href=\"" + relativeLink +"injectedEnvVars\">" + rebuildImage + "</a>";

  element.children[2].innerHTML += consoleLink + notepadLink + parametersLink + injectedVarsLink + rebuildLink;
}
