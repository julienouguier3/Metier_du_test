# Tests_unitaires
Questions

Qu'est-ce qu'un test ?
Il s'agit d'une évaluation du code, 
Corr : Eviter les bugs, les plantages, les comportement inattendu.

A quoi servent les tests ?
Permet de vérifier si tout fonctionne correctement avec de le lancer en production.
Corr :  

Y a t-il plusieurs tests.
Test unitaire, Test de production et tests d'acceptation 
Corr : Test unitaire, Test d'intégration test system tests d'acceptation etc

Intuitivement, à quelles bonnes pratiques de conception de tests, vous pouvez penser ?
Corr : 
• Charger « trop » de code pour un test unitaire : ceci dépend souvent de la
conception du code, charger trop de code est souvent signe de la présence de
code trop complexe ou de structures trop peu découplées.

• Dépendre de services extérieurs : une dépendance à un service extérieur conduira
à un test parfois en erreur, parfois non, suivant la disponibilité de cette
dépendance. On préfèrera l’utilisation de mocks (stub, spy, fake, mock) pour éviter
cela.

• Utiliser des try...catch : dans les tests unitaires, on s’attend à telle ou telle erreur
bien spécifique. On privilégie (quand le framework le permet) l’assertion sur
le bon déclenchement d’une erreur.

Qu’est-ce qui pourrait être une mauvaise pratique de conception de test?
Corr : 
• Les tests doivent être restreints (dans leur scope fonctionnel) : on ne cherche pas à
valider 50 choses en un seul test !

• Ils doivent être rapides à l’exécution : pas de wait(60s) dans un test unitaire !

• Ils doivent être automatisés : pas d’exécution manuelle de tests unitaires.

• Les tests sont nommés et organisés clairement : les frameworks permettent
aujourd’hui de parfaitement
