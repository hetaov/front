
export default function bootstrap(schema) {
    const state = schema.getDefaultState();
    console.log(state, 'state ..');
    const session = schema.withMutations(state);
    const { Word } = session;
    Word.create({
        id: 0, // optional. If omitted, Redux-ORM uses a number sequence starting from 0.
        text: '白血病',
        desc: '白血病是一类造血干细胞恶性克隆性疾病。克隆性白血病细胞因为增殖失控、分化障碍、凋亡受阻等机制在骨髓和其他造血组织中大量增殖累积，并浸润其他非造血组织和器官，同时抑制正常造血功能。临床可见不同程度的贫血、出血、感染发热以及肝、脾、淋巴结肿大和骨骼疼痛。据报道，我国各地区白血病的发病率在各种肿瘤中占第六位。',
        source: '百度百科'
    });

    Word.create({
        id: 1, // optional. If omitted, Redux-ORM uses a number sequence starting from 0.
        text: '糖尿病',
        desc: '糖尿病是一组以高血糖为特征的代谢性疾病。高血糖则是由于胰岛素分泌缺陷或其生物作用受损，或两者兼有引起。糖尿病时长期存在的高血糖，导致各种组织，特别是眼、肾、心脏、血管、神经的慢性损害、功能障碍。',
        source: '百度百科'
    });
    
    return {
        orm: state
    };
}
