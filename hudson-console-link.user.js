// ==UserScript==
// @name          Hudson Console Icon
// @include       http://awsjenkins.dev.mincom.com:8080/*
// @include       http://awsjenkins.techops.ventyx.abb.com:8080/*
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.js
// @require       https://gist.githubusercontent.com/BrockA/2625891/raw/fd02ec05e3079cdd52cf5892a7ba27b67b6b6131/waitForKeyElements.js
// @author        rf5860
// @version       0.3
// @updateURL     https://github.com/rf5860/hudson-icons
// @downloadURL   https://github.com/rf5860/hudson-icons
// ==/UserScript==

function addLinks(v) {
    var r = $(v).find('a.tip').attr('href'); var cl = CONSOLE_LINK.replace('{0}', r); var nl = NOTEPAD_LINK.replace('{0}', r);
    var pl = PARAMETERS_LINK.replace('{0}', r); var il = INJECTEDVARS_LINK.replace('{0}', r); var rl = REBUILD_LINK.replace('{0}', r);
    $(v).find('td.build-row-cell').prepend('<div style="width: 80px;float: left">'+cl+nl+pl+il+rl);
    $(v).find($('#side-panel').css('width','375px'));
    $(v).find($('.pane.build-name').css('width','60px'));
    $(v).find($('.pane.build-details').css('width','130px'));
    $(v).find($('.pane.build-controls').css('width','50px'));
    $(v).find($('a.tip').css('padding-right', '0px'));
    $(v).find($('a.tip').css('padding-left', '0px'));
}
$('#menuSelector').remove();
var CONSOLE_IMAGE = '<img title="Console output" alt="Console output" src="/static/dc668826/images/16x16/terminal.gif" border="0" />'
var NOTEPAD_IMAGE = '<img title="Text output" alt="Console output" src="/static/dc668826/images/16x16/notepad.gif" border="0" />'
var CONFIG_IMAGE = '<img title="Settings" alt="Settings" src="/static/dc668826/images/16x16/setting.png" border="0" />'
var REBUILD_IMAGE = '<img title="Settings" alt="Settings" src="/static/dc668826/images/16x16/clock.png" border="0" />'
var CONSOLE_LINK = '<a href="{0}console">' + CONSOLE_IMAGE + '</a>';
var NOTEPAD_LINK = '<a href="{0}consoleText">' + NOTEPAD_IMAGE + '</a>';
var PARAMETERS_LINK = '<a href="{0}parameters">' + CONFIG_IMAGE + '</a>';
var INJECTEDVARS_LINK = '<a href="{0}injectedEnvVars">' + CONFIG_IMAGE + '</a>';
var REBUILD_LINK = '<a href="{0}rebuild">' + REBUILD_IMAGE + '</a>';
$('.build-row.overflow-checked').each(addLinks);
waitForKeyElements('.transitive', addLinks);
