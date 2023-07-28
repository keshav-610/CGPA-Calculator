function getgpa1(){
    var english1grade = parseInt(document.getElementById("english1grade").value);
    var english1credits = parseInt(document.getElementById("english1credits").value);
    
    var mathsgrade = parseInt(document.getElementById("mathsgrade").value);
    var mathscredits = parseInt(document.getElementById("mathscredits").value);
    
    var physics1grade = parseInt(document.getElementById("physics1grade").value);
    var physics1credits = parseInt(document.getElementById("physics1credits").value);
    
    var chemistrygrade = parseInt(document.getElementById("chemistrygrade").value);
    var chemistrycredits = parseInt(document.getElementById("chemistrycredits").value);
    
    var pythongrade = parseInt(document.getElementById("pythongrade").value);
    var pythoncredits = parseInt(document.getElementById("pythoncredits").value);
    
    var eggrade=parseInt(document.getElementById("eggrade").value);
    var egcredits=parseInt(document.getElementById("egcredits").value);
    
    var bscgrade=parseInt(document.getElementById("bscgrade").value);
    var bsccredits=parseInt(document.getElementById("bsccredits").value);
    
    var eplgrade=parseInt(document.getElementById("eplgrade").value);
    var eplcredits=parseInt(document.getElementById("eplcredits").value);
    

    if ( isNaN(english1grade) || isNaN(english1credits) || isNaN(mathsgrade) || isNaN(mathscredits) ||isNaN(physics1grade) || isNaN(physics1credits) ||isNaN(chemistrygrade) || isNaN(chemistrycredits) ||isNaN(pythongrade) || isNaN(pythoncredits) ||isNaN(eggrade) || isNaN(egcredits) ||isNaN(bscgrade) || isNaN(bsccredits) || isNaN(eplgrade) || isNaN(eplcredits)){
        document.getElementById("gpa1").innerHTML ="Please fill in all the fields";
    }
    else{
        var english=english1grade*english1credits;
        var maths=mathsgrade*mathscredits;
        var physics1 =physics1grade*physics1credits;
        var chemistry=chemistrygrade*chemistrycredits;
        var python=pythongrade*pythoncredits;
        var eg=eggrade*egcredits;
        var bsc=bscgrade*bsccredits;
        var epl=eplgrade*eplcredits;

        var gpa1total=english+maths+physics1+chemistry+python+eg+bsc+epl;
        var gpa1= gpa1total/25;

        document.getElementById("gpa1").innerHTML="Your GPA is "+gpa1;
}
}

function getgpa2(){
    var english2grade=parseInt(document.getElementById("english2grade").value);
    var english2credits=parseInt(document.getElementById("english2credits").value);

    var maths2grade=parseInt(document.getElementById("maths2grade").value);
    var maths2credits=document.getElementById("maths2credits").value;

    var physics2grade=parseInt(document.getElementById("physics2grade").value);
    var physics2credits=parseInt(document.getElementById("physics2credits").value);

    var beeiegrade=parseInt(document.getElementById("beeiegrade").value);
    var beeiecredits=parseInt(document.getElementById("beeiecredits").value);

    var itegrade=parseInt(document.getElementById("itegrade").value);
    var itecredits=parseInt(document.getElementById("itecredits").value);

    var prcgrade=parseInt(document.getElementById("prcgrade").value);
    var prccredits=parseInt(document.getElementById("prccredits").value);

    var itelabgrade=parseInt(document.getElementById("itelabgrade").value);
    var itelabcredits=parseInt(document.getElementById("itelabcredits").value);

    var prclabgrade=parseInt(document.getElementById("prclabgrade").value);
    var prclabcredits=parseInt(document.getElementById("prclabcredits").value);

    if(isNaN(english2grade) ||isNaN(english2credits)||isNaN(maths2grade)|| isNaN(maths2credits)|| isNaN(physics2grade)||isNaN(physics2credits)|| isNaN(beeiegrade)||isNaN(beeiecredits)||isNaN(itegrade)
    || isNaN(itecredits)||isNaN(prcgrade)||isNaN(prccredits)||isNaN(itelabgrade)||isNaN(itelabcredits)||isNaN(prclabgrade)|| isNaN(prclabcredits)){
        document.getElementById("gpa2").innerHTML="Please fill in all the fields";
    }
    else{
        var english2=english2grade*english2credits;
        var maths2=maths2grade*maths2credits;
        var physics2=physics2grade*physics2credits;
        var beeie=beeiegrade*beeiecredits;
        var ite=itegrade*itecredits;
        var prc=prcgrade*prccredits;
        var itelab=itelabgrade*itelabcredits;
        var prclab=prclabgrade*prclabcredits;

        var gpa2total= english2+maths2+physics2+beeie+ite+prc+itelab+prclab;
        var gpa2=gpa2total/23;

        document.getElementById("gpa2").innerHTML="Your GPA is "+gpa2;
    }
}

