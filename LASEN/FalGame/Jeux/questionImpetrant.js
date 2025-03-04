const questions = [
    {
        question: "Top ! Je suis une année marquée par un évènement important dans l'histoire des étudiants français.",
        hints: [
            "Indice 1 : Au mois de juin de cette année une délégation d'étudiants français participe aux Fêtes du Huitième Centenaire de l'Université de Bologne en Italie.",
            "Indice 2 : A leur retour une idée germe : celle de doter les étudiants français d'une coiffe distinctive.",
            "Indice 3 : Cette coiffe un béret est adoptée grâce à l'initiative de l'Association Générale des étudiants de Paris.",
            "Indice 4 : Cette coiffe est officialisée lors d'une cérémonie qui a lieu le 20 décembre au Théâtre Beaumarchais à Paris.",
            "Indice ultime : Cette année correspond également à la création du célèbre béret étudiant qui est devenu un symbole dans le milieu universitaire français."
        ],
        answer: "1888"
    },
    {
        question: "Top ! Je suis une période historique marquée par un conflit mondial et des restrictions imposées par l'occupant.",
        hints: [
            "Indice 1 : Pendant cette période l'occupant allemand impose de nombreuses restrictions sur la vie quotidienne en France y compris dans le milieu étudiant.",
            "Indice 2 : Une coiffe étudiante traditionnelle la faluche est interdite car jugée trop nationaliste par l'occupant.",
            "Indice 3 : Cette coiffe porteuse d'insignes pouvant transmettre des messages codés est perçue par les Allemands comme un symbole de résistance et un moyen de rassemblement.",
            "Indice 4 : Une tolérance est accordée pour le port de la faluche uniquement le jour de la Saint-Nicolas une exception pendant cette période sombre de l'occupation.",
            "Indice ultime : Ce conflit global qui a duré de 1939 à 1945 a entraîné de nombreuses privations et répressions mais a aussi vu naître de nombreuses formes de résistance."
        ],
        answer: "La Seconde Guerre mondiale"
    },
    {
        question: "Top ! Je suis une date marquante dans l'histoire de la résistance étudiante française.",
        hints: [
            "Indice 1 : A cette date la France est sous occupation allemande et les manifestations de résistance se multiplient notamment dans la capitale.",
            "Indice 2 : Ce jour-là des étudiants décident de défier l'occupant en manifestant sur les Champs-élysées.",
            "Indice 3 : Portant la faluche symbole étudiant ces jeunes osent défiler à Paris en hommage à une autre grande guerre qui s'était achevée le même jour 22 ans plus tôt.",
            "Indice 4 : L'occupant allemand surpris par cette audace ouvre le feu sur les manifestants marquant cet évènement comme un acte de résistance significatif.",
            "Indice ultime : Une plaque commémorative près de l'Arc de Triomphe rend aujourd'hui hommage à ce moment de bravoure étudiante contre l'occupation."
        ],
        answer: "Le 11 novembre 1940"
    },
    {
        question: "Top ! Je suis un mouvement de contestation majeur qui a bouleversé la société française.",
        hints: [
            "Indice 1 : A cette époque des étudiants ouvriers et intellectuels se révoltent contre les structures autoritaires et les normes établies dans divers domaines de l'éducation à la politique.",
            "Indice 2 : Ce mouvement né à Paris prend rapidement une ampleur nationale et incarne un rejet massif de tout ce qui est perçu comme un carcan que ce soit les traditions les autorités ou les symboles sociaux.",
            "Indice 3 : Parmi ces symboles rejetés on retrouve la coiffe étudiante longtemps portée avec fierté mais désormais critiquée pour être réservée à une élite perçue comme favorisée financièrement.",
            "Indice 4 : Ce soulèvement qui débute par des manifestations étudiantes mais s'étend à une grève générale marque profondément la France et conduit à de nombreux changements sociaux et culturels.",
            "Indice ultime : Je suis le mois et l'année d'une révolte historique qui fait encore écho aujourd'hui dans l'esprit des mouvements sociaux et contestataires."
        ],
        answer: "Mai 68"
    },
    {
        question: "Top ! Je suis une année marquante pour la tradition estudiantine française.",
        hints: [
            "Indice 1 : Cette année-là un évènement célébrant une coiffe universitaire emblématique utilisée par les étudiants depuis un siècle a lieu à Reims.",
            "Indice 2 : Pour marquer le centenaire de cette coiffe un nouveau code plus détaillé est rédigé intégrant notamment les particularités de certaines traditions régionales notamment celles de Montpellier.",
            "Indice 3 : Cette année voit également la tenue d'un grand congrès des 100 ans de la faluche réunissant de nombreux étudiants de toute la France à Reims pour célébrer cette tradition.",
            "Indice ultime : Depuis cet anniversaire un congrès dédié à cette coiffe et à ses traditions est organisé chaque année dans une ville différente."
        ],
        answer: "1988"
    },
    {
        question: "Top ! Je suis une année marquante dans l'unification des traditions estudiantines en France.",
        hints: [
            "Indice 1 : Avant cette année les règles et symboles liés à la coiffe étudiante se transmettaient oralement et variaient considérablement selon les universités.",
            "Indice 2 : Le 8 mars de cette année une première synthèse de ces codes largement inspirée des traditions toulousaines est rélisée à Lille pour harmoniser les pratiques.",
            "Indice 3 : En décembre de la même année cette synthèse est adoptée comme code national lors d'une réunion à Toulouse marquant un moment clé dans la codification des traditions.",
            "Indice 4 : C'est également à ce moment-là que la notion de 'Grand Maître' est introduite pour désigner la figure de référence au sein de cette communauté étudiante.",
            "Indice ultime : Cette année est le point de départ de l'uniformisation des règles régissant la faluche dans toute la France."
        ],
        answer: "1986"
    },
    {
        question: "Top ! Je suis un conflit qui a bouleversé la vie de nombreux étudiants français et bien au-delà.",
        hints: [
            "Indice 1 : Pendant cette période une génération entière de jeunes hommes y compris des étudiants est appelée à se battre sur les champs de bataille.",
            "Indice 2 : En raison de la mobilisation générale la vie universitaire est profondément affectée et une tradition estudiantine emblématique la faluche connaît un fort déclin.",
            "Indice 3 : La faluche symbole d'appartenance universitaire passe au second plan alors que les étudiants se concentrent sur le front laissant de côté leurs activités académiques et festives.",
            "Indice 4 : Ce conflit qui s'étend de 1914 à 1918 marque un tournant dans l'histoire étudiante bouleversant des milliers de vies et interrompant la transmission des traditions.",
            "Indice ultime : Je suis le premier conflit mondial du XXe siècle connu pour ses tranchées ses combats acharnés et son impact durable sur la société française y compris chez les étudiants."
        ],
        answer: "La Première Guerre mondiale"
    },
    {
        question: "Top ! Je suis une année marquante pour une tradition estudiantine qui s'est répandue à travers la France.",
        hints: [
            "Indice 1 : Cette année-là un grand évènement universitaire se tient à Montpellier rassemblant des étudiants venus de toute la France pour célébrer le VIe centenaire de leur prestigieuse université.",
            "Indice 2 : A cette occasion une coiffe encore vierge de tout symbole se répand largement parmi les étudiants devenant rapidement un signe de ralliement.",
            "Indice 3 : Par la suite cette coiffe se dote de nombreux éléments symboliques : un ruban circulaire des insignes et des rubans de couleur marquant l'appartenance à une discipline ou à un groupe.",
            "Indice 4 : Cette année est donc synonyme de la généralisation du port de la faluche dans les universités françaises lors d'une grande célébration tenue du 22 au 25 mai.",
            "Indice ultime : Je suis l'année où cette tradition prend son envol dans l'un des plus anciens centres universitaires de France."
        ],
        answer: "1890"
    },
    {
        question: "Top ! Je suis une année importante pour une association étudiante scientifique en France.",
        hints: [
            "Indice 1 : Cette année marque la naissance d'une association regroupant des étudiants passionnés de sciences dans une grande ville universitaire de l'est de la France.",
            "Indice 2 : Basée à la faculté des sciences de Nancy cette association porte un nom qui reflète son engagement dans la promotion des sciences parmi les �tudiants.",
            "Indice 3 : Cette association appelée LASEN est également liée au mouvement faluchard portant fièrement la coiffe estudiantine traditionnelle.",
            "Indice 4 : Depuis sa création LASEN joue un rôle important dans la vie étudiante nancéienne en offrant un espace de rencontre et de partage pour les étudiants en sciences.",
            "Indice ultime : Je suis l'année où cette association étudiante scientifique nancéienne voit le jour."
        ],
        answer: "1992"
    },
    {
        question: "Top ! Je suis une année marquée par un évènement mondial qui a bouleversé la vie sociale y compris chez les étudiants.",
        hints: [
            "Indice 1 : Cette année-là une pandémie se déclare provoquant des confinements et un ralentissement général de la vie universitaire et associative.",
            "Indice 2 : Parmi les traditions affectées par cette crise sanitaire la faluche connaît un fort déclin car les rassemblements et évènements festifs étudiants sont annulés.",
            "Indice 3 : Bien que ce déclin soit marqué il n'est pas considéré comme officiel ou permanent laissant l'espoir que cette tradition puisse reprendre après la crise.",
            "Indice 4 : Cette année est également marquée par l'émergence du télétravail et des cours en ligne perturbant la vie en campus et la transmission des traditions étudiantes.",
            "Indice ultime : Je suis l'année où le COVID-19 a changé profondément la vie universitaire et affecté les symboles étudiants comme la faluche."
        ],
        answer: "2020"
    }
];



