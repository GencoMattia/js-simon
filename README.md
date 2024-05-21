# js-simon

Descrizione:
Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

Consigli del giorno:
- Pensate prima in italiano.
- Dividete in piccoli problemi la consegna.
- I ndividuate gli elementi di cui avete bisogno per realizzare il programma.


-----PASSAGGI-----

- creare una struttura base in html
    - container > article * 5 > span (in cui andranno i numeri)
        - possibilmente aggiungere article e span attraverso js in caso si volessero aumentare i numeri
    -  creare un bottone per generare i 5 numeri
    - in js
        - attaccare enet.listener al button
            - generare 5 numeri unici random e aggiungerli ad un array
            - stampare i numeri in pagina
            - impostare un timeout di 30 secondi
                - funzione: dopo 30 secondi metti in display none i numeri
                - mandare un prompt for 5 per chiedere numeri all'utente
                - confrontare i numeri utente con gli elementi array numeri casuali
                    - se numero giusto = 1 punto e aggiungi classe verde al numero e display block
                    - se numero sbagliato = no punti e aggiungi classe rossa al numero e display block