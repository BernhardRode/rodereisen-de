/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const fetch = require("node-fetch")
const { parse } = require("node-html-parser")
const path = require("path")

const createSlug = (str) => {
  str = String(str).toString()
  str = str.replace(/^\s+|\s+$/g, "") // trim
  str = str.toLowerCase()

  // remove accents, swap ñ for n, etc
  const swaps = {
    0: ["°", "₀", "۰", "０"],
    1: ["¹", "₁", "۱", "１"],
    2: ["²", "₂", "۲", "２"],
    3: ["³", "₃", "۳", "３"],
    4: ["⁴", "₄", "۴", "٤", "４"],
    5: ["⁵", "₅", "۵", "٥", "５"],
    6: ["⁶", "₆", "۶", "٦", "６"],
    7: ["⁷", "₇", "۷", "７"],
    8: ["⁸", "₈", "۸", "８"],
    9: ["⁹", "₉", "۹", "９"],
    a: [
      "à",
      "á",
      "ả",
      "ã",
      "ạ",
      "ă",
      "ắ",
      "ằ",
      "ẳ",
      "ẵ",
      "ặ",
      "â",
      "ấ",
      "ầ",
      "ẩ",
      "ẫ",
      "ậ",
      "ā",
      "ą",
      "å",
      "α",
      "ά",
      "ἀ",
      "ἁ",
      "ἂ",
      "ἃ",
      "ἄ",
      "ἅ",
      "ἆ",
      "ἇ",
      "ᾀ",
      "ᾁ",
      "ᾂ",
      "ᾃ",
      "ᾄ",
      "ᾅ",
      "ᾆ",
      "ᾇ",
      "ὰ",
      "ά",
      "ᾰ",
      "ᾱ",
      "ᾲ",
      "ᾳ",
      "ᾴ",
      "ᾶ",
      "ᾷ",
      "а",
      "أ",
      "အ",
      "ာ",
      "ါ",
      "ǻ",
      "ǎ",
      "ª",
      "ა",
      "अ",
      "ا",
      "ａ",
      "ä",
    ],
    b: ["б", "β", "ب", "ဗ", "ბ", "ｂ"],
    c: ["ç", "ć", "č", "ĉ", "ċ", "ｃ"],
    d: [
      "ď",
      "ð",
      "đ",
      "ƌ",
      "ȡ",
      "ɖ",
      "ɗ",
      "ᵭ",
      "ᶁ",
      "ᶑ",
      "д",
      "δ",
      "د",
      "ض",
      "ဍ",
      "ဒ",
      "დ",
      "ｄ",
    ],
    e: [
      "é",
      "è",
      "ẻ",
      "ẽ",
      "ẹ",
      "ê",
      "ế",
      "ề",
      "ể",
      "ễ",
      "ệ",
      "ë",
      "ē",
      "ę",
      "ě",
      "ĕ",
      "ė",
      "ε",
      "έ",
      "ἐ",
      "ἑ",
      "ἒ",
      "ἓ",
      "ἔ",
      "ἕ",
      "ὲ",
      "έ",
      "е",
      "ё",
      "э",
      "є",
      "ə",
      "ဧ",
      "ေ",
      "ဲ",
      "ე",
      "ए",
      "إ",
      "ئ",
      "ｅ",
    ],
    f: ["ф", "φ", "ف", "ƒ", "ფ", "ｆ"],
    g: ["ĝ", "ğ", "ġ", "ģ", "г", "ґ", "γ", "ဂ", "გ", "گ", "ｇ"],
    h: ["ĥ", "ħ", "η", "ή", "ح", "ه", "ဟ", "ှ", "ჰ", "ｈ"],
    i: [
      "í",
      "ì",
      "ỉ",
      "ĩ",
      "ị",
      "î",
      "ï",
      "ī",
      "ĭ",
      "į",
      "ı",
      "ι",
      "ί",
      "ϊ",
      "ΐ",
      "ἰ",
      "ἱ",
      "ἲ",
      "ἳ",
      "ἴ",
      "ἵ",
      "ἶ",
      "ἷ",
      "ὶ",
      "ί",
      "ῐ",
      "ῑ",
      "ῒ",
      "ΐ",
      "ῖ",
      "ῗ",
      "і",
      "ї",
      "и",
      "ဣ",
      "ိ",
      "ီ",
      "ည်",
      "ǐ",
      "ი",
      "इ",
      "ی",
      "ｉ",
    ],
    j: ["ĵ", "ј", "Ј", "ჯ", "ج", "ｊ"],
    k: ["ķ", "ĸ", "к", "κ", "Ķ", "ق", "ك", "က", "კ", "ქ", "ک", "ｋ"],
    l: ["ł", "ľ", "ĺ", "ļ", "ŀ", "л", "λ", "ل", "လ", "ლ", "ｌ"],
    m: ["м", "μ", "م", "မ", "მ", "ｍ"],
    n: ["ñ", "ń", "ň", "ņ", "ŉ", "ŋ", "ν", "н", "ن", "န", "ნ", "ｎ"],
    o: [
      "ó",
      "ò",
      "ỏ",
      "õ",
      "ọ",
      "ô",
      "ố",
      "ồ",
      "ổ",
      "ỗ",
      "ộ",
      "ơ",
      "ớ",
      "ờ",
      "ở",
      "ỡ",
      "ợ",
      "ø",
      "ō",
      "ő",
      "ŏ",
      "ο",
      "ὀ",
      "ὁ",
      "ὂ",
      "ὃ",
      "ὄ",
      "ὅ",
      "ὸ",
      "ό",
      "о",
      "و",
      "θ",
      "ို",
      "ǒ",
      "ǿ",
      "º",
      "ო",
      "ओ",
      "ｏ",
      "ö",
    ],
    p: ["п", "π", "ပ", "პ", "پ", "ｐ"],
    q: ["ყ", "ｑ"],
    r: ["ŕ", "ř", "ŗ", "р", "ρ", "ر", "რ", "ｒ"],
    s: ["ś", "š", "ş", "с", "σ", "ș", "ς", "س", "ص", "စ", "ſ", "ს", "ｓ"],
    t: ["ť", "ţ", "т", "τ", "ț", "ت", "ط", "ဋ", "တ", "ŧ", "თ", "ტ", "ｔ"],
    u: [
      "ú",
      "ù",
      "ủ",
      "ũ",
      "ụ",
      "ư",
      "ứ",
      "ừ",
      "ử",
      "ữ",
      "ự",
      "û",
      "ū",
      "ů",
      "ű",
      "ŭ",
      "ų",
      "µ",
      "у",
      "ဉ",
      "ု",
      "ူ",
      "ǔ",
      "ǖ",
      "ǘ",
      "ǚ",
      "ǜ",
      "უ",
      "उ",
      "ｕ",
      "ў",
      "ü",
    ],
    v: ["в", "ვ", "ϐ", "ｖ"],
    w: ["ŵ", "ω", "ώ", "ဝ", "ွ", "ｗ"],
    x: ["χ", "ξ", "ｘ"],
    y: [
      "ý",
      "ỳ",
      "ỷ",
      "ỹ",
      "ỵ",
      "ÿ",
      "ŷ",
      "й",
      "ы",
      "υ",
      "ϋ",
      "ύ",
      "ΰ",
      "ي",
      "ယ",
      "ｙ",
    ],
    z: ["ź", "ž", "ż", "з", "ζ", "ز", "ဇ", "ზ", "ｚ"],
    aa: ["ع", "आ", "آ"],
    ae: ["æ", "ǽ"],
    ai: ["ऐ"],
    ch: ["ч", "ჩ", "ჭ", "چ"],
    dj: ["ђ", "đ"],
    dz: ["џ", "ძ"],
    ei: ["ऍ"],
    gh: ["غ", "ღ"],
    ii: ["ई"],
    ij: ["ĳ"],
    kh: ["х", "خ", "ხ"],
    lj: ["љ"],
    nj: ["њ"],
    oe: ["ö", "œ", "ؤ"],
    oi: ["ऑ"],
    oii: ["ऒ"],
    ps: ["ψ"],
    sh: ["ш", "შ", "ش"],
    shch: ["щ"],
    ss: ["ß"],
    sx: ["ŝ"],
    th: ["þ", "ϑ", "ث", "ذ", "ظ"],
    ts: ["ц", "ც", "წ"],
    ue: ["ü"],
    uu: ["ऊ"],
    ya: ["я"],
    yu: ["ю"],
    zh: ["ж", "ჟ", "ژ"],
    "(c)": ["©"],
    A: [
      "Á",
      "À",
      "Ả",
      "Ã",
      "Ạ",
      "Ă",
      "Ắ",
      "Ằ",
      "Ẳ",
      "Ẵ",
      "Ặ",
      "Â",
      "Ấ",
      "Ầ",
      "Ẩ",
      "Ẫ",
      "Ậ",
      "Å",
      "Ā",
      "Ą",
      "Α",
      "Ά",
      "Ἀ",
      "Ἁ",
      "Ἂ",
      "Ἃ",
      "Ἄ",
      "Ἅ",
      "Ἆ",
      "Ἇ",
      "ᾈ",
      "ᾉ",
      "ᾊ",
      "ᾋ",
      "ᾌ",
      "ᾍ",
      "ᾎ",
      "ᾏ",
      "Ᾰ",
      "Ᾱ",
      "Ὰ",
      "Ά",
      "ᾼ",
      "А",
      "Ǻ",
      "Ǎ",
      "Ａ",
      "Ä",
    ],
    B: ["Б", "Β", "ब", "Ｂ"],
    C: ["Ç", "Ć", "Č", "Ĉ", "Ċ", "Ｃ"],
    D: ["Ď", "Ð", "Đ", "Ɖ", "Ɗ", "Ƌ", "ᴅ", "ᴆ", "Д", "Δ", "Ｄ"],
    E: [
      "É",
      "È",
      "Ẻ",
      "Ẽ",
      "Ẹ",
      "Ê",
      "Ế",
      "Ề",
      "Ể",
      "Ễ",
      "Ệ",
      "Ë",
      "Ē",
      "Ę",
      "Ě",
      "Ĕ",
      "Ė",
      "Ε",
      "Έ",
      "Ἐ",
      "Ἑ",
      "Ἒ",
      "Ἓ",
      "Ἔ",
      "Ἕ",
      "Έ",
      "Ὲ",
      "Е",
      "Ё",
      "Э",
      "Є",
      "Ə",
      "Ｅ",
    ],
    F: ["Ф", "Φ", "Ｆ"],
    G: ["Ğ", "Ġ", "Ģ", "Г", "Ґ", "Γ", "Ｇ"],
    H: ["Η", "Ή", "Ħ", "Ｈ"],
    I: [
      "Í",
      "Ì",
      "Ỉ",
      "Ĩ",
      "Ị",
      "Î",
      "Ï",
      "Ī",
      "Ĭ",
      "Į",
      "İ",
      "Ι",
      "Ί",
      "Ϊ",
      "Ἰ",
      "Ἱ",
      "Ἳ",
      "Ἴ",
      "Ἵ",
      "Ἶ",
      "Ἷ",
      "Ῐ",
      "Ῑ",
      "Ὶ",
      "Ί",
      "И",
      "І",
      "Ї",
      "Ǐ",
      "ϒ",
      "Ｉ",
    ],
    J: ["Ｊ"],
    K: ["К", "Κ", "Ｋ"],
    L: ["Ĺ", "Ł", "Л", "Λ", "Ļ", "Ľ", "Ŀ", "ल", "Ｌ"],
    M: ["М", "Μ", "Ｍ"],
    N: ["Ń", "Ñ", "Ň", "Ņ", "Ŋ", "Н", "Ν", "Ｎ"],
    O: [
      "Ó",
      "Ò",
      "Ỏ",
      "Õ",
      "Ọ",
      "Ô",
      "Ố",
      "Ồ",
      "Ổ",
      "Ỗ",
      "Ộ",
      "Ơ",
      "Ớ",
      "Ờ",
      "Ở",
      "Ỡ",
      "Ợ",
      "Ø",
      "Ō",
      "Ő",
      "Ŏ",
      "Ο",
      "Ό",
      "Ὀ",
      "Ὁ",
      "Ὂ",
      "Ὃ",
      "Ὄ",
      "Ὅ",
      "Ὸ",
      "Ό",
      "О",
      "Θ",
      "Ө",
      "Ǒ",
      "Ǿ",
      "Ｏ",
      "Ö",
    ],
    P: ["П", "Π", "Ｐ"],
    Q: ["Ｑ"],
    R: ["Ř", "Ŕ", "Р", "Ρ", "Ŗ", "Ｒ"],
    S: ["Ş", "Ŝ", "Ș", "Š", "Ś", "С", "Σ", "Ｓ"],
    T: ["Ť", "Ţ", "Ŧ", "Ț", "Т", "Τ", "Ｔ"],
    U: [
      "Ú",
      "Ù",
      "Ủ",
      "Ũ",
      "Ụ",
      "Ư",
      "Ứ",
      "Ừ",
      "Ử",
      "Ữ",
      "Ự",
      "Û",
      "Ū",
      "Ů",
      "Ű",
      "Ŭ",
      "Ų",
      "У",
      "Ǔ",
      "Ǖ",
      "Ǘ",
      "Ǚ",
      "Ǜ",
      "Ｕ",
      "Ў",
      "Ü",
    ],
    V: ["В", "Ｖ"],
    W: ["Ω", "Ώ", "Ŵ", "Ｗ"],
    X: ["Χ", "Ξ", "Ｘ"],
    Y: [
      "Ý",
      "Ỳ",
      "Ỷ",
      "Ỹ",
      "Ỵ",
      "Ÿ",
      "Ῠ",
      "Ῡ",
      "Ὺ",
      "Ύ",
      "Ы",
      "Й",
      "Υ",
      "Ϋ",
      "Ŷ",
      "Ｙ",
    ],
    Z: ["Ź", "Ž", "Ż", "З", "Ζ", "Ｚ"],
    AE: ["Æ", "Ǽ"],
    Ch: ["Ч"],
    Dj: ["Ђ"],
    Dz: ["Џ"],
    Gx: ["Ĝ"],
    Hx: ["Ĥ"],
    Ij: ["Ĳ"],
    Jx: ["Ĵ"],
    Kh: ["Х"],
    Lj: ["Љ"],
    Nj: ["Њ"],
    Oe: ["Œ"],
    Ps: ["Ψ"],
    Sh: ["Ш"],
    Shch: ["Щ"],
    Ss: ["ẞ"],
    Th: ["Þ"],
    Ts: ["Ц"],
    Ya: ["Я"],
    Yu: ["Ю"],
    Zh: ["Ж"],
  }

  Object.keys(swaps).forEach((swap) => {
    swaps[swap].forEach((s) => {
      str = str.replace(new RegExp(s, "g"), swap)
    })
  })
  str = str
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-") // collapse dashes
    .replace(/^-+/, "") // trim - from start of text
    .replace(/-+$/, "")

  console.log(str)
  return str
}

