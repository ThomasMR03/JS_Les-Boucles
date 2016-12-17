/*var i = 1; //On initialise le compteur
while(i < 10) // tant que i<10...
{
	//On affiche un message
	alert(i);
	i++;
}*/

/*var i;
var somme = 0; //variable pour le resultat
for (i=1; i<=10; i++)
somme += i; //on ajoute la valeur du compteur à notre resultat
alert(somme);*/

/*var saisie;
do
saisie = prompt("Entrez un nom, ou cliquez sur Annuler pour quitter");
while(saisie != null && saisie != '');
//while(saisie); // ca revient au meme que dans l'exemple ci-dessus*/

/*var i;
for(i=0; 3*i<=10; i++)
alert(3*i); //Affichage des multiples de 3; Si 10 dépasser = Arret !*/

// initialisation
var zCode = "<liste>\n";
var saisie;

// boucle
while(saisie = prompt("Contenu de la puce ?"))
        zCode += "<puce>" + saisie + "</puce>\n";

// finitions
if(zCode == '<liste>\n')
        zCode = '';
else
        zCode += "</liste>";

alert(zCode);