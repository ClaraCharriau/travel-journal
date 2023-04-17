export interface Post {
    id: number;
    country: string;
    city: string;
    startDate: Date;
    returnDate: Date;
    mainPicture: string;
    pictureGallery: string[];
    description: string;
    positivePoints: string[];
    negativePoints: string[];
    advices: string[];
    summary: string;
    highlightTravel: boolean;
}

// un id
// un pays
// une ville
// une date de départ
// une date de retour
// une image principale
// un tableau d’images secondaire
// un texte concernant le voyage
// un tableau de points positifs
// un tableau de points négatif
// un tableau de conseil
// un texte résumé
// un boolean indiquant s’il s’agit de l’article 
//à afficher en haut de la home