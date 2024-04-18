var pvsTooltip = document.getElementsByClassName('pvs-info')[0];
var ncTooltip = document.getElementsByClassName('nc-info')[0];
var nmTooltip = document.getElementsByClassName('nm-info')[0];
var npTooltip = document.getElementsByClassName('np-info')[0];
var sccvTooltip = document.getElementsByClassName('sccv-info')[0];
var lceTooltip = document.getElementsByClassName('lce-info')[0];

window.onmousemove = function (e) {
  var x = e.clientX,
      y = e.clientY;
    ncTooltip.style.top = (y + 25) + 'px';
    ncTooltip.style.left = (x + -144) + 'px';
    pvsTooltip.style.top = (y + 25) + 'px';
    pvsTooltip.style.left = (x + -144) + 'px';
    nmTooltip.style.top = (y + 25) + 'px';
    nmTooltip.style.left = (x + -144) + 'px';
    npTooltip.style.top = (y + 25) + 'px';
    npTooltip.style.left = (x + -144) + 'px';
    sccvTooltip.style.top = (y + 25) + 'px';
    sccvTooltip.style.left = (x + -144) + 'px';
    lceTooltip.style.top = (y + 25) + 'px';
    lceTooltip.style.left = (x + -144) + 'px';
};

$('.pvs-icon').click(function(){
  window.open('#');
});

$('.nc-icon').click(function(){
  window.open('#');
});

$('.nm-icon').click(function(){
  window.open('#');
});

$('.np-icon').click(function(){
  window.open('#');
});

$('.sccv-icon').click(function(){
  window.open('#');
});

$('.lce-icon').click(function(){
  window.open('#');
});

var nmIcon = document.querySelector('.nm-icon'),
    ncIcon = document.querySelector('.nc-icon'),
    npIcon = document.querySelector('.np-icon'),
    sccvIcon = document.querySelector('.sccv-icon'),
    pvsIcon = document.querySelector('.pvs-icon'),
    lceIcon = document.querySelector('.lce-icon'),
    cloud = document.querySelector('.cloud'),
    firewall = document.querySelector('.firewall'),
    events = document.querySelector('.events'),
    connectorNPNM = document.querySelector('.connector-np-nm'),
    connectorSCCVPVS = document.querySelector('.connector-sccv-pvs'),
    connectorSCCVNP = document.querySelector('.connector-sccv-np'),
    connectorSCCVLCE = document.querySelector('.connector-sccv-lce'),
    connectorSCCVNC = document.querySelector('.connector-sccv-nc'),
    connectorLCE = document.querySelector('.connector-lce');

$('.pvs-icon').hover(
  function(){
  $('.pvs-info').show();
    ncIcon.classList.add('dim');
    sccvIcon.classList.add('dim');
    lceIcon.classList.add('dim');
    npIcon.classList.add('dim');
    nmIcon.classList.add('dim');
    cloud.classList.add('dim');
    firewall.classList.add('dim');
    connectorNPNM.classList.add('dim');
    connectorSCCVPVS.classList.add('dim');
    connectorSCCVLCE.classList.add('dim');
    connectorSCCVNC.classList.add('dim');
    connectorSCCVNP.classList.add('dim');
    connectorLCE.classList.add('dim');
    events.classList.add('dim');
}, function(){
  $('.pvs-info').hide();
    ncIcon.classList.remove('dim');
    sccvIcon.classList.remove('dim');
    lceIcon.classList.remove('dim');
    npIcon.classList.remove('dim');
    nmIcon.classList.remove('dim');
    cloud.classList.remove('dim');
    firewall.classList.remove('dim');
    connectorNPNM.classList.remove('dim');
    connectorSCCVPVS.classList.remove('dim');
    connectorSCCVLCE.classList.remove('dim');
    connectorSCCVNC.classList.remove('dim');
    connectorSCCVNP.classList.remove('dim');
    connectorLCE.classList.remove('dim');
    events.classList.remove('dim');
});

$('.nm-icon').hover(
  function(){
  $('.nm-info').show();
    ncIcon.classList.add('dim');
    sccvIcon.classList.add('dim');
    lceIcon.classList.add('dim');
    npIcon.classList.add('dim');
    pvsIcon.classList.add('dim');
    cloud.classList.add('dim');
    firewall.classList.add('dim');
    connectorSCCVPVS.classList.add('dim');
    connectorSCCVLCE.classList.add('dim');
    connectorSCCVNC.classList.add('dim');
    connectorSCCVNP.classList.add('dim');
    connectorLCE.classList.add('dim');
    events.classList.add('dim');
}, function(){
  $('.nm-info').hide();
    ncIcon.classList.remove('dim');
    sccvIcon.classList.remove('dim');
    lceIcon.classList.remove('dim');
    npIcon.classList.remove('dim');
    pvsIcon.classList.remove('dim');
    cloud.classList.remove('dim');
    firewall.classList.remove('dim');
    connectorSCCVPVS.classList.remove('dim');
    connectorSCCVLCE.classList.remove('dim');
    connectorSCCVNC.classList.remove('dim');
    connectorSCCVNP.classList.remove('dim');
    connectorLCE.classList.remove('dim');
    events.classList.remove('dim');
});

