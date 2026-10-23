/**
 * 华中农业大学校情题库
 *
 * 整理时间：2026-10-23
 * 题目范围：校史校情、大学文化、学科建设、代表性科学家、2024-2026 最新进展
 *
 * 主要依据：
 * 1. 华中农业大学学校简介：https://www.hzau.edu.cn/xxgk/xxjj.htm
 * 2. 华中农业大学历史沿革：https://www.hzau.edu.cn/xxgk/lsyg.htm
 * 3. 华中农业大学学校章程：https://www.hzau.edu.cn/xxgk/xxzc.htm
 * 4. 华中农业大学学校领导：https://www.hzau.edu.cn/xxgk/xxld.htm
 * 5. 华中农业大学南湖新闻网、研究生院公开报道（详见 docs/hzau_sources.md）
 * 6. 用户提供的《校史.docx》《科学家汇总精简版.pdf》
 *
 * 说明：动态数据均注明“截至2026年9月”或具体年份，复习时注意时效。
 */

window.MY_SCHOOL_META = {
  name: "华中农业大学",
  tip: "校史校情、华农科学家与2024—2026科研进展",
  updated: "2026-10-23"
};

window.MY_SCHOOL_BANK = [
  // ==================== 一、学校文化与标识 ====================
  {
    id: "hzau001", type: "fill", section: "school", source: "学校章程",
    question: "华中农业大学的校训是“______、______”。",
    answer: "勤读力耕、立己达人",
    keywords: ["勤读力耕", "立己达人"],
    note: "注意是“力耕”，不是“立耕”。"
  },
  {
    id: "hzau002", type: "fill", section: "school", source: "学校章程",
    question: "华中农业大学坚持“______、______”的育人传统。",
    answer: "手脑并用、知行合一",
    keywords: ["手脑并用", "知行合一"]
  },
  {
    id: "hzau003", type: "fill", section: "school", source: "学校章程",
    question: "华中农业大学的办学理念是“______、______”。",
    answer: "育人为本、崇尚学术",
    keywords: ["育人为本", "崇尚学术"]
  },
  {
    id: "hzau004", type: "fill", section: "school", source: "学校章程",
    question: "华中农业大学的优良校风是“______、______、______、______”。",
    answer: "团结、勤俭、求是、奋进",
    keywords: ["团结", "勤俭", "求是", "奋进"]
  },
  {
    id: "hzau005", type: "fill", section: "school", source: "学校章程",
    question: "华中农业大学坚守“______、______、______”的华农品格。",
    answer: "不张扬、不浮躁、不盲从",
    keywords: ["不张扬", "不浮躁", "不盲从"]
  },
  {
    id: "hzau006", type: "single", section: "school", source: "学校章程",
    question: "华中农业大学的英文缩写是（ ）。",
    options: ["HZAU", "HUAU", "CCAU", "HNAU"],
    answer: 0
  },
  {
    id: "hzau007", type: "single", section: "school", source: "学校章程",
    question: "华中农业大学的法定注册地址是（ ）。",
    options: ["武汉市洪山区狮子山1号", "武汉市武昌区八一路299号", "武汉市洪山区珞喻路1037号", "武汉市江夏区纸坊大街1号"],
    answer: 0
  },
  {
    id: "hzau008", type: "fill", section: "school", source: "学校章程",
    question: "华中农业大学校庆日暨校友日是每年的______。",
    answer: "10月2日",
    keywords: ["10月2日"]
  },
  {
    id: "hzau009", type: "single", section: "school", source: "学校章程",
    question: "华中农业大学校歌源自1946年创作的哪一首院歌？",
    options: ["湖北省立农学院院歌", "华中农学院院歌", "湖北农务学堂堂歌", "国立武汉大学校歌"],
    answer: 0,
    note: "校歌由朱再庵作词、喻宜萱作曲。"
  },
  {
    id: "hzau010", type: "multiple", section: "school", source: "学校章程",
    question: "华中农业大学徽志包含下列哪些核心元素？",
    options: ["楚国编钟", "传统农具耒耜", "字母HAU", "黄鹤楼"],
    answer: [0, 1, 2],
    note: "徽志下方还有建校年份“1898”。"
  },
  {
    id: "hzau011", type: "flash", section: "school", source: "学校章程",
    question: "概括华中农业大学章程规定的办学特色。",
    answer: "现代生物科技、信息科技、工程科技与传统农科紧密结合、互促共进，培养创新人才。"
  },
  {
    id: "hzau012", type: "flash", section: "school", source: "学校章程",
    question: "华中农业大学到建校150周年之际的发展愿景是什么？",
    answer: "到本世纪中叶、建校150周年之际，把学校建设成为特色鲜明世界一流大学。"
  },

  // ==================== 二、历史沿革 ====================
  {
    id: "hzau013", type: "single", section: "school", source: "历史沿革",
    question: "华中农业大学的办学历史始于哪一年？",
    options: ["1898年", "1903年", "1912年", "1952年"],
    answer: 0
  },
  {
    id: "hzau014", type: "single", section: "school", source: "历史沿革",
    question: "华中农业大学前身湖北农务学堂的创办者是（ ）。",
    options: ["张之洞", "盛宣怀", "蔡元培", "李四光"],
    answer: 0
  },
  {
    id: "hzau015", type: "fill", section: "school", source: "历史沿革",
    question: "1898年，张之洞上疏光绪皇帝，奏请兴办______。",
    answer: "湖北农务学堂",
    keywords: ["湖北农务学堂"]
  },
  {
    id: "hzau016", type: "single", section: "school", source: "历史沿革",
    question: "1903年，湖北农务学堂扩建为（ ）。",
    options: ["湖北高等农务学堂", "湖北甲种农业学校", "湖北省立农学院", "华中农学院"],
    answer: 0
  },
  {
    id: "hzau017", type: "single", section: "school", source: "历史沿革",
    question: "1912年，学校改建为（ ）。",
    options: ["湖北甲种农业学校", "湖北省立教育学院", "湖北省立农业专科学校", "湖北省农学院"],
    answer: 0
  },
  {
    id: "hzau018", type: "single", section: "school", source: "历史沿革",
    question: "1938年抗战期间，学校西迁至（ ）。",
    options: ["湖北恩施五峰山", "重庆沙坪坝", "四川乐山", "湖南衡阳"],
    answer: 0
  },
  {
    id: "hzau019", type: "fill", section: "school", source: "历史沿革",
    question: "1945年抗战胜利后，学校迁回武昌______。",
    answer: "宝积庵",
    keywords: ["宝积庵"]
  },
  {
    id: "hzau020", type: "fill", section: "school", source: "历史沿革",
    question: "1952年院系调整后，组建成立______。",
    answer: "华中农学院",
    keywords: ["华中农学院"]
  },
  {
    id: "hzau021", type: "single", section: "school", source: "历史沿革",
    question: "学校于哪一年从宝积庵整体迁址武昌南湖狮子山？",
    options: ["1952年", "1954年", "1957年", "1960年"],
    answer: 2,
    note: "学校官网《历史沿革》的口径是1957年。"
  },
  {
    id: "hzau022", type: "single", section: "school", source: "学校简介",
    question: "1979年，华中农学院经国务院批准成为（ ）。",
    options: ["全国重点大学", "国家“211工程”高校", "国家“双一流”高校", "教育部直属高校"],
    answer: 0,
    note: "当时直属农业部。"
  },
  {
    id: "hzau023", type: "fill", section: "school", source: "历史沿革",
    question: "学校于______年正式更名为华中农业大学。",
    answer: "1985年",
    keywords: ["1985"]
  },
  {
    id: "hzau024", type: "single", section: "school", source: "学校简介",
    question: "2000年，华中农业大学由农业部划转为哪个部门直属？",
    options: ["教育部", "科技部", "湖北省人民政府", "中国科学院"],
    answer: 0
  },
  {
    id: "hzau025", type: "single", section: "school", source: "学校简介",
    question: "华中农业大学于哪一年进入国家“211工程”建设行列？",
    options: ["2000年", "2005年", "2008年", "2011年"],
    answer: 1
  },
  {
    id: "hzau026", type: "single", section: "school", source: "学校简介",
    question: "华中农业大学于哪一年列入国家“双一流”建设行列？",
    options: ["2012年", "2015年", "2017年", "2022年"],
    answer: 2
  },
  {
    id: "hzau027", type: "flash", section: "school", source: "历史沿革",
    question: "用三个关键时间节点概括华中农业大学办学沿革。",
    answer: "1898年张之洞创办湖北农务学堂；1952年组建华中农学院；1985年正式更名为华中农业大学。"
  },

  // ==================== 三、2026年学校概况 ====================
  {
    id: "hzau028", type: "single", section: "school", source: "学校简介·2026年9月",
    question: "截至2026年，华中农业大学已有多少年办学历史？",
    options: ["126年", "127年", "128年", "130年"],
    answer: 2,
    note: "学校创办于1898年，将于2028年迎来130周年。"
  },
  {
    id: "hzau029", type: "single", section: "school", source: "学校领导·2026年",
    question: "截至2026年10月，华中农业大学校长是（ ）。",
    options: ["严建兵", "张启发", "邓秀新", "陈焕春"],
    answer: 0
  },
  {
    id: "hzau030", type: "single", section: "school", source: "学校领导·2026年",
    question: "截至2026年10月，华中农业大学党委书记是（ ）。",
    options: ["姚江林", "高翅", "严建兵", "李召虎"],
    answer: 0
  },
  {
    id: "hzau031", type: "flash", section: "school", source: "学校简介·2026年9月",
    question: "列出华中农业大学第二轮国家“双一流”建设的5个学科。",
    answer: "生物学、园艺学、畜牧学、兽医学、农林经济管理。"
  },
  {
    id: "hzau032", type: "multiple", section: "school", source: "学校简介·2026年9月",
    question: "下列哪些属于华中农业大学第二轮国家“双一流”建设学科？",
    options: ["生物学", "园艺学", "兽医学", "计算机科学与技术"],
    answer: [0, 1, 2]
  },
  {
    id: "hzau033", type: "single", section: "school", source: "学校简介·2026年9月",
    question: "截至2026年9月，华中农业大学有多少个学科进入ESI全球前1%？",
    options: ["12个", "14个", "15个", "17个"],
    answer: 2
  },
  {
    id: "hzau034", type: "single", section: "school", source: "学校简介·2026年9月",
    question: "截至2026年9月，华中农业大学有多少个学科进入ESI全球前1‰？",
    options: ["2个", "3个", "4个", "5个"],
    answer: 2
  },
  {
    id: "hzau035", type: "single", section: "school", source: "学校简介·2026年9月",
    question: "截至2026年9月，华中农业大学拥有多少个全国重点实验室？",
    options: ["1个", "2个", "3个", "4个"],
    answer: 2
  },
  {
    id: "hzau036", type: "single", section: "school", source: "学校简介·2026年9月",
    question: "截至2026年9月，华中农业大学两院院士的校内人数结构是（ ）。",
    options: ["中科院1人、工程院6人", "中科院2人、工程院5人", "中科院3人、工程院4人", "中科院1人、工程院5人"],
    answer: 0
  },
  {
    id: "hzau037", type: "multiple", section: "school", source: "学校简介·2026年9月",
    question: "下列哪些属于华中农业大学校园环境数据？",
    options: ["5平方公里山水校园", "9公里湖岸线", "10公里林中路", "校园四面环湖"],
    answer: [0, 1, 2],
    note: "校园坐拥狮子山、三面环湖，另有6.6公里湖光绿道。"
  },
  {
    id: "hzau038", type: "flash", section: "school", source: "学校简介·2026年9月",
    question: "华中农业大学到2035年的发展目标是什么？",
    answer: "基本建成特色鲜明世界一流大学，成为世界高等农业教育高地、农业科技创新策源地和优秀人才富集区。"
  },

  // ==================== 四、华农科学家与标志性成果 ====================
  {
    id: "hzau039", type: "fill", section: "school", source: "华农备考资料",
    question: "华中农业大学培养的新中国第一位农学博士是______，第一位果树学博士是______。",
    answer: "孟金陵、邓秀新",
    keywords: ["孟金陵", "邓秀新"]
  },
  {
    id: "hzau040", type: "flash", section: "school", source: "华农备考资料",
    question: "华中农业大学传统“六个一”标志性成果分别是什么？",
    answer: "一枝花：杂交油菜；一株稻：绿色水稻；一头猪：优质种猪；一支苗：动物疫苗；一棵树：优质柑橘；一粒豆：马铃薯试管种薯。"
  },
  {
    id: "hzau041", type: "single", section: "school", source: "华农科学家资料",
    question: "被称为“背包院士”、杂交油菜开拓者的华农科学家是（ ）。",
    options: ["傅廷栋", "张启发", "陈焕春", "熊远著"],
    answer: 0
  },
  {
    id: "hzau042", type: "fill", section: "school", source: "华农科学家资料",
    question: "傅廷栋院士在国际上首先发现油菜______细胞质雄性不育。",
    answer: "波里马（Polima）",
    keywords: ["波里马"],
    note: "该类型被认为是第一个有实用价值的油菜雄性不育类型。"
  },
  {
    id: "hzau043", type: "single", section: "school", source: "华农科学家资料",
    question: "提出“第二次绿色革命”、推动绿色超级稻研究的科学家是（ ）。",
    options: ["张启发", "袁隆平", "严建兵", "孙济中"],
    answer: 0
  },
  {
    id: "hzau044", type: "single", section: "school", source: "华农科学家资料",
    question: "主要从事动物传染病与人畜共患病研究的华农院士是（ ）。",
    options: ["陈焕春", "金梅林", "傅廷栋", "张献龙"],
    answer: 0
  },
  {
    id: "hzau045", type: "single", section: "school", source: "华农科学家资料",
    question: "新中国培养的第一位果树学博士、长期从事柑橘研究的是（ ）。",
    options: ["邓秀新", "章文才", "张飞", "程运江"],
    answer: 0
  },
  {
    id: "hzau046", type: "single", section: "school", source: "华农科学家资料",
    question: "长期研究动物流感、猪链球菌病等重大动物疫病的华农院士是（ ）。",
    options: ["金梅林", "赵书红", "陈华癸", "傅振芳"],
    answer: 0
  },
  {
    id: "hzau047", type: "single", section: "school", source: "华农科学家资料",
    question: "长期从事棉花生物技术及育种应用研究的华农院士是（ ）。",
    options: ["张献龙", "孙济中", "严建兵", "邓子新"],
    answer: 0
  },
  {
    id: "hzau048", type: "single", section: "school", source: "华农科学家资料",
    question: "建立中国第一个种猪测定中心、主持育成湖北白猪的科学家是（ ）。",
    options: ["熊远著", "陈焕春", "赵书红", "金梅林"],
    answer: 0
  },
  {
    id: "hzau049", type: "fill", section: "school", source: "华农科学家资料",
    question: "被誉为“中国柑橘之父”、是我国果树学奠基人之一的科学家是______。",
    answer: "章文才",
    keywords: ["章文才"]
  },
  {
    id: "hzau050", type: "single", section: "school", source: "华农科学家资料",
    question: "我国“双低”油菜育种的开创者是（ ）。",
    options: ["刘后利", "傅廷栋", "张启发", "孙济中"],
    answer: 0
  },
  {
    id: "hzau051", type: "single", section: "school", source: "华农科学家资料",
    question: "参与武昌鱼鉴定与命名的淡水鱼类生态学家是（ ）。",
    options: ["易伯鲁", "陈华癸", "熊远著", "严建兵"],
    answer: 0
  },
  {
    id: "hzau052", type: "single", section: "school", source: "华农科学家资料",
    question: "长期从事玉米基因组学和分子育种研究、现任华中农业大学校长的是（ ）。",
    options: ["严建兵", "张启发", "张献龙", "傅廷栋"],
    answer: 0
  },
  {
    id: "hzau053", type: "single", section: "school", source: "华农科学家资料",
    question: "长期从事猪基因组育种研究、2025年当选中国工程院院士的是（ ）。",
    options: ["赵书红", "金梅林", "陈焕春", "熊远著"],
    answer: 0
  },
  {
    id: "hzau054", type: "multiple", section: "school", source: "学校简介·2026年9月",
    question: "下列哪些是目前在华中农业大学工作的两院院士？",
    options: ["张启发", "张献龙", "赵书红", "袁隆平"],
    answer: [0, 1, 2]
  },
  {
    id: "hzau055", type: "flash", section: "school", source: "学校简介·2026年9月",
    question: "列举截至2026年学校现有的7位两院院士。",
    answer: "中国科学院院士张启发；中国工程院院士傅廷栋、陈焕春、邓秀新、金梅林、张献龙、赵书红。"
  },

  // ==================== 五、2024—2026最新进展 ====================
  {
    id: "hzau056", type: "single", section: "school", source: "学校官网·2024科研进展",
    question: "2024年2月，邓秀新、张飞团队登上《科学》封面的研究对象是（ ）。",
    options: ["柑橘油胞", "棉花纤维", "水稻耐热基因", "玉米籽粒脱水"],
    answer: 0,
    note: "团队揭示了柑橘油胞发育和精油生物合成的分子调控机制。"
  },
  {
    id: "hzau057", type: "single", section: "school", source: "学校官网·2024国家科技奖",
    question: "赵书红团队获得国家技术发明奖二等奖的项目主要涉及（ ）。",
    options: ["猪基因组选种选配", "柑橘油胞发育", "水稻耐高温", "油菜雄性不育"],
    answer: 0,
    note: "项目名称为“猪基因组选种选配技术体系创建及应用”。"
  },
  {
    id: "hzau058", type: "fill", section: "school", source: "学校要闻·2024-11-06",
    question: "2024年11月，习近平总书记在武汉考察期间听取严建兵教授关于______研发情况的汇报。",
    answer: "高产高蛋白宜机收玉米",
    keywords: ["高蛋白", "玉米"]
  },
  {
    id: "hzau059", type: "single", section: "school", source: "学校要闻·2025-01-06",
    question: "华中农业大学以第一完成单位获得多少项2024年度湖北省科学技术奖？",
    options: ["8项", "10项", "12项", "14项"],
    answer: 3
  },
  {
    id: "hzau060", type: "single", section: "school", source: "学校官网·2024农业新产品",
    question: "邓秀新院士团队培育、入选2024中国农业农村重大新产品的柑橘新品种是（ ）。",
    options: ["宗橙", "早红", "华柑2号", "脆蜜金柑"],
    answer: 0
  },
  {
    id: "hzau061", type: "single", section: "school", source: "学校要闻·2025-11-21",
    question: "2025年新当选中国工程院院士的华农教授是（ ）。",
    options: ["赵书红", "金梅林", "张献龙", "严建兵"],
    answer: 0
  },
  {
    id: "hzau062", type: "fill", section: "school", source: "学校要闻·2025-12-19",
    question: "李一博教授团队发现的水稻耐自然高温关键基因是______。",
    answer: "QT12",
    keywords: ["QT12"],
    note: "该基因有助于水稻在高温下兼顾产量与品质。"
  },
  {
    id: "hzau063", type: "single", section: "school", source: "学校要闻·2025-12-19",
    question: "李一博教授团队的水稻耐高温基因研究入选了（ ）。",
    options: ["《科学》2025年度十大突破", "《自然》年度人物", "国家自然科学奖特等奖", "世界粮食奖"],
    answer: 0
  },
  {
    id: "hzau064", type: "single", section: "school", source: "学校官网·2026-01-06",
    question: "华农团队获得一类新兽药证书、可显著降低牛支原体肺炎发病率的成果是（ ）。",
    options: ["牛支原体活疫苗HB150株", "猪伪狂犬病灭活疫苗", "禽流感通用疫苗", "非洲猪瘟口服疫苗"],
    answer: 0
  },
  {
    id: "hzau065", type: "single", section: "school", source: "学校要闻·2026-07-08",
    question: "严建兵团队获得2025年度国家技术发明奖二等奖的项目是（ ）。",
    options: ["玉米基因组育种技术体系构建与应用", "绿色超级稻培育与应用", "柑橘油胞发育机制", "棉花三维基因组解析"],
    answer: 0
  },
  {
    id: "hzau066", type: "single", section: "school", source: "学校要闻·2026-09-16",
    question: "2026年王茂军团队在《细胞》发表研究，提出哪一新型作物改良靶点？",
    options: ["染色质三维空间结构", "叶绿体基因组", "土壤微生物群落", "植物表皮蜡质"],
    answer: 0,
    note: "该成果为棉花品质改良开辟了新维度。"
  },
  {
    id: "hzau067", type: "single", section: "school", source: "学校要闻·2026-09-25",
    question: "赵书红院士团队2026年在《科学》发文，将现代野猪的起源中心重新定位至（ ）。",
    options: ["亚洲热带大陆", "东南亚岛屿", "欧洲西部", "非洲东部"],
    answer: 0
  },
  {
    id: "hzau068", type: "flash", section: "school", source: "学校官网·2024—2026",
    question: "列举两项华中农业大学近两年具有代表性的科研进展。",
    answer: "示例：李一博团队发现水稻耐高温关键基因QT12并入选《科学》2025年度十大突破；严建兵团队“玉米基因组育种技术体系构建与应用”获国家技术发明奖二等奖；王茂军团队发现染色质三维空间结构是棉花改良新靶点；赵书红团队揭示基因渐渗塑造家猪表型多样性并重构现代野猪起源图景。"
  }
];
