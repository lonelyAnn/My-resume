$(document).ready(function(t){function e(t){c.clearRect(0,0,r,f),t||(t=0),c.beginPath(),t<1?c.arc(75,75,50,1.5*Math.PI,2*Math.PI*t-.5*Math.PI,!1):c.arc(75,75,50,0*Math.PI,2*Math.PI,!1),c.font="30px Arial",c.lineWidth=15,c.fillStyle="yellowgreen",c.strokeStyle="yellowgreen",c.fillText(Math.round(100*t)+"%",75,85),c.textAlign="center",c.stroke()}function n(t,a){a=a||0,setTimeout(function(){a>=t||(a+=.01,e(a),a<t&&n(t,a))},20)}function a(t){u.clearRect(0,0,g,I),t||(t=0),u.beginPath(),t<1?u.arc(75,75,50,1.5*Math.PI,2*Math.PI*t-.5*Math.PI,!1):u.arc(75,75,50,0*Math.PI,2*Math.PI,!1),u.font="30px Arial",u.lineWidth=15,u.fillStyle="#ff6400",u.strokeStyle="#ff6400",u.fillText(Math.round(100*t)+"%",75,85),u.textAlign="center",u.stroke()}function i(t,e){e=e||0,setTimeout(function(){e>=t||(e+=.01,a(e),e<t&&i(t,e))},20)}function l(t){P.clearRect(0,0,s,x),t||(t=0),P.beginPath(),t<1?P.arc(75,75,50,1.5*Math.PI,2*Math.PI*t-.5*Math.PI,!1):P.arc(75,75,50,0*Math.PI,2*Math.PI,!1),P.font="30px Arial",P.lineWidth=15,P.fillStyle="#1796BD",P.strokeStyle="#1796BD",P.fillText(Math.round(100*t)+"%",75,85),P.textAlign="center",P.stroke()}function h(t,e){e=e||0,setTimeout(function(){e>=t||(e+=.01,l(e),e<t&&h(t,e))},20)}var o=document.getElementById("canvas_html"),c=o.getContext("2d"),r=o.width="150",f=o.height="150";n(.8);var d=document.getElementById("canvas_js"),u=d.getContext("2d"),g=d.width="150",I=d.height="150";i(.6);var M=document.getElementById("canvas_gp"),P=M.getContext("2d"),s=M.width="150",x=M.height="150";h(.7)});