document.addEventListener("DOMContentLoaded", () => {
    const data = [
        { word: "Architecture", image: "equerre_compas.jpg" },
        { word: "Arts du spectacle", image: "masque_comedie.jpg" },
        { word: "Arts numériques", image: "arobase.jpg" },
        { word: "Audiovisuel", image: "clap_cinema.jpg" },
        { word: "Bachelor", image: "beta.jpg" },
        { word: "Beaux-arts, Arts plastiques", image: "palette_pinceau.jpg" },
        { word: "Chirurgie dentaire", image: "molaire.jpg" },
        { word: "Classes préparatoires", image: "chouette_bicephale.jpg" },
        { word: "Droit", image: "glaive_balance.jpg" },
        { word: "Écoles d’ingénieurs", image: "etoile_foudre.jpg" },
        { word: "Études courtes de santé", image: "squelette.jpg" },
        { word: "Filières sportives", image: "coq.jpg" },
        { word: "Géographie", image: "globe.jpg" },
        { word: "Histoire", image: "casque_pericles.jpg" },
        { word: "Histoire de l’art et Archéologie", image: "tete_sphinx.jpg" },
        { word: "Infirmier", image: "caducée_infirmier.jpg" },
        { word: "Médecine", image: "caducée_medecine.jpg" },
        { word: "MEEF", image: "plume.jpg" },
        { word: "Musique, Musicologie", image: "lyre.jpg" },
        { word: "Œnologie", image: "grappe_raisin.jpg" },
        { word: "Ostéopathie", image: "sphenoide.jpg" },
        { word: "Paramédical", image: "ciseaux.jpg" },
        { word: "PASS", image: "tete_mort.jpg" },
        { word: "Pharmacie", image: "caducée_pharmacie.jpg" },
        { word: "Philosophie", image: "phi.jpg" },
        { word: "Préparateurs en pharmacie", image: "mortier_pilon.jpg" },
        { word: "Psychologie", image: "psi.jpg" },
        { word: "Sage-femme", image: "ankh.jpg" },
        { word: "Sciences", image: "palmes_chene_laurier.jpg" },
        { word: "Sciences politiques", image: "parapluie.jpg" },
        { word: "Sociologie", image: "grenouille.jpg" },
        { word: "Vétérinaire", image: "tete_cheval.jpg" }
    ];
    

    const wordsContainer = document.getElementById("words");
    const imagesContainer = document.getElementById("images");

    data.forEach((item, index) => {
        // Créer un mot draggable
        let wordDiv = document.createElement("div");
        wordDiv.textContent = item.word;
        wordDiv.classList.add("word");
        wordDiv.draggable = true;
        wordDiv.id = `word-${index}`;
        wordDiv.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("text", index);
        });
        wordsContainer.appendChild(wordDiv);

        // Créer une boîte d'image
        let imageBox = document.createElement("div");
        imageBox.classList.add("image-box");
        imageBox.id = `image-${index}`;
        imageBox.addEventListener("dragover", (e) => e.preventDefault());
        imageBox.addEventListener("drop", (e) => {
            e.preventDefault();
            let draggedIndex = e.dataTransfer.getData("text");
            if (draggedIndex == index) {
                imageBox.classList.add("correct");
            } else {
                imageBox.classList.add("wrong");
                setTimeout(() => imageBox.classList.remove("wrong"), 1000);
            }
        });

        let img = document.createElement("img");
        img.src = item.image;
        imageBox.appendChild(img);
        imagesContainer.appendChild(imageBox);
    });
});