$('.np-icon').hover(
  function(){
  $('.np-info').show();
    ncIcon.classList.add('dim');
    sccvIcon.classList.add('dim');
    lceIcon.classList.add('dim');
    nmIcon.classList.add('dim');
    pvsIcon.classList.add('dim');
    cloud.classList.add('dim');
    firewall.classList.add('dim');
    connectorNPNM.classList.add('dim');
    connectorSCCVPVS.classList.add('dim');
    connectorSCCVLCE.classList.add('dim');
    connectorSCCVNC.classList.add('dim');
    connectorSCCVNP.classList.add('dim');
    connectorLCE.classList.add('dim');
    events.classList.add('dim');
}, function(){
  $('.np-info').hide();
    ncIcon.classList.remove('dim');
    sccvIcon.classList.remove('dim');
    lceIcon.classList.remove('dim');
    nmIcon.classList.remove('dim');
    pvsIcon.classList.remove('dim');
    cloud.classList.remove('dim');
    firewall.classList.remove('dim');
    connectorNPNM.classList.remove('dim');
    connectorSCCVPVS.classList.remove('dim');
    connectorSCCVLCE.classList.remove('dim');
    connectorSCCVNC.classList.remove('dim');
    connectorSCCVNP.classList.remove('dim');
    connectorLCE.classList.remove('dim');
    events.classList.remove('dim');
});

$('.sccv-icon').hover(
  function(){
  $('.sccv-info').show();
    ncIcon.classList.add('dim');
    npIcon.classList.add('dim');
    lceIcon.classList.add('dim');
    nmIcon.classList.add('dim');
    pvsIcon.classList.add('dim');
    cloud.classList.add('dim');
    firewall.classList.add('dim');
    connectorNPNM.classList.add('dim');
    connectorLCE.classList.add('dim');
    events.classList.add('dim');
}, function(){
  $('.sccv-info').hide();
    ncIcon.classList.remove('dim');
    npIcon.classList.remove('dim');
    lceIcon.classList.remove('dim');
    nmIcon.classList.remove('dim');
    pvsIcon.classList.remove('dim');
    cloud.classList.remove('dim');
    firewall.classList.remove('dim');
    connectorNPNM.classList.remove('dim');
    connectorLCE.classList.remove('dim');
    events.classList.remove('dim');
});

$('.lce-icon').hover(
  function(){
  $('.lce-info').show();
    ncIcon.classList.add('dim');
    npIcon.classList.add('dim');
    sccvIcon.classList.add('dim');
    nmIcon.classList.add('dim');
    pvsIcon.classList.add('dim');
    cloud.classList.add('dim');
    firewall.classList.add('dim');
    connectorNPNM.classList.add('dim');
    connectorSCCVPVS.classList.add('dim');
    connectorSCCVLCE.classList.add('dim');
    connectorSCCVNC.classList.add('dim');
    connectorSCCVNP.classList.add('dim');
}, function(){
  $('.lce-info').hide();
    ncIcon.classList.remove('dim');
    npIcon.classList.remove('dim');
    sccvIcon.classList.remove('dim');
    nmIcon.classList.remove('dim');
    pvsIcon.classList.remove('dim');
    cloud.classList.remove('dim');
    firewall.classList.remove('dim');
    connectorNPNM.classList.remove('dim');
    connectorSCCVPVS.classList.remove('dim');
    connectorSCCVLCE.classList.remove('dim');
    connectorSCCVNC.classList.remove('dim');
    connectorSCCVNP.classList.remove('dim');
});

$('.nc-icon, .cloud, .firewall').hover(
  function(){
  $('.nc-info').show();
    npIcon.classList.add('dim');
    sccvIcon.classList.add('dim');
    lceIcon.classList.add('dim');
    nmIcon.classList.add('dim');
    pvsIcon.classList.add('dim');
    connectorNPNM.classList.add('dim');
    connectorSCCVPVS.classList.add('dim');
    connectorSCCVLCE.classList.add('dim');
    connectorSCCVNC.classList.add('dim');
    connectorSCCVNP.classList.add('dim');
    connectorLCE.classList.add('dim');
    events.classList.add('dim');
}, function(){
  $('.nc-info').hide();
    npIcon.classList.remove('dim');
    sccvIcon.classList.remove('dim');
    lceIcon.classList.remove('dim');
    nmIcon.classList.remove('dim');
    pvsIcon.classList.remove('dim');
    connectorNPNM.classList.remove('dim');
    connectorSCCVPVS.classList.remove('dim');
    connectorSCCVLCE.classList.remove('dim');
    connectorSCCVNC.classList.remove('dim');
    connectorSCCVNP.classList.remove('dim');
    connectorLCE.classList.remove('dim');
    events.classList.remove('dim');
});