let currentQuestion = 0;
let currentHint = 0;

function displayQuestion() {
    document.getElementById('question').innerText = questions[currentQuestion].question;
    document.getElementById('hints').innerHTML = '';
    currentHint = 0;
    document.getElementById('result').innerText = '';
    document.getElementById('user-answer').value = '';
}

function showHint() {
    if (currentHint < questions[currentQuestion].hints.length) {
        const hint = questions[currentQuestion].hints[currentHint];
        const li = document.createElement('li');
        li.textContent = hint;
        document.getElementById('hints').appendChild(li);
        currentHint++;
    } else {
        alert("Tous les indices ont �t� montr�s.");
    }
}

function checkAnswer() {
    const userAnswer = document.getElementById('user-answer').value.trim();
    const correctAnswer = questions[currentQuestion].answer;
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        document.getElementById('result').innerText = "Bonne r�ponse !";
    } else {
        document.getElementById('result').innerText = `Faux ! La bonne r�ponse �tait : ${correctAnswer}.`;
    }
}

document.getElementById('next-btn').addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        document.getElementById('question-section').innerHTML = "<p>Le quiz est termin� !</p>";
        document.getElementById('next-btn').style.display = 'none';
    }
});

document.getElementById('show-hint-btn').addEventListener('click', showHint);
document.getElementById('submit-btn').addEventListener('click', checkAnswer);

// Initialisation du quiz
displayQuestion();