const BASE_URL = "https://www.meinereiseangebote.de"

const mapTime = (timeString) => {
  const s = timeString.split(".")
  const p = new Date(Date.parse(`${s[2]}-${s[1]}-${s[0]}`))
  return p
}

const parsePage = (page, index, meta) => {
  try {
    const imageTag = page.querySelector(".ph-offer-image-placeholder")
    const image = imageTag.rawAttrs
      .split("url")[1]
      .split(';"')[0]
      .replace("('", "")
      .replace("')", "")
    const destination = page
      .querySelector(".ph-offer-destination")
      .childNodes[0].rawText.trim()
    const destinationDescription = page
      .querySelector(".ph-offer-destination-description")
      .childNodes[0].rawText.trim()
    const city = page
      .querySelector(".ph-offer-city")
      .childNodes[0].rawText.trim()
    const hotel = page
      .querySelector(".ph-offer-hotel")
      .childNodes[0].rawText.trim()
      .replace(/\t/g, "")
      .replace(/\n/g, "")
    const time = page
      .querySelector(".ph-offer-traveltime")
      .childNodes[0].rawText.trim()
      .split(" - ")
      .map(mapTime)
    console.log(JSON.stringify(time))
    const flight = page
      .querySelector(".ph-offer-flight")
      .childNodes[0].rawText.trim()
    const [duration, description, pkg] = page
      .querySelector(".ph-offer-host")
      .childNodes.filter((a) => a.constructor.name === "TextNode")
      .map((s) => s.text)
      .map((s) => s.replace(/\t/g, ""))
      .map((s) => s.replace(/\n/g, ""))
      .map((s) => s.trim())
      .filter((s) => s !== "")
    const organizer = page
      .querySelector(".ph-offer-tour-logo img")
      .getAttribute("src")
    const final = page
      .querySelector(".ph-offer-final")
      .childNodes[0].rawText.trim()
    const price = parseFloat(
      page
        .querySelector(".ph-offer-price span")
        .childNodes[0].rawText.trim()
        .replace(" &euro;", "")
        .replace(".", "")
    )
    const link = page.querySelector("a").getAttribute("href")
    const uuid = link.split("/").pop()
    const slug = createSlug(`${hotel}-${destination}`)

    const result = {
      meta: { ...meta, index, slug, uuid },
      trip: {
        city,
        description,
        destination,
        destinationDescription,
        duration,
        final,
        flight,
        hotel,
        image,
        link,
        organizer,
        pkg,
        price,
        time,
      },
    }
    console.log(uuid)
    return result
  } catch (error) {
    console.error(error)
    return null
  }
}

