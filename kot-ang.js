var currentVerb;
var kittenCounter;

function nextVerb() {
  currentVerb = (currentVerb + 1) % verbsDb.length;
  $("#verb").text(verbsDb[currentVerb][0]);

  resetInput();
}

function checkVerb() {
  verify();
  $("#checkBtn").addClass("hidden");
  $("#nextBtn").removeClass("hidden");
  $("#nextBtn").focus();
}

function resetInput() {
  for (let verbField of [ "#st", "#nd", "#rd" ]) {
    $(verbField).val("");
    $(verbField).removeClass("wrong");
  }
  $("#nextBtn").addClass("hidden");
  $("#checkBtn").removeClass("hidden");
  hideKitten();
  $("#st").focus();
}


function verifyPartialAnswer(inputField, expectedForm) {
  if (expectedForm.localeCompare(inputField.val()) != 0) {
    inputField.addClass("wrong");
    inputField.val(expectedForm);
    return false;
  }
  return true;
}

function verify() {
  let allOk = verifyPartialAnswer($("#st"), verbsDb[currentVerb][1]);
  allOk *= verifyPartialAnswer($("#nd"), verbsDb[currentVerb][2]);
  allOk *= verifyPartialAnswer($("#rd"), verbsDb[currentVerb][3])

  if (allOk) {
    kittenCounter++;
    kittenCombo++;
    updateStats();
    displayKitten();
  } else {
    kittenCombo = 0;
    updateStats();
    hideKitten();
  }
}

function displayKitten() {
  $("#kitten").removeClass("hidden");
}

function hideKitten() {
  $("#kittenCombo").text(kittenCombo);
  $("#kitten").addClass("hidden");
  $("#kitten").attr("src", "http://thecatapi.com/api/images/get?format=src&type=png&size=med&r="+Math.random());
}

function updateStats() {
  $("#kittenCounter").text(kittenCounter);
  $("#kittenCombo").text(kittenCombo);
}

function verbsInit() {
  verbsDb.sort(function() { return Math.random()-0.5 });
  currentVerb = -1;
  kittenCounter = 0;
  kittenCombo = 0;
  updateStats();
  nextVerb();
}