function getgpa3(){
    var dmagrade=parseInt(document.getElementById("dmagrade").value);
    var dmacredits=parseInt(document.getElementById("dmacredits").value);

    var dlcgrade=parseInt(document.getElementById("dlcgrade").value);
    var dlccredits=parseInt(document.getElementById("dlccredits").value);

    var cagrade=parseInt(document.getElementById("cagrade").value);
    var cacredits=parseInt(document.getElementById("cacredits").value);

    var dscgrade=parseInt(document.getElementById("dscgrade").value);
    var dsccredits=parseInt(document.getElementById("dsccredits").value);

    var oopsgrade=parseInt(document.getElementById("oopsgrade").value);
    var oopscredits=parseInt(document.getElementById("oopscredits").value);

    var pocgrade=parseInt(document.getElementById("pocgrade").value);
    var poccredits=parseInt(document.getElementById("poccredits").value);

    var dsclabgrade=parseInt(document.getElementById("dsclabgrade").value);
    var dsclabcredits=parseInt(document.getElementById("dsclabcredits").value);

    var dlclabgrade=parseInt(document.getElementById("dlclabgrade").value);
    var dlclabcredits=parseInt(document.getElementById("dlclabcredits").value);

    if (isNaN(dmagrade)||isNaN(dmacredits)||isNaN(dlcgrade)||isNaN(dlccredits)||isNaN(cagrade)||isNaN(cacredits)||isNaN(dscgrade)||isNaN(dsccredits)||isNaN(oopsgrade)||
    isNaN(oopscredits)||isNaN(pocgrade)||isNaN(poccredits)||isNaN(dsclabgrade)||isNaN(dsclabcredits)||isNaN(dlclabcredits)||isNaN(dlclabgrade)){
        document.getElementById("gpa3").innerHTML="Please Fill out all fields";
    }
    else{
        var dma=dmagrade*dmacredits;
        var dlc=dlcgrade*dlccredits;
        var ca= cagrade*cacredits;
        var dsc=dscgrade*dsccredits;
        var oops=oopsgrade*oopscredits;
        var poc=pocgrade*poccredits;
        var dsclab=dsclabgrade*dsclabcredits;
        var dlclab=dlclabgrade*dlclabcredits;

        var gpa3total=dma+dlc+ca+dsc+oops+poc+dsclab+dlclab;
        var gpa3=gpa3total/24;

        document.getElementById("gpa3").innerHTML="Your GPA is "+gpa3;
    }

}
function getgpa4(){
    var pqtgrade=parseInt(document.getElementById("pqtgrade").value);
    var pqtcredits=parseInt(document.getElementById("pqtcredits").value);

    var daagrade=parseInt(document.getElementById("daagrade").value);
    var daacredits=parseInt(document.getElementById("daacredits").value);

    var dbmsgrade=parseInt(document.getElementById("dbmsgrade").value);
    var dbmscredits=parseInt(document.getElementById("dbmscredits").value);

    var osgrade=parseInt(document.getElementById("osgrade").value);
    var oscredits=parseInt(document.getElementById("oscredits").value);

    var segrade=parseInt(document.getElementById("segrade").value);
    var secredits=parseInt(document.getElementById("secredits").value);

    var evsgrade=parseInt(document.getElementById("evsgrade").value);
    var evscredits=parseInt(document.getElementById("evscredits").value);

    var oslabgrade=parseInt(document.getElementById("oslabgrade").value);
    var oslabcredits=parseInt(document.getElementById("oslabcredits").value);

    var dbmslabgrade=parseInt(document.getElementById("dbmslabgrade").value);
    var dbmslabcredits=parseInt(document.getElementById("dbmslabcredits").value);

    var miniprojectgrade=parseInt(document.getElementById("miniprojectgrade").value);
    var miniprojectcredits=parseInt(document.getElementById("miniprojectcredits").value);

    if(isNaN(pqtgrade)||isNaN(pqtcredits)||isNaN(daagrade)||isNaN(daacredits)||isNaN(dbmsgrade)||isNaN(dbmscredits)||
    isNaN(osgrade)||isNaN(oscredits)||isNaN(segrade)||isNaN(secredits)||isNaN(evsgrade)||isNaN(evscredits)||
    isNaN(oslabgrade)||isNaN(oslabcredits)||isNaN(dbmslabgrade)||isNaN(dbmslabcredits)||isNaN(miniprojectgrade)||isNaN(miniprojectcredits)){
        document.getElementById("gpa4").innerHTML="Please Fill out all fields";
    }else{
        var pqt=pqtgrade*pqtcredits;
        var daa=daagrade*daacredits;
        var dbms=dbmsgrade*dbmscredits;
        var os=osgrade*oscredits;
        var se=segrade*secredits;
        var evs=evsgrade*evscredits;
        var oslab=oslabgrade*oslabcredits
        var dbmslab=dbmslabgrade*dbmslabcredits;
        var miniproject=miniprojectgrade*miniprojectcredits;

        var gpa4total=pqt+daa+dbms+os+se+evs+oslab+dbmslab+miniproject;
        var gpa4=gpa4total/21;

        document.getElementById("gpa4").innerHTML="Your GPA is "+gpa4;
    }
}
function calculatecgpa(){
    var gpa1 = parseFloat(document.getElementById("int1").value);
    var gpa2 = parseFloat(document.getElementById("int2").value);
    var gpa3 = parseFloat(document.getElementById("int3").value);
    var gpa4 = parseFloat(document.getElementById("int4").value);

    if(isNaN(gpa1) || isNaN(gpa2) || isNaN(gpa3)||isNaN(gpa4)){
        document.getElementById("cgparesult").innerHTML ="Please Fill all your GPAs"
    }else if(gpa1>10||gpa2>10||gpa3>10||gpa4>10){
        document.getElementById("cgparesult").innerHTML ="Please enter valid GPAs"
    }
    else{
        var cgpa = (gpa1 + gpa2 + gpa3+ gpa4) / 4;
    document.getElementById("cgparesult").innerHTML = "Your CGPA is "+cgpa;
    }

    
}