const stages = [
{n:"01",icon:"✿",title:"幼儿园与学前",desc:"了解托育、幼儿园类型、入园条件、收费与幼小衔接。",tags:["办园资质","入园准备"],bg:"#edf4d9",keywords:"幼儿园 学前 托育 早教 入园 小学",href:"pages/preschool.html"},
{n:"02",icon:"✎",title:"小学教育",desc:"梳理公办、民办、学区、转学、融合教育与小升初。",tags:["入学政策","小升初"],bg:"#e2effa",keywords:"小学 学区 民办公办 转学 融合教育 小升初",href:"pages/primary.html"},
{n:"03",icon:"⌁",title:"初中教育",desc:"理解课程与中考，比较普通高中、中职及其他出口。",tags:["中考","分流与选择"],bg:"#f9e8d9",keywords:"初中 中考 普高 中职 技工学校 出国",href:"pages/junior-high.html"},
{n:"04",icon:"↗",title:"高中阶段",desc:"比较普高、职高、中专、国际课程与多种升学考试。",tags:["高考","国际课程"],bg:"#e8e3fa",keywords:"高中 高考 职教高考 中职 职高 国际高中 A-Level IB AP 艺考 复读",href:"pages/high-school.html"},
{n:"05",icon:"▤",title:"大学教育",desc:"从专科、本科到专升本、成人教育、转专业与毕业选择。",tags:["专升本","本科路径"],bg:"#e2f2e8",keywords:"大学 专科 本科 职业本科 专升本 自考 成考 开放教育 转专业",href:"pages/university.html"},
{n:"06",icon:"◎",title:"硕士研究生",desc:"了解考研、推免、调剂、海外硕士申请与预算规划。",tags:["考研","海外硕士"],bg:"#f8e5ed",keywords:"硕士 研究生 考研 推免 调剂 留学 专升硕 西班牙 官方硕士 预算",href:"pages/masters.html"},
{n:"07",icon:"⌘",title:"博士研究生",desc:"认识博士申请、研究计划、资助、培养要求与就业。",tags:["博士申请","科研路径"],bg:"#e5e9fa",keywords:"博士 直博 硕博连读 研究计划 奖学金 科研 就业",href:"pages/doctoral.html"},
{n:"08",icon:"∞",title:"转轨与终身学习",desc:"为工作后返校、学历提升、低预算与非传统路径找方向。",tags:["人生转轨","持续学习"],bg:"#f1eddc",keywords:"终身学习 成人教育 工作后读书 学历提升 低预算 转轨 自考 留学骗局",href:"pages/lifelong-learning.html"},
{n:"09",icon:"✈",title:"WHV与海外工作",desc:"了解工作假期资格、预算、求职安全与留学衔接。",tags:["工作假期","海外攒钱"],bg:"#e6efe0",keywords:"WHV working holiday 工作假期 澳大利亚 澳洲 新西兰 加拿大 英国 海外工作 攒钱 留学",href:"pages/whv.html"},
{n:"10",icon:"◎",title:"WHV目的地比较",desc:"比较不同护照资格、目的地政策与备选路线。",tags:["目的地比较","备选方案"],bg:"#e5edf2",keywords:"WHV目的地 澳洲 新西兰 加拿大 英国 打工度假 签证资格 替代路线",href:"pages/whv-destinations.html"}
];
const grid=document.getElementById("stageGrid");
if(grid){
 const search=document.getElementById("searchInput"),count=document.getElementById("resultCount"),empty=document.getElementById("emptyState");
 function render(q=""){const query=q.trim().toLowerCase();const list=stages.filter(s=>(s.title+" "+s.desc+" "+s.tags.join(" ")+" "+s.keywords).toLowerCase().includes(query));
 grid.innerHTML=list.map(s=>`<a class="stage-card" href="${s.href}" style="--icon-bg:${s.bg}"><div class="stage-top"><span class="stage-index">${s.n} / PATHWAY</span><span class="stage-icon">${s.icon}</span></div><h3>${s.title}</h3><p>${s.desc}</p><div class="stage-tags">${s.tags.map(t=>`<span>${t}</span>`).join("")}</div><span class="stage-arrow">↗</span></a>`).join("");
 count.textContent=`${list.length} 个教育主题`;empty.hidden=list.length>0;}
 search.addEventListener("input",e=>render(e.target.value));render();
}
