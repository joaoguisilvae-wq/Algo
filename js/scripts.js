const textContainer = document.querySelector("#text");
const text = document.querySelector("#text h1");
const textT = document.querySelector("#text h2");

const frasesContainer = document.querySelector("#frases");
const frases = document.querySelector("#frases h1");
const frasesT = document.querySelector("#frases h2");

const ilove = document.querySelector("header #ilove");
const youare = document.querySelector("header #youare");

const declaracoesDeAmor = {
  direto: [
    { pais: "Brasil", frase: "Eu te amo!" },
    { pais: "Estados Unidos", frase: "I love you!" },
    { pais: "Espanha", frase: "¡Te quiero!" },
    { pais: "França", frase: "Je t’aime !" },
    { pais: "Itália", frase: "Ti amo!" },
    { pais: "Alemanha", frase: "Ich liebe dich!" },
    { pais: "Portugal", frase: "Amo-te!" },
    { pais: "Japão", frase: "愛してる！" },
    { pais: "Coreia do Sul", frase: "사랑해!" },
    { pais: "China (Mandarim)", frase: "我爱你！" },
    { pais: "Rússia", frase: "Я тебя люблю!" },
    { pais: "Árabe", frase: "أحبك!" },
    { pais: "Turquia", frase: "Seni seviyorum!" },
    { pais: "Holanda", frase: "Ik hou van je!" },
    { pais: "Suécia", frase: "Jag älskar dig!" },
    { pais: "Noruega", frase: "Jeg elsker deg!" },
    { pais: "Dinamarca", frase: "Jeg elsker dig!" },
    { pais: "Polônia", frase: "Kocham cię!" },
    { pais: "República Tcheca", frase: "Miluji tě!" },
    { pais: "Hungria", frase: "Szeretlek!" },
    { pais: "Grécia", frase: "Σ’ αγαπώ!" },
    { pais: "Tailândia", frase: "ฉันรักคุณ!" },
    { pais: "Vietnã", frase: "Anh yêu em!" },
    { pais: "Índia (Hindi)", frase: "मैं तुमसे प्यार करता हूँ!" },
    { pais: "Israel (Hebraico)", frase: "אני אוהב אותך!" },
    { pais: "Irlanda (Gaélico)", frase: "Tá grá agam ort!" },
    { pais: "País de Gales", frase: "Rwy'n dy garu di!" },
    { pais: "Islândia", frase: "Ég elska þig!" },
    { pais: "Finlândia", frase: "Minä rakastan sinua!" },
    { pais: "África do Sul (Zulu)", frase: "Ngiyakuthanda!" },
    { pais: "África do Sul (Xhosa)", frase: "Ndikuthanda!" },
    { pais: "África do Sul (Afrikaans)", frase: "Ek is lief vir jou!" },
    { pais: "Armênia", frase: "Ես սիրում եմ քեզ!" },
    { pais: "Azerbaijano", frase: "Mən səni sevirəm!" },
    { pais: "Bengali", frase: "আমি তোমাকে ভালোবাসি!" },
    { pais: "Bósnia", frase: "Volim te!" },
    { pais: "Bulgária", frase: "Обичам те!" },
    { pais: "Camboja (Khmer)", frase: "ខ្ញុំ​ស្រលាញ់​អ្នក!" },
    { pais: "Cazaque", frase: "Мен сені сүйемін!" },
    { pais: "Croácia", frase: "Volim te!" },
    { pais: "Eslováquia", frase: "Ľúbim ťa!" },
    { pais: "Eslovênia", frase: "Ljubim te!" },
    { pais: "Esperanto", frase: "Mi amas vin!" },
    { pais: "Estônia", frase: "Ma armastan sind!" },
    { pais: "Filipinas (Tagalog)", frase: "Mahal kita!" },
    { pais: "Geórgia", frase: "მიყვარს შენ!" },
    { pais: "Guzerate", frase: "હું તને પ્રેમ કરું છું!" },
    { pais: "Havaiano", frase: "Aloha au ia ‘oe!" },
    { pais: "Indonésio", frase: "Aku cinta kamu!" },
    { pais: "Iorubá", frase: "Mo nífẹ́ ẹ!" },
    { pais: "Letão", frase: "Es tevi mīlu!" },
    { pais: "Lituânia", frase: "Myliu tave!" },
    { pais: "Malaio", frase: "Aku cinta kamu!" },
    { pais: "Malaiala", frase: "ഞാൻ നിന്നെ സ്നേഹിക്കുന്നു!" },
    { pais: "Māori", frase: "Aroha au ki a koe!" },
    { pais: "Marathi", frase: "मी तुला प्रेम करतो!" },
    { pais: "Mongólia", frase: "Би чамд хайртай!" },
    { pais: "Nepalês", frase: "म तिमीलाई माया गर्छु!" },
    { pais: "Persa (Farsi)", frase: "دوستت دارم!" },
    { pais: "Punjabi", frase: "ਮੈਂ ਤੈਨੂੰ ਪਿਆਰ ਕਰਦਾ/ਕਰਦੀ ਹਾਂ!" },
    { pais: "Quirguistão", frase: "Мен сени жакшы көрөм!" },
    { pais: "Romeno", frase: "Te iubesc!" },
    { pais: "Samoa", frase: "O le a ou alofa ia te oe!" },
    { pais: "Sérvia", frase: "Волим те!" },
    { pais: "Somália", frase: "Waayey!" },
    { pais: "Sri Lanka (Cingalês)", frase: "මම ඔයාට ආදරෙයි!" },
    { pais: "Suázi", frase: "Ngiyakuthanda!" },
    { pais: "Suaíli", frase: "Nakupenda!" },
    { pais: "Tâmil", frase: "நான் உன்னை காதலிக்கிறேன்!" },
    { pais: "Tcheco", frase: "Miluji tě!" },
    { pais: "Tibetano", frase: "ང་ཁྱེད་རང་ལ་དགའ་བ་ཡོད།" },
    { pais: "Ucraniano", frase: "Я тебе кохаю!" },
    { pais: "Urdu", frase: "میں تم سے محبت کرتا ہوں!" },
    { pais: "Uzbeque", frase: "Men seni sevaman!" },
    { pais: "Zimbábue (Shona)", frase: "Ndinokuda!" },
  ],
  poetico: [
    // Português (Brasil) - frases longas e poéticas
    {
      pais: "Português (Brasil)",
      frase: "Meu coração bate no ritmo do teu nome.",
      traducao: "Meu coração bate no ritmo do teu nome.",
    },
    {
      pais: "Português (Brasil)",
      frase:
        "Amo-te não só pelo que és, mas pelo que sou quando estou contigo.",
      traducao:
        "Amo-te não só pelo que és, mas pelo que sou quando estou contigo.",
    },
    {
      pais: "Português (Brasil)",
      frase:
        "Se eu pudesse guardar todos os momentos ao teu lado, viveria eternamente feliz.",
      traducao:
        "Se eu pudesse guardar todos os momentos ao teu lado, viveria eternamente feliz.",
    },
    {
      pais: "Português (Brasil)",
      frase: "Você é o abrigo da minha alma após a tempestade.",
      traducao: "Você é o abrigo da minha alma após a tempestade.",
    },
    {
      pais: "Português (Brasil)",
      frase: "Contigo, até o silêncio fala de amor.",
      traducao: "Contigo, até o silêncio fala de amor.",
    },

    // Inglês (Estados Unidos) - frases longas e poéticas
    {
      pais: "Inglês (Estados Unidos)",
      frase: "You are my sun, my moon, and all my stars.",
      traducao: "Você é meu sol, minha lua e todas as minhas estrelas.",
    },
    {
      pais: "Inglês (Estados Unidos)",
      frase:
        "I have waited for you my whole life, and now that you're here, I’ll never let you go.",
      traducao:
        "Esperei por você a minha vida toda, e agora que você está aqui, nunca mais vou deixar você ir.",
    },
    {
      pais: "Inglês (Estados Unidos)",
      frase: "In your arms, I found the home I never knew I was searching for.",
      traducao:
        "Nos seus braços, encontrei o lar que eu nem sabia que estava procurando.",
    },
    {
      pais: "Inglês (Estados Unidos)",
      frase: "Loving you is the easiest and most natural thing I’ve ever done.",
      traducao: "Amar você é a coisa mais fácil e natural que eu já fiz.",
    },
    {
      pais: "Inglês (Estados Unidos)",
      frase:
        "If I had a flower for every time I thought of you, I could walk through my garden forever.",
      traducao:
        "Se eu tivesse uma flor para cada vez que penso em você, poderia caminhar pelo meu jardim para sempre.",
    },

    // Outras línguas poéticas (com tradução)
    {
      pais: "Francês",
      frase: "Tu es mon aujourd’hui, mon demain, et tous mes toujours.",
      traducao: "Você é o meu hoje, meu amanhã e todos os meus para sempres.",
    },
    {
      pais: "Espanhol",
      frase: "Eres el verso que mi alma no sabía que necesitaba escribir.",
      traducao:
        "Você é o verso que minha alma não sabia que precisava escrever.",
    },
    {
      pais: "Italiano",
      frase:
        "Sei il mio respiro, il mio pensiero, il mio eterno ritorno a casa.",
      traducao:
        "Você é minha respiração, meu pensamento, meu eterno retorno para casa.",
    },
    {
      pais: "Árabe clássico",
      frase: "أنت نبض قلبي وسكينة روحي.",
      traducao: "Você é o pulso do meu coração e a serenidade da minha alma.",
    },
    {
      pais: "Japonês",
      frase: "君がいない世界なんて、月のない夜みたいだ。",
      traducao: "Um mundo sem você é como uma noite sem lua.",
    },
    {
      pais: "Coreano",
      frase: "너는 내 마음속의 봄날이야.",
      traducao: "Você é a primavera dentro do meu coração.",
    },
    {
      pais: "Mandarim (Chinês)",
      frase: "你是我心上的月亮，梦里的星光。",
      traducao:
        "Você é a lua no meu coração, a luz das estrelas nos meus sonhos.",
    },
    {
      pais: "Russo",
      frase: "Ты — мой воздух, моя песня, моя вечность.",
      traducao: "Você é meu ar, minha canção, minha eternidade.",
    },
    {
      pais: "Persa (Farsi)",
      frase: "تو قلب منی، نفس منی، جان منی.",
      traducao: "Tu és meu coração, minha respiração, minha alma.",
    },
    {
      pais: "Tâmil",
      frase: "உன்னைத் தவிர வேறு எதுவும் எனக்குத் தேவையில்லை.",
      traducao: "Além de você, nada mais me é necessário.",
    },
    {
      pais: "Suaíli",
      frase: "Wewe ni nuru ya maisha yangu.",
      traducao: "Você é a luz da minha vida.",
    },
    {
      pais: "Havaiano",
      frase: "‘O ‘oe ka hōkū o ku’u lani.",
      traducao: "Você é a estrela do meu céu.",
    },
    {
      pais: "Gaélico irlandês",
      frase: "Tú mo ghrá, mo shaol, mo sholas.",
      traducao: "Você é meu amor, minha vida, minha luz.",
    },
    {
      pais: "Grego moderno",
      frase: "Είσαι η ψυχή μου ντυμένη με φως.",
      traducao: "Você é minha alma vestida de luz.",
    },
    {
      pais: "Sânscrito",
      frase: "त्वमेव मम जीवनम्, त्वमेव मम प्राणः।",
      traducao: "Tu és minha vida, tu és meu próprio alento.",
    },
    {
      pais: "Latim",
      frase: "Tu es anima mea, cor meum, et lux oculorum meorum.",
      traducao: "Tu és minha alma, meu coração e a luz dos meus olhos.",
    },
    {
      pais: "Māori",
      frase: "Ko koe te maramatanga o aku ata, te whakapono o aku pō.",
      traducao: "Você é a clareza das minhas manhãs, a fé das minhas noites.",
    },
    {
      pais: "Quechua",
      frase: "Qamwan kawsayniyoq kani.",
      traducao: "Com você, eu tenho vida.",
    },
  ],
};

