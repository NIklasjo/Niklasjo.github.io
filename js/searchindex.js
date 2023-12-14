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
   this[database_length++] = new SearchPage("Startsida.html", "", "Copyright © 2024 KNS Consulting AB  All Rights Reserved  Utforska våra skräddarsydda Google Sheets-lösningar  Fakturerings-, Ordersystem och CRM, utvecklade för att optimera och effektivisera affärsprocesser  Utforska våra anpassningsbara tjänster inom Google Sheets och Excel, från detaljerad automatisering och dataanalys till support för både små och stora behov  Utforska våra projekt inom elinstallation  en översikt av genomförda projekt som återspeglar vår gedigna erfarenhet och kapacitet i branschen  Utforska vårt utbud av tjänster inom projektledning och bygg, anpassade för att möta dina specifika behov, med fokus på kvalitet och effektivitet   ", "");
   return this;
}
