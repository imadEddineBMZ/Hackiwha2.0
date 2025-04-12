// utils/levelCalculator.js
export function calculateLevel(points) {
    if (points >= 1000) return 'Expert';
    if (points >= 600) return 'Avancé';
    if (points >= 400) return 'Intermédiaire';
    if (points >= 200) return 'Élémentaire';
    return 'Débutant';
  }
  