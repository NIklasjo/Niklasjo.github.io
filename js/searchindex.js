// search index for WYSIWYG Web Builder
var database_length = 0;

function SearchPage(url, title, keywords, description)
{
   this.url = url;
   this.title = title;
   this.keywords = keywords;
   this.description = description;
   return this;
}

function SearchDatabase()
{
   database_length = 0;
   this[database_length++] = new SearchPage("index.html", "KNS Consulting AB - Projektledning & IT-Tjänster", "Copyright © 2024 KNS Consulting AB  All Rights Reserved  Specialiserad på projektledning för elinstallationer och IT-tjänster med fokus på Google Sheets och Excel Med gedigen erfarenhet i branschen erbjuder vi ett brett utbud av tjänster, inklusive projekt- och byggledning, beställarstöd, projektadministration samt skräddarsydda IT-lösningar för effektiv datahantering och analys Verksamheten inriktar sig främst på el- och byggbranschen i Mälardalen, men erbjuder också IT-stöd som förbättrar kundernas produktivitet och processhantering KNS Consulting är synonymt med professionalism och kvalitet, och levererar skräddarsydda, pålitliga lösningar  Mobil  072-445 68 78  Email  info@knsc.se     ", "KNS Consulting AB - Projektledning och IT-tjänster i Uppsala och Stockholm.");
   this[database_length++] = new SearchPage("Integritetspolicy.html", "Integritetspolicy - KNS Consulting AB", "Copyright © 2024 KNS Consulting AB  All Rights Reserved   ", "KNS Consulting AB s integritetspolicy förklarar vår hantering av personuppgifter och dataskydd.");
   this[database_length++] = new SearchPage("Om-KNS-Consulting-AB.html", "Om Niklas Johansson - KNS Consulting AB", "Copyright © 2024 KNS Consulting AB  All Rights Reserved   ", "Lär känna Niklas Johansson, grundaren av KNS Consulting AB och erfaren projektledare inom el och IT.");
   this[database_length++] = new SearchPage("Referensprojekt-bygg.html", "Referensprojekt inom Bygg och Projektledning", "Copyright © 2024 KNS Consulting AB  All Rights Reserved   ", "Upptäck KNS Consulting AB s framgångsrika referensprojekt inom bygg och projektledning.");
   this[database_length++] = new SearchPage("Google-Sheets-Projekt.html", "Google Sheets Projekt: Faktureringssystem Orderhantering CRM", "Copyright © 2024 KNS Consulting AB  All Rights Reserved   ", "Effektiva Google Sheets Projekt-lösningar, faktureringssystem, CRM och orderhantering av KNS AB.");
   this[database_length++] = new SearchPage("Tjanster-inom-bygg-och-projektledning.html", "Tjänster inom bygg och projektledning – Stockholm & Uppsala", "Copyright © 2024 KNS Consulting AB  All Rights Reserved   ", "Professionella tjänster inom bygg- och projektledning från KNS Consulting AB.");
   this[database_length++] = new SearchPage("Tjanster-Google-Sheets-och-Excel.html", "Google Sheets Lösningar & Excel Expertis | KNS AB", "Copyright © 2024 KNS Consulting AB  All Rights Reserved   ", "KNS Consulting AB erbjuder skräddarsydda lösningar i Google Sheets Lösningar och Excel Expertis");
   this[database_length++] = new SearchPage("Google-Sheets-Framför-Excel.html", "Google Sheets eller Excel: Varför Välja Sheets? | KNS AB", "Copyright © 2024 KNS Consulting AB  All Rights Reserved   ", "Utforska varför Google Sheets kan vara ett föredraget val över Excel för vissa projekt och användningsområden. KNS Consulting AB belyser de unika fördelarna med Google Sheets för samarbete, anpassning och molnbaserad effektivisering.");
   return this;
}
