const questions = {
    Kulinarik: [
        { question: "Was ist das Hauptgewürz in der traditionellen griechischen Tsatsiki-Sauce?", answer: "Knoblauch", points: 100 },
        { question: "Aus welchem Land stammen Nudeln ursprünglich?", answer: "China", points: 200 },
        { question: "Welche Fleischsorte wird typischerweise für die Zubereitung von Filet Mignon verwendet?", answer: "Rinderfilet", points: 300 },
        { question: "Was ist das wichtigste Kriterium bei der Herstellung von echtem Parmesan?", answer: "Lange Reifung", points: 400 },
        { question: "Welches französische Gericht besteht hauptsächlich aus geschichtetem Kartoffelpüree und Sahne?", answer: "Gratin Dauphinois", points: 500 }
    ],
    Geografie: [
        { question: "Welcher Fluss fließt durch London?", answer: "Themse", points: 100 },
        { question: "Welcher Kontinent hat die meisten Länder?", answer: "Afrika", points: 200 },
        { question: "Welche Insel ist die größte im Mittelmeer?", answer: "Sizilien", points: 300 },
        { question: "In welchem Land liegt die Wüste Namib?", answer: "Namibia", points: 400 },
        { question: "Was ist die Hauptstadt von Bolivien?", answer: "Sucre", points: 500 }
    ],
    Anime: [
        { question: "Wie heißt der Hauptcharakter in 'Bleach'?", answer: "Ichigo Kurosaki", points: 100 },
        { question: "Welcher Anime spielt in einer Welt, die nach dem ‚Titanfall‘-Verfahren von riesigen, menschenfressenden Wesen beherrscht wird?", answer: "Attack on Titan", points: 200 },
        { question: "Welche Anime-Serie folgt der Geschichte von vier Freunden, die die Welt retten wollen, indem sie ein mysteriöses Artefakt suchen?", answer: "Fullmetal Alchemist", points: 300 },
        { question: "Was ist der Name des Pokémon, das in ‚Pokémon Go‘ das seltenste ist?", answer: "Unown", points: 400 },
        { question: "Wie nennt man den sekundären Hauptcharakter auch?", answer: "Deuteragonist", points: 500 }
    ],
    Politik: [
        { question: "Wer war der erste Präsident der Vereinigten Staaten?", answer: "George Washington", points: 100 },
        { question: "Welches Land hat den ersten Schritt zu den Vereinten Nationen im Jahr 1945 gesetzt?", answer: "USA", points: 200 },
        { question: "Welcher US-Präsident führte das Land durch die größten Teile des Zweiten Weltkriegs?", answer: "Franklin D. Roosevelt", points: 300 },
        { question: "In welchem Jahr wurde die Berliner Mauer errichtet?", answer: "1961", points: 400 },
        { question: "Wer war der erste weibliche Premierminister von Großbritannien?", answer: "Margaret Thatcher", points: 500 }
    ],
    Naturwissenschaften: [
        { question: "Was ist der chemische Name für Wasser?", answer: "H2O", points: 100 },
        { question: "Welches Element hat das chemische Symbol Fe?", answer: "Eisen", points: 200 },
        { question: "Wie nennt man den Prozess, bei dem Pflanzen Sonnenlicht in Energie umwandeln?", answer: "Photosynthese", points: 300 },
        { question: "Wie viele Chromosomen hat der Mensch?", answer: "46", points: 400 },
        { question: "Wie nennt man den Vorgang, bei dem Wasser von einem festen in einen gasförmigen Zustand übergeht?", answer: "Sublimation", points: 500 }
    ],
    Allgemeinwissen: [
        { question: "Wie viele Planeten gibt es in unserem Sonnensystem?", answer: "8", points: 100 },
        { question: "Wie heißt die Währung in Japan?", answer: "Yen", points: 200 },
        { question: "Was ist das viertgrößte Land der Welt?", answer: "China", points: 300 },
        { question: "Wer erfand das Telefon?", answer: "Alexander Graham Bell", points: 400 },
        { question: "Wer hat Uranium entdeckt?", answer: "Martin Heinrich Klaproth", points: 500 }
    ],
    Sport: [
        { question: "Wie viele Spieler befinden sich in einer Fußballmannschaft auf dem Spielfeld?", answer: "11", points: 100 },
        { question: "In welchem Jahr wurde die erste Fußball-Weltmeisterschaft ausgetragen?", answer: "1930", points: 200 },
        { question: "Wie viele Grand-Slam-Turniere gibt es im Tennis?", answer: "4", points: 300 },
        { question: "Welches Land hat bei den Olympischen Spielen 2008 in Peking die meisten Goldmedaillen gewonnen?", answer: "China", points: 400 },
        { question: "Wie lange dauert ein Rugby-Spiel?", answer: "80 Minuten", points: 500 }
    ],
    GirlStuff: [
        { question: "Welches Modehaus ist bekannt für das berühmte ‚Chanel No. 5‘ Parfüm?", answer: "Chanel", points: 100 },
        { question: "Welche Frucht wird in der Beautybranche oft als 'Frucht der Liebe' bezeichnet?", answer: "Granatapfel", points: 200 },
        { question: "Wie viele Schichten hat eine klassische französische Torte ‚Millefeuille‘?", answer: "3", points: 300 },
        { question: "Was ist die teuerste und wirkungsvollste Creme der Welt?", answer: "N°1 von Med Beauty Swiss", points: 400 },
        { question: "Was ist der Begriff für das Symptom des Haarausfalls bei Frauen nach der Geburt?", answer: "Postpartale Alopezie", points: 500 }
    ],
    SerienFilme: [
        { question: "Wer spielte die Hauptrolle in dem Film ‚Titanic‘?", answer: "Leonardo DiCaprio", points: 100 },
        { question: "Welcher Schauspieler spielte ‚Iron Man‘ im Marvel Cinematic Universe?", answer: "Robert Downey Jr.", points: 200 },
        { question: "Welche Serie handelt von einem ehemaligen Lehrer, der Drogen herstellt?", answer: "Breaking Bad", points: 300 },
        { question: "Wer spielte die Rolle des Joker im Film ‚The Dark Knight‘?", answer: "Heath Ledger", points: 400 },
        { question: "In welchem Jahr wurde der erste ‚Star Wars‘ Film veröffentlicht?", answer: "1977", points: 500 }
    ],
    OnlineGames: [
        { question: "In welchem Online-Spiel kämpfen zwei Teams aus je fünf Spielern gegeneinander, wobei ein Team die Bombe platziert und das andere sie entschärfen muss?", answer: "Counter-Strike: Global Offensive", points: 100 },
        { question: "Welches beliebte Online-Spiel hat einen Modus namens ‚Heist‘, bei dem Teams versuchen, ein Bankkonto zu plündern?", answer: "Payday 2", points: 200 },
        { question: "In welchem Jahr erschien der Champion \"Kalista\" bei League of Legends?", answer: "2014", points: 300 },
        { question: "In welchem Spiel müssen die Spieler eine Insel überleben, die von wilden Tieren und gefährlichen Bedingungen geprägt ist?", answer: "ARK: Survival Evolved", points: 400 },
        { question: "In welchem Spiel können Spieler in einer offenen Welt Zombies bekämpfen und dabei ein eigenes Fahrzeug steuern?", answer: "DayZ", points: 500 }
    ],
    Weltgeschichte: [
        { question: "Welcher berühmte Feldherr war für die Eroberung des antiken Roms verantwortlich?", answer: "Julius Caesar", points: 100 },
        { question: "Welche Zivilisation war für den Bau der Pyramiden verantwortlich?", answer: "Ägypter", points: 200 },
        { question: "In welchem Jahr begann der kalte Weltkrieg?", answer: "1947", points: 300 },
        { question: "Was war der Hauptauslöser des Zweiten Weltkriegs?", answer: "Der Überfall auf Polen durch Deutschland", points: 400 },
        { question: "Wer war der letzte Kaiser des Heiligen Römischen Reiches, dessen Absetzung das Ende des Reiches markierte?", answer: "Franz II", points: 500 }
    ],
    Rätsel: [
        { question: "Welcher Monat hat nur 28 Tage?", answer: "Alle Monate", points: 100 },
        { question: "Ich kann alles essen, aber selbst nie etwas trinken. Was bin ich?", answer: "Feuer", points: 200 },
        { question: "Ich habe Flügel, aber keine Federn. Was bin ich?", answer: "Ein Flugzeug", points: 300 },
        { question: "Welches Wort wird immer kürzer, je länger es geschrieben wird?", answer: "Kürzer", points: 400 },
        { question: "Was kommt einmal in einer Minute, zweimal in einem Moment, aber niemals in tausend Jahren?", answer: "Der Buchstabe ‚M‘", points: 500 }
    ]
};
