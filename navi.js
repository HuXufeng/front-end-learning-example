
function OD(){
    alert("Aragakki Yui")
}
function NE(){
    alert("Honda Tsubasa")
}
function myFunction()
{
    x=document.getElementById("p1")
    z=document.getElementById("name")
    Xs=document.getElementById("b2")
    x.src="http://himg2.huanqiu.com/attachment2010/2015/0908/10/43/20150908104308930.jpg"
    z.innerHTML="本田翼"
    z.style.backgroundColor="#62caed"
    Xs.style.backgroundColor="#62caed"
    z.innerHTML="新垣结衣"
    z.onclick=fun2
    Xs.onclick=OD
    b2.className = "button gakki"
    z.className = "button gakki"
}
function fun2(){
    x=document.getElementById("p1")

    z=document.getElementById("name")
    Xs=document.getElementById("b2")
    x.src="http://n.sinaimg.cn/ent/transform/20160913/UHqg-fxvuvfp3544331.jpg"
    z.innerHTML="新垣结衣"
    z.style.backgroundColor="pink"
    Xs.style.backgroundColor="pink"
    z.innerHTML="本田翼"
    z.onclick=myFunction
    Xs.onclick=NE
    b2.className = "button honda"
    z.className = "button honda"
}