ilove.addEventListener("click", () => {
  textContainer.classList.remove("hide");
  text.classList.remove("hide");
  textT.classList.remove("hide");
  frases.classList.add("hide");
  frasesT.classList.add("hide");
  frasesContainer.classList.add("hide");
});

youare.addEventListener("click", () => {
  textContainer.classList.add("hide");
  text.classList.add("hide");
  textT.classList.add("hide");
  frases.classList.remove("hide");
  frasesT.classList.remove("hide");
  frasesContainer.classList.remove("hide");
});

textContainer.addEventListener("click", () => {
  const amorDireto = escolherAmorAleatorio("direto");

  text.innerText = `${amorDireto.frase}`;
  textT.innerText = `tradução: Eu te amo! <3`;
});

frasesContainer.addEventListener("click", () => {
  const amorFrase = escolherAmorAleatorio("poetico");

  frases.innerText = `${amorFrase.frase}`;
  frasesT.innerText = `Tradução: ${amorFrase.traducao}`;
});

function escolherAmorAleatorio(tipo = "direto") {
  const tiposValidos = ["direto", "poetico"];

  const lista = declaracoesDeAmor[tipo];
  const indiceAleatorio = Math.floor(Math.random() * lista.length);
  return lista[indiceAleatorio];
}

const footer = document.querySelector("footer");
const footerh1 = document.querySelector("footer h1");

