/* ============================================================
   燕云·律吕馆 — 声音素材清单（阶段 2 · 已接入）
   ------------------------------------------------------------
   现状：  audio/bowuzhi/ 内 16 条采集素材（m4a）已就位，
           开页自动检测一次，绿点＝已接入，点击卡片即播真声。
   替换：  保持文件名不变直接覆盖即可；或改下表 file 字段
           （相对 base 的路径 / 完整路径 / 完整 URL 均可），
           刷新页面自动生效，无需改 index.html。
   回退：  某条文件缺失时该卡自动回退「占位音色（调式动机）」
           并标黄点，其余不受影响。
   部署：  整个目录推上 GitHub → Settings → Pages → Deploy from
           branch（main / root）。全部为相对路径，Pages 与本地
           双击 index.html 均可运行。
   ============================================================ */
window.AUDIO_MANIFEST = {
  base: 'audio/bowuzhi/',
  /* 每条：id / 版块名 / file（相对 base 或完整路径、URL）/ 备注 */
  tracks: [
    { id: 'shiyin',   name: '食饮', file: '1-食饮.m4a',   note: '四清声第三音 · 和乐' },
    { id: 'shuhua',   name: '书画', file: '2-书画.m4a',   note: '角调 · 绮丽' },
    { id: 'minqi',    name: '民器', file: '3-民器.m4a',    note: '商调 · 繁盛' },
    { id: 'bingge',   name: '兵戈', file: '4-兵戈.m4a',    note: '羽调 · 肃杀' },
    { id: 'yuewu',    name: '乐舞', file: '5-乐舞.m4a',    note: '徵调 · 悠远' },
    { id: 'shihua',   name: '诗话', file: '6-诗话.m4a',    note: '羽调 · 至阴' },
    { id: 'yuxi',     name: '娱戏', file: '7-娱戏.m4a',     note: '角调 · 轻灵' },
    { id: 'xiadao',   name: '侠道', file: '8-侠道.m4a',    note: '四清声最高音 · 清澈' },
    { id: 'yishu',    name: '医术', file: '9-医术.m4a',    note: '四清声第二音 · 沉静' },
    { id: 'lvling',   name: '律令', file: '10-律令.m4a',   note: '宫调 · 庄严' },
    { id: 'fangwai',  name: '方外', file: '11-方外.m4a',  note: '徵调 · 冲和' },
    { id: 'yingzao',  name: '营造', file: '12-营造.m4a',  note: '四清声第一声 · 清亮' },
    { id: 'shanggu',  name: '商贾', file: '13-商贾.m4a',  note: '角调 · 鲜明' },
    { id: 'tianxiang',name: '天象', file: '14-天象.m4a', note: '羽调 · 自然' },
    { id: 'fengwu',   name: '风物', file: '15-风物.m4a',   note: '宫调 · 雄浑' },
    { id: 'shouye',   name: '授业', file: '16-授业.m4a',   note: '商调 · 清和' }
  ]
};