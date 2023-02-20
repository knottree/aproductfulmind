const skill1Name = "Consciously Limited Empathy";
const skill2Name = "Prioritization";
const skill3Name = "Compatibility";
const skill4Name = "Adding Subtraction";
const skill5Name = "Should You Ask Yes/No Questions?";
const skillNames = [skill1Name, skill2Name, skill3Name, skill4Name, skill5Name];
const skill1Script = `<embed type="text/html" src="consciouslyLimitedEmpathy.html" width="100%" height="25%">`;
const skill2Script = `<embed type="text/html" src="prioritization.html" width="100%" height="25%">`;
const skill3Script = `<embed type="text/html" src="compatibility.html" width="100%" height="25%">`;
const skill4Script = `<embed type="text/html" src="addingSubtraction.html" width="100%" height="25%">`;
const skill5Script = `<embed type="text/html" src="shouldYouAskYesNoQuestions.html" width="100%" height="25%">`;
const skillScripts = [skill1Script, skill2Script, skill3Script, skill4Script, skill5Script];
const skill1 = `<iframe width="100%" height="150" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1450036405&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false"></iframe><div id="todayskillscript"></div>`;
const skill2 = `<iframe width="100%" height="150" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1450036396&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false"></iframe><div id="todayskillscript"></div>`;
const skill3 = `<iframe width="100%" height="150" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1450036414&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false"></iframe><div id="todayskillscript"></div>`;
const skill4 = `<iframe width="100%" height="150" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1450036423&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false"></iframe><div id="todayskillscript"></div>`;
const skill5 = `<iframe width="100%" height="150" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1450036381&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false"></iframe><div id="todayskillscript"></div>`;
const skills = [skill1, skill2, skill3, skill4, skill5];
const numSkills = skills.length;
let skillIdx;
let todaySkill;
const whatisscript = `<embed type="text/html" src="whatIsAPM.html" width="100%" height="25%">`;
const whatisepisode = `<iframe width="100%" height="150" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1450036366&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false"></iframe><div id="whatisscript"></div>`;
const d = new Date();
const day = d.getDay();
if (day>(numSkills-1))
{
  skillIdx = Math.floor(Math.random() * (numSkills-1));
}
else 
{
  skillIdx = day;
}
todaySkillName = "TODAY: " + skillNames[skillIdx];
todaySkill = skills[skillIdx];
todaySkillScript = skillScripts[skillIdx];
document.getElementById("todayname").innerText = todaySkillName;
document.getElementById("todayskill").innerHTML = todaySkill;
document.getElementById("todayskillscript").innerHTML = todaySkillScript;
document.getElementById("whatisepisode").innerHTML = whatisepisode;
document.getElementById("whatisscript").innerHTML = whatisscript;