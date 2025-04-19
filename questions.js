const questions = {
    Kulinarik: [{
        question: "Welches Land hat die höchste Produktion von Olivenöl weltweit?",
        answer: "Spanien",
        points: 100
    }, {
        question: "Wie nennt man die französische Technik, bei der man Fleisch in Rotwein kocht?",
        answer: "Boeuf Bourguignon",
        points: 200
    }, {
        question: "Was ist der Hauptbestandteil des traditionellen polnischen Eintopfs ‚Borschtsch‘?",
        answer: "Rote Beete",
        points: 300
    }, {
        question: "Welches Gewürz wird oft in indischer Küche verwendet und ist bekannt für seine gelbe Farbe?",
        answer: "Kurkuma",
        points: 400
    }, {
        question: "Welche Art von Weizen wird für die Herstellung von Pasta verwendet?",
        answer: "Durum-Weizen",
        points: 500
    }],
    Geografie: [{
        question: "Welcher ist der größte Wüstenstaat der Welt?",
        answer: "Algerien",
        points: 100
    }, {
        question: "Wie heißt die Hauptstadt von Kirgisistan?",
        answer: "Bischkek",
        points: 200
    }, {
        question: "Welcher Fluss ist der längste in Europa?",
        answer: "Die Wolga",
        points: 300
    }, {
        question: "Welche Insel ist die größte im Mittelmeer?",
        answer: "Sizilien",
        points: 400
    }, {
        question: "Welches Land hat die meisten Vulkane der Welt?",
        answer: "Indonesien",
        points: 500
    }],
    Anime: [{
        question: "In welchem Anime kämpfen die Hauptfiguren in einem Spiel, das ihre physischen und geistigen Fähigkeiten auf die Probe stellt?",
        answer: "Sword Art Online",
        points: 100
    }, {
        question: "In welchem Anime erlangen die Charaktere übernatürliche Kräfte durch das Essen von ‚Devil Fruits‘?",
        answer: "One Piece",
        points: 200
    }, {
        question: "Welcher Anime basiert auf der Geschichte von 12 Zodiac-Tieren, die in einem Wettbewerb gegeneinander antreten?",
        answer: "Fruits Basket",
        points: 300
    }, {
        question: "In welchem Anime geht es um den letzten Überlebenden eines mächtigen Magierclans, der seine Kräfte zurückerlangen muss?",
        answer: "Fairy Tail",
        points: 400
    }, {
        question: "Welche Anime-Serie wurde von Hayao Miyazaki produziert und behandelt den Konflikt zwischen Menschen und Natur?",
        answer: "Prinzessin Mononoke",
        points: 500
    }],
    Politik: [{
        question: "Welches Land war das erste, das den Frauen das Wahlrecht gewährte?",
        answer: "Neuseeland",
        points: 100
    }, {
        question: "Wie heißt die Präsidentin von der Republik Indien?",
        answer: "Draupadi Murmu",
        points: 200
    }, {
        question: "In welchem Jahr wurde die europäische Wirtschafts- und Währungsunion (WWU) gegründet?",
        answer: "1999",
        points: 300
    }, {
        question: "Welches Land hat die längste autoritäre Herrschaft in der modernen Geschichte?",
        answer: "Nordkorea",
        points: 400
    }, {
        question: "Welche politische Bewegung wurde 1917 nach der Oktoberrevolution in Russland zur dominierenden Macht?",
        answer: "Bolschewismus",
        points: 500
    }],
    Naturwissenschaften: [{
        question: "Welche Theorie beschreibt, dass die Gravitationskraft nicht durch ein klassisches Feld, sondern durch die Krümmung der Raumzeit vermittelt wird?",
        answer: "Allgemeine Relativitätstheorie",
        points: 100
    }, {
        question: "Was ist die Ursache des Phänomens der Polarlichter?",
        answer: "Solare Winde, die auf das Magnetfeld der Erde treffen",
        points: 200
    }, {
        question: "Was bezeichnet den Prozess, bei dem ein Molekül ein Elektron an ein anderes abgibt?",
        answer: "Oxidation",
        points: 300
    }, {
        question: "Welches Element hat die höchste Elektronegativität?",
        answer: "Fluor",
        points: 400
    }, {
        question: "Was ist das chemische Element, das bei Raumtemperatur als Gas vorliegt und den höchsten Atomradius hat?",
        answer: "Cesium",
        points: 500
    }],
    Allgemeinwissen: [{
        question: "Welches Land besitzt die meisten Nobelpreisträger in der Geschichte?",
        answer: "USA",
        points: 100
    }, {
        question: "Wie heißt der einzige Planet, der nicht nach einer römischen Gottheit benannt wurde?",
        answer: "Erde",
        points: 200
    }, {
        question: "Was ist das einzige Land, das sowohl auf der südlichen als auch auf der nördlichen Hemisphäre liegt?",
        answer: "Ecuador",
        points: 300
    }, {
        question: "Welches Land hat das höchste Bruttoinlandsprodukt (BIP) pro Kopf weltweit?",
        answer: "Luxemburg",
        points: 400
    }, {
        question: "Wie nennt man die Wissenschaft von den Fischen?",
        answer: "Ichthyologie",
        points: 500
    }],
    Sport: [{
        question: "Welche Nation gewann die erste FIFA-Weltmeisterschaft im Jahr 1930?",
        answer: "Uruguay",
        points: 100
    }, {
        question: "Wie viele Goldmedaillen holte Michael Phelps insgesamt bei den Olympischen Spielen?",
        answer: "23",
        points: 200
    }, {
        question: "Welches Land ist Gastgeber der Olympischen Winterspiele 2026?",
        answer: "Italien",
        points: 300
    }, {
        question: "Welcher Sport wurde erstmals 1896 bei den Olympischen Spielen eingeführt?",
        answer: "Basketball",
        points: 400
    }, {
        question: "Wie viele Jahre dauerte die ursprüngliche Tour de France im Jahr 1903?",
        answer: "19 Tage",
        points: 500
    }],
    GirlStuff: [{
        question: "Welches Modehaus ist bekannt für seine berühmte ‚New Look‘-Kollektion aus dem Jahr 1947?",
        answer: "Christian Dior",
        points: 100
    }, {
        question: "Welche berühmte Marke wurde 1949 von Coco Chanel gegründet?",
        answer: "Chanel",
        points: 200
    }, {
        question: "Was war das erste Make-up-Produkt, das von Estée Lauder auf den Markt gebracht wurde?",
        answer: "Cleansing Cream",
        points: 300
    }, {
        question: "Welches Parfüm aus dem Jahr 1921 gilt als das berühmteste der Welt?",
        answer: "Chanel No. 5",
        points: 400
    }, {
        question: "Welcher Designer kreierte die berühmte ‚Conical Bra‘, die Madonna in den 1990er Jahren trug?",
        answer: "Jean-Paul Gaultier",
        points: 500
    }],
    SerienFilme: [{
        question: "Wer spielte die Hauptrolle in ‚The Godfather‘?",
        answer: "Marlon Brando",
        points: 100
    }, {
        question: "In welchem Film tritt ein Dinosaurier als wichtiger Charakter auf und wird von Jeff Goldblum gespielt?",
        answer: "Jurassic Park",
        points: 200
    }, {
        question: "Wer führte Regie bei ‚Pulp Fiction‘?",
        answer: "Quentin Tarantino",
        points: 300
    }, {
        question: "Welcher Schauspieler spielte die Rolle des Jack Dawson in ‚Titanic‘?",
        answer: "Leonardo DiCaprio",
        points: 400
    }, {
        question: "In welchem Film wird der Charakter ‚The Joker‘ von Heath Ledger verkörpert?",
        answer: "The Dark Knight",
        points: 500
    }],
    OnlineGames: [{
        question: "In welchem Spiel müssen die Spieler im 5v5-Modus in einer Arena kämpfen?",
        answer: "League of Legends",
        points: 100
    }, {
        question: "Welches Spiel hat den 'Battle Royale' Modus populär gemacht?",
        answer: "PlayerUnknown's Battlegrounds",
        points: 200
    }, {
        question: "Welches Online-Spiel aus dem Jahr 2004 ist bekannt für seine riesigen Welten und seine umfangreiche Lore?",
        answer: "World of Warcraft",
        points: 300
    }, {
        question: "Welches Spiel ist für seine riesige offene Welt und den Einsatz von Magie bekannt?",
        answer: "The Elder Scrolls V: Skyrim",
        points: 400
    }, {
        question: "Welches Spiel basiert auf einer Serie von rätselhaften Verbrechen und Detektivarbeit?",
        answer: "L.A. Noire",
        points: 500
    }],
    Weltgeschichte: [{
        question: "Welches antike Reich war bekannt für die Pyramiden und Sphinx?",
        answer: "Ägypten",
        points: 100
    }, {
        question: "Was war der Hauptgrund für den Ausbruch des Ersten Weltkriegs?",
        answer: "Das Attentat auf Erzherzog Franz Ferdinand",
        points: 200
    }, {
        question: "Welcher deutsche Kaiser führte das Deutsche Reich in den Ersten Weltkrieg?",
        answer: "Wilhelm II.",
        points: 300
    }, {
        question: "Wer war der Hauptarchitekt der Französischen Revolution?",
        answer: "Maximilien Robespierre",
        points: 400
    }, {
        question: "Welcher Historiker prägte die Theorie des ‚Endes der Geschichte‘ nach dem Kalten Krieg?",
        answer: "Francis Fukuyama",
        points: 500
    }],
    Rätsel: [{
        question: "Ich kann alles erzählen, aber nie sprechen. Was bin ich?",
        answer: "Ein Buch",
        points: 100
    }, {
        question: "Was ist immer vor dir, aber kann niemals gesehen werden?",
        answer: "Die Zukunft",
        points: 200
    }, {
        question: "Je mehr du wegnimmst, desto größer wird es. Was ist das?",
        answer: "Ein Loch",
        points: 300
    }, {
        question: "Welche Zahl folgt diesem Muster? 1, 4, 9, 16, ___",
        answer: "25",
        points: 400
    }, {
        question: "Ich habe eine Schulter, aber keinen Kopf. Was bin ich?",
        answer: "Ein Anzug",
        points: 500
    }]
};