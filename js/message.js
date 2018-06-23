window.onload = function() {
    ajaxXHR('GET', 'json.json', function(data) { //json文件位置
        var me = data.message;
        document.getElementById("names").innerHTML = me.name;
        document.getElementById("sexs").innerHTML = me.sex;
        document.getElementById("ages").innerHTML = me.age;
        document.getElementById("xueli").innerHTML = me.xueli;
        document.getElementById("zhuanye").innerHTML = me.zhaunye;
        document.getElementById("jiguan").innerHTML = me.jiguan;
        document.getElementById("tel").innerHTML = me.TEL;
        document.getElementById("email").innerHTML = me.Email;
    })

    ajaxXHR('GET', 'Jobhuntingpost.json', function(data) {
        var job = data.jobhunting;
        console.log(job)
        document.getElementById("huntingjob").innerHTML = job.huntiong;
        document.getElementById("time").innerHTML = job.time;
        document.getElementById("educationalbackground").innerHTML = job.educationalbackground;
    })
    ajaxXHR('GET', 'professionalskills.json', function(data) {
        var kill = data.professionalskills;
        var ae = '';
        for (var i = 0; i < kill.length; i++) {
            ae += '<li class="lis">' + kill[i].skills + '</li>';
        }
        console.log(kill[0].skills)
        document.getElementById("messagejob").insertAdjacentHTML('beforeend', ae);
    })
    ajaxXHR('GET', 'exhibitionofworks.json', function(data) {
        var work = data.work;
        var str = '';
        for (var i = 0; i < work.length; i++) {
            str += '<div class="workbox">';
            str += '<div class="language"><span>编程语言:</span><span>' + work[i].language + '</span></div>';
            str += '<div class="language"><span>框架技术:</span><span>' + work[i].frame + '</span></div>';
            str += '<div class="worksname"><span>项目名称:</span><span>' + work[i].workname + '</span></div>';
            str += '<div class="worksname"><span>作品描述:</span><span>' + work[i].describe + '</span></div>';
            str += '<div class="worksname"><span>关键技术:</span><span>' + work[i].technicalpoints + '</span></div>';
            str += '<div class="worksname"><span>GITHUB:</span><span>' + work[i].link + '</span></div>'
            str += '</div>';
        }
        document.getElementById("works").insertAdjacentHTML('beforeend', str);
    })
 

    ajaxXHR('GET', 'Selfevaluation.json', function(data) {
        var evaluation = data.evaluation;
        var str = '';
        str += '<div class="evaluations">' + evaluation.evaluation + '</div>';
        document.getElementById("evaluation").insertAdjacentHTML('beforeend', str);
    })
}