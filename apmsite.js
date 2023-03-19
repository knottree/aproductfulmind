const skillNames = ["Consciously Limited Empathy","Prioritization","Compatibility","Adding Subtraction","Should You Ask Yes/No Questions?"];
const skillScriptFileNames = ["consciouslyLimitedEmpathy","prioritization","compatibility","addingSubtraction","shouldYouAskYesNoQuestions"];
const skillTrackNum = ["1472696008","1472695999","1472695981","1472695963","1472695954"];
const numSkills = skillTrackNum.length;
let skillIdx;
let todaySkillFileName;
let todaySkill;
let todaySkillTrackNum;
let todaySkillName;
let todaySkillScript;
const d = new Date();
const day = d.getDay();
if (day < 1 || day >5)
{
  skillIdx = Math.floor(Math.random() * (numSkills));
}
else 
{
  skillIdx = day-1;
}
todaySkillName = "TODAY: " + skillNames[skillIdx];
todaySkillTrackNum = skillTrackNum[skillIdx];
todaySkill = `<iframe width="100%" height="150" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${todaySkillTrackNum}&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false"></iframe><div id="todayskillscript"></div>`;
todaySkillScriptFile = skillScriptFileNames[skillIdx];
todaySkillScript = `<embed type="text/html" src="${todaySkillScriptFile}.html" width="100%" height="25%">`;
const whatisscript = `<embed type="text/html" src="whatIsAPM.html" width="100%" height="25%">`;
const whatisepisode = `<iframe width="100%" height="150" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1472696020&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false"></iframe><div id="whatisscript"></div>`;
document.getElementById("todayname").innerText = todaySkillName;
document.getElementById("todayskill").innerHTML = todaySkill;
document.getElementById("todayskillscript").innerHTML = todaySkillScript;
document.getElementById("whatisepisode").innerHTML = whatisepisode;
document.getElementById("whatisscript").innerHTML = whatisscript;
function openSkill() {
 document.getElementById("coaching").open = false;
  document.getElementById("whatis").open = false;
}
function openCoaching() {
  document.getElementById("todaydetails").open = false;
  document.getElementById("whatis").open = false;
}
function openWhatIs() {
  document.getElementById("todaydetails").open = false;
  document.getElementById("coaching").open = false;
}