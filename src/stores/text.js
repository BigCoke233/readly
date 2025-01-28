import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTextStore = defineStore('text', () => {
  const texts = {
    "简体中文": {
      "casual": [
        "昨天晚上我们去看了一场电影，那种放松的感觉真的太棒了！电影讲的是一个关于家庭和梦想的故事，情节虽然简单，但特别感人。看完后我们还去附近的奶茶店喝了一杯热奶茶，聊了好多天南地北的事情。那家店的装修风格很可爱，全是粉色和木质的搭配，拍了好多照片。说起来你最近在忙什么呢？有空也一起出来聚一聚吧！感觉好久没见你了，每次想起你都觉得时间过得真快呢。对了，有没有什么好看的书或者电影推荐？我最近有点书荒了，需要点灵感！",
        "这几天的天气真的太冷了，走在路上都觉得手脚冰凉。我昨天试了一种新的方法，就是在床上放一个小电热毯，睡觉前先开一会儿，床暖暖的特别舒服。你那边冷不冷啊？要记得多穿点衣服，不然容易感冒。最近好像大家都开始囤年货了，我看街上的超市人山人海。对了，你年夜饭准备吃什么？我妈说今年要做几个新菜式，可能会做一道红烧牛肉听说特别下饭。等我学会了，下次做给你尝尝！"
      ],
      "formal": [
        "近年来，中国在科技创新领域取得了显著进展。从人工智能到量子计算，从航天技术到生物医学，各个领域都展现了快速发展的态势。例如，国产C919大型客机的成功试飞标志着中国在航空制造领域迈出了重要的一步。此外，在绿色能源领域，中国已成为全球最大的太阳能设备生产国，并积极推动新能源车的普及。这些成就不仅体现了国家在研发和创新方面的巨大投入，也彰显了中国经济向高质量发展的转型趋势。未来，随着更多政策支持的出台，中国有望在全球科技竞争中占据更加重要的地位。",
        "教育公平一直是社会关注的热点话题。近年来，国家通过一系列政策措施，致力于缩小城乡教育差距。例如，‘双减’政策的出台有效缓解了学生的课业负担，使得基础教育回归课堂。同时，乡村教师支持计划的实施，也为偏远地区的教育注入了新活力。然而，在实际执行过程中，仍面临诸如资源分配不均、师资不足等问题。如何实现优质教育资源的共享，仍是未来教育改革的重要任务。这不仅关系到每个学生的成长，也影响着社会的可持续发展。"
      ],
      "literary": [
        "深秋的早晨，空气中弥漫着泥土与枯叶混合的味道。小路两旁的银杏树早已被染上金色，微风吹过，落叶纷飞，如同一场无声的雨。老人牵着一只毛发凌乱的狗，缓缓地走在林荫道上，脚步轻缓，却充满了岁月的韵律。不远处，一个小女孩正蹦蹦跳跳地追逐着一片落叶，手中紧握着一根红气球。阳光穿过稀疏的树枝，在地面上投下斑驳的光影。这样的时刻，时间仿佛凝固了，一切都显得如此纯净，仿佛连心灵也得到了洗涤。",
        "月亮在夜空中洒下皎洁的光芒，映照在湖面上，波光粼粼，如碎银一般。湖边，一只白鹭静静地伫立着，偶尔低头啄食湖中的小鱼。远处的山影如黛，朦胧中透着一丝神秘。一位青年手持竹笛，轻吹一曲。那旋律悠扬而低沉，仿佛诉说着古老的传说。夜风徐徐，带来一阵阵青草的清香，让人不禁沉醉其中。在这天地间，仿佛一切的烦恼都变得微不足道，只剩下人与自然的和谐共鸣。"
      ],
      "professional": [
        "在数据挖掘领域，关联规则挖掘是一个重要的研究方向，用于发现数据中隐藏的模式与关系。Apriori算法是实现关联规则挖掘的经典方法，其核心思想是通过迭代计算频繁项集来生成关联规则。然而，由于算法需要多次扫描数据集，其时间复杂度较高，尤其在处理大规模数据时存在性能瓶颈。为此，许多研究者提出了改进方案，例如FP-Growth算法，通过构建频繁模式树（FP-Tree）来减少数据扫描次数。此外，随着深度学习的兴起，利用神经网络对关联规则进行优化的研究也逐渐增多，这为数据挖掘技术的应用开辟了新的路径。",
        "在软件开发领域，微服务架构近年来得到了广泛应用。与传统的单体架构不同，微服务通过将应用程序拆分为多个独立的小服务，每个服务负责特定功能。这种架构的优势在于能够提高系统的灵活性和扩展性。例如，当某个服务的流量激增时，只需对其进行单独扩容，而不必影响其他服务。此外，微服务架构还便于采用不同的技术栈开发各个服务，从而充分利用技术的多样性。然而，微服务也带来了新的挑战，例如服务间通信的复杂性和分布式数据管理的问题。在实践中，合理的服务划分和高效的监控手段是成功实施微服务的关键。"
      ]
    },
    "English": {
      "casual": [
        "You won’t believe what happened yesterday! I went to this little coffee shop that just opened around the corner. The barista there was so friendly, and they recommended this seasonal pumpkin spice latte. I wasn’t sure about it at first, but oh my god, it was amazing! It tasted like autumn in a cup. The shop itself had such a cozy vibe, with warm lighting and soft jazz playing in the background. I ended up staying there for hours, just sipping coffee and reading a book. Honestly, it felt like a mini vacation. You should totally check it out when you’re free—it might become your new favorite spot too!",
        "Guess what? Last weekend, my friends and I decided to go on this spontaneous road trip. We didn’t even plan it properly—we just grabbed some snacks, packed a few clothes, and hit the road. We ended up at this small beach town that none of us had been to before. It was so peaceful and quiet, with hardly any tourists around. We spent the whole day walking along the shore, collecting shells, and taking goofy pictures. At night, we found this tiny seafood restaurant that served the freshest grilled fish I’ve ever had. It was such a simple yet unforgettable trip. You should join us next time!"
      ],
      "formal": [
        "The importance of mental health awareness cannot be overstated. In recent years, there has been a growing recognition of the impact that mental well-being has on individuals and society as a whole. Research indicates that untreated mental health conditions can lead to a wide range of negative outcomes, including decreased productivity, strained relationships, and even physical health issues. To address this, many organizations and governments have launched campaigns aimed at reducing the stigma surrounding mental illness. These efforts include educational programs, workplace initiatives, and accessible counseling services. While progress has been made, there is still much work to be done to ensure that mental health is treated with the same urgency and importance as physical health.",
        "Climate change is one of the most pressing challenges facing humanity today. Its effects are already being felt around the world, from rising sea levels to more frequent and severe natural disasters. In response, many countries have committed to reducing greenhouse gas emissions by transitioning to renewable energy sources such as wind and solar power. Additionally, innovative technologies like carbon capture and storage are being developed to mitigate environmental impact. However, these measures require significant financial investments and international cooperation. As individuals, we also have a role to play by adopting sustainable practices such as reducing waste and conserving energy. Addressing climate change is a collective effort that demands immediate action at all levels."
      ],
      "literary": [
        "The golden rays of the setting sun painted the landscape in hues of orange and red. A lone traveler walked along the dusty path, his silhouette outlined against the fiery horizon. The air was thick with the scent of blooming jasmine, and the soft chirping of crickets marked the arrival of twilight. In the distance, an old village stood nestled among rolling hills, its thatched roofs glowing warmly in the fading light. The traveler paused for a moment, taking in the serene beauty around him. His journey had been long and arduous, yet moments like these made every step worthwhile. With a deep breath, he continued onward, his heart filled with quiet determination.",
        "Beneath the vast canopy of stars, the desert stretched out like an endless sea of sand. The night was cool and still, save for the occasional whisper of the wind that danced through the dunes. A campfire crackled in the middle of the barren expanse, its flames casting flickering shadows on the surrounding rocks. Beside the fire sat an old storyteller, his voice low and melodic as he wove tales of ancient kings and forgotten realms. The small circle of listeners hung on his every word, their faces illuminated by the warm glow of the fire. Time seemed to stand still in that magical moment, as if the stars themselves were listening."
      ],
      "professional": [
        "Artificial intelligence (AI) has become a transformative force across various industries, revolutionizing how tasks are performed and decisions are made. In the healthcare sector, for example, AI-powered diagnostic tools enable more accurate and timely identification of diseases, while robotic surgeries enhance precision and reduce recovery times for patients. Similarly, in the financial industry, algorithms capable of processing vast amounts of data in real-time have improved fraud detection and streamlined investment strategies. Despite its potential, the adoption of AI also raises ethical concerns, such as biases in algorithms and the displacement of human labor. Therefore, as AI continues to evolve, it is crucial to establish robust regulatory frameworks that ensure its development aligns with societal values and priorities.",
        "The field of renewable energy has witnessed remarkable advancements in recent years. Solar and wind power, once considered niche technologies, are now leading sources of clean energy worldwide. Innovations in energy storage, such as lithium-ion batteries, have further enhanced the viability of these renewable sources by addressing the issue of intermittency. Additionally, emerging technologies like hydrogen fuel cells and floating wind farms hold promise for diversifying the renewable energy landscape. Governments and private entities are investing heavily in research and development to make these technologies more affordable and accessible. However, challenges such as land use conflicts and supply chain constraints must be addressed to fully realize the potential of renewable energy in combating climate change."
      ]
    }
  }

  function countText(text) {
    let statistics = {
      sTotal: 0, // symbols
      cTotal: 0, // Chinese characters
      lTotal: 0, // latin letter
      nTotal: 0  // number
    }

    for (let i = 0; i < text.length; i++) {
      var c = text.charAt(i);

      if (c.match(/[\u4e00-\u9fa5]/)) {
        statistics.cTotal++;
      }
      else if (c.match(/[\u9FA6-\u9fcb]/)){
        statistics.cTotal++;
      }
      if (c.match(/[^\x00-\xff]/)) {
        statistics.sTotal++;
      }
      else {
        statistics.lTotal++;
      }
      if (c.match(/[0-9]/)) {
        statistics.nTotal++;
      }
    }

    return statistics
  }

  function getText(lang, category) {
    const array = texts[lang][category]
    const randomText = array[Math.floor(Math.random() * array.length)];
    return {
      text: randomText,
      stats: countText(randomText)
    }
  }

  return { texts, getText }
})