const getOffer = async (meta) => {
  const { id } = meta
  const url = `${BASE_URL}/${id}`
  const offersPage = await fetch(url)
  const offersBody = await offersPage.text()
  const root = parse(offersBody, {})
  return root
    .querySelectorAll(".ph-offer")
    .map((page, index) => parsePage(page, index, meta))
    .filter((a) => a !== null)
}

const getOffers = async (ids) => {
  return (await Promise.all(ids.map((id) => getOffer(id)))).flat()
}

const cachedOffers = [
  {
    meta: {
      id: "RQVW-2524",
      name: "semi",
      index: 0,
      slug: "the-devonshire-house-hotel-ohne-transfer-grossbritannien",
      uuid: "80145733",
    },
    trip: {
      city: "Liverpool",
      description: "Standard, Einzelzimmer",
      destination: "Großbritannien",
      destinationDescription: "Nordwestengland",
      duration: "2 Nächte",
      final: "1 Erwachsener",
      flight: "",
      hotel: "The Devonshire House Hotel ohne Transfer",
      image:
        "https://i17.giatamedia.com/s.php?uid=180322&source=xml&size=800&cid=21474&iid=71593840",
      link: "https://www.meinereiseangebote.de/RQVW-2524/80145733",
      organizer:
        "https://cluster2.images.traveltainment.eu/images/content/va_logos/small/FTI.gif",
      pkg: "Übernachtung mit Frühstück",
      price: 149,
      time: ["2022-03-04T00:00:00.000Z", "2022-03-06T00:00:00.000Z"],
    },
  },
  {
    meta: {
      id: "RQVW-2524",
      name: "semi",
      index: 1,
      slug: "hallmark-inn-liverpool-grossbritannien",
      uuid: "80145780",
    },
    trip: {
      city: "Liverpool",
      description: "Einzelzimmer",
      destination: "Großbritannien",
      destinationDescription: "Nordwestengland",
      duration: "2 Nächte",
      final: "1 Erwachsener",
      flight: "",
      hotel: "Hallmark Inn Liverpool",
      image:
        "https://i11.giatamedia.com/s.php?uid=180322&source=xml&size=800&cid=22258&iid=66288405",
      link: "https://www.meinereiseangebote.de/RQVW-2524/80145780",
      organizer:
        "https://cluster2.images.traveltainment.eu/images/content/va_logos/small/FTI.gif",
      pkg: "Übernachtung mit Frühstück",
      price: 133,
      time: ["2022-03-04T00:00:00.000Z", "2022-03-06T00:00:00.000Z"],
    },
  },
  {
    meta: {
      id: "RQVW-2524",
      name: "semi",
      index: 2,
      slug: "hampton-by-hilton-liverpool-city-centre-grossbritannien",
      uuid: "80145816",
    },
    trip: {
      city: "Liverpool",
      description: "Standard, Einzelzimmer",
      destination: "Großbritannien",
      destinationDescription: "Nordwestengland",
      duration: "2 Nächte",
      final: "1 Erwachsener",
      flight: "",
      hotel: "Hampton by Hilton Liverpool city centre",
      image:
        "https://i15.giatamedia.com/s.php?uid=180322&source=xml&size=800&cid=22260&iid=73904794",
      link: "https://www.meinereiseangebote.de/RQVW-2524/80145816",
      organizer:
        "https://cluster2.images.traveltainment.eu/images/content/va_logos/small/FTI.gif",
      pkg: "Übernachtung",
      price: 240,
      time: ["2022-03-04T00:00:00.000Z", "2022-03-06T00:00:00.000Z"],
    },
  },
  {
    meta: {
      id: "EMYR-4542",
      name: "sandra",
      index: 0,
      slug: "thulhagiri-island-resort-and-spa-malediven",
      uuid: "80550051",
    },
    trip: {
      city: "Thulagiri",
      description:
        "Standard Bungalow, Badewanne, separate Dusche, Terrasse, Klim...",
      destination: "Malediven",
      destinationDescription: "Nord Male Atoll",
      duration: "7 Tage",
      final: "1 Erwachsener",
      flight: "Flug ab Frankfurt (Economy)",
      hotel: "Thulhagiri Island Resort and Spa",
      image:
        "https://i22.giatamedia.com/s.php?uid=180322&source=xml&size=800&cid=22101&iid=63322259",
      link: "https://www.meinereiseangebote.de/EMYR-4542/80550051",
      organizer:
        "https://m.giatamedia.com/getVeaLogo.php?vea=tui&size=140&uid=180322&source=xml",
      pkg: "All Inclusive",
      price: 1739,
      time: ["2022-03-04T00:00:00.000Z", "2022-03-06T00:00:00.000Z"],
    },
  },
  {
    meta: {
      id: "EMYR-4542",
      name: "sandra",
      index: 1,
      slug: "angaga-island-resort-and-spa-malediven",
      uuid: "80550191",
    },
    trip: {
      city: "Angaagaa",
      description:
        "Superior Room, Dusche, Badewanne, separate Dusche, WC, Balkon...",
      destination: "Malediven",
      destinationDescription: "S&uuml;d Ari Atoll",
      duration: "7 Tage",
      final: "1 Erwachsener",
      flight: "Flug ab Frankfurt (Economy)",
      hotel: "Angaga Island Resort and Spa",
      image:
        "https://i14.giatamedia.com/s.php?uid=180322&source=xml&size=800&cid=22101&iid=62376068",
      link: "https://www.meinereiseangebote.de/EMYR-4542/80550191",
      organizer:
        "https://m.giatamedia.com/getVeaLogo.php?vea=tui&size=140&uid=180322&source=xml",
      pkg: "All Inclusive",
      price: 1897,
      time: ["2022-03-04T00:00:00.000Z", "2022-03-06T00:00:00.000Z"],
    },
  },
  {
    meta: {
      id: "EMYR-4542",
      name: "sandra",
      index: 2,
      slug: "ellaidhoo-maldives-by-cinnamon-malediven",
      uuid: "80550306",
    },
    trip: {
      city: "Ellaidhoo",
      description:
        "Standard Room, Dusche, WC, Klimaanlage, Schlafzimmer, Kingsiz...",
      destination: "Malediven",
      destinationDescription: "Nord Ari Atoll",
      duration: "7 Tage",
      final: "1 Erwachsener",
      flight: "Flug ab Frankfurt (Economy)",
      hotel: "Ellaidhoo Maldives by Cinnamon",
      image:
        "https://i19.giatamedia.com/s.php?uid=180322&source=xml&size=800&cid=22101&iid=63994392",
      link: "https://www.meinereiseangebote.de/EMYR-4542/80550306",
      organizer:
        "https://m.giatamedia.com/getVeaLogo.php?vea=tui&size=140&uid=180322&source=xml",
      pkg: "All Inclusive",
      price: 1933,
      time: ["2022-03-04T00:00:00.000Z", "2022-03-06T00:00:00.000Z"],
    },
  },
  {
    meta: {
      id: "EMYR-4542",
      name: "sandra",
      index: 3,
      slug: "reethi-beach-resort-malediven",
      uuid: "80550360",
    },
    trip: {
      city: "Fonimagoodhoo",
      description:
        "Reethi Villa, Dusche, WC, Terrasse, Klimaanlage, Schlafzimmer...",
      destination: "Malediven",
      destinationDescription: "Baa Atoll",
      duration: "7 Tage",
      final: "1 Erwachsener",
      flight: "Flug ab Frankfurt (Economy)",
      hotel: "Reethi Beach Resort",
      image:
        "https://i19.giatamedia.com/s.php?uid=180322&source=xml&size=800&cid=22101&iid=63312923",
      link: "https://www.meinereiseangebote.de/EMYR-4542/80550360",
      organizer:
        "https://m.giatamedia.com/getVeaLogo.php?vea=tui&size=140&uid=180322&source=xml",
      pkg: "All Inclusive",
      price: 1949,
      time: ["2022-03-04T00:00:00.000Z", "2022-03-06T00:00:00.000Z"],
    },
  },
]

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  try {
    const cache = true
    // Fetch the data
    const offers = cache
      ? cachedOffers
      : await getOffers([
          { id: "RQVW-2524", name: "semi" },
          { id: "EMYR-4542", name: "sandra" },
        ])

    offers.forEach((offer) => {
      const node = {
        ...offer,
        id: createNodeId(`offer-${offer.meta.id}-${offer.meta.index}`),
        internal: {
          type: "Offers",
          contentDigest: createContentDigest(offer), // We pass in the game object to make sure it's unique
        },
      }
      // Create the actual data node
      actions.createNode(node)
    })
  } catch (error) {
    console.log(error)
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const offerTemplate = path.resolve("./src/templates/angebot.js")

  try {
    const result = await graphql(`
      query OffersQuery {
        allOffers {
          edges {
            node {
              meta {
                id
                index
                name
                slug
              }
              trip {
                city
                description
                destination
                destinationDescription
                duration
                final
                flight
                hotel
                image
                link
                organizer
                pkg
                price
                time(
                  locale: ""
                  fromNow: false
                  formatString: ""
                  difference: ""
                )
              }
            }
          }
        }
      }
    `)

    if (result.errors) {
      reporter.error("There was an error fetching pages", result.errors)
    }

    const entries = result.data.allOffers.edges

    entries.forEach((context) => {
      const { slug } = context.node.meta
      const page = {
        path: `/angebote/${slug}`,
        component: offerTemplate,
        context: context.node,
      }
      actions.createPage(page)
    })
  } catch (error) {
    console.log(error)
  }
}