var verbsDb = [["mieszkać; znosić; przestrzegać (czegoś)","abide","abode","abode"],["powstać","arise","arose","arisen"],["przebudzić się, budzić","awake","awoke","awoke, awakened"],["być","be","was, were","been"],["nieść, ponosić, znosić","bear","bore","born"],["bić","beat","beat","beaten"],["stawać się","become","became","become"],["trafić się","befall","befell","befallen"],["począć","beget","begot","begot, begotten"],["zaczynać (się)","begin","began","begun"],["patrzeć","behold","beheld","beheld"],["zginać","bend","bent","bent"],["pozbawiać","bereave","bereft","bereft"],["błagać","beseech","beseeched, besought","beseeched, besought"],["zakładać się","bet","bet","bet"],["dosiąść","bestride","bestrode","bestridden"],["udać się","betake","betook","betaken"],["licytować","bid","bid","bid"],["wiązać","bind","bound","bound"],["gryźć","bite","bit","bitten"],["krwawić","bleed","bled","bled"],["dmuchać","blow","blew","blown"],["łamać, rozbić","break","broke","broken"],["hodować","breed","bred","bred"],["przynosić","bring","brought","brought"],["transmitować","broadcast","broadcast","broadcast"],["budować","build","built","built"],["palić (się)","burn","burnt/burned","burnt/burned"],["pękać","burst","burst","burst"],["kupować","buy","bought","bought"],["móc, potrafić","can","could","-"],["rzucać","cast","cast","cast"],["łapać","catch","caught","caught"],["strofować","chide","chid","chid/chidden"],["wybierać","choose","chose","chosen"],["rozłupywać","cleave","cleft/clove","cleft/cloven"],["lgnąć","cling","clung","clung"],["ubierać","clothe","clad/clothen","clad/chothen"],["przychodzić, przybywać","come","came","come"],["kosztować","cost","cost","cost"],["pełzać","creep","crept","crept"],["krakać","crow","crew/crowed","crowed"],["ciąć","cut","cut","cut"],["robić","do","did","done"],["rysować","draw","drew","drawn"],["śnić, marzyć","dream","dreamt/dreamed","dreamt/dreamed"],["pić","drink","drank","drunk"],["jechać, prowadzić samochód","drive","drove","driven"],["mieszkać (nie w mówionym)","dwell","dwelt","dwelt"],["jeść","eat","ate","eaten"],["upadać","fall","fell","fallen"],["karmić","feed","fed","fed"],["czuć","feel","felt","felt"],["walczyć","fight","fought","fought"],["znaleźć","find","found","found"],["przebaczać","forgive","forgave","forgiven"],["latać","fly","flew","flown"],["zapominać","forget","forgot","forgotten"],["zamrażać","freeze","froze","frozen"],["dostawać","get","got","got"],["dawać","give","gave","given"],["iść","go","went","gone"],["rosnąć","grow","grew","grown"],["wieszać","hang","hung","hung"],["mieć","have","had","had"],["słyszeć","hear","heard","heard"],["ukrywać się","hide","hid","hidden"],["uderzać","hit","hit","hit"],["trzymać","hold","held","held"],["ranić","hurt","hurt","hurt"],["trzymać","keep","kept","kept"],["wiedzieć, znać","know","knew","known"],["kłaść","lay","laid","laid"],["prowadzić","lead","led","led"],["uczyć się","learn","learnt","learnt"],["opuszczać, wyjeżdżać","leave","left","left"],["pożyczyć","lend","lent","lent"],["pozwolić","let","let","let"],["leżeć","lie","lay","lain"],["kłamać","lie","lied","lied"],["zapalać","light","lit","lit"],["gubić, zgubić","lose","lost","lost"],["robić","make","made","made"],["znaczyć; mieć na myśli","mean","meant","meant"],["spotykać, poznawać","meet","met","met"],["płacić","pay","paid","paid"],["kłaść, położyć","put","put","put"],["czytać","read","read","read"],["jeździć","ride","rode","ridden"],["dzwonić","ring","rang","rung"],["podnosić się","rise","rose","risen"],["biec","run","ran","run"],["mówić, powiedzieć","say","said","said"],["widzieć, zobaczyć","see","saw","seen"],["sprzedać","sell","sold","sold"],["wysyłać","send","sent","sent"],["umieszczać, zachodzić (coś)","set","set","set"],["potrząsnąć","shake","shook","shaken"],["świecić","shine","shone","shone"],["strzelać","shoot","shot","shot"],["pokazać","show","showed","shown"],["zamykać","shut","shut","shut"],["śpiweać","sing","sang","sung"],["tonąć","sink","sank","sunk"],["siedzieć","sit","sat","sat"],["spać","sleep","slept","slept"],["wąchać","smell","smelt/smelled","smelt/smelled"],["mówić","speak","spoke","spoken"],["mknąć","speed","sped","sped"],["literować","spell","spelt/spelled","spelt/spelled"],["spędzać, wydawać","spend","spent","spent"],["rozlewać","spill","spilt","spilt"],["rozdzielać","split","split","split"],["psuć","spoil","spoilt/spoiled","spoilt/spoiled"],["stać","stand","stood","stood"],["kraść","steal","stole","stolen"],["utkwić","stick","stuck","stuck"],["strajkować","strike","struck","struck"],["zamiatać","sweep","swept","swept"],["pływać","swim","swam","swum"],["brać","take","took","taken"],["uczyć","teach","taught","taught"],["rwać","tear","tore","torn"],["powiedzieć","tell","told","told"],["sądzić, myśleć","think","thought","thought"],["rzucać","throw","threw","thrown"],["rozumieć","understand","understood","understood"],["budzić się","wake up","woke up","woken up"],["nosić","wear","wore","worn"],["wygrywać","win","won","won"],["pisać","write","wrote","written"]]