const textos = [
  "Clica aqui amor *-*",
  "dnv",
  "Vamos lá",
  "Se consegueeeeee",
  "vamos passar por alguns textos (-_-)",
  "Olá! este é um clique.",
  "Legal, você clicou de novo!",
  "te amoooo",
  "mais uns 15 só",
  "é pra ver até o final em",
  "vamosssss",
  "uma surpresa te aguarda",
  "Tã-Tã-Tããããã",
  "oq sera q é",
  "mais um pouqinho",
  "pra faltar pouco kskskk",
  "😁",
  "Se ,ainda continua aqui? kskksks",
  "espero que ss",
  "mas, se deve tar se perguntando",
  "Tudo",
  "Isso",
  "pra",
  "que",
  "?",
  "X_x",
  "eu te respondo",
  "meu amor <3",
  "Pra",
  "Isso",
  "Aqui",
  "Made by: Amor da sua vida 😎 clica mias uma vez ta kskks",
];

let indice = 0;

const video1 = document.querySelector("#video-fundo");
const video2 = document.querySelector("#video-fo");

footer.addEventListener("click", () => {
  if (indice < textos.length) {
    footerh1.innerText = textos[indice];
    indice++;
  } else {
    const button = document.createElement("button");
    button.innerText = "espero que goste ksksks";
    button.addEventListener("click", () => {
      footer.classList.add("hide");
      frasesContainer.classList.add("hide");
      textContainer.classList.add("hide");
      video1.classList.remove("hide");
      video2.classList.remove("hide");
      document.body.classList.add("img3");
    });

    footer.innerHTML = "";
    footer.appendChild(button);
  }
});
