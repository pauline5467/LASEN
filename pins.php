<?php
require 'get_pins.php'; // Inclusion du fichier de connexion

// Vérifier si une requête de recherche est envoyée
$search = isset($_GET['search']) ? $_GET['search'] : '';
$association = isset($_GET['association']) ? $_GET['association'] : '';

// Construire la requête de base
$sql = "SELECT * FROM pins WHERE nom LIKE :search OR description LIKE :search OR association LIKE :search OR date LIKE :search";


// Préparer et exécuter la requête
$stmt = $conn->prepare($sql);

// Lier les valeurs
$stmt->bindValue(':search', '%' . $search . '%');
$stmt->execute();
$pins = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LASEN</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Collection de Pin's</h1>
        <nav>
            <ul>
                <li><a href="index.html">Accueil</a></li>
                <li><a href="FalGame/index.html">Page des Jeux</a></li>
                <li><a href="about.html">A propos de nous</a></li>
                <li><a href="#contact">Nous Contacter</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <!-- Formulaire de recherche -->
        <section class="search-bar">
            <form method="GET" action="pins.php">
                <input type="text" name="search" placeholder="Rechercher un pin's..." value="<?= htmlspecialchars($search) ?>">


                <button type="submit">Rechercher</button>
            </form>
        </section>

        <section class="pins-container">
            <?php if (count($pins) > 0): ?>
                <?php foreach ($pins as $pin): ?>
                    <div class="pin">
                        <img src="<?= htmlspecialchars($pin['image']) ?>" alt="<?= htmlspecialchars($pin['nom']) ?>">
                        <h2><?= htmlspecialchars($pin['nom']) ?></h2>
                        <p><?= htmlspecialchars($pin['description']) ?></p>
                        <p><strong>Date :</strong> <?= htmlspecialchars($pin['date']) ?></p>
                        <!-- <p><strong>Lieu :</strong> <?= htmlspecialchars($pin['lieu']) ?></p> -->
                        <p><strong>Association :</strong> <?= htmlspecialchars($pin['association']) ?></p>
                    </div>
                <?php endforeach; ?>
            <?php else: ?>
                <p>Aucun pin's disponible avec ces critères.</p>
            <?php endif; ?>
        </section>
    </main>

    <footer>
        <section id="contact" class="section">
            <h2>Contactez-nous</h2>
            <p>Pour toute question, n'hésitez pas à nous contacter par <a href="mailto:lasen.nancy@gmail.com">mail</a></p>
            <br />
            <p>Retrouvez-nous sur <a href="https://www.instagram.com/lasen__54?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">Instagram</a> et <a href="https://www.facebook.com/groups/201132616753971/">Facebook</a> !</p>
        </section>
    </footer>
</body>
</html>
